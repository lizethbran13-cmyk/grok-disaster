// Super Thunder Expansion (DLC #26): ACID STORM, DRAGON ATTACK, DINO DESTRUCTION + ownership gate
// Unlocked by localStorage 'grokDLC.disaster.super_thunder_expansion' (set by the Grok Arcade DLC Shop, same origin).
// Co-op: the host's pack is shared with guests for that session (guests render whatever the host simulates).
import * as THREE from 'three';
import { G } from './gfx.js';
import { FX, puff, sparks, debris, shockwave } from './fx.js';
import { GEO } from './models.js';
import { M, glow } from './mats.js';
import { UNDER, groundAt } from './world.js';
import { DZ, HOOKS, shelter, pickAim, addHaz, topY, d2, segDist, hatchTargets, indoorTargets, highTargets, outdoorPlayers } from './disasters.js';
import { makeDragon, animDragon, makeTrike, makeRex, animDino } from './dlcmodels.js';

export const KEY = 'grokDLC.disaster.super_thunder_expansion', ARCADE = 'https://lizethbran13-cmyk.github.io/grok-arcade/';
export const DLC = { hostShared: false };
DLC.owned = () => { try { return !!localStorage.getItem(KEY); } catch (e) { return false; } };
DLC.can = () => DLC.owned() || DLC.hostShared; // guests may play the host's pack
const R = Math.random;
const ground = (W, p) => groundAt(W, p.x, p.z, p.y + 0.5);

const ACID = {
  name: 'ACID STORM', icon: '🧪', color: '#84cc16', mood: 'acid', dur: 32, dlc: true,
  warn: 'ACID STORM! Green goo rain! Get into a STURDY building or underground!', tip: 'Goo rain stings outside and big goo blobs melt wooden houses. Stay out of green puddles!',
  start(S) { S.env.rain = 1; S.env.acid = 1; S.env.wind = 3; S.env.goo = []; S.cd = 1; S.fx.push({ k: 'sfx', n: 'thunder' }); },
  tick(S, W, dt, C) {
    const e = S.env;
    S.cd -= dt; if (S.cd <= 0) { S.cd = (0.8 + R() * 0.5) / C.k; const big = R() < 0.2, a = pickAim(S, W, 5, 0.55); addHaz(S, { k: 'goo', x: a.x, z: a.z, y: topY(W, a.x, a.z), r: big ? 4.2 : 2.6, T: 1.9, big }); }
    e.goo.forEach((g) => g[4] -= dt); e.goo = e.goo.filter((g) => g[4] > 0);
    S.players.forEach((p) => {
      if (p.st !== 'ok') return; const sh = shelter(W, p); if (!sh.out) return;
      C.hit(p, (p.upg && p.upg.umbrella ? 0.8 : 2.4) * dt * C.k, 'acid');
      for (const g of e.goo) if (Math.hypot(p.x - g[0], p.z - g[1]) < g[3] && p.y < g[2] + 0.7) { C.hit(p, 9 * dt, 'acid'); break; }
    });
  },
  impact(h, S, W, C) {
    S.fx.push({ k: 'goo', x: h.x, y: h.y, z: h.z, s: h.big ? 1.5 : 1 });
    if (S.env.goo.length < 14 && h.y < 1.5) S.env.goo.push([Math.round(h.x * 10) / 10, Math.round(h.z * 10) / 10, Math.round(h.y * 100) / 100, h.big ? 3.4 : 2.2, 9]);
    if (h.big) W.buildings.forEach((b) => { if (!b.wrecked && !b.sturdy && Math.abs(b.x - h.x) < b.w / 2 + 0.5 && Math.abs(b.z - h.z) < b.d / 2 + 0.5) C.wreck(b); });
    S.players.forEach((p) => { if (p.st !== 'ok' || d2(p, h) > h.r) return; const sh = shelter(W, p); if (sh.under || sh.sturdy || (sh.b && !h.big)) return; C.hit(p, h.big ? 34 : 20, 'acid', h); });
  },
  safe: (p, sh) => sh.under ? 'Underground' : sh.sturdy ? 'Sturdy building' : sh.b ? 'maybe' : false,
  targets: (W) => indoorTargets(W, true).concat(hatchTargets(W))
};

const DRAGON = {
  name: 'DRAGON ATTACK', icon: '🐉', color: '#f97316', mood: 'dragon', dur: 36, dlc: true,
  warn: 'EMBERWING the dragon is here! Hide in a STURDY building or underground!', tip: 'Watch for the red stripe: that is where the fire breath goes! Wooden houses burn, concrete is safe.',
  start(S, W) { const a = R() * 6.283; S.env.dr = { x: Math.cos(a) * 70, z: Math.sin(a) * 70, y: 24, yaw: 0, a, m: 0, bt: 4, br: 0, ft: 2.5 }; S.fx.push({ k: 'sfx', n: 'roar' }); S.env.wind = 2; },
  tick(S, W, dt, C) {
    const d = S.env.dr; let tx, ty, tz;
    if (d.m === 0) { // circle the town, drop fireballs, then line up a fire-breath run
      d.a += dt * 0.28 * C.k; tx = Math.cos(d.a) * 40; tz = Math.sin(d.a) * 40; ty = 22;
      d.ft -= dt; if (d.ft <= 0) { d.ft = (2.4 + R()) / C.k; const a = pickAim(S, W, 5, 0.5); const h = addHaz(S, { k: 'fireball', x: a.x, z: a.z, y: topY(W, a.x, a.z), r: 3, T: 2.0 }); S.fx.push({ k: 'bomb', id: h.i, x: h.x, y: h.y, z: h.z, T: h.T, s: 0.8, sx: d.x, sz: d.z }); }
      d.bt -= dt;
      if (d.bt <= 0) {
        const out = outdoorPlayers(S, W), wood = W.buildings.filter((b) => !b.wrecked && !b.sturdy);
        const t = out.length && R() < 0.7 ? out[(R() * out.length) | 0] : wood.length ? wood[(R() * wood.length) | 0] : pickAim(S, W, 10, 0);
        let ang = Math.atan2(t.x - d.x, t.z - d.z); const L = 17;
        d.sx = t.x - Math.sin(ang) * L; d.sz = t.z - Math.cos(ang) * L; d.ex = t.x + Math.sin(ang) * L; d.ez = t.z + Math.cos(ang) * L;
        addHaz(S, { k: 'flame', x: d.sx, z: d.sz, x1: d.ex, z1: d.ez, y: topY(W, t.x, t.z), r: 2.4, T: 2.3 });
        d.m = 1; d.dv = 2.3; S.fx.push({ k: 'sfx', n: 'roar' });
      }
    }
    if (d.m === 1) { // dive toward the start of the run (arrives right as the stripe fills)
      d.dv -= dt; const ang = Math.atan2(d.ex - d.sx, d.ez - d.sz); tx = d.sx - Math.sin(ang) * 6; tz = d.sz - Math.cos(ang) * 6; ty = 10;
      d.vs = Math.max(20, Math.hypot(tx - d.x, tz - d.z) / Math.max(0.25, d.dv));
    }
    if (d.m === 2) { // fire-breath sweep along the stripe
      d.br -= dt; const u = Math.min(1, 1 - d.br / 1.5); const px = d.sx + (d.ex - d.sx) * u, pz = d.sz + (d.ez - d.sz) * u;
      const ang = Math.atan2(d.ex - d.sx, d.ez - d.sz); tx = px - Math.sin(ang) * 6; tz = pz - Math.cos(ang) * 6; ty = 9;
      const u0 = Math.max(0, u - 0.18), ax = d.sx + (d.ex - d.sx) * u0, az = d.sz + (d.ez - d.sz) * u0;
      S.players.forEach((p) => { if (p.st !== 'ok' || segDist(p.x, p.z, ax, az, px, pz) > 2.6) return; const sh = shelter(W, p); if (sh.under || sh.sturdy) return; if (sh.b && R() < 0.5) return; C.hit(p, 30, 'burn', { x: px, z: pz }); });
      W.buildings.forEach((b) => { if (!b.wrecked && !b.sturdy && segDist(b.x, b.z, ax, az, px, pz) < Math.max(b.w, b.d) / 2 + 0.5) C.wreck(b); });
      if (d.br <= 0) { d.m = 0; d.a = Math.atan2(d.z, d.x); d.bt = (5 + R() * 2) / C.k; }
    }
    // fly (instant for the sweep, eased otherwise); face the travel direction
    const dx = tx - d.x, dz = tz - d.z, L = Math.hypot(dx, dz), sp = d.m === 2 ? 34 / 1.5 + 4 : d.m === 1 ? d.vs : 14 * C.k;
    if (L > 0.05) { const s = Math.min(L, sp * dt); d.x += dx / L * s; d.z += dz / L * s; const want = Math.atan2(dx, dz); let dy = want - d.yaw; while (dy > Math.PI) dy -= 6.283; while (dy < -Math.PI) dy += 6.283; d.yaw += dy * Math.min(1, dt * 4); }
    d.y += (ty - d.y) * Math.min(1, dt * 1.8);
    d.b = d.m === 2 ? 1 : 0;
  },
  impact(h, S, W, C) {
    if (h.k === 'flame') { const d = S.env.dr; d.m = 2; d.br = 1.5; d.x = d.sx - Math.sin(Math.atan2(d.ex - d.sx, d.ez - d.sz)) * 6; d.z = d.sz - Math.cos(Math.atan2(d.ex - d.sx, d.ez - d.sz)) * 6; S.fx.push({ k: 'flame', x: d.sx, z: d.sz, x1: d.ex, z1: d.ez, y: h.y }); }
    else if (h.k === 'fireball') { S.fx.push({ k: 'boom', x: h.x, y: h.y, z: h.z, s: 0.8, c: 'lava' }); S.players.forEach((p) => { if (p.st !== 'ok' || d2(p, h) > h.r || Math.abs(p.y - h.y) > 3) return; if (!shelter(W, p).out) return; C.hit(p, 24, 'burn', h); }); }
  },
  safe: (p, sh) => sh.under ? 'Underground' : sh.sturdy ? 'Sturdy building' : sh.b ? 'maybe' : false,
  targets: (W) => indoorTargets(W, true).concat(hatchTargets(W))
};

const HERD_SP = 13;
const herdPos = (h, j) => { const L = Math.hypot(h.x1 - h.x0, h.z1 - h.z0), u = h.u - j * 3.2 / L, ox = -(h.z1 - h.z0) / L, oz = (h.x1 - h.x0) / L, side = (j % 2 ? 1 : -1) * (j ? 1.9 : 0); return { x: h.x0 + (h.x1 - h.x0) * u + ox * side, z: h.z0 + (h.z1 - h.z0) * u + oz * side, u }; };
const DINO = {
  name: 'DINO DESTRUCTION', icon: '🦖', color: '#ea580c', mood: 'dino', dur: 36, dlc: true,
  warn: 'DINO STAMPEDE! Get UP HIGH, into a STURDY building or underground!', tip: 'Dinos can\'t climb! Rooftops, towers and lookouts are safe. Orange stripes = stampede lane!',
  start(S, W) { const a = R() * 6.283; S.env.rx = { x: Math.cos(a) * (W.half + 4), z: Math.sin(a) * (W.half + 4), yaw: 0, tx: 0, tz: 0, rt: 0, st: 0, roar: 1.5, roarT: 8 }; S.env.herds = []; S.cd = 2.5; S.fx.push({ k: 'sfx', n: 'roar' }); S.env.shake = 0.5; },
  tick(S, W, dt, C) {
    const e = S.env, r = e.rx;
    // REXY the T-rex: chases ground-level survivors, crunches wooden houses
    r.rt -= dt; if (r.rt <= 0) { r.rt = 5; const tg = S.players.filter((p) => p.st === 'ok' && p.y > UNDER + 8 && p.y - ground(W, p) < 1 && p.y < 3.4); const p = tg[(R() * tg.length) | 0]; const t = p || { x: (R() - 0.5) * 80, z: (R() - 0.5) * 80 }; r.tx = t.x; r.tz = t.z; }
    if (r.roar > 0) r.roar -= dt; r.roarT -= dt; if (r.roarT <= 0) { r.roarT = 9; r.roar = 1.6; S.fx.push({ k: 'sfx', n: 'roar' }); e.shake = Math.max(e.shake, 0.5); }
    const want = Math.atan2(r.tx - r.x, r.tz - r.z); let dy = want - r.yaw; while (dy > Math.PI) dy -= 6.283; while (dy < -Math.PI) dy += 6.283; r.yaw += Math.max(-dt * 1.4, Math.min(dt * 1.4, dy));
    const sp = r.roar > 0 || Math.hypot(r.tx - r.x, r.tz - r.z) < 3 ? 0 : 4.4 * C.k; r.x += Math.sin(r.yaw) * sp * dt; r.z += Math.cos(r.yaw) * sp * dt; r.w = sp > 0 ? 1 : 0;
    r.x = Math.max(-W.half - 6, Math.min(W.half + 6, r.x)); r.z = Math.max(-W.half - 6, Math.min(W.half + 6, r.z));
    if (sp > 0) { r.st += dt; if (r.st > 0.8) { r.st = 0; e.shake = Math.max(e.shake, 0.25); } }
    W.buildings.forEach((b) => { if (!b.wrecked && !b.sturdy && Math.abs(b.x - r.x) < b.w / 2 + 1.6 && Math.abs(b.z - r.z) < b.d / 2 + 1.6) C.wreck(b); });
    S.players.forEach((p) => { if (p.st !== 'ok' || p.y < UNDER + 8 || p.y > 3.4 || Math.hypot(p.x - r.x, p.z - r.z) > 3.4) return; const sh = shelter(W, p); if (sh.sturdy) return; C.hit(p, 26, 'stomp', r); if (p.st === 'ok') p.vy = 9; });
    // stampedes: a telegraphed lane, then a trike herd thunders across the whole map
    S.cd -= dt; if (S.cd <= 0) { S.cd = (6.5 + R() * 1.5) / C.k; const a = pickAim(S, W, 3, 0.65), ang = R() * 6.283, L = W.half + 12; addHaz(S, { k: 'stampede', x: a.x - Math.sin(ang) * L, z: a.z - Math.cos(ang) * L, x1: a.x + Math.sin(ang) * L, z1: a.z + Math.cos(ang) * L, y: topY(W, a.x, a.z), r: 2.8, T: 2.6 }); }
    e.herds.forEach((h) => {
      const L = Math.hypot(h.x1 - h.x0, h.z1 - h.z0); h.u += dt * HERD_SP / L;
      for (let j = 0; j < h.n; j++) { const q = herdPos(h, j); if (q.u < 0 || q.u > 1) continue;
        S.players.forEach((p) => { if (p.st !== 'ok' || p.y < UNDER + 8 || Math.hypot(p.x - q.x, p.z - q.z) > 2.3) return; if (p.y - ground(W, p) > 1.6 || p.y > 3.4) return; const sh = shelter(W, p); if (sh.sturdy) return; C.hit(p, 24, 'fling', { x: q.x - (h.x1 - h.x0) / L * 3, z: q.z - (h.z1 - h.z0) / L * 3 }); });
        if (j === 0) W.buildings.forEach((b) => { if (!b.wrecked && !b.sturdy && Math.abs(b.x - q.x) < b.w / 2 + 0.8 && Math.abs(b.z - q.z) < b.d / 2 + 0.8) C.wreck(b); });
      }
    });
    e.herds = e.herds.filter((h) => herdPos(h, h.n - 1).u < 1.02);
  },
  impact(h, S) { if (h.k === 'stampede') { S.env.herds.push({ id: h.i, x0: h.x, z0: h.z, x1: h.x1, z1: h.z1, u: 0, n: S.wave >= 3 ? 6 : 5 }); S.fx.push({ k: 'herd', x: h.x, z: h.z, x1: h.x1, z1: h.z1, y: h.y }); S.env.shake = Math.max(S.env.shake, 0.6); } },
  safe: (p, sh) => sh.under ? 'Underground' : sh.sturdy ? 'Sturdy building' : p.y > 3.6 ? 'Up high' : sh.b ? 'maybe' : false,
  targets: (W) => hatchTargets(W).concat(indoorTargets(W, true)).concat(highTargets(W))
};

export function installDLC() {
  Object.assign(DZ, { acid: ACID, dragon: DRAGON, dino: DINO });
  HOOKS.owned = DLC.can; HOOKS.draw = drawDLC; HOOKS.fx = fxDLC; HOOKS.reset = resetDLC;
}

/* ------------------------- visuals (every client) ------------------------- */
const V = { dragon: null, rex: null, trikes: [], drops: [], pools: [] };
const TRIKE_COL = [[0x65a30d, 0xf97316], [0x0ea5e9, 0xfacc15], [0xa16207, 0xef4444], [0x7c3aed, 0x22d3ee]];
let dropGeo, poolGeo, dropMat, poolMat;
function resetDLC() {
  if (V.dragon) V.dragon.root.visible = false; if (V.rex) V.rex.root.visible = false;
  V.trikes.forEach((t) => t.root.visible = false); V.drops.forEach((m) => m.visible = false); V.pools.forEach((m) => m.visible = false);
}
function drawDLC(S, W, dt) {
  const e = S.env || {}, act = S.phase === 'active';
  // dragon
  if (act && S.dz === 'dragon' && e.dr) {
    if (!V.dragon) { V.dragon = makeDragon(); G.scene.add(V.dragon.root); V.dragon.root.position.set(e.dr.x, e.dr.y, e.dr.z); }
    const D = V.dragon, k = Math.min(1, dt * 8); D.root.visible = true;
    D.root.position.x += (e.dr.x - D.root.position.x) * k; D.root.position.y += (e.dr.y - D.root.position.y) * k; D.root.position.z += (e.dr.z - D.root.position.z) * k;
    let dy = e.dr.yaw - D.root.rotation.y; while (dy > Math.PI) dy -= 6.283; while (dy < -Math.PI) dy += 6.283; D.root.rotation.y += dy * Math.min(1, dt * 6); D.root.rotation.z = -dy * 0.6; D.root.rotation.x = e.dr.b ? 0.35 : 0;
    animDragon(D, dt, e.dr.b, e.dr.m === 1);
    if (e.dr.b) { const a = D.root.rotation.y, fx = D.root.position.x + Math.sin(a) * 11, fz = D.root.position.z + Math.cos(a) * 11, gy = W.terrain(fx, fz); puff(fx, gy + 0.5, fz, 3, [0xff7a1a, 0xffc93c, 0xff4d00], { fire: 1, sp: 4, up: 3, s: 1.2, s1: 0.3, life: 0.6, spread: 2.5 }); if (R() < 0.5) puff(fx, gy + 1, fz, 1, [0x4b4b55, 0x6b6b75], { sp: 1, up: 4, s: 1, s1: 3, life: 1.6 }); }
  } else if (V.dragon) V.dragon.root.visible = false;
  // T-rex
  if (act && S.dz === 'dino' && e.rx) {
    if (!V.rex) { V.rex = makeRex(0x4d7c0f, 0x365314, 1.7); G.scene.add(V.rex.root); V.rex.root.position.set(e.rx.x, 0, e.rx.z); }
    const X = V.rex, k = Math.min(1, dt * 8); X.root.visible = true;
    X.root.position.x += (e.rx.x - X.root.position.x) * k; X.root.position.z += (e.rx.z - X.root.position.z) * k; X.root.position.y = W.terrain(X.root.position.x, X.root.position.z);
    let dy = e.rx.yaw - X.root.rotation.y; while (dy > Math.PI) dy -= 6.283; while (dy < -Math.PI) dy += 6.283; X.root.rotation.y += dy * Math.min(1, dt * 6);
    animDino(X, dt, e.rx.w ? 1.2 : 0, e.rx.roar > 0);
    if (e.rx.w && R() < 0.25) puff(X.root.position.x, X.root.position.y + 0.2, X.root.position.z, 1, [0xc2a37a, 0xd6c3a0], { sp: 2, up: 1, s: 0.6, s1: 1.6, life: 1 });
  } else if (V.rex) V.rex.root.visible = false;
  // trike herds
  const herds = act && S.dz === 'dino' && e.herds ? e.herds : []; let n = 0;
  for (const h of herds) { if (n >= 12) break; const L = Math.hypot(h.x1 - h.x0, h.z1 - h.z0) || 1, yaw = Math.atan2(h.x1 - h.x0, h.z1 - h.z0);
    if (S.phase === 'active' && Net_guest()) h.u += dt * HERD_SP / L; // guests run the herd forward between snapshots
    for (let j = 0; j < h.n && n < 12; j++) { const q = herdPos(h, j); if (q.u < -0.02 || q.u > 1.02) continue;
      if (!V.trikes[n]) { const c = TRIKE_COL[n % TRIKE_COL.length]; V.trikes[n] = makeTrike(c[0], c[1]); V.trikes[n].root.scale.setScalar(1.15); G.scene.add(V.trikes[n].root); }
      const T = V.trikes[n++]; if (!T.root.visible || T.hid !== h.id + ':' + j) { T.root.position.set(q.x, W.terrain(q.x, q.z), q.z); T.hid = h.id + ':' + j; }
      T.root.visible = true; T.root.position.x += (q.x - T.root.position.x) * Math.min(1, dt * 10); T.root.position.z += (q.z - T.root.position.z) * Math.min(1, dt * 10); T.root.position.y = W.terrain(T.root.position.x, T.root.position.z); T.root.rotation.y = yaw;
      animDino(T, dt, 1.6, false);
      if (R() < 0.35) puff(T.root.position.x, T.root.position.y + 0.2, T.root.position.z, 1, [0xc2a37a, 0xd6c3a0, 0xa38b6d], { sp: 3, up: 1.5, s: 0.7, s1: 2, life: 1.1 });
    } }
  for (let i = n; i < V.trikes.length; i++) V.trikes[i].root.visible = false;
  // acid storm: falling goo blobs (from the telegraphed hazards) + glowing puddles
  if (!dropGeo) { dropGeo = GEO.sphere(0.6, 14, 10); poolGeo = new THREE.CircleGeometry(1, 28).rotateX(-Math.PI / 2); dropMat = M(0x84cc16, { e: 0x65a30d, ei: 1.4, r: 0.2, cc: 1 }); poolMat = new THREE.MeshStandardMaterial({ color: 0x84cc16, emissive: 0x4d7c0f, emissiveIntensity: 0.9, roughness: 0.15, transparent: true, opacity: 0.8, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }); }
  let nd = 0;
  if (act && S.dz === 'acid') for (const h of S.haz) { if (h.k !== 'goo') continue; const u = Math.min(1, h.t / h.T); if (!V.drops[nd]) { const m = new THREE.Mesh(dropGeo, dropMat); G.scene.add(m); V.drops[nd] = m; } const m = V.drops[nd++]; m.visible = true; m.position.set(h.x, h.y + (1 - u) * 28 + 0.5, h.z); m.scale.set(h.big ? 1.6 : 1, (h.big ? 1.6 : 1) * 1.35, h.big ? 1.6 : 1); if (R() < 0.3) sparks(m.position.x, m.position.y + 0.6, m.position.z, 1, 0xbef264, { sp: 0.5, g: -2 }); }
  for (let i = nd; i < V.drops.length; i++) V.drops[i].visible = false;
  const goo = act && S.dz === 'acid' && e.goo ? e.goo : []; let np = 0;
  for (const g of goo) { if (!V.pools[np]) { const m = new THREE.Mesh(poolGeo, poolMat); m.renderOrder = 2; G.scene.add(m); V.pools[np] = m; } const m = V.pools[np++]; m.visible = true; m.position.set(g[0], g[2] + 0.06, g[1]); const s = g[3] * Math.min(1, (9 - g[4]) * 3 + 0.2) * Math.min(1, g[4] / 1.5 + 0.1); m.scale.set(s, 1, s); if (R() < 0.04) puff(g[0] + (R() - 0.5) * g[3], g[2] + 0.2, g[1] + (R() - 0.5) * g[3], 1, [0xbef264, 0xd9f99d], { sp: 0.3, up: 1.2, s: 0.25, s1: 0.6, life: 1 }); }
  for (let i = np; i < V.pools.length; i++) V.pools[i].visible = false;
}
let guestFn = () => false; const Net_guest = () => guestFn();
export function setGuestCheck(fn) { guestFn = fn; }
function fxDLC(ev, W, SFX) {
  if (ev.k === 'goo') { const s = ev.s || 1; puff(ev.x, ev.y + 0.3, ev.z, 10, [0x84cc16, 0xbef264, 0x4d7c0f], { sp: 5 * s, up: 4, s: 0.5 * s, s1: 1.4 * s, life: 1 }); sparks(ev.x, ev.y + 0.4, ev.z, 16, 0xa3e635, { sp: 7 }); shockwave(ev.x, ev.y, ev.z, 4 * s, 0xa3e635); SFX.splash && SFX.splash(); }
  else if (ev.k === 'flame') { for (let i = 0; i <= 8; i++) { const u = i / 8, x = ev.x + (ev.x1 - ev.x) * u, z = ev.z + (ev.z1 - ev.z) * u; puff(x, (W.terrain(x, z) || 0) + 0.4, z, 2, [0xff7a1a, 0xffc93c], { fire: 1, sp: 2, up: 3, s: 0.9, s1: 0.2, life: 0.8 + u * 1.4, spread: 1.6 }); } SFX.whoosh && SFX.whoosh(); }
  else if (ev.k === 'herd') { puff(ev.x, ev.y, ev.z, 10, [0xc2a37a, 0xd6c3a0], { spread: 6, sp: 3, up: 2, s: 1, s1: 3, life: 1.6 }); SFX.boom && SFX.boom(0.6); SFX.roar && R() < 0.5 && SFX.roar(); }
}

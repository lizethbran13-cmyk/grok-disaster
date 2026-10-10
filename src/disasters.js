// disaster definitions: host logic (tick/impact), safety rules, bot targets, and visuals (all clients)
import * as THREE from 'three';
import { G } from './gfx.js';
import { FX, ring, line, puff, debris, sparks, bolt, faller, shockwave } from './fx.js';
import { makeKaiju, animKaiju, makeUFO, GEO } from './models.js';
import { M, glow } from './mats.js';
import { groundAt, buildingAt, tableAt, nearestBuildingDist, UNDER, onRoof } from './world.js';

export const ORDER = ['kaiju', 'lightning', 'meteor', 'tornado', 'flood', 'quake', 'volcano', 'blizzard', 'alien'];
const R = Math.random, d2 = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
function segDist(px, pz, x0, z0, x1, z1) { const dx = x1 - x0, dz = z1 - z0, L = dx * dx + dz * dz || 1; const t = Math.max(0, Math.min(1, ((px - x0) * dx + (pz - z0) * dz) / L)); return Math.hypot(px - (x0 + dx * t), pz - (z0 + dz * t)); }
export function shelter(W, p) {
  const under = p.y < UNDER + 8, b = under ? null : buildingAt(W, p.x, p.y, p.z);
  return { under, b, sturdy: !!(b && b.sturdy), table: b ? tableAt(W, p.x, p.y, p.z) : null, roof: under ? null : onRoof(W, p.x, p.y, p.z), out: !under && !b, fire: W.fires.some((f) => (!f.b || !f.b.wrecked) && Math.hypot(p.x - f.x, p.z - f.z) < f.r && Math.abs(p.y - f.y) < 2) };
}
function hatchTargets(W) { return W.rooms.map((r) => ({ kind: 'pad', b: r.b, pad: W.pads.find((q) => q.room === r && q.kind === 'down'), x: r.hatch.x, y: r.hatch.y, z: r.hatch.z, label: r.name, under: true })); }
function indoorTargets(W, sturdyOnly) { return W.buildings.filter((b) => !b.wrecked && (!sturdyOnly || b.sturdy)).map((b) => ({ kind: 'in', b, x: b.x, y: b.baseY + 0.2, z: b.z, label: b.name })); }
function highTargets(W) {
  const out = [];
  W.buildings.forEach((b) => { if (b.elevator && !b.wrecked) { const pad = b.pads.find((q) => q.kind === 'elev'); out.push({ kind: 'pad', b, pad, x: pad.x, y: pad.y, z: pad.z, label: b.name + ' roof', high: true }); } });
  W.high.filter((h) => !h.b).forEach((h) => out.push({ kind: 'high', x: h.x, y: h.y, z: h.z, foot: h.foot, label: h.label }));
  return out;
}
function tableTargets(W) { return W.tables.filter((t) => !t.b || (!t.b.wrecked && !t.b.sturdy) || (t.b && t.b.sturdy)).filter((t) => !t.b || !t.b.wrecked).map((t) => ({ kind: 'table', b: t.b, x: t.x, y: t.y, z: t.z, label: 'under a table' })); }
function openTargets(W) { if (W._open) return W._open; const o = []; for (let x = -60; x <= 60; x += 6) for (let z = -60; z <= 60; z += 6) { if (Math.abs(W.terrain(x, z)) > 1.5) continue; if (nearestBuildingDist(W, x, z) > 9) o.push({ kind: 'open', x, y: W.terrain(x, z), z, label: 'open ground' }); } return (W._open = o); }
const outdoorPlayers = (S, W) => S.players.filter((p) => p.st === 'ok' && shelter(W, p).out);
function pickAim(S, W, spread, bias = 0.55) {
  const out = outdoorPlayers(S, W);
  if (out.length && R() < bias) { const p = out[(R() * out.length) | 0]; return { x: p.x + (R() - 0.5) * spread, z: p.z + (R() - 0.5) * spread }; }
  const h = W.half - 8; return { x: (R() - 0.5) * 2 * h * 0.8, z: (R() - 0.5) * 2 * h * 0.8 };
}
function addHaz(S, h) { h.i = S.hid = (S.hid || 0) + 1; h.t = 0; S.haz.push(h); return h; }
const topY = (W, x, z) => groundAt(W, x, z, 200);

export const DZ = {
  kaiju: {
    name: 'KAIJU ATTACK', icon: '🦖', color: '#a855f7', mood: 'dusk', dur: 40,
    warn: 'ROARGON is coming! Hide UNDERGROUND!', tip: 'Basements, the subway, the mine and the bunker are the only safe spots. Buildings get stomped!',
    start(S, W) {
      const a = R() * 6.283, h = W.half + 6; S.env.kj = { x: Math.cos(a) * h, z: Math.sin(a) * h, yaw: 0, step: 0, beamT: 5, roarT: 1, roar: 0, charge: 0, beam: null, tx: 0, tz: 0, retarget: 0 };
      S.fx.push({ k: 'sfx', n: 'roar' });
    },
    tick(S, W, dt, C) {
      const k = S.env.kj; k.retarget -= dt;
      if (k.retarget <= 0) { k.retarget = 6; const tg = S.players.filter((p) => p.st === 'ok' && p.y > UNDER + 8); const p = tg[(R() * tg.length) | 0]; const pts = p ? { x: p.x, z: p.z } : { x: (R() - 0.5) * 80, z: (R() - 0.5) * 80 }; k.tx = pts.x; k.tz = pts.z; }
      const want = Math.atan2(k.tx - k.x, k.tz - k.z); let dy = want - k.yaw; while (dy > Math.PI) dy -= 6.283; while (dy < -Math.PI) dy += 6.283; k.yaw += Math.max(-dt * 0.7, Math.min(dt * 0.7, dy));
      const busy = k.charge > 0 || k.beam || k.roar > 0, sp = busy ? 0 : 3.4 * C.k;
      if (Math.hypot(k.tx - k.x, k.tz - k.z) > 6) { k.x += Math.sin(k.yaw) * sp * dt; k.z += Math.cos(k.yaw) * sp * dt; }
      k.walk = sp > 0; k.x = Math.max(-W.half - 8, Math.min(W.half + 8, k.x)); k.z = Math.max(-W.half - 8, Math.min(W.half + 8, k.z));
      // body crush
      W.buildings.forEach((b) => { if (!b.wrecked && Math.abs(b.x - k.x) < b.w / 2 + 3.5 && Math.abs(b.z - k.z) < b.d / 2 + 3.5) C.wreck(b); });
      S.players.forEach((p) => { if (p.st === 'ok' && p.y > UNDER + 8 && Math.hypot(p.x - k.x, p.z - k.z) < 5) C.hit(p, 30, 'stomp', k); });
      // stomps
      if (sp > 0) { k.step += dt; if (k.step > 2.4) { k.step = 0; const side = (k.side = -(k.side || 1)); const fx = k.x + Math.sin(k.yaw) * 7 + Math.cos(k.yaw) * side * 2.5, fz = k.z + Math.cos(k.yaw) * 7 - Math.sin(k.yaw) * side * 2.5; addHaz(S, { k: 'stomp', x: fx, z: fz, y: topY(W, fx, fz), r: 6, T: 1.3 }); } }
      k.roarT -= dt; if (k.roarT <= 0) { k.roarT = 11; k.roar = 1.8; S.fx.push({ k: 'sfx', n: 'roar' }); S.env.shake = Math.max(S.env.shake, 0.6); }
      if (k.roar > 0) k.roar -= dt;
      k.beamT -= dt;
      if (k.beamT <= 0 && !k.beam && k.charge <= 0) {
        const tg = S.players.filter((p) => p.st === 'ok' && p.y > UNDER + 8 && Math.hypot(p.x - k.x, p.z - k.z) < 45); const p = tg[(R() * tg.length) | 0];
        const t = p ? { x: p.x, z: p.z } : { x: k.x + Math.sin(k.yaw) * 25, z: k.z + Math.cos(k.yaw) * 25 };
        const ang = Math.atan2(t.x - k.x, t.z - k.z); k.yaw = ang;
        k.charge = 0.01; k.bx0 = k.x + Math.sin(ang) * 6; k.bz0 = k.z + Math.cos(ang) * 6; k.bx1 = k.x + Math.sin(ang) * 46; k.bz1 = k.z + Math.cos(ang) * 46;
        addHaz(S, { k: 'beam', x: k.bx0, z: k.bz0, x1: k.bx1, z1: k.bz1, y: 0.1, r: 1.9, T: 1.9 });
        S.fx.push({ k: 'sfx', n: 'beam' });
      }
      if (k.charge > 0) { k.charge += dt / 1.9; if (k.charge >= 1) { k.charge = 0; k.beam = 1.2; k.beamT = 7.5 / C.k; } }
      if (k.beam) {
        k.beam -= dt;
        S.players.forEach((p) => { if (p.st === 'ok' && p.y > UNDER + 8 && segDist(p.x, p.z, k.bx0, k.bz0, k.bx1, k.bz1) < 2.0) C.hit(p, 35, 'beam', { x: k.x, z: k.z }); });
        W.buildings.forEach((b) => { if (!b.wrecked && !b.sturdy && segDist(b.x, b.z, k.bx0, k.bz0, k.bx1, k.bz1) < Math.max(b.w, b.d) / 2 + 1) C.wreck(b); });
        if (k.beam <= 0) k.beam = null;
      }
    },
    impact(h, S, W, C) {
      if (h.k === 'stomp') {
        S.fx.push({ k: 'stomp', x: h.x, y: h.y, z: h.z }); S.env.shake = Math.max(S.env.shake, 0.8);
        S.players.forEach((p) => { if (p.st === 'ok' && p.y > UNDER + 8 && d2(p, h) < h.r) C.hit(p, 28, 'stomp', h); });
        W.buildings.forEach((b) => { if (!b.wrecked && Math.abs(b.x - h.x) < b.w / 2 + h.r * 0.6 && Math.abs(b.z - h.z) < b.d / 2 + h.r * 0.6) C.wreck(b); });
      }
    },
    safe: (p, sh) => sh.under ? 'Underground' : false,
    targets: (W) => hatchTargets(W)
  },
  lightning: {
    name: 'LIGHTNING STORM', icon: '⚡', color: '#facc15', mood: 'storm', dur: 30,
    warn: 'Lightning storm! Get INSIDE a building!', tip: 'Any building keeps you safe. Stay off roofs and open ground!',
    start(S) { S.env.rain = 1; S.env.wind = 4; S.cd = 1.5; },
    tick(S, W, dt, C) { S.cd -= dt; if (S.cd <= 0) { S.cd = (0.55 + R() * 0.4) / C.k; const roofers = S.players.filter((p) => p.st === 'ok' && onRoof(W, p.x, p.y, p.z)); const a = roofers.length && R() < 0.5 ? { x: roofers[0].x, z: roofers[0].z } : pickAim(S, W, 4, 0.6); addHaz(S, { k: 'strike', x: a.x, z: a.z, y: topY(W, a.x, a.z), r: 2.6, T: 1.5 }); } },
    impact(h, S, W, C) { S.fx.push({ k: 'bolt', x: h.x, y: h.y, z: h.z }); S.players.forEach((p) => { const sh = shelter(W, p); if (p.st === 'ok' && sh.out && d2(p, h) < h.r && Math.abs(p.y - h.y) < 3) C.hit(p, 30, 'zap', h); }); },
    safe: (p, sh) => sh.under ? 'Underground' : sh.b ? 'Indoors' : false,
    targets: (W) => indoorTargets(W).concat(hatchTargets(W))
  },
  meteor: {
    name: 'METEOR SHOWER', icon: '☄️', color: '#fb923c', mood: 'dusk', dur: 30,
    warn: 'Meteors incoming! Get into a STURDY building or underground!', tip: 'Concrete buildings and basements are safest. Big meteors can smash wooden houses!',
    start(S) { S.cd = 1; },
    tick(S, W, dt, C) { S.cd -= dt; if (S.cd <= 0) { S.cd = (0.7 + R() * 0.5) / C.k; const big = R() < 0.22, a = pickAim(S, W, 6, 0.5); const h = addHaz(S, { k: 'meteor', x: a.x, z: a.z, y: topY(W, a.x, a.z), r: big ? 5.5 : 3.2, T: 2.3, big }); S.fx.push({ k: 'meteor', id: h.i, x: h.x, y: h.y, z: h.z, T: h.T, s: big ? 2 : 1 }); } },
    impact(h, S, W, C) {
      S.fx.push({ k: 'boom', x: h.x, y: h.y, z: h.z, s: h.big ? 1.6 : 1, c: 'meteor' }); S.env.shake = Math.max(S.env.shake, h.big ? 0.6 : 0.3);
      let wrecked = null; if (h.big) W.buildings.forEach((b) => { if (!b.wrecked && !b.sturdy && Math.abs(b.x - h.x) < b.w / 2 + 1 && Math.abs(b.z - h.z) < b.d / 2 + 1) { C.wreck(b); wrecked = b; } });
      S.players.forEach((p) => { if (p.st !== 'ok' || d2(p, h) > h.r) return; const sh = shelter(W, p); if (sh.under || sh.sturdy) return; if (sh.b && !h.big) return; C.hit(p, h.big ? 45 : 30, 'boom', h); });
    },
    safe: (p, sh) => sh.under ? 'Underground' : sh.sturdy ? 'Sturdy building' : sh.b ? 'maybe' : false,
    targets: (W) => indoorTargets(W, true).concat(hatchTargets(W))
  },
  tornado: {
    name: 'TORNADO', icon: '🌪️', color: '#94a3b8', mood: 'storm', dur: 35,
    warn: 'TORNADO WARNING! Get to a basement or sturdy building!', tip: 'Basements are best. Tornadoes rip apart wooden houses!',
    start(S, W) { S.env.rain = 0.6; S.env.wind = 8; const n = S.wave >= 3 ? 2 : 1; S.env.tor = []; for (let i = 0; i < n; i++) { const a = R() * 6.283; S.env.tor.push({ x: Math.cos(a) * (W.half - 5), z: Math.sin(a) * (W.half - 5), vx: 0, vz: 0, wt: 0 }); } },
    tick(S, W, dt, C) {
      S.env.tor.forEach((t) => {
        t.wt -= dt; if (t.wt <= 0) { t.wt = 3 + R() * 2; const a = pickAim(S, W, 10, 0.6); const dx = a.x - t.x, dz = a.z - t.z, L = Math.hypot(dx, dz) || 1; t.vx = dx / L * 4.6 * C.k; t.vz = dz / L * 4.6 * C.k; }
        t.x += t.vx * dt; t.z += t.vz * dt; t.x = Math.max(-W.half, Math.min(W.half, t.x)); t.z = Math.max(-W.half, Math.min(W.half, t.z));
        W.buildings.forEach((b) => { if (!b.wrecked && !b.sturdy && Math.abs(b.x - t.x) < b.w / 2 + 2.5 && Math.abs(b.z - t.z) < b.d / 2 + 2.5) C.wreck(b); });
        S.players.forEach((p) => {
          if (p.st !== 'ok') return; const sh = shelter(W, p); if (sh.under || sh.sturdy) return;
          const dx = t.x - p.x, dz = t.z - p.z, d = Math.hypot(dx, dz);
          if (d < 11) { const f = (1 - d / 11) * 9; p.kx += (dx / (d || 1) * f + dz / (d || 1) * f * 0.8) * dt * 2; p.kz += (dz / (d || 1) * f - dx / (d || 1) * f * 0.8) * dt * 2; }
          if (d < 4.2) { C.hit(p, 22, 'fling', t); if (p.st === 'ok') { p.vy = 12; p.kx = -dz * 1.5; p.kz = dx * 1.5; } }
        });
      });
    },
    safe: (p, sh) => sh.under ? 'Underground' : sh.sturdy ? 'Sturdy building' : false,
    targets: (W) => hatchTargets(W).concat(indoorTargets(W, true))
  },
  flood: {
    name: 'TSUNAMI', icon: '🌊', color: '#38bdf8', mood: 'storm', dur: 36,
    warn: 'TSUNAMI WARNING! Get to HIGH GROUND!', tip: 'Ride an elevator to a rooftop, climb a tower or a hill. Basements will flood!',
    start(S, W) { S.env.rain = 0.4; const base = W.sea != null ? W.sea : -0.6; S.env.water = base; S.env.waterBase = base; S.env.waterTarget = 3.7 + Math.min(0.6, S.wave * 0.1); S.env.waveZ = W.sea != null ? 75 : null; S.fx.push({ k: 'sfx', n: 'whoosh' }); },
    tick(S, W, dt, C) {
      const e = S.env, elapsed = S.dzT;
      if (e.waveZ != null) { e.waveZ -= dt * 9; if (e.waveZ < -80) e.waveZ = null; }
      const rising = elapsed < S.dzDur - 8;
      e.water += ((rising ? e.waterTarget : e.waterBase) - e.water) * dt * (rising ? 0.22 : 0.35);
      S.players.forEach((p) => {
        if (p.st !== 'ok') return; const sh = shelter(W, p);
        if (sh.under) { const r = p.room; if (e.water > (p.roomBase != null ? p.roomBase : 0) + 0.3) C.hit(p, 10 * dt, 'water'); return; }
        const depth = e.water - p.y; if (depth > 1.4) C.hit(p, 7 * dt, 'water'); else if (depth > 0.5) C.hit(p, 3 * dt, 'water');
        if (depth > 0.3) { p.kx += -1.5 * dt * (W.sea != null ? 0 : 1); p.kz += -2.5 * dt; }
      });
      if (e.waveZ != null) S.players.forEach((p) => { if (p.st === 'ok' && Math.abs(p.z - e.waveZ) < 3 && p.y < e.waterTarget && p.y > UNDER + 8) { C.hit(p, 15, 'water', { x: p.x, z: p.z + 5 }); } });
    },
    safe: (p, sh, S) => !sh.under && p.y > (S.env.waterTarget || 3.7) + 0.2 ? 'High ground' : false,
    targets: (W) => highTargets(W)
  },
  quake: {
    name: 'EARTHQUAKE', icon: '🫨', color: '#d97706', mood: 'quake', dur: 30,
    warn: 'EARTHQUAKE! Drop, Cover, Hold On under a table, or get to open ground!', tip: 'Tables protect you inside. Outside, stay away from buildings.',
    start(S, W) { S.cd = 1.2; S.cd2 = 3; S.cd3 = 6; S.env.cracks = []; S.env.quake = 1; },
    tick(S, W, dt, C) {
      const e = S.env, el = S.dzT; e.shake = Math.max(e.shake, 0.35 + 0.35 * Math.max(0, Math.sin(el * 0.9)));
      S.cd -= dt; if (S.cd <= 0) { S.cd = 0.35 / C.k;
        const bs = W.buildings.filter((b) => !b.wrecked); const b = bs[(R() * bs.length) | 0];
        if (b) { let x, z, inside = !b.sturdy && R() < 0.45; if (inside) { x = b.ix0 + R() * (b.ix1 - b.ix0); z = b.iz0 + R() * (b.iz1 - b.iz0); } else { const s = (R() * 4) | 0, u = R() - 0.5; x = s < 2 ? b.x + u * b.w : b.x + (s === 2 ? 1 : -1) * (b.w / 2 + 1.2 + R() * 1.6); z = s < 2 ? b.z + (s === 0 ? 1 : -1) * (b.d / 2 + 1.2 + R() * 1.6) : b.z + u * b.d; }
          addHaz(S, { k: 'junk', x, z, y: inside ? b.baseY + 0.2 : topY(W, x, z), r: 1.7, T: 1.2, inside, bh: b.h }); }
        // also target a player near buildings
        const near = S.players.filter((p) => p.st === 'ok' && p.y > UNDER + 8 && nearestBuildingDist(W, p.x, p.z) < 4); if (near.length && R() < 0.35) { const p = near[(R() * near.length) | 0]; addHaz(S, { k: 'junk', x: p.x + (R() - 0.5) * 2, z: p.z + (R() - 0.5) * 2, y: p.y, r: 1.7, T: 1.25, inside: !!buildingAt(W, p.x, p.y, p.z) }); }
      }
      S.cd2 -= dt; if (S.cd2 <= 0) { S.cd2 = 4.5; const o = openTargets(W), q = o[(R() * o.length) | 0] || { x: 0, z: 0 }; const a = R() * 3.14, L = 9; addHaz(S, { k: 'crack', x: q.x - Math.cos(a) * L, z: q.z - Math.sin(a) * L, x1: q.x + Math.cos(a) * L, z1: q.z + Math.sin(a) * L, y: W.terrain(q.x, q.z), r: 1.1, T: 1.8 }); }
      S.cd3 -= dt; if (S.cd3 <= 0) { S.cd3 = 9; const bs = W.buildings.filter((b) => !b.wrecked && !b.sturdy && !b.elevator); const b = bs[(R() * bs.length) | 0]; if (b) addHaz(S, { k: 'collapse', x: b.x, z: b.z, y: b.baseY, r: Math.max(b.w, b.d) / 2 + 0.5, T: 3.0, b: b.id }); }
    },
    impact(h, S, W, C) {
      if (h.k === 'junk') { S.fx.push({ k: 'junk', x: h.x, y: h.y, z: h.z }); S.players.forEach((p) => { if (p.st === 'ok' && d2(p, h) < h.r && Math.abs(p.y - h.y) < 2.5) { const sh = shelter(W, p); if (sh.table || sh.under) return; C.hit(p, 22, 'bonk', h); } }); }
      else if (h.k === 'crack') { S.env.cracks.push([h.x, h.z, h.x1, h.z1, h.y]); S.fx.push({ k: 'crack', x: h.x, z: h.z, x1: h.x1, z1: h.z1, y: h.y }); S.players.forEach((p) => { if (p.st === 'ok' && Math.abs(p.y - h.y) < 1.5 && segDist(p.x, p.z, h.x, h.z, h.x1, h.z1) < h.r) { C.hit(p, 18, 'bonk', h); p.vy = 7; } }); }
      else if (h.k === 'collapse') { const b = W.buildings.find((q) => q.id === h.b); if (b && !b.wrecked) { S.players.forEach((p) => { if (p.st === 'ok' && buildingAt(W, p.x, p.y, p.z) === b && !tableAt(W, p.x, p.y, p.z)) C.hit(p, 30, 'bonk', h); }); C.wreck(b); } }
    },
    safe: (p, sh, S, W) => sh.under ? 'Underground' : sh.table ? 'Under a table' : sh.out && !sh.roof && nearestBuildingDist(W, p.x, p.z) > 7 ? 'Open ground' : false,
    targets: (W) => tableTargets(W).concat(openTargets(W)).concat(hatchTargets(W))
  },
  volcano: {
    name: 'VOLCANO', icon: '🌋', color: '#ef4444', mood: 'volcano', dur: 38,
    warn: 'VOLCANO ERUPTING! Get indoors, away from the lava!', tip: 'Roofs block lava bombs. Lava flows on the ground, so stay far from the volcano or up high.',
    start(S, W) { const v = W.volcano; S.env.lava = { x: v.x, z: v.z, r: 0, max: Math.hypot(v.x, v.z) - 14, y: 0.35 }; S.env.ash = 0.8; S.env.volc = 0; S.cd = 2.5; S.fx.push({ k: 'sfx', n: 'boom' }); S.env.shake = 0.8; },
    tick(S, W, dt, C) {
      const L = S.env.lava; S.env.volc = Math.min(1, S.env.volc + dt / 4);
      if (S.env.volc >= 1) L.r = Math.min(L.max, L.r + dt * 1.7 * C.k);
      S.cd -= dt; if (S.cd <= 0) { S.cd = (0.5 + R() * 0.35) / C.k; const a = pickAim(S, W, 6, 0.5); const h = addHaz(S, { k: 'bomb', x: a.x, z: a.z, y: topY(W, a.x, a.z), r: 3, T: 2.1 }); S.fx.push({ k: 'bomb', id: h.i, x: h.x, y: h.y, z: h.z, T: h.T, s: 1, sx: W.volcano.x, sz: W.volcano.z }); }
      S.players.forEach((p) => { if (p.st !== 'ok') return; const inL = Math.hypot(p.x - L.x, p.z - L.z) < L.r; if (inL && (p.y < L.y + 0.7 || p.y < UNDER + 8)) C.hit(p, 22 * dt, 'burn'); });
    },
    impact(h, S, W, C) { S.fx.push({ k: 'boom', x: h.x, y: h.y, z: h.z, s: 0.9, c: 'lava' }); S.players.forEach((p) => { if (p.st !== 'ok' || d2(p, h) > h.r) return; const sh = shelter(W, p); if (!sh.out || sh.roof && false) return; if (Math.abs(p.y - h.y) < 3) C.hit(p, 26, 'burn', h); }); },
    safe: (p, sh, S) => { const L = S.env.lava; const inL = L && Math.hypot(p.x - L.x, p.z - L.z) < L.r + 3; if (inL && p.y < 2) return false; return sh.under ? 'Underground' : sh.b ? 'Indoors' : false; },
    targets: (W, S) => { const v = W.volcano; return indoorTargets(W).concat(hatchTargets(W)).filter((t) => Math.hypot(t.x - v.x, t.z - v.z) > Math.hypot(v.x, v.z) * 0.8); }
  },
  blizzard: {
    name: 'BLIZZARD & HAIL', icon: '🌨️', color: '#7dd3fc', mood: 'snow', dur: 32,
    warn: 'BLIZZARD! Get inside or warm up by a fire!', tip: 'The cold and hail hurt outside. Fireplaces and campfires keep you warm. Umbrellas block hail.',
    start(S) { S.env.snow = 1; S.env.hail = 0.6; S.env.wind = 7; S.env.cold = 1; S.cd = 1.2; },
    tick(S, W, dt, C) {
      S.cd -= dt; const hailTick = S.cd <= 0; if (hailTick) S.cd = 1.2 / C.k;
      S.players.forEach((p) => {
        if (p.st !== 'ok') return; const sh = shelter(W, p);
        if (sh.fire) { p.hp = Math.min(p.max, p.hp + 3 * dt); return; }
        if (!sh.out) return;
        C.hit(p, 2.6 * dt * C.k, 'cold'); p.kx += 2.2 * dt;
        if (hailTick && !(p.upg && p.upg.umbrella)) C.hit(p, 6, 'hail');
      });
    },
    safe: (p, sh) => sh.under ? 'Underground' : sh.b ? 'Indoors' : sh.fire ? 'By the fire' : false,
    targets: (W) => indoorTargets(W).concat(hatchTargets(W))
  },
  alien: {
    name: 'ALIEN INVASION', icon: '🛸', color: '#4ade80', mood: 'alien', dur: 35,
    warn: 'UFOs are abducting people! Hide INDOORS!', tip: 'UFO spotlights can only grab you outside. Red light = run!',
    start(S, W) { const n = W.id === 'area51' ? 4 : 3; S.env.ufos = []; for (let i = 0; i < n; i++) { const a = i / n * 6.283 + R(); S.env.ufos.push({ x: Math.cos(a) * 60, z: Math.sin(a) * 60, tx: 0, tz: 0, lock: 0, rt: 0, grab: null }); } S.fx.push({ k: 'sfx', n: 'ufo' }); },
    tick(S, W, dt, C) {
      S.env.ufos.forEach((u, idx) => {
        u.rt -= dt;
        if (u.rt <= 0) { u.rt = 2.5; const out = outdoorPlayers(S, W).filter((p) => !p.grabbed); const p = out.length ? out.reduce((a, b) => d2(a, u) < d2(b, u) ? a : b) : null; if (p && R() < 0.85) { u.tx = p.x; u.tz = p.z; u.chase = p.id; } else { u.tx = (R() - 0.5) * 100; u.tz = (R() - 0.5) * 100; u.chase = null; } }
        if (u.chase != null) { const p = S.players.find((q) => q.id === u.chase); if (p && p.st === 'ok' && shelter(W, p).out) { u.tx = p.x; u.tz = p.z; } }
        if (u.grab != null) { const p = S.players.find((q) => q.id === u.grab); u.gT -= dt; if (p) { p.x += (u.x - p.x) * dt * 2; p.z += (u.z - p.z) * dt * 2; p.y = Math.min(13, p.y + dt * 4.5); } if (u.gT <= 0 || !p) { if (p) { const h = W.half - 10; p.st = 'ok'; p.grabbed = false; p.x = (R() - 0.5) * 2 * h; p.z = (R() - 0.5) * 2 * h; p.y = 16; p.vy = 0; C.hit(p, 15, 'drop'); C.tp(p); } u.grab = null; u.rt = 0; } return; }
        const dx = u.tx - u.x, dz = u.tz - u.z, L = Math.hypot(dx, dz), sp = 6.2 * C.k; if (L > 0.3) { u.x += dx / L * Math.min(L, sp * dt); u.z += dz / L * Math.min(L, sp * dt); }
        const inside = S.players.filter((p) => p.st === 'ok' && Math.hypot(p.x - u.x, p.z - u.z) < 3.6 && shelter(W, p).out && p.sh <= 0);
        if (inside.length) { u.lock += dt; if (u.lock > 1.5) { const p = inside[0]; if (C.shielded(p)) { u.lock = 0; return; } u.lock = 0; u.grab = p.id; u.gT = 2.6; p.st = 'float'; p.grabbed = true; p.waveKO = true; S.fx.push({ k: 'sfx', n: 'zap' }); C.event(p, 'beamed'); } } else u.lock = Math.max(0, u.lock - dt * 2);
      });
    },
    safe: (p, sh) => sh.under ? 'Underground' : sh.b ? 'Indoors' : false,
    targets: (W) => indoorTargets(W).concat(hatchTargets(W))
  }
};
export function pickRandom(W, last) {
  const pool = []; ORDER.forEach((id) => { if (id === last) return; pool.push(id); if (id === 'alien' && W.id === 'area51') pool.push(id); if (id === 'flood' && W.id === 'beach') pool.push(id); if (id === 'volcano' && W.id === 'pine') pool.push(id); if (id === 'blizzard' && W.id === 'pine') pool.push(id); if (id === 'kaiju' && W.id === 'city') pool.push(id); });
  return pool[(R() * pool.length) | 0];
}
export function dzName(id, W) { if (id === 'flood' && W && W.sea == null) return 'FLASH FLOOD'; return DZ[id].name; }

/* ------------------------- visuals (every client) ------------------------- */
const V = { kaiju: null, ufos: [], tors: [], volc: null, cracks: [], torDebris: null };
export function resetVisuals() {
  if (V.kaiju) V.kaiju.root.visible = false; V.ufos.forEach((u) => u.visible = false); V.tors.forEach((t) => t.visible = false);
  if (V.volc) V.volc.visible = false; V.cracks.forEach((c) => G.scene.remove(c)); V.cracks = [];
  FX.water.visible = false; FX.foam.visible = false; FX.lava.visible = false;
}
export function drawDisaster(S, W, dt) {
  const e = S.env, on = S.phase === 'active' || S.phase === 'warn';
  // kaiju
  if (e.kj && S.dz === 'kaiju' && S.phase === 'active') {
    if (!V.kaiju) { V.kaiju = makeKaiju(); G.scene.add(V.kaiju.root); }
    const K = V.kaiju; K.root.visible = true; K.root.position.x += (e.kj.x - K.root.position.x) * Math.min(1, dt * 8); K.root.position.z += (e.kj.z - K.root.position.z) * Math.min(1, dt * 8);
    K.root.position.y = W.terrain(K.root.position.x, K.root.position.z); K.root.rotation.y = e.kj.yaw;
    animKaiju(K, dt, e.kj.walk, e.kj.roar > 0, e.kj.charge || (e.kj.beam ? 1 : 0));
    K.beam.visible = !!e.kj.beam; if (e.kj.beam) { K.beamLen(42); K.beam.children[0].scale.x = K.beam.children[0].scale.z = 0.8 + Math.random() * 0.4; if (Math.random() < 0.6) sparks(e.kj.bx1 * 0.3 + e.kj.bx0 * 0.7 + (Math.random() - 0.5) * 20, 1, e.kj.bz1 * 0.3 + e.kj.bz0 * 0.7 + (Math.random() - 0.5) * 20, 3, 0x7df9ff); }
    // aim the head beam downward toward the ground target
    K.head.rotation.x = e.kj.beam || e.kj.charge > 0 ? 0.32 : 0;
    if (e.kj.charge > 0 && Math.random() < 0.5) sparks(K.root.position.x, 16, K.root.position.z, 2, 0x5ff3ff, { sp: 3, g: -3 });
  } else if (V.kaiju) V.kaiju.root.visible = false;
  // ufos
  const ufos = S.dz === 'alien' && S.phase === 'active' && e.ufos ? e.ufos : [];
  while (V.ufos.length < ufos.length) { const u = makeUFO(); G.scene.add(u); V.ufos.push(u); }
  V.ufos.forEach((u, i) => {
    const d = ufos[i]; u.visible = !!d; if (!d) return;
    u.position.x += (d.x - u.position.x) * Math.min(1, dt * 6); u.position.z += (d.z - u.position.z) * Math.min(1, dt * 6); u.position.y = 15 + Math.sin(G.t * 1.5 + i) * 0.6 + W.terrain(u.position.x, u.position.z) * 0.3;
    u.userData.lights.rotation.y += dt * 2; u.rotation.z = Math.sin(G.t + i) * 0.06;
    const gy = W.terrain(u.position.x, u.position.z); const bm = u.userData.beam; bm.scale.y = u.position.y - gy - 0.5; bm.material.opacity = d.grab != null ? 0.45 : 0.2;
    ring('ufo' + i, u.position.x, gy, u.position.z, 3.6, d.lock > 0 || d.grab != null ? 0xff2d55 : 0x4ade80, Math.min(1, d.lock / 1.5));
    if (d.grab != null && Math.random() < 0.5) sparks(u.position.x, gy + Math.random() * 10, u.position.z, 2, 0x9dffb0, { sp: 2, g: -6 });
  });
  // tornadoes
  const tors = S.dz === 'tornado' && S.phase === 'active' && e.tor ? e.tor : [];
  while (V.tors.length < tors.length) { const g = new THREE.Group(); const f = new THREE.Mesh(FX.torGeo, FX.torMat); g.add(f); const f2 = new THREE.Mesh(FX.torGeo, FX.torMat); f2.scale.set(0.7, 0.95, 0.7); g.add(f2); G.scene.add(g); V.tors.push(g); }
  V.tors.forEach((g, i) => {
    const d = tors[i]; g.visible = !!d; if (!d) return;
    g.position.x += (d.x - g.position.x) * Math.min(1, dt * 6); g.position.z += (d.z - g.position.z) * Math.min(1, dt * 6); g.position.y = W.terrain(g.position.x, g.position.z) - 0.5;
    g.children[0].rotation.y += dt * 3; g.children[1].rotation.y -= dt * 4.5; g.rotation.z = Math.sin(G.t * 0.7 + i) * 0.08;
    if (Math.random() < 0.9) puff(g.position.x + (Math.random() - 0.5) * 6, g.position.y + 0.5, g.position.z + (Math.random() - 0.5) * 6, 2, [0xa38b6d, 0x8a8f99, 0xc2b280], { sp: 6, up: 3, s: 0.8, s1: 2.2, life: 1.4 });
    if (Math.random() < 0.25) debris(g.position.x, g.position.y + 2 + Math.random() * 8, g.position.z, 1, [0x8b5a2b, 0xd4a373, 0x6b7280, 0x4ade80], { sp: 14, up: 6, s: 0.5, floor: 0 });
  });
  // water
  if (e.water != null && S.dz === 'flood' && (S.phase === 'active' || S.phase === 'calm') && e.water > (e.waterBase || -1) + 0.02) {
    FX.water.visible = true; FX.water.position.y += (e.water - FX.water.position.y) * Math.min(1, dt * 4);
    if (e.waveZ != null) { FX.foam.visible = true; FX.foam.position.set(0, e.waterTarget + 0.4, e.waveZ); FX.foam.scale.y = 1; if (Math.random() < 0.8) puff((Math.random() - 0.5) * 140, e.waterTarget, e.waveZ, 2, 0xffffff, { sp: 2, up: 5, s: 1, s1: 2.5 }); } else FX.foam.visible = false;
  } else if (W.sea != null) { FX.water.visible = true; FX.water.position.y = W.sea; FX.foam.visible = false; }
  else { FX.water.visible = false; FX.foam.visible = false; }
  // volcano + lava
  if (e.lava && S.dz === 'volcano' && S.phase === 'active') {
    if (!W.volcano.real) {
      if (!V.volc || V.volc.userData.map !== W.id) { if (V.volc) G.scene.remove(V.volc); V.volc = new THREE.Group(); V.volc.userData.map = W.id; const c = new THREE.Mesh(new THREE.CylinderGeometry(5, 22, 18, 40, 6), M(0x6b4a3a, { r: 0.9 })); c.position.y = 9; c.castShadow = true; V.volc.add(c); const top = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 0.4, 32), M(0xff5a00, { e: 0xff3c00, ei: 2.5 })); top.position.y = 18.1; V.volc.add(top); [0, 1, 2, 3].forEach((i) => { const s = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.6, 12, 12), M(0xff6a00, { e: 0xff4400, ei: 1.8 })); s.position.set(Math.cos(i * 1.6) * 7, 8, Math.sin(i * 1.6) * 7); s.rotation.set(Math.sin(i * 1.6) * 0.5, 0, -Math.cos(i * 1.6) * 0.5); V.volc.add(s); }); G.scene.add(V.volc); }
      V.volc.visible = true; V.volc.position.set(W.volcano.x, W.terrain(W.volcano.x, W.volcano.z) - 18 * (1 - (e.volc || 0)), W.volcano.z);
    }
    const vy = W.volcano.real ? W.volcano.y + 1 : 18 + W.terrain(W.volcano.x, W.volcano.z);
    if (Math.random() < 0.8) puff(W.volcano.x + (Math.random() - 0.5) * 4, vy, W.volcano.z + (Math.random() - 0.5) * 4, 2, [0x4b4b55, 0x6b6b75, 0x333338], { sp: 2, up: 9, s: 2, s1: 6, life: 3.5, drag: 0.4 });
    if (Math.random() < 0.6) sparks(W.volcano.x, vy, W.volcano.z, 3, 0xff8a2a, { sp: 10, up: 12, s: 0.35, life: 1.6, g: 14 }); if (Math.random() < 0.5) puff(W.volcano.x, vy, W.volcano.z, 2, [0xff6a00, 0xffb703], { fire: 1, sp: 2, up: 6, s: 1.2, s1: 0.3, life: 0.8 });
    FX.lava.visible = e.lava.r > 0.5; FX.lava.position.set(e.lava.x, e.lava.y, e.lava.z); FX.lava.scale.setScalar(Math.max(0.01, e.lava.r));
  } else { FX.lava.visible = false; if (V.volc) V.volc.visible = false; }
  // hazards telegraphs
  for (const h of S.haz) {
    const u = Math.min(1, h.t / h.T);
    if (h.k === 'beam' || h.k === 'crack') line('h' + h.i, h.x, h.z, h.x1, h.z1, (h.y || 0) + 0.05, h.r * 2, h.k === 'beam' ? 0xff2d55 : 0xff8800);
    else if (h.k === 'collapse') ring('h' + h.i, h.x, h.y + 0.3, h.z, h.r, 0xff8800, u);
    else ring('h' + h.i, h.x, h.y, h.z, h.r, h.k === 'strike' ? 0xffe14d : h.k === 'junk' ? 0xff8800 : 0xff2d55, u);
    if (h.k === 'collapse') { const b = W.buildings.find((q) => q.id === h.b); if (b && !b.wrecked && Math.random() < 0.3) puff(b.x + (Math.random() - 0.5) * b.w, b.baseY + b.h, b.z + (Math.random() - 0.5) * b.d, 1, 0xc9b79c, { s: 0.4, s1: 1.2, up: -1 }); }
    if (h.k === 'junk' && u > 0.5 && !h.vis) { h.vis = 1; debris(h.x, (h.y || 0) + 4, h.z, 4, [0xd4a373, 0x9ca3af, 0xef476f], { sp: 1, up: -2, s: 0.5, floor: h.y || 0 }); }
  }
  // cracks
  if (e.cracks && S.dz === 'quake' && S.phase === 'active') { while (V.cracks.length < e.cracks.length) { const c = e.cracks[V.cracks.length]; const m = new THREE.Mesh(GEO.box(1, 1, 1), M(0x2a1d14, { r: 1 })); const L = Math.hypot(c[2] - c[0], c[3] - c[1]); m.scale.set(1.0, 0.1, L); m.position.set((c[0] + c[2]) / 2, c[4] + 0.03, (c[1] + c[3]) / 2); m.rotation.y = Math.atan2(c[2] - c[0], c[3] - c[1]); G.scene.add(m); V.cracks.push(m); } }
  else if (V.cracks.length && S.phase !== 'active') { V.cracks.forEach((c) => G.scene.remove(c)); V.cracks = []; }
}
// one-shot effect events (host + guests)
export function playFx(ev, W, SFX) {
  const k = ev.k;
  if (k === 'bolt') { bolt(ev.x, ev.y, ev.z); SFX.thunder(); }
  else if (k === 'boom') { const lava = ev.c === 'lava'; puff(ev.x, ev.y, ev.z, 10, lava ? [0x4a4a52, 0x6b6b75] : [0x9ca3af, 0xd1d5db, 0x6b7280], { sp: 5 * ev.s, up: 3, s: 0.7 * ev.s, s1: 2.0 * ev.s, life: 1.4 }); puff(ev.x, ev.y + 0.5, ev.z, 8, [0xff7a1a, 0xffc93c, 0xff4d00], { fire: 1, sp: 6 * ev.s, up: 4, s: 0.8 * ev.s, s1: 0.2, life: 0.5 }); debris(ev.x, ev.y, ev.z, lava ? 4 : 8, lava ? [0x3a2a22, 0xff5a00] : [0x4a3b33, 0x6b5a4f, 0xa3a3a3], { sp: 8, up: 8, s: 0.45 * ev.s, floor: ev.y }); sparks(ev.x, ev.y + 0.5, ev.z, 20, lava ? 0xff7a00 : 0xffb347, { sp: 10 }); shockwave(ev.x, ev.y, ev.z, 6 * ev.s, 0xffb347); G.flash.position.set(ev.x, ev.y + 4, ev.z); G.flash.color.setHex(0xffa040); G.flash.intensity = 18; SFX.boom(Math.min(1, 0.6 * ev.s)); }
  else if (k === 'meteor') faller(ev.id, ev.x, ev.y, ev.z, ev.T, 'meteor', ev.s);
  else if (k === 'bomb') { faller(ev.id, ev.x, ev.y, ev.z, ev.T, 'bomb', ev.s); const f = FX.meteors[FX.meteors.length - 1]; f.dx = ev.sx - ev.x; f.dz = ev.sz - ev.z; f.h = 25; }
  else if (k === 'stomp') { puff(ev.x, ev.y, ev.z, 18, [0xc2a37a, 0xd6c3a0, 0x9ca3af], { sp: 9, up: 2, s: 1, s1: 3, life: 1.5 }); shockwave(ev.x, ev.y, ev.z, 10, 0xffffff, 0.8); debris(ev.x, ev.y, ev.z, 6, [0x6b7280, 0x8b5a2b], { sp: 9, up: 6, floor: ev.y }); SFX.boom(0.9); }
  else if (k === 'junk') { debris(ev.x, ev.y + 0.5, ev.z, 6, [0xd4a373, 0x9ca3af, 0xef476f, 0xffd166], { sp: 3, up: 3, s: 0.45, floor: ev.y }); puff(ev.x, ev.y, ev.z, 6, 0xd6c3a0, { s: 0.5, s1: 1.4 }); SFX.boom(0.35); }
  else if (k === 'crack') { puff((ev.x + ev.x1) / 2, ev.y, (ev.z + ev.z1) / 2, 14, 0xc2a37a, { spread: 14, s: 0.7, s1: 2, sp: 2 }); SFX.boom(0.5); }
  else if (k === 'wreck') { const b = W.buildings.find((q) => q.id === ev.b); if (b) { puff(b.x, b.baseY + 1, b.z, 22, [0xd6c3a0, 0xbfb5a5, 0xe5ddd0], { spread: Math.max(b.w, b.d), sp: 5, up: 3, s: 1.2, s1: 3.2, life: 1.8 }); debris(b.x, b.baseY + b.h * 0.6, b.z, 14, [b.wall, b.roof, b.trim, 0xcfd6dd], { sp: 8, up: 9, s: 0.7, floor: b.baseY }); SFX.boom(0.8); } }
  else if (k === 'splash') { puff(ev.x, ev.y, ev.z, 8, 0xffffff, { sp: 3, up: 5, s: 0.4, s1: 1 }); }
  else if (k === 'hit') { sparks(ev.x, ev.y + 1.2, ev.z, 10, 0xffe14d, { sp: 5 }); }
  else if (k === 'revive') { sparks(ev.x, ev.y + 1, ev.z, 24, 0x4ade80, { sp: 4, g: -2 }); }
  else if (k === 'coin') { sparks(ev.x, ev.y + 0.5, ev.z, 8, 0xffd23f, { sp: 3, g: 4 }); }
  else if (k === 'sfx') { SFX[ev.n] && SFX[ev.n](); }
}

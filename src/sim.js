// game state + host simulation: rounds, waves, damage, knockouts, helpers, coins, CPU survivors
import { DZ, ORDER, shelter, pickRandom, dzName } from './disasters.js';
import { groundAt, collide, padAt, UNDER, buildingAt, roomAt } from './world.js';
import { wreckBuilding, repairBuilding } from './build.js';

export const S = { phase: 'lobby', t: 0, wave: 0, waves: 5, map: null, dz: null, next: null, picked: false, players: [], haz: [], env: {}, wrecked: [], coins: [], star: null, fx: [], msgs: [], hid: 0, dzT: 0, dzDur: 30, last: null, round: 0 };
export const CPU_NAMES = ['Rex', 'Luna', 'Max', 'Pip', 'Zoe', 'Bolt'];
const R = Math.random;
export function freshEnv() { return { water: null, shake: 0, rain: 0, snow: 0, ash: 0, hail: 0, wind: 0, cold: 0 }; }
export function maxHp(upg) { return 100 + 25 * ((upg && upg.hp) | 0); }
export function newPlayer(o) {
  return Object.assign({ id: 0, pid: null, name: 'Player', cpu: false, look: {}, x: 0, y: 0.3, z: 0, yaw: 0, vy: 0, vx: 0, vz: 0, kx: 0, kz: 0, hp: 100, max: 100, st: 'ok', koT: 0, inv: 0, an: 'idle', sp: 0, sh: 0, shUses: 0, fuel: 2.5, upg: {}, waveKO: false, rev: 0, tpN: 0, grounded: true, coinsWave: 0, revives: 0, kos: 0, ai: {} }, o);
}
/* ---------------- shared movement (host for its players, each guest for itself) ---------------- */
export function movePlayer(p, inp, dt, W, env) {
  if (p.st === 'ko' || p.st === 'float') { p.an = p.st === 'ko' ? 'ko' : 'float'; return; }
  const upg = p.upg || {};
  const water = env.water != null ? env.water : (W.sea != null ? W.sea : -99);
  const swim = water > p.y + 0.9 && p.y > UNDER + 8;
  let sp = 6.2 * (1 + 0.15 * (upg.speed | 0)) * (swim ? 0.55 : 1);
  const tx = inp.x * sp, tz = inp.z * sp, k = Math.min(1, dt * (p.grounded || swim ? 12 : 4));
  p.vx += (tx - p.vx) * k; p.vz += (tz - p.vz) * k;
  const mv = Math.hypot(inp.x, inp.z);
  if (mv > 0.1) { const want = Math.atan2(inp.x, inp.z); let d = want - p.yaw; while (d > Math.PI) d -= 6.283; while (d < -Math.PI) d += 6.283; p.yaw += d * Math.min(1, dt * 14); }
  if (inp.jump && (p.grounded || swim)) { p.vy = swim ? 6 : 8.6; p.grounded = false; p.jumped = true; }
  if (inp.jet && upg.jetpack && p.fuel > 0) { p.vy = Math.min(p.vy + 46 * dt, 7.5); p.fuel -= dt; p.jetOn = true; } else p.jetOn = false;
  if (p.grounded && !inp.jet) p.fuel = Math.min(2.5, p.fuel + dt * 0.6);
  p.vy -= 24 * dt; if (swim) { p.vy += (water - 0.95 - p.y) * 30 * dt; p.vy *= Math.exp(-3 * dt); }
  p.x += (p.vx + p.kx) * dt; p.z += (p.vz + p.kz) * dt; p.y += p.vy * dt;
  const kd = Math.exp(-2.5 * dt); p.kx *= kd; p.kz *= kd;
  collide(W, p, 0.4, 1.6);
  const g = groundAt(W, p.x, p.z, p.y);
  if (p.y <= g) { if (p.vy < -26 && !p.cpu) p.hardLand = true; p.y = g; p.vy = 0; p.grounded = true; } else p.grounded = p.y - g < 0.05;
  if (p.y < UNDER - 20 || p.y < -60 && p.y > UNDER + 8) { const s = W.spawns[0]; p.x = s[0]; p.z = s[1]; p.y = 2; p.vy = 0; }
  p.sp = Math.hypot(p.vx, p.vz) / 6.2;
  const sh = shelter(W, p);
  p.an = swim ? 'swim' : !p.grounded ? 'jump' : p.sp > 0.15 ? 'run' : (sh.table && S.dz === 'quake' && S.phase !== 'calm') ? 'cover' : (S.phase === 'warn' && !p.cpu && sh.out ? 'idle' : 'idle');
  if (p.an === 'idle' && S.phase === 'active' && sh.out && p.cpu && R() < 0.002) p.an = 'panic';
}
export function usePad(p, W) {
  const pad = padAt(W, p.x, p.y, p.z); if (!pad) return null;
  p.x = pad.to.x; p.y = pad.to.y + 0.05; p.z = pad.to.z; p.vy = 0; p.vx = p.vz = 0;
  if (pad.kind === 'down') p.roomBase = pad.b.baseY;
  return pad;
}
/* ---------------- host: rounds ---------------- */
export const H = { W: null, scene: null, hooks: {} };
export function startRound(W, scene, mapId, humans, waves) {
  H.W = W; H.scene = scene;
  Object.assign(S, { phase: 'calm', t: 14, wave: 0, waves: waves || 5, map: mapId, dz: null, next: null, picked: false, haz: [], env: freshEnv(), wrecked: [], fx: [], msgs: [], hid: 0, last: null, round: (S.round || 0) + 1, coinBank: {} });
  W.buildings.forEach((b) => repairBuilding(W, b));
  S.players = [];
  humans.forEach((h, i) => S.players.push(newPlayer({ id: i, pid: h.pid, name: h.name, look: h.look, upg: h.upg || {}, cpu: false })));
  let n = 0; while (S.players.length < 4) { const i = S.players.length; S.players.push(newPlayer({ id: i, name: CPU_NAMES[(n + S.round) % CPU_NAMES.length], cpu: true, look: cpuLook(n), upg: { hp: 1 } })); n++; }
  S.players.forEach((p, i) => { const s = W.spawns[i % W.spawns.length]; p.x = s[0]; p.z = s[1]; p.y = groundAt(W, p.x, p.z, 50); p.max = maxHp(p.upg); p.hp = p.max; p.yaw = Math.atan2(-p.x, -p.z); });
  S.next = pickRandom(W, null);
  spawnCoins(W);
  msg('*', 'Round start! Explore and grab coins before the first disaster.');
}
function cpuLook(i) { const sh = [0xef4444, 0x22c55e, 0xf59e0b, 0xa855f7, 0x14b8a6, 0xec4899], hats = ['cowboy', 'beanie', 'party', 'chef', 'dino', 'cap'], sk = [0xe0a979, 0xf6c9a0, 0x8a5a3b, 0xb97a4f, 0xffd9b8]; return { shirt: sh[i % 6], pants: [0x1e3a8a, 0x3f3f46, 0x065f46, 0x7c2d12][i % 4], skin: sk[i % 5], hair: [0x111111, 0x6b3e1e, 0xd4a017, 0x3a2516][i % 4], hat: hats[i % 6], hatColor: [0x3b82f6, 0xfacc15, 0xef4444, 0x22c55e][i % 4] }; }
function spawnCoins(W) {
  const spots = W.coinSpots; S.coins = spots.map((c, i) => ({ i, x: c.x, z: c.z, y: c.y != null ? c.y + 0.9 : groundAt(W, c.x, c.z, 50) + 0.9, on: false }));
  const n = Math.min(S.coins.length, 26); const idx = S.coins.map((c, i) => i).sort(() => R() - 0.5).slice(0, n); idx.forEach((i) => S.coins[i].on = true);
  S.coins.forEach((c) => { if (W.coinSpots[c.i].under || W.coinSpots[c.i].y != null) c.on = true; });
  const s = spots[(R() * spots.length) | 0]; S.star = { x: s.x, z: s.z, y: (s.y != null ? s.y : groundAt(W, s.x, s.z, 50)) + 1.2, on: true };
}
export function msg(pid, text, coins) { S.msgs.push({ pid, text, coins: coins || 0, id: (S.msgN = (S.msgN || 0) + 1) }); }
export function award(p, n, why) { if (p.cpu) return; p.coinsWave += n; msg(p.pid, why, n); }
export function pickNext(id) { if (S.phase !== 'calm' || !DZ[id]) return false; S.next = id; S.picked = true; return true; }

const ctx = {
  k: 1,
  hit(p, dmg, kind, from) {
    if (p.st !== 'ok' || p.inv > 0) return;
    if (p.sh > 0) { if (dmg >= 5) S.fx.push({ k: 'sfx', n: 'shield' }); return; }
    const arm = [0, 0.2, 0.35, 0.45][(p.upg.armor | 0)] || 0; let d = dmg * (1 - arm);
    if (p.upg.umbrella && (kind === 'hail' || kind === 'boom' || kind === 'bonk') && shelter(H.W, p).out) d *= kind === 'hail' ? 0 : 0.5;
    p.hp -= d;
    if (dmg >= 5) { S.fx.push({ k: 'hit', x: p.x, y: p.y, z: p.z, pid: p.pid, id: p.id }); if (from && from.x != null) { const dx = p.x - from.x, dz = p.z - from.z, L = Math.hypot(dx, dz) || 1; p.kx += dx / L * 7; p.kz += dz / L * 7; p.vy = Math.max(p.vy, 5); } p.hurtT = 0.4; }
    if (p.hp <= 0) ko(p, kind);
  },
  wreck(b) { if (wreckBuilding(H.W, H.scene, b)) { S.wrecked.push(b.id); S.fx.push({ k: 'wreck', b: b.id }); S.players.forEach((p) => { if (p.st === 'ok' && p.y > UNDER + 8 && Math.abs(p.x - b.x) < b.w / 2 && Math.abs(p.z - b.z) < b.d / 2 && p.y < b.baseY + b.h + 1) { ctx.hit(p, 25, 'bonk', { x: b.x, z: b.z }); } }); } },
  tp(p) { p.tpN++; },
  shielded: (p) => p.sh > 0,
  event(p, e) { if (e === 'beamed') { msg(p.pid, '🛸 BEAMED UP! Wheee!'); p.beamed = true; } }
};
function ko(p, kind) {
  p.hp = 0; p.st = 'ko'; p.koT = 7; p.waveKO = true; p.rev = 0; p.kos++; p.vx = p.vz = 0;
  S.fx.push({ k: 'sfx', n: 'ko', pid: p.pid }); msg(p.pid, p.cpu ? null : '💫 Knocked out! A friend can help you up, or wait a moment.');
  if (!p.cpu) msg('*', null);
}
function respawn(p) {
  const d = S.phase === 'active' || S.phase === 'warn' ? DZ[S.dz] : null; let t = null;
  if (d) { const ts = d.targets(H.W, S).filter((q) => !(q.b && q.b.wrecked)); if (ts.length) t = ts.reduce((a, b) => Math.hypot(a.x - p.x, a.z - p.z) < Math.hypot(b.x - p.x, b.z - p.z) ? a : b); }
  if (t && t.under && t.pad) { p.x = t.pad.to.x + (R() - 0.5); p.y = t.pad.to.y; p.z = t.pad.to.z + (R() - 0.5); p.roomBase = t.b.baseY; }
  else if (t && t.kind === 'pad' && t.pad) { p.x = t.pad.to.x; p.y = t.pad.to.y; p.z = t.pad.to.z; }
  else if (t) { p.x = t.x + (R() - 0.5); p.y = t.y + 0.3; p.z = t.z + (R() - 0.5); }
  else { const s = H.W.spawns[p.id % 4]; p.x = s[0]; p.z = s[1]; p.y = groundAt(H.W, p.x, p.z, 50); }
  p.st = 'ok'; p.hp = Math.round(p.max * 0.6); p.inv = 3; p.vy = 0; p.kx = p.kz = 0; p.tpN++;
  msg(p.pid, p.cpu ? null : '🚁 A rescue drone dropped you somewhere safer!');
}
/* ---------------- host tick ---------------- */
export function hostTick(dt, W, humanInputs) {
  S.env.shake = Math.max(0, (S.env.shake || 0) - dt * 1.2);
  if (S.phase === 'lobby' || S.phase === 'results') return;
  S.t -= dt;
  ctx.k = 1 + 0.1 * Math.max(0, S.wave - 1);
  // phase machine
  if (S.phase === 'calm' && S.t <= 0) {
    S.wave++; S.dz = S.next || pickRandom(W, S.last); S.phase = 'warn'; S.t = 7; S.haz = [];
    S.players.forEach((p) => { p.waveKO = false; p.coinsWave = 0; p.shUses = 0; p.ai.tgt = null; p.ai.react = 0.6 + R() * 2.2; });
    S.fx.push({ k: 'sfx', n: 'siren' });
  } else if (S.phase === 'warn' && S.t <= 0) {
    S.phase = 'active'; S.dzDur = DZ[S.dz].dur; S.t = S.dzDur; S.dzT = 0; S.env = Object.assign(freshEnv(), { shake: S.env.shake }); DZ[S.dz].start(S, W, ctx);
  } else if (S.phase === 'active') {
    S.dzT += dt; DZ[S.dz].tick(S, W, dt, ctx);
    if (S.t <= 0) endWave(W);
  } else if (S.phase === 'calm' && S.env.water != null) { S.env.water += ((S.env.waterBase || -1) - S.env.water) * dt * 0.6; }
  // hazards
  if (S.phase === 'active') { for (const h of S.haz) { h.t += dt; if (h.t >= h.T && !h.done) { h.done = true; DZ[S.dz].impact && DZ[S.dz].impact(h, S, W, ctx); } } S.haz = S.haz.filter((h) => !h.done); } else S.haz = [];
  // players
  for (const p of S.players) {
    if (p.inv > 0) p.inv -= dt; if (p.sh > 0) p.sh -= dt; if (p.hurtT > 0) p.hurtT -= dt;
    if (p.st === 'ko') {
      p.koT -= dt;
      const helper = S.players.find((q) => q !== p && q.st === 'ok' && Math.hypot(q.x - p.x, q.z - p.z) < 2.2 && Math.abs(q.y - p.y) < 1.5);
      if (helper) { p.rev += dt; if (p.rev > 1.6) { p.st = 'ok'; p.hp = Math.round(p.max * 0.5); p.inv = 2.5; S.fx.push({ k: 'revive', x: p.x, y: p.y, z: p.z }); S.fx.push({ k: 'sfx', n: 'win' }); helper.revives++; award(helper, 15, '🤝 You helped ' + p.name + ' up! +15'); if (!helper.cpu) helper.helped = (helper.helped || 0) + 1; msg(p.pid, p.cpu ? null : '🤝 ' + helper.name + ' helped you up!'); } }
      else p.rev = Math.max(0, p.rev - dt);
      if (p.koT <= 0) respawn(p);
      continue;
    }
    if (p.st === 'ok') { const rg = (p.upg.regen | 0); if (rg && p.hp < p.max) p.hp = Math.min(p.max, p.hp + rg * dt); if (S.phase === 'calm') p.hp = Math.min(p.max, p.hp + 6 * dt); }
    if (p.cpu) { const inp = botThink(p, dt, W); movePlayer(p, inp, dt, W, S.env); if (inp.pad) usePad(p, W); }
    else if (humanInputs && humanInputs[p.id]) { /* humans move on their own client */ }
    // coins (host decides pickups for everyone)
    if (p.st === 'ok') {
      const mag = p.upg.magnet ? 7 : 1.3;
      for (const c of S.coins) { if (!c.on) continue; const d = Math.hypot(c.x - p.x, c.z - p.z), dy = Math.abs(c.y - 0.9 - p.y); if (dy < 2.2 && d < mag) { if (d < 1.3) { c.on = false; S.fx.push({ k: 'coin', x: c.x, y: c.y, z: c.z, pid: p.pid }); if (!p.cpu) { award(p, 5, null); S.fx.push({ k: 'sfx', n: 'coin', pid: p.pid }); } } else if (p.upg.magnet) { c.x += (p.x - c.x) * dt * 4; c.z += (p.z - c.z) * dt * 4; } } }
      if (S.star && S.star.on && Math.hypot(S.star.x - p.x, S.star.z - p.z) < 1.5 && Math.abs(S.star.y - 1.2 - p.y) < 2.2) { S.star.on = false; S.fx.push({ k: 'coin', x: S.star.x, y: S.star.y, z: S.star.z }); if (!p.cpu) { award(p, 25, '⭐ Lucky star! +25'); S.fx.push({ k: 'sfx', n: 'cash', pid: p.pid }); } }
    }
  }
}
function endWave(W) {
  const id = S.dz; S.last = id;
  S.players.forEach((p) => {
    if (p.st === 'float') { p.st = 'ok'; p.y = groundAt(W, p.x, p.z, 50); }
    if (p.cpu) return;
    if (!p.waveKO) { award(p, 20 + 5 * S.wave, '✅ Survived the ' + dzName(id, W).toLowerCase() + '! +' + (20 + 5 * S.wave)); p.survivedIds = p.survivedIds || {}; p.survivedIds[id] = 1; }
    else award(p, 8, '💪 Good try! +8');
    p.stats = { id, ko: p.waveKO, under: p.y < UNDER + 8, high: p.y > 3.6, beamed: p.beamed, helped: p.helped || 0, map: W.id };
  });
  H.hooks.waveEnd && H.hooks.waveEnd(id);
  S.haz = [];
  if (S.wave >= S.waves) { S.phase = 'results'; S.t = 0; S.players.forEach((p) => { if (!p.cpu) award(p, 40, '🏁 Round complete! +40'); }); H.hooks.roundEnd && H.hooks.roundEnd(); return; }
  S.phase = 'calm'; S.t = 11; S.picked = false; S.next = pickRandom(W, id);
  // tidy: clear active weather, receding water stays a moment
  const water = S.env.water, base = S.env.waterBase; S.env = freshEnv(); if (water != null) { S.env.water = water; S.env.waterBase = base; }
  // refresh some coins + star
  S.coins.forEach((c) => { if (!c.on && R() < 0.5) c.on = true; });
  const sp = W.coinSpots[(R() * W.coinSpots.length) | 0]; S.star = { x: sp.x, z: sp.z, y: (sp.y != null ? sp.y : groundAt(W, sp.x, sp.z, 50)) + 1.2, on: true };
}
/* ---------------- CPU survivors ---------------- */
function botThink(p, dt, W) {
  const a = p.ai, inp = { x: 0, z: 0, jump: false, pad: false };
  const ph = S.phase, under = p.y < UNDER + 8;
  let goal = null;
  if (ph === 'calm' || ph === 'results') {
    a.tgt = null;
    if (under) { a.upT = (a.upT || 1 + R() * 3) - dt; if (a.upT <= 0) { a.upT = 0; const pad = W.pads.find((q) => q.kind === 'up' && roomAt(W, p.x, p.z) === q.room); if (pad) { goal = { x: pad.x, z: pad.z }; if (Math.hypot(pad.x - p.x, pad.z - p.z) < 0.9) inp.pad = true; } } }
    else if (p.y > 3 && W.buildings.some((b) => b.elevator && Math.abs(p.x - b.x) < b.w / 2 && Math.abs(p.z - b.z) < b.d / 2)) { const pad = W.pads.find((q) => q.kind === 'elevdown' && Math.abs(q.y - p.y) < 1.5 && Math.hypot(q.x - p.x, q.z - p.z) < 15); if (pad) { goal = pad; if (Math.hypot(pad.x - p.x, pad.z - p.z) < 0.9) inp.pad = true; } }
    else {
      const ko = S.players.find((q) => q.st === 'ko' && Math.hypot(q.x - p.x, q.z - p.z) < 14 && Math.abs(q.y - p.y) < 2);
      if (ko) goal = ko;
      else { let best = null, bd = 22; for (const c of S.coins) if (c.on && Math.abs(c.y - 0.9 - p.y) < 1.5) { const d = Math.hypot(c.x - p.x, c.z - p.z); if (d < bd) { bd = d; best = c; } } goal = best || a.wander; if (!goal || Math.hypot(goal.x - p.x, goal.z - p.z) < 1) a.wander = { x: p.x + (R() - 0.5) * 20, z: p.z + (R() - 0.5) * 20 }; }
    }
  } else {
    const d = DZ[S.dz]; a.react -= dt;
    const sh = shelter(W, p), safe = d.safe(p, sh, S, W);
    if (safe && safe !== 'maybe') { a.tgt = null; a.safeT = (a.safeT || 0) + dt; }
    else if (a.react <= 0) {
      if (!a.tgt || (a.tgt.b && a.tgt.b.wrecked) || a.retry <= 0) { a.tgt = chooseTarget(p, d, W); a.wp = 0; a.retry = 14; }
      a.retry -= dt;
      const t = a.tgt;
      if (t) {
        const path = [];
        if (t.b && !(buildingAt(W, p.x, p.y, p.z) === t.b)) { path.push(t.b.doorOut, t.b.doorIn); }
        if (t.kind === 'high' && t.foot && p.y < t.y - 1) path.push(t.foot);
        path.push(t);
        a.wp = Math.min(a.wp || 0, path.length - 1);
        let w = path[a.wp]; while (w && Math.hypot(w.x - p.x, w.z - p.z) < 0.9 && a.wp < path.length - 1) { a.wp++; w = path[a.wp]; }
        goal = w;
        if ((t.kind === 'pad') && Math.hypot(t.x - p.x, t.z - p.z) < 0.9) { inp.pad = true; a.tgt = null; }
      }
    }
    // dodge telegraphed hazards
    for (const h of S.haz) {
      if (h.k === 'beam' || h.k === 'crack' || h.k === 'collapse') continue;
      const dd = Math.hypot(p.x - h.x, p.z - h.z); if (dd < h.r + 0.6 && h.t > 0.3 && !(safe && safe !== 'maybe' && h.k !== 'junk')) { const L = dd || 1; inp.x = (p.x - h.x) / L; inp.z = (p.z - h.z) / L; a.dodge = 0.4; return inp; }
    }
  }
  if (goal) {
    const dx = goal.x - p.x, dz = goal.z - p.z, L = Math.hypot(dx, dz);
    if (L > 0.4) { inp.x = dx / L; inp.z = dz / L; if (L < 2) { inp.x *= 0.6; inp.z *= 0.6; } }
    // unstick
    const moved = Math.hypot(p.x - (a.lx || 0), p.z - (a.lz || 0)); a.lx = p.x; a.lz = p.z;
    if (L > 1 && moved < dt * 0.8) a.stuck = (a.stuck || 0) + dt; else a.stuck = Math.max(0, (a.stuck || 0) - dt);
    if (a.stuck > 0.8) { a.side = a.side || (R() < 0.5 ? 1 : -1); const sx = -inp.z * a.side, sz = inp.x * a.side; inp.x = sx; inp.z = sz; if (a.stuck > 1.6) { a.stuck = 0; a.side = -a.side; inp.jump = true; } }
  }
  return inp;
}
function chooseTarget(p, d, W) {
  const ts = d.targets(W, S).filter((t) => !(t.b && t.b.wrecked));
  if (!ts.length) return null;
  let best = null, bd = 1e9;
  for (const t of ts) { let c = Math.hypot(t.x - p.x, t.z - p.z) + (t.b ? 6 : 0) + R() * 8; if (t.kind === 'high' && t.foot) c += 6; if (c < bd) { bd = c; best = t; } }
  return best;
}
export function nearestSafe(p, W) {
  if (S.phase !== 'warn' && S.phase !== 'active') return null; const d = DZ[S.dz];
  const ts = d.targets(W, S).filter((t) => !(t.b && t.b.wrecked)); let best = null, bd = 1e9;
  for (const t of ts) { const c = Math.hypot(t.x - p.x, t.z - p.z) + Math.abs(t.y - p.y) * 0.5; if (c < bd) { bd = c; best = t; } }
  return best;
}
export { ctx as HCTX, ORDER, DZ };

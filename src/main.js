// Grok Disaster Zone - boot, game loop, camera, survivors, HUD and menus
import * as THREE from 'three';
import { G, initGfx, render, setMood, setQuality } from './gfx.js';
import { buildMap, MAPS } from './maps.js';
import { makeSurvivor, animSurvivor, setHat, setJetpack } from './models.js';
import { setupAmbient, updateAmbient, clearAmbient } from './ambient.js';
import { initFX, updateFX, beginTele, endTele, clearFX, FX, puff, bakeWaterHeight } from './fx.js';
import { DZ, ORDER, shelter, drawDisaster, playFx, resetVisuals, dzName } from './disasters.js';
import { S, H, startRound, hostTick, movePlayer, usePad, nearestSafe, pickNext, maxHp, newPlayer, msg } from './sim.js';
import { padAt, UNDER, buildingAt, groundAt, roomAt } from './world.js';
import { wreckBuilding, repairBuilding } from './build.js';
import { I, initInput, readMove } from './input.js';
import { initAudio, SFX, setSound, ambience } from './audio.js';
import { S as SV, load, save, SHOP, HATSHOP, SHIRTS, ACH, lvl, addCoins, unlock, myUpg } from './save.js';
import { Net } from './net.js';
import { chunkStatic, farCull, warmShaders, freeTree } from './perf.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const Q = new URLSearchParams(location.search);
const App = window.__dz = { ready: false, mode: 'menu', W: null, S, G, I, me: null, myPid: 'me', models: new Map(), paused: false, simSpeed: 1 };
load();
initGfx($('c'));
// graphics are never downgraded automatically any more. Older versions could silently flip a phone to LOW, so
// that saved LOW is cleared once; LOW now only ever comes from the player picking it in Settings.
if (!SV.d.opts.gfxManual) { if (SV.d.opts.gfx === 'low') SV.d.opts.gfx = 'high'; SV.d.opts.gfxManual = 1; save(); }
if (SV.d.opts.gfx === 'low' || Q.get('gfx') === 'low') setQuality('low');
initFX(); initInput(); setSound(SV.d.opts.sound);

/* ---------------- map loading ---------------- */
function loadMap(id) {
  if (App.W && App.W.id === id) return App.W;
  if (App.W) { G.scene.remove(App.W.root); freeTree(App.W.root, true); App.W = null; } // free the old map's GPU memory
  App.models.forEach((m) => { G.scene.remove(m.root); freeTree(m.root); }); App.models.clear();
  resetVisuals(); clearFX();
  const W = buildMap(id, G.scene); App.W = W; H.W = W; H.scene = W.root;
  W.chunks = chunkStatic(W, W.root, 40); // region culling cells
  setMood(W.meta.mood, true); bakeWaterHeight(W); setupAmbient(W, G.scene, G.quality === 'low');
  G.renderer.renderLists.dispose(); warmShaders(G.renderer, G.scene, G.camera);
  return W;
}
/* ---------------- survivors ---------------- */
function modelFor(p) {
  let m = App.models.get(p.id);
  const key = JSON.stringify(p.look) + (p.upg && p.upg.jetpack ? 'j' : '');
  if (m && m.key !== key) { G.scene.remove(m.root); freeTree(m.root); m = null; }
  if (!m) { m = makeSurvivor(p.look); m.key = key; setJetpack(m, p.upg && p.upg.jetpack); m.root.position.set(p.x, p.y, p.z); G.scene.add(m.root); App.models.set(p.id, m); }
  return m;
}
function drawSurvivors(dt) {
  const seen = new Set();
  for (const p of S.players) {
    const m = modelFor(p); seen.add(p.id);
    const isMe = App.me && p.id === App.me.id;
    const src = isMe ? App.me : p;
    if (isMe || App.mode !== 'guest') m.root.position.set(src.x, src.y, src.z);
    else { const k = Math.min(1, dt * 12); m.root.position.x += (p.x - m.root.position.x) * k; m.root.position.y += (p.y - m.root.position.y) * k; m.root.position.z += (p.z - m.root.position.z) * k; }
    let dy = src.yaw - m.root.rotation.y; while (dy > Math.PI) dy -= 6.283; while (dy < -Math.PI) dy += 6.283; m.root.rotation.y += dy * Math.min(1, dt * 15);
    const st = p.st === 'ko' ? 'ko' : p.st === 'float' ? 'float' : src.an || 'idle';
    animSurvivor(m, st, dt, src.sp || 0, G.t + p.id);
    m.bubble.visible = p.sh > 0; if (m.bubble.visible) m.bubble.scale.setScalar(1 + Math.sin(G.t * 8) * 0.04);
    m.flames.visible = !!src.jetOn; if (src.jetOn && Math.random() < 0.5) puff(m.root.position.x, m.root.position.y + 0.6, m.root.position.z, 1, [0xffb347, 0xffffff], { sp: 0.5, up: -3, s: 0.2, s1: 0.5, life: 0.4 });
    const wet = (S.dz === 'blizzard' || S.dz === 'lightning' || S.dz === 'volcano') && S.phase === 'active';
    m.umbrella.visible = !!(p.upg && p.upg.umbrella) && wet && st !== 'ko' && st !== 'swim';
    m.root.visible = !(p.inv > 0 && p.st === 'ok' && Math.floor(G.t * 12) % 2 === 0);
  }
  App.models.forEach((m, id) => { if (!seen.has(id)) { G.scene.remove(m.root); freeTree(m.root); App.models.delete(id); } });
}
/* ---------------- coins ---------------- */
const _o = new THREE.Object3D();
function drawCoins() {
  let n = 0;
  if (S.coins && App.mode !== 'menu') for (const c of S.coins) { if (!c.on) continue; _o.position.set(c.x, c.y + Math.sin(G.t * 3 + c.i) * 0.15, c.z); _o.rotation.set(0, G.t * 2.5 + c.i, 0); _o.scale.setScalar(1); _o.updateMatrix(); FX.coins.setMatrixAt(n++, _o.matrix); }
  FX.coins.count = n; FX.coins.instanceMatrix.needsUpdate = true;
  if (S.star && S.star.on && App.mode !== 'menu') { _o.position.set(S.star.x, S.star.y + Math.sin(G.t * 2) * 0.25, S.star.z); _o.rotation.set(0, G.t * 2, 0); _o.updateMatrix(); FX.stars.setMatrixAt(0, _o.matrix); FX.stars.count = 1; FX.stars.instanceMatrix.needsUpdate = true; } else FX.stars.count = 0;
}
/* ---------------- camera ---------------- */
let hiddenB = null; const camT = new THREE.Vector3(), camP = new THREE.Vector3();
function updateCamera(dt) {
  const W = App.W, me = App.me;
  if (App.cam) { if (G.baseFov && G.camera.fov !== G.baseFov) { G.camera.fov = G.baseFov; G.camera.updateProjectionMatrix(); } G.camera.position.set(App.cam.x, App.cam.y, App.cam.z); G.camera.lookAt(App.cam.lx, App.cam.ly, App.cam.lz); G.focus.set(App.cam.lx, 0, App.cam.lz); if (me) { const b = buildingAt(W, me.x, me.y, me.z); if (b !== hiddenB) { if (hiddenB) hiddenB.upper.visible = !hiddenB.wrecked; if (b && App.cam.hide !== false) b.upper.visible = false; hiddenB = b; } } return; }
  if (App.mode === 'menu' || !me) {
    const a = G.t * 0.06; camP.set(Math.cos(a) * 52, 30, Math.sin(a) * 52); G.camera.position.lerp(camP, 0.05); G.camera.lookAt(0, 2, 0); G.focus.set(0, 0, 0);
    if (hiddenB) { hiddenB.upper.visible = !hiddenB.wrecked; hiddenB = null; } return;
  }
  const under = me.y < UNDER + 8, b = under ? null : buildingAt(W, me.x, me.y, me.z);
  if (b !== hiddenB) { if (hiddenB) hiddenB.upper.visible = !hiddenB.wrecked; if (b) b.upper.visible = false; hiddenB = b; }
  let dist = I.dist, pitch = I.pitch;
  if (b) { dist = Math.min(dist, 8); pitch = Math.max(pitch, 0.95); }
  if (under) { dist = Math.max(7.5, Math.min(dist, 9)); pitch = Math.min(0.85, Math.max(pitch, 0.6)); }
  camT.set(me.x, me.y + 1.4, me.z);
  const cx = Math.sin(I.yaw) * Math.cos(pitch), cy = Math.sin(pitch), cz = Math.cos(I.yaw) * Math.cos(pitch);
  // pull in if a building is between camera and player
  if (!b && !under) for (let d = 1.5; d < dist; d += 0.6) { const x = camT.x + cx * d, y = camT.y + cy * d, z = camT.z + cz * d; const hit = W.buildings.some((q) => !q.wrecked && x > q.x - q.w / 2 - 0.2 && x < q.x + q.w / 2 + 0.2 && z > q.z - q.d / 2 - 0.2 && z < q.z + q.d / 2 + 0.2 && y < q.baseY + q.h + 0.6 && y > q.baseY - 0.5); if (hit) { dist = Math.max(2.2, d - 0.6); break; } }
  if (under) dist = Math.min(dist, (UNDER + 9.5 - camT.y) / Math.max(0.2, cy));
  camP.set(camT.x + cx * dist, camT.y + cy * dist, camT.z + cz * dist);
  // interiors: keep the camera INSIDE the room / building footprint (dollhouse cutaway, roof + upper floors hidden)
  if (under) { const r = roomAt(W, me.x, me.z); if (r) {
    const cl = (p) => { p.x = Math.max(r.x0 + 0.7, Math.min(r.x1 - 0.7, p.x)); p.z = Math.max(r.z0 + 0.7, Math.min(r.z1 - 0.7, p.z)); };
    cl(camP);
    if (Math.hypot(camP.x - camT.x, camP.z - camT.z) < 3.5) { // too cramped for your angle: swing to the room's long axis, toward the far wall
      const lx = r.x1 - r.x0 >= r.z1 - r.z0, cx0 = (r.x0 + r.x1) / 2, cz0 = (r.z0 + r.z1) / 2;
      if (lx) { camP.x = camT.x + (camT.x < cx0 ? 1 : -1) * 7.5; camP.z = camT.z + (camT.z < cz0 ? 1 : -1) * 2.5; } else { camP.z = camT.z + (camT.z < cz0 ? 1 : -1) * 7.5; camP.x = camT.x + (camT.x < cx0 ? 1 : -1) * 2.5; }
      camP.y = UNDER + 7.6; cl(camP);
    }
    camP.y = Math.max(UNDER + 2.2, Math.min(UNDER + 9.5, camP.y)); } }
  else if (b) { camP.x = Math.max(b.ix0 + 0.5, Math.min(b.ix1 - 0.5, camP.x)); camP.z = Math.max(b.iz0 + 0.5, Math.min(b.iz1 - 0.5, camP.z)); camP.y = Math.max(camP.y, me.y + 3.2); }
  const tg = groundAt(W, camP.x, camP.z, camP.y + 2); if (!under && camP.y < tg + 0.6) camP.y = tg + 0.6;
  if (!under && FX.water.visible && camP.y < FX.water.position.y + 1.2) camP.y = FX.water.position.y + 1.2;
  const sh = (S.env && S.env.shake) || 0; if (sh > 0) { camP.x += (Math.random() - 0.5) * sh * 0.6; camP.y += (Math.random() - 0.5) * sh * 0.5; camP.z += (Math.random() - 0.5) * sh * 0.6; }
  G.camera.position.lerp(camP, Math.min(1, dt * 14)); G.camera.lookAt(camT);
  { const bf = G.baseFov || 62, tf = bf + (under ? 18 : b ? 8 : 0); if (Math.abs(G.camera.fov - tf) > 0.05) { G.camera.fov += (tf - G.camera.fov) * Math.min(1, dt * 6); G.camera.updateProjectionMatrix(); } }
  G.focus.set(me.x, under ? 0 : me.y, me.z);
}
/* ---------------- local player ---------------- */
function localControl(dt) {
  const me = App.me; if (!me) return;
  const mv = readMove();
  const c = Math.cos(I.yaw), s = Math.sin(I.yaw);
  const inp = { x: mv.x * c + mv.z * s, z: -mv.x * s + mv.z * c, jump: I.jumpQ, jet: I.jet };
  I.jumpQ = false;
  if (me.st === 'ok') { movePlayer(me, inp, dt, App.W, S.env); if (me.jumped) { me.jumped = false; SFX.jump(); } }
  else movePlayer(me, { x: 0, z: 0 }, dt, App.W, S.env);
  if (I.actQ) { I.actQ = false; if (me.st === 'ok') { const pad = usePad(me, App.W); if (pad) { SFX.pad(); fade(); if (pad.kind === 'down') toast('🔦 You are in the ' + pad.room.name + '. Safe from most disasters!'); } } }
  if (I.shieldQ) { I.shieldQ = false; tryShield(); }
}
function tryShield() {
  const me = App.me, L = lvl('shield'); if (!L || !me || me.st !== 'ok') return;
  if (S.phase !== 'active' && S.phase !== 'warn') return toast('Save your bubble for a disaster! 🫧');
  if (App.mode === 'guest') { Net.send({ t: 'shield' }); SFX.shield(); return; }
  const p = S.players.find((q) => q.id === me.id); if (p.shUses >= L) return toast('Bubble used up this wave');
  p.shUses++; p.sh = 5; SFX.shield();
}
/* ---------------- game flow ---------------- */
App.startSolo = function (mapId) {
  initAudio(); const W = loadMap(mapId);
  startRound(W, W.root, mapId, [{ pid: 'me', name: SV.d.name || 'You', look: SV.d.look, upg: myUpg() }], +(Q.get('waves') || 5));
  App.mode = 'solo'; App.myPid = 'me'; App.me = S.players[0]; enterGame();
};
App.startHosted = function (mapId, humans) { // online host
  initAudio(); const W = loadMap(mapId);
  startRound(W, W.root, mapId, humans, 5);
  App.mode = 'host'; App.myPid = Net.room.pid; App.me = S.players.find((p) => p.pid === App.myPid); enterGame();
  Net.broadcast({ t: 'start', map: mapId, players: S.players.map((p) => ({ id: p.id, pid: p.pid, name: p.name, cpu: p.cpu, look: p.look, upg: p.upg })) });
};
App.startGuest = function (d) {
  initAudio(); const W = loadMap(d.map); W.buildings.forEach((b) => repairBuilding(W, b));
  Object.assign(S, { phase: 'calm', t: 14, wave: 0, waves: 5, map: d.map, haz: [], env: {}, wrecked: [], coins: [], fx: [], msgs: [] });
  S.players = d.players.map((p) => newPlayer(p)); S.players.forEach((p) => { p.max = maxHp(p.upg); p.hp = p.max; const s = W.spawns[p.id % 4]; p.x = s[0]; p.z = s[1]; p.y = 0.3; });
  App.mode = 'guest'; App.myPid = Net.room.pid; const mine = S.players.find((p) => p.pid === App.myPid);
  App.me = newPlayer(Object.assign({}, mine)); App.me.upg = myUpg(); App.lastMsg = 0; App.wreckSeen = new Set(); App.tpN = mine.tpN;
  enterGame();
};
function enterGame() {
  const tb = $('toasts'); if (tb) tb.innerHTML = '';
  clearFX(); resetVisuals(); hidePanels(); $('title').classList.add('hidden'); $('hud').classList.remove('hidden');
  I.enabled = true; App.lastPhase = null; App.lastWave = 0; App.waveCoins = 0; App.roundCoins = 0; App.roundKO = false; App.roundSaved = false;
  SV.d.stats.maps[App.W.id] = 1; if (Object.keys(SV.d.stats.maps).length >= 4) achieve('travel'); save();
  if (!SV.d.howto) { SV.d.howto = true; save(); showHowTo(); }
  updateGadgets();
}
App.quit = function () {
  if (App.mode === 'host' || App.mode === 'guest') Net.leave();
  App.mode = 'menu'; App.me = null; S.phase = 'lobby'; S.players = []; S.haz = []; S.env = {}; I.enabled = false;
  App.W.buildings.forEach((b) => repairBuilding(App.W, b)); resetVisuals(); clearFX(); ambienceOff();
  $('hud').classList.add('hidden'); hidePanels(); showTitle();
};
function ambienceOff() { ['wind', 'rain', 'rumble'].forEach((n) => ambience(n, 0)); }
/* ---------------- events from the simulation ---------------- */
function handleFx(list) { for (const ev of list) { if (ev.pid && ev.pid !== App.myPid && (ev.k === 'sfx' && (ev.n === 'coin' || ev.n === 'cash' || ev.n === 'ko'))) continue; playFx(ev, App.W, SFX); if (ev.k === 'hit' && ev.pid === App.myPid) { SFX.hurt(); hurtFlash(); } } }
function handleMsgs(list) {
  for (const m of list) {
    if (m.pid !== '*' && m.pid !== App.myPid) continue;
    if (m.coins && m.pid === App.myPid) { addCoins(m.coins); App.roundCoins += m.coins; bumpCoins(); }
    if (m.text) toast(m.text, m.coins ? 'gold' : '');
  }
}
App.onWaveStats = function (st) { // my stats for the finished wave
  if (!st) return; const s = SV.d.stats;
  if (!st.ko) { s.waves++; s.survived[st.id] = (s.survived[st.id] || 0) + 1; achieve('first'); if (st.id === 'kaiju') achieve('kaiju'); if (st.under && App.W.id === 'area51' && App.me && App.W.rooms.some((r) => r.kind === 'bunker')) achieve('bunker'); if (st.id === 'flood' && st.high) achieve('dry'); if (ORDER.every((id) => s.survived[id])) achieve('allnine'); }
  else { s.kos++; App.roundKO = true; }
  if (st.beamed) achieve('beamed');
  if (st.helped) { s.revives += st.helped; if (s.revives >= 5) achieve('helper'); }
  if (s.earned >= 1000) achieve('rich');
  save();
};
App.onRoundEnd = function () { const s = SV.d.stats; s.rounds++; if (!App.roundKO) achieve('perfect'); if (s.rounds >= 10) achieve('rounds10'); save(); setTimeout(showResults, 1200); };
H.hooks.waveEnd = () => { S.players.forEach((p) => { if (p.cpu || !p.stats) return; if (p.pid === App.myPid) App.onWaveStats(p.stats); else Net.sendTo(p.pid, { t: 'wave', st: p.stats }); p.helped = 0; p.beamed = false; }); };
H.hooks.roundEnd = () => { App.onRoundEnd(); if (App.mode === 'host') Net.broadcast({ t: 'end' }); };
function achieve(id) { const a = unlock(id); if (a) { SFX.achieve(); toast(a.icon + ' Achievement: ' + a.name + '!', 'ach'); } }
/* ---------------- main loop ---------------- */
let last = performance.now(), snapAcc = 0, poseAcc = 0;
function frame(now) {
  requestAnimationFrame(frame);
  let dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (App.paused && App.mode === 'solo') dt = 0;
  step(dt);
  render(dt);
}
function step(dt) {
  const W = App.W;
  if (App.mode === 'solo' || App.mode === 'host') {
    localControl(dt);
    hostTick(dt * App.simSpeed, W);
    if (S.fx.length) { handleFx(S.fx); }
    if (S.msgs.length) handleMsgs(S.msgs);
    if (App.mode === 'host') { Net.queue(S.fx, S.msgs); snapAcc += dt; if (snapAcc > 0.1) { snapAcc = 0; Net.snapshot(); } }
    S.fx = []; S.msgs = [];
  } else if (App.mode === 'guest') {
    localControl(dt);
    for (const h of S.haz) h.t = Math.min(h.T, h.t + dt);
    poseAcc += dt; if (poseAcc > 0.066) { poseAcc = 0; const m = App.me; Net.send({ t: 'pose', x: +m.x.toFixed(2), y: +m.y.toFixed(2), z: +m.z.toFixed(2), yaw: +m.yaw.toFixed(2), an: m.an, sp: +(m.sp || 0).toFixed(2), jet: !!m.jetOn }); }
  }
  // visuals
  if (W) {
    beginTele(); drawDisaster(S, W, dt); endTele();
    updateFX(dt, App.me ? { x: App.me.x, y: Math.max(App.me.y, 0), z: App.me.z } : { x: 0, y: 0, z: 0 }, weatherNow());
    drawSurvivors(dt); drawCoins();
    updateAmbient(dt, W, S, S.players, G.t, G.camera); if (W.detail) W.detail.visible = G.quality === 'high';
  }
  updateCamera(dt);
  cullDetail();
  if (App.mode !== 'menu') { updateHud(dt); sounds(); }
}
let cullT = 0;
function cullDetail() { // interiors only near you, underground rooms only while you're down there
  const W = App.W; if (!W || (cullT++ % 6)) return; const me = App.me, f = me || { x: G.camera.position.x, y: 0, z: G.camera.position.z }, under = me && me.y < UNDER + 8;
  for (const b of W.buildings) if (b.inner) b.inner.visible = !!me && !under && Math.abs(f.x - b.x) < 26 + b.w / 2 && Math.abs(f.z - b.z) < 26 + b.d / 2;
  if (me) for (const f of W.fires) if ((!f.b || !f.b.wrecked) && Math.abs(f.x - me.x) < 30 && Math.abs(f.z - me.z) < 30) { const fx = f.b ? f.x : f.x, fz = f.b ? f.z : f.z; puff(f.fx != null ? f.fx : fx, (f.y || 0) + 0.5, f.fz != null ? f.fz : fz, 2, [0xff7b00, 0xffb703, 0xff4d00], { fire: 1, sp: 0.3, up: 2.2, s: 0.35, s1: 0.05, life: 0.7, spread: 0.6 }); }
  for (const r of W.rooms) r.group.visible = !!under && f.x > r.x0 - 3 && f.x < r.x1 + 3 && f.z > r.z0 - 3 && f.z < r.z1 + 3;
  farCull(W, G.camera);
}
function weatherNow() {
  const e = S.env || {}, on = S.phase === 'active'; const under = App.me && App.me.y < UNDER + 8;
  return { rain: on && !under ? e.rain || 0 : 0, snow: on && !under ? e.snow || 0 : 0, ash: on && !under ? e.ash || 0 : 0, hail: on && !under ? e.hail || 0 : 0, wind: e.wind || 0, groundY: App.me ? Math.max(0, groundAt(App.W, App.me.x, App.me.z, 200)) : 0 };
}
function sounds() { const e = S.env || {}, on = S.phase === 'active', under = App.me && App.me.y < UNDER + 8, v = under ? 0.3 : 1; ambience('wind', on ? Math.min(0.5, (e.wind || 0) * 0.05) * v : 0.02); ambience('rain', on ? (e.rain || 0) * 0.25 * v : 0); ambience('rumble', ((e.shake || 0) * 0.6)); }
/* ---------------- moods per phase ---------------- */
function moodFor() { if (S.phase === 'active' || (S.phase === 'warn' && S.dz)) return DZ[S.dz].mood; return App.W.meta.mood; }
/* ---------------- HUD ---------------- */
function buildHud() {
  const h = document.createElement('div'); h.id = 'hud'; h.className = 'hidden';
  h.innerHTML = `<div id="hpBox"><button id="menuBtn" class="hudbtn">☰</button><div class="hpbar"><i id="hpFill"></i><span id="hpTxt">100</span></div></div>
  <div id="coinBox" class="pill"><span class="coinIc">★</span><span id="coinTxt">0</span></div>
  <div id="waveBox"><div class="wavePill" id="wavePill">WAVE 1/5</div><div class="timer"><i id="timerFill"></i></div><div id="banner" class="banner hidden"><div class="t" id="banT"></div><div class="w" id="banW"></div></div><div id="safeChip" class="safe hidden"></div></div>
  <div id="calmCard" class="hidden"></div>
  <div id="toasts"></div>
  <div id="koBox" class="ko hidden"><div>💫 KNOCKED OUT!<br><small id="koTxt" style="font-size:14px"></small></div></div>
  <div id="joyHint">👆 Drag here to move</div>
  <div id="ctrls"><div id="gadCol" style="display:flex;flex-direction:column;gap:10px;align-items:center"><button id="bJet" class="cbtn gad hudbtn hidden">🚀</button><button id="bShield" class="cbtn gad hudbtn hidden">🫧</button></div><div style="display:flex;flex-direction:column;gap:12px;align-items:center"><button id="bAct" class="cbtn act hudbtn hidden">ENTER</button><button id="bJump" class="cbtn jump hudbtn">JUMP</button></div></div>
  <div id="joy"><div></div></div><div id="tags"></div><div id="fade"></div>`;
  $('ui').appendChild(h);
  const tap = (el, fn) => { el.addEventListener('touchstart', (e) => { e.preventDefault(); e.stopPropagation(); fn(); }, { passive: false }); el.addEventListener('mousedown', (e) => { e.stopPropagation(); fn(); }); };
  tap($('bJump'), () => { I.jumpQ = true; }); tap($('bAct'), () => { I.actQ = true; }); tap($('bShield'), () => { I.shieldQ = true; });
  const jet = $('bJet'); jet.addEventListener('touchstart', (e) => { e.preventDefault(); e.stopPropagation(); I.jet = true; }, { passive: false }); jet.addEventListener('touchend', () => I.jet = false); jet.addEventListener('mousedown', (e) => { e.stopPropagation(); I.jet = true; }); window.addEventListener('mouseup', () => I.jet = false);
  $('menuBtn').addEventListener('click', showPause);
}
function updateGadgets() { $('bShield').classList.toggle('hidden', !lvl('shield')); $('bJet').classList.toggle('hidden', !lvl('jetpack')); }
let lastCoins = -1, hudT = 0, tagEls = new Map();
function updateHud(dt) {
  const me = App.me, W = App.W; if (!me) return;
  const pv = S.players.find((p) => p.id === me.id) || me;
  if (App.mode === 'guest') { me.hp = pv.hp; me.max = pv.max; me.st = pv.st; me.sh = pv.sh; me.inv = pv.inv; }
  const hp = Math.max(0, pv.hp), mx = pv.max || 100;
  $('hpFill').style.width = (100 * hp / mx) + '%'; $('hpFill').classList.toggle('low', hp / mx < 0.35); $('hpTxt').textContent = Math.ceil(hp) + ' / ' + mx;
  if (SV.d.coins !== lastCoins) { lastCoins = SV.d.coins; $('coinTxt').textContent = SV.d.coins; }
  // phase change -> mood, sounds, banners
  const key = S.phase + S.wave;
  if (key !== App.lastPhase) {
    App.lastPhase = key; setMood(moodFor());
    if (S.phase === 'warn') { SFX.siren(); toast(DZ[S.dz].icon + ' ' + dzName(S.dz, W) + ' WARNING!'); }
    if (S.phase === 'active') { /* go */ }
    if (S.phase === 'calm' && S.wave > 0) { SFX.win(); }
  }
  const wp = $('wavePill'), tf = $('timerFill'), ban = $('banner'), chip = $('safeChip');
  if (S.phase === 'calm') {
    wp.textContent = S.wave === 0 ? 'GET READY! ' + Math.ceil(S.t) : 'BREAK - WAVE ' + (S.wave + 1) + '/' + S.waves + ' IN ' + Math.ceil(S.t);
    tf.style.width = Math.max(0, S.t / 14 * 100) + '%'; ban.classList.add('hidden'); chip.classList.add('hidden');
  } else if (S.phase === 'warn' || S.phase === 'active') {
    const d = DZ[S.dz];
    wp.textContent = 'WAVE ' + S.wave + '/' + S.waves + (S.phase === 'warn' ? '  ⚠️ ' + Math.ceil(S.t) : '  ⏱ ' + Math.ceil(S.t));
    tf.style.width = (S.phase === 'warn' ? S.t / 7 : S.t / (S.dzDur || 30)) * 100 + '%';
    ban.classList.remove('hidden'); ban.style.borderColor = d.color; $('banT').style.color = d.color; $('banT').textContent = d.icon + ' ' + dzName(S.dz, W); $('banW').textContent = S.phase === 'warn' ? d.warn : d.tip;
    ban.classList.toggle('flash', S.phase === 'warn');
    const sh = shelter(W, me), safe = me.st === 'ok' ? d.safe(me, sh, S, W) : null;
    chip.classList.remove('hidden');
    if (me.st !== 'ok') { chip.className = 'safe meh'; chip.textContent = me.st === 'float' ? '🛸 BEAMED UP!' : '💫 Knocked out'; }
    else if (safe === 'maybe') { chip.className = 'safe meh'; chip.textContent = '🟡 Pretty safe - sturdier is better!'; }
    else if (safe) { chip.className = 'safe ok'; chip.textContent = '✅ SAFE: ' + safe; }
    else { chip.className = 'safe bad'; chip.textContent = '⚠️ DANGER! Follow the green arrow'; }
  } else { ban.classList.add('hidden'); chip.classList.add('hidden'); }
  // arrow + beacon to the nearest safe spot
  const d = S.phase === 'warn' || S.phase === 'active' ? DZ[S.dz] : null; let showArrow = false;
  if (d && me.st === 'ok') {
    const sh = shelter(W, me), safe = d.safe(me, sh, S, W);
    if (!safe || safe === 'maybe') { const t = nearestSafe(me, W); if (t) { showArrow = true; const a = Math.atan2(t.x - me.x, t.z - me.z); FX.arrow.position.set(me.x + Math.sin(a) * 1.4, me.y + 2.4 + Math.sin(G.t * 5) * 0.1, me.z + Math.cos(a) * 1.4); FX.arrow.rotation.set(0, a, 0); FX.beacon.visible = true; FX.beacon.position.set(t.x, t.y + 15, t.z); } }
  }
  FX.arrow.visible = showArrow; if (!showArrow) FX.beacon.visible = false;
  // action button
  const pad = me.st === 'ok' ? padAt(W, me.x, me.y, me.z) : null; const ab = $('bAct');
  if (pad) { ab.classList.remove('hidden'); ab.textContent = pad.label; } else ab.classList.add('hidden');
  // KO overlay
  $('koBox').classList.toggle('hidden', pv.st !== 'ko'); if (pv.st === 'ko') $('koTxt').textContent = pv.rev > 0 ? 'A friend is helping you up! 🤝' : 'Back in ' + Math.max(0, Math.ceil(pv.koT || 0)) + '...';
  // calm card: next disaster picker
  const cc = $('calmCard');
  if (S.phase === 'calm' && App.mode !== 'guest') {
    cc.classList.remove('hidden'); const nm = S.picked ? DZ[S.next].icon + ' ' + dzName(S.next, W) : '🎲 Random';
    const html = 'NEXT: ' + nm + (S.picked ? '' : ' <button class="btn gold small" id="bPick">🎯 PICK 40</button>');
    if (cc._h !== html) { cc._h = html; cc.innerHTML = html; const b = $('bPick'); if (b) b.onclick = showPicker; }
  } else if (S.phase === 'calm' && App.mode === 'guest') { cc.classList.remove('hidden'); const html = 'NEXT: ' + (S.picked ? DZ[S.next].icon + ' ' + dzName(S.next, W) : '🎲 Random') + ' <small>(host picks)</small>'; if (cc._h !== html) { cc._h = html; cc.innerHTML = html; } }
  else cc.classList.add('hidden');
  $('joyHint').style.display = S.wave === 0 && S.phase === 'calm' ? '' : 'none';
  // tags for KO'd survivors and online friends
  const tags = $('tags'), used = new Set(), v = new THREE.Vector3();
  for (const p of S.players) {
    if (p.id === me.id) continue; const help = p.st === 'ko', friend = !p.cpu && App.mode !== 'solo'; if (!help && !friend) continue;
    const m = App.models.get(p.id); if (!m) continue; v.set(m.root.position.x, m.root.position.y + 2.5, m.root.position.z).project(G.camera); if (v.z > 1 || Math.abs(v.x) > 1.1 || Math.abs(v.y) > 1.1) continue;
    let el = tagEls.get(p.id); if (!el) { el = document.createElement('div'); tags.appendChild(el); tagEls.set(p.id, el); }
    used.add(p.id); el.className = 'tag' + (help ? ' help' : ''); el.textContent = help ? '💫 HELP ' + p.name + '!' : p.name; el.style.left = ((v.x + 1) / 2 * innerWidth) + 'px'; el.style.top = ((1 - v.y) / 2 * innerHeight) + 'px'; el.style.display = '';
  }
  tagEls.forEach((el, id) => { if (!used.has(id)) el.style.display = 'none'; });
}
function hurtFlash() { const f = $('fade'); f.style.background = '#ff2d55'; f.style.opacity = 0.35; setTimeout(() => { f.style.opacity = 0; }, 120); }
function fade() { const f = $('fade'); f.style.background = '#000'; f.style.opacity = 0.7; setTimeout(() => f.style.opacity = 0, 160); }
function bumpCoins() { const c = $('coinBox'); c.animate([{ transform: 'scale(1.25)' }, { transform: 'scale(1)' }], { duration: 250 }); }
export function toast(t, cls) { const box = $('toasts') || $('ui'); if (!box || !t) return; const el = document.createElement('div'); el.className = 'toast ' + (cls || ''); el.textContent = t; box.appendChild(el); while (box.children.length > 4) box.removeChild(box.firstChild); setTimeout(() => el.remove(), 2600); }
App.toast = toast;
/* ---------------- panels ---------------- */
function panel(html, bind, o = {}) {
  hidePanels(); const w = document.createElement('div'); w.className = 'panelWrap'; w.id = 'panel'; w.innerHTML = '<div class="panel">' + html + '</div>'; $('ui').appendChild(w);
  w.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', () => { SFX.click(); hidePanels(); o.onClose && o.onClose(); }));
  bind && bind(w); App.panelName = o.name || 'panel'; if (App.mode === 'solo' && o.pause) App.paused = true; return w;
}
function hidePanels() { const p = $('panel'); if (p) p.remove(); App.paused = false; App.panelName = null; }
App.hidePanels = hidePanels;
function showTitle() {
  $('title').classList.remove('hidden'); $('titleCoins').textContent = SV.d.coins;
  if (App.W && App.W.id !== 'city' && !App.W) loadMap('city');
}
function buildTitle() {
  const t = document.createElement('div'); t.id = 'title';
  t.innerHTML = `<div style="width:100%"><div id="topbar"><span class="pill"><span class="coinIc">★</span><span id="titleCoins">0</span></span><button class="btn gray small" id="tGfx">⚙️</button></div>
  <div class="logo" style="margin-top:56px"><div class="l1">GROK</div><div class="l2">DISASTER ZONE</div><div class="tag">Survive kaiju, tornadoes, meteors & more!</div></div></div>
  <div class="menuCol"><button class="btn green" id="tPlay" style="font-size:24px;padding:18px">▶ PLAY</button><button class="btn pink" id="tOnline">🤝 PLAY WITH FRIENDS</button>
  <div class="menuRow"><button class="btn gold" id="tShop">🛒 SHOP</button><button class="btn purple" id="tTroph">🏆 TROPHIES</button></div><button class="btn" id="tHow">❓ HOW TO PLAY</button></div>`;
  $('ui').appendChild(t);
  $('tPlay').onclick = () => { SFX.click(); initAudio(); showMapPick(); };
  $('tOnline').onclick = () => { SFX.click(); initAudio(); Net.lobby(); };
  $('tShop').onclick = () => { SFX.click(); initAudio(); showShop(); };
  $('tTroph').onclick = () => { SFX.click(); showTrophies(); };
  $('tHow').onclick = () => { SFX.click(); showHowTo(); };
  $('tGfx').onclick = () => { SFX.click(); showSettings(); };
}
function showMapPick(online) {
  let sel = App.W ? App.W.id : 'area51';
  const draw = () => panel(`<h2>🗺️ PICK A MAP</h2><p class="sub">Disasters are random, or pay coins between waves to pick the next one!</p><div class="cards">${MAPS.map((m) => `<div class="card ${m.id === sel ? 'sel' : ''}" data-m="${m.id}"><div class="em">${m.emoji}</div><b>${m.name}</b><small>${m.desc}</small></div>`).join('')}</div>
    <div class="btnrow"><button class="btn gray" data-close>BACK</button><button class="btn green" id="mGo">${online ? 'START FOR ALL' : 'START!'}</button></div>`, (w) => {
    w.querySelectorAll('[data-m]').forEach((c) => c.onclick = () => { SFX.click(); sel = c.dataset.m; loadMap(sel); draw(); });
    $('mGo').onclick = () => { SFX.click(); hidePanels(); if (online) Net.start(sel); else App.startSolo(sel); };
  }, { name: 'maps', onClose: online ? () => Net.roomPanel() : null });
  draw();
}
App.showMapPick = showMapPick;
function showPicker() {
  if (S.phase !== 'calm') return; const cost = 40;
  panel(`<h2>🎯 PICK THE NEXT DISASTER</h2><p class="sub">Costs <b>${cost}</b> coins. You have <b>${SV.d.coins}</b>.</p><div class="dzGrid">${ORDER.map((id) => `<button data-d="${id}"><span>${DZ[id].icon}</span>${dzName(id, App.W)}</button>`).join('')}</div><div class="btnrow"><button class="btn gray" data-close>KEEP RANDOM</button></div>`, (w) => {
    w.querySelectorAll('[data-d]').forEach((b) => b.onclick = () => {
      if (SV.d.coins < cost) { toast('Not enough coins! Survive more waves 💪'); return; }
      if (S.phase !== 'calm') return hidePanels();
      addCoins(-cost); SV.d.stats.picks++; save(); pickNext(b.dataset.d); SFX.cash(); toast('💸 CHA-CHING! Next up: ' + DZ[b.dataset.d].icon + ' ' + dzName(b.dataset.d, App.W), 'gold'); achieve('picker'); hidePanels();
    });
  }, { name: 'picker' });
}
App.showPicker = showPicker;
function showShop(tab = 'upg') {
  const d = SV.d;
  const upg = SHOP.map((it) => { const L = lvl(it.id), max = it.prices.length, price = it.prices[L]; return `<div class="item"><div class="ic">${it.icon}</div><div class="grow"><b>${it.name}</b><small>${it.desc}</small><div class="lv">${it.prices.map((_, i) => `<i class="${i < L ? 'on' : ''}"></i>`).join('')}</div></div>${L >= max ? '<button class="btn gray small" disabled>MAX</button>' : `<button class="btn gold small" data-buy="${it.id}">${price}</button>`}</div>`; }).join('');
  const hats = HATSHOP.map((h) => { const own = d.hats.includes(h.id), on = d.look.hat === h.id; return `<div class="item"><div class="ic">${{ cap: '🧢', beanie: '🧶', party: '🥳', cowboy: '🤠', chef: '👨‍🍳', dino: '🦖', astro: '👩‍🚀', crown: '👑', none: '🙂' }[h.id]}</div><div class="grow"><b>${h.name}</b></div>${on ? '<button class="btn green small" disabled>ON</button>' : own ? `<button class="btn small" data-hat="${h.id}">WEAR</button>` : `<button class="btn gold small" data-hatbuy="${h.id}">${h.price}</button>`}</div>`; }).join('');
  const hex = (n) => '#' + n.toString(16).padStart(6, '0');
  const cols = `<h3>SHIRT</h3><div class="swatches">${SHIRTS.map((c) => `<button data-shirt="${c}" class="${d.look.shirt === c ? 'on' : ''}" style="background:${hex(c)}"></button>`).join('')}</div><h3>HAT COLOR</h3><div class="swatches">${SHIRTS.map((c) => `<button data-hc="${c}" class="${d.look.hatColor === c ? 'on' : ''}" style="background:${hex(c)}"></button>`).join('')}</div><h3>SKIN</h3><div class="swatches">${[0xf6c9a0, 0xe0a979, 0xb97a4f, 0x8a5a3b, 0xffd9b8].map((c) => `<button data-skin="${c}" class="${d.look.skin === c ? 'on' : ''}" style="background:${hex(c)}"></button>`).join('')}</div><h3>NAME</h3><input class="name" id="nameIn" maxlength="12" placeholder="Your name" value="${esc(d.name)}">`;
  panel(`<h2>🛒 SHOP</h2><p class="sub"><span class="pill"><span class="coinIc">★</span>${d.coins}</span></p><div class="tabs"><button data-tab="upg" class="${tab === 'upg' ? 'on' : ''}">⬆️ UPGRADES</button><button data-tab="hats" class="${tab === 'hats' ? 'on' : ''}">🎩 HATS</button><button data-tab="look" class="${tab === 'look' ? 'on' : ''}">🎨 LOOK</button></div>${tab === 'upg' ? upg : tab === 'hats' ? hats : cols}<div class="btnrow"><button class="btn gray" data-close>DONE</button></div>`, (w) => {
    w.querySelectorAll('[data-tab]').forEach((b) => b.onclick = () => { SFX.click(); showShop(b.dataset.tab); });
    w.querySelectorAll('[data-buy]').forEach((b) => b.onclick = () => { const it = SHOP.find((x) => x.id === b.dataset.buy), L = lvl(it.id), pr = it.prices[L]; if (d.coins < pr) return toast('Not enough coins yet!'); addCoins(-pr); d.upg[it.id] = L + 1; save(); SFX.cash(); toast('✨ ' + it.name + ' Lv' + (L + 1) + '!', 'gold'); applyMyUpgrades(); showShop('upg'); });
    w.querySelectorAll('[data-hatbuy]').forEach((b) => b.onclick = () => { const h = HATSHOP.find((x) => x.id === b.dataset.hatbuy); if (d.coins < h.price) return toast('Not enough coins yet!'); addCoins(-h.price); d.hats.push(h.id); d.look.hat = h.id; save(); SFX.cash(); applyMyLook(); showShop('hats'); });
    w.querySelectorAll('[data-hat]').forEach((b) => b.onclick = () => { d.look.hat = b.dataset.hat; save(); SFX.click(); applyMyLook(); showShop('hats'); });
    w.querySelectorAll('[data-shirt]').forEach((b) => b.onclick = () => { d.look.shirt = +b.dataset.shirt; save(); SFX.click(); applyMyLook(); showShop('look'); });
    w.querySelectorAll('[data-hc]').forEach((b) => b.onclick = () => { d.look.hatColor = +b.dataset.hc; save(); SFX.click(); applyMyLook(); showShop('look'); });
    w.querySelectorAll('[data-skin]').forEach((b) => b.onclick = () => { d.look.skin = +b.dataset.skin; save(); SFX.click(); applyMyLook(); showShop('look'); });
    const ni = w.querySelector('#nameIn'); if (ni) ni.onchange = () => { d.name = ni.value.replace(/[<>&"]/g, '').trim().slice(0, 12); save(); };
  }, { name: 'shop', pause: true, onClose: () => { const t = $('titleCoins'); if (t) t.textContent = SV.d.coins; } });
}
App.showShop = showShop;
function applyMyUpgrades() { const u = myUpg(); if (App.me) { App.me.upg = u; const p = S.players.find((q) => q.id === App.me.id); if (p && App.mode !== 'guest') { p.upg = u; p.max = maxHp(u); } } updateGadgets(); if (App.mode === 'guest') Net.hello(); }
function applyMyLook() { if (App.me) { const p = S.players.find((q) => q.id === App.me.id); if (p) p.look = Object.assign({}, SV.d.look); App.me.look = p ? p.look : SV.d.look; } if (App.mode === 'guest') Net.hello(); }
function showTrophies() {
  const s = SV.d.stats;
  panel(`<h2>🏆 TROPHIES</h2><div class="statGrid"><div><b>${s.rounds}</b>Rounds</div><div><b>${s.waves}</b>Disasters survived</div><div><b>${s.revives}</b>Friends helped</div><div><b>${s.earned}</b>Coins earned</div><div><b>${s.kos}</b>Knockouts</div><div><b>${Object.keys(s.survived).length}/9</b>Disaster types</div></div><h3>ACHIEVEMENTS (${Object.keys(SV.d.ach).length}/${ACH.length})</h3>${ACH.map((a) => `<div class="ach ${SV.d.ach[a.id] ? 'on' : ''}"><div class="ic">${a.icon}</div><div><b>${a.name}</b><br><small>${a.desc}</small></div></div>`).join('')}<h3>SURVIVED</h3><div class="statGrid">${ORDER.map((id) => `<div><b>${DZ[id].icon} ${s.survived[id] || 0}</b>${DZ[id].name}</div>`).join('')}</div><div class="btnrow"><button class="btn gray" data-close>BACK</button></div>`, null, { name: 'trophies', pause: true });
}
function showHowTo() {
  panel(`<h2>❓ HOW TO PLAY</h2><div class="howto"><div class="row"><span>🕹️</span><p>Drag the <b>left side</b> to run. Drag the <b>right side</b> to look around, pinch to zoom. Tap <b>JUMP</b> to jump.</p></div>
  <div class="row"><span>🚨</span><p>When the siren goes off, read the warning and <b>follow the green arrow</b> to a safe spot before time runs out!</p></div>
  <div class="row"><span>🏠</span><p>Walk into buildings through the door. Glowing pads take you <b>down to basements</b> ⬇ or <b>up to rooftops</b> ⬆ - tap the yellow button.</p></div>
  <div class="row"><span>🛡️</span><p>Each disaster has its own safe spots: <b>underground</b> for kaiju, <b>high ground</b> for tsunamis, <b>under tables</b> for earthquakes, <b>indoors</b> for lightning, hail and UFOs.</p></div>
  <div class="row"><span>💫</span><p>Get knocked out? Wait a moment, or a friend can stand next to you to <b>help you up</b>. Helping others earns coins!</p></div>
  <div class="row"><span>🪙</span><p>Earn coins for surviving, helping and grabbing coins. Spend them in the <b>Shop</b>, or pay 40 to <b>pick the next disaster</b>. Cha-ching!</p></div></div>
  <div class="btnrow"><button class="btn green" data-close>GOT IT!</button></div>`, null, { name: 'howto', pause: true });
}
function showSettings() {
  panel(`<h2>⚙️ SETTINGS</h2><h3>GRAPHICS</h3><div class="tabs"><button data-g="high" class="${G.quality === 'high' ? 'on' : ''}">✨ HIGH</button><button data-g="low" class="${G.quality === 'low' ? 'on' : ''}">⚡ LOW</button></div><p class="sub">HIGH has soft shadows, glow and ambient occlusion. LOW runs smoother on older phones. The game never lowers this by itself; it only sharpens the picture when your phone has power to spare.</p><h3>SOUND</h3><div class="tabs"><button data-s="1" class="${SV.d.opts.sound ? 'on' : ''}">🔊 ON</button><button data-s="0" class="${!SV.d.opts.sound ? 'on' : ''}">🔇 OFF</button></div><div class="btnrow"><button class="btn gray" data-close>DONE</button></div>`, (w) => {
    w.querySelectorAll('[data-g]').forEach((b) => b.onclick = () => { setQuality(b.dataset.g); SV.d.opts.gfx = b.dataset.g; save(); showSettings(); });
    w.querySelectorAll('[data-s]').forEach((b) => b.onclick = () => { SV.d.opts.sound = b.dataset.s === '1'; setSound(SV.d.opts.sound); save(); showSettings(); });
  }, { name: 'settings', pause: true });
}
App.showSettings = showSettings;
function showPause() {
  panel(`<h2>⏸️ PAUSED</h2>${App.mode !== 'solo' ? '<p class="sub">Online games keep going while this menu is open.</p>' : ''}<div class="menuCol" style="margin:0 auto"><button class="btn green" data-close>▶ RESUME</button><button class="btn gold" id="pShop">🛒 SHOP</button><button class="btn" id="pHow">❓ HOW TO PLAY</button><button class="btn purple" id="pSet">⚙️ SETTINGS</button><button class="btn pink" id="pQuit">🚪 QUIT TO MENU</button></div>`, (w) => {
    $('pShop').onclick = () => showShop(); $('pHow').onclick = showHowTo; $('pSet').onclick = showSettings; $('pQuit').onclick = () => App.quit();
  }, { name: 'pause', pause: true });
}
function showResults() {
  const me = S.players.find((p) => p.id === (App.me && App.me.id));
  panel(`<div class="big">🏆</div><h2>ROUND COMPLETE!</h2><p class="sub">You survived ${S.waves} disasters on ${App.W.meta.name}!</p>
  <div class="res"><span>🪙 Coins earned</span><span>+${App.roundCoins}</span></div><div class="res"><span>💫 Knockouts</span><span>${me ? me.kos : 0}</span></div><div class="res"><span>🤝 Friends helped</span><span>${me ? me.revives : 0}</span></div>${!App.roundKO ? '<div class="res" style="background:#dcfce7"><span>🛡️ UNTOUCHABLE!</span><span>No knockouts</span></div>' : ''}
  <div class="btnrow">${App.mode === 'guest' ? '<button class="btn gray" id="rLeave">LEAVE</button><button class="btn" disabled>Waiting for host…</button>' : '<button class="btn gray" id="rMenu">MENU</button><button class="btn green" id="rAgain">PLAY AGAIN</button>'}</div><div class="btnrow"><button class="btn gold" id="rShop">🛒 SHOP</button></div>`, (w) => {
    const m = $('rMenu'); if (m) m.onclick = () => App.quit(); const l = $('rLeave'); if (l) l.onclick = () => App.quit();
    const a = $('rAgain'); if (a) a.onclick = () => { hidePanels(); if (App.mode === 'host') App.startHosted(App.W.id, Net.humans()); else App.startSolo(App.W.id); };
    $('rShop').onclick = () => showShop();
  }, { name: 'results' });
}
App.showResults = showResults;
App.panel = panel; App.esc = esc; App.loadMap = loadMap; App.handleFx = handleFx; App.handleMsgs = handleMsgs; App.achieve = achieve;
/* ---------------- boot ---------------- */
buildHud(); buildTitle();
loadMap(Q.get('map') || 'city');
$('titleCoins').textContent = SV.d.coins;
Net.init(App);
requestAnimationFrame(frame);
App.ready = true;
// test helpers
App.sim = (sec, sub = 0.05) => { for (let t = 0; t < sec; t += sub) step(sub); };
App.wreck = (b) => wreckBuilding(App.W, App.W.root, b);
App.force = (id) => { if (S.phase !== 'calm') return; S.next = id; S.picked = true; S.t = 0.01; App.sim(7.2); };
App.tp = (x, y, z) => { const m = App.me; m.x = x; m.y = y; m.z = z; m.vy = 0; const p = S.players.find((q) => q.id === m.id); if (p && p !== m) { p.x = x; p.y = y; p.z = z; } };
App.THREE = THREE; App.setMood = setMood; App.SV = SV; App.save = save; App.DZ = DZ; App.H = H; App.shelter = shelter; App.Net = Net;
const grokParams = window.GrokNet && GrokNet.params && GrokNet.params(); if (grokParams) Net.fromParams(grokParams);

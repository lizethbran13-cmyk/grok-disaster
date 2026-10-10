// online co-op (up to 3) on GrokNet / PeerJS: host-authoritative, 5-letter codes
import { S, newPlayer, maxHp, pickNext } from './sim.js';
import { S as SV, myUpg, save } from './save.js';
import { wreckBuilding, repairBuilding } from './build.js';
import { SFX } from './audio.js';

export const Net = { room: null, info: {}, App: null };
const GN = () => window.GrokNet;
const $ = (id) => document.getElementById(id);
function status(t, ok) { const m = $('onlineMsg'); if (m) { m.textContent = t; m.style.color = ok ? '#15803d' : '#be123c'; } Net.lastStatus = t; }
Net.init = function (App) { Net.App = App; };
Net.myName = () => SV.d.name || 'Survivor';
Net.lobby = function () {
  const A = Net.App; if (Net.room && Net.room.opened) return Net.roomPanel();
  A.panel(`<h2>🤝 PLAY WITH FRIENDS</h2><p class="sub">Up to 3 survivors online. One friend hosts and shares the 5-letter code. CPU survivors fill the empty spots.</p>
  <h3>YOUR NAME</h3><input class="name" id="nmIn" maxlength="12" placeholder="Your name" value="${A.esc(SV.d.name)}">
  <div class="btnrow"><button class="btn green" id="bHost">🏠 HOST A GAME</button></div><h3>OR JOIN WITH A CODE</h3><input class="code" id="codeIn" maxlength="5" placeholder="ABCDE" autocomplete="off" autocapitalize="characters">
  <div class="btnrow"><button class="btn pink" id="bJoin">JOIN</button></div><p class="sub" id="onlineMsg" style="margin-top:10px"></p><div class="btnrow"><button class="btn gray" data-close>BACK</button></div>`, (w) => {
    const nm = () => { const v = w.querySelector('#nmIn').value; SV.d.name = GN() ? GN().cleanName(v) : v.slice(0, 12); save(); };
    w.querySelector('#bHost').onclick = () => { nm(); Net.host(); };
    w.querySelector('#bJoin').onclick = () => { nm(); const code = GN().normalizeCode(w.querySelector('#codeIn').value); if (!GN().validCode(code)) return status('Codes are 5 letters, like KDXPQ'); Net.join(code); };
  }, { name: 'lobby', onClose: () => { if (Net.room && !Net.room.opened) Net.leave(); } });
};
Net.roomPanel = function () {
  const A = Net.App, room = Net.room; if (!room) return; const ps = room.players(), host = room.isHost;
  A.panel(`<h2>🤝 ROOM <span style="letter-spacing:4px;color:#7c3aed">${room.code}</span></h2><p class="sub">Friends join with code <b>${room.code}</b> (${ps.length}/3)</p>
  ${ps.map((p) => `<div class="item"><div class="ic">${p.slot === 0 ? '👑' : '🙂'}</div><div class="grow"><b>${A.esc((Net.info[p.pid] && Net.info[p.pid].name) || p.name)}</b><small>${p.slot === 0 ? 'Host' : 'Player ' + (p.slot + 1)}${p.pid === room.pid ? ' (you)' : ''}</small></div></div>`).join('')}
  ${host ? `<p class="sub">${ps.length < 2 ? 'Waiting for a friend to join… (you can also start with CPUs)' : 'Everyone ready? Pick a map!'}</p><div class="btnrow"><button class="btn gray" id="bLeave">LEAVE</button><button class="btn green" id="bStart">PICK MAP ▶</button></div>`
    : '<p class="sub">Waiting for the host to pick a map and start… 🌪️</p><div class="btnrow"><button class="btn gray" id="bLeave">LEAVE</button></div>'}`, (w) => {
    w.querySelector('#bLeave').onclick = () => { Net.leave(); A.hidePanels(); };
    const st = w.querySelector('#bStart'); if (st) st.onclick = () => A.showMapPick(true);
  }, { name: 'room' });
};
Net.hello = function () { if (Net.room) Net.room.send({ t: 'hello', name: Net.myName(), look: SV.d.look, upg: myUpg() }); };
function bind(room) {
  Net.room = room; const A = Net.App;
  room.on('status', (t) => status(t, true));
  room.on('open', () => { status('Connected!', true); SFX.coin(); if (room.isHost) Net.info[room.pid] = { name: Net.myName(), look: SV.d.look, upg: myUpg() }; else Net.hello(); Net.roomPanel(); A.toast(room.isHost ? 'Room ' + room.code + ' is open! 🤝' : 'Joined room ' + room.code + '! 🤝'); });
  room.on('join', (p) => { if (p.pid !== room.pid) { A.toast('👋 ' + p.name + ' joined!'); SFX.coin(); } if (A.panelName === 'room') Net.roomPanel(); });
  room.on('leave', (p) => {
    A.toast(p.name + ' left'); if (A.panelName === 'room') Net.roomPanel();
    if (room.isHost && A.mode === 'host') S.players.forEach((pl) => { if (pl.pid === p.pid && !pl.cpu) { pl.cpu = true; pl.name = pl.name + ' (CPU)'; pl.ai = {}; A.toast('A CPU takes over for ' + p.name); } });
  });
  room.on('message', (d, from) => onMsg(d, from));
  room.on('reconnecting', () => A.toast('Lost the host - reconnecting…'));
  room.on('error', (e) => { status(e.title + ': ' + e.message); const was = A.mode === 'guest' || A.mode === 'host'; Net.room = null; if (was) { A.toast(e.title + ' - back to the menu'); A.quit(); } });
  room.start();
}
Net.host = function (code) { status('Opening a room…', true); Net.info = {}; bind(GN().createRoom({ role: 'host', code: code || undefined, name: Net.myName(), color: '#3ff0ff', max: 3, rejoin: !!code })); };
Net.join = function (code) { status('Joining ' + code + '…', true); bind(GN().createRoom({ role: 'join', code, name: Net.myName(), color: '#ff4fd8', rejoin: !!Net.fromHub })); };
Net.fromParams = function (prm) { Net.fromHub = true; if (prm.name) { SV.d.name = prm.name; save(); } Net.lobby(); if (prm.mode === 'host') Net.host(prm.code); else Net.join(prm.code); };
Net.leave = function () { if (!Net.room) return; try { Net.room.leave(); } catch (e) {} Net.room = null; };
Net.send = (d) => { if (Net.room) Net.room.send(d); };
Net.broadcast = (d) => { if (Net.room && Net.room.isHost) Net.room.broadcast(d); };
Net.sendTo = (pid, d) => { if (Net.room && Net.room.isHost) Net.room.sendTo(pid, d); };
Net.humans = function () { return Net.room.players().map((p) => { const i = Net.info[p.pid] || {}; return { pid: p.pid, name: i.name || p.name, look: i.look || {}, upg: i.upg || {} }; }); };
Net.start = function (map) { if (!Net.room || !Net.room.isHost) return; Net.App.startHosted(map, Net.humans()); };
/* ---------- host -> guests snapshot ---------- */
let pendFx = [], pendMsg = [];
Net.queue = function (fx, msgs) { pendFx.push(...fx); pendMsg.push(...msgs); };
const r2 = (v) => Math.round(v * 100) / 100;
Net.snapshot = function () {
  const pl = S.players.map((p) => [p.id, r2(p.x), r2(p.y), r2(p.z), r2(p.yaw), p.an, Math.round(p.hp), p.max, p.st, r2(p.sh), r2(p.inv), p.tpN, r2(p.sp || 0), p.jetOn ? 1 : 0, r2(p.koT || 0), r2(p.rev || 0), p.cpu ? 1 : 0]);
  const hz = S.haz.map((h) => ({ i: h.i, k: h.k, x: r2(h.x), z: r2(h.z), y: r2(h.y || 0), r: h.r, T: h.T, t: r2(h.t), x1: h.x1 != null ? r2(h.x1) : undefined, z1: h.z1 != null ? r2(h.z1) : undefined, b: h.b }));
  const co = S.coins.map((c) => c.on ? 1 : 0).join('');
  Net.room.broadcast({ t: 's', ph: S.phase, tm: r2(S.t), wv: S.wave, wvs: S.waves, dz: S.dz, nx: S.next, pk: S.picked, dd: S.dzDur, pl, hz, env: S.env, wr: S.wrecked, co, st: S.star, fx: pendFx, ms: pendMsg });
  pendFx = []; pendMsg = [];
};
function onMsg(d, from) {
  const A = Net.App, room = Net.room; if (!d || typeof d !== 'object') return;
  if (room.isHost) {
    if (d.t === 'hello') { Net.info[from] = { name: GN().cleanName(d.name), look: d.look && typeof d.look === 'object' ? d.look : {}, upg: d.upg && typeof d.upg === 'object' ? d.upg : {} }; if (A.panelName === 'room') Net.roomPanel(); const p = S.players.find((q) => q.pid === from); if (p) { p.look = Net.info[from].look; p.upg = Net.info[from].upg; p.max = maxHp(p.upg); } }
    else if (d.t === 'pose' && A.mode === 'host') { const p = S.players.find((q) => q.pid === from && !q.cpu); if (p && p.st === 'ok') { p.x = +d.x || 0; p.y = +d.y || 0; p.z = +d.z || 0; p.yaw = +d.yaw || 0; p.an = String(d.an || 'idle').slice(0, 8); p.sp = +d.sp || 0; p.jetOn = !!d.jet; } }
    else if (d.t === 'shield' && A.mode === 'host') { const p = S.players.find((q) => q.pid === from); const L = (p && p.upg && p.upg.shield) | 0; if (p && p.st === 'ok' && p.shUses < L && (S.phase === 'active' || S.phase === 'warn')) { p.shUses++; p.sh = 5; } }
    return;
  }
  // guest
  if (d.t === 'start') { A.hidePanels(); A.startGuest(d); }
  else if (d.t === 's' && A.mode === 'guest') applySnap(d);
  else if (d.t === 'wave') A.onWaveStats(d.st);
  else if (d.t === 'end') A.onRoundEnd();
}
function applySnap(d) {
  const A = Net.App, W = A.W;
  if (d.ph === 'calm' && S.phase === 'results') { A.hidePanels(); }
  Object.assign(S, { phase: d.ph, t: d.tm, wave: d.wv, waves: d.wvs, dz: d.dz, next: d.nx, picked: d.pk, dzDur: d.dd, env: d.env || {}, star: d.st });
  // hazards: keep local t progressing smoothly
  const old = new Map(S.haz.map((h) => [h.i, h])); S.haz = (d.hz || []).map((h) => { const o = old.get(h.i); if (o) { o.t = Math.max(o.t, h.t); return o; } return h; });
  for (const row of d.pl) {
    let p = S.players.find((q) => q.id === row[0]); if (!p) continue;
    [p.x, p.y, p.z, p.yaw, p.an, p.hp, p.max, p.st, p.sh, p.inv] = row.slice(1, 11); p.sp = row[12]; p.jetOn = !!row[13]; p.koT = row[14]; p.rev = row[15]; p.cpu = !!row[16];
    if (A.me && p.id === A.me.id) {
      const me = A.me; me.hp = p.hp; me.max = p.max; me.sh = p.sh; me.inv = p.inv;
      if (p.st !== 'ok' || row[11] !== A.tpN) { me.x = p.x; me.y = p.y; me.z = p.z; me.vy = 0; }
      me.st = p.st; A.tpN = row[11];
    }
  }
  // wrecks
  const wr = new Set(d.wr || []);
  W.buildings.forEach((b) => { if (wr.has(b.id) && !b.wrecked) wreckBuilding(W, W.root, b); else if (!wr.has(b.id) && b.wrecked) repairBuilding(W, b); });
  // coins
  if (d.co) { if (S.coins.length !== d.co.length) S.coins = W.coinSpots.map((c, i) => ({ i, x: c.x, z: c.z, y: (c.y != null ? c.y : W.terrain(c.x, c.z)) + 0.9, on: false })); for (let i = 0; i < d.co.length; i++) S.coins[i].on = d.co[i] === '1'; }
  if (d.fx && d.fx.length) A.handleFx(d.fx);
  if (d.ms && d.ms.length) A.handleMsgs(d.ms);
}

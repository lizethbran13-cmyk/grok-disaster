// Super Thunder Expansion: WEATHER HUNTER mode. You are a meteorologist hired by Ratita Industries
// (Luna, Pi-rat and Snowie) to investigate strange blizzards. Solo, story-driven, no fail state.
import * as THREE from 'three';
import { G } from './gfx.js';
import { FX, ring, puff, sparks } from './fx.js';
import { S, newPlayer, maxHp } from './sim.js';
import { shelter } from './disasters.js';
import { UNDER, groundAt } from './world.js';
import { S as SV, save, addCoins } from './save.js';
import { SFX } from './audio.js';
import { makeSwirl, makeProbe, makeBalloon } from './dlcmodels.js';

export const CASES = [
  { id: 'frost', map: 'frost', icon: '❄️', title: 'The Never-Ending Blizzard', boss: 'Snowie',
    brief: 'Snowie here, from Ratita Industries! Frostbite Village has had a blizzard for 40 days in a row. That is NOT normal, even for a snowy village. Can you find out why?',
    clues: ['The snow here spins in perfect circles... like something is STIRRING it!', 'Tiny bolts with a Ratita logo are frozen in the ice. Hmm!', 'The icy wind always blows FROM the observatory hill.'],
    probe: 'Probe data: the air gets colder and colder near the observatory.', balloon: 'From up high you spot a giant fan machine on the observatory roof, puffing out snow clouds!',
    q: 'What is causing the never-ending blizzard?', a: ['A grumpy snow cloud that will not leave', 'Ratita\'s lost SNOW-MAKER 3000, stuck ON at the observatory', 'Penguins having a snowball party'], ok: 1,
    end: 'Snowie switches the Snow-Maker 3000 off. "Oopsie, that one was mine!" The sun comes out over Frostbite Village. ☀️' },
  { id: 'ratita', map: 'ratita', icon: '🐭', title: 'Summer Snow at HQ', boss: 'Luna',
    brief: 'Luna, CEO of Ratita Industries, speaking. It is SUMMER, and it is snowing on our campus! The rockets are frozen. We need a real meteorologist. You!',
    clues: ['These snowflakes are shaped like tiny cheese wedges! 🧀', 'Frost is puffing out of the air vents by the gadget factory.', 'The snow is thickest right above the Secret Lab.'],
    probe: 'Probe data: a freezing beam of cold air is coming from underground.', balloon: 'From the Sky Deck you see a frosty blue beam shooting up out of the Secret Lab skylight!',
    q: 'Why is it snowing at Ratita HQ in summer?', a: ['Pi-rat left the FREEZE RAY on in the Secret Lab', 'Winter came early all by itself', 'Someone left a giant freezer open at the cafe'], ok: 0,
    end: 'Pi-rat turns off the Freeze Ray. "Arr, sorry!" Summer is back and the rockets can launch again! 🚀' },
  { id: 'dinov', map: 'dinov', icon: '🦕', title: 'The Jungle Blizzard', boss: 'Pi-rat',
    brief: 'Ahoy, Pi-rat here! A blizzard hit Dino Valley. In a JUNGLE! The dinos are shivering. Find out what is freezing the valley, matey!',
    clues: ['The dinos are shivering. Even the T-rex has frosty whiskers!', 'A trail of ice crystals leads past the hatchery.', 'These ice crystals GLOW purple. That is not normal snow!'],
    probe: 'Probe data: purple frost particles are floating in the air.', balloon: 'From the treetops you see purple frost clouds puffing out of a crashed weather balloon by the hatchery!',
    q: 'What is freezing Dino Valley?', a: ['The volcano turned into an ice volcano', 'A crashed Ratita balloon full of Snowie\'s frost crystals', 'The dinos asked for snow'], ok: 1,
    end: 'Snowie collects her frost crystals. The jungle warms up and the dinos do a happy dance! 🦖💃' }
];
const STEPS = ['scan', 'probe', 'balloon', 'report'];
const STEP_TXT = { scan: '🔍 Scan the storm swirls', probe: '📡 Plant weather probes', balloon: '🎈 Launch a weather balloon up high', report: '🚐 Report back at the Ratita van' };
export const Hunt = { on: false, A: null };
const R = Math.random;
let objs = []; // three.js objects we own
function clearObjs() { objs.forEach((o) => { G.scene.remove(o); }); objs = []; }

Hunt.start = function (A, cs) {
  Hunt.A = A; const W = A.loadMap(cs.map), H = W.hunt;
  clearObjs();
  const pick = (arr) => arr.slice().sort(() => R() - 0.5).slice(0, 3).map((q) => ({ x: q[0], z: q[1], y: groundAt(W, q[0], q[1], 60), done: false, t: 0 }));
  const C = Hunt.C = { cs, step: 0, swirls: pick(H.anomalies), probes: pick(H.probes), pad: H.pad, van: H.van, clues: [], t: 0, prog: 0, solved: false, hailT: 4, tries: 0 };
  C.swirls.forEach((s) => { const m = makeSwirl(); m.position.set(s.x, s.y, s.z); G.scene.add(m); objs.push(m); s.m = m; });
  C.probes.forEach((p) => { const m = makeProbe(); m.position.set(p.x, p.y, p.z); m.visible = false; G.scene.add(m); objs.push(m); p.m = m; });
  // objective marker: big bobbing yellow pin, visible through the snow
  const pin = C.pin = new THREE.Group(); const pm = new THREE.MeshBasicMaterial({ color: 0xfacc15, fog: false, depthTest: false, transparent: true });
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.8, 20), pm); cone.rotation.x = Math.PI; pin.add(cone);
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.75, 20, 14), pm); ball.position.y = 1.1; pin.add(ball);
  const dot = new THREE.Mesh(new THREE.SphereGeometry(0.32, 14, 10), new THREE.MeshBasicMaterial({ color: 0x7c3aed, fog: false, depthTest: false, transparent: true })); dot.position.set(0, 1.1, 0); dot.scale.z = 1.2; pin.add(dot);
  pin.renderOrder = 10; pin.traverse((o) => o.renderOrder = 10); pin.visible = false; G.scene.add(pin); objs.push(pin);
  C.balloon = makeBalloon(); C.balloon.visible = false; G.scene.add(C.balloon); objs.push(C.balloon);
  // state: just you (no CPUs) in a calm-but-snowy world
  const me = newPlayer({ id: 0, pid: 'me', name: SV.d.name || 'You', look: Object.assign({}, SV.d.look), upg: A.myUpg(), cpu: false });
  me.x = C.van.x; me.z = C.van.z + 1.5; me.y = groundAt(W, me.x, me.z, 50); me.max = maxHp(me.upg); me.hp = me.max; me.yaw = Math.PI;
  Object.assign(S, { phase: 'hunt', t: 0, wave: 0, waves: 0, map: cs.map, dz: null, next: null, picked: false, players: [me], haz: [], env: { shake: 0, rain: 0, snow: 0.5, ash: 0, hail: 0.12, wind: 4, cold: 1 }, wrecked: [], coins: [], star: null, fx: [], msgs: [] });
  W.buildings.forEach((b) => A.repair(W, b));
  A.setMood('huntsnow', true); Hunt.on = true; A.mode = 'hunt'; A.myPid = 'me'; A.me = me; A.enterGame();
  Hunt.briefing();
};
Hunt.stop = function () { Hunt.on = false; clearObjs(); Hunt.C = null; const el = document.getElementById('huntCard'); if (el) el.remove(); };
Hunt.mood = () => Hunt.C && Hunt.C.solved ? (Hunt.C.cs.map === 'dinov' ? 'jungle' : Hunt.C.cs.map === 'frost' ? 'snowday' : 'sunny') : 'huntsnow';
Hunt.briefing = function () {
  const A = Hunt.A, C = Hunt.C; if (!C) return;
  A.panel(`<div class="big">${C.cs.icon}</div><h2>CASE: ${A.esc(C.cs.title.toUpperCase())}</h2><div class="huntBrief"><div class="rat">🐭</div><p><b>${C.cs.boss}:</b> ${A.esc(C.cs.brief)}</p></div>
  <h3>YOUR JOB</h3><div class="howto"><div class="row"><span>🔍</span><p>Walk into the 3 glowing <b>storm swirls</b> to scan them for clues.</p></div><div class="row"><span>📡</span><p>Plant 3 <b>weather probes</b> at the purple markers.</p></div><div class="row"><span>🎈</span><p>Climb up high and launch a <b>weather balloon</b>.</p></div><div class="row"><span>🚐</span><p>Go back to the <b>Ratita van</b> and solve the case!</p></div><div class="row"><span>🔥</span><p>The cold hurts outside. Warm up <b>indoors</b> or by a <b>fire</b>. Dodge the blue hail circles!</p></div></div>
  <div class="btnrow"><button class="btn green" data-close>LET'S GO! 🌨️</button></div>`, null, { name: 'hunt', pause: true });
};
function stepId() { return STEPS[Hunt.C.step]; }
function clue(t, icon = '🔎') { const C = Hunt.C; C.clues.push(t); Hunt.A.toast(icon + ' CLUE: ' + t, 'gold'); SFX.achieve(); }
function target() {
  const C = Hunt.C, id = stepId();
  if (id === 'scan') return nearest(C.swirls.filter((s) => !s.done));
  if (id === 'probe') return nearest(C.probes.filter((s) => !s.done));
  if (id === 'balloon') return C.pad;
  if (id === 'report') return { x: C.van.x, y: groundAt(Hunt.A.W, C.van.x, C.van.z, 50), z: C.van.z };
  return null;
}
function nearest(list) { const me = Hunt.A.me; let b = null, bd = 1e9; for (const q of list) { const d = Math.hypot(q.x - me.x, q.z - me.z); if (d < bd) { bd = d; b = q; } } return b; }
Hunt.tick = function (dt) {
  const A = Hunt.A, C = Hunt.C, W = A.W, me = A.me; if (!C || !me) return;
  C.t += dt; S.env.shake = Math.max(0, (S.env.shake || 0) - dt * 1.2);
  if (me.inv > 0) me.inv -= dt; if (me.hurtT > 0) me.hurtT -= dt;
  // KO: no fail, the Ratita drone flies you back to the van
  if (me.st === 'ko') { me.koT -= dt; if (me.koT <= 0) { me.st = 'ok'; me.hp = Math.round(me.max * 0.7); me.inv = 2.5; me.x = C.van.x; me.z = C.van.z + 1.5; me.y = groundAt(W, me.x, me.z, 50); me.vy = 0; A.toast('🚁 The Ratita drone flew you back to the van to warm up!'); } return; }
  const sh = shelter(W, me), warm = !sh.out || sh.fire;
  const hurt = (d, kind) => { if (me.inv > 0 || me.sh > 0) return; me.hp -= d; if (d >= 5) { S.fx.push({ k: 'hit', x: me.x, y: me.y, z: me.z, pid: 'me' }); me.hurtT = 0.4; } if (me.hp <= 0) { me.hp = 0; me.st = 'ko'; me.koT = 4; me.vx = me.vz = 0; S.fx.push({ k: 'sfx', n: 'ko' }); A.toast('🥶 Too cold! Brrr...'); } };
  if (!C.solved) {
    if (warm) me.hp = Math.min(me.max, me.hp + (sh.fire ? 10 : 5) * dt); else { hurt(1.3 * dt, 'cold'); me.kx += 1.4 * dt; }
    // hail bursts near you (telegraphed blue circles)
    C.hailT -= dt; if (C.hailT <= 0) { C.hailT = 2.6 + R() * 1.8; if (sh.out) { const x = me.x + (R() - 0.5) * 6, z = me.z + (R() - 0.5) * 6; S.haz.push({ i: (S.hid = (S.hid || 0) + 1), k: 'hail', x, z, y: groundAt(W, x, z, me.y + 2), r: 2.2, T: 1.5, t: 0 }); } }
  } else me.hp = Math.min(me.max, me.hp + 8 * dt);
  for (const h of S.haz) { h.t += dt; if (h.t >= h.T && !h.done) { h.done = true; puff(h.x, h.y + 0.3, h.z, 8, [0xffffff, 0xbae6fd], { sp: 3, up: 2, s: 0.3, s1: 0.8, life: 0.8 }); sparks(h.x, h.y + 0.5, h.z, 10, 0xe0f2fe, { sp: 4 }); if (Math.hypot(me.x - h.x, me.z - h.z) < h.r && Math.abs(me.y - h.y) < 2.5 && shelter(W, me).out && !(me.upg && me.upg.umbrella)) hurt(12, 'hail'); } }
  S.haz = S.haz.filter((h) => !h.done);
  // objectives
  const id = stepId(), near = (q, r) => q && Math.hypot(q.x - me.x, q.z - me.z) < r && Math.abs((q.y || 0) - me.y) < 3;
  C.prog = 0;
  if (id === 'scan') { const s = C.swirls.find((q) => !q.done && near(q, 3.2)); if (s) { s.t += dt; C.prog = s.t / 1.6; if (s.t >= 1.6) { s.done = true; s.m.visible = false; puff(s.x, s.y + 2, s.z, 20, [0xffffff, 0xbae6fd, 0x67e8f9], { sp: 6, up: 3, s: 0.6, s1: 1.6, life: 1.4 }); clue(C.cs.clues[C.swirls.filter((q) => q.done).length - 1]); if (C.swirls.every((q) => q.done)) next(); } } }
  else if (id === 'probe') { const p = C.probes.find((q) => !q.done && near(q, 2.6)); if (p) { p.t += dt; C.prog = p.t / 1.2; if (p.t >= 1.2) { p.done = true; p.m.visible = true; SFX.pad(); A.toast('📡 Probe planted! ' + C.probes.filter((q) => q.done).length + '/3'); if (C.probes.every((q) => q.done)) { clue(C.cs.probe, '📡'); next(); } } } }
  else if (id === 'balloon') { if (near(C.pad, 3.4) && me.y > C.pad.y - 1.5) { C.bt = (C.bt || 0) + dt; C.prog = C.bt / 1.5; if (C.bt >= 1.5) { C.balloon.visible = true; C.balloon.position.set(C.pad.x, C.pad.y, C.pad.z); C.bal = 0; SFX.whoosh(); clue(C.cs.balloon, '🎈'); next(); } } }
  else if (id === 'report') { if (near({ x: C.van.x, y: me.y, z: C.van.z }, 3)) { C.step = 99; Hunt.quiz(); } }
  // world bits
  C.swirls.forEach((s, i) => { if (!s.done) { s.m.userData.f.rotation.y += dt * 2.5; s.m.userData.rings.rotation.y -= dt * 1.5; s.m.userData.core.scale.setScalar(1 + Math.sin(C.t * 4 + i) * 0.15); if (R() < 0.2) puff(s.x + (R() - 0.5) * 5, s.y + R() * 5, s.z + (R() - 0.5) * 5, 1, 0xffffff, { sp: 2, up: 1, s: 0.2, s1: 0.5, life: 1 }); } });
  C.probes.forEach((p, i) => { if (p.done) { p.m.userData.cups.rotation.y += dt * 8; p.m.userData.light.visible = Math.floor(C.t * 2 + i) % 2 === 0; } else if (id === 'probe') ring('pr' + i, p.x, p.y, p.z, 1.6, 0xa855f7, p.t / 1.2); });
  if (C.bal != null) { C.bal += dt; C.balloon.position.y = C.pad.y + C.bal * 3.5; C.balloon.rotation.y += dt * 0.5; C.balloon.visible = C.bal < 30; }
  if (id === 'balloon' && C.pad) ring('bp', C.pad.x, C.pad.y, C.pad.z, 2.2, 0xfacc15, (C.bt || 0) / 1.5);
  if (id === 'report') ring('van', C.van.x, groundAt(W, C.van.x, C.van.z, 50), C.van.z, 2.4, 0x22c55e, 0);
};
function next() { const C = Hunt.C; C.step++; C.bt = 0; setTimeout(() => Hunt.A && Hunt.C && Hunt.A.toast('NEXT: ' + STEP_TXT[stepId()]), 1400); }
Hunt.quiz = function () {
  const A = Hunt.A, C = Hunt.C;
  A.panel(`<div class="big">🚐</div><h2>CASE REPORT</h2><p class="sub">${A.esc(C.cs.boss)} is listening on the van radio. Look at your clues!</p><div class="clueList">${C.clues.map((c) => `<div>🔎 ${A.esc(c)}</div>`).join('')}</div>
  <h3>${A.esc(C.cs.q)}</h3><div class="menuCol" style="margin:0 auto;max-width:520px">${C.cs.a.map((t, i) => `<button class="btn ${['', 'purple', 'pink'][i]}" data-ans="${i}">${A.esc(t)}</button>`).join('')}</div>`, (w) => {
    w.querySelectorAll('[data-ans]').forEach((b) => b.onclick = () => {
      if (+b.dataset.ans === C.cs.ok) solve(); else { C.tries++; SFX.hurt(); b.disabled = true; b.textContent = '🤔 Hmm, not quite. Read the clues again!'; }
    });
  }, { name: 'quiz', pause: true });
};
function solve() {
  const A = Hunt.A, C = Hunt.C; C.solved = true; C.step = 100;
  const first = !SV.d.hunt[C.cs.id]; SV.d.hunt[C.cs.id] = 1;
  const pay = first ? 150 : 50; addCoins(pay);
  if (!SV.d.hats.includes('meteo')) SV.d.hats.push('meteo');
  save(); A.achieve('hunter'); if (CASES.every((c) => SV.d.hunt[c.id])) A.achieve('hunter3');
  S.env = { shake: 0, rain: 0, snow: 0, ash: 0, hail: 0, wind: 1, cold: 0 }; S.haz = []; A.setMood(Hunt.mood());
  SFX.win();
  A.panel(`<div class="big">🏅</div><h2>CASE SOLVED!</h2><div class="huntBrief"><div class="rat">🐭</div><p>${A.esc(C.cs.end)}</p></div>
  <div class="res"><span>🪙 Ratita Industries paid you</span><span>+${pay}</span></div>${first ? '<div class="res" style="background:#ede9fe"><span>🌨️ Weather Hunter Hat</span><span>in the Shop</span></div>' : ''}${C.tries === 0 ? '<div class="res" style="background:#dcfce7"><span>🧠 First try!</span><span>Super sleuth</span></div>' : ''}
  <div class="btnrow"><button class="btn green" id="hNext">🌨️ MORE CASES</button></div><div class="btnrow"><button class="btn gray small" id="hMenu">MENU</button><button class="btn small" data-close>LOOK AROUND</button></div>`, (w) => {
    w.querySelector('#hMenu').onclick = () => A.quit(); w.querySelector('#hNext').onclick = () => { A.quit(); Hunt.pick(A); };
  }, { name: 'solved' });
}
Hunt.hud = function () {
  const C = Hunt.C, A = Hunt.A, me = A.me; if (!C || !me) return;
  let el = document.getElementById('huntCard'); if (!el) { el = document.createElement('div'); el.id = 'huntCard'; document.getElementById('hud').appendChild(el); }
  const id = stepId(), cnt = id === 'scan' ? ' ' + C.swirls.filter((q) => q.done).length + '/3' : id === 'probe' ? ' ' + C.probes.filter((q) => q.done).length + '/3' : '';
  const html = C.solved ? '<b>🏅 CASE SOLVED!</b> <button class="btn small" id="hcMenu">MENU</button>' : `<b>${C.cs.icon} ${A.esc(C.cs.title)}</b><div class="steps">${STEPS.map((s, i) => `<i class="${i < C.step ? 'on' : i === C.step ? 'cur' : ''}"></i>`).join('')}</div><div>${STEP_TXT[id] || ''}${cnt}</div>${C.dist != null ? `<div class="dist">📍 ${C.dist} m · follow the yellow pin</div>` : ''}<button class="btn small gray" id="hcClues">🔎 CLUES (${C.clues.length})</button>`;
  // booth #34: the clue card lives on the RIGHT, just above the jump/action buttons, so it never covers the joystick (left side)
  const cb = document.getElementById('ctrls'); if (cb) { const r = cb.getBoundingClientRect(); if (r.height > 0) { const b = Math.round(innerHeight - r.top + 10) + 'px'; if (el.style.bottom !== b) el.style.bottom = b; } }
  if (el._h !== html) { el._h = html; el.innerHTML = html; const b = document.getElementById('hcClues'); if (b) b.onclick = () => Hunt.showClues(); const m = document.getElementById('hcMenu'); if (m) m.onclick = () => A.quit(); }
  const wp = document.getElementById('wavePill'), tf = document.getElementById('timerFill'), chip = document.getElementById('safeChip');
  wp.textContent = C.solved ? '☀️ STORM OVER' : '🌨️ WEATHER HUNTER'; tf.style.width = Math.min(100, C.prog * 100) + '%';
  const sh = shelter(A.W, me); chip.classList.toggle('hidden', C.solved || me.st !== 'ok');
  if (!C.solved && me.st === 'ok') { if (sh.fire) { chip.className = 'safe ok'; chip.textContent = '🔥 Toasty warm!'; } else if (!sh.out) { chip.className = 'safe ok'; chip.textContent = '🏠 Warm inside'; } else { chip.className = 'safe meh'; chip.textContent = '🥶 Cold! Warm up inside or by a fire'; } }
  // guide arrow + beacon to the current objective (to the stairs first if it is up high)
  const t = !C.solved && me.st === 'ok' ? target() : null;
  if (t) { C.pin.visible = true; C.pin.position.set(t.x, (t.y || 0) + 6.5 + Math.sin(G.t * 3) * 0.4, t.z); C.pin.rotation.y = G.t * 1.5; const dd = Math.hypot(t.x - me.x, t.z - me.z); C.pin.scale.setScalar(Math.min(2.4, 1 + dd / 40)); C.dist = Math.round(dd); } else { if (C.pin) C.pin.visible = false; C.dist = null; }
  if (t) { const g = t.foot && me.y < t.y - 1.5 && Math.hypot(t.x - me.x, t.z - me.z) > 4 ? t.foot : t; const a = Math.atan2(g.x - me.x, g.z - me.z); FX.arrow.visible = true; FX.arrow.position.set(me.x + Math.sin(a) * 1.4, me.y + 2.4 + Math.sin(G.t * 5) * 0.1, me.z + Math.cos(a) * 1.4); FX.arrow.rotation.set(0, a, 0); FX.beacon.visible = true; FX.beacon.position.set(t.x, (t.y || 0) + 15, t.z); }
  else { FX.arrow.visible = false; FX.beacon.visible = false; }
};
Hunt.showClues = function () { const A = Hunt.A, C = Hunt.C; A.panel(`<h2>🔎 CLUES</h2>${C.clues.length ? `<div class="clueList">${C.clues.map((c) => `<div>🔎 ${A.esc(c)}</div>`).join('')}</div>` : '<p class="sub">No clues yet. Scan the glowing storm swirls!</p>'}<div class="btnrow"><button class="btn green" data-close>BACK TO WORK</button></div>`, null, { name: 'clues', pause: true }); };
Hunt.pick = function (A, owned) {
  Hunt.A = A; const own = owned == null ? true : owned;
  A.panel(`<h2>🌨️ WEATHER HUNTER</h2><p class="sub">Ratita Industries needs a meteorologist! Pick a case to investigate.</p><div class="cards">${CASES.map((c) => `<div class="card ${SV.d.hunt[c.id] ? 'done' : ''}" data-c="${c.id}"><div class="em">${c.icon}</div><b>${A.esc(c.title)}</b><small>Client: ${c.boss} · ${{ frost: 'Frostbite Village', ratita: 'Ratita HQ', dinov: 'Dino Valley' }[c.map]}</small>${SV.d.hunt[c.id] ? '<small style="color:#15803d;font-weight:800">🏅 SOLVED</small>' : ''}</div>`).join('')}</div>
  <div class="btnrow"><button class="btn gray" data-close>BACK</button></div>`, (w) => {
    w.querySelectorAll('[data-c]').forEach((c) => c.onclick = () => { SFX.click(); if (!own) return A.dlcInfo(); Hunt.start(A, CASES.find((x) => x.id === c.dataset.c)); });
  }, { name: 'huntpick' });
};

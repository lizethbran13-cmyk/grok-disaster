// Super Thunder Expansion: 3 new maps (Ratita Industries HQ, Frostbite Village, Dino Valley) + their set dressing
import * as THREE from 'three';
import { GEO, mat4, addTree, addRock, addCar, addLamp, addBench, prop } from './models.js';
import { M } from './mats.js';
import { addWall, addPlat } from './world.js';
import { makeBuilding } from './build.js';
import { groundMesh, road, sidewalk, lookout, fence, radar, fountain, trafficLight, cloud, waterTower } from './maps.js';
import { flower, tuft, bush, hydrant, trash, mailbox, cone, barrel, crate, planter, umbrellaCart, balloon, picnic, hay, sandbag, dish, logPile, stump, mushroom, billboard, busStop } from './deco.js';
import { addVan, addRatStatue, addSnowman, addIgloo } from './dlcmodels.js';

export const DLC_MAPS = [
  { id: 'ratita', name: 'Ratita HQ', emoji: '🐭', desc: 'Ratita Industries campus: a 34 m glass tower, labs, a gadget factory, a rocket hangar and a SECRET LAB underground.', mood: 'sunny', dlc: true },
  { id: 'frost', name: 'Frostbite Village', emoji: '❄️', desc: 'Snowy village with cozy cabins (warm fireplaces!), a frozen lake, a weather observatory and an ICE CAVE.', mood: 'snowday', dlc: true },
  { id: 'dinov', name: 'Dino Valley', emoji: '🦕', desc: 'Jungle dino park with a museum, a hatchery, a jungle hotel, an observation tower and a smoking volcano.', mood: 'jungle', dlc: true }
];
export const DLC_MAP_IDS = DLC_MAPS.map((m) => m.id);
const ss = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function buildDLCMap(id, W, B, root, R) {
  if (id === 'ratita') ratita(W, B, root, R);
  else if (id === 'frost') frost(W, B, root, R);
  else if (id === 'dinov') dinov(W, B, root, R);
}
function vanWall(W, x, z, ry) { const ax = Math.abs(Math.sin(ry)) > 0.5; addWall(W, x - (ax ? 2.9 : 1.2), z - (ax ? 1.2 : 2.9), x + (ax ? 3.7 : 1.2), z + (ax ? 1.2 : 3.7), 0, 2.6); }
const topOf = (W, label) => { const h = W.high.find((q) => q.label === label); return h ? { x: h.x, y: h.y, z: h.z, foot: h.foot } : null; };

/* ================= RATITA INDUSTRIES HQ ================= */
function ratita(W, B, root, R) {
  W.half = 75;
  W.terrain = (x, z) => { const r = Math.max(Math.abs(x), Math.abs(z)); return r > 68 ? (r - 68) * 0.8 : 0; };
  const plaza = (x, z) => (Math.abs(x) < 11 && z > -30 && z < -8) || (x > -10 && x < 10 && z < -50 && z > -64);
  groundMesh(W, root, (x, z, h) => plaza(x, z) ? 0xdfe5ec : (Math.hypot(x, z - 27) < 13 ? 0x7fd35b : 0x8fd46c));
  road(B, -75, 0, 75, 0, 9); road(B, -30, -75, -30, 75, 8, 0.035); road(B, 30, -75, 30, 75, 8, 0.035);
  for (const bx of [-50, -15, 15, 50]) for (const bz of [-36, 30]) sidewalk(B, bx, bz, bx === -50 || bx === 50 ? 24 : 22, 58, 0.02);
  const mk = (o) => makeBuilding(W, root, Object.assign({ trim: 0xffffff, roof: 0x475569, roofType: 'flat' }, o));
  mk({ x: 0, z: -38, w: 12, d: 12, h: 34, door: 's', wall: 0xa78bfa, roof: 0x334155, elevator: true, sturdy: true, interior: 'office', basement: 'lab', name: 'Ratita Tower', sign: 0x7c3aed });
  mk({ x: -15, z: -40, w: 10, d: 9, h: 4.6, door: 'e', wall: 0xe0f2fe, trim: 0x0ea5e9, interior: 'lab', sturdy: true, name: 'Research Lab A', sign: 0x0ea5e9 });
  mk({ x: 15, z: -40, w: 10, d: 9, h: 4.6, door: 'w', wall: 0xfce7f3, trim: 0xdb2777, interior: 'lab', sturdy: true, basement: true, name: 'Research Lab B', sign: 0xdb2777 });
  mk({ x: -15, z: -20, w: 10, d: 8, h: 4.2, door: 'e', wall: 0xfde68a, roof: 0xf59e0b, interior: 'diner', name: 'Cheese Cafeteria', sign: 0xf59e0b });
  mk({ x: 15, z: -20, w: 9, d: 7, h: 4.2, door: 'w', wall: 0xbbf7d0, interior: 'shop', basement: true, name: 'Gift Shop', sign: 0x16a34a });
  mk({ x: -50, z: -42, w: 16, d: 14, h: 7, ceil: 6, door: 'e', wall: 0xcbd5e1, trim: 0xf97316, roof: 0x64748b, interior: 'factory', sturdy: true, wideDoor: 4.4, name: 'Gadget Factory', sign: 0xf97316, windows: false });
  mk({ x: -50, z: -16, w: 12, d: 10, h: 5.2, ceil: 5.2, door: 'e', wall: 0xe63946, roof: 0x9d0208, interior: 'station', wideDoor: 3.6, sturdy: true, name: 'Fire Station' });
  mk({ x: 50, z: -42, w: 8, d: 8, h: 14, door: 'w', wall: 0xffffff, trim: 0x0ea5e9, roof: 0x0ea5e9, interior: 'observatory', elevator: true, sturdy: true, name: 'Weather Station', sign: 0x0ea5e9 });
  mk({ x: 50, z: -22, w: 9, d: 7, h: 4.2, door: 'w', wall: 0xbfdbfe, interior: 'shop', name: 'Mail Room', sign: 0x3a86ff });
  mk({ x: -50, z: 18, w: 9, d: 9, h: 10, door: 'e', wall: 0xffc8dd, roof: 0xcdb4db, interior: 'home', elevator: true, basement: true, name: 'Staff Apartments' });
  mk({ x: -50, z: 44, w: 9, d: 9, h: 12, door: 'e', wall: 0xbde0fe, roof: 0x93c5fd, interior: 'home', elevator: true, name: 'Staff Apartments 2' });
  mk({ x: -15, z: 16, w: 10, d: 8, h: 3.8, door: 'e', wall: 0xfef08a, roof: 0xef4444, roofType: 'gable', interior: 'home', basement: true, name: 'Mouse House Daycare' });
  mk({ x: -15, z: 40, w: 10, d: 8, h: 4.2, door: 'e', wall: 0xfecaca, interior: 'shop', name: 'Ratita Gym', sign: 0xef4444 });
  mk({ x: 15, z: 16, w: 9, d: 7, h: 4.2, door: 'w', wall: 0xfef3c7, interior: 'shop', basement: true, name: 'Cheese Shop', sign: 0xeab308 });
  mk({ x: 15, z: 40, w: 10, d: 8, h: 4.6, door: 'w', wall: 0xffffff, trim: 0xef4444, interior: 'office', sturdy: true, name: 'Ratita Clinic', sign: 0xef4444 });
  mk({ x: 50, z: 20, w: 15, d: 16, h: 7.5, ceil: 7.5, door: 'w', wall: 0xdfe6ed, trim: 0x7c3aed, roof: 0xb8c4d0, roofType: 'arch', interior: 'hangar', sturdy: true, wideDoor: 6, windows: false, name: 'Rocket Hangar' });
  mk({ x: 50, z: 46, w: 9, d: 7, h: 4.0, door: 'w', wall: 0xfdba74, interior: 'diner', name: 'Squeak Snack Bar', sign: 0xea580c });
  // plaza: giant Ratita statue, fountain park, parking lot, sky deck lookout
  addRatStatue(B, 0, 0, -19, 0, 1.15);
  fountain(B, 0, 27); for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283; addTree(B, Math.cos(a) * 9.5, 0, 27 + Math.sin(a) * 9.5, 0.8 + R() * 0.3, 'round', i); }
  [[0, 20.5, 0], [0, 33.5, Math.PI], [-6.5, 27, Math.PI / 2], [6.5, 27, -Math.PI / 2]].forEach((b) => addBench(B, b[0], 0, b[1], b[2]));
  for (let i = 0; i < 6; i++) { B.add(GEO.box(0.18, 0.02, 4.4), M(0xffffff, { r: 0.6 }), mat4(-7.5 + i * 3, 0.07, -57)); if (i < 5) addCar(B, -6 + i * 3, 0, -57, 0, [0xff595e, 0xffca3a, 0x3a86ff, 0x8ac926, 0xf8fafc][i]); }
  lookout(W, B, 0, 50, 6, 0, 'Sky Deck', 0x7c3aed);
  radar(B, 62, -54); waterTower(B, -64, -60);
  // solar panel field by the factory, pipes, tech clutter
  for (let i = 0; i < 6; i++) for (let k = 0; k < 2; k++) { const x = -63 + k * 5, z = -60 + i * 2.6; B.add(GEO.box(4, 0.08, 2), M(0x1e3a8a, { r: 0.2, m: 0.6, cc: 1 }), mat4(x, 1.1, z, -0.5, 0, 0)); B.mesh(GEO.cyl(0.06, 0.06, 1.1, 6), M(0x94a3b8, { m: 0.7 }), x, 0.55, z); prop(x, z, 1.2, 1.4); }
  for (let i = 0; i < 3; i++) { B.mesh(GEO.cyl(0.45, 0.55, 6, 16), M(0xd1d5db, { m: 0.8, r: 0.3 }), -55, 10, -47 + i * 4); B.mesh(GEO.torus(0.5, 0.08, 6.283, 6, 20), M(0xf97316, { r: 0.4 }), -55, 12.6, -47 + i * 4, Math.PI / 2, 0, 0); }
  for (const v of [-30, 30]) for (const u of [-60, -45, -15, 15, 45, 60]) addLamp(B, v + 4.8, 0, u);
  for (const u of [-60, -40, -15, 15, 40, 60]) addLamp(B, u, 0, 5.2);
  trafficLight(B, -25.2, 5.2, 0); trafficLight(B, 34.8, 5.2, 0);
  for (let i = 0; i < 8; i++) { const v = [-30, 30][i % 2], u = -60 + i * 16; addCar(B, v + 2.2, 0, u, 0, [0x7c3aed, 0xf472b6, 0x22d3ee, 0xfacc15][i % 4]); }
  W.volcano = { x: -64, z: -66 }; W.spawns = [[4, 9], [-4, 9], [4, 13], [-4, 13]];
  addVan(B, 10, 0, 10, Math.PI / 2); vanWall(W, 10, 10, Math.PI / 2);
  for (let i = 0; i < 8; i++) cloud(B, (R() - 0.5) * 300, 50 + R() * 20, (R() - 0.5) * 300, 4 + R() * 3);
  W.hunt = { van: { x: 10, z: 13.6 }, anomalies: [[-38, 28], [38, -11], [2, 62], [-5, -27], [-36, -62], [62, 32]], probes: [[-64, 4], [64, -6], [20, -60], [-22, 56], [-30, -30], [36, 58]], pad: topOf(W, 'Sky Deck') };
}

/* ================= FROSTBITE VILLAGE ================= */
function frost(W, B, root, R) {
  W.half = 75;
  const lake = (x, z) => Math.hypot(x + 35, z + 30);
  W.terrain = (x, z) => { const r = Math.max(Math.abs(x) / 52, Math.abs(z) / 46); let h = r > 1 ? Math.pow((r - 1) * 30, 1.25) * 0.45 + Math.sin(x * 0.15) * Math.cos(z * 0.13) * 1.5 * ss(1, 1.3, r) : 0; h -= ss(13, 9, lake(x, z)) * 0.35; h += Math.max(0, 9 - Math.hypot(x - 46, z - 50) * 0.5) * ss(0, 1, 1); return h; };
  groundMesh(W, root, (x, z, h) => lake(x, z) < 11.5 ? 0xbfe6ff : h > 12 ? 0xf8fafc : h > 6 ? 0xe2e8f0 : 0xf1f5f9);
  // frozen lake (shiny ice) + skating marks
  const ice = new THREE.Mesh(new THREE.CircleGeometry(11.5, 48), M(0xd6f1ff, { r: 0.05, cc: 1, op: 0.8, e: 0x7dd3fc, ei: 0.08 })); ice.rotation.x = -Math.PI / 2; ice.position.set(-35, -0.3, -30); root.add(ice);
  for (let i = 0; i < 6; i++) B.add(GEO.torus(3 + i * 1.1, 0.03, 4.2, 4, 40), M(0xffffff, { r: 0.4 }), mat4(-35, -0.28, -30, Math.PI / 2, 0, i));
  const rd = M(0xcbd5e1, { r: 0.9 });
  B.add(GEO.box(104, 0.07, 6), rd, mat4(0, 0.035, 0)); B.add(GEO.box(6, 0.065, 92), rd, mat4(0, 0.04, 0));
  for (let k = 0; k < 20; k++) { B.add(GEO.box(0.5, 0.02, 1.4), M(0x93c5fd, { r: 0.7 }), mat4(-48 + k * 5, 0.08, 0)); if (k < 18) B.add(GEO.box(1.4, 0.02, 0.5), M(0x93c5fd, { r: 0.7 }), mat4(0, 0.085, -43 + k * 5)); }
  const logs = [0xb5651d, 0xc97c3a, 0xa0522d, 0xd4884a], rf = [0xf8fafc, 0xc1121f, 0xf8fafc, 0x1d3557];
  let i = 0;
  for (const [x, z, door] of [[-14, -14, 's'], [-28, -14, 's'], [14, -14, 's'], [28, -14, 's'], [-14, 14, 'n'], [14, 14, 'n'], [28, 14, 'n'], [-28, 14, 'n']]) { makeBuilding(W, root, { x, z, w: 9, d: 8, h: 3.8, door, wall: logs[i % 4], trim: 0xfff1d6, roof: rf[i % 4], interior: 'cabin', basement: i % 2 === 0, name: 'Snow Cabin', inner: 0xf5deb3, floor: 0xb07a45 }); i++; }
  const mk = (o) => makeBuilding(W, root, Object.assign({ trim: 0xffffff, roof: 0x475569, roofType: 'flat' }, o));
  mk({ x: -10, z: 34, w: 14, d: 10, h: 7, ceil: 3.8, door: 'e', wall: 0x8d5524, roof: 0xf8fafc, roofType: 'gable', interior: 'diner', name: 'Ski Lodge', inner: 0xf5deb3, floor: 0xb07a45 });
  mk({ x: 14, z: 32, w: 9, d: 7, h: 4.0, door: 'w', wall: 0xfde68a, roof: 0x92400e, interior: 'diner', name: 'Hot Cocoa Cafe', sign: 0x92400e });
  mk({ x: 30, z: -34, w: 8, d: 8, h: 14, door: 'w', wall: 0xffffff, trim: 0x0ea5e9, roof: 0x0ea5e9, interior: 'observatory', elevator: true, sturdy: true, name: 'Ratita Observatory', sign: 0x7c3aed });
  mk({ x: 10, z: -36, w: 12, d: 9, h: 9, door: 's', wall: 0xfca5a5, trim: 0xffffff, roof: 0x7f1d1d, interior: 'office', elevator: true, sturdy: true, name: 'Town Hall', sign: 0xb91c1c });
  mk({ x: -16, z: -34, w: 10, d: 8, h: 4.2, door: 's', wall: 0xffd166, roof: 0xef476f, roofType: 'gable', interior: 'shop', basement: true, name: 'General Store', sign: 0xef476f });
  mk({ x: -44, z: 14, w: 10, d: 9, h: 5, ceil: 5, door: 'e', wall: 0x2d6a4f, trim: 0xffd166, roof: 0xf8fafc, interior: 'station', sturdy: true, wideDoor: 3.6, name: 'Ranger Station' });
  mk({ x: 44, z: -10, w: 7, d: 6, h: 3.6, door: 'w', wall: 0x7dd3fc, trim: 0xe0f2fe, roof: 0xe0f2fe, interior: 'shop', basement: 'cave', sturdy: true, name: 'Ice Cave', sign: 0x0284c7 });
  mk({ x: -46, z: -6, w: 10, d: 8, h: 4.4, door: 'e', wall: 0xfef3c7, roof: 0x1d4ed8, roofType: 'gable', interior: 'office', name: 'Snowflake School', sign: 0x1d4ed8 });
  mk({ x: -20, z: -50, w: 7, d: 6, h: 3.6, door: 'n', wall: 0xbae6fd, roof: 0x0369a1, interior: 'shop', name: 'Skate Rental', sign: 0x0369a1 });
  mk({ x: 44, z: 20, w: 9, d: 7, h: 4.0, door: 'w', wall: 0xfbcfe8, roof: 0xbe185d, roofType: 'gable', interior: 'diner', name: 'Gingerbread Bakery', sign: 0xbe185d });
  lookout(W, B, -36, 30, 6, Math.PI / 2, 'Ski Jump Deck', 0x0ea5e9);
  // campfires (warm spots), snowmen, igloos, sleds
  [[8, 8], [-8, -24], [36, 2]].forEach((c) => { B.mesh(GEO.cyl(1.2, 1.3, 0.3, 16), M(0x6b7280, { r: 0.9 }), c[0], 0.15, c[1]); for (let j = 0; j < 4; j++) B.add(GEO.cyl(0.12, 0.12, 1.4, 8), M(0x6b4423), mat4(c[0], 0.35, c[1], Math.PI / 2, j * 0.8, 0)); B.mesh(GEO.sphere(0.45, 12, 10), M(0xff7b00, { e: 0xff5400, ei: 2.5 }), c[0], 0.55, c[1]); W.fires.push({ x: c[0], y: 0, z: c[1], r: 3.5 }); prop(c[0], c[1], 1.3, 0.6); });
  addIgloo(B, 24, 0, 44, -Math.PI / 2); addIgloo(B, -48, 0, 34, Math.PI / 2); addIgloo(B, 52, 0, -30, Math.PI);
  [[6, -6, 0.6], [-22, 24, 2.4], [22, -24, 3.6], [-40, -16, 1.2], [36, 30, -0.5], [-6, 50, 0]].forEach((s) => addSnowman(B, s[0], W.terrain(s[0], s[1]), s[1], s[2]));
  for (let j = 0; j < 130; j++) { const x = (R() - 0.5) * 160, z = (R() - 0.5) * 160; const h = W.terrain(x, z); if ((Math.abs(x) < 54 && Math.abs(z) < 46) || h > 16) continue; addTree(B, x, h - 0.2, z, 0.9 + R() * 0.9, 'pine', j); snowCap(B, x, h - 0.2, z, 0.9 + R() * 0.2); }
  for (let j = 0; j < 22; j++) { const x = (R() - 0.5) * 96, z = (R() - 0.5) * 84; if (Math.abs(x) < 5 || Math.abs(z) < 5 || lake(x, z) < 14 || W.walls.some((w) => x > w.x0 - 3 && x < w.x1 + 3 && z > w.z0 - 3 && z < w.z1 + 3)) continue; addTree(B, x, W.terrain(x, z), z, 0.75, 'pine', j); snowCap(B, x, W.terrain(x, z), z, 0.75); }
  // ski lift pylons up the mountain + a cable
  for (let j = 0; j < 5; j++) { const x = 40 + j * 7, z = -44 - j * 5, y = W.terrain(x, z); B.mesh(GEO.cyl(0.25, 0.3, 9, 10), M(0x475569, { m: 0.6, r: 0.4 }), x, y + 4.5, z); B.add(GEO.box(3, 0.2, 0.2), M(0x475569, { m: 0.6 }), mat4(x, y + 9, z, 0, -0.62, 0)); B.add(GEO.rbox(1.2, 0.8, 0.9, 0.1), M([0xef4444, 0x3b82f6, 0xfacc15][j % 3], { r: 0.4, cc: 0.6 }), mat4(x + 0.6, y + 7.6, z - 0.2, 0, -0.62, 0)); prop(x, z, 0.4, y + 9); }
  for (const v of [-30, 30]) for (const u of [-40, -20, 20, 40]) addLamp(B, u, 0, v === -30 ? -3.8 : 3.8);
  [[4, -24, 0, 0xc1121f], [-24, 4, Math.PI / 2, 0x1d3557], [24, 4, Math.PI / 2, 0x0ea5e9]].forEach((c) => addCar(B, c[0], 0, c[1], c[2], c[3]));
  W.volcano = { x: -60, z: 62 }; W.spawns = [[4, 6], [-4, 6], [4, -6], [-4, -6]];
  addVan(B, 6, 0, 22, 0); vanWall(W, 6, 22, 0);
  for (let j = 0; j < 9; j++) cloud(B, (R() - 0.5) * 300, 48 + R() * 20, (R() - 0.5) * 300, 4 + R() * 3);
  W.hunt = { van: { x: 3.2, z: 22 }, anomalies: [[-34, -28], [44, 40], [-50, 46], [22, -25], [-4, 22], [56, -40]], probes: [[58, 4], [-58, 2], [0, 52], [-46, -36], [20, 52], [38, -52]], pad: topOf(W, 'Ski Jump Deck') };
}
function snowCap(B, x, y, z, s) { B.mesh(GEO.cone(1, 1, 16), M(0xffffff, { r: 0.6 }), x, y + 3.95 * s, z, 0, 0, 0, 0.95 * s, 0.75 * s, 0.95 * s); B.mesh(GEO.cone(1, 1, 16), M(0xffffff, { r: 0.6 }), x, y + 2.85 * s, z, 0, 0, 0, 1.32 * s, 0.4 * s, 1.32 * s); }

/* ================= DINO VALLEY ================= */
function dinov(W, B, root, R) {
  W.half = 75;
  const mtn = (x, z) => Math.max(0, 30 - Math.hypot(x + 62, z + 62) * 0.8);
  const lag = (x, z) => Math.hypot(x - 44, z + 44);
  W.terrain = (x, z) => { const r = Math.max(Math.abs(x) / 52, Math.abs(z) / 46); let h = r > 1 ? Math.pow((r - 1) * 30, 1.3) * 0.5 + Math.sin(x * 0.2) * Math.cos(z * 0.17) * 2 * ss(1, 1.3, r) : 0; h -= ss(11, 6, lag(x, z)) * 2.0; return Math.max(h, mtn(x, z)); };
  groundMesh(W, root, (x, z, h) => h > 10 ? 0x8b5a2b : h > 4 ? 0x7fae4a : lag(x, z) < 11 ? 0xd6c28a : 0x6fbf4a);
  const lagoon = new THREE.Mesh(new THREE.CircleGeometry(10, 48), M(0x2dd4bf, { r: 0.05, cc: 1, op: 0.85, e: 0x0f766e, ei: 0.2 })); lagoon.rotation.x = -Math.PI / 2; lagoon.position.set(44, -1.2, -44); root.add(lagoon);
  // dirt trails instead of asphalt
  const dirt = M(0xc8a165, { r: 0.95 }); B.add(GEO.box(120, 0.06, 7), dirt, mat4(0, 0.03, 0)); B.add(GEO.box(7, 0.065, 110), dirt, mat4(0, 0.035, -5));
  const mk = (o) => makeBuilding(W, root, Object.assign({ trim: 0xffffff, roof: 0x475569, roofType: 'flat' }, o));
  mk({ x: 0, z: -34, w: 14, d: 10, h: 8, ceil: 4, door: 's', wall: 0xd9f99d, trim: 0x166534, roof: 0x166534, interior: 'office', elevator: true, sturdy: true, basement: true, name: 'Visitor Center', sign: 0x16a34a });
  mk({ x: -24, z: -34, w: 14, d: 10, h: 6, ceil: 5, door: 's', wall: 0xfef3c7, trim: 0x92400e, roof: 0x92400e, roofType: 'gable', interior: 'museum', sturdy: true, name: 'Dino Museum', sign: 0xb45309, windows: true });
  mk({ x: 24, z: -34, w: 11, d: 9, h: 4.6, door: 's', wall: 0xe0f2fe, trim: 0x0ea5e9, interior: 'lab', sturdy: true, basement: 'lab', name: 'Research Lab', sign: 0x0ea5e9 });
  mk({ x: 40, z: -14, w: 10, d: 8, h: 4.2, door: 'w', wall: 0xfef9c3, trim: 0xca8a04, interior: 'lab', name: 'Dino Hatchery', sign: 0xeab308 });
  mk({ x: -40, z: -14, w: 9, d: 7, h: 4.2, door: 'e', wall: 0xbbf7d0, interior: 'shop', basement: true, name: 'Fossil Gift Shop', sign: 0x15803d });
  mk({ x: -14, z: -14, w: 9, d: 7, h: 4.0, door: 'e', wall: 0xfdba74, roof: 0x9a3412, interior: 'diner', name: 'Jurassic Burgers', sign: 0xea580c });
  mk({ x: 14, z: -14, w: 9, d: 7, h: 4.2, door: 'w', wall: 0xffffff, trim: 0x0d9488, interior: 'shop', name: 'Dino Vet', sign: 0x0d9488 });
  const huts = [0xa16207, 0x92400e, 0xb45309];
  [[-14, 14, 'e'], [14, 14, 'w'], [-30, 14, 'n'], [-20, 40, 's']].forEach((h, j) => mk({ x: h[0], z: h[1], w: 9, d: 8, h: 3.8, door: h[2], wall: huts[j % 3], trim: 0xfef3c7, roof: 0x65a30d, roofType: 'gable', interior: 'cabin', basement: j % 2 === 0, name: j === 3 ? 'Explorer Outpost' : 'Ranger Hut', inner: 0xf5deb3, floor: 0xb07a45 }));
  mk({ x: 30, z: 18, w: 10, d: 10, h: 18, door: 'w', wall: 0x99f6e4, trim: 0xffffff, roof: 0x0f766e, interior: 'office', elevator: true, sturdy: true, name: 'Jungle Lodge Hotel', sign: 0x0f766e });
  mk({ x: -46, z: 18, w: 12, d: 10, h: 5, ceil: 5, door: 'e', wall: 0x65a30d, trim: 0xfacc15, roof: 0x3f6212, interior: 'station', sturdy: true, wideDoor: 3.6, name: 'Jeep Garage' });
  mk({ x: 16, z: 42, w: 8, d: 7, h: 3.8, door: 'w', wall: 0xfde047, roof: 0x16a34a, roofType: 'gable', interior: 'diner', name: 'Tiki Smoothies', sign: 0x16a34a });
  mk({ x: 46, z: 44, w: 7, d: 7, h: 14, door: 'w', wall: 0xfef3c7, trim: 0x166534, roof: 0x166534, interior: 'office', elevator: true, sturdy: true, name: 'Observation Tower' });
  lookout(W, B, -44, 38, 6, Math.PI / 2, 'Treetop Lookout', 0x65a30d);
  // volcano crater (real)
  B.mesh(GEO.cyl(5, 7, 2, 32), M(0x5b4636, { r: 0.9 }), -62, mtn(-62, -62) - 0.5, -62); B.mesh(GEO.cyl(4.2, 4.2, 0.3, 32), M(0xff6b00, { e: 0xff4d00, ei: 2.2 }), -62, mtn(-62, -62) + 0.4, -62);
  W.volcano = { x: -62, z: -62, y: mtn(-62, -62), real: true };
  // entrance gate with a giant bone arch over the trail
  [-5.5, 5.5].forEach((x) => { B.mesh(GEO.rbox(1.6, 8, 1.6, 0.2), M(0x92400e, { r: 0.8 }), x, 4, 56); B.mesh(GEO.cone(1.3, 1.6, 8), M(0xf97316, { r: 0.6 }), x, 8.8, 56); prop(x, 56, 1.0, 8); });
  B.add(GEO.torus(5.5, 0.35, Math.PI, 10, 32), M(0xf5ead0, { r: 0.6 }), mat4(0, 7.5, 56));
  // dino nests, footprints, electric paddock fences, jeeps, a bone pile
  [[-54, -30], [54, 4], [-8, 62]].forEach((n, j) => { const y = W.terrain(n[0], n[1]); B.add(GEO.torus(1.4, 0.45, 6.283, 8, 20), M(0xa16207, { r: 1 }), mat4(n[0], y + 0.25, n[1], Math.PI / 2, 0, 0)); for (let k = 0; k < 3; k++) B.mesh(GEO.sphere(0.5, 16, 12), M([0xfef3c7, 0xbae6fd, 0xfbcfe8][(j + k) % 3], { r: 0.4, cc: 0.6 }), n[0] + Math.cos(k * 2.1) * 0.5, y + 0.55, n[1] + Math.sin(k * 2.1) * 0.5, 0, 0, 0, 0.85, 1.15, 0.85); prop(n[0], n[1], 1.8, y + 1); });
  for (let j = 0; j < 14; j++) { const x = -3 + (j % 2) * 2, z = 50 - j * 3.2; B.add(GEO.cyl(0.55, 0.55, 0.02, 3), M(0x8b5a2b, { r: 1 }), mat4(x, 0.07, z, 0, Math.PI / 6, 0)); }
  fence(B, W, -64, 30, -64, 60, 0xfacc15); fence(B, W, 60, -24, 60, 30, 0xfacc15);
  [[-6, 22, 0, 0x65a30d], [24, 4, Math.PI / 2, 0xf59e0b], [-24, -4, Math.PI / 2, 0x16a34a]].forEach((c) => addCar(B, c[0], 0, c[1], c[2], c[3]));
  for (let j = 0; j < 90; j++) { const x = (R() - 0.5) * 160, z = (R() - 0.5) * 160; const h = W.terrain(x, z); if ((Math.abs(x) < 54 && Math.abs(z) < 48) || h > 14 || Math.hypot(x + 62, z + 62) < 30) continue; addTree(B, x, h - 0.2, z, 1 + R() * 0.9, j % 3 ? 'round' : 'palm', j); }
  for (let j = 0; j < 30; j++) { const x = (R() - 0.5) * 100, z = (R() - 0.5) * 90; if (Math.abs(x) < 5 || Math.abs(z) < 5 || lag(x, z) < 12 || W.walls.some((w) => x > w.x0 - 3 && x < w.x1 + 3 && z > w.z0 - 3 && z < w.z1 + 3) || Math.hypot(x + 62, z + 62) < 34) continue; addTree(B, x, W.terrain(x, z), z, 0.8 + R() * 0.4, j % 2 ? 'palm' : 'round', j); }
  W.spawns = [[5, 6], [-5, 6], [5, -6], [-5, -6]];
  addVan(B, 7, 0, -22, 0); vanWall(W, 7, -22, 0);
  for (let j = 0; j < 8; j++) cloud(B, (R() - 0.5) * 300, 48 + R() * 20, (R() - 0.5) * 300, 4 + R() * 3);
  W.hunt = { van: { x: 4.2, z: -22 }, anomalies: [[-28, 30], [30, 40], [-2, 30], [44, -42], [-30, -50], [56, 20]], probes: [[58, 4], [-58, 0], [6, -56], [-34, 56], [36, -26], [-50, -40]], pad: topOf(W, 'Treetop Lookout') };
}
function fern(D, x, y, z, s = 1, c = 0x3fa34d) { for (let k = 0; k < 6; k++) { const a = k / 6 * 6.283; D.mesh(GEO.sphere(1, 8, 6), M(c, { r: 0.75 }), x + Math.cos(a) * 0.45 * s, y + 0.35 * s, z + Math.sin(a) * 0.45 * s, 0, -a, 0.6, 0.65 * s, 0.07 * s, 0.2 * s); } }

/* ---------- set dressing (called from decorate) ---------- */
export const DLC_DECO = {
  ratita: {
    roadAt: (x, z) => Math.abs(z) < 5.5 || Math.abs(x - 30) < 5 || Math.abs(x + 30) < 5 || (Math.abs(x) < 11 && z > -30 && z < -8) || Math.hypot(x, z - 27) < 4.5,
    deco({ W, B, D, SG, R, free, scatter, welcome }) {
      welcome(22, -6, 0, 'RATITA INDUSTRIES', 0x7c3aed); welcome(-22, 8, 0, 'SQUEAK SMARTER!', 0xdb2777);
      SG.add('RATITA', 0x7c3aed, 7, mat4(0, 0.1, -24, -Math.PI / 2, 0, 0), '#ffffff');
      busStop(B, SG, -36, 0.0, -5.8, 0); busStop(B, SG, 24, 0.0, 5.8, Math.PI);
      [[-4, -46], [6, -48], [-22, 10], [22, 24]].forEach((p, i) => umbrellaCart(B, p[0], 0, p[1], [0x7c3aed, 0xf472b6, 0x22d3ee, 0xfacc15][i]));
      for (let k = 0; k < 6; k++) { dish(B, 44 + k * 2.4, 0, -54, 0.4 + k); }
      [[-40, -34], [-40, -50], [-58, -30]].forEach((p, i) => { for (let k = 0; k < 3; k++) barrel(B, p[0] + k * 0.85, 0, p[1], [0xf97316, 0x7c3aed, 0xfacc15][(i + k) % 3]); crate(B, p[0] + 0.4, 0, p[1] + 1.2, 1, i); });
      for (let k = 0; k < 8; k++) cone(B, 46, 0, 8 + k * 3);
      for (const bx of [-15, 15]) for (const bz of [-30, 28, 52]) { const c = [[bx - 6, bz], [bx + 6, bz]]; c.forEach((q, i) => { if (!free(q[0], q[1], 0.6)) return; [hydrant, trash, mailbox][(i + bz) & 1 ? 1 : (i ? 2 : 0)](B, q[0], 0, q[1]); }); }
      scatter(90, 140, 0.5, (x, y, z, k) => k % 3 ? tuft(D, x, y, z, [0x5cc05a, 0x4caf50, 0x7ed957][k % 3]) : flower(D, x, y, z, [0xf472b6, 0xa78bfa, 0xffffff, 0xfacc15][k % 4]));
      scatter(14, 130, 1.4, (x, y, z, k) => planter(B, D, x, y, z));
      for (let i = 0; i < 60; i++) { const a = R() * 6.283, r = 5 + R() * 7; const x = Math.cos(a) * r, z = 27 + Math.sin(a) * r; if (free(x, z, 0.3)) flower(D, x, 0, z, [0xf472b6, 0xa78bfa, 0xfacc15, 0xffffff][i % 4]); }
      for (let i = 0; i < 6; i++) balloon(B, -4 + i * 0.6, 0, 37.5 + (i % 2) * 0.4, [0x7c3aed, 0xf472b6, 0x22d3ee, 0xfacc15, 0xffffff, 0x4ade80][i], 2.6 + (i % 3) * 0.35);
    }
  },
  frost: {
    roadAt: (x, z) => (Math.abs(z) < 4 && Math.abs(x) < 54) || (Math.abs(x) < 4 && Math.abs(z) < 48) || Math.hypot(x + 35, z + 30) < 12.5,
    deco({ W, B, D, SG, R, free, scatter, welcome }) {
      welcome(-7, 8, 0, 'FROSTBITE VILLAGE', 0x0ea5e9); billboard(B, SG, 8, 0, -7, -0.4, 'HOT COCOA THIS WAY >>', 0x92400e);
      SG.add('SKATE AT YOUR OWN RISK', 0x0369a1, 6, mat4(-35, 1.4, -17.6, 0, Math.PI, 0));
      scatter(60, 96, 0.6, (x, y, z, k) => D.mesh(GEO.sphere(0.3 + R() * 0.5, 10, 6), M(0xffffff, { r: 0.8 }), x, y - 0.05, z, 0, 0, 0, 1.6, 0.45, 1.2), (x, z) => W.terrain(x, z) < 6);
      scatter(28, 96, 1.2, (x, y, z, k) => bush(B, x, y, z, 0.7, 0x2f7d4a, 0xffffff), (x, z) => W.terrain(x, z) < 6);
      scatter(10, 90, 1.5, (x, y, z, k) => stump(B, x, y, z), (x, z) => W.terrain(x, z) < 6);
      [[-22, -8, 0.3], [36, 6, 1.2], [-4, 24, 0], [22, 24, 2]].forEach((p) => logPile(B, p[0], 0, p[1], p[2]));
      // sleds + string lights on cabins
      [[46, 40], [42, 44], [50, 38]].forEach((p, k) => { const y = W.terrain(p[0], p[1]); B.mesh(GEO.rbox(0.8, 0.12, 1.6, 0.05), M([0xef4444, 0x3b82f6, 0x22c55e][k], { r: 0.4, cc: 0.6 }), p[0], y + 0.25, p[1], 0, k); });
      for (const b of W.buildings) if (b.name === 'Snow Cabin') { mailbox(B, b.doorOut.x + 2.4, 0, b.doorOut.z, b.ry); for (let k = 0; k < 8; k++) { const u = -b.lw / 2 + 0.5 + k * (b.lw - 1) / 7, c = Math.cos(b.ry), s = Math.sin(b.ry); D.mesh(GEO.sphere(0.09, 8, 6), M([0xef4444, 0x22c55e, 0xfacc15, 0x3b82f6][k % 4], { e: [0xef4444, 0x22c55e, 0xfacc15, 0x3b82f6][k % 4], ei: 1.5 }), b.x + u * c + (b.ld / 2 + 0.2) * s, b.baseY + 3.6, b.z - u * s + (b.ld / 2 + 0.2) * c); } }
      [[12, 6, 0.4], [-20, 24, -0.3]].forEach((p) => picnic(B, p[0], 0, p[1], p[2]));
    }
  },
  dinov: {
    roadAt: (x, z) => (Math.abs(z) < 4.5 && Math.abs(x) < 60) || (Math.abs(x) < 4.5 && z > -60 && z < 50) || Math.hypot(x - 44, z + 44) < 11,
    deco({ W, B, D, SG, R, free, scatter, welcome }) {
      SG.add('DINO VALLEY', 0x166534, 9, new THREE.Matrix4().makeTranslation(0, 10.4, 56.2).multiply(new THREE.Matrix4().makeRotationY(Math.PI)), '#facc15');
      welcome(10, 8, 0, 'PLEASE DO NOT FEED THE T-REX', 0xb45309); billboard(B, SG, -9, 0, -6, 0.5, 'MUSEUM <<   >> HATCHERY', 0x166534);
      scatter(140, 104, 0.6, (x, y, z, k) => k % 2 ? fern(D, x, y, z, 0.8 + R() * 0.8, [0x3fa34d, 0x2f7d4a, 0x4caf50][k % 3]) : tuft(D, x, y, z, 0x4caf50, 1.2), (x, z) => W.terrain(x, z) < 6);
      scatter(30, 100, 1.4, (x, y, z, k) => bush(B, x, y, z, 1.0, [0x2f7d4a, 0x3fa34d][k % 2], k % 3 ? 0 : [0xf472b6, 0xfacc15, 0xf97316][k % 3]), (x, z) => W.terrain(x, z) < 6);
      scatter(30, 100, 0.6, (x, y, z, k) => mushroom(D, x, y, z, 0.8 + R() * 0.8), (x, z) => W.terrain(x, z) < 6);
      scatter(16, 100, 1.4, (x, y, z, k) => addRock(B, x, y, z, 0.6 + R() * 0.8, k, [0xa16207, 0x92400e, 0x78716c][k % 3]), (x, z) => W.terrain(x, z) < 6);
      scatter(10, 90, 1.5, (x, y, z, k) => { const c = M(0xf59e0b, { r: 0.1, e: 0xb45309, ei: 0.5, cc: 1, op: 0.85 }); D.mesh(GEO.rock(k, 1), c, x, y + 0.25, z, 0, k, 0, 0.3); }, (x, z) => W.terrain(x, z) < 6);
      [[-36, 4], [36, -4], [-8, -48], [8, 30]].forEach((p, k) => { for (let j = 0; j < 3; j++) crate(B, p[0] + j * 1.1, 0, p[1] + 1.4, 0.9, j + k); sandbag(B, p[0], 0, p[1] - 1.4, 0); });
      [[24, 26, 0.4], [-24, 24, -0.3]].forEach((p) => picnic(B, p[0], 0, p[1], p[2]));
    }
  }
};

// the four survival maps
import * as THREE from 'three';
import { Batch, GEO, mat4, addTree, addRock, addCar, addLamp, addBench, mesh } from './models.js';
import { M, glow } from './mats.js';
import { newWorld, addWall, addPlat } from './world.js';
import { makeBuilding } from './build.js';

export const MAPS = [
  { id: 'area51', name: 'Area 51', emoji: '👽', desc: 'Secret desert base with hangars, a control tower and a NUCLEAR BUNKER deep underground.', mood: 'desert' },
  { id: 'city', name: 'Grok City', emoji: '🏙️', desc: 'Skyscrapers with rooftop elevators, shops, a park and a subway station to hide in.', mood: 'sunny' },
  { id: 'beach', name: 'Sunny Beach', emoji: '🏖️', desc: 'Beach houses, a hotel, a pier and a lighthouse hill. Watch the ocean...', mood: 'sunny' },
  { id: 'pine', name: 'Pine Peak', emoji: '🌲', desc: 'Cozy mountain town with log cabins, a ranger tower, a mine tunnel and Mt. Grumble.', mood: 'sunny' }
];
const ss = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

function groundMesh(W, scene, colorAt, size = 300, seg = 150) {
  const g = new THREE.PlaneGeometry(size, size, seg, seg); g.rotateX(-Math.PI / 2);
  const p = g.attributes.position, col = new Float32Array(p.count * 3), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), h = W.terrain(x, z); p.setY(i, h); c.setHex(colorAt(x, z, h)); col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92 })); m.receiveShadow = true; scene.add(m); return m;
}
function road(B, x0, z0, x1, z1, w = 8, y = 0.03) {
  const len = Math.hypot(x1 - x0, z1 - z0), ry = Math.atan2(x1 - x0, z1 - z0), cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  B.add(GEO.box(w, 0.06, len), M(0x4a5260, { r: 0.85 }), mat4(cx, y, cz, 0, ry, 0));
  const n = Math.floor(len / 4);
  for (let i = 0; i < n; i++) { const t = (i + 0.5) / n - 0.5; B.add(GEO.box(0.22, 0.02, 1.8), M(0xffd23f, { r: 0.6 }), mat4(cx + Math.sin(ry) * t * len, y + 0.04, cz + Math.cos(ry) * t * len, 0, ry, 0)); }
}
function sidewalk(B, x, z, w, d, y = 0.06) { B.add(GEO.rbox(w, 0.18, d, 0.06), M(0xf3e6cf, { r: 0.85 }), mat4(x, y, z)); }
// lookout tower with a walkable ramp (high ground)
function lookout(W, B, x, z, h, ry = 0, label = 'Lookout Tower', col = 0xe76f51) {
  const base = W.terrain(x, z), c = Math.cos(ry), s = Math.sin(ry), wood = M(col, { r: 0.6 }), dk = M(0x6b4a2f, { r: 0.8 });
  const L = h * 1.7 + 1;
  const T = (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c];
  B.add(GEO.rbox(4.4, 0.35, 4.4, 0.08), wood, mat4(x, base + h, z, 0, ry, 0));
  [[-1.9, -1.9], [1.9, -1.9], [-1.9, 1.9], [1.9, 1.9]].forEach((q) => { const p = T(q[0], q[1]); B.mesh(GEO.cyl(0.16, 0.2, h, 10), dk, p[0], base + h / 2, p[1]); });
  [[0, -2.1, 4.4, 0.1], [-2.1, 0, 0.1, 4.4], [2.1, 0, 0.1, 4.4]].forEach((q) => { const p = T(q[0], q[1]); B.add(GEO.rbox(q[2] + 0.05, 0.9, q[3] + 0.05, 0.04), wood, mat4(p[0], base + h + 0.6, p[1], 0, ry, 0)); });
  const rp = T(0, 2.2 + L / 2), ang = Math.atan2(h, L);
  B.add(GEO.rbox(2.0, 0.25, Math.hypot(L, h), 0.06), wood, mat4(rp[0], base + h / 2, rp[1], ang * 1, ry, 0));
  for (let i = 1; i < 6; i++) { const p = T(0, 2.2 + L * i / 6); B.add(GEO.box(2.0, 0.06, 0.18), dk, mat4(p[0], base + h - h * i / 6 + 0.16, p[1], 0, ry, 0)); }
  // roof
  B.add(GEO.cone(3.6, 1.8, 4), M(0xffffff, { r: 0.5 }), mat4(x, base + h + 3.4, z, 0, ry + Math.PI / 4, 0));
  [[-1.9, -1.9], [1.9, -1.9], [-1.9, 1.9], [1.9, 1.9]].forEach((q) => { const p = T(q[0], q[1]); B.mesh(GEO.cyl(0.08, 0.08, 2.5, 8), dk, p[0], base + h + 1.4, p[1]); });
  const a = T(-2.2, -2.2), b2 = T(2.2, 2.2); addPlat(W, Math.min(a[0], b2[0]), Math.min(a[1], b2[1]), Math.max(a[0], b2[0]), Math.max(a[1], b2[1]), base + h + 0.17);
  const r0 = T(-1, 2.2), r1 = T(1, 2.2 + L), ax = Math.abs(s) > 0.5 ? 'x' : 'z';
  const a0 = ax === 'z' ? T(0, 2.2)[1] : T(0, 2.2)[0], a1 = ax === 'z' ? T(0, 2.2 + L)[1] : T(0, 2.2 + L)[0];
  addPlat(W, r0[0], r0[1], r1[0], r1[1], 0, null, { axis: ax, a0, a1, h0: base + h + 0.17, h1: base });
  W.high.push({ x, y: base + h + 0.2, z, label, foot: { x: T(0, 2.4 + L)[0], z: T(0, 2.4 + L)[1] } });
}
function fence(B, W, x0, z0, x1, z1, col = 0xffffff, solid) {
  const len = Math.hypot(x1 - x0, z1 - z0), n = Math.ceil(len / 2.5), m = M(col, { r: 0.5 }), ry = Math.atan2(x1 - x0, z1 - z0);
  for (let i = 0; i <= n; i++) { const t = i / n; B.mesh(GEO.cyl(0.08, 0.08, 1.6, 8), M(0x9ca3af, { m: 0.7, r: 0.3 }), x0 + (x1 - x0) * t, 0.8, z0 + (z1 - z0) * t); }
  B.add(GEO.box(0.06, 0.07, len), m, mat4((x0 + x1) / 2, 1.5, (z0 + z1) / 2, 0, ry, 0)); B.add(GEO.box(0.06, 0.07, len), m, mat4((x0 + x1) / 2, 0.8, (z0 + z1) / 2, 0, ry, 0));
  if (solid) addWall(W, x0 - 0.1, z0 - 0.1, x1 + 0.1, z1 + 0.1, -1, 1.7);
}
function waterTower(B, x, z, y = 0) { const leg = M(0xc1121f, { r: 0.5, m: 0.3 }); [[-1.5, -1.5], [1.5, -1.5], [-1.5, 1.5], [1.5, 1.5]].forEach((q) => B.mesh(GEO.cyl(0.15, 0.2, 9, 10), leg, x + q[0], y + 4.5, z + q[1])); B.mesh(GEO.cap(2.6, 2.2, 24), M(0xf8f9fa, { r: 0.35, m: 0.5 }), x, y + 11.5, z); B.mesh(GEO.cone(2.7, 1.4, 24), M(0xc1121f, { r: 0.4 }), x, y + 14.3, z); }
function radar(B, x, z) { B.mesh(GEO.cyl(0.4, 0.6, 5, 16), M(0xadb5bd, { m: 0.8, r: 0.3 }), x, 2.5, z); B.add(new THREE.SphereGeometry(4, 32, 12, 0, 6.283, 0, 0.9), M(0xf1f5f9, { m: 0.6, r: 0.25, side: THREE.DoubleSide }), mat4(x, 6.5, z, -2.3, 0.6, 0)); B.mesh(GEO.sphere(0.4, 12, 8), M(0xef4444, { e: 0xef4444, ei: 1.5 }), x, 7.5, z); }
function fountain(B, x, z) { B.mesh(GEO.cyl(3.4, 3.6, 0.7, 40), M(0xe9ecef, { r: 0.5 }), x, 0.35, z); B.mesh(GEO.cyl(3.0, 3.0, 0.1, 40), M(0x4cc9f0, { r: 0.05, cc: 1, e: 0x0077b6, ei: 0.25 }), x, 0.66, z); B.mesh(GEO.cyl(0.4, 0.6, 1.8, 20), M(0xe9ecef, { r: 0.5 }), x, 1.2, z); B.mesh(GEO.sphere(0.9, 20, 12), M(0x90e0ef, { r: 0.05, op: 0.6, cc: 1 }), x, 2.3, z); }
function trafficLight(B, x, z, ry) { const p = M(0x2b2d42, { r: 0.4, m: 0.6 }); B.mesh(GEO.cyl(0.08, 0.1, 3.6, 8), p, x, 1.8, z); B.add(GEO.rbox(0.4, 1.1, 0.35, 0.08), p, mat4(x, 3.8, z, 0, ry, 0)); [0xef4444, 0xfacc15, 0x22c55e].forEach((c, i) => B.mesh(GEO.sphere(0.11, 12, 8), M(c, { e: c, ei: i === 2 ? 2 : 0.3 }), x + Math.sin(ry) * 0.18, 4.15 - i * 0.33, z + Math.cos(ry) * 0.18)); }
function umbrella(B, x, z, col, y = 0) { B.mesh(GEO.cyl(0.05, 0.05, 2.4, 8), M(0xffffff), x, y + 1.2, z); B.add(new THREE.SphereGeometry(1.5, 16, 6, 0, 6.283, 0, Math.PI * 0.3), M(col, { r: 0.5, side: THREE.DoubleSide }), mat4(x, y + 1.95, z)); }
function cloud(B, x, y, z, s) { const m = M(0xffffff, { r: 1, e: 0xffffff, ei: 0.35 }); [[0, 0, 0, 1.4], [1.4, -0.2, 0.2, 1.0], [-1.4, -0.2, -0.1, 1.05], [0.6, 0.6, -0.2, 0.95], [-0.5, 0.5, 0.3, 0.9]].forEach((p) => B.mesh(GEO.sphere(1, 18, 12), m, x + p[0] * s, y + p[1] * s, z + p[2] * s, 0, 0, 0, p[3] * s, p[3] * s * 0.8, p[3] * s)); }
function spreadCoins(W, R, n, ok) { let tries = 0; while (W.coinSpots.length < n && tries++ < 4000) { const x = (R() - 0.5) * W.half * 1.8, z = (R() - 0.5) * W.half * 1.8; if (ok && !ok(x, z)) continue; if (W.walls.some((w) => x > w.x0 - 1 && x < w.x1 + 1 && z > w.z0 - 1 && z < w.z1 + 1)) continue; W.coinSpots.push({ x, z }); } }

export function buildMap(id, scene) {
  const W = newWorld(); W.id = id; W.meta = MAPS.find((m) => m.id === id);
  const B = new Batch(), R = rng(id.length * 977 + id.charCodeAt(0));
  const root = new THREE.Group(); scene.add(root); W.root = root;
  if (id === 'area51') {
    W.half = 75;
    W.terrain = (x, z) => { const r = Math.max(Math.abs(x), Math.abs(z)); let h = r > 60 ? Math.pow(r - 60, 1.35) * 0.6 : 0; h += ss(48, 70, r) * (Math.sin(x * 0.11) * Math.cos(z * 0.09) * 1.2 + 0.4); return h; };
    groundMesh(W, root, (x, z, h) => h > 6 ? 0xd9814e : h > 1 ? 0xeab676 : 0xf2cf92);
    // runway + roads
    B.add(GEO.box(150, 0.06, 12), M(0x5c6370, { r: 0.85 }), mat4(0, 0.03, 52)); for (let i = -7; i <= 7; i++) B.add(GEO.box(5, 0.02, 0.5), M(0xffffff), mat4(i * 10, 0.07, 52));
    road(B, 0, -50, 0, 46, 7); road(B, -50, 0, 50, 0, 7);
    B.add(GEO.cyl(9, 9, 0.08, 48), M(0x6b7280, { r: 0.8 }), mat4(14, 0.04, -12)); B.add(GEO.torus(7.5, 0.25, 6.283, 6, 48), M(0xfacc15, { e: 0xfacc15, ei: 0.2 }), mat4(14, 0.1, -12, Math.PI / 2, 0, 0));
    makeBuilding(W, root, { x: 0, z: -32, w: 12, d: 9, h: 3.6, door: 's', wall: 0xa3b1c2, trim: 0xfacc15, roof: 0x64748b, roofType: 'flat', sturdy: true, interior: 'bunkerTop', basement: 'bunker', name: 'Nuclear Bunker', sign: 0xfacc15, windows: false, wideDoor: 3.2, awning: 0xfacc15 });
    makeBuilding(W, root, { x: -32, z: -12, w: 15, d: 16, h: 7.5, ceil: 7.5, door: 'e', wall: 0xdfe6ed, trim: 0x3a86ff, roof: 0xb8c4d0, roofType: 'arch', sturdy: true, interior: 'hangar', name: 'Hangar 1', wideDoor: 6, windows: false });
    makeBuilding(W, root, { x: -32, z: 18, w: 15, d: 16, h: 7.5, ceil: 7.5, door: 'e', wall: 0xdfe6ed, trim: 0xff006e, roof: 0xb8c4d0, roofType: 'arch', sturdy: true, interior: 'hangar', name: 'Hangar 2', wideDoor: 6, windows: false });
    makeBuilding(W, root, { x: 30, z: -26, w: 7, d: 7, h: 15, door: 'w', wall: 0xf1f5f9, trim: 0x3a86ff, roof: 0x3a86ff, roofType: 'flat', sturdy: true, elevator: true, interior: 'office', name: 'Control Tower', windows: true });
    makeBuilding(W, root, { x: 28, z: 10, w: 12, d: 7, h: 3.6, door: 'w', wall: 0x8fbc8f, trim: 0xffffff, roof: 0x2d6a4f, roofType: 'gable', interior: 'home', basement: true, name: 'Barracks A' });
    makeBuilding(W, root, { x: 28, z: 26, w: 12, d: 7, h: 3.6, door: 'w', wall: 0x8fbc8f, trim: 0xffffff, roof: 0x2d6a4f, roofType: 'gable', interior: 'home', name: 'Barracks B' });
    makeBuilding(W, root, { x: 9, z: 18, w: 10, d: 8, h: 3.8, door: 'w', wall: 0xffb703, trim: 0xffffff, roof: 0xfb8500, roofType: 'flat', interior: 'diner', name: 'Mess Hall', sign: 0xfb8500 });
    makeBuilding(W, root, { x: -10, z: 36, w: 10, d: 9, h: 5, ceil: 5, door: 'e', wall: 0xe63946, trim: 0xffffff, roof: 0x9d0208, roofType: 'flat', interior: 'station', wideDoor: 3.6, name: 'Fire Station', sturdy: true });
    lookout(W, B, -14, -48, 6, 0, 'Guard Tower'); lookout(W, B, 10, 34, 6, -Math.PI / 2, 'Watch Tower', 0x3a86ff);
    waterTower(B, -50, -38); radar(B, 46, -44); radar(B, 50, 34);
    fence(B, W, -56, -56, 56, -56, 0xe5e7eb); fence(B, W, -56, -56, -56, 40, 0xe5e7eb); fence(B, W, 56, -56, 56, 40, 0xe5e7eb);
    for (let i = 0; i < 26; i++) { const x = (R() - 0.5) * 140, z = (R() - 0.5) * 140; if (Math.abs(x) < 52 && Math.abs(z) < 60) continue; addTree(B, x, W.terrain(x, z), z, 0.8 + R() * 0.6, 'cactus'); }
    for (let i = 0; i < 30; i++) { const x = (R() - 0.5) * 150, z = (R() - 0.5) * 150; if (Math.abs(x) < 50 && Math.abs(z) < 58) continue; addRock(B, x, W.terrain(x, z), z, 1 + R() * 2.5, i, [0xd9814e, 0xc8693c, 0xe0a96d][i % 3]); }
    [[8, -4, 0.2, 0x6b8e23], [-12, 6, 1.6, 0x556b2f], [12, 30, -1.2, 0xf1f5f9], [-20, -36, 0.4, 0x6b8e23]].forEach((c) => addCar(B, c[0], 0, c[1], c[2], c[3]));
    // crashed saucer on the pad (scenery)
    B.add(GEO.sphere(5, 40, 16), M(0xc7d0dc, { m: 0.9, r: 0.18 }), mat4(14, 1.2, -12, 0.25, 0, 0.1, 1, 0.25, 1)); B.add(new THREE.SphereGeometry(2.2, 32, 12, 0, 6.283, 0, Math.PI / 2), M(0x9be7ff, { r: 0.05, op: 0.4, cc: 1 }), mat4(14, 2.0, -12, 0.25, 0, 0.1));
    for (let i = 0; i < 8; i++) B.mesh(GEO.sphere(0.3, 10, 8), M(i % 2 ? 0xff4fd8 : 0x3ff0ff, { e: i % 2 ? 0xff4fd8 : 0x3ff0ff, ei: 2 }), 14 + Math.cos(i / 8 * 6.283) * 4.5, 1.2 + Math.sin(i / 8 * 6.283) * 1.1, -12 + Math.sin(i / 8 * 6.283) * 4.5);
    W.volcano = { x: 55, z: 55 }; W.spawns = [[4, 4], [-4, 4], [4, -4], [-4, -4]];
    for (let i = 0; i < 8; i++) cloud(B, (R() - 0.5) * 300, 45 + R() * 20, (R() - 0.5) * 300, 4 + R() * 3);
  } else if (id === 'city') {
    W.half = 75;
    W.terrain = (x, z) => { const r = Math.max(Math.abs(x), Math.abs(z)); return r > 70 ? (r - 70) * 0.8 : 0; };
    groundMesh(W, root, (x, z, h) => (Math.abs(x - 15) < 12 && Math.abs(z - 15) < 12) || (Math.abs(x + 45) < 12 && Math.abs(z - 45) < 12) ? 0x7fd35b : 0x8fd46c);
    for (const v of [-30, 0, 30]) { road(B, v, -75, v, 75, 8); road(B, -75, v, 75, v, 8, 0.035); }
    for (const bx of [-45, -15, 15, 45]) for (const bz of [-45, -15, 15, 45]) sidewalk(B, bx, bz, 22, 22, 0.02);
    const pal = [0xff595e, 0xffca3a, 0x8ac926, 0x1982c4, 0x6a4c93, 0xff924c, 0x4cc9f0, 0xf72585];
    let k = 0;
    const tower = (x, z, h, door, col) => makeBuilding(W, root, { x, z, w: 9, d: 9, h, door, wall: col, trim: 0xffffff, roof: 0x334155, roofType: 'flat', sturdy: true, elevator: true, interior: 'office', name: 'Sky Tower ' + (++k) });
    const shop = (x, z, w, d, door, col, name, interior = 'shop', basement) => makeBuilding(W, root, { x, z, w, d, h: 4.2, door, wall: col, trim: 0xffffff, roof: 0x475569, roofType: 'flat', interior, name, sign: pal[(k++) % 8], basement });
    tower(-50, -50, 26, 'e', 0x4cc9f0); tower(-40, -40, 18, 's', 0xf72585);
    shop(-50, -36, 8, 8, 'e', 0xffca3a, 'Toy Store'); shop(-38, -52, 8, 7, 's', 0x8ac926, 'Grocery', 'shop', true);
    tower(-20, -50, 30, 's', 0x3a86ff); makeBuilding(W, root, { x: -10, z: -42, w: 9, d: 8, h: 10, door: 'w', wall: 0xffadad, trim: 0xffffff, roof: 0x9d4edd, roofType: 'flat', elevator: true, basement: true, interior: 'home', name: 'Apartments' });
    shop(-20, -38, 8, 7, 'e', 0xff924c, 'Pizza Place', 'diner');
    tower(20, -48, 22, 's', 0x8338ec); shop(10, -48, 8, 8, 's', 0x06d6a0, 'Pet Shop'); makeBuilding(W, root, { x: 15, z: -36, w: 10, d: 7, h: 4.6, door: 's', wall: 0xffd166, trim: 0x073b4c, roof: 0x073b4c, roofType: 'flat', interior: 'shop', basement: 'subway', name: 'Subway Station', sign: 0x118ab2 });
    tower(50, -48, 24, 'w', 0xff006e); shop(40, -40, 8, 8, 'w', 0x4cc9f0, 'Ice Cream', 'diner'); tower(50, -36, 14, 'w', 0xfb5607);
    makeBuilding(W, root, { x: -45, z: -12, w: 12, d: 10, h: 5.2, ceil: 5.2, door: 'e', wall: 0xe63946, trim: 0xffffff, roof: 0x9d0208, roofType: 'flat', interior: 'station', wideDoor: 3.6, sturdy: true, name: 'Fire Station' });
    shop(-45, -22, 9, 6, 'n', 0xffca3a, 'Comic Shop'); tower(-15, -15, 20, 'e', 0x06d6a0); shop(-20, -22, 7, 6, 'n', 0xf15bb5, 'Candy Shop', 'shop', true); shop(-10, -22, 7, 6, 'n', 0x00bbf9, 'Game Store');
    tower(15, -15, 28, 'w', 0xffbe0b); makeBuilding(W, root, { x: 22, z: -22, w: 9, d: 7, h: 9, door: 'n', wall: 0xb5e48c, trim: 0xffffff, roof: 0x1a759f, roofType: 'flat', elevator: true, basement: true, interior: 'home', name: 'Apartments 2' });
    tower(45, -15, 18, 'w', 0x9b5de5); shop(45, -24, 9, 6, 'n', 0xfee440, 'Burger Barn', 'diner');
    // park (open space)
    fountain(B, 15, 15); for (let i = 0; i < 9; i++) { const a = i / 9 * 6.283; addTree(B, 15 + Math.cos(a) * 8.5, 0, 15 + Math.sin(a) * 8.5, 0.8 + R() * 0.3, 'round', i); }
    [[15, 7.5, 0], [15, 22.5, Math.PI], [7.5, 15, Math.PI / 2], [22.5, 15, -Math.PI / 2]].forEach((b) => addBench(B, b[0], 0, b[1], b[2]));
    tower(-15, 15, 22, 'e', 0xf72585); shop(-22, 22, 8, 7, 'e', 0x8ac926, 'Book Nook', 'shop', true); shop(-22, 8, 8, 7, 'e', 0xffca3a, 'Bakery', 'diner');
    tower(45, 15, 26, 'w', 0x4361ee); makeBuilding(W, root, { x: 38, z: 22, w: 8, d: 8, h: 10, door: 'w', wall: 0xffc8dd, trim: 0xffffff, roof: 0xcdb4db, roofType: 'flat', elevator: true, basement: true, interior: 'home', name: 'Apartments 3' }); shop(38, 8, 8, 7, 'w', 0x80ed99, 'Arcade', 'shop');
    tower(-45, 15, 16, 'e', 0x48cae4); shop(-45, 24, 10, 6, 'e', 0xff7b00, 'Hardware', 'shop', true);
    for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283; addTree(B, -45 + Math.cos(a) * 7, 0, 45 + Math.sin(a) * 7, 0.9, 'round', i); }
    lookout(W, B, -45, 45, 6, Math.PI / 2, 'Park Lookout', 0x06d6a0);
    shop(-15, 45, 9, 8, 'e', 0xf94144, 'Toy Store 2', 'shop', true); tower(-15, 55, 20, 'e', 0x90be6d); tower(15, 45, 24, 'w', 0xf8961e); shop(15, 55, 9, 7, 'n', 0x43aa8b, 'Flower Shop'); tower(45, 45, 30, 'w', 0x577590); shop(45, 55, 9, 7, 'n', 0xf3722c, 'Taco Stand', 'diner', true);
    for (const v of [-30, 0, 30]) for (const u of [-60, -45, -15, 15, 45, 60]) { addLamp(B, v + 4.6, 0, u); addLamp(B, u, 0, v + 4.6); }
    for (const v of [-30, 0, 30]) for (const u of [-30, 0, 30]) trafficLight(B, v + 4.8, u + 4.8, 0);
    for (let i = 0; i < 18; i++) { const v = [-30, 0, 30][i % 3], u = -65 + i * 7.5; if (i % 2) addCar(B, v + 2.2, 0, u, 0, pal[i % 8]); else addCar(B, u, 0, v - 2.2, Math.PI / 2, pal[(i + 3) % 8]); }
    W.volcano = { x: -60, z: 62 }; W.spawns = [[3, 3], [-3, 3], [3, -3], [-3, -3]];
    for (let i = 0; i < 8; i++) cloud(B, (R() - 0.5) * 300, 50 + R() * 20, (R() - 0.5) * 300, 4 + R() * 3);
  } else if (id === 'beach') {
    W.half = 75; W.sea = -1.2;
    W.terrain = (x, z) => { let h = -ss(22, 50, z) * 4; const hd = Math.hypot(x - 52, z + 48); h += Math.max(0, 11 - hd * 0.42) * ss(0, 1, 1); const r = Math.max(Math.abs(x), -z); if (r > 68) h += (r - 68) * 0.7; return h; };
    groundMesh(W, root, (x, z, h) => z > 16 ? (h < -1.4 ? 0xe8c47a : 0xffe2a8) : h > 3 ? 0x7cc96a : 0x8fd46c);
    road(B, -75, 6, 75, 6, 7); road(B, 0, -75, 0, 6, 7);
    // boardwalk
    B.add(GEO.rbox(110, 0.3, 5, 0.06), M(0xc68a52, { r: 0.7 }), mat4(0, 0.15, 14)); addPlat(W, -55, 11.5, 55, 16.5, 0.3);
    const pastel = [0xffadad, 0xffd6a5, 0xfdffb6, 0xcaffbf, 0x9bf6ff, 0xa0c4ff, 0xbdb2ff, 0xffc6ff];
    const rf = [0xef476f, 0x118ab2, 0x06d6a0, 0xffd166, 0x8338ec, 0xff006e];
    let i = 0;
    for (const x of [-52, -36, -20, 20, 36]) { makeBuilding(W, root, { x, z: -6, w: 9, d: 8, h: 3.8, door: 's', wall: pastel[i % 8], roof: rf[i % 6], interior: 'home', basement: i % 2 === 0, name: 'Beach House' }); i++; }
    for (const x of [-52, -36, 20, 36, 52]) { makeBuilding(W, root, { x, z: -24, w: 9, d: 8, h: 3.8, door: 'n', wall: pastel[(i + 3) % 8], roof: rf[i % 6], interior: 'home', basement: i % 2 === 1, name: 'Beach House' }); i++; }
    makeBuilding(W, root, { x: -14, z: -40, w: 12, d: 10, h: 20, door: 'e', wall: 0xff8fab, trim: 0xffffff, roof: 0x334155, roofType: 'flat', elevator: true, sturdy: true, interior: 'office', name: 'Sunset Hotel' });
    makeBuilding(W, root, { x: 12, z: -40, w: 10, d: 8, h: 4.2, door: 'w', wall: 0xff70a6, roof: 0xffd670, roofType: 'flat', interior: 'diner', name: 'Ice Cream Parlor', sign: 0xff70a6, basement: true });
    makeBuilding(W, root, { x: 52, z: -6, w: 9, d: 8, h: 4.2, door: 's', wall: 0x70d6ff, roof: 0xff9770, roofType: 'flat', interior: 'shop', name: 'Surf Shop', sign: 0xff9770 });
    makeBuilding(W, root, { x: 52, z: -48, baseY: W.terrain(52, -48), w: 6, d: 6, h: 16, door: 'w', wall: 0xffffff, trim: 0xef233c, roof: 0xef233c, roofType: 'flat', elevator: true, sturdy: true, interior: 'office', name: 'Lighthouse', style: 'tower' });
    W.high.push({ x: 46, y: W.terrain(46, -44), z: -44, label: 'Lighthouse Hill' });
    // pier
    B.add(GEO.rbox(6, 0.35, 40, 0.06), M(0xb5835a, { r: 0.75 }), mat4(-30, 0.6, 42)); addPlat(W, -33, 22, -27, 62, 0.78);
    for (let z = 24; z < 62; z += 5) [-32.6, -27.4].forEach((x) => B.mesh(GEO.cyl(0.25, 0.25, 4, 10), M(0x8b5e34, { r: 0.85 }), x, -1.4, z));
    lookout(W, B, 8, 30, 5.5, Math.PI, 'Lifeguard Tower', 0xef233c); lookout(W, B, 40, 30, 5.5, Math.PI, 'Lifeguard Tower 2', 0xffb703);
    for (let j = 0; j < 12; j++) umbrella(B, -60 + j * 10 + R() * 3, 22 + R() * 6, rf[j % 6], W.terrain(-60 + j * 10, 24));
    for (let j = 0; j < 22; j++) { const x = -70 + j * 6.6 + R() * 2, z = 9 + R() * 2; addTree(B, x, 0, j % 2 ? z : z - 22 - R() * 4, 0.9 + R() * 0.4, 'palm', j); }
    for (let j = 0; j < 6; j++) B.mesh(GEO.sphere(0.4, 20, 14), M([0xff595e, 0xffca3a, 0x1982c4][j % 3], { r: 0.3, cc: 0.8 }), -50 + j * 18, W.terrain(-50 + j * 18, 28) + 0.4, 28);
    [[-8, 3, Math.PI / 2, 0xff595e], [24, 9, Math.PI / 2, 0x4cc9f0], [-3, -15, 0, 0xffca3a]].forEach((c) => addCar(B, c[0], 0, c[1], c[2], c[3]));
    W.volcano = { x: -60, z: 60 }; W.spawns = [[3, 0], [-3, 0], [3, -3], [-3, -3]];
    for (let j = 0; j < 8; j++) cloud(B, (R() - 0.5) * 300, 45 + R() * 20, (R() - 0.5) * 300, 4 + R() * 3);
    // sailboat
    B.add(GEO.rbox(2.2, 1, 6, 0.4), M(0xffffff, { r: 0.3, cc: 1 }), mat4(30, -1.0, 58)); B.mesh(GEO.cyl(0.08, 0.08, 7, 8), M(0x8b5e34), 30, 2.5, 58); B.add(GEO.cone(2.2, 5.5, 3), M(0xff006e, { side: THREE.DoubleSide }), mat4(30.3, 3.3, 58.5, 0, 0, 0, 0.1, 1, 1));
  } else if (id === 'pine') {
    W.half = 75;
    const mtn = (x, z) => { const d = Math.hypot(x - 64, z + 66); return Math.max(0, 34 - d * 0.75); };
    W.terrain = (x, z) => { const r = Math.max(Math.abs(x) / 50, Math.abs(z) / 44); let h = r > 1 ? Math.pow((r - 1) * 30, 1.25) * 0.45 + Math.sin(x * 0.15) * Math.cos(z * 0.13) * 1.5 * ss(1, 1.3, r) : 0; const lk = Math.hypot(x + 38, z - 32); h -= ss(10, 4, lk) * 2.2; h += Math.max(0, 9 - Math.hypot(x - 30, z + 32) * 0.6); return Math.max(h, mtn(x, z)) + 0; };
    groundMesh(W, root, (x, z, h) => h > 14 ? 0xf8fafc : h > 7 ? 0x9ca3af : h < -0.8 ? 0xd6c28a : 0x6fcf63);
    // lake water
    const lake = new THREE.Mesh(new THREE.CircleGeometry(10, 48), M(0x38bdf8, { r: 0.05, cc: 1, op: 0.85, e: 0x0369a1, ei: 0.2 })); lake.rotation.x = -Math.PI / 2; lake.position.set(-38, -0.6, 32); root.add(lake);
    road(B, -50, 0, 50, 0, 6); road(B, 0, -44, 0, 44, 6);
    const logs = [0xb5651d, 0xc97c3a, 0xa0522d, 0xd4884a], rf = [0x2d6a4f, 0xc1121f, 0x1d3557, 0x6a994e];
    let i = 0;
    for (const [x, z, door] of [[-14, -14, 's'], [-30, -14, 's'], [14, -14, 's'], [-14, 14, 'n'], [14, 14, 'n'], [30, 14, 'n'], [-30, 14, 'n']]) { makeBuilding(W, root, { x, z, w: 9, d: 8, h: 3.8, door, wall: logs[i % 4], trim: 0xfff1d6, roof: rf[i % 4], interior: 'cabin', basement: i % 2 === 0, name: 'Log Cabin', inner: 0xf5deb3, floor: 0xb07a45 }); i++; }
    makeBuilding(W, root, { x: 30, z: -12, w: 10, d: 8, h: 4.2, door: 's', wall: 0xffd166, roof: 0xef476f, roofType: 'gable', interior: 'shop', name: 'General Store', sign: 0xef476f, basement: true });
    makeBuilding(W, root, { x: -10, z: 32, w: 14, d: 10, h: 7, ceil: 3.8, door: 'e', wall: 0x8d5524, trim: 0xffffff, roof: 0x9d0208, roofType: 'gable', interior: 'diner', name: 'Ski Lodge', inner: 0xf5deb3, floor: 0xb07a45 });
    makeBuilding(W, root, { x: 20, z: 34, w: 7, d: 7, h: 12, door: 'w', wall: 0x2d6a4f, trim: 0xffd166, roof: 0xffd166, roofType: 'flat', interior: 'office', elevator: true, sturdy: true, name: 'Ranger Tower' });
    makeBuilding(W, root, { x: -44, z: -30, w: 7, d: 6, h: 3.6, door: 'e', wall: 0x7f5539, trim: 0x3d2817, roof: 0x5c4033, roofType: 'flat', interior: 'shop', basement: 'mine', name: 'Mine Entrance', sign: 0xffb703, sturdy: true });
    W.high.push({ x: 30, y: W.terrain(30, -32), z: -32, label: 'Pine Hill' }); W.high.push({ x: 36, y: W.terrain(36, -36), z: -36, label: 'Pine Hill' });
    lookout(W, B, -36, 0, 6, Math.PI / 2, 'Fire Lookout', 0xbc6c25);
    for (let j = 0; j < 120; j++) { const x = (R() - 0.5) * 160, z = (R() - 0.5) * 160; const h = W.terrain(x, z); if ((Math.abs(x) < 40 && Math.abs(z) < 38) || h > 13 || Math.hypot(x + 38, z - 32) < 11) continue; addTree(B, x, h - 0.2, z, 0.9 + R() * 0.9, 'pine', j); }
    for (let j = 0; j < 14; j++) { const x = (R() - 0.5) * 70, z = (R() - 0.5) * 70; if (Math.abs(x) < 4 || Math.abs(z) < 4 || W.walls.some((w) => x > w.x0 - 3 && x < w.x1 + 3 && z > w.z0 - 3 && z < w.z1 + 3)) continue; addTree(B, x, W.terrain(x, z), z, 0.8, 'pine', j); }
    for (let j = 0; j < 18; j++) { const x = (R() - 0.5) * 150, z = (R() - 0.5) * 150; if (Math.abs(x) < 45 && Math.abs(z) < 40) continue; addRock(B, x, W.terrain(x, z), z, 1 + R() * 2, j, 0x9ca3af); }
    // campfire (warm spot)
    B.mesh(GEO.cyl(1.2, 1.3, 0.3, 16), M(0x6b7280, { r: 0.9 }), 6, 0.15, 6); for (let j = 0; j < 4; j++) B.add(GEO.cyl(0.12, 0.12, 1.4, 8), M(0x6b4423), mat4(6, 0.35, 6, Math.PI / 2, j * 0.8, 0)); B.mesh(GEO.cone(0.5, 1.1, 12), M(0xff7b00, { e: 0xff5400, ei: 2.5 }), 6, 0.9, 6);
    W.fires.push({ x: 6, y: 0, z: 6, r: 3.5 });
    [[4, -24, 0, 0xc1121f], [-24, 4, Math.PI / 2, 0x1d3557]].forEach((c) => addCar(B, c[0], 0, c[1], c[2], c[3]));
    // Mt. Grumble crater
    B.mesh(GEO.cyl(6, 8, 2, 32), M(0x5b4636, { r: 0.9 }), 64, mtn(64, -66) - 0.5, -66); B.mesh(GEO.cyl(5, 5, 0.3, 32), M(0xff6b00, { e: 0xff4d00, ei: 2.2 }), 64, mtn(64, -66) + 0.4, -66);
    W.volcano = { x: 64, z: -66, y: mtn(64, -66), real: true }; W.spawns = [[3, 3], [-3, 3], [3, -3], [-3, -3]];
    for (let j = 0; j < 9; j++) cloud(B, (R() - 0.5) * 300, 48 + R() * 20, (R() - 0.5) * 300, 4 + R() * 3);
  }
  B.build(root);
  spreadCoins(W, R, 46, (x, z) => W.terrain(x, z) > -1 && W.terrain(x, z) < 8);
  // a few coins inside buildings and down in basements (explore!)
  W.buildings.forEach((b, j) => { if (j % 2 === 0) W.coinSpots.push({ x: b.x, z: b.z, y: b.baseY + 0.2 }); if (b.room) W.coinSpots.push({ x: b.room.spawn.x - 1, z: b.room.spawn.z + 1, y: b.room.spawn.y, under: true }); });
  // invisible boundary
  const h = W.half; addWall(W, -h - 2, -h - 2, h + 2, -h, -100, 100); addWall(W, -h - 2, h, h + 2, h + 2, -100, 100); addWall(W, -h - 2, -h, -h, h, -100, 100); addWall(W, h, -h, h + 2, h, -100, 100);
  return W;
}

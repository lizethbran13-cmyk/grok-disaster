// ambient life: townsfolk NPCs who stroll and run for cover, cars that drive the roads, birds overhead.
// Purely cosmetic and local (not simulated/synced), so it can never affect fairness or co-op.
import * as THREE from 'three';
import { makeSurvivor, animSurvivor, addCar, Batch, GEO } from './models.js';
import { M } from './mats.js';
import { collide } from './world.js';

const A = { npcs: [], cars: [], birds: [], root: null };
const LANES = {
  area51: [{ ax: 'z', c: -1.8, d: 1, a: -48, b: 44 }, { ax: 'x', c: 1.8, d: -1, a: -48, b: 48 }],
  city: [-30, 0, 30].flatMap((v, i) => [{ ax: 'z', c: v - 2.2, d: -1, a: -73, b: 73, o: i * 40 }, { ax: 'x', c: v + 2.2, d: -1, a: -73, b: 73, o: i * 25 + 12 }]),
  beach: [{ ax: 'x', c: 6, d: 1, a: -73, b: 73 }, { ax: 'x', c: 6, d: 1, a: -73, b: 73, o: 70 }, { ax: 'z', c: -1.6, d: -1, a: -72, b: 3 }],
  pine: [{ ax: 'x', c: 1.4, d: 1, a: -48, b: 48 }, { ax: 'z', c: -1.4, d: -1, a: -42, b: 42, o: 30 }]
};
const LOOKS = [[0xff595e, 0x1e3a8a, 'cap'], [0x8ac926, 0x3f3f46, 'beanie'], [0xffca3a, 0x065f46, 'none'], [0x6a4c93, 0x7c2d12, 'party'], [0x4cc9f0, 0x334155, 'cowboy'], [0xf72585, 0x1e3a8a, 'none'], [0xff924c, 0x3f3f46, 'chef'], [0x06d6a0, 0x7c2d12, 'cap']];
const SK = [0xe0a979, 0xf6c9a0, 0x8a5a3b, 0xb97a4f, 0xffd9b8];
const blobM = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.22, depthWrite: false });
export function setupAmbient(W, scene, low) {
  clearAmbient(scene);
  const root = A.root = new THREE.Group(); root.name = 'ambient'; scene.add(root);
  const spots = W.coinSpots.filter((c) => c.y == null && W.terrain(c.x, c.z) > -0.8 && W.terrain(c.x, c.z) < 6);
  const nN = low ? 3 : 6;
  for (let i = 0; i < nN && spots.length; i++) {
    const L = LOOKS[i % LOOKS.length], P = makeSurvivor({ shirt: L[0], pants: L[1], hat: L[2], hatColor: L[0] ^ 0x335577, skin: SK[i % 5], hair: [0x111111, 0x6b3e1e, 0xd4a017][i % 3] });
    P.root.traverse((o) => { if (o.isMesh) o.castShadow = false; });
    const blob = new THREE.Mesh(GEO.disc ? GEO.disc(0.5) : new THREE.CircleGeometry(0.5, 16), blobM); blob.rotation.x = -Math.PI / 2; blob.position.y = 0.04; P.root.add(blob);
    P.root.scale.setScalar(0.92);
    const s = spots[(i * 7) % spots.length];
    const n = { P, x: s.x, y: W.terrain(s.x, s.z), z: s.z, yaw: 0, tx: s.x, tz: s.z, st: 'walk', hid: false, stuck: 0, wait: Math.random() * 3 };
    P.root.position.set(n.x, n.y, n.z); root.add(P.root); A.npcs.push(n);
  }
  const lanes = LANES[W.id] || [];
  const cols = [0xff595e, 0xffca3a, 0x3a86ff, 0x8ac926, 0xf72585, 0x4cc9f0];
  lanes.forEach((l, i) => {
    if (low && i % 2) return;
    const B = new Batch(); addCar(B, 0, 0, 0, 0, W.id === 'area51' ? [0x6b8e23, 0x556b2f][i % 2] : cols[i % cols.length]);
    const g = new THREE.Group(); B.build(g); root.add(g);
    A.cars.push({ g, l, s: l.a + ((l.o || 0) + i * 17) % (l.b - l.a), v: 7 });
  });
  const nb = low ? 3 : 7, bc = W.id === 'beach' ? 0xffffff : W.id === 'pine' ? 0x1d3557 : W.id === 'area51' ? 0x6b4a2f : 0x64748b;
  for (let i = 0; i < nb; i++) {
    const B = new Batch(), m = M(bc, { r: 0.6 });
    B.mesh(GEO.sphere(0.22, 10, 8), m, 0, 0, 0, 0, 0, 0, 1, 0.8, 1.6); B.mesh(GEO.sphere(0.13, 8, 6), m, 0, 0.1, 0.32);
    B.mesh(GEO.cone(0.05, 0.14, 6), M(0xffb703), 0, 0.08, 0.5, Math.PI / 2);
    [-1, 1].forEach((s) => B.mesh(GEO.box(0.7, 0.03, 0.26), m, s * 0.42, 0.05, 0, 0, 0, s * 0.35));
    const g = new THREE.Group(); B.build(g, { cast: false }); root.add(g);
    A.birds.push({ g, a: Math.random() * 6.28, r: 12 + Math.random() * 30, cx: (Math.random() - 0.5) * 60, cz: (Math.random() - 0.5) * 60, y: 16 + Math.random() * 12, sp: 0.25 + Math.random() * 0.2 });
  }
}
export function clearAmbient(scene) { if (A.root) scene.remove(A.root); A.npcs = []; A.cars = []; A.birds = []; A.root = null; }
export function updateAmbient(dt, W, S, people, t, cam) {
  if (!A.root || !W) return;
  const danger = S.phase === 'warn' || S.phase === 'active';
  const spots = W.coinSpots;
  for (const n of A.npcs) {
    if (danger && !n.hid && n.st !== 'flee') { // run for the nearest door
      let best = null, bd = 1e9; for (const b of W.buildings) { if (b.wrecked || !b.doorOut) continue; const d = Math.hypot(b.doorOut.x - n.x, b.doorOut.z - n.z); if (d < bd) { bd = d; best = b; } }
      if (best) { n.st = 'flee'; n.tx = best.doorOut.x; n.tz = best.doorOut.z; n.door = best; n.stuck = 0; }
    }
    if (!danger && n.hid) { n.hid = false; n.P.root.visible = true; n.st = 'walk'; n.wait = 1 + Math.random() * 2; }
    if (n.hid) continue;
    const dx = n.tx - n.x, dz = n.tz - n.z, d = Math.hypot(dx, dz);
    let sp = 0;
    if (n.st === 'flee') { sp = 4.6; if (d < 1.0) { n.hid = true; n.P.root.visible = false; continue; } }
    else if (n.wait > 0) { n.wait -= dt; }
    else { sp = 1.6; if (d < 0.8) { n.wait = 1.5 + Math.random() * 4; const s = spots[(Math.random() * spots.length) | 0]; if (s && s.y == null && Math.hypot(s.x - n.x, s.z - n.z) < 40) { n.tx = s.x; n.tz = s.z; } } }
    // don't walk into players / bots
    if (sp && n.st !== 'flee') for (const p of people) if (Math.hypot(p.x - n.x, p.z - n.z) < 1.2) sp = 0;
    if (sp && d > 0.01) {
      const ox = n.x, oz = n.z; n.x += dx / d * sp * dt; n.z += dz / d * sp * dt; collide(W, n);
      const moved = Math.hypot(n.x - ox, n.z - oz); if (moved < sp * dt * 0.3) { n.stuck += dt; if (n.stuck > 1.5) { n.stuck = 0; if (n.st === 'flee') { n.hid = true; n.P.root.visible = false; continue; } n.tx = n.x + (Math.random() - 0.5) * 12; n.tz = n.z + (Math.random() - 0.5) * 12; } } else n.stuck = Math.max(0, n.stuck - dt);
      const ty = Math.atan2(dx, dz); let dy = ty - n.yaw; while (dy > Math.PI) dy -= 6.283; while (dy < -Math.PI) dy += 6.283; n.yaw += dy * Math.min(1, dt * 8);
    }
    n.y = W.terrain(n.x, n.z);
    n.P.root.position.set(n.x, n.y, n.z); n.P.root.rotation.y = n.yaw;
    const far = cam && Math.hypot(cam.position.x - n.x, cam.position.z - n.z) > 55; n.P.root.visible = !far; if (far) continue;
    animSurvivor(n.P, sp > 0 ? 'run' : 'idle', dt, sp / 5, t);
    if (n.st === 'flee') { n.P.arms.forEach((a) => { a.rotation.x = -2.7; }); }
  }
  for (const c of A.cars) {
    const l = c.l; let want = danger ? 0 : 7;
    const pos = (s) => l.ax === 'z' ? [l.c, s] : [s, l.c];
    const [cx, cz] = pos(c.s);
    for (const p of people.concat(A.npcs.filter((n) => !n.hid))) { const along = (l.ax === 'z' ? p.z - cz : p.x - cx) * l.d, side = Math.abs(l.ax === 'z' ? p.x - cx : p.z - cz); if (along > 0 && along < 7 && side < 2.6) want = 0; }
    c.v += (want - c.v) * Math.min(1, dt * 3);
    c.s += c.v * l.d * dt;
    if (c.s > l.b) c.s = l.a; if (c.s < l.a) c.s = l.b;
    const [x, z] = pos(c.s), edge = Math.min(c.s - l.a, l.b - c.s);
    c.g.position.set(x, W.terrain(x, z), z); c.g.rotation.y = l.ax === 'z' ? (l.d > 0 ? 0 : Math.PI) : (l.d > 0 ? Math.PI / 2 : -Math.PI / 2);
    c.g.scale.setScalar(Math.max(0.01, Math.min(1, edge / 3)));
  }
  for (const b of A.birds) { b.a += b.sp * dt; b.g.position.set(b.cx + Math.cos(b.a) * b.r, b.y + Math.sin(t * 0.7 + b.r) * 1.2, b.cz + Math.sin(b.a) * b.r); b.g.rotation.y = -b.a; b.g.scale.set(1, 0.4 + Math.abs(Math.sin(t * 9 + b.r)) * 1.4, 1); }
}

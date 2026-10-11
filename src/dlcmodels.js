// Super Thunder Expansion: procedural models (dragon "EMBERWING", dinos, Ratita Industries props, Weather Hunter gear)
import * as THREE from 'three';
import { GEO, mesh, compact, mat4, prop } from './models.js';
import { M, glow } from './mats.js';

/* ---------------- dragon: EMBERWING ---------------- */
export function makeDragon() {
  const root = new THREE.Group(), D = { root };
  const red = M(0xdc2626, { r: 0.35, cc: 0.6, ccr: 0.3 }), belly = M(0xfbbf24, { r: 0.5, cc: 0.3 }), dark = M(0x7f1d1d, { r: 0.45 }), horn = M(0xfef3c7, { r: 0.35 });
  const memb = M(0xf97316, { r: 0.55, side: THREE.DoubleSide }), wingBone = M(0x991b1b, { r: 0.4 });
  const body = D.body = new THREE.Group(); root.add(body);
  mesh(GEO.sphere(2.2, 36, 24), red, 0, 0, 0, body).scale.set(1, 0.9, 1.9);
  mesh(GEO.sphere(1.9, 30, 20), belly, 0, -0.55, 0.3, body).scale.set(0.85, 0.7, 1.7);
  for (let i = 0; i < 7; i++) mesh(GEO.cone(0.32 - i * 0.02, 0.9, 10), M(0xfacc15, { r: 0.4, cc: 0.5 }), 0, 1.9 - i * 0.05, 2.6 - i * 1.0, body).rotation.x = -0.35;
  // neck
  const neck = [[0, 0.7, 3.6, 1.15], [0, 1.4, 4.6, 0.95], [0, 2.1, 5.4, 0.85], [0, 2.7, 6.1, 0.8]];
  neck.forEach((n) => mesh(GEO.sphere(n[3], 22, 16), red, n[0], n[1], n[2], body));
  const head = D.head = new THREE.Group(); head.position.set(0, 3.1, 7.0); body.add(head);
  mesh(GEO.sphere(1.05, 28, 20), red, 0, 0.1, 0, head).scale.set(0.95, 0.85, 1.15);
  mesh(GEO.rbox(1.3, 0.75, 1.7, 0.3), red, 0, -0.1, 1.2, head);
  [-1, 1].forEach((s) => {
    mesh(GEO.sphere(0.36, 18, 12), M(0xffffff, { r: 0.15, cc: 1 }), s * 0.55, 0.45, 0.55, head).scale.set(0.9, 1.1, 0.7);
    mesh(GEO.sphere(0.2, 14, 10), M(0x111111, { r: 0.1, cc: 1 }), s * 0.6, 0.47, 0.78, head).scale.set(0.7, 1.3, 0.6);
    mesh(GEO.sphere(0.06, 8, 6), M(0xffffff, { e: 0xffffff }), s * 0.55, 0.58, 0.88, head);
    const h = mesh(GEO.cone(0.18, 1.3, 12), horn, s * 0.45, 0.85, -0.55, head); h.rotation.set(-2.2, 0, s * -0.3);
    mesh(GEO.sphere(0.08, 8, 6), dark, s * 0.28, 0.1, 2.05, head);
    mesh(GEO.cone(0.22, 0.6, 8), red, s * 0.95, 0.35, -0.2, head).rotation.set(-1.2, 0, s * -1.0);
  });
  const jaw = D.jaw = new THREE.Group(); jaw.position.set(0, -0.45, 0.4); head.add(jaw);
  mesh(GEO.rbox(1.15, 0.35, 1.6, 0.15), belly, 0, -0.05, 0.8, jaw);
  for (let i = -1; i <= 1; i += 2) for (let k = 0; k < 3; k++) mesh(GEO.cone(0.08, 0.22, 6), horn, i * 0.42, 0.2, 0.4 + k * 0.45, jaw);
  // wings (pivot at the shoulder; membrane is a fan shape)
  const sh = new THREE.Shape(); const P = [[0, 0.6], [3, 1.4], [6.5, 2.0], [9, 1.0], [8.2, -0.8], [6.8, -2.6], [5.4, -1.6], [4.0, -3.4], [2.8, -2.0], [1.4, -2.8], [0, -1.6]];
  sh.moveTo(P[0][0], P[0][1]); P.slice(1).forEach((q) => sh.lineTo(q[0], q[1]));
  const wg = new THREE.ShapeGeometry(sh); wg.rotateX(-Math.PI / 2);
  D.wings = [-1, 1].map((s) => {
    const piv = new THREE.Group(); piv.position.set(s * 1.5, 1.1, 0.9); body.add(piv);
    const inner = new THREE.Group(); inner.scale.x = s; piv.add(inner);
    mesh(wg, memb, 0, 0, 0, inner);
    [[3, 1.4], [6.5, 2.0], [9, 1.0]].forEach((t) => { const L = Math.hypot(t[0], t[1]); const b = mesh(GEO.cap(0.13, L, 8), wingBone, t[0] / 2, 0.05, -t[1] / 2, inner); b.rotation.set(0, 0, 0); b.rotation.order = 'YXZ'; b.rotation.y = Math.atan2(t[0], -t[1]); b.rotation.x = Math.PI / 2; });
    mesh(GEO.cone(0.18, 0.6, 8), horn, 6.5, 0.1, -2.3, inner).rotation.x = Math.PI / 2;
    return piv;
  });
  // legs (tucked in flight)
  D.legs = [[-1, 1.6], [1, 1.6], [-1, -1.8], [1, -1.8]].map((q) => { const p = new THREE.Group(); p.position.set(q[0] * 1.2, -1.1, q[1]); body.add(p); mesh(GEO.cap(0.38, 0.9, 10), red, 0, -0.5, 0, p); mesh(GEO.sphere(0.42, 14, 10), dark, 0, -1.2, 0.2, p).scale.set(1, 0.6, 1.3); return p; });
  // tail
  const tail = D.tail = []; let par = body;
  for (let i = 0; i < 8; i++) { const sg = new THREE.Group(); sg.position.set(0, i ? 0 : -0.1, i ? -1.15 : -3.6); par.add(sg); mesh(GEO.sphere(1.0 - i * 0.1, 18, 12), red, 0, 0, -0.5, sg).scale.set(1, 0.85, 1.3); if (i % 2 === 0) mesh(GEO.cone(0.2, 0.6, 8), M(0xfacc15, { r: 0.4 }), 0, 0.8 - i * 0.06, -0.5, sg).rotation.x = -0.4; tail.push(sg); par = sg; }
  const spade = mesh(GEO.cone(0.6, 1.3, 4), dark, 0, 0, -1.3, par); spade.rotation.x = -Math.PI / 2; spade.scale.set(1.3, 1, 0.3);
  // flame breath (cone of glow, shown while breathing)
  const fl = D.flame = new THREE.Group(); fl.visible = false; jaw.add(fl); fl.position.set(0, 0.1, 1.7);
  const fc = mesh(new THREE.ConeGeometry(1.6, 8, 20, 1, true), glow(0xff7a1a, 0.55), 0, 0, 4, fl, false); fc.rotation.x = -Math.PI / 2;
  const fc2 = mesh(new THREE.ConeGeometry(0.7, 6, 16, 1, true), glow(0xfff3b0, 0.8), 0, 0, 3, fl, false); fc2.rotation.x = -Math.PI / 2;
  [body, head, jaw, ...D.legs, ...D.tail].forEach((g) => compact(g, []));
  D.wings.forEach((w) => compact(w.children[0], []));
  root.traverse((o) => { if (o.isMesh && o.material && !o.material.blending) o.castShadow = true; });
  D.t = 0; return D;
}
export function animDragon(D, dt, breath, swoop) {
  D.t += dt;
  const f = Math.sin(D.t * (swoop ? 5 : 3.2));
  D.wings[0].rotation.z = 0.15 + f * 0.75; D.wings[1].rotation.z = -0.15 - f * 0.75;
  D.body.position.y = -f * 0.5;
  D.tail.forEach((s, i) => { s.rotation.y = Math.sin(D.t * 2 - i * 0.6) * 0.12; s.rotation.x = Math.sin(D.t * 1.5 - i * 0.5) * 0.05; });
  D.jaw.rotation.x += ((breath ? 0.55 : 0.05) - D.jaw.rotation.x) * Math.min(1, dt * 8);
  D.flame.visible = !!breath; if (breath) D.flame.scale.set(1 + Math.random() * 0.15, 1 + Math.random() * 0.15, 0.9 + Math.random() * 0.2);
  D.legs.forEach((l, i) => { l.rotation.x = 0.9 + Math.sin(D.t * 2 + i) * 0.05; });
}

/* ---------------- dinos ---------------- */
// triceratops-style herd dino
export function makeTrike(col = 0x65a30d, frillCol = 0xf97316) {
  const root = new THREE.Group(), T = { root };
  const skin = M(col, { r: 0.45, cc: 0.4 }), frill = M(frillCol, { r: 0.4, cc: 0.4 }), horn = M(0xfef3c7, { r: 0.35 }), belly = M(0xfde68a, { r: 0.6 });
  const body = T.body = new THREE.Group(); body.position.y = 1.55; root.add(body);
  mesh(GEO.sphere(1.25, 28, 20), skin, 0, 0, 0, body).scale.set(1, 0.85, 1.55);
  mesh(GEO.sphere(1.0, 22, 16), belly, 0, -0.38, 0.1, body).scale.set(0.85, 0.6, 1.35);
  for (let i = 0; i < 4; i++) mesh(GEO.sphere(0.25, 12, 8), M(col - 0x111100 > 0 ? col - 0x111100 : col, { r: 0.5 }), 0, 0.95 - Math.abs(i - 1.5) * 0.08, 0.9 - i * 0.6, body).scale.set(1.4, 0.5, 1);
  const tail = mesh(GEO.cone(0.6, 2.2, 16), skin, 0, -0.1, -2.6, body); tail.rotation.x = -Math.PI / 2 - 0.15;
  const head = T.head = new THREE.Group(); head.position.set(0, 0.25, 1.95); body.add(head);
  mesh(GEO.sphere(0.7, 22, 16), skin, 0, 0, 0.2, head).scale.set(0.9, 0.85, 1.2);
  const fr = mesh(GEO.cyl(1.15, 1.15, 0.14, 28), frill, 0, 0.45, -0.25, head); fr.rotation.x = Math.PI / 2 - 0.5;
  for (let i = 0; i < 7; i++) { const a = -1.4 + i * 0.47; mesh(GEO.cone(0.12, 0.35, 8), horn, Math.sin(a) * 1.18, 0.45 + Math.cos(a) * 1.0, -0.25 - Math.cos(a) * 0.5, head).rotation.set(-0.5 + Math.cos(a) * -0.4, 0, -a); }
  [-1, 1].forEach((s) => { const h = mesh(GEO.cone(0.12, 1.0, 12), horn, s * 0.32, 0.55, 0.55, head); h.rotation.x = 1.0; mesh(GEO.sphere(0.12, 10, 8), M(0xffffff, { cc: 1 }), s * 0.42, 0.22, 0.65, head); mesh(GEO.sphere(0.07, 8, 6), M(0x111111), s * 0.46, 0.22, 0.73, head); });
  const nh = mesh(GEO.cone(0.1, 0.5, 10), horn, 0, 0.2, 1.15, head); nh.rotation.x = 0.7;
  mesh(GEO.cone(0.22, 0.45, 10), M(0x57534e, { r: 0.5 }), 0, -0.15, 1.15, head).rotation.x = Math.PI / 2 + 0.3;
  T.legs = [[-1, 0.9], [1, 0.9], [-1, -0.9], [1, -0.9]].map((q) => { const p = new THREE.Group(); p.position.set(q[0] * 0.75, -0.55, q[1]); body.add(p); mesh(GEO.cap(0.3, 0.6, 10), skin, 0, -0.45, 0, p); mesh(GEO.cyl(0.32, 0.36, 0.2, 12), M(0x57534e, { r: 0.6 }), 0, -0.95, 0.05, p); return p; });
  [body, head, ...T.legs].forEach((g) => compact(g, []));
  root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  T.t = Math.random() * 6; return T;
}
// two-legged dino (big = REXY the T-rex, small = raptor runners)
export function makeRex(col = 0x4d7c0f, stripe = 0x365314, s = 1) {
  const root = new THREE.Group(), R = { root, s };
  const skin = M(col, { r: 0.4, cc: 0.5 }), dk = M(stripe, { r: 0.5 }), belly = M(0xfef08a, { r: 0.6 }), tooth = M(0xffffff, { r: 0.3 });
  const body = R.body = new THREE.Group(); body.position.y = 3.0; root.add(body);
  mesh(GEO.sphere(1.4, 28, 20), skin, 0, 0, 0, body).scale.set(0.95, 1.0, 1.5);
  mesh(GEO.sphere(1.15, 22, 16), belly, 0, -0.35, 0.45, body).scale.set(0.8, 0.85, 1.2);
  for (let i = 0; i < 4; i++) mesh(GEO.box(0.2, 0.1, 1.9), dk, 0, 1.1 - i * 0.03, 0.6 - i * 0.55, body).rotation.set(0, Math.PI / 2, 0.4);
  const neck = mesh(GEO.sphere(0.8, 18, 14), skin, 0, 0.9, 1.6, body);
  const head = R.head = new THREE.Group(); head.position.set(0, 1.5, 2.3); body.add(head);
  mesh(GEO.rbox(1.15, 0.95, 1.9, 0.35), skin, 0, 0.1, 0.5, head);
  [-1, 1].forEach((k) => { mesh(GEO.sphere(0.2, 12, 8), M(0xffffff, { cc: 1 }), k * 0.45, 0.45, 0.35, head); mesh(GEO.sphere(0.11, 10, 8), M(0x111111, { cc: 1 }), k * 0.5, 0.47, 0.48, head); mesh(GEO.box(0.35, 0.08, 0.2), dk, k * 0.42, 0.68, 0.32, head).rotation.z = -k * 0.3; });
  for (let i = -2; i <= 2; i++) mesh(GEO.cone(0.07, 0.2, 6), tooth, i * 0.2, -0.35, 1.3 - Math.abs(i) * 0.05, head).rotation.x = Math.PI;
  const jaw = R.jaw = new THREE.Group(); jaw.position.set(0, -0.35, 0); head.add(jaw);
  mesh(GEO.rbox(1.0, 0.35, 1.6, 0.15), belly, 0, -0.15, 0.55, jaw);
  mesh(GEO.rbox(0.8, 0.12, 1.3, 0.05), M(0xdb2777, { r: 0.6 }), 0, 0.05, 0.55, jaw);
  R.arms = [-1, 1].map((k) => { const p = new THREE.Group(); p.position.set(k * 0.8, 0.0, 1.5); body.add(p); mesh(GEO.cap(0.13, 0.45, 8), skin, 0, -0.3, 0.1, p).rotation.x = -0.8; return p; });
  R.legs = [-1, 1].map((k) => { const p = new THREE.Group(); p.position.set(k * 0.85, -0.5, -0.1); body.add(p); mesh(GEO.sphere(0.65, 16, 12), skin, 0, -0.3, 0, p).scale.set(0.8, 1.2, 1.1); mesh(GEO.cap(0.25, 1.1, 10), skin, 0, -1.3, -0.1, p); mesh(GEO.rbox(0.55, 0.25, 0.9, 0.1), dk, 0, -2.1, 0.25, p); return p; });
  const tail = R.tail = []; let par = body;
  for (let i = 0; i < 5; i++) { const sg = new THREE.Group(); sg.position.set(0, i ? 0.05 : 0.1, i ? -0.95 : -1.8); par.add(sg); mesh(GEO.sphere(0.85 - i * 0.15, 16, 12), skin, 0, 0, -0.4, sg).scale.set(1, 0.9, 1.4); tail.push(sg); par = sg; }
  [body, head, jaw, ...R.arms, ...R.legs, ...R.tail].forEach((g) => compact(g, []));
  root.scale.setScalar(s); root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  R.t = Math.random() * 6; return R;
}
export function animDino(D, dt, speed, roar) {
  D.t += dt * (speed > 0.1 ? 1 : 0.3);
  const w = Math.sin(D.t * (D.arms ? 6 : 9) * Math.max(0.5, Math.min(1.6, speed)));
  if (D.arms) { D.legs[0].rotation.x = w * 0.7; D.legs[1].rotation.x = -w * 0.7; D.body.rotation.x = 0.12 * Math.min(1, speed) + (roar ? -0.25 : 0); D.body.position.y = 3.0 + Math.abs(w) * 0.18 * Math.min(1, speed); D.tail.forEach((s, i) => s.rotation.y = Math.sin(D.t * 3 - i * 0.6) * 0.18); D.jaw.rotation.x += ((roar ? 0.7 : 0.08 + Math.max(0, Math.sin(D.t * 0.7)) * 0.15) - D.jaw.rotation.x) * Math.min(1, dt * 8); }
  else { D.legs[0].rotation.x = w * 0.8; D.legs[3].rotation.x = w * 0.8; D.legs[1].rotation.x = -w * 0.8; D.legs[2].rotation.x = -w * 0.8; D.body.position.y = 1.55 + Math.abs(w) * 0.12 * Math.min(1, speed); D.head.rotation.x = Math.sin(D.t * 4) * 0.08; }
}

/* ---------------- Ratita Industries + Weather Hunter props (static, batched) ---------------- */
// Ratita Weather Van: the Weather Hunter base (you start + file reports here)
export function addVan(B, x, y, z, ry) {
  const dx = Math.sin(ry), dz = Math.cos(ry); prop(x + dx * 1.4, z + dz * 1.4, 1.3, y + 2.6); prop(x - dx * 1.4, z - dz * 1.4, 1.3, y + 2.6);
  const tf = (lx, ly, lz) => new THREE.Matrix4().makeTranslation(x, y, z).multiply(new THREE.Matrix4().makeRotationY(ry)).multiply(new THREE.Matrix4().makeTranslation(lx, ly, lz));
  const put = (g, m, lx, ly, lz, rx = 0, rz = 0) => B.add(g, m, tf(lx, ly, lz).multiply(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, 0, rz))));
  const white = M(0xf8fafc, { r: 0.3, cc: 1 }), purple = M(0x7c3aed, { r: 0.35, cc: 0.8 }), glass = M(0x1e3a5f, { r: 0.05, m: 0.4, cc: 1 }), tire = M(0x1c1f24, { r: 0.85 }), hub = M(0xd6dbe0, { m: 1, r: 0.2 });
  put(GEO.rbox(2.3, 2.2, 5.2, 0.35), white, 0, 1.45, -0.3); put(GEO.rbox(2.2, 1.4, 1.5, 0.35), white, 0, 1.05, 2.9);
  put(GEO.rbox(2.12, 0.75, 1.0, 0.25), glass, 0, 1.55, 3.0); put(GEO.box(2.34, 0.4, 5.22), purple, 0, 1.1, -0.3);
  [[-1.0, 2.1], [1.0, 2.1], [-1.0, -1.9], [1.0, -1.9]].forEach((w) => { put(GEO.cyl(0.45, 0.45, 0.32, 20), tire, w[0], 0.45, w[1], 0, Math.PI / 2); put(GEO.cyl(0.24, 0.24, 0.34, 14), hub, w[0], 0.45, w[1], 0, Math.PI / 2); });
  [-0.7, 0.7].forEach((lx) => put(GEO.sphere(0.15, 12, 8), M(0xfff6cc, { e: 0xfff1b0, ei: 1.2 }), lx, 0.95, 3.66));
  // roof: satellite dish, weather mast with spinning-cup look, light bar
  put(GEO.cyl(0.12, 0.12, 0.6, 10), M(0x94a3b8, { m: 0.7, r: 0.3 }), 0, 2.85, -1.5); B.add(new THREE.SphereGeometry(0.9, 20, 8, 0, 6.283, 0, 1.0), M(0xf1f5f9, { r: 0.3, m: 0.3, side: THREE.DoubleSide }), tf(0, 3.3, -1.5).multiply(new THREE.Matrix4().makeRotationX(-0.8)));
  put(GEO.cyl(0.05, 0.05, 2.2, 8), M(0x64748b, { m: 0.7 }), 0.7, 3.6, 0.6); [0, 2.09, 4.19].forEach((a) => put(GEO.sphere(0.12, 10, 8), M(0xfacc15, { r: 0.4 }), 0.7 + Math.cos(a) * 0.3, 4.7, 0.6 + Math.sin(a) * 0.3));
  put(GEO.rbox(1.4, 0.18, 0.3, 0.06), M(0xf59e0b, { e: 0xf59e0b, ei: 1.2 }), 0, 2.6, 1.6);
  // Ratita logo on both sides (grey rat face + pink ears)
  [-1, 1].forEach((s) => { put(GEO.sphere(0.45, 16, 12), M(0x9ca3af, { r: 0.5 }), s * 1.16, 1.8, -0.4, 0, 0, 0); put(GEO.sphere(0.24, 12, 8), M(0xf9a8d4, { r: 0.5 }), s * 1.18, 2.2, -0.05); put(GEO.sphere(0.24, 12, 8), M(0xf9a8d4, { r: 0.5 }), s * 1.18, 2.2, -0.75); });
}
// giant Ratita mascot statue holding a cheese wedge
export function addRatStatue(B, x, y, z, ry = 0, s = 1) {
  prop(x, z, 2.2 * s, y + 6 * s);
  const grey = M(0x9ca3af, { r: 0.35, m: 0.2, cc: 0.6 }), pink = M(0xf9a8d4, { r: 0.4 }), stone = M(0xe2e8f0, { r: 0.8 });
  const T = (lx, ly, lz) => { const c = Math.cos(ry), sn = Math.sin(ry); return [x + (lx * c + lz * sn) * s, y + ly * s, z + (-lx * sn + lz * c) * s]; };
  const at = (g, m, lx, ly, lz, rx = 0, ryy = 0, rz = 0, sx = 1, sy = sx, sz = sx) => { const p = T(lx, ly, lz); B.add(g, m, mat4(p[0], p[1], p[2], rx, ry + ryy, rz, sx * s, sy * s, sz * s)); };
  at(GEO.cyl(2.2, 2.4, 1.0, 32), stone, 0, 0.5, 0); at(GEO.cyl(2.3, 2.3, 0.12, 32), M(0x7c3aed, { r: 0.4 }), 0, 1.0, 0);
  at(GEO.sphere(1.3, 28, 20), grey, 0, 2.3, 0, 0, 0, 0, 1, 1.15, 0.95); at(GEO.sphere(1.0, 24, 18), M(0xe5e7eb, { r: 0.4 }), 0, 2.1, 0.55, 0, 0, 0, 0.8, 0.95, 0.6);
  at(GEO.sphere(0.95, 28, 20), grey, 0, 4.0, 0.2); at(GEO.cone(0.45, 0.9, 16), grey, 0, 3.85, 1.15, Math.PI / 2);
  at(GEO.sphere(0.14, 10, 8), pink, 0, 3.85, 1.62);
  [-1, 1].forEach((k) => { at(GEO.sphere(0.55, 20, 14), grey, k * 0.75, 4.85, 0, 0, 0, 0, 1, 1, 0.3); at(GEO.sphere(0.38, 16, 10), pink, k * 0.75, 4.85, 0.1, 0, 0, 0, 1, 1, 0.25); at(GEO.sphere(0.16, 12, 8), M(0x111111, { cc: 1 }), k * 0.38, 4.2, 0.95); at(GEO.cap(0.25, 0.6, 8), grey, k * 0.9, 2.6, 0.7, 0.9, 0, -k * 0.5); at(GEO.sphere(0.4, 14, 10), grey, k * 0.7, 1.35, 0.5, 0, 0, 0, 1, 0.6, 1.4); });
  at(GEO.cyl(0.9, 0.9, 0.6, 3), M(0xfacc15, { r: 0.4, e: 0xb45309, ei: 0.2 }), 0, 3.0, 1.25, Math.PI / 2, 0, 0.3);
  at(GEO.torus(1.2, 0.14, Math.PI * 1.3, 8, 24), pink, 0, 1.4, -1.0, Math.PI / 2, 0, 0.5);
}
export function addSnowman(B, x, y, z, ry = 0) {
  prop(x, z, 0.8, y + 2.2); const w = M(0xffffff, { r: 0.7 }), k = M(0x111111, { r: 0.3 });
  B.mesh(GEO.sphere(0.8, 20, 14), w, x, y + 0.7, z); B.mesh(GEO.sphere(0.6, 20, 14), w, x, y + 1.75, z); B.mesh(GEO.sphere(0.42, 18, 12), w, x, y + 2.55, z);
  const fx = Math.sin(ry), fz = Math.cos(ry);
  B.add(GEO.cone(0.08, 0.45, 10), M(0xf97316, { r: 0.5 }), mat4(x + fx * 0.55, y + 2.55, z + fz * 0.55, Math.PI / 2, ry, 0));
  [-1, 1].forEach((s) => B.mesh(GEO.sphere(0.05, 8, 6), k, x + fx * 0.36 + fz * s * 0.15, y + 2.68, z + fz * 0.36 - fx * s * 0.15));
  B.mesh(GEO.cyl(0.32, 0.32, 0.45, 16), k, x, y + 3.05, z); B.mesh(GEO.cyl(0.48, 0.48, 0.05, 16), k, x, y + 2.83, z);
  B.add(GEO.torus(0.42, 0.09, 6.283, 8, 20), M(0xef4444, { r: 0.8 }), mat4(x, y + 2.2, z, Math.PI / 2, 0, 0));
}
export function addIgloo(B, x, y, z, ry = 0) {
  prop(x, z, 2.2, y + 2); const ice = M(0xf0f9ff, { r: 0.35, cc: 0.6 });
  B.add(new THREE.SphereGeometry(2.2, 28, 14, 0, 6.283, 0, Math.PI / 2), ice, mat4(x, y, z));
  B.add(GEO.cyl(0.8, 0.8, 1.4, 16, 1), ice, mat4(x + Math.sin(ry) * 2.1, y + 0.55, z + Math.cos(ry) * 2.1, Math.PI / 2, ry, 0, 1, 1, 0.9));
  B.add(GEO.cyl(0.6, 0.6, 0.02, 16), M(0x0c4a6e, { r: 0.9 }), mat4(x + Math.sin(ry) * 2.8, y + 0.55, z + Math.cos(ry) * 2.8, Math.PI / 2, ry, 0));
  for (let i = 0; i < 3; i++) B.add(GEO.torus(2.2 * Math.cos(i * 0.45 + 0.35), 0.03, 6.283, 4, 32), M(0xbae6fd, { r: 0.5 }), mat4(x, y + 2.2 * Math.sin(i * 0.45 + 0.35), z, Math.PI / 2, 0, 0));
}

/* ---------------- Weather Hunter dynamic gear ---------------- */
export function makeSwirl() { // a "storm swirl" anomaly: spinning snowy vortex with glowing rings
  const g = new THREE.Group();
  const pts = []; for (let i = 0; i <= 16; i++) { const t = i / 16; pts.push(new THREE.Vector2(0.4 + Math.pow(t, 1.6) * 3.2, t * 6)); }
  const mat = new THREE.MeshStandardMaterial({ color: 0xe0f2fe, emissive: 0x38bdf8, emissiveIntensity: 1.0, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false, roughness: 1 });
  const f = new THREE.Mesh(new THREE.LatheGeometry(pts, 32), mat); g.add(f);
  const rings = new THREE.Group(); g.add(rings);
  for (let i = 0; i < 3; i++) { const r = new THREE.Mesh(GEO.torus(1.2 + i * 0.9, 0.07, 6.283, 6, 40), glow(0x67e8f9, 0.7)); r.rotation.x = Math.PI / 2; r.position.y = 0.5 + i * 1.8; rings.add(r); }
  const core = new THREE.Mesh(GEO.sphere(0.5, 16, 12), glow(0xffffff, 0.8)); core.position.y = 1.2; g.add(core);
  g.userData = { f, rings, mat, core }; return g;
}
export function makeProbe() { // planted weather probe: tripod, mast, spinning anemometer, blinking light
  const g = new THREE.Group(), met = M(0x94a3b8, { m: 0.7, r: 0.3 });
  [0, 2.09, 4.19].forEach((a) => { const l = new THREE.Mesh(GEO.cyl(0.04, 0.05, 1.3, 6), met); l.position.set(Math.cos(a) * 0.35, 0.55, Math.sin(a) * 0.35); l.rotation.set(Math.sin(a) * 0.35, 0, -Math.cos(a) * 0.35); g.add(l); });
  const mast = new THREE.Mesh(GEO.cyl(0.05, 0.05, 1.6, 8), met); mast.position.y = 1.6; g.add(mast);
  const box = new THREE.Mesh(GEO.rbox(0.45, 0.35, 0.3, 0.06), M(0x7c3aed, { r: 0.4, cc: 0.6 })); box.position.y = 1.1; g.add(box);
  const cups = new THREE.Group(); cups.position.y = 2.45; g.add(cups);
  for (let i = 0; i < 3; i++) { const a = i / 3 * 6.283; const arm = new THREE.Mesh(GEO.cyl(0.02, 0.02, 0.5, 4), met); arm.rotation.z = Math.PI / 2; arm.rotation.y = -a; arm.position.set(Math.cos(a) * 0.25, 0, Math.sin(a) * 0.25); cups.add(arm); const c = new THREE.Mesh(GEO.sphere(0.1, 10, 8), M(0xfacc15, { r: 0.4 })); c.position.set(Math.cos(a) * 0.5, 0, Math.sin(a) * 0.5); cups.add(c); }
  const light = new THREE.Mesh(GEO.sphere(0.09, 10, 8), M(0x22c55e, { e: 0x22c55e, ei: 2.5 })); light.position.y = 1.35; g.add(light);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  g.userData = { cups, light }; return g;
}
export function makeBalloon() { // Ratita weather balloon with a payload box
  const g = new THREE.Group();
  const b = new THREE.Mesh(GEO.sphere(1.4, 28, 20), M(0xffffff, { r: 0.25, cc: 1 })); b.scale.set(1, 1.15, 1); b.position.y = 5; g.add(b);
  const band = new THREE.Mesh(GEO.torus(1.4, 0.08, 6.283, 6, 32), M(0x7c3aed, { r: 0.4 })); band.rotation.x = Math.PI / 2; band.position.y = 5; g.add(band);
  const str = new THREE.Mesh(GEO.cyl(0.015, 0.015, 3.2, 4), M(0xffffff)); str.position.y = 2.2; g.add(str);
  const pay = new THREE.Mesh(GEO.rbox(0.5, 0.4, 0.5, 0.06), M(0xf59e0b, { r: 0.4 })); pay.position.y = 0.5; g.add(pay);
  const lt = new THREE.Mesh(GEO.sphere(0.07, 8, 6), M(0xef4444, { e: 0xef4444, ei: 2.5 })); lt.position.set(0, 0.75, 0); g.add(lt);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

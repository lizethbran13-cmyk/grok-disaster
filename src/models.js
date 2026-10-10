// procedural, smooth, rounded cartoon models (no textures, no billboards)
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { M, glow } from './mats.js';

const gc = new Map();
function cg(key, fn) { let g = gc.get(key); if (!g) { g = fn(); gc.set(key, g); } return g; }
export const GEO = {
  sphere: (r, w = 24, h = 16) => cg('s' + r + w + h, () => new THREE.SphereGeometry(r, w, h)),
  cap: (r, l, s = 16) => cg('c' + r + l + s, () => new THREE.CapsuleGeometry(r, l, 6, s)),
  rbox: (w, h, d, r = 0.08, s = 2) => cg('rb' + [w, h, d, r, s], () => new RoundedBoxGeometry(w, h, d, s, Math.min(r, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001))),
  box: (w, h, d) => cg('b' + [w, h, d], () => new THREE.BoxGeometry(w, h, d)),
  cyl: (rt, rb, h, s = 24) => cg('cy' + [rt, rb, h, s], () => new THREE.CylinderGeometry(rt, rb, h, s)),
  cone: (r, h, s = 24) => cg('co' + [r, h, s], () => new THREE.ConeGeometry(r, h, s)),
  torus: (r, t, arc = Math.PI * 2, rs = 12, ts = 32) => cg('t' + [r, t, arc, rs, ts], () => new THREE.TorusGeometry(r, t, rs, ts, arc)),
  star: (r = 0.5, d = 0.18) => cg('star' + r + d, () => {
    const s = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 + Math.PI / 2, rr = i % 2 ? r * 0.45 : r; const x = Math.cos(a) * rr, y = Math.sin(a) * rr; i ? s.lineTo(x, y) : s.moveTo(x, y); }
    const g = new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: true, bevelThickness: d * 0.5, bevelSize: r * 0.12, bevelSegments: 3 }); g.center(); return g;
  }),
  rock: (seed = 1, r = 1) => cg('rock' + seed + r, () => {
    const g = new THREE.SphereGeometry(r, 18, 12), p = g.attributes.position, v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); const n = 1 + 0.18 * Math.sin(v.x * 3.1 + seed) * Math.cos(v.y * 2.7 + seed * 2) + 0.1 * Math.sin(v.z * 5 + seed * 3); v.multiplyScalar(n); v.y *= 0.75; p.setXYZ(i, v.x, v.y, v.z); }
    g.computeVertexNormals(); return g;
  })
};
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3(), _p = new THREE.Vector3();
export function mat4(x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = sx, sz = sx) {
  return new THREE.Matrix4().compose(_p.set(x, y, z), _q.setFromEuler(_e.set(rx, ry, rz)), _s.set(sx, sy, sz));
}
// static geometry batcher: one merged mesh per material
// one shared "uber" material: colour, roughness, metalness and glow live in vertex attributes,
// so every opaque prop of a building/scene merges into a single draw call
let UBER = null;
export function uberMat() {
  if (UBER) return UBER;
  UBER = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 1 });
  UBER.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec2 rm; attribute vec3 em; varying vec2 vRM; varying vec3 vEM;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvRM = rm; vEM = em;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec2 vRM; varying vec3 vEM;')
      .replace('#include <roughnessmap_fragment>', 'float roughnessFactor = vRM.x;')
      .replace('#include <metalnessmap_fragment>', 'float metalnessFactor = vRM.y;')
      .replace('#include <emissivemap_fragment>', 'totalEmissiveRadiance = vEM;');
  };
  UBER.customProgramCacheKey = () => 'uber1';
  return UBER;
}
function route(mat) {
  if (!mat.isMeshStandardMaterial || mat.transparent || mat.vertexColors || mat.side !== THREE.FrontSide || mat.flatShading || mat.map || mat === UBER) return false;
  return true;
}
export class Batch {
  constructor() { this.groups = new Map(); }
  add(geo, mat, m) {
    const kind = route(mat), key = kind ? uberMat() : mat;
    let e = this.groups.get(key); if (!e) { e = []; this.groups.set(key, e); }
    let g = geo.index ? geo.toNonIndexed() : geo.clone();
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    if (kind) {
      const n = g.attributes.position.count, c = new Float32Array(n * 3), rm = new Float32Array(n * 2), em = new Float32Array(n * 3), col = mat.color, e = mat.emissive, ei = mat.emissiveIntensity || 0;
      const r = mat.clearcoat > 0 ? Math.min(mat.roughness, 0.35) : mat.roughness, mt = mat.metalness;
      for (let i = 0; i < n; i++) { c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b; rm[i * 2] = r; rm[i * 2 + 1] = mt; em[i * 3] = e.r * ei; em[i * 3 + 1] = e.g * ei; em[i * 3 + 2] = e.b * ei; }
      g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.setAttribute('rm', new THREE.BufferAttribute(rm, 2)); g.setAttribute('em', new THREE.BufferAttribute(em, 3));
    }
    g.applyMatrix4(m); e.push(g); return this;
  }
  mesh(geo, mat, x, y, z, rx, ry, rz, sx, sy, sz) { return this.add(geo, mat, mat4(x, y, z, rx, ry, rz, sx, sy, sz)); }
  box(mat, w, h, d, x, y, z, ry = 0) { return this.add(GEO.box(w, h, d), mat, mat4(x, y, z, 0, ry, 0)); }
  rbox(mat, w, h, d, r, x, y, z, ry = 0) { return this.add(GEO.rbox(w, h, d, r), mat, mat4(x, y, z, 0, ry, 0)); }
  build(parent, o = {}) {
    const out = [];
    for (const [mat, list] of this.groups) {
      if (!list.length) continue;
      const g = mergeGeometries(list, false); list.forEach((x) => x.dispose());
      const mesh = new THREE.Mesh(g, mat); mesh.castShadow = o.cast !== false && !mat.transparent; mesh.receiveShadow = o.receive !== false;
      mesh.matrixAutoUpdate = false; mesh.updateMatrix(); parent.add(mesh); out.push(mesh);
    }
    this.groups.clear(); return out;
  }
}
function mesh(geo, mat, x = 0, y = 0, z = 0, parent, cast = true) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = cast; m.receiveShadow = true; if (parent) parent.add(m); return m;
}
export { mesh };

/* ---------------- survivors ---------------- */
export const SKINS = [0xf6c9a0, 0xe0a979, 0xb97a4f, 0x8a5a3b, 0xffd9b8];
export const HATS = ['none', 'cap', 'hardhat', 'cowboy', 'crown', 'party', 'astro', 'dino', 'beanie', 'chef'];
export function makeSurvivor(look) {
  look = Object.assign({ skin: SKINS[0], shirt: 0x3b82f6, pants: 0x334155, hair: 0x3a2516, hat: 'cap', hatColor: 0xef4444, shoes: 0xffffff }, look || {});
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const skin = M(look.skin, { r: 0.55 }), shirt = M(look.shirt, { r: 0.7 }), pants = M(look.pants, { r: 0.75 }), shoe = M(look.shoes, { r: 0.4, cc: 0.4 });
  const P = { root, body, look };
  // legs
  P.legs = [-1, 1].map((s) => {
    const piv = new THREE.Group(); piv.position.set(s * 0.13, 0.78, 0); body.add(piv);
    mesh(GEO.cap(0.115, 0.42), pants, 0, -0.32, 0, piv);
    const sh = mesh(GEO.rbox(0.2, 0.15, 0.32, 0.07), shoe, 0, -0.71, 0.05, piv);
    mesh(GEO.rbox(0.21, 0.05, 0.33, 0.02), M(0x222831), 0, -0.775, 0.05, piv);
    return piv;
  });
  mesh(GEO.sphere(0.26, 20, 14), pants, 0, 0.84, 0, body).scale.set(1, 0.7, 0.85);
  const torso = mesh(GEO.cap(0.25, 0.3), shirt, 0, 1.07, 0, body); torso.scale.set(1, 1, 0.82);
  mesh(GEO.torus(0.2, 0.035, Math.PI * 2, 8, 24), M(0xffffff, { r: 0.6 }), 0, 1.33, 0, body).rotation.x = Math.PI / 2; // collar
  P.arms = [-1, 1].map((s) => {
    const piv = new THREE.Group(); piv.position.set(s * 0.31, 1.27, 0); body.add(piv);
    mesh(GEO.sphere(0.1, 14, 10), shirt, 0, 0, 0, piv);
    mesh(GEO.cap(0.08, 0.32), shirt, 0, -0.2, 0, piv);
    mesh(GEO.sphere(0.095, 14, 10), skin, 0, -0.45, 0, piv);
    piv.rotation.z = s * 0.12; return piv;
  });
  // head
  const head = P.head = new THREE.Group(); head.position.set(0, 1.42, 0); body.add(head);
  mesh(GEO.sphere(0.34, 32, 24), skin, 0, 0.3, 0, head);
  const hair = mesh(new THREE.SphereGeometry(0.355, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.42), M(look.hair, { r: 0.8 }), 0, 0.31, -0.01, head); hair.rotation.x = -0.25;
  const eyeW = M(0xffffff, { r: 0.2, cc: 0.6 }), eyeB = M(0x111418, { r: 0.15, cc: 1 });
  [-1, 1].forEach((s) => {
    const e = mesh(GEO.sphere(0.085, 16, 12), eyeW, s * 0.125, 0.33, 0.27, head, false); e.scale.set(0.9, 1.1, 0.6);
    mesh(GEO.sphere(0.05, 14, 10), eyeB, s * 0.125, 0.33, 0.315, head, false).scale.set(1, 1.15, 0.6);
    mesh(GEO.sphere(0.016, 8, 6), M(0xffffff, { e: 0xffffff, ei: 1 }), s * 0.125 + 0.018, 0.355, 0.34, head, false);
    mesh(GEO.sphere(0.05, 12, 8), M(0xff8fa3, { r: 0.8 }), s * 0.2, 0.22, 0.25, head, false).scale.set(1, 0.6, 0.4);
  });
  const mouth = P.mouth = mesh(GEO.torus(0.065, 0.018, Math.PI, 8, 16), M(0x5b1d1d, { r: 0.5 }), 0, 0.2, 0.31, head, false); mouth.rotation.z = Math.PI;
  P.hatG = new THREE.Group(); P.hatG.position.y = 0.3; head.add(P.hatG);
  P.backG = new THREE.Group(); P.backG.position.set(0, 1.1, -0.22); body.add(P.backG);
  setHat(P, look.hat, look.hatColor);
  // KO stars
  const stars = P.stars = new THREE.Group(); stars.position.y = 2.25; stars.visible = false; root.add(stars);
  for (let i = 0; i < 5; i++) { const s = mesh(GEO.star(0.11, 0.05), M(0xffd23f, { e: 0xffb300, ei: 0.8, r: 0.3 }), Math.cos(i / 5 * 6.283) * 0.42, 0, Math.sin(i / 5 * 6.283) * 0.42, stars, false); s.rotation.x = -0.3; }
  // umbrella (shown during hail/storm when owned)
  const um = P.umbrella = new THREE.Group(); um.position.set(0.32, 1.25, 0); um.visible = false; body.add(um);
  mesh(GEO.cyl(0.02, 0.02, 1.2, 8), M(0x444444, { m: 0.6, r: 0.3 }), 0, 0.5, 0, um);
  mesh(new THREE.SphereGeometry(0.75, 24, 8, 0, Math.PI * 2, 0, Math.PI * 0.32), M(0xff4fa3, { r: 0.45, cc: 0.5, side: THREE.DoubleSide }), 0, 0.45, 0, um);
  // shield bubble
  P.bubble = mesh(GEO.sphere(1.1, 32, 20), glow(0x7dd3fc, 0.25), 0, 0.95, 0, root, false); P.bubble.visible = false;
  // jetpack flame
  P.flames = new THREE.Group(); P.flames.visible = false; P.backG.add(P.flames);
  [-0.12, 0.12].forEach((x) => mesh(GEO.cone(0.08, 0.45, 12), glow(0xffa53d, 0.85), x, -0.45, -0.05, P.flames, false).rotation.x = Math.PI);
  // merge the static bits of every animated part (fewer draw calls)
  [body, head, ...P.legs, ...P.arms].forEach((g) => compact(g, [P.mouth]));
  compact(P.hatG, []);
  P.walk = 0; P.stun = 0;
  return P;
}
export function compact(g, exclude) {
  const ms = g.children.filter((c) => c.isMesh && !exclude.includes(c) && c.visible);
  if (ms.length < 2) return;
  const B = new Batch(), noShadow = new Batch();
  ms.forEach((m) => { m.updateMatrix(); (m.castShadow ? B : noShadow).add(m.geometry, m.material, m.matrix); g.remove(m); });
  B.build(g); noShadow.build(g, { cast: false });
}
export function setHat(P, hat, color = 0xef4444) {
  const g = P.hatG; while (g.children.length) g.remove(g.children[0]);
  const c = M(color, { r: 0.5, cc: 0.3 });
  if (hat === 'cap') { mesh(new THREE.SphereGeometry(0.36, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), c, 0, 0.02, 0, g); mesh(GEO.cyl(0.3, 0.3, 0.03, 24), c, 0, 0.03, 0.25, g).scale.set(1, 1, 0.8); }
  else if (hat === 'hardhat') { const y = M(0xffc21a, { r: 0.35, cc: 0.8 }); mesh(new THREE.SphereGeometry(0.38, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), y, 0, 0.03, 0, g); mesh(GEO.cyl(0.46, 0.46, 0.04, 28), y, 0, 0.04, 0.03, g); mesh(GEO.rbox(0.08, 0.12, 0.62, 0.03), y, 0, 0.32, 0, g); }
  else if (hat === 'cowboy') { const b = M(0x8b5a2b, { r: 0.8 }); mesh(GEO.cyl(0.6, 0.6, 0.04, 32), b, 0, 0.06, 0, g); mesh(GEO.cyl(0.26, 0.32, 0.36, 24), b, 0, 0.24, 0, g); mesh(GEO.torus(0.31, 0.03, 6.28, 8, 24), M(0x3b2314), 0, 0.12, 0, g).rotation.x = Math.PI / 2; }
  else if (hat === 'crown') { const gd = M(0xffcf33, { r: 0.2, m: 1 }); mesh(GEO.cyl(0.27, 0.25, 0.16, 28, 1), gd, 0, 0.12, 0, g); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; mesh(GEO.cone(0.06, 0.16, 10), gd, Math.cos(a) * 0.24, 0.27, Math.sin(a) * 0.24, g); mesh(GEO.sphere(0.035, 10, 8), M(0xff2d55, { r: 0.1, cc: 1 }), Math.cos(a) * 0.27, 0.12, Math.sin(a) * 0.27, g); } }
  else if (hat === 'party') { mesh(GEO.cone(0.18, 0.5, 24), c, 0, 0.3, 0, g); mesh(GEO.sphere(0.07, 12, 8), M(0xffffff), 0, 0.57, 0, g); }
  else if (hat === 'astro') { mesh(GEO.sphere(0.5, 32, 24), M(0xbfe6ff, { r: 0.05, op: 0.28, cc: 1 }), 0, 0.0, 0.02, g, false); mesh(GEO.torus(0.42, 0.06, 6.28, 10, 32), M(0xf1f5f9, { r: 0.4 }), 0, -0.3, 0, g).rotation.x = Math.PI / 2; }
  else if (hat === 'dino') { const d = M(0x4ade80, { r: 0.6 }); mesh(new THREE.SphereGeometry(0.39, 28, 14, 0, Math.PI * 2, 0, Math.PI * 0.55), d, 0, -0.03, -0.02, g); for (let i = 0; i < 4; i++) mesh(GEO.cone(0.07, 0.18, 10), M(0xfacc15), 0, 0.36 - i * 0.04, -0.1 - i * 0.12, g).rotation.x = -0.5 - i * 0.25; }
  else if (hat === 'beanie') { mesh(new THREE.SphereGeometry(0.37, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), c, 0, -0.02, 0, g); mesh(GEO.sphere(0.09, 12, 8), M(0xffffff, { r: 0.9 }), 0, 0.37, 0, g); }
  else if (hat === 'chef') { const w = M(0xffffff, { r: 0.8 }); mesh(GEO.cyl(0.3, 0.3, 0.25, 24), w, 0, 0.12, 0, g); [[0, 0.38, 0], [0.15, 0.33, 0.05], [-0.15, 0.33, 0.05], [0, 0.33, -0.15]].forEach((p) => mesh(GEO.sphere(0.2, 16, 12), w, p[0], p[1], p[2], g)); }
}
export function setJetpack(P, on) {
  const g = P.backG; g.children.filter((c) => c.userData.jp).forEach((c) => g.remove(c));
  if (!on) return; const j = new THREE.Group(); j.userData.jp = true; g.add(j);
  const m = M(0xcbd5e1, { r: 0.25, m: 0.8 }), r = M(0xef4444, { r: 0.4, cc: 0.6 });
  [-0.12, 0.12].forEach((x) => { mesh(GEO.cap(0.09, 0.3), m, x, 0, -0.05, j); mesh(GEO.sphere(0.09, 12, 8), r, x, 0.25, -0.05, j); });
}
// pose a survivor. st: idle|run|jump|swim|ko|cover|float|panic
export function animSurvivor(P, st, dt, speed, t) {
  const b = P.body, L = P.legs, A = P.arms; P.walk += dt * (st === 'run' ? 9 * Math.max(0.6, speed) : 0);
  let ly = 0, ry = 0, la = 0, ra = 0, bodyY = 0, tilt = 0, roll = 0, laZ = 0.12, raZ = -0.12;
  P.stars.visible = st === 'ko';
  if (st === 'run') { const w = Math.sin(P.walk); ly = w * 0.9; ry = -w * 0.9; la = -w * 0.8; ra = w * 0.8; bodyY = Math.abs(Math.cos(P.walk)) * 0.07; tilt = 0.12; }
  else if (st === 'jump') { ly = -0.5; ry = 0.3; la = -2.6; ra = -2.6; laZ = 0.5; raZ = -0.5; }
  else if (st === 'swim') { const w = Math.sin(t * 6); la = -2.4 + w; ra = -2.4 - w; ly = w * 0.5; ry = -w * 0.5; tilt = 1.1; bodyY = -0.6; }
  else if (st === 'ko') { tilt = -1.45; bodyY = 0.18; la = -2.8; ra = -2.8; laZ = 0.6; raZ = -0.6; P.stars.rotation.y += dt * 4; }
  else if (st === 'cover') { bodyY = -0.42; ly = -1.3; ry = -1.3; la = -2.9; ra = -2.9; laZ = 0.35; raZ = -0.35; tilt = 0.35; }
  else if (st === 'float') { const w = Math.sin(t * 4); la = -2.5 + w * 0.4; ra = -2.5 - w * 0.4; ly = w * 0.6; ry = -w * 0.6; roll = Math.sin(t * 2) * 0.4; }
  else if (st === 'panic') { const w = Math.sin(t * 16); la = -2.9 + w * 0.3; ra = -2.9 - w * 0.3; ly = Math.sin(t * 14) * 0.7; ry = -ly; bodyY = Math.abs(w) * 0.05; }
  else { const w = Math.sin(t * 2); bodyY = w * 0.015; la = w * 0.05; ra = -w * 0.05; }
  const k = Math.min(1, dt * 14), lp = (o, v) => o + (v - o) * k;
  L[0].rotation.x = lp(L[0].rotation.x, ly); L[1].rotation.x = lp(L[1].rotation.x, ry);
  A[0].rotation.x = lp(A[0].rotation.x, la); A[1].rotation.x = lp(A[1].rotation.x, ra);
  A[0].rotation.z = lp(A[0].rotation.z, -laZ); A[1].rotation.z = lp(A[1].rotation.z, -raZ);
  b.position.y = lp(b.position.y, bodyY); b.rotation.x = lp(b.rotation.x, tilt); b.rotation.z = lp(b.rotation.z, roll);
  if (st === 'ko') b.position.z = lp(b.position.z, -0.7); else b.position.z = lp(b.position.z, 0);
  P.mouth.scale.y = st === 'panic' || st === 'ko' || st === 'float' ? -1.4 : 1;
}

/* ---------------- scenery ---------------- */
const greens = [0x4caf50, 0x5cbf4a, 0x3f9e44, 0x6cc24a];
// static prop colliders/heights collected while a map is built (townsfolk avoid them, flood water foams around them)
export const PROPS = [];
export const prop = (x, z, r, top) => PROPS.push({ x, z, r, top });
export function addTree(B, x, y, z, s = 1, kind = 'round', seed = 0) {
  PROPS.push({ x, z, r: kind === 'cactus' ? 0.45 * s : 0.4 * s, top: y + (kind === 'pine' ? 3.6 : kind === 'palm' ? 4.2 : kind === 'cactus' ? 2.2 : 3.6) * s, tree: kind, s, y });
  if (kind === 'round') PROPS.push({ x, z, r: 0, canopy: 1.5 * s, top: y + 3.9 * s });
  const trunk = M(0x8a5a35, { r: 0.85 });
  if (kind === 'round') {
    B.mesh(GEO.cyl(0.18, 0.28, 2.4, 10), trunk, x, y + 1.2 * s, z, 0, 0, 0, s, s, s);
    const leaf = M(greens[seed % 4], { r: 0.75 });
    [[0, 3.1, 0, 1.45], [0.8, 2.6, 0.3, 1.0], [-0.7, 2.7, -0.3, 1.05], [0.1, 2.5, -0.85, 0.95], [-0.2, 3.9, 0.2, 0.9]].forEach((p, i) =>
      B.mesh(GEO.sphere(1, 18, 12), leaf, x + p[0] * s, y + p[1] * s, z + p[2] * s, 0, i, 0, p[3] * s, p[3] * s * 0.9, p[3] * s));
  } else if (kind === 'pine') {
    B.mesh(GEO.cyl(0.15, 0.25, 1.6, 10), trunk, x, y + 0.8 * s, z, 0, 0, 0, s, s, s);
    const leaf = M([0x2f7d4a, 0x2a6e43, 0x358a52][seed % 3], { r: 0.8 });
    [[1.6, 1.8, 1.4], [1.25, 1.6, 2.5], [0.85, 1.4, 3.5]].forEach((p) => B.mesh(GEO.cone(1, 1, 20), leaf, x, y + p[2] * s, z, 0, seed, 0, p[0] * s, p[1] * s, p[0] * s));
  } else if (kind === 'palm') {
    const tr = M(0xa07a4f, { r: 0.85 });
    for (let i = 0; i < 6; i++) B.mesh(GEO.cyl(0.17 - i * 0.012, 0.2 - i * 0.012, 0.85, 10), tr, x + Math.sin(i * 0.25) * 0.5 * s, y + (0.42 + i * 0.8) * s, z, 0, 0, -0.08 * i, s, s, s);
    const top = [x + Math.sin(1.5) * 0.5 * s + 0.15 * s, y + 4.9 * s, z], leaf = M(0x3fa34d, { r: 0.7 });
    for (let i = 0; i < 7; i++) { const a = i / 7 * 6.283 + seed; B.mesh(GEO.sphere(1, 16, 8), leaf, top[0] + Math.cos(a) * 1.0 * s, top[1] - 0.25 * s, top[2] + Math.sin(a) * 1.0 * s, 0, -a, 0.45, 1.3 * s, 0.12 * s, 0.38 * s); }
    [0, 2, 4].forEach((i) => B.mesh(GEO.sphere(0.17, 12, 8), M(0x6b4423, { r: 0.6 }), top[0] + Math.cos(i) * 0.2 * s, top[1] - 0.3 * s, top[2] + Math.sin(i) * 0.2 * s));
  } else if (kind === 'cactus') {
    const c = M(0x4f9a5a, { r: 0.7 });
    B.mesh(GEO.cap(0.35, 2.2, 14), c, x, y + 1.45 * s, z, 0, 0, 0, s, s, s);
    B.mesh(GEO.cap(0.22, 0.8, 12), c, x + 0.6 * s, y + 1.9 * s, z, 0, 0, 0, s, s, s); B.mesh(GEO.cap(0.2, 0.5, 12), c, x + 0.38 * s, y + 1.45 * s, z, 0, 0, Math.PI / 2, s, s, s);
    B.mesh(GEO.cap(0.2, 0.6, 12), c, x - 0.55 * s, y + 2.3 * s, z, 0, 0, 0, s, s, s); B.mesh(GEO.cap(0.18, 0.4, 12), c, x - 0.35 * s, y + 1.95 * s, z, 0, 0, Math.PI / 2, s, s, s);
  }
}
export function addRock(B, x, y, z, s = 1, seed = 1, color = 0x9a8f86) { prop(x, z, 0.7 * s, y + 0.8 * s); B.mesh(GEO.rock(seed % 6, 1), M(color, { r: 0.9 }), x, y + 0.3 * s, z, 0, seed, 0, s, s, s); }
export function addCar(B, x, y, z, ry, color) {
  if (x || z) { const dx = Math.sin(ry), dz = Math.cos(ry); prop(x + dx * 1.1, z + dz * 1.1, 1.05, y + 1.6); prop(x - dx * 1.1, z - dz * 1.1, 1.05, y + 1.6); }
  const g = new THREE.Group(), body = M(color, { r: 0.3, cc: 1, ccr: 0.1, m: 0.2 }), glass = M(0x203040, { r: 0.05, m: 0.5, cc: 1 }), tire = M(0x1c1f24, { r: 0.85 }), hub = M(0xd6dbe0, { r: 0.2, m: 1 });
  const add = (geo, m, px, py, pz, rx = 0, rz = 0) => B.add(geo, m, new THREE.Matrix4().makeRotationY(ry).multiply(mat4(px, py, pz, rx, 0, rz)).premultiply(new THREE.Matrix4().makeTranslation(x, y, z)));
  add(GEO.rbox(1.9, 0.75, 4.1, 0.3), body, 0, 0.75, 0);
  add(GEO.rbox(1.65, 0.65, 2.2, 0.28), body, 0, 1.35, -0.25);
  add(GEO.rbox(1.68, 0.5, 2.0, 0.22), glass, 0, 1.38, -0.25);
  [[-0.88, 1.3], [0.88, 1.3], [-0.88, -1.35], [0.88, -1.35]].forEach((w) => { add(GEO.cyl(0.38, 0.38, 0.3, 20), tire, w[0], 0.38, w[1], 0, Math.PI / 2); add(GEO.cyl(0.2, 0.2, 0.32, 16), hub, w[0], 0.38, w[1], 0, Math.PI / 2); });
  [-0.6, 0.6].forEach((lx) => add(GEO.sphere(0.13, 12, 8), M(0xfff6cc, { e: 0xfff1b0, ei: 1.2 }), lx, 0.85, 2.04));
  [-0.65, 0.65].forEach((lx) => add(GEO.rbox(0.3, 0.12, 0.05, 0.03), M(0xff2a2a, { e: 0xff0000, ei: 0.8 }), lx, 0.9, -2.06));
  return g;
}
export function addLamp(B, x, y, z) {
  prop(x, z, 0.2, y + 4.2);
  const pole = M(0x3d4450, { r: 0.4, m: 0.7 });
  B.mesh(GEO.cyl(0.07, 0.1, 4.2, 10), pole, x, y + 2.1, z);
  B.mesh(GEO.cap(0.06, 0.8, 8), pole, x + 0.4, y + 4.2, z, 0, 0, Math.PI / 2);
  B.mesh(GEO.sphere(0.22, 16, 10), M(0xfff3c4, { e: 0xffe9a0, ei: 1.5 }), x + 0.8, y + 4.05, z);
}
export function addBench(B, x, y, z, ry) {
  prop(x, z, 0.9, y + 0.9);
  const w = M(0xb07a45, { r: 0.7 }), m = M(0x30343a, { r: 0.5, m: 0.6 });
  const T = (gx, gy, gz) => { const v = new THREE.Vector3(gx, gy, gz).applyAxisAngle(new THREE.Vector3(0, 1, 0), ry); return [x + v.x, y + v.y, z + v.z]; };
  [0.45, 0.65].forEach((dz, i) => { const p = T(0, 0.5 + i * 0.35, -0.2 + i * 0.25 - 0.1); B.add(GEO.rbox(1.8, 0.08, 0.28, 0.03), w, mat4(p[0], p[1], p[2], i ? -0.3 : 0, ry, 0)); });
  [-0.75, 0.75].forEach((dx) => { const p = T(dx, 0.25, -0.1); B.add(GEO.rbox(0.08, 0.5, 0.5, 0.02), m, mat4(p[0], p[1], p[2], 0, ry, 0)); });
}

/* ---------------- kaiju: "ROARGON" (original monster) ---------------- */
export function makeKaiju() {
  const root = new THREE.Group(), K = { root };
  const skin = M(0x7b5cd6, { r: 0.35, cc: 0.7, ccr: 0.3 }), belly = M(0xf7d27e, { r: 0.5, cc: 0.3 }), dark = M(0x4a3596, { r: 0.4, cc: 0.5 });
  const spikeM = K.spikeM = new THREE.MeshStandardMaterial({ color: 0x5ff3ff, emissive: 0x22d3ee, emissiveIntensity: 0.6, roughness: 0.2, metalness: 0.1 });
  const body = K.body = new THREE.Group(); body.position.y = 8; root.add(body);
  mesh(GEO.sphere(4.2, 40, 28), skin, 0, 0, 0, body).scale.set(1, 1.25, 0.95);
  mesh(GEO.sphere(3.4, 32, 24), belly, 0, -0.6, 1.25, body).scale.set(0.95, 1.2, 0.75);
  // head
  const head = K.head = new THREE.Group(); head.position.set(0, 5.6, 1.3); body.add(head);
  mesh(GEO.sphere(2.6, 36, 26), skin, 0, 0.4, 0, head).scale.set(1, 0.92, 1);
  mesh(GEO.sphere(1.7, 32, 22), skin, 0, -0.05, 2.0, head).scale.set(1.05, 0.7, 1.15);
  [-1, 1].forEach((s) => {
    mesh(GEO.sphere(0.85, 24, 18), M(0xffffff, { r: 0.15, cc: 1 }), s * 1.05, 1.15, 1.75, head).scale.set(1, 1.1, 0.7);
    mesh(GEO.sphere(0.45, 20, 14), M(0x14101f, { r: 0.1, cc: 1 }), s * 1.0, 1.15, 2.25, head).scale.set(1, 1.2, 0.6);
    mesh(GEO.sphere(0.13, 10, 8), M(0xffffff, { e: 0xffffff }), s * 0.9, 1.35, 2.48, head);
    mesh(GEO.cap(0.18, 0.9, 10), dark, s * 1.05, 2.05, 1.6, head).rotation.z = s * 0.35;
    mesh(GEO.sphere(0.22, 12, 8), dark, s * 0.5, 0.1, 3.4, head);
  });
  const jaw = K.jaw = new THREE.Group(); jaw.position.set(0, -0.55, 0.6); head.add(jaw);
  mesh(GEO.sphere(1.6, 30, 20), skin, 0, -0.35, 1.25, jaw).scale.set(1.0, 0.45, 1.1);
  mesh(GEO.sphere(1.3, 24, 16), M(0xd9485f, { r: 0.6 }), 0, -0.05, 1.3, jaw).scale.set(0.95, 0.25, 1.0);
  for (let i = -2; i <= 2; i++) if (i) mesh(GEO.cone(0.16, 0.42, 10), M(0xffffff, { r: 0.3 }), i * 0.45, 0.22, 2.25 - Math.abs(i) * 0.25, jaw);
  // arms
  K.arms = [-1, 1].map((s) => { const p = new THREE.Group(); p.position.set(s * 3.3, 1.8, 1.6); body.add(p); mesh(GEO.cap(0.75, 2.0, 16), skin, 0, -1.1, 0.4, p).rotation.x = -0.6; for (let i = -1; i <= 1; i++) mesh(GEO.cone(0.2, 0.55, 10), M(0xfff3d6), i * 0.3, -2.2, 1.6, p).rotation.x = 1.8; return p; });
  // legs
  K.legs = [-1, 1].map((s) => { const p = new THREE.Group(); p.position.set(s * 2.5, -3.2, 0); body.add(p); mesh(GEO.cap(1.45, 2.4, 20), skin, 0, -2.0, 0, p); const f = mesh(GEO.sphere(1.7, 24, 16), dark, 0, -4.5, 0.6, p); f.scale.set(1, 0.5, 1.35); for (let i = -1; i <= 1; i++) mesh(GEO.cone(0.32, 0.8, 12), M(0xfff3d6), i * 0.65, -4.6, 2.6, p).rotation.x = Math.PI / 2; return p; });
  // tail
  const tail = K.tail = []; let par = body, z = -3.4, y = -2.4;
  for (let i = 0; i < 7; i++) { const sg = new THREE.Group(); sg.position.set(0, i ? -0.25 : y, i ? -1.55 : z); par.add(sg); mesh(GEO.sphere(1.7 - i * 0.2, 24, 16), skin, 0, 0, -0.6, sg).scale.set(1, 0.9, 1.25); if (i < 6) mesh(GEO.cone(0.45 - i * 0.05, 1.2 - i * 0.1, 10), spikeM, 0, 1.4 - i * 0.18, -0.6, sg); tail.push(sg); par = sg; }
  // glowing back crystals
  K.spikes = [];
  for (let i = 0; i < 6; i++) { const s = mesh(GEO.cone(0.55 + (i < 3 ? 0.25 : 0), 2.2 - i * 0.2, 6), spikeM, 0, 4.3 - i * 1.3, -3.0 - Math.sin(i / 5 * 1.5) * 1.1, body); s.rotation.x = -0.4 - i * 0.12; K.spikes.push(s); }
  // breath beam
  const beam = K.beam = new THREE.Group(); beam.visible = false; head.add(beam); beam.position.set(0, -0.2, 2.8);
  const bc = mesh(GEO.cyl(0.9, 0.9, 1, 20), glow(0x7df9ff, 0.7), 0, 0, 0, beam, false); bc.rotation.x = Math.PI / 2; bc.position.z = 0.5;
  const bc2 = mesh(GEO.cyl(0.45, 0.45, 1, 16), basic(0xffffff), 0, 0, 0, beam, false); bc2.rotation.x = Math.PI / 2; bc2.position.z = 0.5;
  K.beamLen = (L) => { beam.scale.set(1, 1, L); };
  root.traverse((o) => { if (o.isMesh) o.castShadow = o.castShadow !== false; });
  K.t = 0; return K;
}
import { basic } from './mats.js';
export function animKaiju(K, dt, walking, roar, charge) {
  K.t += dt * (walking ? 1 : 0.35);
  const w = Math.sin(K.t * 2.2);
  K.legs[0].rotation.x = w * 0.45; K.legs[1].rotation.x = -w * 0.45;
  K.arms[0].rotation.x = -w * 0.3 - (roar ? 0.9 : 0); K.arms[1].rotation.x = w * 0.3 - (roar ? 0.9 : 0);
  K.body.position.y = 8 + Math.abs(Math.cos(K.t * 2.2)) * 0.5 * (walking ? 1 : 0.2);
  K.body.rotation.z = w * 0.06; K.body.rotation.x = roar ? -0.15 : 0.04;
  K.tail.forEach((s, i) => { s.rotation.y = Math.sin(K.t * 1.6 - i * 0.6) * 0.18; s.rotation.x = 0.06; });
  K.jaw.rotation.x += ((roar || charge > 0.5 ? 0.75 : 0.08) - K.jaw.rotation.x) * Math.min(1, dt * 8);
  K.spikeM.emissiveIntensity = 0.5 + charge * 4 + (roar ? 1 : 0);
}

/* ---------------- UFO ---------------- */
export function makeUFO() {
  const g = new THREE.Group();
  const pts = []; for (let i = 0; i <= 20; i++) { const t = i / 20, a = t * Math.PI; pts.push(new THREE.Vector2(Math.max(0.01, Math.sin(a) * 4.2 * (1 - 0.12 * Math.sin(a * 3))), (t - 0.5) * 1.4 * (1 - Math.sin(a) * 0.3))); }
  mesh(new THREE.LatheGeometry(pts, 48), M(0xc7d0dc, { r: 0.18, m: 0.9 }), 0, 0, 0, g);
  mesh(GEO.torus(4.0, 0.22, 6.28, 12, 64), M(0x8892a0, { r: 0.25, m: 0.9 }), 0, 0, 0, g).rotation.x = Math.PI / 2;
  mesh(new THREE.SphereGeometry(1.9, 32, 16, 0, 6.283, 0, Math.PI / 2), M(0x9be7ff, { r: 0.05, op: 0.35, cc: 1 }), 0, 0.45, 0, g, false);
  // pilot
  const al = M(0x7ee06b, { r: 0.4, cc: 0.4 }); mesh(GEO.sphere(0.65, 24, 16), al, 0, 1.25, 0, g).scale.set(1, 1.2, 1);
  [-1, 1].forEach((s) => mesh(GEO.sphere(0.24, 16, 10), M(0x0b0b12, { r: 0.05, cc: 1 }), s * 0.25, 1.35, 0.5, g).scale.set(1, 1.4, 0.6));
  const lights = new THREE.Group(); g.add(lights);
  for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; mesh(GEO.sphere(0.22, 10, 8), M(i % 2 ? 0xff4fd8 : 0x3ff0ff, { e: i % 2 ? 0xff4fd8 : 0x3ff0ff, ei: 2 }), Math.cos(a) * 3.6, -0.25, Math.sin(a) * 3.6, lights, false); }
  mesh(GEO.cyl(1.2, 1.5, 0.4, 32), M(0xb6fffa, { e: 0x5ff3ff, ei: 1.5 }), 0, -0.7, 0, g, false);
  const beam = mesh(new THREE.CylinderGeometry(1.2, 3.2, 1, 32, 1, true), glow(0x9dffb0, 0.22), 0, -0.5, 0, g, false); beam.geometry.translate(0, -0.5, 0);
  g.userData = { lights, beam };
  return g;
}
/* ---------------- meteor ---------------- */
export function makeMeteor(s) {
  const g = new THREE.Group();
  mesh(GEO.rock(3, 1), M(0x4a3b33, { r: 0.85, e: 0x5a1a00, ei: 0.6 }), 0, 0, 0, g).scale.setScalar(s);
  mesh(GEO.sphere(1.35, 20, 14), glow(0xff7a2a, 0.45), 0, 0, 0, g, false).scale.setScalar(s);
  return g;
}
export function makeCoin() {
  const g = new THREE.Group(), gold = M(0xffc83d, { r: 0.22, m: 1, e: 0x6b4500, ei: 0.35 });
  mesh(GEO.cyl(0.42, 0.42, 0.1, 32), gold, 0, 0, 0, g).rotation.x = Math.PI / 2;
  mesh(GEO.torus(0.42, 0.05, 6.28, 8, 32), gold, 0, 0, 0, g);
  mesh(GEO.star(0.22, 0.04), M(0xfff1a8, { r: 0.2, m: 1 }), 0, 0, 0.07, g);
  return g;
}
export function makeStarPickup() { const g = new THREE.Group(); mesh(GEO.star(0.6, 0.22), M(0xfff07a, { e: 0xffc400, ei: 1.2, r: 0.25 }), 0, 0, 0, g); return g; }
export { mergeGeometries };

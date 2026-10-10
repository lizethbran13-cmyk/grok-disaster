// "set dressing" pass: props, foliage, decals, signage, horizon backdrops - all merged into a few draw calls.
// D (fine detail: flowers, grass, pebbles) lives in W.detail and is hidden on LOW graphics.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Batch, GEO, mat4, addTree, addRock, prop } from './models.js';
import { M } from './mats.js';

const greens = [0x5cc05a, 0x4caf50, 0x7ed957, 0x3fa34d];
const flowerC = [0xff4d6d, 0xffd60a, 0xffffff, 0xc77dff, 0xff8fab, 0x4cc9f0, 0xff9f1c];
/* ---------- sign atlas: all text signs of a map share ONE canvas texture + ONE mesh ---------- */
class Signs {
  constructor() { this.cv = document.createElement('canvas'); this.cv.width = 1024; this.cv.height = 1024; this.ctx = this.cv.getContext('2d'); this.n = 0; this.geos = []; }
  slot(text, bg, fg = '#ffffff') {
    const i = this.n++; if (i >= 32) return null;
    const x = (i % 2) * 512, y = Math.floor(i / 2) * 64, c = this.ctx;
    c.fillStyle = '#' + bg.toString(16).padStart(6, '0'); c.beginPath(); c.roundRect(x + 3, y + 3, 506, 58, 14); c.fill();
    c.strokeStyle = 'rgba(255,255,255,0.85)'; c.lineWidth = 4; c.beginPath(); c.roundRect(x + 8, y + 8, 496, 48, 10); c.stroke();
    let fs = 40; c.font = `900 ${fs}px "Arial Black", Arial, sans-serif`; while (c.measureText(text).width > 470 && fs > 16) { fs -= 2; c.font = `900 ${fs}px "Arial Black", Arial, sans-serif`; }
    c.fillStyle = 'rgba(0,0,0,0.25)'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, x + 258, y + 35);
    c.fillStyle = fg; c.fillText(text, x + 256, y + 33);
    return [x / 1024, 1 - (y + 64) / 1024, 512 / 1024, 64 / 1024];
  }
  add(text, bg, w, m, fg) { // plane w x w/8 facing +z, transformed by matrix m
    const s = this.slot(text, bg, fg); if (!s) return;
    const g = new THREE.PlaneGeometry(w, w / 8), uv = g.attributes.uv;
    for (let k = 0; k < uv.count; k++) uv.setXY(k, s[0] + uv.getX(k) * s[2], s[1] + uv.getY(k) * s[3]);
    g.applyMatrix4(m); this.geos.push(g);
  }
  build(parent) {
    if (!this.geos.length) return;
    const tex = new THREE.CanvasTexture(this.cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    const mat = new THREE.MeshStandardMaterial({ map: tex, emissiveMap: tex, emissive: 0xffffff, emissiveIntensity: 0.35, roughness: 0.45, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(mergeGeometries(this.geos), mat); mesh.receiveShadow = true; parent.add(mesh); this.mesh = mesh;
  }
}
const mx = (x, y, z, ry = 0) => mat4(x, y, z, 0, ry, 0);
/* ---------- little prop builders ---------- */
function flower(D, x, y, z, c) { D.mesh(GEO.cyl(0.025, 0.03, 0.42, 5), M(0x3fa34d, { r: 0.8 }), x, y + 0.21, z); D.mesh(GEO.sphere(0.13, 8, 6), M(c, { r: 0.6 }), x, y + 0.46, z, 0, 0, 0, 1, 0.6, 1); D.mesh(GEO.sphere(0.055, 6, 4), M(0xffd60a, { r: 0.5 }), x, y + 0.52, z); }
function tuft(D, x, y, z, c, s = 1) { for (let k = 0; k < 3; k++) D.mesh(GEO.cone(0.07 * s, 0.55 * s, 5), M(c, { r: 0.85 }), x + (k - 1) * 0.09 * s, y + 0.25 * s, z + (k % 2) * 0.06, (k - 1) * 0.35, 0, (k - 1) * 0.3); }
function bush(B, x, y, z, s = 1, c = 0x4caf50, dots) { prop(x, z, 0.8 * s, y + 1); [[0, 0.55, 0, 0.75], [0.55, 0.42, 0.15, 0.55], [-0.5, 0.45, -0.1, 0.6], [0.1, 0.4, -0.5, 0.5]].forEach((p) => B.mesh(GEO.sphere(1, 12, 9), M(c, { r: 0.8 }), x + p[0] * s, y + p[1] * s, z + p[2] * s, 0, 0, 0, p[3] * s, p[3] * s * 0.85, p[3] * s)); if (dots) for (let k = 0; k < 5; k++) { const a = k * 1.3; B.mesh(GEO.sphere(0.09 * s, 6, 4), M(dots, { r: 0.5 }), x + Math.cos(a) * 0.62 * s, y + (0.5 + (k % 2) * 0.3) * s, z + Math.sin(a) * 0.62 * s); } }
function hydrant(B, x, y, z) { prop(x, z, 0.3, y + 1); const r = M(0xef233c, { r: 0.4, cc: 0.6 }); B.mesh(GEO.cyl(0.18, 0.2, 0.7, 12), r, x, y + 0.35, z); B.mesh(GEO.sphere(0.19, 12, 8), r, x, y + 0.72, z); B.mesh(GEO.cyl(0.07, 0.07, 0.5, 8), M(0xffd60a, { r: 0.4 }), x, y + 0.48, z, 0, 0, Math.PI / 2); }
function trash(B, x, y, z, c = 0x2a9d8f) { prop(x, z, 0.4, y + 1); B.mesh(GEO.cyl(0.32, 0.27, 0.9, 14), M(c, { r: 0.5 }), x, y + 0.45, z); B.mesh(GEO.cyl(0.36, 0.36, 0.08, 14), M(0x264653, { r: 0.5 }), x, y + 0.93, z); }
function mailbox(B, x, y, z, ry = 0) { prop(x, z, 0.35, y + 1); const b = M(0x3a86ff, { r: 0.4, cc: 0.6 }); B.mesh(GEO.rbox(0.55, 0.75, 0.5, 0.12), b, x, y + 0.75, z, 0, ry); B.mesh(GEO.cyl(0.05, 0.05, 0.45, 6), M(0x334155), x, y + 0.2, z); }
function cone(B, x, y, z) { prop(x, z, 0.25, y + 1); B.mesh(GEO.cone(0.22, 0.65, 12), M(0xff7b00, { r: 0.5 }), x, y + 0.33, z); B.mesh(GEO.cyl(0.155, 0.17, 0.1, 12), M(0xffffff, { r: 0.5 }), x, y + 0.3, z); B.mesh(GEO.box(0.5, 0.05, 0.5), M(0xff7b00, { r: 0.5 }), x, y + 0.025, z); }
function barrel(B, x, y, z, c = 0xffca3a) { prop(x, z, 0.45, y + 1); B.mesh(GEO.cyl(0.38, 0.38, 1.1, 14), M(c, { r: 0.45, m: 0.3 }), x, y + 0.55, z); B.mesh(GEO.cyl(0.4, 0.4, 0.12, 14), M(0x222222, { r: 0.5 }), x, y + 0.75, z); B.mesh(GEO.cyl(0.4, 0.4, 0.12, 14), M(0x222222, { r: 0.5 }), x, y + 0.3, z); }
function crate(B, x, y, z, s = 1, ry = 0) { prop(x, z, 0.6 * s, y + 1); B.mesh(GEO.rbox(s, s, s, 0.06 * s), M(0xd4a373, { r: 0.8 }), x, y + s / 2, z, 0, ry); B.mesh(GEO.box(s * 1.02, s * 0.14, s * 1.02), M(0xa47148, { r: 0.8 }), x, y + s / 2, z, 0, ry); }
function planter(B, D, x, y, z) { prop(x, z, 0.9, y + 1); B.mesh(GEO.rbox(1.6, 0.6, 1.6, 0.12), M(0xe9c46a, { r: 0.6 }), x, y + 0.3, z); B.mesh(GEO.box(1.4, 0.05, 1.4), M(0x6b4423, { r: 0.9 }), x, y + 0.6, z); bush(B, x, y + 0.5, z, 0.7, greens[(x * 7 + z) & 3], flowerC[(x * 3 + z * 5 & 7) % 7]); }
function umbrellaCart(B, x, y, z, c) { prop(x, z, 1.0, y + 1); B.mesh(GEO.rbox(1.8, 1, 1, 0.12), M(0xffffff, { r: 0.4, cc: 0.5 }), x, y + 0.8, z); B.mesh(GEO.rbox(1.82, 0.2, 1.02, 0.06), M(c, { r: 0.5 }), x, y + 1.05, z); [[-0.6, 0.45], [0.6, -0.45]].forEach((w) => B.mesh(GEO.cyl(0.25, 0.25, 0.12, 14), M(0x1c1f24), x + w[0], y + 0.25, z + w[1] * 1.1, Math.PI / 2)); B.mesh(GEO.cyl(0.04, 0.04, 1.6, 6), M(0xdddddd), x, y + 2.0, z); B.add(GEO.cone(1.3, 0.5, 8), M(c, { r: 0.5 }), mx(x, y + 2.8, z)); }
function balloon(B, x, y, z, c, h = 3) { B.mesh(GEO.sphere(0.4, 14, 10), M(c, { r: 0.25, cc: 1 }), x, y + h, z, 0, 0, 0, 1, 1.2, 1); B.mesh(GEO.cyl(0.01, 0.01, h - 0.4, 4), M(0xffffff), x, y + (h - 0.4) / 2 + 0.2, z); }
function sandcastle(B, x, y, z) { prop(x, z, 1.2, y + 1); const s = M(0xf4d58d, { r: 0.95 }); B.mesh(GEO.cyl(0.9, 1.1, 0.6, 14), s, x, y + 0.3, z); B.mesh(GEO.cyl(0.55, 0.65, 0.6, 12), s, x, y + 0.9, z); [[-0.8, 0], [0.8, 0], [0, 0.8], [0, -0.8]].forEach((q) => { B.mesh(GEO.cyl(0.25, 0.28, 0.8, 10), s, x + q[0], y + 0.4, z + q[1]); B.mesh(GEO.cone(0.3, 0.4, 10), M(0xe9b872, { r: 0.95 }), x + q[0], y + 1.0, z + q[1]); }); B.mesh(GEO.cyl(0.015, 0.015, 0.7, 4), M(0x8b5e34), x, y + 1.5, z); B.add(GEO.box(0.35, 0.22, 0.02), M(0xff006e, { r: 0.5 }), mx(x + 0.18, y + 1.75, z)); }
function towel(B, x, y, z, c, ry) { B.mesh(GEO.box(1.1, 0.04, 2.0), M(c, { r: 0.9 }), x, y + 0.03, z, 0, ry); B.mesh(GEO.box(1.12, 0.045, 0.3), M(0xffffff, { r: 0.9 }), x, y + 0.035, z, 0, ry); }
function starfish(D, x, y, z, c) { for (let k = 0; k < 5; k++) { const a = k / 5 * 6.283; D.mesh(GEO.cone(0.08, 0.32, 5), M(c, { r: 0.6 }), x + Math.cos(a) * 0.13, y + 0.04, z + Math.sin(a) * 0.13, Math.PI / 2, 0, -a + Math.PI / 2); } }
function surfboard(B, x, y, z, c, ry) { prop(x, z, 0.3, y + 1); B.mesh(GEO.sphere(1, 14, 10), M(c, { r: 0.3, cc: 1 }), x, y + 1.0, z, 0.15, ry, 0, 0.35, 1.1, 0.08); B.mesh(GEO.sphere(1, 10, 6), M(0xffffff, { r: 0.3 }), x, y + 1.0, z + 0.01, 0.15, ry, 0, 0.06, 1.05, 0.085); }
function chair(B, x, y, z, c, ry) { prop(x, z, 0.6, y + 1); B.mesh(GEO.rbox(0.7, 0.08, 1.2, 0.03), M(c, { r: 0.6 }), x, y + 0.35, z, 0, ry); B.add(GEO.rbox(0.7, 0.08, 0.8, 0.03), M(c, { r: 0.6 }), mat4(x - Math.sin(ry) * 0.75, y + 0.65, z - Math.cos(ry) * 0.75, -0.9, ry, 0)); }
function buoy(B, x, y, z) { B.mesh(GEO.sphere(0.45, 14, 10), M(0xef233c, { r: 0.4, cc: 0.6 }), x, y, z); B.mesh(GEO.cyl(0.47, 0.47, 0.2, 14), M(0xffffff, { r: 0.4 }), x, y, z); }
function mushroom(D, x, y, z, s = 1) { D.mesh(GEO.cyl(0.07 * s, 0.09 * s, 0.3 * s, 8), M(0xfff1d6, { r: 0.7 }), x, y + 0.15 * s, z); D.add(new THREE.SphereGeometry(0.22 * s, 12, 6, 0, 6.283, 0, Math.PI / 2), M(0xe63946, { r: 0.4, cc: 0.6 }), mx(x, y + 0.28 * s, z)); for (let k = 0; k < 3; k++) D.mesh(GEO.sphere(0.035 * s, 6, 4), M(0xffffff), x + Math.cos(k * 2.1) * 0.12 * s, y + 0.44 * s, z + Math.sin(k * 2.1) * 0.12 * s); }
function stump(B, x, y, z) { prop(x, z, 0.5, y + 1); B.mesh(GEO.cyl(0.4, 0.5, 0.5, 14), M(0x8b5a2b, { r: 0.9 }), x, y + 0.25, z); B.mesh(GEO.cyl(0.38, 0.38, 0.02, 14), M(0xe9c891, { r: 0.8 }), x, y + 0.51, z); }
function logPile(B, x, y, z, ry) { prop(x, z, 1.1, y + 1); for (let k = 0; k < 6; k++) { const row = k < 3 ? 0 : k < 5 ? 1 : 2, i = row === 0 ? k : row === 1 ? k - 3 : 0; const lx = (i - (row === 0 ? 1 : row === 1 ? 0.5 : 0)) * 0.42; const v = new THREE.Vector3(lx, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), ry); B.mesh(GEO.cyl(0.2, 0.2, 2, 10), M(k % 2 ? 0xa0522d : 0xb5651d, { r: 0.85 }), x + v.x, y + 0.2 + row * 0.36, z + v.z, Math.PI / 2, ry, 0); } }
function picnic(B, x, y, z, ry) { prop(x, z, 1.2, y + 1); const w = M(0xc97c3a, { r: 0.75 }); B.mesh(GEO.rbox(2, 0.1, 0.9, 0.03), w, x, y + 0.75, z, 0, ry); [-1, 1].forEach((s) => { const v = new THREE.Vector3(0, 0, s * 0.75).applyAxisAngle(new THREE.Vector3(0, 1, 0), ry); B.mesh(GEO.rbox(2, 0.08, 0.32, 0.03), w, x + v.x, y + 0.42, z + v.z, 0, ry); }); B.mesh(GEO.box(0.1, 0.75, 1.8), M(0x8b5a2b), x, y + 0.37, z, 0, ry); B.mesh(GEO.box(1.6, 0.06, 0.95), M(0xff595e, { r: 0.9 }), x, y + 0.81, z, 0, ry); }
function hay(B, x, y, z) { prop(x, z, 0.7, y + 1); B.mesh(GEO.cyl(0.65, 0.65, 1.1, 16), M(0xe9c46a, { r: 0.95 }), x, y + 0.65, z, Math.PI / 2, x); }
function sandbag(B, x, y, z, ry) { prop(x, z, 1.0, y + 1); for (let k = 0; k < 5; k++) { const v = new THREE.Vector3((k % 3 - 1) * 0.62 + (k > 2 ? 0.31 : 0), 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), ry); B.mesh(GEO.cap(0.18, 0.4, 8), M(0xc2a878, { r: 0.95 }), x + v.x, y + 0.2 + (k > 2 ? 0.34 : 0), z + v.z, 0, ry, Math.PI / 2); } }
function dish(B, x, y, z, ry) { prop(x, z, 0.5, y + 1); B.mesh(GEO.cyl(0.08, 0.12, 1.4, 8), M(0x9aa5b1, { m: 0.6, r: 0.4 }), x, y + 0.7, z); B.add(new THREE.SphereGeometry(1, 20, 8, 0, 6.283, 0, 1.0), M(0xf1f5f9, { r: 0.35, m: 0.3, side: THREE.DoubleSide }), mat4(x, y + 1.9, z, -0.9, ry, 0, 1, 0.45, 1)); }
function alienStatue(B, x, y, z, ry) { prop(x, z, 0.7, y + 1); const g = M(0x7cff6b, { r: 0.35, cc: 0.8 }), k = M(0x111111, { r: 0.1, cc: 1 }); B.mesh(GEO.cap(0.35, 0.7, 12), g, x, y + 0.8, z); B.mesh(GEO.sphere(0.55, 18, 12), g, x, y + 1.75, z, 0, 0, 0, 1, 1.15, 0.95); [-1, 1].forEach((s) => { const v = new THREE.Vector3(s * 0.22, 0, 0.42).applyAxisAngle(new THREE.Vector3(0, 1, 0), ry); B.mesh(GEO.sphere(0.17, 12, 8), k, x + v.x, y + 1.8, z + v.z, 0, ry, s * 0.4, 1, 0.6, 0.6); }); B.mesh(GEO.cyl(0.6, 0.7, 0.3, 16), M(0x6b7280), x, y + 0.15, z); }
function tumble(B, x, y, z, s) { B.add(new THREE.IcosahedronGeometry(0.55 * s, 1), M(0xb08950, { r: 1, flat: true }), mx(x, y + 0.5 * s, z)); }
function succulent(D, x, y, z, c) { for (let k = 0; k < 5; k++) { const a = k * 1.256; D.mesh(GEO.sphere(0.12, 6, 5), M(c, { r: 0.6 }), x + Math.cos(a) * 0.12, y + 0.1, z + Math.sin(a) * 0.12, 0, a, 0.6, 0.6, 1.4, 0.6); } D.mesh(GEO.sphere(0.07, 6, 4), M(0xff4d6d), x, y + 0.24, z); }
function billboard(B, SG, x, y, z, ry, text, col) { prop(x - Math.cos(ry) * 2.4, z + Math.sin(ry) * 2.4, 0.25, y + 3); prop(x + Math.cos(ry) * 2.4, z - Math.sin(ry) * 2.4, 0.25, y + 3); B.mesh(GEO.cyl(0.12, 0.12, 2.6, 8), M(0x334155, { m: 0.6 }), x + Math.cos(ry) * -2.4, y + 1.3, z + Math.sin(ry) * 2.4); B.mesh(GEO.cyl(0.12, 0.12, 2.6, 8), M(0x334155, { m: 0.6 }), x + Math.cos(ry) * 2.4, y + 1.3, z - Math.sin(ry) * 2.4); B.mesh(GEO.rbox(6.4, 1.2, 0.16, 0.08), M(0xffffff, { r: 0.5 }), x, y + 3.1, z, 0, ry); SG.add(text, col, 6.1, new THREE.Matrix4().makeTranslation(x, y + 3.1, z).multiply(new THREE.Matrix4().makeRotationY(ry)).multiply(new THREE.Matrix4().makeTranslation(0, 0, 0.1)), '#ffffff'); }
function busStop(B, SG, x, y, z, ry) { prop(x, z, 1.5, y + 2.5); const P = (lx, lz) => { const v = new THREE.Vector3(lx, 0, lz).applyAxisAngle(new THREE.Vector3(0, 1, 0), ry); return [x + v.x, z + v.z]; }; [[-1.4, -0.5], [1.4, -0.5]].forEach((q) => { const p = P(q[0], q[1]); B.mesh(GEO.cyl(0.06, 0.06, 2.5, 8), M(0x64748b, { m: 0.7 }), p[0], y + 1.25, p[1]); }); const r = P(0, 0); B.mesh(GEO.rbox(3.2, 0.12, 1.4, 0.05), M(0x3a86ff, { r: 0.4 }), r[0], y + 2.5, r[1], 0, ry); const g = P(0, -0.55); B.mesh(GEO.box(3, 1.8, 0.05), M(0xbde0fe, { op: 0.45, r: 0.1 }), g[0], y + 1.5, g[1], 0, ry); const bn = P(0, -0.3); B.mesh(GEO.rbox(2.4, 0.1, 0.4, 0.03), M(0xffb703, { r: 0.6 }), bn[0], y + 0.5, bn[1], 0, ry); SG.add('BUS STOP', 0x3a86ff, 2.6, new THREE.Matrix4().makeTranslation(r[0], y + 2.85, r[1]).multiply(new THREE.Matrix4().makeRotationY(ry))); }
function ringBackdrop(B, id, R) { // distant hills / mesas / skyline / islands beyond the playable area
  const n = 26;
  for (let i = 0; i < n; i++) {
    const a = i / n * 6.283 + R() * 0.15, r = 150 + R() * 40, x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (id === 'area51') { const h = 10 + R() * 18, w = 14 + R() * 18; B.mesh(GEO.cyl(w * 0.8, w, h, 10), M([0xe76f51, 0xf4a261, 0xd9814e][i % 3], { r: 0.9 }), x, h / 2 - 2, z, 0, R() * 3); B.mesh(GEO.cyl(w * 0.82, w * 0.82, 0.8, 10), M(0xc8553d, { r: 0.9 }), x, h - 2, z, 0, R()); }
    else if (id === 'city') { for (let k = 0; k < 3; k++) { const h = 20 + R() * 45, w = 8 + R() * 8; B.mesh(GEO.box(w, h, w), M([0xa0c4ff, 0xbdb2ff, 0xffc6ff, 0x9bf6ff, 0xcaffbf][(i + k) % 5], { r: 0.7 }), x + (k - 1) * 12, h / 2, z + (R() - 0.5) * 8); } }
    else if (id === 'beach') { if (z > 60) { if (i % 3 === 0) { B.mesh(GEO.sphere(1, 16, 8), M(0x7cc96a, { r: 0.9 }), x, -3, z, 0, 0, 0, 14, 7, 10); B.mesh(GEO.sphere(1, 16, 8), M(0xffe2a8, { r: 0.9 }), x, -3.5, z, 0, 0, 0, 17, 4, 13); addTree(B, x, 2.5, z, 1.4, 'palm', i); } } else B.mesh(GEO.sphere(1, 16, 10), M([0x6fcf63, 0x55b84a, 0x8fd46c][i % 3], { r: 0.9 }), x, -2, z, 0, 0, 0, 30 + R() * 20, 14 + R() * 14, 22); }
    else { const h = 30 + R() * 40; B.mesh(GEO.cone(28 + R() * 14, h, 9), M([0x6b8f71, 0x5d7e66, 0x7a9e7e][i % 3], { r: 0.9, flat: true }), x, h / 2 - 3, z, 0, R() * 3); B.mesh(GEO.cone(28 * 0.32, h * 0.32, 9), M(0xf8fafc, { r: 0.8, flat: true }), x, h - 3 - h * 0.16 + 0.5, z, 0, R() * 3); }
  }
}
export function decorate(W, B, root, R, id) {
  const D = new Batch(), SG = new Signs();
  const roadAt = {
    area51: (x, z) => (Math.abs(x) < 5 && z > -52 && z < 48) || (Math.abs(z) < 5 && Math.abs(x) < 52) || Math.abs(z - 52) < 7.5 || Math.hypot(x - 14, z + 12) < 10.5,
    city: (x, z) => [-30, 0, 30].some((v) => Math.abs(x - v) < 5 || Math.abs(z - v) < 5) || Math.hypot(x - 15, z - 15) < 4,
    beach: (x, z) => Math.abs(z - 6) < 4.5 || (Math.abs(x) < 4.5 && z < 6) || (z > 11 && z < 17 && Math.abs(x) < 56) || (x > -34 && x < -26 && z > 20),
    pine: (x, z) => (Math.abs(z) < 4 && Math.abs(x) < 52) || (Math.abs(x) < 4 && Math.abs(z) < 46) || Math.hypot(x - 6, z - 6) < 4 || Math.hypot(x + 38, z - 32) < 11
  }[id];
  const free = (x, z, pad = 1) => !roadAt(x, z) && !W.walls.some((w) => w.y1 > -5 && x > w.x0 - pad && x < w.x1 + pad && z > w.z0 - pad && z < w.z1 + pad) && !W.pads.some((p) => Math.hypot(p.x - x, p.z - z) < 2.5) && !W.plats.some((p) => x > p.x0 - pad && x < p.x1 + pad && z > p.z0 - pad && z < p.z1 + pad);
  const scatter = (n, area, pad, fn, ok) => { let k = 0, t = 0; while (k < n && t++ < n * 30) { const x = (R() - 0.5) * area, z = (R() - 0.5) * area; if (!free(x, z, pad) || (ok && !ok(x, z))) continue; fn(x, W.terrain(x, z), z, k++); } };
  const T = (b, lx, ly, lz) => new THREE.Matrix4().makeTranslation(b.x, b.baseY, b.z).multiply(new THREE.Matrix4().makeRotationY(b.ry)).multiply(new THREE.Matrix4().makeTranslation(lx, ly, lz));
  // shop / building name signs over the door
  for (const b of W.buildings) if (b.sign) SG.add(b.name.toUpperCase(), b.sign, Math.min(b.lw - 1, 4.4) - 0.15, T(b, 0, Math.min(b.ceil, 3.2) + 0.15, b.ld / 2 + 0.2));
  const welcome = (x, z, ry, text, col) => billboard(B, SG, x, W.terrain(x, z), z, Math.atan2(-x, -z), text, col);
  const BK = new Batch(); ringBackdrop(BK, id, R);
  if (id === 'area51') {
    welcome(-12, 10, 0, 'AREA 51 - TOP SECRET', 0x16a34a);
    welcome(-12, -26, 0.3, 'DANGER: ALIENS AHEAD', 0xef4444);
    // ground decals: big painted 51, runway arrows, hazard stripes by hangars
    SG.add('* 51 *', 0x475569, 16, mat4(0, 0.09, 52, -Math.PI / 2, 0, 0), '#facc15');
    for (const hz of [-12, 18]) for (let k = 0; k < 6; k++) B.mesh(GEO.box(0.8, 0.03, 3), M(k % 2 ? 0x111827 : 0xfacc15, { r: 0.7 }), -23.6, 0.05, hz - 3 + k * 1.2, 0, 0.6);
    for (let k = 0; k < 7; k++) { const x = -60 + k * 20; B.mesh(GEO.cone(0.9, 2, 3), M(0xffffff, { r: 0.7 }), x, 0.08, 52, Math.PI / 2, 0, -Math.PI / 2, 1, 1, 0.05); }
    // military clutter
    [[-22, -2], [-22, 30], [20, -6], [38, 18], [6, -40], [-6, 26]].forEach((p, i) => { for (let k = 0; k < 3; k++) barrel(B, p[0] + k * 0.85, 0, p[1], [0xffca3a, 0x16a34a, 0x3a86ff][(i + k) % 3]); crate(B, p[0] + 0.5, 0, p[1] + 1.2, 1, i); crate(B, p[0] - 0.6, 0, p[1] + 1.3, 0.8, i + 1); crate(B, p[0], 1, p[1] + 1.2, 0.7, i + 2); });
    [[-6, -22, 0], [6, -22, 0], [-20, 6, 1.57], [20, 2, 1.57], [-12, 44, 0]].forEach((p) => sandbag(B, p[0], 0, p[1], p[2]));
    for (let k = 0; k < 14; k++) cone(B, -4.6 + (k % 2) * 9.2, 0, -46 + k * 6.5);
    [[40, -8, 0.6], [-44, 2, 2.4], [42, 44, 3.6], [-46, 40, 1.0]].forEach((p) => dish(B, p[0], 0, p[1], p[2]));
    alienStatue(B, 9, 0, -4, -0.6); alienStatue(B, -6, 0, 46, 2.6);
    scatter(34, 120, 3, (x, y, z, k) => B.mesh(GEO.cyl(1, 1, 0.03, 18), M([0xe4b06e, 0xf7dca8, 0xd9a066, 0xc9d68a][k % 4], { r: 0.95 }), x, y + 0.02 + k * 0.0004, z, 0, k, 0, 2 + R() * 3.5, 1, 1.5 + R() * 3));
    scatter(22, 110, 1.5, (x, y, z, k) => bush(B, x, y, z, 0.6 + R() * 0.4, [0x8a9a3b, 0x6b8e23, 0xa3b14b][k % 3], k % 3 === 0 ? 0xff7bac : 0));
    scatter(40, 104, 1.5, (x, y, z, k) => tumble(B, x, y, z, 0.6 + R() * 0.7));
    scatter(14, 110, 1.5, (x, y, z, k) => addTree(B, x, y, z, 0.55 + R() * 0.45, 'cactus'), (x, z) => Math.abs(x) > 12 || Math.abs(z) > 12);
    scatter(18, 110, 1.2, (x, y, z, k) => addRock(B, x, y, z, 0.35 + R() * 0.6, k, [0xd9814e, 0xc8693c, 0xe0a96d][k % 3]));
    scatter(120, 112, 0.6, (x, y, z, k) => k % 2 ? succulent(D, x, y, z, [0x84cc16, 0x65a30d, 0x4d7c0f][k % 3]) : tuft(D, x, y, z, 0xb5a24a, 0.9));
    scatter(80, 112, 0.6, (x, y, z, k) => D.mesh(GEO.sphere(0.12 + R() * 0.12, 6, 4), M([0xd9a066, 0xb07a45, 0xe8b07a][k % 3], { r: 0.95, flat: true }), x, y + 0.05, z));
  } else if (id === 'city') {
    welcome(24, -8, 0, 'WELCOME TO GROK CITY!', 0xf72585);
    // crosswalks at every intersection + manholes
    for (const v of [-30, 0, 30]) for (const u of [-30, 0, 30]) { for (let k = 0; k < 6; k++) { const o = -3.1 + k * 1.25; B.mesh(GEO.box(0.7, 0.02, 2.4), M(0xffffff, { r: 0.6 }), v + o, 0.08, u - 5.6); B.mesh(GEO.box(0.7, 0.02, 2.4), M(0xffffff, { r: 0.6 }), v + o, 0.08, u + 5.6); B.mesh(GEO.box(2.4, 0.02, 0.7), M(0xffffff, { r: 0.6 }), v - 5.6, 0.08, u + o); B.mesh(GEO.box(2.4, 0.02, 0.7), M(0xffffff, { r: 0.6 }), v + 5.6, 0.08, u + o); } B.mesh(GEO.cyl(0.55, 0.55, 0.03, 16), M(0x30343a, { r: 0.6, m: 0.5 }), v + 1.6, 0.08, u + 12); }
    // street furniture along every block's sidewalk
    for (const bx of [-45, -15, 15, 45]) for (const bz of [-45, -15, 15, 45]) {
      const cs = [[bx - 10, bz - 10], [bx + 10, bz - 10], [bx - 10, bz + 10], [bx + 10, bz + 10]];
      cs.forEach((c, i) => { if (!free(c[0], c[1], 0.8)) return; const k = (i + bx + bz) & 3; if (k === 0) hydrant(B, c[0], 0.11, c[1]); else if (k === 1) trash(B, c[0], 0.11, c[1]); else if (k === 2) mailbox(B, c[0], 0.11, c[1]); else planter(B, D, c[0], 0.11, c[1]); });
      for (let k = 0; k < 4; k++) { const sx = bx + (k - 1.5) * 6, sz = bz + (k % 2 ? 10.3 : -10.3); if (free(sx, sz, 0.4)) addTreeSmall(B, D, sx, 0.11, sz, k); }
    }
    busStop(B, SG, -36, 0.11, -5.8, 0); busStop(B, SG, 24, 0.11, 35.8, Math.PI);
    [[-2, -34], [-36, 2], [27, -4]].forEach((p, i) => umbrellaCart(B, p[0] + 0.5 * i, 0.11, p[1], [0xff006e, 0x3a86ff, 0x8ac926][i]));
    // park: flowerbeds, balloons, hopscotch
    for (let i = 0; i < 70; i++) { const a = R() * 6.283, r = 4.5 + R() * 6.5; const x = 15 + Math.cos(a) * r, z = 15 + Math.sin(a) * r; if (!free(x, z, 0.3)) continue; flower(D, x, 0, z, flowerC[i % 7]); }
    for (let i = 0; i < 6; i++) balloon(B, 11 + i * 0.5, 0, 6.5 + (i % 2) * 0.4, flowerC[i], 2.6 + (i % 3) * 0.35);
    for (let k = 0; k < 6; k++) B.mesh(GEO.box(0.9, 0.02, 0.9), M(flowerC[k], { r: 0.8 }), 26 + (k % 2) * 1, 0.06, 6 + k);
    scatter(90, 140, 0.5, (x, y, z, k) => k % 3 ? tuft(D, x, y, z, greens[k & 3]) : flower(D, x, y, z, flowerC[k % 7]), (x, z) => !(W.buildings.some((b) => Math.abs(x - b.x) < b.w / 2 + 2 && Math.abs(z - b.z) < b.d / 2 + 2)));
    [[-45, 45], [15, 15]].forEach((c) => { for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283 + 0.3; const x = c[0] + Math.cos(a) * 11, z = c[1] + Math.sin(a) * 11; if (free(x, z, 0.5)) bush(B, x, 0, z, 0.8, greens[i & 3], i % 2 ? flowerC[i % 7] : 0); } });
    // rooftop billboards
    [['GROK COLA', 0xef233c], ['EAT MORE TACOS', 0xff9f1c], ['ROARGON MOVIE', 0x7b5cd6], ['SKY TOWER', 0x3a86ff]].forEach((t, i) => { const b = W.buildings.filter((q) => q.h < 6 && !q.sign)[i] || W.buildings.filter((q) => q.h < 6)[i * 3]; if (b) billboard(B, SG, b.x, b.baseY + b.h + 0.4, b.z, b.ry, t[0], t[1]); });
  } else if (id === 'beach') {
    welcome(12, -13, 0, 'SUNNY BEACH', 0xff9f1c); welcome(-22, 19.5, 0, 'NO LIFEGUARD ON DUTY', 0xef233c);
    const sand = (x, z) => z > 17 && W.terrain(x, z) > -1.0;
    scatter(16, 140, 1.2, (x, y, z, k) => towel(B, x, y, z, flowerC[k % 7], R() * 0.6 - 0.3), sand);
    scatter(7, 140, 2, (x, y, z, k) => sandcastle(B, x, y, z), sand);
    scatter(10, 140, 1, (x, y, z, k) => surfboard(B, x, y, z, flowerC[(k + 2) % 7], R() * 3), sand);
    scatter(12, 140, 1, (x, y, z, k) => chair(B, x, y, z, [0x3a86ff, 0xff006e, 0xffbe0b, 0x06d6a0][k % 4], Math.PI + (R() - 0.5) * 0.4), sand);
    scatter(40, 140, 0.4, (x, y, z, k) => k % 2 ? starfish(D, x, y, z, [0xff6b6b, 0xff9f1c, 0xc77dff][k % 3]) : D.mesh(GEO.sphere(0.14, 8, 5), M([0xfff1e6, 0xffd6a5, 0xffadad][k % 3], { r: 0.4 }), x, y + 0.04, z, 0, k, 0, 1, 0.45, 1.2), sand);
    for (let k = 0; k < 8; k++) buoy(B, -60 + k * 17, W.sea + 0.1, 44 + (k % 2) * 6);
    // volleyball net
    [[50, 22], [50, 30]].forEach((p) => B.mesh(GEO.cyl(0.07, 0.07, 2.6, 8), M(0xffffff), p[0], W.terrain(p[0], p[1]) + 1.3, p[1])); B.mesh(GEO.box(0.04, 0.8, 8), M(0xf1f5f9, { op: 0.7 }), 50, W.terrain(50, 26) + 2.1, 26);
    umbrellaCart(B, -12, 0.3, 14, 0xff006e); umbrellaCart(B, 28, 0.3, 14, 0x06d6a0);
    scatter(80, 140, 0.5, (x, y, z, k) => k % 3 ? tuft(D, x, y, z, greens[k & 3]) : flower(D, x, y, z, flowerC[k % 7]), (x, z) => z < 4 && W.terrain(x, z) > -0.5);
    scatter(16, 140, 1.5, (x, y, z, k) => bush(B, x, y, z, 0.8, greens[k & 3], k % 2 ? 0xff4d6d : 0), (x, z) => z < 2);
    for (const b of W.buildings) if (b.name === 'Beach House') { mailbox(B, b.doorOut.x + 2.2, W.terrain(b.doorOut.x, b.doorOut.z), b.doorOut.z, b.ry); }
  } else if (id === 'pine') {
    welcome(-7, 8, 0, 'PINE PEAK - ELEV 2051', 0x2d6a4f);
    billboard(B, SG, -6, 0, -8, 0.6, 'MINE <<   >> LAKE', 0x8b5a2b);
    scatter(160, 96, 0.5, (x, y, z, k) => k % 3 === 0 ? flower(D, x, y, z, flowerC[k % 7]) : tuft(D, x, y, z, greens[k & 3]), (x, z) => W.terrain(x, z) < 6);
    scatter(40, 96, 0.6, (x, y, z, k) => mushroom(D, x, y, z, 0.8 + R() * 0.8), (x, z) => W.terrain(x, z) < 6);
    scatter(14, 90, 1.5, (x, y, z, k) => stump(B, x, y, z), (x, z) => W.terrain(x, z) < 6);
    scatter(18, 90, 1.5, (x, y, z, k) => bush(B, x, y, z, 0.9, greens[k & 3], k % 3 ? 0 : flowerC[k % 7]), (x, z) => W.terrain(x, z) < 6);
    [[-22, -8, 0.3], [36, 6, 1.2], [-4, 24, 0]].forEach((p) => logPile(B, p[0], 0, p[1], p[2]));
    [[12, 6, 0.4], [-20, 24, -0.3], [-46, 24, 1.2]].forEach((p) => picnic(B, p[0], W.terrain(p[0], p[1]), p[1], p[2]));
    [[40, -4], [42, -6], [38, 22]].forEach((p) => hay(B, p[0], 0, p[1]));
    for (const b of W.buildings) if (b.name === 'Log Cabin') { mailbox(B, b.doorOut.x + 2.4, 0, b.doorOut.z, b.ry); for (let k = 0; k < 6; k++) flower(D, b.doorOut.x - 2.6 + k * 0.35, 0, b.doorOut.z - 0.6, flowerC[k]); }
    // canoe + ducks on the lake
    B.mesh(GEO.sphere(1, 16, 8), M(0xef476f, { r: 0.4, cc: 0.8 }), -35, -0.5, 28, 0, 0.5, 0, 0.6, 0.3, 2.2);
    for (let k = 0; k < 3; k++) { const x = -42 + k * 1.2, z = 34 + k * 0.6; B.mesh(GEO.sphere(0.3, 12, 8), M(0xffffff, { r: 0.5 }), x, -0.45, z); B.mesh(GEO.sphere(0.18, 10, 8), M(0x2d6a4f, { r: 0.5 }), x, -0.15, z + 0.2); B.mesh(GEO.cone(0.06, 0.15, 6), M(0xff9f1c), x, -0.17, z + 0.4, Math.PI / 2); }
    // lily pads
    for (let k = 0; k < 10; k++) { const a = k * 0.7, r = 3 + (k % 4) * 1.5; D.mesh(GEO.cyl(0.4, 0.4, 0.03, 10), M(0x52b788, { r: 0.6 }), -38 + Math.cos(a) * r, -0.57, 32 + Math.sin(a) * r); }
  }
  for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283 + R(), r = 70 + R() * 70; cloudBig(BK, Math.cos(a) * r, 30 + R() * 22, Math.sin(a) * r, 3 + R() * 3.5); }
  SG.build(root); BK.build(root, { cast: false });
  W.detail = new THREE.Group(); W.detail.name = 'detail'; root.add(W.detail); D.build(W.detail, { cast: false });
}
function addTreeSmall(B, D, x, y, z, k) { B.mesh(GEO.cyl(0.6, 0.6, 0.12, 14), M(0x6b4423, { r: 0.9 }), x, y + 0.02, z); addTree(B, x, y, z, 0.55, 'round', k); }
function cloudBig(B, x, y, z, s) { const m = M(0xffffff, { r: 1, e: 0xffffff, ei: 0.45 }); [[0, 0, 0, 1.5], [1.5, -0.25, 0.2, 1.1], [-1.5, -0.25, -0.1, 1.15], [0.7, 0.7, -0.2, 1.0], [-0.6, 0.55, 0.3, 0.95], [2.6, -0.5, 0, 0.75], [-2.6, -0.5, 0.1, 0.8]].forEach((p) => B.mesh(GEO.sphere(1, 10, 7), m, x + p[0] * s, y + p[1] * s, z + p[2] * s, 0, 0, 0, p[3] * s, p[3] * s * 0.75, p[3] * s)); }

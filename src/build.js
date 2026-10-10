// enterable buildings with real interiors, basements, elevators to the roof, and wreckable shells
import * as THREE from 'three';
import { Batch, GEO, mat4, mesh } from './models.js';
import { M, glow } from './mats.js';
import { addWall, addPlat, UNDER } from './world.js';

const ROT = { s: 0, e: Math.PI / 2, n: Math.PI, w: -Math.PI / 2 };
let BID = 0;
const T = 0.3, DOORW = 2.0, DOORH = 2.6;
const glass = () => M(0x9fe3ff, { r: 0.05, m: 0.1, op: 0.38, cc: 1 });

// local-frame helper (door faces local +z)
function frame(b) {
  const base = new THREE.Matrix4().makeTranslation(b.x, b.baseY, b.z).multiply(new THREE.Matrix4().makeRotationY(b.ry));
  const c = Math.cos(b.ry), s = Math.sin(b.ry);
  return {
    m: (lx, ly, lz, rx = 0, ry = 0, rz = 0, sx = 1, sy = sx, sz = sx) => base.clone().multiply(mat4(lx, ly, lz, rx, ry, rz, sx, sy, sz)),
    w: (lx, lz) => [b.x + lx * c + lz * s, b.z - lx * s + lz * c],
    box: (lx0, lz0, lx1, lz1) => { const a = frame(b).w(lx0, lz0), d = frame(b).w(lx1, lz1); return [Math.min(a[0], d[0]), Math.min(a[1], d[1]), Math.max(a[0], d[0]), Math.max(a[1], d[1])]; }
  };
}

/* opts: x,z,w,d,h, door:'s'|'n'|'e'|'w', style, wall, trim, roof, inner, floor, roofType:'gable'|'flat'|'arch', sturdy, basement, elevator, stairs, name, interior */
export function makeBuilding(W, scene, o) {
  const b = Object.assign({ id: BID++, h: 3.8, door: 's', wall: 0xffd166, trim: 0xffffff, roof: 0xef476f, inner: 0xfff6e8, floor: 0xd9a066, roofType: 'gable', sturdy: false, basement: false, elevator: false, interior: 'home', name: 'House', windows: true }, o);
  b.ry = ROT[b.door]; const sn = b.door === 's' || b.door === 'n';
  b.lw = sn ? b.w : b.d; b.ld = sn ? b.d : b.w;
  b.baseY = o.baseY != null ? o.baseY : W.terrain(b.x, b.z);
  b.ceil = Math.min(b.h, o.ceil || 3.8);
  b.roofAccess = b.elevator || !!b.stairs;
  b.ix0 = b.x - b.w / 2 + T; b.ix1 = b.x + b.w / 2 - T; b.iz0 = b.z - b.d / 2 + T; b.iz1 = b.z + b.d / 2 - T;
  b.walls = []; b.plats = []; b.pads = [];
  const F = frame(b), lw = b.lw, ld = b.ld;
  const g = b.group = new THREE.Group(), up = b.upper = new THREE.Group(); scene.add(g); scene.add(up);
  const B = new Batch(), U = new Batch(), IB = new Batch();
  const wallM = M(b.wall, { r: 0.75 }), trimM = M(b.trim, { r: 0.5 }), innerM = M(b.inner, { r: 0.85 }), roofM = M(b.roof, { r: 0.55, cc: 0.25 });
  const put = (Bt, geo, mat, lx, ly, lz, rx, ry, rz, sx, sy, sz) => Bt.add(geo, mat, F.m(lx, ly, lz, rx, ry, rz, sx, sy, sz));
  const pbox = (Bt, mat, w, h, d, lx, ly, lz) => put(Bt, GEO.box(w, h, d), mat, lx, ly, lz);
  // foundation + floor
  put(B, GEO.rbox(lw + 0.5, 0.6, ld + 0.5, 0.12), M(0xcfd6dd, { r: 0.8 }), 0, -0.1, 0);
  pbox(B, M(b.floor, { r: 0.55, cc: 0.3 }), lw - 2 * T, 0.04, ld - 2 * T, 0, 0.21, 0);
  if (b.interior === 'home' || b.interior === 'cabin') put(B, GEO.cyl(1, 1, 0.03, 32), M(0xff7aa8, { r: 0.95 }), 0, 0.24, 0.3, 0, 0, 0, Math.min(1.6, lw / 5), 1, Math.min(1.2, ld / 5));
  { const f = F.box(-lw / 2 - 0.25, -ld / 2 - 0.25, lw / 2 + 0.25, ld / 2 + 0.25); b.plats.push(addPlat(W, f[0], f[1], f[2], f[3], b.baseY + 0.2, b)); }
  // walls with door + windows. side defs in local frame
  const sides = [
    { n: 'front', L: lw, at: (u, v, t) => [u, v, ld / 2 - T / 2 + t], horiz: true, out: 1 },
    { n: 'back', L: lw, at: (u, v, t) => [-u, v, -ld / 2 + T / 2 - t], horiz: true, out: 1 },
    { n: 'left', L: ld - 2 * T, at: (u, v, t) => [-lw / 2 + T / 2 - t, v, u], horiz: false },
    { n: 'right', L: ld - 2 * T, at: (u, v, t) => [lw / 2 - T / 2 + t, v, -u], horiz: false }
  ];
  const H = b.ceil;
  for (const sd of sides) {
    const ops = [];
    if (sd.n === 'front') ops.push({ c: 0, wd: b.wideDoor || DOORW, b: 0, t: Math.min(H - 0.4, b.wideDoor ? H - 0.6 : DOORH), door: true });
    if (b.windows) {
      const n = Math.floor((sd.L - 1) / 3.2);
      for (let i = 0; i < n; i++) { const c = -sd.L / 2 + (i + 0.5) * sd.L / n; if (ops.some((p) => Math.abs(p.c - c) < 1.9)) continue; ops.push({ c, wd: 1.3, b: 1.0, t: Math.min(2.4, H - 0.6) }); }
    }
    ops.sort((a, c) => a.c - c.c);
    const pieces = []; let cur = -sd.L / 2;
    for (const p of ops) { const a = p.c - p.wd / 2, e = p.c + p.wd / 2; if (a > cur) pieces.push([cur, a, 0, H]); if (p.b > 0) pieces.push([a, e, 0, p.b]); if (p.t < H) pieces.push([a, e, p.t, H]); cur = e; }
    if (cur < sd.L / 2) pieces.push([cur, sd.L / 2, 0, H]);
    const place = (Bt, mat, u0, u1, v0, v1, thick, off) => {
      const cu = (u0 + u1) / 2, cv = (v0 + v1) / 2, p = sd.at(cu, cv, off || 0);
      put(Bt, GEO.box(sd.horiz ? u1 - u0 : thick, v1 - v0, sd.horiz ? thick : u1 - u0), mat, p[0], p[1], p[2]);
    };
    for (const pc of pieces) { place(B, wallM, pc[0], pc[1], pc[2], pc[3], T, 0); place(B, innerM, pc[0], pc[1], Math.max(pc[2], 0.2), pc[3], 0.04, -T / 2 - 0.02); }
    for (const p of ops) {
      const a = p.c - p.wd / 2, e = p.c + p.wd / 2;
      if (!p.door) { place(B, glass(), a, e, p.b, p.t, 0.06, 0); place(B, trimM, a - 0.1, e + 0.1, p.b - 0.12, p.b, T + 0.16, 0); place(B, trimM, a - 0.1, e + 0.1, p.t, p.t + 0.12, T + 0.12, 0); }
      else { place(B, trimM, a - 0.14, a, 0.2, p.t + 0.14, T + 0.1, 0); place(B, trimM, e, e + 0.14, 0.2, p.t + 0.14, T + 0.1, 0); place(B, trimM, a - 0.14, e + 0.14, p.t, p.t + 0.16, T + 0.1, 0); }
    }
    // corner trim + base band
    place(B, trimM, -sd.L / 2, sd.L / 2, H - 0.18, H, T + 0.08, 0);
    // collision: solid except door gap
    let c2 = -sd.L / 2; const solids = [];
    for (const p of ops) if (p.door) { solids.push([c2, p.c - p.wd / 2]); c2 = p.c + p.wd / 2; }
    solids.push([c2, sd.L / 2]);
    for (const s of solids) {
      if (s[1] - s[0] < 0.01) continue; const p0 = sd.at(s[0], 0, 0), p1 = sd.at(s[1], 0, 0);
      const ext = sd.horiz ? [p0[0], p0[2] - T / 2, p1[0], p1[2] + T / 2] : [p0[0] - T / 2, p0[2], p1[0] + T / 2, p1[2]];
      const a = F.w(ext[0], ext[1]), c = F.w(ext[2], ext[3]);
      b.walls.push(addWall(W, a[0], a[1], c[0], c[1], b.baseY, b.baseY + b.h + 0.3, b));
    }
    // tall buildings: upper storeys (hidden while you are inside)
    if (b.h > H + 0.5) {
      place(U, wallM, -sd.L / 2, sd.L / 2, H, b.h, T, 0);
      const floors = Math.floor((b.h - H) / 3.4), n = Math.max(1, Math.floor((sd.L - 1) / 2.6));
      for (let f = 0; f < floors; f++) for (let i = 0; i < n; i++) { const c = -sd.L / 2 + (i + 0.5) * sd.L / n, v = H + 0.8 + f * 3.4; place(U, glass(), c - 0.7, c + 0.7, v, v + 2.0, T + 0.06, 0); place(U, trimM, c - 0.8, c + 0.8, v - 0.12, v, T + 0.16, 0); }
      for (let f = 0; f <= floors; f++) place(U, trimM, -sd.L / 2, sd.L / 2, H + f * 3.4 - 0.1, H + f * 3.4 + 0.08, T + 0.1, 0);
    }
  }
  // ceiling + roof (upper group)
  pbox(U, M(0xf4f1ea, { r: 0.9 }), lw, 0.25, ld, 0, H + 0.12, 0);
  if (b.h > H + 0.5) pbox(U, M(0xd5dbe2, { r: 0.85 }), lw, 0.3, ld, 0, b.h + 0.12, 0);
  const top = b.h + 0.27;
  if (b.roofType === 'gable') {
    const span = Math.min(lw, ld) + 0.8, along = Math.max(lw, ld) + 0.8, rh = span * 0.38;
    const sh = new THREE.Shape(); sh.moveTo(-span / 2, 0); sh.lineTo(span / 2, 0); sh.lineTo(0, rh); sh.lineTo(-span / 2, 0);
    const rg = new THREE.ExtrudeGeometry(sh, { depth: along, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 2 }); rg.translate(0, 0, -along / 2);
    put(U, rg, roofM, 0, b.h + 0.2, 0, 0, lw >= ld ? Math.PI / 2 : 0, 0);
    put(U, GEO.rbox(0.7, 1.6, 0.7, 0.08), M(0xb5543a, { r: 0.8 }), lw * 0.25, b.h + rh * 0.6, -ld * 0.15);
  } else if (b.roofType === 'arch') {
    const ag = new THREE.CylinderGeometry(lw / 2 + 0.15, lw / 2 + 0.15, ld + 0.4, 32, 1, false, -Math.PI / 2, Math.PI); ag.rotateX(-Math.PI / 2);
    put(U, ag, roofM, 0, H, 0, 0, 0, 0, 1, 0.55, 1);
  } else {
    [[lw, 0.6, 0.25, 0, ld / 2 - 0.12], [lw, 0.6, 0.25, 0, -ld / 2 + 0.12], [0.25, 0.6, ld, lw / 2 - 0.12, 0], [0.25, 0.6, ld, -lw / 2 + 0.12, 0]].forEach((r) => put(U, GEO.rbox(r[0], r[1], r[2], 0.06), trimM, r[3], top + 0.25, r[4]));
    if (!b.roofAccess || lw > 9) { put(U, GEO.rbox(1.6, 1.0, 1.2, 0.15), M(0xc8d0d8, { r: 0.4, m: 0.6 }), -lw * 0.25, top + 0.5, -ld * 0.2); put(U, GEO.cyl(0.45, 0.45, 0.25, 24), M(0x8a949e, { m: 0.7, r: 0.3 }), -lw * 0.25, top + 1.1, -ld * 0.2); }
    if (b.style === 'tower' && !b.roofAccess) { put(U, GEO.cyl(1.2, 1.2, 2.2, 24), M(0x9c6b3f, { r: 0.8 }), lw * 0.2, top + 2.0, ld * 0.2); put(U, GEO.cone(1.35, 0.8, 24), M(0x6b4a2f, { r: 0.8 }), lw * 0.2, top + 3.5, ld * 0.2); }
    if (b.roofAccess) { const f = F.box(-lw / 2, -ld / 2, lw / 2, ld / 2); b.plats.push(addPlat(W, f[0], f[1], f[2], f[3], b.baseY + top, b)); W.high.push({ x: b.x, y: b.baseY + top, z: b.z, b, label: (b.name || 'Building') + ' roof' }); }
  }
  if (b.sign) { put(B, GEO.rbox(Math.min(lw - 1, 4.4), 0.8, 0.14, 0.08), M(b.sign, { r: 0.35, e: b.sign, ei: 0.25, cc: 0.6 }), 0, Math.min(H, 3.2) + 0.15, ld / 2 + 0.12); }
  // awning over the door
  put(B, GEO.rbox(2.8, 0.14, 1.2, 0.06), M(b.awning || b.roof, { r: 0.5 }), 0, Math.min(DOORH + 0.45, H - 0.05), ld / 2 + 0.55);
  // inside / outside door waypoints
  const di = F.w(0, ld / 2 - 1.4), dout = F.w(0, ld / 2 + 1.8); b.doorIn = { x: di[0], z: di[1] }; b.doorOut = { x: dout[0], z: dout[1] };
  // interior
  furnish(W, b, IB, put, F);
  // elevator to roof
  if (b.elevator) {
    const pl = F.w(-lw / 2 + 1.3, -ld / 2 + 1.3); const rp = F.w(lw / 2 - 1.5, -ld / 2 + 1.5);
    put(B, GEO.rbox(1.9, H - 0.3, 0.2, 0.05), M(0xb8c2cc, { m: 0.9, r: 0.25 }), -lw / 2 + 1.3, H / 2 + 0.1, -ld / 2 + T + 0.12);
    padMesh(B, put, -lw / 2 + 1.3, 0.24, -ld / 2 + 1.3, 0x22d3ee);
    padMesh(U, put, lw / 2 - 1.5, top + 0.02, -ld / 2 + 1.5, 0x22d3ee);
    put(U, GEO.rbox(1.6, 2.4, 1.6, 0.15), M(0xdfe6ec, { r: 0.6 }), lw / 2 - 1.5, top + 1.2, -ld / 2 - 0.0 + 0.2);
    const toRoof = { x: rp[0], y: b.baseY + top, z: rp[1] };
    b.pads.push(addPad(W, { x: pl[0], y: b.baseY + 0.2, z: pl[1], kind: 'elev', label: '⬆ ROOF', to: toRoof, b }));
    b.pads.push(addPad(W, { x: rp[0], y: b.baseY + top, z: rp[1], kind: 'elevdown', label: '⬇ INSIDE', to: { x: pl[0] + 0.01, y: b.baseY + 0.25, z: pl[1] + 1.4 * Math.cos(b.ry) }, b }));
  }
  // basement / bunker below
  if (b.basement) makeRoom(W, scene, b, B, put, F, b.basement === true ? 'basement' : b.basement);
  b.meshes = B.build(g); U.build(up); b.inner = new THREE.Group(); g.add(b.inner); IB.build(b.inner, { cast: false });
  W.buildings.push(b);
  return b;
}
function padMesh(B, put, lx, ly, lz, color) {
  put(B, GEO.cyl(0.95, 1.0, 0.08, 32), M(color, { e: color, ei: 0.9, r: 0.3 }), lx, ly + 0.04, lz);
  put(B, GEO.torus(0.95, 0.07, 6.283, 8, 32), M(0xffffff, { e: 0xffffff, ei: 0.6 }), lx, ly + 0.09, lz, Math.PI / 2);
}
export function addPad(W, p) { p.r = p.r || 1.1; W.pads.push(p); return p; }

function furnish(W, b, B, put, F) {
  const lw = b.lw, ld = b.ld, hx = lw / 2 - T - 0.2, hz = ld / 2 - T - 0.2, I = b.interior;
  const wood = M(0xc68a52, { r: 0.6, cc: 0.2 }), dark = M(0x5a3a22, { r: 0.6 }), white = M(0xf8fafc, { r: 0.5 });
  const table = (lx, lz, w = 1.6, d = 1.0, col) => {
    const m = col ? M(col, { r: 0.5, cc: 0.3 }) : wood;
    put(B, GEO.rbox(w, 0.1, d, 0.04), m, lx, 0.95, lz);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach((s) => put(B, GEO.cyl(0.05, 0.05, 0.75, 8), dark, lx + s[0] * (w / 2 - 0.12), 0.58, lz + s[1] * (d / 2 - 0.12)));
    const p = F.w(lx, lz); W.tables.push({ x: p[0], y: b.baseY + 0.2, z: p[1], r: Math.max(w, d) * 0.55 + 0.2, b });
  };
  const chair = (lx, lz, col = 0xef476f) => { const c = M(col, { r: 0.5, cc: 0.4 }); put(B, GEO.rbox(0.45, 0.08, 0.45, 0.04), c, lx, 0.55, lz); put(B, GEO.rbox(0.45, 0.5, 0.07, 0.03), c, lx, 0.82, lz - 0.2); [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach((s) => put(B, GEO.cyl(0.03, 0.03, 0.35, 6), dark, lx + s[0] * 0.18, 0.37, lz + s[1] * 0.18)); };
  const shelf = (lx, lz, w = 2, ry = 0, colors) => {
    const c = Math.cos(ry), sn = Math.sin(ry), at = (u, v) => [lx + u * c + v * sn, lz - u * sn + v * c];
    const fm = M(0xf1e3cc, { r: 0.7 }), cs = colors || [0xff595e, 0xffca3a, 0x8ac926, 0x1982c4, 0x6a4c93, 0xff924c];
    let q = at(0, -0.2); put(B, GEO.box(w, 2.0, 0.08), fm, q[0], 1.2, q[1], 0, ry);
    [-1, 1].forEach((sd) => { const r = at(sd * (w / 2 - 0.04), 0); put(B, GEO.box(0.08, 2.0, 0.5), fm, r[0], 1.2, r[1], 0, ry); });
    for (let row = 0; row < 4; row++) { const r = at(0, 0); put(B, GEO.box(w, 0.06, 0.5), fm, r[0], 0.28 + row * 0.6, r[1], 0, ry); }
    for (let row = 0; row < 3; row++) for (let i = 0; i < Math.floor((w - 0.2) / 0.34); i++) {
      const u = -w / 2 + 0.26 + i * 0.34, r = at(u, 0.02), k = (i + row * 2) % cs.length, tall = (i + row) % 3 === 0;
      if (tall) put(B, GEO.cyl(0.12, 0.12, 0.42, 14), M(cs[k], { r: 0.35, cc: 0.5 }), r[0], 0.52 + row * 0.6, r[1]);
      else put(B, GEO.rbox(0.26, 0.36, 0.28, 0.05), M(cs[k], { r: 0.45, cc: 0.4 }), r[0], 0.49 + row * 0.6, r[1], 0, ry);
    }
  };
  const sofa = (lx, lz, col = 0x4cc9f0) => { const c = M(col, { r: 0.85 }); put(B, GEO.rbox(2.2, 0.5, 0.9, 0.18), c, lx, 0.5, lz); put(B, GEO.rbox(2.2, 0.75, 0.3, 0.14), c, lx, 0.9, lz - 0.35); put(B, GEO.rbox(0.3, 0.65, 0.9, 0.12), c, lx - 1.05, 0.65, lz); put(B, GEO.rbox(0.3, 0.65, 0.9, 0.12), c, lx + 1.05, 0.65, lz); };
  const plant = (lx, lz) => { put(B, GEO.cyl(0.25, 0.18, 0.45, 16), M(0xe76f51, { r: 0.6 }), lx, 0.45, lz); [[0, 1.0, 0, 0.42], [0.18, 0.85, 0.1, 0.3], [-0.15, 0.9, -0.1, 0.3]].forEach((p) => put(B, GEO.sphere(1, 14, 10), M(0x52b788, { r: 0.7 }), lx + p[0], p[1], lz + p[2], 0, 0, 0, p[3])); };
  const lamp = (lx, lz) => { put(B, GEO.cyl(0.03, 0.03, 1.4, 8), dark, lx, 0.9, lz); put(B, GEO.cyl(0.18, 0.3, 0.35, 16), M(0xfff1c1, { e: 0xffe08a, ei: 0.9 }), lx, 1.7, lz); };
  const tv = (lx, lz, ry = 0) => { put(B, GEO.rbox(1.6, 0.5, 0.45, 0.06), dark, lx, 0.45, lz, 0, ry); put(B, GEO.rbox(1.5, 0.85, 0.08, 0.04), M(0x111827, { r: 0.2, cc: 1 }), lx, 1.15, lz, 0, ry); put(B, GEO.box(1.36, 0.72, 0.02), M(0x3b82f6, { e: 0x60a5fa, ei: 0.7 }), lx + Math.sin(ry) * 0.05, 1.15, lz + Math.cos(ry) * 0.05, 0, ry); };
  const bed = (lx, lz, col = 0xb5179e) => { put(B, GEO.rbox(1.4, 0.45, 2.2, 0.1), wood, lx, 0.45, lz); put(B, GEO.rbox(1.35, 0.25, 2.1, 0.12), white, lx, 0.78, lz); put(B, GEO.rbox(1.38, 0.12, 1.4, 0.06), M(col, { r: 0.8 }), lx, 0.92, lz + 0.35); put(B, GEO.rbox(0.9, 0.18, 0.45, 0.09), white, lx, 0.98, lz - 0.75); put(B, GEO.rbox(1.4, 1.0, 0.12, 0.05), wood, lx, 0.85, lz - 1.1); };
  const counter = (lx, lz, w, col = 0x90e0ef) => { put(B, GEO.rbox(w, 1.0, 0.7, 0.05), M(col, { r: 0.6 }), lx, 0.7, lz); put(B, GEO.rbox(w + 0.1, 0.08, 0.8, 0.03), M(0xf8f9fa, { r: 0.2, cc: 1 }), lx, 1.24, lz); };
  const crate = (lx, lz, s = 1) => put(B, GEO.rbox(s, s, s, 0.06), M(0xd4a373, { r: 0.8 }), lx, 0.2 + s / 2, lz, 0, lx * 3);
  const desk = (lx, lz) => { table(lx, lz, 1.6, 0.9, 0xf1f5f9); put(B, GEO.rbox(0.7, 0.45, 0.06, 0.03), M(0x111827, { cc: 1 }), lx, 1.3, lz - 0.2); put(B, GEO.box(0.62, 0.36, 0.01), M(0x22d3ee, { e: 0x22d3ee, ei: 0.6 }), lx, 1.3, lz - 0.165); chair(lx, lz + 0.8, 0x3a86ff); };
  if (I === 'home' || I === 'cabin') {
    sofa(-hx + 1.4, hz - 1.2, I === 'cabin' ? 0xbc6c25 : 0x4cc9f0); tv(-hx + 1.4, hz - 3.2 > -hz ? hz - 3.0 : 0, Math.PI);
    if (hx > 2.5) { table(hx - 1.3, 0.2); chair(hx - 1.7, 0.2 + 0.85, 0xffbe0b); chair(hx - 0.9, 0.2 + 0.85, 0xffbe0b); }
    if (hz > 2.5) bed(hx - 1.0, -hz + 1.3); shelf(0, -hz + 0.3, 2.0);
    plant(-hx + 0.4, -hz + 0.4); lamp(hx - 0.3, hz - 0.3);
    if (I === 'cabin') { // fireplace = warm spot
      put(B, GEO.rbox(1.8, 1.6, 0.8, 0.1), M(0x9c6644, { r: 0.9 }), -hx + 1.2, 1.0, -hz + 0.5);
      put(B, GEO.sphere(0.35, 12, 10), M(0xff7b00, { e: 0xff5400, ei: 2.5 }), -hx + 1.2, 0.6, -hz + 0.75);
      const p = F.w(-hx + 1.2, -hz + 1.4), fp = F.w(-hx + 1.2, -hz + 0.75); W.fires.push({ x: p[0], y: b.baseY + 0.2, z: p[1], r: 3.5, b, fx: fp[0], fz: fp[1] });
    }
  } else if (I === 'shop') {
    for (let i = -1; i <= 1; i++) if (Math.abs(i * 2.6) < hx - 0.8) shelf(i * 2.6, -0.6, 1.8, Math.PI / 2);
    counter(hx - 1.0, hz - 1.6, 1.8, b.sign || 0x90e0ef); shelf(0, -hz + 0.3, Math.min(4, hx * 1.5)); plant(-hx + 0.4, hz - 0.5);
    table(-hx + 1.2, hz - 1.5, 1.2, 0.9, 0xffffff);
  } else if (I === 'diner') {
    counter(0, -hz + 1.3, Math.min(lw - 2, 6), 0xff70a6); for (let i = -2; i <= 2; i++) if (Math.abs(i * 1.2) < hx - 0.5) { put(B, GEO.cyl(0.25, 0.25, 0.1, 16), M(0xef233c, { cc: 1, r: 0.3 }), i * 1.2, 0.8, -hz + 2.1); put(B, GEO.cyl(0.05, 0.05, 0.6, 8), M(0xadb5bd, { m: 1, r: 0.3 }), i * 1.2, 0.5, -hz + 2.1); }
    table(-hx + 1.2, hz - 1.3, 1.2, 1.2, 0x48cae4); table(hx - 1.2, hz - 1.3, 1.2, 1.2, 0x48cae4); chair(-hx + 1.2, hz - 0.4, 0xffd60a); chair(hx - 1.2, hz - 0.4, 0xffd60a);
    put(B, GEO.sphere(0.25, 16, 12), M(0xffafcc, { r: 0.4 }), 0.5, 1.45, -hz + 1.3); put(B, GEO.cone(0.18, 0.4, 16), M(0xe9c46a), 0.5, 1.1, -hz + 1.3, Math.PI);
  } else if (I === 'office') {
    for (let r = 0; r < 2; r++) for (let c = -1; c <= 1; c++) if (Math.abs(c * 2.8) < hx - 0.9 && -hz + 1.8 + r * 2.6 < hz - 2.4) desk(c * 2.8, -hz + 1.8 + r * 2.6);
    plant(hx - 0.4, hz - 0.4); plant(-hx + 0.4, hz - 0.4); put(B, GEO.rbox(2.6, 1.1, 0.8, 0.1), M(0xffffff, { r: 0.3 }), hx - 1.6, 0.75, hz - 1.5);
  } else if (I === 'hangar') {
    crate(-hx + 1, -hz + 1, 1.2); crate(-hx + 1, -hz + 2.3, 1.0); crate(-hx + 2.3, -hz + 1, 1.0); crate(hx - 1, -hz + 1, 1.2);
    table(hx - 1.5, hz - 2.5, 2.0, 1.0, 0x94a3b8); table(-hx + 1.8, hz - 2.5, 2.0, 1.0, 0x94a3b8);
    // display saucer
    put(B, GEO.cyl(1.6, 1.8, 0.4, 32), M(0x475569, { m: 0.6, r: 0.4 }), 0, 0.4, -hz + 3);
    put(B, GEO.sphere(2.4, 32, 12), M(0xc0c8d4, { m: 0.9, r: 0.2 }), 0, 1.4, -hz + 3, 0, 0, 0.1, 1, 0.28, 1);
    put(B, new THREE.SphereGeometry(1.0, 24, 12, 0, 6.283, 0, Math.PI / 2), M(0x9be7ff, { r: 0.05, op: 0.4, cc: 1 }), 0, 1.6, -hz + 3);
    put(B, GEO.rbox(3.2, 0.6, 0.1, 0.05), M(0x22c55e, { e: 0x22c55e, ei: 0.5 }), 0, 2.9, -hz + 0.25);
  } else if (I === 'station') {
    put(B, GEO.rbox(2.4, 2.0, 5.2, 0.35), M(0xe63946, { r: 0.3, cc: 1 }), 0, 1.25, -0.4); put(B, GEO.rbox(2.2, 0.9, 1.6, 0.2), M(0xe63946, { r: 0.3, cc: 1 }), 0, 2.6, 1.0);
    [-1.3, 1.6].forEach((z) => [-1.15, 1.15].forEach((x) => put(B, GEO.cyl(0.45, 0.45, 0.3, 20), M(0x1f2937, { r: 0.8 }), x, 0.65, z, 0, 0, Math.PI / 2)));
    put(B, GEO.rbox(0.5, 0.2, 0.3, 0.05), M(0x3b82f6, { e: 0x3b82f6, ei: 2 }), -0.4, 3.15, 1.2); put(B, GEO.rbox(0.5, 0.2, 0.3, 0.05), M(0xef4444, { e: 0xef4444, ei: 2 }), 0.4, 3.15, 1.2);
    table(hx - 1.2, -hz + 1.4, 1.4, 1.0); shelf(-hx + 0.4, 0, 2.4, Math.PI / 2);
  } else if (I === 'bunkerTop') {
    put(B, GEO.rbox(lw - 1.2, 0.05, 2.6, 0.02), M(0xfacc15, { r: 0.6 }), 0, 0.24, 0);
    for (let i = 0; i < 6; i++) put(B, GEO.box(0.35, 0.06, 2.6), M(0x111827), -lw / 2 + 1.2 + i * (lw - 2.4) / 5, 0.25, 0, 0, 0.6);
    put(B, GEO.cyl(0.6, 0.6, 0.1, 3), M(0xfacc15, { e: 0xfacc15, ei: 0.4 }), hx - 0.5, 2.2, -hz + 0.05, Math.PI / 2);
  }
}

// underground room straight below the building
function makeRoom(W, scene, b, B, put, F, kind) {
  const lw = b.lw, ld = b.ld;
  const rw = Math.max(lw, kind === 'bunker' ? 16 : 8), rd = Math.max(ld, kind === 'bunker' ? 12 : 7);
  const room = { id: 'r' + b.id, kind, b, name: kind === 'bunker' ? 'Nuclear Bunker' : kind === 'subway' ? 'Subway Station' : kind === 'mine' ? 'Mine Tunnel' : 'Basement' };
  const sn = b.door === 's' || b.door === 'n'; const ww = sn ? rw : rd, dd = sn ? rd : rw;
  room.x0 = b.x - ww / 2; room.x1 = b.x + ww / 2; room.z0 = b.z - dd / 2; room.z1 = b.z + dd / 2;
  // hatch pad on the ground floor
  const hl = kind === 'bunker' ? [0, 0] : [b.lw / 2 - 1.3, b.ld / 2 - 1.5 - (b.elevator ? 0 : 0)];
  if (b.interior === 'home' || b.interior === 'cabin') { hl[0] = -b.lw / 2 + 1.4; hl[1] = -b.ld / 2 + 3.0 > b.ld / 2 - 1.2 ? 0 : -b.ld / 2 + 3.0; }
  if (b.interior === 'shop' || b.interior === 'office' || b.interior === 'diner') { hl[0] = -b.lw / 2 + 1.2; hl[1] = 0.6; }
  const yel = kind === 'bunker' ? 0xfacc15 : 0xffb703;
  put(B, GEO.rbox(1.8, 0.08, 1.8, 0.04), M(0x334155, { m: 0.6, r: 0.4 }), hl[0], 0.25, hl[1]);
  padMesh(B, put, hl[0], 0.28, hl[1], yel);
  const hp = F.w(hl[0], hl[1]);
  const g = new THREE.Group(); scene.add(g); room.group = g;
  const R = new Batch(), Y = UNDER;
  const wallC = kind === 'bunker' ? 0x9aa5b1 : kind === 'mine' ? 0x8d6e63 : kind === 'subway' ? 0xe9f5f9 : 0xbfa98a;
  const floorC = kind === 'bunker' ? 0x64748b : kind === 'mine' ? 0x6d4c41 : kind === 'subway' ? 0x94a3b8 : 0x8d99ae;
  R.rbox(M(floorC, { r: 0.7 }), ww + 0.6, 0.4, dd + 0.6, 0.1, b.x, Y - 0.2, b.z);
  const wm = M(wallC, { r: 0.8 }), wh = 6.5;
  R.box(wm, ww + 0.6, wh, 0.3, b.x, Y + wh / 2, room.z0 - 0.15); R.box(wm, ww + 0.6, wh, 0.3, b.x, Y + wh / 2, room.z1 + 0.15);
  R.box(wm, 0.3, wh, dd, room.x0 - 0.15, Y + wh / 2, b.z); R.box(wm, 0.3, wh, dd, room.x1 + 0.15, Y + wh / 2, b.z);
  addWall(W, room.x0 - 0.3, room.z0 - 0.3, room.x1 + 0.3, room.z0, Y, Y + 6); addWall(W, room.x0 - 0.3, room.z1, room.x1 + 0.3, room.z1 + 0.3, Y, Y + 6);
  addWall(W, room.x0 - 0.3, room.z0, room.x0, room.z1, Y, Y + 6); addWall(W, room.x1, room.z0, room.x1 + 0.3, room.z1, Y, Y + 6);
  // stripes, lamps, props
  const lampM = M(0xfff1c1, { e: 0xffe08a, ei: 2.2 });
  for (let i = 0; i < 3; i++) R.mesh(GEO.sphere(0.25, 14, 10), lampM, room.x0 + ww * (i + 0.5) / 3, Y + 3.2, room.z0 + 0.2);
  for (let i = 0; i < 3; i++) R.mesh(GEO.sphere(0.25, 14, 10), lampM, room.x0 + ww * (i + 0.5) / 3, Y + 3.2, room.z1 - 0.2);
  const cs = [0xff595e, 0xffca3a, 0x8ac926, 0x1982c4, 0x6a4c93];
  if (kind === 'bunker') {
    for (let i = 0; i < 4; i++) { const x = room.x0 + 1.5 + i * 2.2; [0.6, 1.8].forEach((y) => { R.rbox(M(0x475569, { m: 0.5, r: 0.4 }), 1.0, 0.12, 2.1, 0.04, x, Y + y, room.z0 + 1.4); R.rbox(M(cs[i % 5], { r: 0.8 }), 0.95, 0.15, 2.0, 0.06, x, Y + y + 0.12, room.z0 + 1.4); }); R.box(M(0x334155), 0.08, 2.2, 0.08, x - 0.48, Y + 1.1, room.z0 + 0.4); }
    for (let i = 0; i < 4; i++) { R.rbox(M(0x0f172a, { cc: 1, r: 0.2 }), 1.6, 1.0, 0.1, room.x1 - 1.2 - i * 1.8, Y + 2.0, room.z1 - 0.12); R.box(M([0x22c55e, 0x22d3ee, 0xf59e0b, 0xef4444][i], { e: [0x22c55e, 0x22d3ee, 0xf59e0b, 0xef4444][i], ei: 0.9 }), 1.45, 0.85, 0.02, room.x1 - 1.2 - i * 1.8, Y + 2.0, room.z1 - 0.18); }
    R.rbox(M(0x475569, { r: 0.5 }), 6.5, 1.0, 0.8, 0.05, room.x1 - 3.8, Y + 0.5, room.z1 - 0.7);
    for (let i = 0; i < 6; i++) R.rbox(M(0x65a30d, { r: 0.7 }), 0.9, 0.7, 0.7, 0.06, room.x0 + 1 + (i % 3) * 1.0, Y + 0.35 + Math.floor(i / 3) * 0.7, room.z1 - 0.8);
    R.mesh(GEO.cyl(1.2, 1.2, 0.08, 3), M(0xfacc15, { e: 0xfacc15, ei: 0.5 }), b.x, Y + 3.6, room.z0 + 0.25, Math.PI / 2, 0, 0);
    room.tableSpots = [];
  } else if (kind === 'mine') {
    for (let i = 0; i < 4; i++) { const x = room.x0 + 1 + i * (ww - 2) / 3; R.box(M(0x8b5a2b, { r: 0.9 }), 0.35, 3.5, 0.35, x, Y + 1.75, room.z0 + 0.3); R.box(M(0x8b5a2b, { r: 0.9 }), 0.35, 3.5, 0.35, x, Y + 1.75, room.z1 - 0.3); R.box(M(0x8b5a2b, { r: 0.9 }), 0.4, 0.4, dd, x, Y + 3.5, b.z); }
    R.rbox(M(0x6b7280, { m: 0.7, r: 0.4 }), 1.4, 0.9, 2.0, 0.15, b.x + 1.5, Y + 0.7, b.z); for (let i = 0; i < 5; i++) R.mesh(GEO.rock(i, 1), M([0xffd166, 0x9ef01a, 0x4cc9f0][i % 3], { r: 0.2, m: 0.3, e: [0xffd166, 0x9ef01a, 0x4cc9f0][i % 3], ei: 0.5 }), b.x + 1.2 + (i % 3) * 0.3, Y + 1.25, b.z - 0.5 + i * 0.25, 0, i, 0, 0.25);
  } else if (kind === 'subway') {
    R.rbox(M(0xf1f5f9, { r: 0.3, cc: 1 }), ww - 1, 2.6, 2.4, 0.5, b.x, Y + 1.5, room.z0 + 1.6); R.rbox(M(0x3a86ff, { r: 0.4 }), ww - 0.9, 0.5, 2.45, 0.2, b.x, Y + 1.1, room.z0 + 1.6);
    for (let i = 0; i < 4; i++) R.box(M(0x1e293b, { cc: 1, r: 0.1 }), 1.2, 0.9, 2.5, room.x0 + 1.8 + i * (ww - 3.6) / 3, Y + 2.0, room.z0 + 1.6);
    R.box(M(0xfacc15), ww, 0.05, 0.3, b.x, Y + 0.03, room.z0 + 3.1);
    for (let i = 0; i < 3; i++) { R.rbox(M(0x8b5cf6, { r: 0.5 }), 1.6, 0.12, 0.5, 0.04, room.x0 + 2 + i * 3, Y + 0.5, room.z1 - 0.6); }
  } else {
    for (let i = 0; i < Math.floor(ww / 2.5); i++) { const x = room.x0 + 1.3 + i * 2.5; R.rbox(M(0xe9d8a6, { r: 0.7 }), 2.0, 2.2, 0.5, 0.04, x, Y + 1.1, room.z0 + 0.35); for (let k = 0; k < 6; k++) R.mesh(GEO.cyl(0.12, 0.12, 0.28, 14), M(cs[(k + i) % 5], { r: 0.3, m: 0.4 }), x - 0.75 + k * 0.3, Y + 0.6 + (k % 2) * 0.7, room.z0 + 0.72); }
    R.rbox(M(0xf1f5f9, { r: 0.4 }), 0.9, 1.1, 0.8, 0.1, room.x1 - 0.7, Y + 0.55, room.z1 - 0.7); R.mesh(GEO.cyl(0.28, 0.28, 0.06, 20), M(0x0f172a, { cc: 1 }), room.x1 - 0.7, Y + 0.7, room.z1 - 1.12, Math.PI / 2, 0, 0);
    for (let i = 0; i < 3; i++) R.rbox(M(0xd4a373, { r: 0.8 }), 0.8, 0.8, 0.8, 0.06, room.x1 - 0.7, Y + 0.4 + i * 0.8 * (i < 2 ? 1 : 1), room.z0 + 0.7 + (i === 2 ? 0 : i * 0.9));
    R.mesh(GEO.cyl(0.2, 0.2, 0.9, 16), M(0x48cae4, { r: 0.1, op: 0.6, cc: 1 }), room.x0 + 0.6, Y + 0.45, room.z1 - 0.6);
  }
  // exit pad
  const ex = { x: b.x, z: room.z1 - 1.2 }; if (kind === 'bunker') { ex.x = room.x0 + 1.5; ex.z = b.z + 1.5; }
  R.mesh(GEO.cyl(0.95, 1.0, 0.08, 32), M(0x22c55e, { e: 0x22c55e, ei: 0.9 }), ex.x, Y + 0.04, ex.z);
  R.mesh(GEO.torus(0.95, 0.07, 6.283, 8, 32), M(0xffffff, { e: 0xffffff, ei: 0.6 }), ex.x, Y + 0.09, ex.z, Math.PI / 2, 0, 0);
  R.build(g, { cast: false });
  room.spawn = { x: b.x + (kind === 'bunker' ? 2 : 0.6), y: Y, z: b.z + (kind === 'bunker' ? 0 : -0.4) };
  const out = F.w(hl[0] + (hl[0] > 0 ? -1.5 : 1.5), hl[1]);
  addPad(W, { x: hp[0], y: b.baseY + 0.25, z: hp[1], kind: 'down', label: kind === 'bunker' ? '☢️ BUNKER' : kind === 'subway' ? '🚇 SUBWAY' : kind === 'mine' ? '⛏️ MINE' : '⬇ BASEMENT', to: room.spawn, b, room });
  addPad(W, { x: ex.x, y: Y, z: ex.z, kind: 'up', label: '⬆ GO UP', to: { x: out[0], y: b.baseY + 0.3, z: out[1] }, b, room });
  room.hatch = { x: hp[0], y: b.baseY + 0.25, z: hp[1] };
  b.room = room; W.rooms.push(room);
}

// cartoon rubble left after a kaiju / tornado / quake wreck
export function wreckBuilding(W, scene, b) {
  if (b.wrecked) return false; b.wrecked = true;
  b.group.visible = false; b.upper.visible = false;
  b.walls.forEach((w) => w.off = true); b.plats.forEach((p, i) => { if (i > 0) p.off = true; });
  if (!b.rubble) {
    const R = new Batch(), wm = M(b.wall, { r: 0.8 }), rm = M(b.roof, { r: 0.6 }), fm = M(0xcfd6dd, { r: 0.8 });
    R.rbox(fm, b.w + 0.5, 0.5, b.d + 0.5, 0.1, b.x, b.baseY - 0.05, b.z);
    let s = b.id * 7.13;
    const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    for (let i = 0; i < 18; i++) { const sz = 0.6 + rnd() * 1.3; R.add(GEO.rbox(1, 1, 1, 0.12), i % 3 ? wm : rm, mat4(b.x + (rnd() - 0.5) * b.w * 0.9, b.baseY + 0.3 + rnd() * 0.6, b.z + (rnd() - 0.5) * b.d * 0.9, rnd() * 3, rnd() * 3, rnd() * 3, sz, sz * 0.6, sz)); }
    // jagged wall stubs
    [[0, b.d / 2], [0, -b.d / 2], [b.w / 2, 0], [-b.w / 2, 0]].forEach((p, i) => { const along = i < 2 ? b.w : b.d; for (let k = 0; k < 3; k++) { const hh = 0.6 + rnd() * 1.4, u = (k - 1) * along / 3; R.add(GEO.rbox(1, 1, 1, 0.06), wm, mat4(b.x + p[0] + (i < 2 ? u : 0), b.baseY + hh / 2, b.z + p[1] + (i < 2 ? 0 : u), 0, 0, 0, i < 2 ? along / 3.3 : 0.3, hh, i < 2 ? 0.3 : along / 3.3)); } });
    b.rubble = new THREE.Group(); R.build(b.rubble); scene.add(b.rubble);
  }
  b.rubble.visible = true; return true;
}
export function repairBuilding(W, b) {
  if (!b.wrecked) return; b.wrecked = false; b.group.visible = true; b.upper.visible = true; if (b.rubble) b.rubble.visible = false;
  b.walls.forEach((w) => w.off = false); b.plats.forEach((p) => p.off = false);
}

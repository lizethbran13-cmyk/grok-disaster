// effects: instanced 3D particles, debris, weather, telegraphs, water/lava, bolts, tornado funnels
import * as THREE from 'three';
import { G } from './gfx.js';
import { GEO, makeMeteor } from './models.js';
import { M, glow } from './mats.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const FX = {};
const _o = new THREE.Object3D(), _c = new THREE.Color();
class Pool {
  constructor(geo, mat, n, cast) { this.m = new THREE.InstancedMesh(geo, mat, n); this.m.castShadow = !!cast; this.m.frustumCulled = false; this.n = n; this.p = []; this.m.count = 0; this.m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); this.m.setColorAt(0, _c.set(0xffffff)); G.scene.add(this.m); }
  add(o) { if (this.p.length >= this.n) this.p.shift(); this.p.push(o); return o; }
  clear() { this.p.length = 0; this.m.count = 0; }
}
export function initFX() {
  FX.puffs = new Pool(GEO.sphere(1, 14, 10), new THREE.MeshStandardMaterial({ roughness: 0.9 }), 360);
  FX.fire = new Pool(GEO.sphere(1, 12, 8), new THREE.MeshBasicMaterial({ toneMapped: false }), 240);
  FX.debris = new Pool(GEO.rbox(1, 1, 1, 0.15, 2), new THREE.MeshStandardMaterial({ roughness: 0.7 }), 220, true);
  FX.sparks = new Pool(GEO.sphere(1, 8, 6), new THREE.MeshBasicMaterial({ toneMapped: false, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }), 260);
  FX.hail = new Pool(GEO.sphere(1, 10, 8), M(0xe0f7ff, { r: 0.1, cc: 1 }), 220, true);
  // rain streaks
  const RN = 1400, rg = new THREE.BufferGeometry(), rp = new Float32Array(RN * 6); rg.setAttribute('position', new THREE.BufferAttribute(rp, 3));
  FX.rain = new THREE.LineSegments(rg, new THREE.LineBasicMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0.55 })); FX.rain.frustumCulled = false; FX.rain.visible = false; G.scene.add(FX.rain);
  FX.rainD = []; for (let i = 0; i < RN; i++) FX.rainD.push([(Math.random() - 0.5) * 60, Math.random() * 30, (Math.random() - 0.5) * 60]);
  // snow / ash flakes
  const SN = 1600, sg = new THREE.BufferGeometry(), sp = new Float32Array(SN * 3); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  const cv = document.createElement('canvas'); cv.width = cv.height = 64; const cx = cv.getContext('2d'); const gr = cx.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.8)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); cx.fillStyle = gr; cx.fillRect(0, 0, 64, 64);
  FX.snow = new THREE.Points(sg, new THREE.PointsMaterial({ size: 0.35, map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false, color: 0xffffff })); FX.snow.frustumCulled = false; FX.snow.visible = false; G.scene.add(FX.snow);
  FX.snowD = []; for (let i = 0; i < SN; i++) FX.snowD.push([(Math.random() - 0.5) * 50, Math.random() * 25, (Math.random() - 0.5) * 50, Math.random() * 6.28]);
  // telegraph decals
  FX.rings = []; FX.ringGeo = new THREE.RingGeometry(0.86, 1, 64); FX.discGeo = new THREE.CircleGeometry(1, 64);
  FX.lines = []; FX.bolts = []; FX.waves = []; FX.meteors = []; FX.trails = [];
  // flood water
  FX.waterMat = new THREE.MeshStandardMaterial({ color: 0x19c3ff, roughness: 0.06, metalness: 0.08, transparent: true, opacity: 0.9, emissive: 0x0a4f7e, emissiveIntensity: 0.18 });
  // height texture (terrain + walls) lets the water know how deep it is: turquoise shallows, deep blue, shore foam rings
  FX.htTex = new THREE.DataTexture(new Uint8Array(4 * 4 * 4), 4, 4); FX.htTex.needsUpdate = true;
  FX.waterMat.onBeforeCompile = (sh) => {
    sh.uniforms.uT = { value: 0 }; sh.uniforms.uHt = { value: FX.htTex }; FX.waterMat.userData.sh = sh;
    sh.vertexShader = 'uniform float uT;\nvarying float vH;\nvarying vec3 vW;\n' + sh.vertexShader.replace('#include <begin_vertex>', `vec3 transformed = vec3(position);
      float w1 = sin(position.x*0.18 + uT*1.6)*0.35 + cos(position.y*0.22 + uT*1.3)*0.3 + sin((position.x+position.y)*0.5+uT*2.6)*0.1 + sin(position.x*0.9 - position.y*0.7 + uT*3.1)*0.05;
      transformed.z += w1; vH = w1; vW = (modelMatrix * vec4(transformed, 1.0)).xyz;`).replace('#include <beginnormal_vertex>', `vec3 objectNormal = normalize(vec3(-cos(position.x*0.18+uT*1.6)*0.063 - cos((position.x+position.y)*0.5+uT*2.6)*0.05, sin(position.y*0.22+uT*1.3)*0.066 - cos((position.x+position.y)*0.5+uT*2.6)*0.05, 1.0));`);
    sh.fragmentShader = 'uniform float uT;\nuniform sampler2D uHt;\nvarying float vH;\nvarying vec3 vW;\n' + sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      float th = texture2D(uHt, vW.xz / 320.0 + 0.5).r * 60.0 - 15.0;
      float dep = vW.y - th;
      float rip = sin(vW.x*1.3 + uT*2.0 + sin(vW.z*0.9)) * sin(vW.z*1.1 - uT*1.7 + sin(vW.x*0.7));
      float rip2 = sin(vW.x*2.7 - uT*2.4 + sin(vW.z*1.9 + uT)) * sin(vW.z*2.3 + uT*2.1);
      vec3 wc = mix(vec3(0.10, 0.82, 0.86), vec3(0.0, 0.38, 0.86), smoothstep(0.2, 4.0, dep));
      wc = mix(wc, vec3(0.02, 0.30, 0.70), smoothstep(6.0, 14.0, dep));
      wc *= mix(0.86, 1.1, smoothstep(-0.5, 0.5, vH));
      float shore = 1.0 - smoothstep(0.05, 0.45 + 0.25 * rip, dep);
      float foam = shore * (0.75 + 0.25 * rip2);
      foam = max(foam, (1.0 - smoothstep(0.9, 1.4 + 0.3 * rip2, dep)) * smoothstep(0.2, 0.8, rip2) * 0.7);
      foam = max(foam, smoothstep(0.58, 0.72, vH + rip * 0.1) * 0.5);
      foam = max(foam, smoothstep(0.93, 0.99, rip * rip2 + 0.4) * 0.3);
      diffuseColor.rgb = mix(wc, vec3(1.0), clamp(foam, 0.0, 1.0));
      diffuseColor.a = max(mix(0.62, 0.94, smoothstep(0.0, 2.5, dep)), foam);`);
  };
  FX.water = new THREE.Mesh(new THREE.PlaneGeometry(320, 320, 140, 140), FX.waterMat); FX.water.rotation.x = -Math.PI / 2; FX.water.visible = false; FX.water.receiveShadow = true; G.scene.add(FX.water);
  FX.foam = new THREE.Mesh(new THREE.PlaneGeometry(320, 6, 60, 1), M(0xffffff, { r: 0.6, op: 0.85, e: 0xffffff, ei: 0.3 })); FX.foam.rotation.x = -Math.PI / 2; FX.foam.visible = false; G.scene.add(FX.foam);
  // tsunami: a real curling wave wall (extruded curl profile), foam-white crest via vertex colours
  {
    const sp = new THREE.Shape(); const P = [[9, 0], [5, 0.35], [2.6, 0.72], [1, 0.95], [0, 1.0], [-1.1, 0.96], [-1.9, 0.82], [-2.2, 0.66], [-1.8, 0.56], [-1.2, 0.62], [-0.7, 0.5], [-0.6, 0.25], [-1.2, 0]];
    sp.moveTo(P[0][0], P[0][1]); P.slice(1).forEach((q) => sp.lineTo(q[0], q[1]));
    const g = new THREE.ExtrudeGeometry(sp, { depth: 1, bevelEnabled: false, curveSegments: 1, steps: 60 });
    g.translate(0, 0, -0.5); g.rotateY(-Math.PI / 2); g.scale(170, 1, 1);
    { const ps = g.attributes.position; for (let i = 0; i < ps.count; i++) { const x = ps.getX(i), y = ps.getY(i); ps.setZ(i, ps.getZ(i) + Math.sin(x * 0.07) * 2.5 + Math.sin(x * 0.19 + 1) * 0.8); ps.setY(i, y * (1 + 0.14 * Math.sin(x * 0.11 + 2))); } }
    const pos = g.attributes.position, col = new Float32Array(pos.count * 3), c = new THREE.Color(), lo = new THREE.Color(0x0057c2), hi = new THREE.Color(0x12b5e8), wh = new THREE.Color(0xffffff);
    for (let i = 0; i < pos.count; i++) { const y = pos.getY(i) / (1 + 0.14 * Math.sin(pos.getX(i) * 0.11 + 2)), z = pos.getZ(i); c.copy(lo).lerp(hi, Math.min(1, y * 1.15)); if (y > 0.96) c.lerp(wh, 0.85); else if (y > 0.88) c.lerp(wh, 0.3); col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeVertexNormals();
    FX.wave = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.12, metalness: 0.05, transparent: true, opacity: 0.93, emissive: 0x003a8c, emissiveIntensity: 0.35, side: THREE.DoubleSide, fog: false }));
    FX.wave.visible = false; G.scene.add(FX.wave);
  }
  // lava pool
  FX.lavaMat = new THREE.MeshStandardMaterial({ color: 0xff5a00, emissive: 0xff3c00, emissiveIntensity: 1.6, roughness: 0.4 });
  FX.lavaMat.onBeforeCompile = (sh) => { sh.uniforms.uT = { value: 0 }; FX.lavaMat.userData.sh = sh; sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWp;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWp = (modelMatrix*vec4(transformed,1.0)).xyz;'); sh.fragmentShader = 'uniform float uT;\nvarying vec3 vWp;\n' + sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\nfloat n = sin(vWp.x*0.7+uT)*sin(vWp.z*0.6-uT*0.8)+sin((vWp.x-vWp.z)*0.35+uT*1.7)*0.6; totalEmissiveRadiance *= 0.55 + 0.45*smoothstep(-0.6,1.2,n); diffuseColor.rgb = mix(vec3(0.25,0.05,0.02), diffuseColor.rgb, smoothstep(-0.9,0.2,n));'); };
  FX.lava = new THREE.Mesh(new THREE.CircleGeometry(1, 64), FX.lavaMat); FX.lava.rotation.x = -Math.PI / 2; FX.lava.visible = false; G.scene.add(FX.lava);
  // tornado funnels
  FX.torMat = new THREE.MeshStandardMaterial({ color: 0xb8c4d6, roughness: 1, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false });
  FX.torMat.onBeforeCompile = (sh) => { sh.uniforms.uT = { value: 0 }; FX.torMat.userData.sh = sh; sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vUv2;').replace('#include <uv_vertex>', '#include <uv_vertex>\nvUv2 = uv;'); sh.fragmentShader = 'uniform float uT;\nvarying vec2 vUv2;\n' + sh.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\nfloat st = sin(vUv2.x*25.0 + vUv2.y*14.0 - uT*9.0)*0.5+0.5; diffuseColor.rgb *= 0.7 + 0.45*st; diffuseColor.a *= (0.55+0.45*st) * smoothstep(0.0,0.08,vUv2.y) * (1.0 - smoothstep(0.85,1.0,vUv2.y));'); };
  const pts = []; for (let i = 0; i <= 24; i++) { const t = i / 24; pts.push(new THREE.Vector2(0.6 + Math.pow(t, 1.8) * 9 + Math.sin(t * 9) * 0.25, t * 34)); }
  FX.torGeo = new THREE.LatheGeometry(pts, 40);
  FX.tors = [];
  // safe arrow
  const ag = new THREE.Group(); const am = M(0x22e07a, { e: 0x16a34a, ei: 0.6, r: 0.3, cc: 0.6 });
  const shaft = new THREE.Mesh(GEO.cap(0.14, 0.9, 10), am); shaft.rotation.x = Math.PI / 2; ag.add(shaft);
  const head = new THREE.Mesh(GEO.cone(0.36, 0.6, 20), am); head.rotation.x = Math.PI / 2; head.position.z = 0.75; ag.add(head);
  ag.visible = false; G.scene.add(ag); FX.arrow = ag;
  // target beacon (pillar of light at the safe spot)
  FX.beacon = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 30, 24, 1, true), glow(0x22e07a, 0.18)); FX.beacon.visible = false; G.scene.add(FX.beacon);
  // coins
  const cg = mergeGeometries([new THREE.CylinderGeometry(0.42, 0.42, 0.1, 28).rotateX(Math.PI / 2).toNonIndexed(), new THREE.TorusGeometry(0.42, 0.06, 8, 28).toNonIndexed()]);
  FX.coins = new THREE.InstancedMesh(cg, M(0xffc83d, { r: 0.22, m: 1, e: 0x8a5a00, ei: 0.45 }), 120); FX.coins.castShadow = true; FX.coins.count = 0; FX.coins.frustumCulled = false; G.scene.add(FX.coins);
  FX.stars = new THREE.InstancedMesh(GEO.star(0.6, 0.22), M(0xfff07a, { e: 0xffc400, ei: 1.2, r: 0.25 }), 10); FX.stars.count = 0; FX.stars.frustumCulled = false; G.scene.add(FX.stars);
}
/* ---------- particles ---------- */
export function puff(x, y, z, n, color, o = {}) {
  const pool = o.fire ? FX.fire : FX.puffs;
  for (let i = 0; i < n; i++) {
    const a = Math.random() * 6.283, sp = (o.sp || 3) * (0.4 + Math.random());
    pool.add({ x: x + (Math.random() - 0.5) * (o.spread || 1), y: y + Math.random() * (o.yr || 0.5), z: z + (Math.random() - 0.5) * (o.spread || 1), vx: Math.cos(a) * sp, vy: (o.up || 2) * (0.5 + Math.random()), vz: Math.sin(a) * sp, t: 0, T: (o.life || 1.2) * (0.7 + Math.random() * 0.6), s0: (o.s || 0.6) * (0.6 + Math.random() * 0.6), s1: (o.s1 || 1.6) * (0.7 + Math.random() * 0.6), c: Array.isArray(color) ? color[i % color.length] : color, g: o.g || 0, drag: o.drag || 1.5 });
  }
}
export function debris(x, y, z, n, colors, o = {}) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * 6.283, sp = (o.sp || 6) * (0.3 + Math.random());
    FX.debris.add({ x, y: y + Math.random(), z, vx: Math.cos(a) * sp, vy: (o.up || 7) * (0.6 + Math.random() * 0.8), vz: Math.sin(a) * sp, rx: Math.random() * 6, ry: Math.random() * 6, wr: (Math.random() - 0.5) * 12, s: (o.s || 0.5) * (0.5 + Math.random()), t: 0, T: o.life || 3.5, c: colors[i % colors.length], gy: o.floor != null ? o.floor : y - 0.5 });
  }
}
export function sparks(x, y, z, n, color, o = {}) {
  for (let i = 0; i < n; i++) { const a = Math.random() * 6.283, b = Math.random() * 3.14, sp = (o.sp || 8) * (0.3 + Math.random()); FX.sparks.add({ x, y, z, vx: Math.cos(a) * Math.sin(b) * sp, vy: Math.cos(b) * sp * 0.6 + (o.up || 2), vz: Math.sin(a) * Math.sin(b) * sp, t: 0, T: (o.life || 0.6) * (0.6 + Math.random() * 0.8), s: o.s || 0.12, c: color, g: o.g != null ? o.g : 12 }); }
}
export function shockwave(x, y, z, r, color = 0xffffff, T = 0.6) {
  const m = new THREE.Mesh(GEO.torus(1, 0.08, 6.283, 8, 48), glow(color, 0.7)); m.material = m.material.clone(); m.rotation.x = Math.PI / 2; m.position.set(x, y + 0.2, z); G.scene.add(m); FX.waves.push({ m, t: 0, T, r });
}
/* ---------- telegraphs ---------- */
export function ring(id, x, y, z, r, color = 0xff2d55, prog = 0) {
  let R = FX.rings.find((q) => q.id === id);
  if (!R) {
    R = FX.rings.find((q) => !q.used);
    if (!R) { const g = new THREE.Group(); const a = new THREE.Mesh(FX.ringGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false, side: THREE.DoubleSide })); const d = new THREE.Mesh(FX.discGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.25, depthWrite: false, toneMapped: false, side: THREE.DoubleSide })); const f = new THREE.Mesh(FX.discGeo, d.material.clone()); g.add(a, d, f); g.rotation.x = -Math.PI / 2; G.scene.add(g); R = { g, a, d, f }; FX.rings.push(R); }
    R.used = true; R.id = id;
  }
  R.seen = true; R.g.visible = true; R.g.position.set(x, y + 0.08, z); R.g.scale.setScalar(r);
  R.a.material.color.setHex(color); R.d.material.color.setHex(color); R.f.material.color.setHex(color);
  const pulse = 0.5 + 0.5 * Math.sin(G.t * 12);
  R.a.material.opacity = 0.6 + 0.4 * pulse; R.d.material.opacity = 0.14 + 0.1 * pulse; R.f.scale.setScalar(Math.max(0.001, prog)); R.f.material.opacity = 0.35;
  return R;
}
export function line(id, x0, z0, x1, z1, y, w, color = 0xff2d55) {
  let L = FX.lines.find((q) => q.id === id);
  if (!L) { L = FX.lines.find((q) => !q.used); if (!L) { const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.4, depthWrite: false, toneMapped: false, side: THREE.DoubleSide })); m.rotation.order = 'YXZ'; G.scene.add(m); L = { m }; FX.lines.push(L); } L.used = true; L.id = id; }
  L.seen = true; const len = Math.hypot(x1 - x0, z1 - z0); L.m.visible = true; L.m.position.set((x0 + x1) / 2, y + 0.1, (z0 + z1) / 2); L.m.rotation.set(-Math.PI / 2, Math.atan2(x1 - x0, z1 - z0), 0, 'YXZ'); L.m.scale.set(w, len, 1);
  L.m.material.color.setHex(color); L.m.material.opacity = 0.3 + 0.25 * (0.5 + 0.5 * Math.sin(G.t * 14));
}
export function beginTele() { FX.rings.forEach((r) => r.seen = false); FX.lines.forEach((l) => l.seen = false); }
export function endTele() { FX.rings.forEach((r) => { if (!r.seen && r.used) { r.used = false; r.id = null; r.g.visible = false; } }); FX.lines.forEach((l) => { if (!l.seen && l.used) { l.used = false; l.id = null; l.m.visible = false; } }); }
/* ---------- lightning ---------- */
export function bolt(x, y, z) {
  const g = new THREE.Group(); let px = x + (Math.random() - 0.5) * 6, py = y + 55, pz = z + (Math.random() - 0.5) * 6; const mat = glow(0xd6ecff, 0.95), core = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  const seg = (ax, ay, az, bx, by, bz, r) => { const L = Math.hypot(bx - ax, by - ay, bz - az); const m = new THREE.Mesh(GEO.cyl(r, r, 1, 6), mat); m.scale.y = L; m.position.set((ax + bx) / 2, (ay + by) / 2, (az + bz) / 2); m.lookAt(bx, by, bz); m.rotateX(Math.PI / 2); g.add(m); const c = new THREE.Mesh(GEO.cyl(r * 0.4, r * 0.4, 1, 5), core); c.scale.y = L; c.position.copy(m.position); c.quaternion.copy(m.quaternion); g.add(c); };
  for (let i = 1; i <= 12; i++) { const t = i / 12, nx = x + (Math.random() - 0.5) * 4 * (1 - t), ny = y + 55 * (1 - t), nz = z + (Math.random() - 0.5) * 4 * (1 - t); seg(px, py, pz, nx, ny, nz, 0.35); if (Math.random() < 0.3) seg(nx, ny, nz, nx + (Math.random() - 0.5) * 6, ny - 4, nz + (Math.random() - 0.5) * 6, 0.18); px = nx; py = ny; pz = nz; }
  G.scene.add(g); FX.bolts.push({ g, t: 0 });
  G.flash.position.set(x, y + 12, z); G.flash.intensity = 30;
  sparks(x, y + 0.3, z, 26, 0xbfe3ff, { sp: 9 }); puff(x, y, z, 6, 0x9aa3ad, { s: 0.6, s1: 1.8 });
}
/* ---------- falling meteors / lava bombs ---------- */
export function faller(id, x, y, z, T, kind, size) {
  const m = kind === 'bomb' ? new THREE.Group() : makeMeteor(size || 1);
  if (kind === 'bomb') { m.add(new THREE.Mesh(GEO.sphere(0.8 * size, 16, 12), M(0xff6a00, { e: 0xff4400, ei: 2.2, r: 0.5 }))); m.add(new THREE.Mesh(GEO.sphere(1.2 * size, 16, 12), glow(0xff8a2a, 0.35))); }
  const dx = kind === 'bomb' ? 0 : 25, dz = kind === 'bomb' ? 0 : -18;
  G.scene.add(m); FX.meteors.push({ id, m, x, y, z, T, t: 0, dx, dz, kind, size: size || 1, h: kind === 'bomb' ? 40 : 70 });
}
export function clearFallers() { FX.meteors.forEach((f) => G.scene.remove(f.m)); FX.meteors.length = 0; }
/* ---------- update ---------- */
export function updateFX(dt, focus, weather) {
  const t = G.t;
  // puffs
  let P, n;
  for (P of [FX.puffs, FX.fire]) { n = 0;
  P.p = P.p.filter((o) => (o.t += dt) < o.T);
  for (const o of P.p) { const k = Math.exp(-o.drag * dt); o.vx *= k; o.vz *= k; o.vy = o.vy * k - o.g * dt; o.x += o.vx * dt; o.y += o.vy * dt; o.z += o.vz * dt; const u = o.t / o.T, s = (o.s0 + (o.s1 - o.s0) * Math.sqrt(u)) * (1 - u * u * u); _o.position.set(o.x, o.y, o.z); _o.scale.setScalar(Math.max(0.001, s)); _o.rotation.set(0, 0, 0); _o.updateMatrix(); P.m.setMatrixAt(n, _o.matrix); P.m.setColorAt(n, _c.setHex(o.c)); n++; }
  P.m.count = n; P.m.instanceMatrix.needsUpdate = true; if (P.m.instanceColor) P.m.instanceColor.needsUpdate = true; }
  // debris
  P = FX.debris; n = 0; P.p = P.p.filter((o) => (o.t += dt) < o.T);
  for (const o of P.p) { o.vy -= 22 * dt; o.x += o.vx * dt; o.y += o.vy * dt; o.z += o.vz * dt; o.rx += o.wr * dt; o.ry += o.wr * 0.7 * dt; if (o.y < o.gy + o.s * 0.5) { o.y = o.gy + o.s * 0.5; o.vy *= -0.35; o.vx *= 0.6; o.vz *= 0.6; o.wr *= 0.6; } const sh = o.t > o.T - 0.5 ? (o.T - o.t) / 0.5 : 1; _o.position.set(o.x, o.y, o.z); _o.rotation.set(o.rx, o.ry, 0); _o.scale.setScalar(o.s * sh); _o.updateMatrix(); P.m.setMatrixAt(n, _o.matrix); P.m.setColorAt(n, _c.setHex(o.c)); n++; }
  P.m.count = n; P.m.instanceMatrix.needsUpdate = true; if (P.m.instanceColor) P.m.instanceColor.needsUpdate = true;
  // sparks
  P = FX.sparks; n = 0; P.p = P.p.filter((o) => (o.t += dt) < o.T);
  for (const o of P.p) { o.vy -= o.g * dt; o.x += o.vx * dt; o.y += o.vy * dt; o.z += o.vz * dt; _o.position.set(o.x, o.y, o.z); _o.rotation.set(0, 0, 0); _o.scale.setScalar(o.s * (1 - o.t / o.T)); _o.updateMatrix(); P.m.setMatrixAt(n, _o.matrix); P.m.setColorAt(n, _c.setHex(o.c)); n++; }
  P.m.count = n; P.m.instanceMatrix.needsUpdate = true; if (P.m.instanceColor) P.m.instanceColor.needsUpdate = true;
  // hail
  P = FX.hail; n = 0;
  if (weather.hail > 0) for (let i = 0; i < weather.hail * 6; i++) P.add({ x: focus.x + (Math.random() - 0.5) * 36, y: focus.y + 22 + Math.random() * 6, z: focus.z + (Math.random() - 0.5) * 36, vy: -26, vx: 2, t: 0, T: 2.2, s: 0.09 + Math.random() * 0.1, gy: weather.groundY ? weather.groundY : 0, b: 0 });
  P.p = P.p.filter((o) => (o.t += dt) < o.T);
  for (const o of P.p) { o.vy -= 20 * dt; o.y += o.vy * dt; o.x += o.vx * dt; if (o.y < o.gy + o.s && o.b < 2) { o.y = o.gy + o.s; o.vy = Math.abs(o.vy) * 0.3; o.b++; } _o.position.set(o.x, o.y, o.z); _o.scale.setScalar(o.s); _o.updateMatrix(); P.m.setMatrixAt(n, _o.matrix); n++; }
  P.m.count = n; P.m.instanceMatrix.needsUpdate = true;
  // rain
  FX.rain.visible = weather.rain > 0.02;
  if (FX.rain.visible) {
    const a = FX.rain.geometry.attributes.position.array, D = FX.rainD, wx = weather.wind || 0;
    for (let i = 0; i < D.length; i++) { const d = D[i]; d[1] -= dt * 38; if (d[1] < 0) { d[1] += 30; d[0] = (Math.random() - 0.5) * 60; d[2] = (Math.random() - 0.5) * 60; } const x = focus.x + d[0], y = focus.y - 4 + d[1], z = focus.z + d[2]; a[i * 6] = x; a[i * 6 + 1] = y; a[i * 6 + 2] = z; a[i * 6 + 3] = x + wx * 0.05; a[i * 6 + 4] = y + 0.9; a[i * 6 + 5] = z; }
    FX.rain.geometry.attributes.position.needsUpdate = true; FX.rain.material.opacity = 0.55 * Math.min(1, weather.rain);
  }
  // snow / ash
  FX.snow.visible = weather.snow > 0.02 || weather.ash > 0.02;
  if (FX.snow.visible) {
    const a = FX.snow.geometry.attributes.position.array, D = FX.snowD, sp = weather.ash > 0 ? 2.5 : 3.5, wind = weather.snow > 0 ? 6 : 1;
    for (let i = 0; i < D.length; i++) { const d = D[i]; d[1] -= dt * sp; d[0] += dt * wind * (0.6 + Math.sin(t + d[3]) * 0.4); if (d[1] < 0) { d[1] += 25; d[0] = (Math.random() - 0.5) * 50; d[2] = (Math.random() - 0.5) * 50; } if (d[0] > 25) d[0] -= 50; a[i * 3] = focus.x + d[0]; a[i * 3 + 1] = focus.y - 3 + d[1]; a[i * 3 + 2] = focus.z + d[2]; }
    FX.snow.geometry.attributes.position.needsUpdate = true; FX.snow.material.color.setHex(weather.ash > 0 ? 0x555055 : 0xffffff); FX.snow.material.opacity = Math.min(1, Math.max(weather.snow, weather.ash)); FX.snow.material.size = weather.ash > 0 ? 0.25 : 0.38;
  }
  // bolts
  FX.bolts = FX.bolts.filter((b) => { b.t += dt; b.g.visible = b.t < 0.06 || (b.t > 0.1 && b.t < 0.32); if (b.t > 0.35) { G.scene.remove(b.g); return false; } return true; });
  FX.waves = FX.waves.filter((w) => { w.t += dt; const u = w.t / w.T; w.m.scale.setScalar(0.5 + u * w.r); w.m.material.opacity = 0.8 * (1 - u); if (u >= 1) { G.scene.remove(w.m); return false; } return true; });
  // fallers
  FX.meteors = FX.meteors.filter((f) => { f.t += dt; const u = Math.min(1, f.t / f.T); f.m.position.set(f.x + f.dx * (1 - u), f.y + f.h * (1 - u) + (f.kind === 'bomb' ? Math.sin(u * Math.PI) * 18 : 0), f.z + f.dz * (1 - u)); f.m.rotation.x += dt * 3; f.m.rotation.y += dt * 2; if (Math.random() < 0.5) puff(f.m.position.x, f.m.position.y, f.m.position.z, 1, [0x9aa0a8, 0xc8ccd2, 0x6b7280], { sp: 0.3, up: 0.3, s: 0.35 * f.size, s1: 1.0 * f.size, life: 1.0 }); if (Math.random() < 0.7) puff(f.m.position.x, f.m.position.y, f.m.position.z, 1, [0xff9a3c, 0xffd166], { fire: 1, sp: 0.6, up: 0.2, s: 0.4 * f.size, s1: 0.1, life: 0.35 }); if (u >= 1) { G.scene.remove(f.m); return false; } return true; });
  // shader clocks
  [FX.waterMat, FX.lavaMat, FX.torMat].forEach((m) => { if (m.userData.sh) m.userData.sh.uniforms.uT.value = t; });
  // coins spin handled by sim visuals
}
export function clearFX() { FX.puffs.clear(); FX.fire.clear(); FX.debris.clear(); FX.sparks.clear(); FX.hail.clear(); clearFallers(); FX.rings.forEach((r) => { r.used = false; r.g.visible = false; }); FX.lines.forEach((l) => { l.used = false; l.m.visible = false; }); }

// bake terrain + wall heights into the water's depth texture (called once per map load)
export function bakeWaterHeight(W) {
  const N = 256, E = 320, d = new Uint8Array(N * N * 4), h = new Float32Array(N * N);
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const x = (i + 0.5) / N * E - E / 2, z = (j + 0.5) / N * E - E / 2; h[j * N + i] = W.terrain(x, z); }
  const lim = W.half + 1;
  for (const w of W.walls) {
    if (w.y1 < -5 || w.y0 < -20 || Math.abs(w.x0) > lim + 2 && Math.abs(w.x1) > lim + 2 || Math.abs(w.z0) > lim + 2 && Math.abs(w.z1) > lim + 2) continue;
    if (w.x1 - w.x0 > 60 || w.z1 - w.z0 > 60) continue;
    const i0 = Math.floor((w.x0 + E / 2) / E * N), i1 = Math.ceil((w.x1 + E / 2) / E * N), j0 = Math.floor((w.z0 + E / 2) / E * N), j1 = Math.ceil((w.z1 + E / 2) / E * N);
    for (let j = Math.max(0, j0); j < Math.min(N, j1); j++) for (let i = Math.max(0, i0); i < Math.min(N, i1); i++) h[j * N + i] = Math.max(h[j * N + i], Math.min(44, w.y1));
  }
  for (let k = 0; k < N * N; k++) { const v = Math.max(0, Math.min(255, Math.round((h[k] + 15) / 60 * 255))); d[k * 4] = v; d[k * 4 + 1] = v; d[k * 4 + 2] = v; d[k * 4 + 3] = 255; }
  FX.htTex.dispose();
  FX.htTex = new THREE.DataTexture(d, N, N); FX.htTex.magFilter = THREE.LinearFilter; FX.htTex.minFilter = THREE.LinearFilter; FX.htTex.needsUpdate = true;
  if (FX.waterMat.userData.sh) FX.waterMat.userData.sh.uniforms.uHt.value = FX.htTex;
}

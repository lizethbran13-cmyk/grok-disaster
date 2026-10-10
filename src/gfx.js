// Grok Disaster Zone - "Tempest" render core: PBR + soft shadows + GTAO + bloom + physical sky + ACES tone mapping
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export const G = {
  quality: 'high', ao: true, renderer: null, scene: null, camera: null, composer: null, sky: null, sun: null, hemi: null,
  focus: new THREE.Vector3(), fps: 60, slowT: 0, autoStep: true, onStepDown: null, shake: 0, t: 0,
  mood: null, moodT: null
};
const MOODS = { // bright, saturated cartoon palette (top sky, horizon, fog)
  sunny:   { top: 0x1ea7ff, hor: 0xbff4ff, elev: 48, azim: 140, sunI: 2.4, hemiI: 1.05, fog: 0xb6ecff, fogNear: 90, fogFar: 320, exp: 1.0, env: 0.45, sunCol: 0xfff4dc, gnd: 0x9fd27a },
  desert:  { top: 0x2b9bff, hor: 0xffe9c2, elev: 50, azim: 120, sunI: 2.5, hemiI: 1.0, fog: 0xfde3bb, fogNear: 90, fogFar: 320, exp: 1.0, env: 0.45, sunCol: 0xfff0d0, gnd: 0xe8c690 },
  storm:   { top: 0x3b4f8f, hor: 0x8fa7cf, elev: 30, azim: 160, sunI: 1.2, hemiI: 1.05, fog: 0x8ea3c9, fogNear: 35, fogFar: 170, exp: 1.0, env: 0.4, sunCol: 0xd6e2ff, gnd: 0x7f9a8a },
  dusk:    { top: 0x5b4bd6, hor: 0xffa77a, elev: 14, azim: 250, sunI: 2.0, hemiI: 1.0, fog: 0xffb08a, fogNear: 55, fogFar: 240, exp: 1.0, env: 0.4, sunCol: 0xffc08a, gnd: 0xb08a7a },
  snow:    { top: 0x6fb6ff, hor: 0xeaf6ff, elev: 32, azim: 150, sunI: 1.5, hemiI: 1.3, fog: 0xe4f2ff, fogNear: 18, fogFar: 120, exp: 1.0, env: 0.5, sunCol: 0xf2f8ff, gnd: 0xd8e6f2 },
  volcano: { top: 0x7a2fb0, hor: 0xff8a4a, elev: 22, azim: 200, sunI: 2.0, hemiI: 1.0, fog: 0xff9a6a, fogNear: 40, fogFar: 190, exp: 1.0, env: 0.4, sunCol: 0xffb070, gnd: 0x9a6a5a },
  alien:   { top: 0x2a1a7a, hor: 0xd36cff, elev: 18, azim: 300, sunI: 1.4, hemiI: 1.0, fog: 0x9a6ad8, fogNear: 50, fogFar: 220, exp: 1.0, env: 0.45, sunCol: 0xd8c8ff, gnd: 0x6a8a7a },
  quake:   { top: 0x2f9bff, hor: 0xffe0b0, elev: 40, azim: 140, sunI: 2.3, hemiI: 1.15, fog: 0xf2dcb8, fogNear: 55, fogFar: 240, exp: 1.0, env: 0.45, sunCol: 0xfff0d0, gnd: 0xc8b090 }
};
export { MOODS };

export function initGfx(canvas) {
  const r = G.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', stencil: false });
  r.outputColorSpace = THREE.SRGBColorSpace;
  r.toneMapping = THREE.NeutralToneMapping; r.toneMappingExposure = 1.0;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = G.scene = new THREE.Scene();
  const cam = G.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 600);
  cam.position.set(20, 20, 20);
  // image based lighting for the PBR materials
  const pm = new THREE.PMREMGenerator(r);
  scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;
  // physical sky
  const sky = G.sky = new THREE.Mesh(new THREE.SphereGeometry(500, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false, toneMapped: false,
    uniforms: { top: { value: new THREE.Color(0x1ea7ff) }, hor: { value: new THREE.Color(0xbff4ff) }, sunDir: { value: new THREE.Vector3(0, 1, 0) }, sunCol: { value: new THREE.Color(0xfff4dc) } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }',
    fragmentShader: 'uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform vec3 sunCol; varying vec3 vP; void main(){ float h = clamp(vP.y, -0.2, 1.0); vec3 c = mix(hor, top, pow(max(h,0.0), 0.55)); float s = max(dot(normalize(vP), normalize(sunDir)), 0.0); c += sunCol * (pow(s, 600.0) * 1.6 + pow(s, 12.0) * 0.25); gl_FragColor = vec4(c, 1.0); }'
  }));
  sky.frustumCulled = false; sky.renderOrder = -1; scene.add(sky);
  scene.fog = new THREE.Fog(0xb6ecff, 70, 280);
  G.hemi = new THREE.HemisphereLight(0xd8f1ff, 0x9fd27a, 1.25); scene.add(G.hemi);
  G.amb = new THREE.AmbientLight(0xffffff, 0.12); scene.add(G.amb);
  const sun = G.sun = new THREE.DirectionalLight(0xfff1d6, 2.6);
  sun.castShadow = true; sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
  const sc = sun.shadow.camera; sc.left = -38; sc.right = 38; sc.top = 38; sc.bottom = -38; sc.near = 1; sc.far = 220;
  scene.add(sun); scene.add(sun.target);
  G.flash = new THREE.PointLight(0xcfe3ff, 0, 120, 1.2); scene.add(G.flash);
  setMood('sunny', true);
  window.addEventListener('resize', resize);
  setQuality(G.quality);
  resize();
  return G;
}

function buildComposer() {
  const r = G.renderer;
  if (G.composer) { G.composer.dispose && G.composer.dispose(); G.composer = null; }
  if (G.quality !== 'high') return;
  const w = innerWidth, h = innerHeight;
  const c = new EffectComposer(r);
  c.addPass(new RenderPass(G.scene, G.camera));
  if (G.ao) {
    const ao = new GTAOPass(G.scene, G.camera, w, h);
    ao.output = GTAOPass.OUTPUT.Default;
    ao.updateGtaoMaterial({ radius: 1.2, distanceExponent: 1.4, thickness: 1.5, scale: 1.0, samples: 12 });
    ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
    ao.blendIntensity = 0.7;
    c.addPass(ao); G.aoPass = ao;
  } else G.aoPass = null;
  const bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.28, 0.45, 0.95);
  c.addPass(bloom); G.bloom = bloom;
  c.addPass(new OutputPass());
  G.composer = c;
}

export function setQuality(q) {
  G.quality = q === 'low' ? 'low' : 'high';
  const r = G.renderer, dpr = window.devicePixelRatio || 1;
  r.setPixelRatio(G.quality === 'high' ? Math.min(dpr, 2) : Math.min(dpr, 1.25));
  r.shadowMap.enabled = true;
  const sz = G.quality === 'high' ? 2048 : 1024;
  if (G.sun.shadow.mapSize.x !== sz) { G.sun.shadow.mapSize.set(sz, sz); if (G.sun.shadow.map) { G.sun.shadow.map.dispose(); G.sun.shadow.map = null; } }
  r.shadowMap.type = G.quality === 'high' ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
  G.scene.traverse((o) => { if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach((m) => m.needsUpdate = true); } });
  buildComposer(); resize(); G.slowT = 0;
}

export function resize() {
  if (!G.renderer) return;
  const w = innerWidth, h = innerHeight;
  G.renderer.setSize(w, h, false);
  G.camera.aspect = w / h; G.camera.fov = w < h ? 62 : 52; G.camera.updateProjectionMatrix();
  if (G.composer) { G.composer.setSize(w, h); }
}

const _c = new THREE.Color(), _c2 = new THREE.Color();
export function setMood(name, instant) {
  const m = MOODS[name] || MOODS.sunny;
  G.moodT = m; G.moodName = name;
  if (instant || !G.mood) G.mood = Object.assign({}, m);
}
function lerpMood(dt) {
  const a = G.mood, b = G.moodT, k = Math.min(1, dt * 0.8);
  for (const key in b) {
    if (key === 'fog' || key === 'sunCol' || key === 'top' || key === 'hor' || key === 'gnd') { _c.setHex(a[key]); _c2.setHex(b[key]); _c.lerp(_c2, k); a[key] = _c.getHex(); }
    else a[key] += (b[key] - a[key]) * k;
  }
  const u = G.sky.material.uniforms;
  u.top.value.setHex(a.top); u.hor.value.setHex(a.hor); u.sunCol.value.setHex(a.sunCol);
  const phi = THREE.MathUtils.degToRad(90 - a.elev), th = THREE.MathUtils.degToRad(a.azim);
  const sp = new THREE.Vector3().setFromSphericalCoords(1, phi, th);
  u.sunDir.value.copy(sp); G.sky.position.copy(G.camera.position); G.hemi.groundColor.setHex(a.gnd);
  G.sunDir = sp;
  G.sun.intensity = a.sunI; G.sun.color.setHex(a.sunCol); G.hemi.intensity = a.hemiI;
  G.scene.fog.color.setHex(a.fog); G.scene.fog.near = a.fogNear * (G.quality === 'low' ? 0.8 : 1); G.scene.fog.far = a.fogFar * (G.quality === 'low' ? 0.8 : 1);
  G.renderer.toneMappingExposure = a.exp; G.scene.environmentIntensity = a.env;
}

export function render(dt) {
  G.t += dt;
  lerpMood(dt);
  // sun + shadow camera follow the focus point (snapped to texels to avoid shimmering)
  const f = G.focus, d = G.sunDir || new THREE.Vector3(0.5, 0.8, 0.3);
  const snap = 76 / G.sun.shadow.mapSize.x;
  const fx = Math.round(f.x / snap) * snap, fz = Math.round(f.z / snap) * snap;
  G.sun.position.set(fx + d.x * 90, Math.max(f.y, 0) + Math.max(0.25, d.y) * 90, fz + d.z * 90);
  G.sun.target.position.set(fx, Math.max(f.y, 0), fz); G.sun.target.updateMatrixWorld();
  if (G.flash.intensity > 0) G.flash.intensity = Math.max(0, G.flash.intensity - dt * 60);
  if (G.composer) G.composer.render(dt); else G.renderer.render(G.scene, G.camera);
  // auto step-down: HIGH -> LOW if under 30 fps for 5 seconds
  const now = performance.now(), rd = Math.min(1, (now - (G._lt || now)) / 1000); G._lt = now; // real (unclamped) frame time
  if (rd > 0) G.fps += (1 / Math.max(rd, 1e-3) - G.fps) * Math.min(1, rd * 3);
  if (document.hidden) return;
  if (G.autoStep && G.quality === 'high' && G.fps < 30) { G.slowT += rd; if (G.slowT > 5) { setQuality('low'); G.onStepDown && G.onStepDown(); } }
  else G.slowT = Math.max(0, G.slowT - rd * 2);
}
export { THREE };

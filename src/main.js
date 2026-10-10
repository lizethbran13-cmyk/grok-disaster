import * as THREE from 'three';
import { G, initGfx, render, setMood } from './gfx.js';
import { buildMap } from './maps.js';
import { makeSurvivor, makeKaiju, makeUFO } from './models.js';
initGfx(document.getElementById('c'));
const q = new URLSearchParams(location.search);
const W = buildMap(q.get('map') || 'city', G.scene);
setMood(W.meta.mood, true);
const s = makeSurvivor({}); s.root.position.set(0, 0, 0); G.scene.add(s.root);
if (q.get('k')) { const k = makeKaiju(); k.root.position.set(0, 0, -20); G.scene.add(k.root); }
const cx = +(q.get('x') || 30), cy = +(q.get('y') || 25), cz = +(q.get('z') || 30);
G.camera.position.set(cx, cy, cz); G.camera.lookAt(+(q.get('lx') || 0), +(q.get('ly') || 0), +(q.get('lz') || 0));
G.focus.set(+(q.get('lx') || 0), 0, +(q.get('lz') || 0));
G.autoStep = false;
let last = performance.now();
function loop(t) { const dt = Math.min(0.05, (t - last) / 1000); last = t; render(dt); window.__frames = (window.__frames || 0) + 1; requestAnimationFrame(loop); }
requestAnimationFrame(loop);

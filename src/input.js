// touch joystick (left), camera drag (right), pinch zoom, keyboard + mouse
export const I = { mx: 0, mz: 0, yaw: 0.6, pitch: 0.62, dist: 11.5, jumpQ: false, actQ: false, shieldQ: false, jet: false, enabled: false, joy: null, keys: {} };
const touches = new Map(); let joyId = null, joyO = null, pinch = null;
function isUI(t) { return t && t.closest && t.closest('button, .panel, .hudbtn, input, .card, .noTouch'); }
function joyEl() { return document.getElementById('joy'); }
function showJoy(x, y, dx, dy) { const j = joyEl(); if (!j) return; j.style.display = 'block'; j.style.left = (x - 60) + 'px'; j.style.top = (y - 60) + 'px'; const k = j.firstChild; if (k) k.style.transform = 'translate(' + dx + 'px,' + dy + 'px)'; }
function hideJoy() { const j = joyEl(); if (j) j.style.display = 'none'; }
export function initInput() {
  const opt = { passive: false };
  window.addEventListener('touchstart', (e) => {
    if (!I.enabled) return;
    for (const t of e.changedTouches) {
      if (isUI(t.target)) continue;
      e.preventDefault();
      if (t.clientX < innerWidth * 0.45 && t.clientY > innerHeight * 0.35 && joyId === null) { joyId = t.identifier; joyO = { x: t.clientX, y: t.clientY }; showJoy(t.clientX, t.clientY, 0, 0); }
      else touches.set(t.identifier, { x: t.clientX, y: t.clientY });
    }
    if (touches.size >= 2) { const a = [...touches.values()]; pinch = { d: Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y), dist: I.dist }; }
  }, opt);
  window.addEventListener('touchmove', (e) => {
    if (!I.enabled) return;
    for (const t of e.changedTouches) {
      if (t.identifier === joyId) { e.preventDefault(); let dx = t.clientX - joyO.x, dy = t.clientY - joyO.y; const L = Math.hypot(dx, dy), R = 55; if (L > R) { dx *= R / L; dy *= R / L; } I.mx = dx / R; I.mz = dy / R; showJoy(joyO.x, joyO.y, dx, dy); continue; }
      const p = touches.get(t.identifier); if (!p) continue; e.preventDefault();
      if (touches.size === 1) { I.yaw -= (t.clientX - p.x) * 0.008; I.pitch = Math.max(0.08, Math.min(1.35, I.pitch + (t.clientY - p.y) * 0.006)); }
      p.x = t.clientX; p.y = t.clientY;
    }
    if (touches.size >= 2 && pinch) { const a = [...touches.values()]; const d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); I.dist = Math.max(3.5, Math.min(22, pinch.dist * pinch.d / Math.max(20, d))); }
  }, opt);
  const end = (e) => { for (const t of e.changedTouches) { if (t.identifier === joyId) { joyId = null; I.mx = 0; I.mz = 0; hideJoy(); } touches.delete(t.identifier); } if (touches.size < 2) pinch = null; };
  window.addEventListener('touchend', end); window.addEventListener('touchcancel', end);
  // desktop
  let drag = null;
  window.addEventListener('mousedown', (e) => { if (!I.enabled || isUI(e.target)) return; drag = { x: e.clientX, y: e.clientY }; });
  window.addEventListener('mousemove', (e) => { if (!drag) return; I.yaw -= (e.clientX - drag.x) * 0.006; I.pitch = Math.max(0.08, Math.min(1.35, I.pitch + (e.clientY - drag.y) * 0.005)); drag = { x: e.clientX, y: e.clientY }; });
  window.addEventListener('mouseup', () => drag = null);
  window.addEventListener('wheel', (e) => { if (!I.enabled) return; I.dist = Math.max(3.5, Math.min(22, I.dist * (e.deltaY > 0 ? 1.1 : 0.9))); }, { passive: true });
  window.addEventListener('keydown', (e) => { if (e.target && e.target.tagName === 'INPUT') return; I.keys[e.code] = true; if (e.code === 'Space') { I.jumpQ = true; e.preventDefault(); } if (e.code === 'KeyE') I.actQ = true; if (e.code === 'KeyQ') I.shieldQ = true; if (e.code === 'KeyF') I.jet = true; });
  window.addEventListener('keyup', (e) => { I.keys[e.code] = false; if (e.code === 'KeyF') I.jet = false; });
}
export function readMove() {
  let x = I.mx, z = I.mz; const k = I.keys;
  if (k.KeyW || k.ArrowUp) z -= 1; if (k.KeyS || k.ArrowDown) z += 1; if (k.KeyA || k.ArrowLeft) x -= 1; if (k.KeyD || k.ArrowRight) x += 1;
  const L = Math.hypot(x, z); if (L > 1) { x /= L; z /= L; }
  return { x, z };
}

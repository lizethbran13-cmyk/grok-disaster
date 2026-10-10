// collision world: walls, walkable platforms/ramps, underground rooms, pads, cover spots
export const UNDER = -30; // floor height of every underground room
export function newWorld() {
  return { walls: [], plats: [], buildings: [], rooms: [], pads: [], tables: [], high: [], fires: [], coinSpots: [], spawns: [], terrain: () => 0, half: 80, sea: null, volcano: { x: 60, z: -60 }, landmarks: [] };
}
export function addWall(W, x0, z0, x1, z1, y0, y1, b) { const w = { x0: Math.min(x0, x1), x1: Math.max(x0, x1), z0: Math.min(z0, z1), z1: Math.max(z0, z1), y0, y1, b: b || null, off: false }; W.walls.push(w); return w; }
export function addPlat(W, x0, z0, x1, z1, top, b, ramp) { const p = { x0: Math.min(x0, x1), x1: Math.max(x0, x1), z0: Math.min(z0, z1), z1: Math.max(z0, z1), top, b: b || null, ramp: ramp || null, off: false }; W.plats.push(p); return p; }
function platTop(p, x, z) {
  if (!p.ramp) return p.top; const r = p.ramp; // {axis, a0, a1, h0, h1}
  const v = r.axis === 'x' ? x : z, t = Math.max(0, Math.min(1, (v - r.a0) / (r.a1 - r.a0)));
  return r.h0 + (r.h1 - r.h0) * t;
}
export function roomAt(W, x, z) { for (const r of W.rooms) if (x >= r.x0 - 0.5 && x <= r.x1 + 0.5 && z >= r.z0 - 0.5 && z <= r.z1 + 0.5) return r; return null; }
export function groundAt(W, x, z, y) {
  if (y < UNDER + 8) { const r = roomAt(W, x, z); return r ? UNDER : UNDER - 50; }
  let g = W.terrain(x, z);
  for (const p of W.plats) {
    if (p.off || x < p.x0 || x > p.x1 || z < p.z0 || z > p.z1) continue;
    const t = platTop(p, x, z); if (t <= y + 0.65 && t > g) g = t;
  }
  return g;
}
// push a circle (radius r) at height range [y, y+h] out of walls
export function collide(W, P, r = 0.4, h = 1.6) {
  for (let it = 0; it < 2; it++) for (const w of W.walls) {
    if (w.off || P.y + h < w.y0 || P.y + 0.3 > w.y1) continue;
    const cx = Math.max(w.x0, Math.min(P.x, w.x1)), cz = Math.max(w.z0, Math.min(P.z, w.z1));
    const dx = P.x - cx, dz = P.z - cz, d2 = dx * dx + dz * dz;
    if (d2 >= r * r) continue;
    if (d2 > 1e-8) { const d = Math.sqrt(d2), k = (r - d) / d; P.x += dx * k; P.z += dz * k; }
    else { // centre inside box: push out along smallest axis
      const l = P.x - w.x0, rr = w.x1 - P.x, f = P.z - w.z0, bk = w.z1 - P.z, m = Math.min(l, rr, f, bk);
      if (m === l) P.x = w.x0 - r; else if (m === rr) P.x = w.x1 + r; else if (m === f) P.z = w.z0 - r; else P.z = w.z1 + r;
    }
  }
  const H = W.half - 1; P.x = Math.max(-H, Math.min(H, P.x)); P.z = Math.max(-H, Math.min(H, P.z));
}
export function buildingAt(W, x, y, z) {
  for (const b of W.buildings) {
    if (b.wrecked) continue;
    if (x > b.ix0 && x < b.ix1 && z > b.iz0 && z < b.iz1 && y >= b.baseY - 0.5 && y < b.baseY + b.ceil - 0.3) return b;
  }
  return null;
}
export function onRoof(W, x, y, z) { for (const b of W.buildings) if (!b.wrecked && b.roofAccess && x > b.x - b.w / 2 && x < b.x + b.w / 2 && z > b.z - b.d / 2 && z < b.z + b.d / 2 && y > b.baseY + b.h - 0.5) return b; return null; }
export function nearestBuildingDist(W, x, z) { let best = 1e9; for (const b of W.buildings) { if (b.wrecked) continue; const dx = Math.max(Math.abs(x - b.x) - b.w / 2, 0), dz = Math.max(Math.abs(z - b.z) - b.d / 2, 0); best = Math.min(best, Math.hypot(dx, dz)); } return best; }
export function tableAt(W, x, y, z) { for (const t of W.tables) { if (t.b && t.b.wrecked) continue; if (Math.abs(y - t.y) < 1 && Math.hypot(x - t.x, z - t.z) < t.r) return t; } return null; }
export function padAt(W, x, y, z) { for (const p of W.pads) { if (p.b && p.b.wrecked && (p.kind === 'elev' || p.kind === 'elevdown')) continue; if (Math.abs(y - p.y) < 1.6 && Math.hypot(x - p.x, z - p.z) < (p.r || 1.1)) return p; } return null; }

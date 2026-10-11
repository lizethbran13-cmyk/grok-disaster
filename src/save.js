// profile, shop catalogue, achievements (localStorage)
const KEY = 'grokDisaster.save.v1';
export const SHOP = [
  { id: 'hp', icon: '❤️', name: 'Max Health', desc: '+25 max health per level', prices: [80, 160, 300, 500], kind: 'upg' },
  { id: 'armor', icon: '⛑️', name: 'Hard Hat & Vest', desc: 'Take less damage (-20% / -35% / -45%)', prices: [150, 350, 600], kind: 'upg' },
  { id: 'regen', icon: '💚', name: 'Healing Snacks', desc: 'Heal slowly over time (+1 / +2 / +3 HP a second)', prices: [120, 250, 450], kind: 'upg' },
  { id: 'speed', icon: '👟', name: 'Speed Boots', desc: 'Run faster (+15% / +30%)', prices: [150, 350], kind: 'upg' },
  { id: 'umbrella', icon: '☂️', name: 'Mega Umbrella', desc: 'Blocks hail, ash and half of falling junk while outside', prices: [120], kind: 'upg' },
  { id: 'shield', icon: '🫧', name: 'Bubble Shield', desc: 'Tap 🫧 for 5 seconds of total safety (once per wave, twice at Lv2)', prices: [250, 500], kind: 'upg' },
  { id: 'jetpack', icon: '🚀', name: 'Jetpack', desc: 'Hold 🚀 to fly up onto roofs and high ground', prices: [400], kind: 'upg' },
  { id: 'magnet', icon: '🧲', name: 'Coin Magnet', desc: 'Pull in coins from far away', prices: [200], kind: 'upg' }
];
export const HATSHOP = [
  { id: 'cap', name: 'Ball Cap', price: 0 }, { id: 'beanie', name: 'Beanie', price: 60 }, { id: 'party', name: 'Party Hat', price: 80 },
  { id: 'cowboy', name: 'Cowboy Hat', price: 120 }, { id: 'chef', name: 'Chef Hat', price: 120 }, { id: 'dino', name: 'Dino Hood', price: 200 },
  { id: 'astro', name: 'Space Helmet', price: 250 }, { id: 'crown', name: 'Golden Crown', price: 400 }, { id: 'none', name: 'No Hat', price: 0 },
  { id: 'ratears', name: 'Ratita Ears', price: 150, dlc: 1 }, { id: 'meteo', name: 'Weather Hunter Hat', reward: 'Solve a Weather Hunter case', dlc: 1 }
];
export const SHIRTS = [0x3b82f6, 0xef4444, 0x22c55e, 0xf59e0b, 0xa855f7, 0xec4899, 0x14b8a6, 0xf97316, 0x111827, 0xffffff];
export const ACH = [
  { id: 'first', icon: '🌟', name: 'First Survivor', desc: 'Survive your first disaster' },
  { id: 'bunker', icon: '☢️', name: 'Bunker Buddy', desc: 'Ride out a disaster in the nuclear bunker' },
  { id: 'kaiju', icon: '🦖', name: 'Kaiju Dodger', desc: 'Survive ROARGON without getting knocked out' },
  { id: 'allnine', icon: '🌪️', name: 'Storm Chaser', desc: 'Survive every type of disaster' },
  { id: 'helper', icon: '🤝', name: 'Helper Hero', desc: 'Help 5 knocked-out survivors back up' },
  { id: 'rich', icon: '💰', name: 'Coin Collector', desc: 'Earn 1,000 coins total' },
  { id: 'perfect', icon: '🛡️', name: 'Untouchable', desc: 'Finish a whole round without a knockout' },
  { id: 'dry', icon: '🏢', name: 'High & Dry', desc: 'Survive a flood on high ground' },
  { id: 'beamed', icon: '🛸', name: 'Beamed Up', desc: 'Get abducted by aliens (oops!)' },
  { id: 'travel', icon: '🗺️', name: 'World Traveler', desc: 'Play on all 4 maps' },
  { id: 'picker', icon: '🎯', name: 'Disaster Picker', desc: 'Pay coins to choose a disaster' },
  { id: 'cover', icon: '🪑', name: 'Drop, Cover, Hold On', desc: 'Hide under a table during an earthquake' },
  { id: 'rounds10', icon: '🏆', name: 'Disaster Pro', desc: 'Finish 10 rounds' },
  { id: 'acid', icon: '🧪', name: 'Goo-Proof', desc: 'Survive an acid storm without a knockout', dlc: 1 },
  { id: 'dragon', icon: '🐉', name: 'Dragon Dodger', desc: 'Survive EMBERWING the dragon without a knockout', dlc: 1 },
  { id: 'dino', icon: '🦖', name: 'Stampede Survivor', desc: 'Survive the dino destruction without a knockout', dlc: 1 },
  { id: 'hunter', icon: '🌨️', name: 'Weather Hunter', desc: 'Solve your first Ratita Industries case', dlc: 1 },
  { id: 'hunter3', icon: '🏅', name: 'Chief Meteorologist', desc: 'Solve all 3 Weather Hunter cases', dlc: 1 },
  { id: 'storm12', icon: '⛈️', name: 'Super Storm Chaser', desc: 'Survive all 12 disaster types', dlc: 1 }
];
function fresh() {
  return { v: 1, coins: 150, name: '', look: { shirt: 0x3b82f6, pants: 0x334155, skin: 0xf6c9a0, hair: 0x3a2516, hat: 'cap', hatColor: 0xef4444 }, upg: {}, hats: ['cap', 'none'],
    stats: { rounds: 0, waves: 0, kos: 0, revives: 0, earned: 0, survived: {}, maps: {}, best: 0, picks: 0, coinsPicked: 0 }, ach: {}, opts: { gfx: 'high', sound: true }, howto: false, hunt: {} };
}
export const S = { d: fresh() };
export function load() {
  try { const j = JSON.parse(localStorage.getItem(KEY) || 'null'); if (j && j.v === 1) S.d = Object.assign(fresh(), j, { stats: Object.assign(fresh().stats, j.stats || {}), look: Object.assign(fresh().look, j.look || {}), opts: Object.assign(fresh().opts, j.opts || {}) }); } catch (e) {}
  return S.d;
}
export function save() { try { localStorage.setItem(KEY, JSON.stringify(S.d)); } catch (e) {} }
export const lvl = (id) => S.d.upg[id] | 0;
export function addCoins(n, why) { S.d.coins = Math.max(0, S.d.coins + n); if (n > 0) S.d.stats.earned += n; save(); }
export function unlock(id) { if (S.d.ach[id]) return null; S.d.ach[id] = Date.now(); save(); return ACH.find((a) => a.id === id); }
export function myUpg() { return { hp: lvl('hp'), armor: lvl('armor'), regen: lvl('regen'), speed: lvl('speed'), umbrella: lvl('umbrella'), shield: lvl('shield'), jetpack: lvl('jetpack'), magnet: lvl('magnet') }; }

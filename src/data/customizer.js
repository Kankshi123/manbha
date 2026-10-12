// ─────────────────────────────────────────────────────────────────────────────
// MANBHA – Customizer Options
// Edit this file to add/remove colour swatches, necklines, sleeves, fabrics.
// ─────────────────────────────────────────────────────────────────────────────

export const customizerOptions = {
  colors: [
    { id: 'crimson',    label: 'Crimson',     hex: '#8B1A2E', cssFilter: 'hue-rotate(0deg) saturate(1.2)' },
    { id: 'ivory',      label: 'Ivory',       hex: '#F6F0E6', cssFilter: 'hue-rotate(30deg) saturate(0.3) brightness(1.3)' },
    { id: 'maroon',     label: 'Maroon',      hex: '#4A0E1B', cssFilter: 'hue-rotate(340deg) saturate(1.5) brightness(0.8)' },
    { id: 'gold',       label: 'Antique Gold',hex: '#B8893B', cssFilter: 'hue-rotate(25deg) saturate(1.4) brightness(0.95)' },
    { id: 'midnight',   label: 'Midnight Blue',hex: '#1A1A4E', cssFilter: 'hue-rotate(220deg) saturate(1.5) brightness(0.7)' },
    { id: 'sage',       label: 'Sage Green',  hex: '#7A9A7A', cssFilter: 'hue-rotate(120deg) saturate(0.8) brightness(0.95)' },
    { id: 'blush',      label: 'Blush Rose',  hex: '#E8C9C0', cssFilter: 'hue-rotate(355deg) saturate(0.5) brightness(1.15)' },
    { id: 'emerald',    label: 'Deep Emerald',hex: '#0F3D33', cssFilter: 'hue-rotate(155deg) saturate(1.8) brightness(0.65)' },
    { id: 'rust',       label: 'Terracotta',  hex: '#B5451B', cssFilter: 'hue-rotate(10deg) saturate(1.6) brightness(0.85)' },
    { id: 'lavender',   label: 'Lavender',    hex: '#9B8EC4', cssFilter: 'hue-rotate(255deg) saturate(0.7) brightness(1.1)' },
  ],

  necklines: [
    { id: 'sweetheart', label: 'Sweetheart' },
    { id: 'v-neck',     label: 'V-Neck' },
    { id: 'round',      label: 'Round Neck' },
    { id: 'square',     label: 'Square Neck' },
    { id: 'off-shoulder', label: 'Off-Shoulder' },
    { id: 'halter',     label: 'Halter Neck' },
    { id: 'boat',       label: 'Boat Neck' },
    { id: 'collar',     label: 'Collar (Mandarin)' },
  ],

  sleeves: [
    { id: 'sleeveless', label: 'Sleeveless' },
    { id: 'cap',        label: 'Cap Sleeve' },
    { id: 'half',       label: 'Half Sleeve' },
    { id: 'three-quarter', label: '¾ Sleeve' },
    { id: 'full',       label: 'Full Sleeve' },
    { id: 'bell',       label: 'Bell Sleeve' },
    { id: 'puff',       label: 'Puff Sleeve' },
    { id: 'cold-shoulder', label: 'Cold Shoulder' },
  ],

  fabrics: [
    { id: 'silk',       label: 'Pure Silk',    description: 'Luminous, rich and timeless.' },
    { id: 'georgette',  label: 'Georgette',    description: 'Lightweight, flowy and flattering.' },
    { id: 'velvet',     label: 'Velvet',        description: 'Deep texture and winter opulence.' },
    { id: 'organza',    label: 'Organza',       description: 'Sheer, structured and ethereal.' },
    { id: 'cotton',     label: 'Premium Cotton',description: 'Breathable, crisp and everyday-luxe.' },
    { id: 'linen',      label: 'Linen',         description: 'Earthy, relaxed and naturally elegant.' },
    { id: 'chanderi',   label: 'Chanderi',      description: 'Fine weave with gold zari shimmer.' },
    { id: 'crepe',      label: 'Crepe',          description: 'Smooth drape with subtle texture.' },
  ],

  embroidery: [
    { id: 'minimal',  label: 'Minimal',       description: 'Subtle accents — borders and motifs only.' },
    { id: 'classic',  label: 'Classic',       description: 'Balanced coverage — pallu and yoke embroidery.' },
    { id: 'heavy',    label: 'Heavy',         description: 'Full coverage — bridal-level kadhai throughout.' },
    { id: 'custom',   label: 'Custom Design', description: 'Bring your own reference for a bespoke motif.' },
  ],
};

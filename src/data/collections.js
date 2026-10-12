// ─────────────────────────────────────────────────────────────────────────────
// MANBHA – Collections Data
// ─────────────────────────────────────────────────────────────────────────────

export const collections = [
  {
    id: 'lehenga',
    label: 'Lehenga',
    labelHindi: 'लहंगा',
    gender: ['women', 'kids'],
    tagline: 'Every twirl, a poem.',
    description:
      'From bridal red to pastel sangeet, our lehengas are crafted for the moments that stay forever. Hand-embroidered, made-to-measure and utterly you.',
    fabrics: ['Silk', 'Georgette', 'Velvet', 'Net', 'Organza'],
    occasions: ['Wedding', 'Sangeet', 'Mehendi', 'Reception', 'Festive'],
  },
  {
    id: 'western',
    label: 'Western',
    labelHindi: 'वेस्टर्न',
    gender: ['women', 'men', 'kids', 'unisex'],
    tagline: 'Modern lines, personal fit.',
    description:
      'Co-ord sets, blazers, gowns, trousers and jumpsuits — cut to your exact silhouette. Minimalist, confident and built for real life.',
    fabrics: ['Cotton', 'Linen', 'Crepe', 'Satin', 'Chiffon'],
    occasions: ['Party', 'Pre-wedding shoot', 'Casual', 'Corporate', 'Festive'],
  },
  {
    id: 'traditional',
    label: 'Traditional',
    labelHindi: 'पारंपरिक',
    gender: ['women', 'men', 'kids'],
    tagline: 'Roots, reimagined.',
    description:
      'Sarees, salwar suits, sherwanis, bandhgalas and kurta sets — each one drawing from centuries of craft and reshaped for you.',
    fabrics: ['Khadi', 'Silk', 'Cotton', 'Chanderi', 'Banarasi'],
    occasions: ['Wedding', 'Puja', 'Festival', 'Reception'],
  },
  {
    id: 'indo-western',
    label: 'Indo-Western',
    labelHindi: 'इंडो-वेस्टर्न',
    gender: ['women', 'men', 'kids', 'unisex'],
    tagline: 'Where two worlds dress as one.',
    description:
      'Cape lehengas, dhoti trousers, fusion kurtas and jacket drapes — the language of tradition, spoken in a modern accent.',
    fabrics: ['Silk', 'Velvet', 'Linen', 'Organza', 'Cotton'],
    occasions: ['Wedding', 'Reception', 'Party', 'Pre-wedding shoot', 'Festive'],
  },
];

export const genderFilters = [
  { id: 'all', label: 'All' },
  { id: 'women', label: 'Women' },
  { id: 'men', label: 'Men' },
  { id: 'kids', label: 'Kids' },
  { id: 'unisex', label: 'Unisex' },
];

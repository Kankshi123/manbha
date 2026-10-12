// ─────────────────────────────────────────────────────────────────────────────
// MANBHA – Rental Catalogue
// Update prices, sizes and availability before going live.
// ─────────────────────────────────────────────────────────────────────────────
import { media } from './media.js';

export const rentalItems = [
  {
    id: 'r1',
    name: 'Crimson Bridal Lehenga',
    category: 'Lehenga',
    gender: 'women',
    occasions: ['Wedding', 'Reception', 'Sangeet'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    pricePerDay: 2500,   // ⚠️ placeholder — confirm with studio
    deposit: 5000,        // ⚠️ placeholder refundable deposit
    images: [media.rentals.r1.front, media.rentals.r1.back],
    description: 'Deep crimson silk lehenga with heavy zardozi embroidery. A timeless bridal statement.',
    available: true,
  },
  {
    id: 'r2',
    name: 'Ivory Sherwani Set',
    category: 'Traditional',
    gender: 'men',
    occasions: ['Wedding', 'Reception', 'Festive'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    pricePerDay: 1800,
    deposit: 3500,
    images: [media.rentals.r2.front, media.rentals.r2.back],
    description: 'Classic ivory sherwani with gold butti weave. Paired with matching churidar and dupatta.',
    available: true,
  },
  {
    id: 'r3',
    name: 'Sage Green Gown',
    category: 'Western',
    gender: 'women',
    occasions: ['Reception', 'Party', 'Pre-wedding shoot'],
    sizes: ['XS', 'S', 'M', 'L'],
    pricePerDay: 2000,
    deposit: 4000,
    images: [media.rentals.r3.front, media.rentals.r3.back],
    description: 'Draped chiffon gown in sage with a thigh-high slit. Clean, contemporary and captivating.',
    available: true,
  },
  {
    id: 'r4',
    name: 'Rose Gold Indo-Western Set',
    category: 'Indo-Western',
    gender: 'women',
    occasions: ['Sangeet', 'Mehendi', 'Party', 'Pre-wedding shoot'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    pricePerDay: 2200,
    deposit: 4500,
    images: [media.rentals.r4.front, media.rentals.r4.back],
    description: 'Rose gold sharara top with a cape overlay. Perfect for a mehendi sunrise or a sangeet night.',
    available: true,
  },
  {
    id: 'r5',
    name: 'Kids Festive Anarkali',
    category: 'Lehenga',
    gender: 'kids',
    occasions: ['Wedding', 'Festive', 'Sangeet'],
    sizes: ['2Y', '4Y', '6Y', '8Y', '10Y'],
    pricePerDay: 800,
    deposit: 1500,
    images: [media.rentals.r5.front, media.rentals.r5.back],
    description: 'A bright anarkali kurta with embroidered churidar. Because little ones deserve their moment too.',
    available: true,
  },
  {
    id: 'r6',
    name: 'Midnight Blue Cape Lehenga',
    category: 'Indo-Western',
    gender: 'unisex',
    occasions: ['Reception', 'Party', 'Pre-wedding shoot', 'Festive'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    pricePerDay: 2800,
    deposit: 5500,
    images: [media.rentals.r6.front, media.rentals.r6.back],
    description: 'A drama in midnight blue — floor-length cape over an embroidered lehenga. The room will remember.',
    available: false, // currently booked
  },
];

export const rentalOccasions = ['Wedding', 'Sangeet', 'Mehendi', 'Reception', 'Party', 'Pre-wedding shoot', 'Festive'];
export const rentalCategories = ['Lehenga', 'Western', 'Traditional', 'Indo-Western'];
export const rentalGenders = ['women', 'men', 'kids', 'unisex'];

export const rentalFAQ = [
  {
    q: 'How does the security deposit work?',
    a: 'A refundable security deposit (shown on each item) is collected at the time of booking. It is returned in full upon return of the outfit in good condition. ⚠️ Confirm exact amount with the studio.',
  },
  {
    q: 'How long is the standard rental period?',
    a: 'Standard rentals are for 2–4 days. Extended periods can be arranged at an additional daily rate. ⚠️ Confirm exact policy with the studio.',
  },
  {
    q: 'Are alterations included in the rental?',
    a: 'Yes. We provide a complimentary fitting and minor alterations (hemming, blouse size) before your event so the outfit fits perfectly.',
  },
  {
    q: 'Do I need to dry-clean after returning?',
    a: 'No. We handle all professional cleaning after every rental. Simply return the outfit in the bag provided.',
  },
  {
    q: 'What if I return late?',
    a: 'Late returns incur an additional daily rental charge. We ask that you inform us at least 24 hours in advance if your plans change. ⚠️ Confirm exact policy with the studio.',
  },
  {
    q: 'What happens if the outfit is damaged?',
    a: 'Minor wear is expected and covered. In the case of significant damage or loss, the security deposit is adjusted accordingly and a damage assessment fee may apply. ⚠️ Confirm exact policy with the studio.',
  },
];

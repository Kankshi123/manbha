// ─────────────────────────────────────────────────────────────────────────────
// MANBHA – Media Registry
// High-quality fashion & tailoring imagery from Unsplash.
// ─────────────────────────────────────────────────────────────────────────────

const UP = '?auto=format&fit=crop&w=1600&q=80';
const UPS = '?auto=format&fit=crop&w=800&q=80';

export const media = {
  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    videoPoster: `https://images.unsplash.com/photo-1573879500655-98f2012dd1db?auto=format&fit=crop&w=1600&q=80`,
    image1: `https://images.unsplash.com/photo-1573879500655-98f2012dd1db?auto=format&fit=crop&w=1600&q=80`,
    image2: `https://images.unsplash.com/photo-1566737236500-c8ac43014a67${UP}`,
    image3: `https://images.unsplash.com/photo-1605296867304-46d5465a13f1${UP}`,
  },

  // ── Collections ─────────────────────────────────────────────────────────────
  collections: {
    lehenga: {
      hero: `https://images.unsplash.com/photo-1721324807069-a19b0f5d6748?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UP}`,
      gallery: [
        `https://images.unsplash.com/photo-1610030469983-98e550d6193c${UPS}`,
        `https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03${UPS}`,
        `https://images.unsplash.com/photo-1617627143750-d86bc21e42bb${UPS}`,
      ],
    },
    western: {
      hero: `https://images.unsplash.com/photo-1509631179647-0177331693ae${UP}`,
      gallery: [
        `https://images.unsplash.com/photo-1509631179647-0177331693ae${UPS}`,
        `https://images.unsplash.com/photo-1539109136881-3be0616acf4b${UPS}`,
        `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f${UPS}`,
      ],
    },
    traditional: {
      hero: `https://images.unsplash.com/photo-1609357605129-26f69add5d6e${UP}`,
      gallery: [
        `https://images.unsplash.com/photo-1609357605129-26f69add5d6e${UPS}`,
        `https://images.unsplash.com/photo-1557804506-669a67965ba0${UPS}`,
        `https://images.unsplash.com/photo-1617627143750-d86bc21e42bb${UPS}`,
      ],
    },
    indoWestern: {
      hero: `https://plus.unsplash.com/premium_photo-1682090774051-77cdd6b1e7cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UP}`,
      gallery: [
        `https://images.unsplash.com/photo-1617627143750-d86bc21e42bb${UPS}`,
        `https://images.unsplash.com/photo-1490481651871-ab68de25d43d${UPS}`,
        `https://images.unsplash.com/photo-1509631179647-0177331693ae${UPS}`,
      ],
    },
  },

  // ── Services ─────────────────────────────────────────────────────────────────
  services: {
    stitch: `https://egltrendz.com/wp-content/uploads/2021/11/k-adams-bUvVIfWyOeU-unsplash.jpg`, // Bespoke Stitching (cloth with tassels)
    rent: `https://images.unsplash.com/photo-1649930055986-ca57250a7fd4?auto=format&fit=crop&w=1600&q=80`, // Rent a Look
    customize: `https://images.unsplash.com/photo-1489987707025-afc232f7ea0f${UP}`, // customization & tailoring
  },

  // ── Rental Items ────────────────────────────────────────────────────────────
  rentals: {
    r1: {
      front: `https://images.unsplash.com/photo-1724856605003-6a8fe56ee789?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UPS}`,
      back: `https://images.unsplash.com/photo-1724856605003-6a8fe56ee789?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UPS}`,
    },
    r2: {
      front: `https://images.unsplash.com/photo-1783188223691-8a233ee51cd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UPS}`,
      back: `https://images.unsplash.com/photo-1783188223126-69e5d0b56f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UPS}`,
    },
    r3: {
      front: `https://images.unsplash.com/photo-1615102731632-9978cdec7764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UPS}`,
      back: `https://plus.unsplash.com/premium_photo-1661326205142-d13224349fc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UPS}`,
    },
    r4: {
      front: `https://images.unsplash.com/photo-1768803968271-06b01687c53b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UPS}`,
      back: `https://images.unsplash.com/photo-1490481651871-ab68de25d43d${UPS}`,
    },
    r5: {
      front: `https://images.unsplash.com/photo-1707805301407-c28c34aff2f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UPS}`,
      back: `https://images.unsplash.com/photo-1707805301407-c28c34aff2f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UPS}`,
    },
    r6: {
      front: `https://images.unsplash.com/photo-1736849816754-402cebbb27f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UPS}`,
      back: `https://images.unsplash.com/photo-1610047592873-c0c202ed5461?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UPS}`,
    },
  },

  // ── Customizer ──────────────────────────────────────────────────────────────
  customizer: {
    base: `https://images.unsplash.com/photo-1721324807069-a19b0f5d6748?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D${UP}`,
  },

  // ── Process steps ───────────────────────────────────────────────────────────
  process: [
    `https://images.unsplash.com/photo-1552664730-d307ca884978${UP}`,  // consult
    `https://images.unsplash.com/photo-1558618666-fcd25c85cd64${UP}`,  // measure
    `https://images.unsplash.com/photo-1523381294911-8d3cead13475${UP}`, // design
    `https://images.unsplash.com/photo-1467043237213-65f2da53396f${UP}`, // stitch
    `https://images.unsplash.com/photo-1584907797015-7554cd315667${UP}`, // fitting
    `https://images.unsplash.com/photo-1490481651871-ab68de25d43d${UP}`, // delivery
  ],

  // ── Lookbook ────────────────────────────────────────────────────────────────
  lookbook: [
    { src: `https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&h=1100&q=80`, caption: 'Crimson Lehenga — Bridal Collection', orientation: 'portrait' },
    { src: `https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&h=700&q=80`, caption: 'Ivory Gown — Western Silhouette', orientation: 'landscape' },
    { src: `https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&h=1100&q=80`, caption: 'Royal Sherwani — Men\'s Traditional', orientation: 'portrait' },
    { src: `https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&h=1100&q=80`, caption: 'Sunset Lehenga — Festive Edit', orientation: 'portrait' },
    { src: `https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&h=700&q=80`, caption: 'Street Luxe — Contemporary Cuts', orientation: 'landscape' },
    { src: `https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&h=1100&q=80`, caption: 'Anarkali Fusion — Festive Edit', orientation: 'portrait' },
    { src: `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&h=1100&q=80`, caption: 'Minimalist Kurta — Everyday Ritual', orientation: 'portrait' },
    { src: `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&h=700&q=80`, caption: 'Power Blazer — Beyond Boundaries', orientation: 'landscape' },
  ],

  // ── Craft / Fabrics ─────────────────────────────────────────────────────────
  craft: {
    zardozi: '/craft/zardozi.jpg',
    gotaPatti: '/craft/gota-patti.jpg',
    resham: '/craft/resham.jpg',
    chikankari: '/craft/chikankari.jpg',
    mirrorWork: '/craft/mirror-work.jpg',
    handEmbroidery: '/craft/hand-embroidery.jpg',
    digital: '/craft/digital-prints.jpg',
    studioDetail: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64${UP}`,
  },

  // ── Philosophy / Studio ─────────────────────────────────────────────────────
  studio: `https://images.unsplash.com/photo-1552664730-d307ca884978${UP}`,
};

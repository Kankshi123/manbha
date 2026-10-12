import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { media } from '../data/media.js';

const services = [
  {
    id: 'stitch',
    number: '01',
    title: 'Bespoke Stitching',
    titleHindi: 'सिलाई',
    tagline: 'Made-to-measure, from scratch.',
    description:
      'We build your outfit from a blank canvas — precise measurements, your chosen fabric, your silhouette. Every seam is ours to own.',
    cta: 'Start Stitching',
    href: '#booking',
    image: media.services.stitch,
    alt: 'Close-up of hands stitching fabric — Manbha bespoke stitching service',
  },
  {
    id: 'rent',
    number: '02',
    title: 'Rent a Look',
    titleHindi: 'किराए पर पहनें',
    tagline: 'Wear the moment. Return the rest.',
    description:
      'Designer outfits on rent for weddings, sangeet, mehendi, parties and shoots. Freshly cleaned and fitted to your size before the event.',
    cta: 'Browse Rentals',
    href: '#rent',
    image: media.services.rent,
    alt: 'Beautifully arranged designer lehenga for rental — Manbha Rent a Look',
  },
  {
    id: 'customize',
    number: '03',
    title: 'Customization',
    titleHindi: 'कस्टमाइज़',
    tagline: 'Make it unmistakably yours.',
    description:
      'Change the colour, fabric, neckline, sleeves, embroidery — on a new piece or a piece you already own. Your vision, our craft.',
    cta: 'Customize Now',
    href: '#customize',
    image: media.services.customize,
    alt: 'Designer discussing outfit customization options — Manbha Customization Studio',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding"
      style={{ background: 'var(--color-cream)' }}
    >
      <div className="container-wide">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 5rem)' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-label"
            style={{ color: 'var(--color-gold)', marginBottom: '1rem', letterSpacing: '0.3em' }}
          >
            Three Ways to Manbha
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-display-lg"
            style={{ color: 'var(--color-charcoal)' }}
          >
            Your story,{' '}
            <em style={{ color: 'var(--color-maroon)', fontStyle: 'italic' }}>tailored.</em>
          </motion.h2>
        </div>

        {/* Service Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -6 }}
              style={{
                background: 'var(--color-ivory)',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={(e) => handleNavClick(e, service.href)}
            >
              {/* Image */}
              <div
                className="img-reveal-wrapper"
                style={{ aspectRatio: '4/5', overflow: 'hidden' }}
                data-cursor="view"
              >
                <motion.img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '2rem 1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span
                    className="font-devanagari"
                    style={{ color: 'var(--color-gold)', fontSize: '1.1rem', opacity: 0.7 }}
                  >
                    {service.titleHindi}
                  </span>
                  <span
                    className="text-label"
                    style={{ color: 'rgba(22,17,15,0.3)', fontSize: '0.6rem' }}
                  >
                    {service.number}
                  </span>
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                    fontWeight: 400,
                    color: 'var(--color-charcoal)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.1,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-label"
                  style={{ color: 'var(--color-gold)', marginBottom: '1rem', fontSize: '0.6rem' }}
                >
                  {service.tagline}
                </p>

                <p className="text-body" style={{ fontSize: '0.88rem', opacity: 0.7, marginBottom: '1.75rem' }}>
                  {service.description}
                </p>

                {/* CTA arrow */}
                <a
                  href={service.href}
                  onClick={(e) => handleNavClick(e, service.href)}
                  className="text-label group"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-maroon)',
                    textDecoration: 'none',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                  }}
                >
                  {service.cta}
                  <motion.span
                    whileHover={{ x: 4 }}
                    style={{ display: 'inline-block' }}
                  >
                    →
                  </motion.span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { media } from '../data/media.js';

const techniques = [
  { id: 'zardozi', name: 'Zardozi', nameHindi: 'जरदोज़ी', description: 'Gold and silver metallic thread embroidery, a Mughal court tradition.', image: media.craft.zardozi },
  { id: 'gotaPatti', name: 'Gota Patti', nameHindi: 'गोटा पट्टी', description: 'Rajasthani ribbon work using woven gold and silver strips.', image: media.craft.gotaPatti },
  { id: 'resham', name: 'Resham', nameHindi: 'रेशम', description: 'Pure silk thread embroidery with a smooth, lustrous finish.', image: media.craft.resham },
  { id: 'chikankari', name: 'Chikankari', nameHindi: 'चिकनकारी', description: 'Delicate Lucknawi shadow embroidery — quiet, refined, iconic.', image: media.craft.chikankari },
  { id: 'mirrorWork', name: 'Mirror Work', nameHindi: 'शीशे का काम', description: 'Gujarati and Rajasthani glass embellishments that catch every light.', image: media.craft.mirrorWork },
  { id: 'handEmbroidery', name: 'Hand Embroidery', nameHindi: 'हस्त-कढ़ाई', description: 'Freehand motifs crafted by our artisans — unique to every piece.', image: media.craft.handEmbroidery },
  { id: 'digital', name: 'Digital Prints', nameHindi: 'डिजिटल प्रिंट', description: 'Contemporary photographic and graphic prints on premium fabric.', image: null },
];

const fabrics = [
  'Banarasi Silk', 'Organza', 'Velvet', 'Chanderi', 'Khaddi Cotton',
  'Georgette', 'Crepe', 'Linen', 'Pure Silk', 'Net',
];

export default function Craft() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const activeTech = techniques.find((t) => t.id === hoveredTech);

  return (
    <section
      id="craft"
      ref={sectionRef}
      className="section-padding"
      style={{ background: 'var(--color-emerald)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background studio image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          pointerEvents: 'none',
        }}
      >
        <img
          src={media.craft.studioDetail}
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-label"
          style={{ color: 'var(--color-gold)', marginBottom: '1rem', letterSpacing: '0.3em' }}
        >
          Craft & Fabrics
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-display-lg"
          style={{ color: 'var(--color-ivory)', marginBottom: 'clamp(2.5rem, 5vw, 5rem)', maxWidth: '600px' }}
        >
          Where thread becomes{' '}
          <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>poetry.</em>
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'start',
          }}
        >
          {/* Techniques hover list */}
          <div>
            <p
              className="text-label"
              style={{ color: 'rgba(246,240,230,0.4)', marginBottom: '1.5rem', fontSize: '0.6rem' }}
            >
              Hover to explore our techniques
            </p>
            <ul style={{ listStyle: 'none' }}>
              {techniques.map((tech, i) => (
                <motion.li
                  key={tech.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.07 + 0.2 }}
                  onMouseEnter={() => setHoveredTech(tech.id)}
                  onMouseLeave={() => setHoveredTech(null)}
                  style={{
                    borderBottom: '1px solid rgba(246,240,230,0.1)',
                    cursor: 'none',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1rem 0',
                      transition: 'padding 0.3s ease',
                      paddingLeft: hoveredTech === tech.id ? '0.75rem' : '0',
                    }}
                  >
                    <div>
                      <span
                        className="font-display"
                        style={{
                          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                          fontWeight: 400,
                          color: hoveredTech === tech.id ? 'var(--color-gold)' : 'var(--color-ivory)',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {tech.name}
                      </span>
                      <span
                        className="font-devanagari"
                        style={{
                          display: 'block',
                          fontSize: '0.8rem',
                          color: 'rgba(246,240,230,0.35)',
                          marginTop: '0.1rem',
                        }}
                      >
                        {tech.nameHindi}
                      </span>
                    </div>
                    <span
                      style={{
                        color: 'var(--color-gold)',
                        opacity: hoveredTech === tech.id ? 1 : 0,
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                        transform: hoveredTech === tech.id ? 'translateX(0)' : 'translateX(-8px)',
                        fontSize: '1rem',
                      }}
                    >
                      →
                    </span>
                  </div>
                  {/* Description reveal */}
                  <div
                    style={{
                      maxHeight: hoveredTech === tech.id ? '100px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease',
                    }}
                  >
                    <p
                      className="text-body"
                      style={{ color: 'rgba(246,240,230,0.5)', fontSize: '0.85rem', paddingBottom: '1rem', paddingLeft: '0.75rem' }}
                    >
                      {tech.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image reveal panel */}
          <div>
            <div
              className="clip-arch"
              style={{
                aspectRatio: '3/4',
                overflow: 'hidden',
                position: 'relative',
                background: 'rgba(246,240,230,0.05)',
              }}
              data-cursor="view"
            >
              {techniques.map((tech) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredTech === tech.id ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  {tech.image ? (
                    <img
                      src={tech.image}
                      alt={`${tech.name} embroidery technique`}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(184,137,59,0.1)',
                      }}
                    >
                      <span className="font-devanagari" style={{ fontSize: '3rem', color: 'var(--color-gold)', opacity: 0.3 }}>
                        मनभा
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Default state */}
              <motion.div
                animate={{ opacity: hoveredTech ? 0 : 1 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                }}
              >
                <span
                  className="font-devanagari"
                  style={{ fontSize: '4rem', color: 'var(--color-gold)', opacity: 0.15 }}
                >
                  कढ़ाई
                </span>
                <span className="text-label" style={{ color: 'rgba(246,240,230,0.2)', fontSize: '0.55rem' }}>
                  Hover a technique
                </span>
              </motion.div>
            </div>

            {/* Fabrics list */}
            <div style={{ marginTop: '2.5rem' }}>
              <p className="text-label" style={{ color: 'rgba(246,240,230,0.4)', marginBottom: '1rem', fontSize: '0.6rem' }}>
                Our Fabrics
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {fabrics.map((f) => (
                  <span
                    key={f}
                    style={{
                      padding: '0.35rem 0.85rem',
                      border: '1px solid rgba(246,240,230,0.15)',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      color: 'rgba(246,240,230,0.6)',
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { media } from '../data/media.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Lookbook() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState(null);

  const items = media.lookbook;

  // Horizontal scroll on desktop
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth - section.offsetWidth;

      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((i) => (i - 1 + items.length) % items.length);
  const nextImage = () =>
    setLightbox((i) => (i + 1) % items.length);

  useEffect(() => {
    const handler = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  return (
    <>
      <section
        id="lookbook"
        ref={sectionRef}
        style={{
          background: 'var(--color-charcoal)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Section label */}
        <div
          style={{
            position: 'absolute',
            top: '3rem',
            left: 'clamp(1.25rem, 5vw, 5rem)',
            zIndex: 10,
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-label"
            style={{ color: 'var(--color-gold)', letterSpacing: '0.3em' }}
          >
            Lookbook
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display"
            style={{ color: 'var(--color-ivory)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300 }}
          >
            The <em style={{ color: 'var(--color-gold)' }}>Edit</em>
          </motion.p>
        </div>

        {/* Drag hint */}
        <div
          style={{
            position: 'absolute',
            bottom: '3rem',
            right: 'clamp(1.25rem, 5vw, 5rem)',
            zIndex: 10,
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-label"
            style={{ color: 'rgba(246,240,230,0.3)', fontSize: '0.55rem' }}
          >
            Scroll to explore →
          </motion.p>
        </div>

        {/* Horizontal track */}
        <div
          style={{
            height: '100vh',
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: '1.5rem',
              paddingInline: 'clamp(1.25rem, 5vw, 5rem)',
              paddingBlock: '6rem',
              willChange: 'transform',
              cursor: 'none',
            }}
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06 + 0.2, duration: 0.7 }}
                onClick={() => setLightbox(i)}
                data-cursor="view"
                style={{
                  flexShrink: 0,
                  width: item.orientation === 'landscape' ? 'clamp(300px, 35vw, 550px)' : 'clamp(200px, 20vw, 320px)',
                  height: item.orientation === 'landscape' ? 'clamp(200px, 25vw, 380px)' : 'clamp(320px, 40vw, 560px)',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'none',
                }}
              >
                <motion.img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1rem',
                    background: 'linear-gradient(to top, rgba(22,17,15,0.8) 0%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  }}
                  className="lookbook-caption"
                >
                  <p
                    className="text-label"
                    style={{ color: 'var(--color-ivory)', fontSize: '0.55rem', letterSpacing: '0.2em' }}
                  >
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: swipeable grid */}
        <style>{`.lookbook-caption { opacity: 0 } .lookbook-item:hover .lookbook-caption { opacity: 1 }`}</style>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 8000,
              background: 'rgba(22,17,15,0.97)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Lookbook image: ${items[lightbox]?.caption}`}
          >
            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '85vw',
                maxHeight: '85vh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <img
                src={items[lightbox]?.src}
                alt={items[lightbox]?.caption}
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                }}
              />
              <p
                className="text-label"
                style={{ color: 'var(--color-gold)', textAlign: 'center', fontSize: '0.6rem', letterSpacing: '0.2em' }}
              >
                {items[lightbox]?.caption}
              </p>
            </motion.div>

            {/* Controls */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous"
              style={{
                position: 'fixed',
                left: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(246,240,230,0.1)',
                border: '1px solid rgba(246,240,230,0.2)',
                padding: '0.75rem',
                cursor: 'none',
                color: 'var(--color-ivory)',
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next"
              style={{
                position: 'fixed',
                right: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(246,240,230,0.1)',
                border: '1px solid rgba(246,240,230,0.2)',
                padding: '0.75rem',
                cursor: 'none',
                color: 'var(--color-ivory)',
              }}
            >
              <ChevronRight size={20} />
            </button>
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              style={{
                position: 'fixed',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(246,240,230,0.1)',
                border: '1px solid rgba(246,240,230,0.2)',
                padding: '0.75rem',
                cursor: 'none',
                color: 'var(--color-ivory)',
              }}
            >
              <X size={20} />
            </button>

            {/* Counter */}
            <div
              style={{
                position: 'fixed',
                bottom: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <p className="text-label" style={{ color: 'rgba(246,240,230,0.4)', fontSize: '0.55rem' }}>
                {lightbox + 1} / {items.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

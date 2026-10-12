import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials.js';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const progress = (activeIndex / (testimonials.length - 1)) * 100;

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-padding"
      style={{ background: 'var(--color-ivory)', overflow: 'hidden' }}
    >
      <div className="container-narrow">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-label"
          style={{ color: 'var(--color-gold)', marginBottom: '3rem', letterSpacing: '0.3em', textAlign: 'center' }}
        >
          What They Say
        </motion.p>

        {/* Slider */}
        <div
          style={{ position: 'relative', overflow: 'hidden' }}
          onPointerDown={(e) => {
            setDragging(true);
            setDragStart(e.clientX);
          }}
          onPointerUp={(e) => {
            if (!dragging) return;
            setDragging(false);
            const diff = e.clientX - dragStart;
            if (diff < -50) next();
            else if (diff > 50) prev();
          }}
          onPointerLeave={() => setDragging(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              style={{ textAlign: 'center', padding: '0 clamp(1rem, 5vw, 4rem)' }}
            >
              {/* Large decorative quote mark */}
              <div
                className="font-display"
                style={{
                  fontSize: '8rem',
                  color: 'var(--color-gold)',
                  opacity: 0.12,
                  lineHeight: 0.7,
                  marginBottom: '1rem',
                  fontStyle: 'italic',
                }}
                aria-hidden="true"
              >
                "
              </div>

              <blockquote
                className="font-display"
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--color-charcoal)',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                }}
              >
                {testimonials[activeIndex].quote}
              </blockquote>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
                <p
                  className="font-display"
                  style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-maroon)' }}
                >
                  {testimonials[activeIndex].name}
                </p>
                <p
                  className="text-label"
                  style={{ fontSize: '0.55rem', color: 'var(--color-gold)', letterSpacing: '0.2em' }}
                >
                  {testimonials[activeIndex].occasion} · {testimonials[activeIndex].location}
                </p>
                <p
                  className="text-label"
                  style={{ fontSize: '0.5rem', opacity: 0.3, marginTop: '0.25rem' }}
                >
                  ⚠️ Sample testimonial — to be replaced with real client review
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '3rem',
          }}
        >
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            style={{
              background: 'none',
              border: '1px solid rgba(22,17,15,0.15)',
              padding: '0.6rem',
              cursor: 'none',
              color: 'var(--color-charcoal)',
              transition: 'border-color 0.3s ease',
              display: 'flex',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-maroon)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(22,17,15,0.15)'; }}
          >
            <ChevronLeft size={16} />
          </button>

          {/* Gold progress bar */}
          <div
            style={{
              width: '120px',
              height: '1px',
              background: 'rgba(22,17,15,0.1)',
              position: 'relative',
            }}
          >
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                background: 'var(--color-gold)',
                minWidth: activeIndex === 0 ? '12px' : '0',
              }}
            />
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            style={{
              background: 'none',
              border: '1px solid rgba(22,17,15,0.15)',
              padding: '0.6rem',
              cursor: 'none',
              color: 'var(--color-charcoal)',
              display: 'flex',
              transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-maroon)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(22,17,15,0.15)'; }}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dots */}
        <div
          style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginTop: '1.25rem' }}
          role="tablist"
          aria-label="Testimonial navigation"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              onClick={() => setActiveIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === activeIndex ? '20px' : '6px',
                height: '2px',
                background: i === activeIndex ? 'var(--color-maroon)' : 'rgba(22,17,15,0.2)',
                border: 'none',
                cursor: 'none',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

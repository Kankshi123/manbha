import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function CounterItem({ target, label, symbol = '+' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setCount(target); return; }

    let start = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div
        className="font-display"
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 300,
          color: 'var(--color-maroon)',
          lineHeight: 1,
        }}
      >
        {count}{symbol}
      </div>
      <div
        className="text-label"
        style={{ color: 'var(--color-charcoal)', marginTop: '0.5rem', opacity: 0.65 }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Philosophy() {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const philosophyText =
    'At Manbha, we believe that clothing is not just fabric and thread — it is the language you speak before you say a word. Every piece we create begins with listening: to your story, your occasion, your silhouette. We stitch slowly, measure twice, and never, ever rush beauty.';

  const words = philosophyText.split(' ');

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="section-padding"
      style={{ background: 'var(--color-ivory)' }}
    >
      <div className="container-wide">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-label"
          style={{ color: 'var(--color-gold)', marginBottom: '3rem', letterSpacing: '0.3em' }}
        >
          Our Philosophy
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'center',
          }}
        >
          {/* Scroll-linked word reveal */}
          <div ref={textRef}>
            <p
              className="font-display"
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                fontWeight: 300,
                lineHeight: 1.5,
                color: 'var(--color-charcoal)',
              }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.1, color: 'var(--color-charcoal)' }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{
                    delay: 0.02 * i,
                    duration: 0.4,
                    ease: 'easeOut',
                  }}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}
                >
                  {word}
                </motion.span>
              ))}
            </p>

            <div className="gold-line" style={{ marginTop: '2.5rem', maxWidth: '200px' }} />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-label"
              style={{
                color: 'var(--color-maroon)',
                marginTop: '1.5rem',
                fontStyle: 'italic',
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
              }}
            >
              "Your story, tailored."
            </motion.p>
          </div>

          {/* Counters */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '3rem',
            }}
          >
            <CounterItem target={500} label="Outfits crafted" />
            {/* ⚠️ placeholder numbers — update with real stats */}
            <CounterItem target={100} label="% made-to-measure" />
            <CounterItem target={4} label="Genders served" symbol="" />
            <CounterItem target={3} label="Services" symbol="" />
          </div>
        </div>
      </div>
    </section>
  );
}

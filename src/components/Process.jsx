import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { processSteps } from '../data/process.js';
import { media } from '../data/media.js';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const stepImgRefs = useRef([]);
  const stepTextRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const totalSteps = processSteps.length;

      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${totalSteps * 100}%`,
        pin: pinRef.current,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const stepIndex = Math.min(
            Math.floor(progress * totalSteps),
            totalSteps - 1
          );

          // Show/hide steps
          stepImgRefs.current.forEach((el, i) => {
            if (!el) return;
            const active = i === stepIndex;
            gsap.to(el, {
              opacity: active ? 1 : 0,
              scale: active ? 1 : 0.95,
              duration: 0.4,
              ease: 'power2.out',
            });
          });
          stepTextRefs.current.forEach((el, i) => {
            if (!el) return;
            const active = i === stepIndex;
            gsap.to(el, {
              opacity: active ? 1 : 0,
              y: active ? 0 : 20,
              duration: 0.4,
              ease: 'power2.out',
            });
          });

          // Draw thread line
          if (lineRef.current) {
            lineRef.current.style.height = `${progress * 100}%`;
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        background: 'var(--color-charcoal)',
        position: 'relative',
      }}
    >
      {/* Pin container */}
      <div
        ref={pinRef}
        style={{
          height: '100vh',
          minHeight: '600px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Left: Images */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {processSteps.map((step, i) => (
            <div
              key={step.step}
              ref={(el) => (stepImgRefs.current[i] = el)}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: i === 0 ? 1 : 0,
              }}
            >
              <img
                src={media.process[i]}
                alt={`${step.title} — Manbha process step ${step.step}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(22,17,15,0.3)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Right: Text + Thread line */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(2rem, 5vw, 5rem)',
            position: 'relative',
          }}
        >
          {/* Thread line */}
          <div
            style={{
              position: 'absolute',
              left: '2rem',
              top: '10%',
              bottom: '10%',
              width: '1px',
              background: 'rgba(184,137,59,0.15)',
            }}
          >
            <div
              ref={lineRef}
              style={{
                width: '100%',
                height: '0%',
                background: 'var(--color-gold)',
                transition: 'height 0.1s linear',
              }}
            />
          </div>

          {/* Step indicator dots */}
          <div
            style={{
              position: 'absolute',
              left: 'calc(2rem - 4px)',
              top: '10%',
              bottom: '10%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--color-gold)',
                  border: '2px solid var(--color-charcoal)',
                }}
              />
            ))}
          </div>

          {/* Step texts */}
          <div style={{ paddingLeft: '2.5rem', position: 'relative' }}>
            {/* Header label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-label"
              style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', letterSpacing: '0.3em' }}
            >
              The Process
            </motion.p>

            {processSteps.map((step, i) => (
              <div
                key={step.step}
                ref={(el) => (stepTextRefs.current[i] = el)}
                style={{
                  position: 'absolute',
                  top: '3rem',
                  opacity: i === 0 ? 1 : 0,
                  transform: i === 0 ? 'none' : 'translateY(20px)',
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: 'clamp(5rem, 10vw, 9rem)',
                    fontWeight: 300,
                    color: 'rgba(184,137,59,0.1)',
                    lineHeight: 1,
                    marginBottom: '-1rem',
                    userSelect: 'none',
                  }}
                >
                  {step.step}
                </div>

                <h2
                  className="font-display"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 400,
                    color: 'var(--color-ivory)',
                    lineHeight: 1.1,
                    marginBottom: '0.25rem',
                  }}
                >
                  {step.title}
                </h2>

                <span
                  className="font-devanagari"
                  style={{ color: 'var(--color-gold)', fontSize: '1rem', display: 'block', marginBottom: '1rem', opacity: 0.7 }}
                >
                  {step.titleHindi}
                </span>

                <p
                  className="text-label"
                  style={{ color: 'var(--color-gold)', marginBottom: '1rem', fontSize: '0.6rem' }}
                >
                  {step.tagline}
                </p>

                <p
                  className="text-body"
                  style={{
                    color: 'rgba(246,240,230,0.65)',
                    maxWidth: '400px',
                    fontSize: '0.95rem',
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile fallback: static list */}
      <div
        className="md:hidden"
        style={{ padding: 'clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem)' }}
      >
        <p className="text-label" style={{ color: 'var(--color-gold)', marginBottom: '2rem', letterSpacing: '0.3em' }}>
          The Process
        </p>
        {processSteps.map((step, i) => (
          <div
            key={step.step}
            style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '3rem',
              paddingLeft: '1rem',
              borderLeft: '1px dashed rgba(184,137,59,0.3)',
            }}
          >
            <div
              className="font-display"
              style={{ fontSize: '2.5rem', fontWeight: 300, color: 'rgba(184,137,59,0.2)', lineHeight: 1, flexShrink: 0 }}
            >
              {step.step}
            </div>
            <div>
              <h3
                className="font-display"
                style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--color-ivory)', marginBottom: '0.25rem' }}
              >
                {step.title}
              </h3>
              <span
                className="font-devanagari"
                style={{ color: 'var(--color-gold)', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem', opacity: 0.7 }}
              >
                {step.titleHindi}
              </span>
              <p className="text-body" style={{ color: 'rgba(246,240,230,0.6)', fontSize: '0.88rem' }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Animated preloader: "मनभा / MANBHA" reveal → gold stitch line → curtain open
 */
export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const devanagariRef = useRef(null);
  const latinRef = useRef(null);
  const lineRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onComplete?.();
      return;
    }

    const tl = gsap.timeline({ onComplete: () => onComplete?.() });

    tl
      // Initial state
      .set([devanagariRef.current, latinRef.current], { opacity: 0, y: 20 })
      .set(lineRef.current, { scaleX: 0, transformOrigin: 'left center' })

      // Devanagari reveal
      .to(devanagariRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.3)

      // Latin reveal
      .to(latinRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.6)

      // Gold line draws
      .to(lineRef.current, { scaleX: 1, duration: 0.8, ease: 'power2.inOut' }, 1.0)

      // Pause
      .to({}, { duration: 0.4 }, 1.9)

      // Curtain splits open
      .to(leftRef.current, { x: '-100%', duration: 1.0, ease: 'power4.inOut' }, 2.3)
      .to(rightRef.current, { x: '100%', duration: 1.0, ease: 'power4.inOut' }, 2.3)
      .to(containerRef.current, { opacity: 0, duration: 0.2 }, 3.2);

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="preloader" role="status" aria-label="Loading Manbha">
      {/* Curtains */}
      <div ref={leftRef} className="preloader-curtain-left" />
      <div ref={rightRef} className="preloader-curtain-right" />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          ref={devanagariRef}
          className="font-devanagari"
          style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            color: 'var(--color-maroon)',
            fontWeight: 400,
            lineHeight: 1,
            opacity: 0,
          }}
        >
          मनभा
        </span>

        {/* Gold stitch line */}
        <div
          ref={lineRef}
          style={{
            width: '100%',
            maxWidth: '320px',
            height: '1px',
            background: `linear-gradient(90deg, transparent, var(--color-gold), transparent)`,
            margin: '0.5rem 0',
          }}
        />

        <span
          ref={latinRef}
          className="text-label"
          style={{
            color: 'var(--color-gold)',
            fontSize: '0.75rem',
            letterSpacing: '0.5em',
            opacity: 0,
          }}
        >
          MANBHA
        </span>

        <span
          className="text-label"
          style={{
            color: 'var(--color-charcoal)',
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            marginTop: '0.5rem',
            opacity: 0.5,
          }}
        >
          DEHRADUN
        </span>
      </div>
    </div>
  );
}

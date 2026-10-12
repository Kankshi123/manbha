import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const marqueeText = 'LEHENGA • WESTERN • TRADITIONAL • INDO-WESTERN • RENT • CUSTOMISE • FOR EVERY STORY • ';

export default function MarqueeStrip() {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const wrapperRef = useRef(null);
  const speedRef = useRef(1);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const tl1 = gsap.to(track1Ref.current, {
      xPercent: -100,
      ease: 'none',
      duration: prefersReduced ? 0 : 30,
      repeat: -1,
    });
    const tl2 = gsap.to(track2Ref.current, {
      xPercent: -100,
      ease: 'none',
      duration: prefersReduced ? 0 : 30,
      repeat: -1,
    });

    const handleScroll = () => {
      const dy = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;
      const multiplier = 1 + Math.abs(dy) * 0.05;
      const clamped = Math.min(multiplier, 4);
      speedRef.current = clamped;
      tl1.timeScale(clamped);
      tl2.timeScale(clamped);
      // Decay back to 1×
      gsap.to(speedRef, {
        current: 1,
        duration: 0.8,
        ease: 'power2.out',
        onUpdate: () => {
          tl1.timeScale(speedRef.current);
          tl2.timeScale(speedRef.current);
        },
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      tl1.kill();
      tl2.kill();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        overflow: 'hidden',
        background: 'var(--color-maroon)',
        padding: '1.1rem 0',
        borderTop: '1px solid rgba(184,137,59,0.3)',
        borderBottom: '1px solid rgba(184,137,59,0.3)',
      }}
      aria-hidden="true"
    >
      <div style={{ display: 'flex', width: 'max-content' }}>
        {/* Two copies for seamless loop */}
        <div
          ref={track1Ref}
          style={{
            display: 'flex',
            gap: '2.5rem',
            paddingRight: '2.5rem',
            whiteSpace: 'nowrap',
          }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.25em',
                color: 'var(--color-ivory)',
                opacity: 0.85,
              }}
            >
              {marqueeText}
            </span>
          ))}
        </div>
        <div
          ref={track2Ref}
          style={{
            display: 'flex',
            gap: '2.5rem',
            paddingRight: '2.5rem',
            whiteSpace: 'nowrap',
          }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.25em',
                color: 'var(--color-gold)',
                opacity: 0.85,
              }}
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

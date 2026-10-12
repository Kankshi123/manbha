import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { media } from '../data/media.js';

// Rotating circular text component
function CircularText({ text, radius = 52 }) {
  const chars = text.split('');
  const angleStep = 360 / chars.length;
  return (
    <div
      style={{
        position: 'relative',
        width: radius * 2 + 'px',
        height: radius * 2 + 'px',
      }}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.5rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            transformOrigin: `0 ${-radius}px`,
            transform: `rotate(${i * angleStep}deg) translateX(-50%)`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

const wordVariants = {
  hidden: { opacity: 0, y: '100%' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.9,
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

const heroWords = ['Stitched', 'around', 'you.'];

export default function Hero() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${y * 0.4}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCollections = (e) => {
    e.preventDefault();
    document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = (e) => {
    e.preventDefault();
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '650px',
        overflow: 'hidden',
        background: '#FAF6EF',
      }}
    >
      {/* Background image with parallax */}
      <div
        ref={parallaxRef}
        style={{
          position: 'absolute',
          inset: '-15% 0',
          willChange: 'transform',
        }}
      >
        <img
          src={media.hero.image1}
          alt="Bespoke bridal lehenga — Manbha studio creation"
          loading="eager"
          fetchPriority="high"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            filter: 'brightness(0.95) contrast(1.05) saturate(1.1)',
          }}
        />
        {/* Soft Warm Champagne Vignette Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 60% 40%, rgba(250,246,239,0.15) 0%, rgba(246,240,230,0.55) 60%, rgba(74,14,27,0.78) 100%)',
          }}
        />
        {/* Subtle bottom shadow for button contrast */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(22,17,15,0.7) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="container-wide"
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: 'clamp(3rem, 8vh, 6rem)',
        }}
      >
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-label"
          style={{
            color: 'var(--color-gold)',
            marginBottom: '1.25rem',
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          Boutique Studio · Dehradun
        </motion.p>

        {/* Hero Headline */}
        <h1
          className="text-display-hero"
          style={{
            color: 'var(--color-ivory)',
            marginBottom: '1.25rem',
            fontWeight: 600,
            textShadow: '0 4px 18px rgba(0, 0, 0, 0.75), 0 2px 4px rgba(0, 0, 0, 0.9)',
          }}
          aria-label="Stitched around you."
        >
          {heroWords.map((word, i) => (
            <span key={word} className="word-mask" style={{ display: 'inline-block', marginRight: i < heroWords.length - 1 ? '0.3em' : 0 }}>
              <motion.span
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                style={{
                  display: 'inline-block',
                  fontStyle: i === 1 ? 'italic' : 'normal',
                  fontWeight: 600,
                  color: i === 1 ? 'var(--color-gold-light)' : '#FFFFFF',
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.9)',
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)',
            fontWeight: 300,
            color: 'rgba(250,246,239,0.95)',
            maxWidth: '620px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            textShadow: '0 2px 15px rgba(0,0,0,0.6)',
          }}
        >
          Bespoke lehengas, western, traditional and indo-western wear, for every gender.
          <br />
          <span style={{ color: 'var(--color-gold-light)', fontWeight: 500 }}>Stitch it. Rent it. Customise it.</span>
          &nbsp;Crafted with care in Dehradun.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a
            href="#collections"
            onClick={scrollToCollections}
            className="text-label"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              border: '1px solid var(--color-gold)',
              color: 'var(--color-gold)',
              textDecoration: 'none',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-gold)';
              e.currentTarget.style.color = 'var(--color-charcoal)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--color-gold)';
            }}
          >
            Explore Collections
          </a>

          <a
            href="#booking"
            onClick={scrollToBooking}
            className="text-label"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              background: 'var(--color-maroon)',
              color: 'var(--color-ivory)',
              textDecoration: 'none',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#154e42'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-maroon)'; }}
          >
            Book a Fitting
          </a>
        </motion.div>
      </div>

      {/* Rotating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: 'clamp(1.25rem, 5vw, 5rem)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <CircularText text="EST · IN · DEHRADUN · MANBHA · " radius={44} />
        </motion.div>
        {/* Center dot */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--color-gold)',
          }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 2,
        }}
      >
        <span className="text-label" style={{ color: 'rgba(246,240,230,0.4)', fontSize: '0.5rem' }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '32px',
            background: 'linear-gradient(to bottom, var(--color-gold), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}

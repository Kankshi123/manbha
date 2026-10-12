import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUp, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';

function InstagramIcon({ size = 14, color = 'currentColor', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const footerLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'Rent a Look', href: '#rent' },
  { label: 'Customize', href: '#customize' },
  { label: 'The Process', href: '#process' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Craft & Fabrics', href: '#craft' },
  { label: 'Book a Fitting', href: '#booking' },
  { label: 'Studio', href: '#studio' },
];

export default function Footer() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Giant wordmark letter animation
  const letters = 'MANBHA'.split('');

  return (
    <footer
      ref={sectionRef}
      style={{ background: 'var(--color-maroon)', overflow: 'hidden' }}
    >
      {/* Giant wordmark reveal */}
      <div
        style={{
          overflow: 'hidden',
          paddingTop: 'clamp(3rem, 6vw, 6rem)',
          borderBottom: '1px solid rgba(184,137,59,0.2)',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.05em',
            paddingInline: 'clamp(1.25rem, 3vw, 3rem)',
          }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: '100%', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                delay: i * 0.08,
                duration: 0.9,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="font-display"
              style={{
                fontSize: 'clamp(5rem, 15vw, 16rem)',
                fontWeight: 600,
                color: 'var(--color-gold)',
                textShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
                WebkitTextStroke: '2px var(--color-gold)',
                lineHeight: 0.9,
                letterSpacing: '0.02em',
                display: 'inline-block',
                opacity: 0.85,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Footer body */}
      <div
        className="container-wide"
        style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 5rem)' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span
                className="font-devanagari"
                style={{ fontSize: '1.8rem', color: 'var(--color-gold)', display: 'block', lineHeight: 1 }}
              >
                मनभा
              </span>
              <span
                className="text-label"
                style={{ color: 'rgba(246,240,230,0.4)', fontSize: '0.5rem', letterSpacing: '0.35em' }}
              >
                MANBHA
              </span>
            </div>
            <p
              className="font-display"
              style={{
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: 'rgba(246,240,230,0.6)',
                fontWeight: 300,
                lineHeight: 1.5,
              }}
            >
              "Stitched around you."
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p
              className="text-label"
              style={{ color: 'rgba(246,240,230,0.35)', marginBottom: '1rem', fontSize: '0.55rem' }}
            >
              Navigate
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.85rem',
                      color: 'rgba(246,240,230,0.55)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-gold)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(246,240,230,0.55)'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <p
              className="text-label"
              style={{ color: 'rgba(246,240,230,0.35)', marginBottom: '1rem', fontSize: '0.55rem' }}
            >
              Services
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Bespoke Stitching', 'Rent a Look', 'Customization'].map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: 'rgba(246,240,230,0.55)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-label"
              style={{ color: 'rgba(246,240,230,0.35)', marginBottom: '1rem', fontSize: '0.55rem' }}
            >
              Get in Touch
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(246,240,230,0.55)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.85rem',
                }}
              >
                <Phone size={14} />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(246,240,230,0.55)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.85rem',
                }}
              >
                <Mail size={14} />
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-gold)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.85rem',
                }}
              >
                <InstagramIcon size={14} />
                {siteConfig.contact.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(184,137,59,0.2)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            className="text-label"
            style={{ color: 'rgba(246,240,230,0.3)', fontSize: '0.55rem' }}
          >
            Crafted with love in Dehradun &nbsp;·&nbsp; © 2026 Manbha Studio
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'none',
              border: '1px solid rgba(184,137,59,0.3)',
              padding: '0.5rem 1rem',
              color: 'var(--color-gold)',
              cursor: 'none',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-gold)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(184,137,59,0.3)'; }}
          >
            <ArrowUp size={12} />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}

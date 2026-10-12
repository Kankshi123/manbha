import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';

const navLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'Rent', href: '#rent' },
  { label: 'Customize', href: '#customize' },
  { label: 'Craft', href: '#craft' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Studio', href: '#studio' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (y / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 ${
          scrolled ? 'navbar-scrolled shadow-sm' : ''
        }`}
        style={{
          background: scrolled
            ? 'rgba(250, 246, 239, 0.92)'
            : 'linear-gradient(to bottom, rgba(250, 246, 239, 0.88) 0%, rgba(250, 246, 239, 0.65) 75%, transparent 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid rgba(184, 137, 59, 0.25)' : '1px solid rgba(184, 137, 59, 0.12)',
        }}
      >
        <nav
          className="container-wide flex items-center justify-between"
          style={{ paddingTop: '1.1rem', paddingBottom: '1.1rem' }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex flex-col leading-none"
            aria-label="Manbha – Home"
          >
            <span
              className="font-devanagari"
              style={{
                fontSize: '1.6rem',
                color: 'var(--color-maroon)',
                lineHeight: 1,
                fontWeight: 600,
                letterSpacing: '0.02em',
                textShadow: '0 1px 2px rgba(255,255,255,0.8)',
              }}
            >
              मनभा
            </span>
            <span
              className="text-label"
              style={{
                color: 'var(--color-gold)',
                fontSize: '0.55rem',
                letterSpacing: '0.35em',
                fontWeight: 600,
                marginTop: '2px',
              }}
            >
              MANBHA
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 list-none" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-label relative group"
                  style={{
                    color: 'var(--color-charcoal)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.18em',
                    fontWeight: 500,
                    transition: 'color 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-maroon)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-charcoal)';
                  }}
                >
                  {link.label}
                  {/* Thread underline */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-3px',
                      left: 0,
                      height: '1.5px',
                      width: '0%',
                      background: 'var(--color-maroon)',
                      transition: 'width 0.35s cubic-bezier(0.19,1,0.22,1)',
                    }}
                    className="group-hover:!w-full"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className="hidden md:inline-flex items-center px-5 py-2.5 text-label magnetic-btn"
              style={{
                background: 'var(--color-maroon)',
                color: 'var(--color-ivory)',
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                fontWeight: 500,
                textDecoration: 'none',
                border: '1px solid var(--color-maroon)',
                borderRadius: '2px',
                boxShadow: '0 2px 8px rgba(74, 14, 27, 0.2)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-maroon)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-maroon)';
                e.currentTarget.style.color = 'var(--color-ivory)';
              }}
            >
              Book a Fitting
            </a>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{ color: 'var(--color-maroon)' }}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <button
              className="absolute top-6 right-6 p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{ color: 'var(--color-ivory)' }}
            >
              <X size={28} />
            </button>

            {/* Logo in menu */}
            <div className="text-center mb-8">
              <div
                className="font-devanagari"
                style={{ fontSize: '2rem', color: 'var(--color-gold)' }}
              >
                मनभा
              </div>
            </div>

            <ul className="list-none text-center" role="list">
              {[...navLinks, { label: 'Book a Fitting', href: '#booking' }].map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                  style={{ marginBottom: '1.5rem' }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.8rem, 6vw, 3rem)',
                      fontWeight: 300,
                      color: link.href === '#booking' ? 'var(--color-gold)' : 'var(--color-ivory)',
                      textDecoration: 'none',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Contact in menu */}
            <div
              className="absolute bottom-8 left-0 right-0 text-center text-label"
              style={{ color: 'rgba(246,240,230,0.4)', fontSize: '0.55rem', letterSpacing: '0.25em' }}
            >
              {siteConfig.contact.phone} &nbsp;·&nbsp; {siteConfig.address.city}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

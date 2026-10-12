import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';

function InstagramIcon({ size = 18, color = 'currentColor', style = {} }) {
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

export default function Studio() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="studio"
      ref={sectionRef}
      className="section-padding"
      style={{
        background: 'var(--color-emerald)',
        borderTop: '1px solid rgba(184, 137, 59, 0.25)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-label"
          style={{ color: 'var(--color-gold)', marginBottom: '1rem', letterSpacing: '0.3em' }}
        >
          Find Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-display-lg"
          style={{ color: 'var(--color-ivory)', marginBottom: 'clamp(2rem, 4vw, 4rem)' }}
        >
          Visit the{' '}
          <em style={{ color: 'var(--color-gold-light)', fontStyle: 'italic' }}>studio.</em>
        </motion.h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              style={{ display: 'flex', gap: '1rem' }}
            >
              <MapPin size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p className="text-label" style={{ color: 'rgba(246,240,230,0.4)', marginBottom: '0.35rem', fontSize: '0.55rem' }}>
                  Address
                </p>
                <p className="text-body" style={{ color: 'var(--color-ivory)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.area}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} – {siteConfig.address.pincode}
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{ display: 'flex', gap: '1rem' }}
            >
              <Phone size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p className="text-label" style={{ color: 'rgba(246,240,230,0.4)', marginBottom: '0.35rem', fontSize: '0.55rem' }}>
                  Phone
                </p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  style={{ color: 'var(--color-ivory)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontSize: '0.9rem' }}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              style={{ display: 'flex', gap: '1rem' }}
            >
              <Mail size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p className="text-label" style={{ color: 'rgba(246,240,230,0.4)', marginBottom: '0.35rem', fontSize: '0.55rem' }}>
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  style={{ color: 'var(--color-ivory)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontSize: '0.9rem' }}
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </motion.div>

            {/* Instagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              style={{ display: 'flex', gap: '1rem' }}
            >
              <InstagramIcon size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p className="text-label" style={{ color: 'rgba(246,240,230,0.4)', marginBottom: '0.35rem', fontSize: '0.55rem' }}>
                  Instagram
                </p>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-gold)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontSize: '0.9rem' }}
                >
                  {siteConfig.contact.instagramHandle}
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              style={{ display: 'flex', gap: '1rem' }}
            >
              <Clock size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p className="text-label" style={{ color: 'rgba(246,240,230,0.4)', marginBottom: '0.35rem', fontSize: '0.55rem' }}>
                  Studio Hours
                </p>
                <p className="text-body" style={{ color: 'var(--color-ivory)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.sunday}
                </p>
                <p className="text-body" style={{ color: 'rgba(246,240,230,0.4)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                  {siteConfig.hours.note}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full overflow-hidden rounded-sm border border-[rgba(184,137,59,0.35)] shadow-xl"
            style={{
              aspectRatio: '16/11',
              minHeight: '280px',
              maxHeight: '450px',
            }}
          >
            <iframe
              title="Manbha Studio Location — Dehradun"
              src={siteConfig.map.embedUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: 'block',
                width: '100%',
                height: '100%',
                filter: 'grayscale(0.15) contrast(1.05)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

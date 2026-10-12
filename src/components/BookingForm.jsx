import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/siteConfig.js';

const serviceTypes = [
  { id: 'stitch', label: 'Bespoke Stitch', color: 'var(--color-maroon)' },
  { id: 'rent', label: 'Rent a Look', color: 'var(--color-emerald)' },
  { id: 'customize', label: 'Customize', color: 'var(--color-gold)' },
];

const outfitTypes = [
  'Lehenga', 'Sherwani', 'Salwar Suit', 'Saree Blouse', 'Gown',
  'Kurta Set', 'Indo-Western', 'Western Co-ord', 'Kids Wear', 'Other',
];

const occasions = [
  'Wedding', 'Sangeet', 'Mehendi', 'Reception', 'Engagement',
  'Party', 'Pre-wedding shoot', 'Festive', 'Casual / Everyday', 'Corporate',
];

export default function BookingForm() {
  const [serviceType, setServiceType] = useState('stitch');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    outfitType: '',
    gender: '',
    occasion: '',
    eventDate: '',
    returnDate: '',
    size: '',
    message: '',
  });

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `Hi Manbha! I'd like to book a consultation.`,
      ``,
      `Service: ${serviceTypes.find((s) => s.id === serviceType)?.label}`,
      `Name: ${form.name || '[not provided]'}`,
      `Phone: ${form.phone || '[not provided]'}`,
      `Outfit: ${form.outfitType}`,
      `Gender: ${form.gender}`,
      `Occasion: ${form.occasion}`,
      `Event Date: ${form.eventDate || '[TBD]'}`,
      ...(serviceType === 'rent' ? [`Return Date: ${form.returnDate || '[TBD]'}`] : []),
      `Size / Notes: ${form.size || '[to discuss]'}`,
      `Message: ${form.message || '—'}`,
    ];
    return encodeURIComponent(lines.join('\n'));
  };

  const inputStyle = {
    width: '100%',
    border: '1px solid rgba(22,17,15,0.15)',
    borderBottom: '1px solid rgba(22,17,15,0.3)',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    background: 'transparent',
    padding: '0.75rem 0',
    fontFamily: 'var(--font-ui)',
    fontSize: '0.9rem',
    color: 'var(--color-charcoal)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-ui)',
    fontSize: '0.55rem',
    fontWeight: 500,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'rgba(22,17,15,0.45)',
    marginBottom: '0.25rem',
  };

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="section-padding"
      style={{ background: 'var(--color-ivory)' }}
    >
      <div className="container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(3rem, 6vw, 7rem)',
            alignItems: 'start',
          }}
        >
          {/* Left: Heading */}
          <div style={{ position: 'sticky', top: '8rem' }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-label"
              style={{ color: 'var(--color-gold)', marginBottom: '1rem', letterSpacing: '0.3em' }}
            >
              Book a Fitting
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-display-lg"
              style={{ color: 'var(--color-charcoal)', marginBottom: '1.5rem' }}
            >
              Let's make something{' '}
              <em style={{ color: 'var(--color-maroon)', fontStyle: 'italic' }}>
                only yours.
              </em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-body"
              style={{ opacity: 0.6, maxWidth: '380px', marginBottom: '2rem' }}
            >
              Share a few details and we'll reach out within 24 hours to schedule
              your consultation. No obligation, just a conversation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="gold-line" style={{ maxWidth: '200px', marginBottom: '1.5rem' }} />
              <p className="text-label" style={{ fontSize: '0.6rem', opacity: 0.5 }}>
                {siteConfig.contact.phone}
              </p>
              <p className="text-label" style={{ fontSize: '0.6rem', opacity: 0.5, marginTop: '0.3rem' }}>
                {siteConfig.contact.email}
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              // Success state
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '3rem',
                  border: '1px solid var(--color-gold)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    border: '1px solid var(--color-gold)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: 'var(--color-gold)', fontSize: '1.5rem' }}>✓</span>
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--color-charcoal)' }}
                >
                  Message received
                </h3>
                <p className="text-body" style={{ opacity: 0.65, maxWidth: '320px' }}>
                  Thank you, {form.name || 'friend'}. We'll be in touch within 24 hours.
                  In the meantime, feel free to reach out on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${buildWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label"
                  style={{
                    padding: '0.875rem 2rem',
                    background: 'var(--color-emerald)',
                    border: '1px solid var(--color-gold)',
                    color: 'var(--color-ivory)',
                    textDecoration: 'none',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                  }}
                >
                  Continue on WhatsApp
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Service type selector */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <p style={labelStyle}>Service Type</p>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    {serviceTypes.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setServiceType(s.id)}
                        className="text-label"
                        style={{
                          padding: '0.6rem 1.25rem',
                          border: '1px solid',
                          borderColor: serviceType === s.id ? s.color : 'rgba(22,17,15,0.15)',
                          background: serviceType === s.id ? s.color : 'transparent',
                          color: serviceType === s.id ? 'var(--color-ivory)' : 'var(--color-charcoal)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.15em',
                          cursor: 'none',
                          transition: 'all 0.3s ease',
                        }}
                        aria-pressed={serviceType === s.id}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form fields */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 2rem' }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="outfitType" style={labelStyle}>Outfit Type</label>
                    <select
                      id="outfitType"
                      name="outfitType"
                      value={form.outfitType}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'none' }}
                    >
                      <option value="">Select outfit</option>
                      {outfitTypes.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="gender" style={labelStyle}>For</label>
                    <select
                      id="gender"
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'none' }}
                    >
                      <option value="">Select</option>
                      <option value="Women">Women</option>
                      <option value="Men">Men</option>
                      <option value="Kids">Kids</option>
                      <option value="Unisex">Unisex / Gender-fluid</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="occasion" style={labelStyle}>Occasion</label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'none' }}
                    >
                      <option value="">Select occasion</option>
                      {occasions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eventDate" style={labelStyle}>
                      {serviceType === 'rent' ? 'Event Date (start)' : 'Event / Target Date'}
                    </label>
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={form.eventDate}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  {/* Return date — only for Rent */}
                  <AnimatePresence>
                    {serviceType === 'rent' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: 'hidden', gridColumn: '1 / -1' }}
                      >
                        <label htmlFor="returnDate" style={labelStyle}>Return Date</label>
                        <input
                          id="returnDate"
                          name="returnDate"
                          type="date"
                          value={form.returnDate}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div style={{ gridColumn: '1 / -1' }}>
                    <label htmlFor="size" style={labelStyle}>
                      {serviceType === 'stitch' ? 'Measurements / Size notes' : 'Approx. size or measurements'}
                    </label>
                    <input
                      id="size"
                      name="size"
                      type="text"
                      value={form.size}
                      onChange={handleChange}
                      placeholder={serviceType === 'stitch' ? 'e.g. 34" bust, 28" waist, or size M' : 'e.g. Size M, UK 10'}
                      style={inputStyle}
                    />
                  </div>

                  <div style={{ gridColumn: '1 / -1' }}>
                    <label htmlFor="message" style={labelStyle}>Message / Inspiration</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your vision, colour ideas, references, or any questions..."
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        minHeight: '80px',
                      }}
                    />
                  </div>
                </div>

                {/* Submit buttons */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                  <button
                    type="submit"
                    className="text-label"
                    style={{
                      flex: '1 1 160px',
                      padding: '1rem 2rem',
                      background: 'var(--color-maroon)',
                      color: 'var(--color-ivory)',
                      border: 'none',
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      cursor: 'none',
                      transition: 'background 0.3s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#154e42'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-maroon)'; }}
                  >
                    Send Message
                  </button>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${buildWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-label"
                    style={{
                      flex: '1 1 160px',
                      padding: '1rem 2rem',
                      background: 'var(--color-emerald)',
                      border: '1px solid var(--color-gold)',
                      color: 'var(--color-ivory)',
                      textDecoration: 'none',
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Send on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

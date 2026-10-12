import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { rentalItems, rentalOccasions, rentalCategories, rentalGenders, rentalFAQ } from '../data/rent.js';
import { siteConfig } from '../data/siteConfig.js';

// Rental item card
function RentalCard({ item }) {
  const [showBack, setShowBack] = useState(false);
  const [eventDate, setEventDate] = useState('');
  const [days, setDays] = useState(2);
  const [reserved, setReserved] = useState(false);

  const whatsappText = encodeURIComponent(
    `Hi Manbha! I'd like to reserve the "${item.name}" (${item.category}) for ${days} day(s) starting ${eventDate || '[date TBD]'}. Size: [please advise]. Deposit: ₹${item.deposit}.`
  );

  return (
    <div
      style={{
        background: 'var(--color-ivory)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image with front/back swap */}
      <div
        style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', cursor: 'none' }}
        onMouseEnter={() => setShowBack(true)}
        onMouseLeave={() => setShowBack(false)}
        data-cursor="view"
      >
        <img
          src={item.images[0]}
          alt={`${item.name} — front view`}
          loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'opacity 0.5s ease',
            opacity: showBack ? 0 : 1,
          }}
        />
        <img
          src={item.images[1]}
          alt={`${item.name} — back view`}
          loading="lazy"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'opacity 0.5s ease',
            opacity: showBack ? 1 : 0,
          }}
        />
        {/* Availability badge */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            padding: '0.3rem 0.75rem',
            background: item.available ? 'rgba(15,61,51,0.9)' : 'rgba(74,14,27,0.9)',
            backdropFilter: 'blur(4px)',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            color: 'var(--color-ivory)',
            textTransform: 'uppercase',
          }}
        >
          {item.available ? 'Available' : 'Currently Booked'}
        </div>
        {/* Category chip */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.3rem 0.75rem',
            background: 'var(--color-gold)',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.5rem',
            letterSpacing: '0.2em',
            color: 'var(--color-charcoal)',
            textTransform: 'uppercase',
          }}
        >
          {item.category}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3
          className="font-display"
          style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--color-charcoal)', lineHeight: 1.2 }}
        >
          {item.name}
        </h3>
        <p className="text-body" style={{ fontSize: '0.82rem', opacity: 0.65, flexGrow: 1 }}>
          {item.description}
        </p>

        {/* Price */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span
              className="font-display"
              style={{ fontSize: '1.4rem', fontWeight: 300, color: 'var(--color-maroon)' }}
            >
              ₹{item.pricePerDay.toLocaleString('en-IN')}
            </span>
            <span className="text-label" style={{ fontSize: '0.55rem', marginLeft: '0.3rem', opacity: 0.5 }}>
              / day
            </span>
          </div>
          <span className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5 }}>
            ⚠️ Deposit ₹{item.deposit.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Size chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
          {item.sizes.map((s) => (
            <span
              key={s}
              style={{
                padding: '0.2rem 0.6rem',
                border: '1px solid rgba(22,17,15,0.15)',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.58rem',
                letterSpacing: '0.1em',
                color: 'var(--color-charcoal)',
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Mini availability widget */}
        <div
          style={{
            background: 'var(--color-cream)',
            padding: '1rem',
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 120px' }}>
            <label
              className="text-label"
              htmlFor={`date-${item.id}`}
              style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.5rem', opacity: 0.5 }}
            >
              Event Date
            </label>
            <input
              id={`date-${item.id}`}
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              style={{
                width: '100%',
                border: '1px solid rgba(22,17,15,0.2)',
                background: 'transparent',
                padding: '0.4rem 0.5rem',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.7rem',
                color: 'var(--color-charcoal)',
                outline: 'none',
              }}
            />
          </div>
          <div style={{ flex: '0 0 80px' }}>
            <label
              className="text-label"
              htmlFor={`days-${item.id}`}
              style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.5rem', opacity: 0.5 }}
            >
              Days
            </label>
            <select
              id={`days-${item.id}`}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              style={{
                width: '100%',
                border: '1px solid rgba(22,17,15,0.2)',
                background: 'transparent',
                padding: '0.4rem 0.5rem',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.7rem',
                color: 'var(--color-charcoal)',
                cursor: 'none',
              }}
            >
              {[1, 2, 3, 4, 5, 7].map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Total */}
        {eventDate && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-label"
            style={{ fontSize: '0.58rem', color: 'var(--color-emerald)' }}
          >
            ✓ {days} day{days > 1 ? 's' : ''} · Total rental: ₹{(item.pricePerDay * days).toLocaleString('en-IN')} + deposit
          </motion.div>
        )}

        {/* Reserve CTA */}
        <a
          href={item.available ? `https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappText}` : '#'}
          target={item.available ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="text-label"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.875rem',
            background: item.available ? 'var(--color-maroon)' : 'rgba(22,17,15,0.1)',
            color: item.available ? 'var(--color-ivory)' : 'rgba(22,17,15,0.3)',
            textDecoration: 'none',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            cursor: item.available ? 'none' : 'not-allowed',
            transition: 'background 0.3s ease',
          }}
        >
          {item.available ? 'Reserve on WhatsApp' : 'Currently Unavailable'}
        </a>
      </div>
    </div>
  );
}

// FAQ accordion item
function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(246,240,230,0.1)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem 0',
          background: 'none',
          border: 'none',
          cursor: 'none',
          textAlign: 'left',
          gap: '1rem',
        }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            fontWeight: 400,
            color: 'var(--color-ivory)',
          }}
        >
          {faq.q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={18} color="var(--color-gold)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="text-body"
              style={{ paddingBottom: '1.5rem', color: 'rgba(246,240,230,0.65)', fontSize: '0.9rem' }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const howItWorks = [
  { step: '01', title: 'Choose', desc: 'Browse our catalogue and pick your look.' },
  { step: '02', title: 'Reserve', desc: 'Select your date and confirm on WhatsApp.' },
  { step: '03', title: 'Fit & Alter', desc: 'Visit the studio for a fitting and any adjustments.' },
  { step: '04', title: 'Wear & Return', desc: 'Enjoy the event. Return the outfit. We handle the rest.' },
];

function FilterPills({ options, active, onChange, label }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', alignItems: 'center' }}>
      <span className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5, marginRight: '0.5rem' }}>
        {label}:
      </span>
      {['All', ...options].map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className="text-label"
          style={{
            padding: '0.35rem 0.9rem',
            border: '1px solid',
            borderColor: active === opt ? 'var(--color-gold)' : 'rgba(22,17,15,0.15)',
            background: active === opt ? 'var(--color-gold)' : 'transparent',
            color: active === opt ? 'var(--color-charcoal)' : 'var(--color-charcoal)',
            fontSize: '0.58rem',
            letterSpacing: '0.1em',
            cursor: 'none',
            transition: 'all 0.25s ease',
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function RentSection() {
  const [filterOccasion, setFilterOccasion] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterGender, setFilterGender] = useState('All');
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const filtered = rentalItems.filter((item) => {
    const matchOcc = filterOccasion === 'All' || item.occasions.includes(filterOccasion);
    const matchCat = filterCategory === 'All' || item.category === filterCategory;
    const matchGen = filterGender === 'All' || item.gender === filterGender.toLowerCase();
    return matchOcc && matchCat && matchGen;
  });

  return (
    <section id="rent" ref={sectionRef} style={{ background: 'var(--color-cream)' }}>
      {/* Header */}
      <div className="section-padding" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-wide">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-label"
            style={{ color: 'var(--color-gold)', marginBottom: '1rem', letterSpacing: '0.3em' }}
          >
            Rent a Look
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-display-lg"
            style={{ color: 'var(--color-charcoal)', maxWidth: '700px' }}
          >
            Wear the moment.{' '}
            <em style={{ color: 'var(--color-maroon)', fontStyle: 'italic' }}>Return the rest.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-body"
            style={{ maxWidth: '560px', marginTop: '1.25rem', opacity: 0.65 }}
          >
            Designer lehengas, sherwanis, gowns and indo-western sets on rent — freshly cleaned and
            tailored to your exact size before your event. The joy without the permanence.
          </motion.p>
        </div>
      </div>

      {/* How it works */}
      <div
        style={{
          background: 'var(--color-maroon)',
          padding: 'clamp(2.5rem, 5vw, 4rem) 0',
          overflow: 'hidden',
        }}
      >
        <div className="container-wide">
          <p className="text-label" style={{ color: 'var(--color-gold)', marginBottom: '2.5rem', letterSpacing: '0.3em' }}>
            How Renting Works
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0',
              position: 'relative',
            }}
          >
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.7 }}
                style={{
                  padding: '1.5rem',
                  borderLeft: i > 0 ? '1px dashed rgba(184,137,59,0.3)' : 'none',
                  position: 'relative',
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: '3rem',
                    fontWeight: 300,
                    color: 'rgba(184,137,59,0.2)',
                    lineHeight: 1,
                    marginBottom: '0.75rem',
                  }}
                >
                  {step.step}
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: '1.3rem', fontWeight: 400, color: 'var(--color-ivory)', marginBottom: '0.5rem' }}
                >
                  {step.title}
                </h3>
                <p className="text-body" style={{ fontSize: '0.85rem', color: 'rgba(246,240,230,0.6)' }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Catalogue */}
      <div className="section-padding">
        <div className="container-wide">
          <p className="text-label" style={{ color: 'var(--color-gold)', marginBottom: '2rem', letterSpacing: '0.3em' }}>
            Rental Catalogue
          </p>

          {/* Filters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <FilterPills options={rentalOccasions} active={filterOccasion} onChange={setFilterOccasion} label="Occasion" />
            <FilterPills options={rentalCategories} active={filterCategory} onChange={setFilterCategory} label="Category" />
            <FilterPills
              options={['Women', 'Men', 'Kids', 'Unisex']}
              active={filterGender}
              onChange={setFilterGender}
              label="Gender"
            />
          </div>

          {/* Grid */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2px',
            }}
          >
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <RentalCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-body" style={{ textAlign: 'center', opacity: 0.4, padding: '4rem 0' }}>
              No outfits match these filters. Try a different combination.
            </p>
          )}
        </div>
      </div>

      {/* FAQ */}
      <div
        style={{
          background: 'var(--color-emerald)',
          borderTop: '1px solid rgba(184,137,59,0.3)',
          padding: 'clamp(3rem, 6vw, 6rem) 0',
        }}
      >
        <div className="container-wide" style={{ maxWidth: '800px' }}>
          <p className="text-label" style={{ color: 'var(--color-gold)', marginBottom: '2rem', letterSpacing: '0.3em' }}>
            Rental FAQ
          </p>
          {rentalFAQ.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

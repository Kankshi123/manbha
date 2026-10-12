import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, LayoutGroup } from 'framer-motion';
import { X } from 'lucide-react';
import { collections, genderFilters } from '../data/collections.js';
import { media } from '../data/media.js';
import { siteConfig } from '../data/siteConfig.js';

const collectionImages = {
  'lehenga': media.collections.lehenga,
  'western': media.collections.western,
  'traditional': media.collections.traditional,
  'indo-western': media.collections.indoWestern,
};

function CollectionModal({ item, images, onClose }) {
  const whatsappText = encodeURIComponent(
    `Hi Manbha! I'm interested in your ${item.label} collection. Please share more details.`
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 5000,
        background: 'rgba(22,17,15,0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.label} collection details`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        style={{
          background: 'var(--color-ivory)',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gallery */}
        <div style={{ display: 'flex', gap: '2px', background: 'var(--color-charcoal)' }}>
          {images.gallery.slice(0, 2).map((src, i) => (
            <div key={i} style={{ flex: 1, aspectRatio: '3/4', overflow: 'hidden' }}>
              <img
                src={src}
                alt={`${item.label} collection piece ${i + 1}`}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        {/* Info */}
        <div style={{ padding: '2.5rem' }}>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'none',
              float: 'right',
              color: 'var(--color-charcoal)',
              opacity: 0.5,
            }}
          >
            <X size={20} />
          </button>

          <span
            className="font-devanagari"
            style={{ fontSize: '1.1rem', color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem' }}
          >
            {item.labelHindi}
          </span>

          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: 'var(--color-maroon)', marginBottom: '0.75rem' }}
          >
            {item.label}
          </h2>

          <p className="text-label" style={{ color: 'var(--color-gold)', marginBottom: '1.25rem', fontSize: '0.6rem' }}>
            {item.tagline}
          </p>

          <p className="text-body" style={{ marginBottom: '1.75rem', opacity: 0.75 }}>
            {item.description}
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <p className="text-label" style={{ marginBottom: '0.5rem', fontSize: '0.6rem', opacity: 0.5 }}>
              Typical Fabrics
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {item.fabrics.map((f) => (
                <span
                  key={f}
                  style={{
                    padding: '0.25rem 0.75rem',
                    border: '1px solid var(--color-gold)',
                    color: 'var(--color-charcoal)',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <p className="text-label" style={{ marginBottom: '0.5rem', fontSize: '0.6rem', opacity: 0.5 }}>
              For Occasions
            </p>
            <p className="text-body" style={{ fontSize: '0.85rem', opacity: 0.65 }}>
              {item.occasions.join(' · ')}
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              background: 'var(--color-maroon)',
              color: 'var(--color-ivory)',
              textDecoration: 'none',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Enquire on WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Collections() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCollection, setSelectedCollection] = useState(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const filteredCollections = collections.filter(
    (c) => activeFilter === 'all' || c.gender.includes(activeFilter)
  );

  return (
    <section
      id="collections"
      ref={sectionRef}
      className="section-padding"
      style={{ background: 'var(--color-ivory)' }}
    >
      <div className="container-wide">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(2rem, 4vw, 4rem)',
            gap: '1.5rem',
          }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-label"
              style={{ color: 'var(--color-gold)', marginBottom: '0.75rem', letterSpacing: '0.3em' }}
            >
              Collections
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-display-lg"
              style={{ color: 'var(--color-charcoal)' }}
            >
              Dress every <em style={{ color: 'var(--color-maroon)', fontStyle: 'italic' }}>story.</em>
            </motion.h2>
          </div>

          {/* Gender filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}
            role="tablist"
            aria-label="Filter by gender"
          >
            {genderFilters.map((filter) => (
              <button
                key={filter.id}
                role="tab"
                aria-selected={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className="text-label"
                style={{
                  padding: '0.5rem 1.25rem',
                  border: '1px solid',
                  borderColor: activeFilter === filter.id ? 'var(--color-maroon)' : 'rgba(22,17,15,0.15)',
                  background: activeFilter === filter.id ? 'var(--color-maroon)' : 'transparent',
                  color: activeFilter === filter.id ? 'var(--color-ivory)' : 'var(--color-charcoal)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  cursor: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Collection Cards */}
        <LayoutGroup>
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '2px',
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredCollections.map((collection, i) => {
                const images = collectionImages[collection.id];
                return (
                  <motion.div
                    layout
                    key={collection.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    onClick={() => setSelectedCollection({ item: collection, images })}
                    className="group"
                    style={{
                      cursor: 'none',
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'var(--color-charcoal)',
                    }}
                    data-cursor="view"
                  >
                    {/* Arch-clipped image */}
                    <div
                      className="clip-arch"
                      style={{ aspectRatio: '3/4', overflow: 'hidden', margin: '1rem 1rem 0' }}
                    >
                      <motion.img
                        src={images.hero}
                        alt={`${collection.label} collection — Manbha`}
                        loading="lazy"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    {/* Gold arch outline on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        right: '1rem',
                        bottom: 0,
                        border: '1px solid var(--color-gold)',
                        borderRadius: '9999px 9999px 0 0',
                        pointerEvents: 'none',
                        transition: 'opacity 0.4s ease',
                      }}
                    />

                    {/* Content */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '2rem',
                        background: 'linear-gradient(to top, rgba(22,17,15,0.9) 0%, transparent 100%)',
                        transform: 'translateY(0)',
                      }}
                    >
                      <span
                        className="font-devanagari"
                        style={{ color: 'var(--color-gold)', fontSize: '0.9rem', display: 'block', opacity: 0.8 }}
                      >
                        {collection.labelHindi}
                      </span>
                      <h3
                        className="font-display"
                        style={{
                          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                          fontWeight: 400,
                          color: 'var(--color-ivory)',
                          lineHeight: 1.1,
                          marginBottom: '0.5rem',
                        }}
                      >
                        {collection.label}
                      </h3>
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-label"
                        style={{ color: 'var(--color-gold)', fontSize: '0.58rem' }}
                      >
                        Explore →
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCollection && (
          <CollectionModal
            item={selectedCollection.item}
            images={selectedCollection.images}
            onClose={() => setSelectedCollection(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

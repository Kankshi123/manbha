import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Upload } from 'lucide-react';
import { customizerOptions } from '../data/customizer.js';
import { media } from '../data/media.js';
import { siteConfig } from '../data/siteConfig.js';

const miniServices = [
  {
    title: 'Customize a New Stitch',
    desc: 'Design your outfit from scratch with your chosen silhouette, fabric and embroidery.',
    cta: 'Start designing →',
  },
  {
    title: 'Customize a Rental',
    desc: 'Resize, recolour or add embroidery on a rental piece to make it feel truly yours.',
    cta: 'Explore rentals →',
  },
  {
    title: 'Redesign Your Old Outfit',
    desc: 'Bring in an outfit you already own and we will alter, upcycle or completely transform it.',
    cta: 'Book a consult →',
  },
];

export default function Customizer() {
  const [selectedColor, setSelectedColor] = useState(customizerOptions.colors[0]);
  const [selectedNeckline, setSelectedNeckline] = useState(customizerOptions.necklines[0]);
  const [selectedSleeve, setSelectedSleeve] = useState(customizerOptions.sleeves[0]);
  const [selectedFabric, setSelectedFabric] = useState(customizerOptions.fabrics[0]);
  const [selectedEmbroidery, setSelectedEmbroidery] = useState(customizerOptions.embroidery[0]);
  const [dragOver, setDragOver] = useState(false);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const whatsappText = encodeURIComponent(
    `Hi Manbha! Here is my custom design request:\n\n• Colour: ${selectedColor.label}\n• Neckline: ${selectedNeckline.label}\n• Sleeves: ${selectedSleeve.label}\n• Fabric: ${selectedFabric.label}\n• Embroidery: ${selectedEmbroidery.label}\n\nPlease guide me on next steps!`
  );

  const OptionRow = ({ label, options, active, onChange, renderOption }) => (
    <div style={{ marginBottom: '1.25rem' }}>
      <p className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5, marginBottom: '0.5rem' }}>
        {label}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {options.map((opt) =>
          renderOption ? (
            renderOption(opt)
          ) : (
            <button
              key={opt.id}
              onClick={() => onChange(opt)}
              className="text-label"
              title={opt.label}
              style={{
                padding: '0.35rem 0.85rem',
                border: '1px solid',
                borderColor: active.id === opt.id ? 'var(--color-maroon)' : 'rgba(22,17,15,0.15)',
                background: active.id === opt.id ? 'var(--color-maroon)' : 'transparent',
                color: active.id === opt.id ? 'var(--color-ivory)' : 'var(--color-charcoal)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                cursor: 'none',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {opt.label}
            </button>
          )
        )}
      </div>
    </div>
  );

  return (
    <section id="customize" ref={sectionRef} className="section-padding" style={{ background: 'var(--color-ivory)' }}>
      <div className="container-wide">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-label"
          style={{ color: 'var(--color-gold)', marginBottom: '1rem', letterSpacing: '0.3em' }}
        >
          Customization Studio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-display-lg"
          style={{ color: 'var(--color-charcoal)', marginBottom: 'clamp(2rem, 4vw, 4rem)' }}
        >
          Make it{' '}
          <em style={{ color: 'var(--color-maroon)', fontStyle: 'italic' }}>unmistakably</em> yours.
        </motion.h2>

        {/* Customizer layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'start',
            marginBottom: 'clamp(3rem, 6vw, 6rem)',
          }}
        >
          {/* Preview image */}
          <div>
            <div
              className="clip-arch"
              style={{
                aspectRatio: '3/4',
                overflow: 'hidden',
                position: 'relative',
                background: selectedColor.hex + '20',
              }}
              data-cursor="view"
            >
              <motion.img
                key={selectedColor.id}
                src={media.customizer.base}
                alt={`Outfit preview — ${selectedColor.label} ${selectedFabric.label} with ${selectedNeckline.label} neckline`}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: selectedColor.cssFilter,
                  transition: 'filter 0.6s ease',
                  mixBlendMode: 'multiply',
                }}
              />
              {/* Color tint overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: selectedColor.hex,
                  opacity: 0.15,
                  transition: 'background 0.6s ease, opacity 0.6s ease',
                  mixBlendMode: 'multiply',
                  pointerEvents: 'none',
                }}
              />
              {/* Embroidery level badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  padding: '0.35rem 0.85rem',
                  background: 'rgba(22,17,15,0.8)',
                  backdropFilter: 'blur(4px)',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                }}
              >
                {selectedEmbroidery.label} Embroidery
              </div>
            </div>
          </div>

          {/* Options panel */}
          <div>
            {/* Colour swatches */}
            <div style={{ marginBottom: '1.25rem' }}>
              <p className="text-label" style={{ fontSize: '0.55rem', opacity: 0.5, marginBottom: '0.5rem' }}>
                Colour — <span style={{ color: 'var(--color-maroon)' }}>{selectedColor.label}</span>
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {customizerOptions.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    title={color.label}
                    aria-label={`Select colour: ${color.label}`}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: color.hex,
                      border: `2px solid ${selectedColor.id === color.id ? 'var(--color-maroon)' : 'transparent'}`,
                      outline: selectedColor.id === color.id ? '1px solid var(--color-maroon)' : 'none',
                      outlineOffset: '2px',
                      cursor: 'none',
                      transition: 'transform 0.2s ease, outline 0.2s ease',
                      transform: selectedColor.id === color.id ? 'scale(1.15)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>
            </div>

            <OptionRow
              label="Neckline"
              options={customizerOptions.necklines}
              active={selectedNeckline}
              onChange={setSelectedNeckline}
            />
            <OptionRow
              label="Sleeves"
              options={customizerOptions.sleeves}
              active={selectedSleeve}
              onChange={setSelectedSleeve}
            />
            <OptionRow
              label={`Fabric — ${selectedFabric.description}`}
              options={customizerOptions.fabrics}
              active={selectedFabric}
              onChange={setSelectedFabric}
            />
            <OptionRow
              label="Embroidery Level"
              options={customizerOptions.embroidery}
              active={selectedEmbroidery}
              onChange={setSelectedEmbroidery}
            />

            {/* Selection summary card */}
            <div
              style={{
                border: '1px solid rgba(184,137,59,0.3)',
                padding: '1.25rem',
                marginTop: '1.5rem',
                marginBottom: '1.25rem',
                background: 'rgba(184,137,59,0.04)',
              }}
            >
              <p className="text-label" style={{ marginBottom: '0.75rem', fontSize: '0.55rem', opacity: 0.5 }}>
                Your Selection
              </p>
              {[
                ['Colour', selectedColor.label],
                ['Neckline', selectedNeckline.label],
                ['Sleeves', selectedSleeve.label],
                ['Fabric', selectedFabric.label],
                ['Embroidery', selectedEmbroidery.label],
              ].map(([key, val]) => (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.35rem 0',
                    borderBottom: '1px solid rgba(22,17,15,0.06)',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.8rem',
                  }}
                >
                  <span style={{ opacity: 0.5 }}>{key}</span>
                  <span style={{ color: 'var(--color-maroon)' }}>{val}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                background: 'var(--color-maroon)',
                color: 'var(--color-ivory)',
                textDecoration: 'none',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                width: '100%',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#154e42'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-maroon)'; }}
            >
              Send My Design to Manbha
            </a>
          </div>
        </div>

        {/* Mini service cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2px',
            marginBottom: 'clamp(3rem, 6vw, 6rem)',
          }}
        >
          {miniServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              style={{
                padding: '2rem',
                background: 'var(--color-cream)',
                borderTop: '2px solid var(--color-gold)',
              }}
            >
              <h3
                className="font-display"
                style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}
              >
                {s.title}
              </h3>
              <p className="text-body" style={{ fontSize: '0.85rem', opacity: 0.65, marginBottom: '1rem' }}>
                {s.desc}
              </p>
              <a
                href="#booking"
                onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-label"
                style={{ color: 'var(--color-maroon)', textDecoration: 'none', fontSize: '0.6rem' }}
              >
                {s.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Upload reference strip */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); }}
          style={{
            border: `2px dashed ${dragOver ? 'var(--color-maroon)' : 'rgba(184,137,59,0.4)'}`,
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            textAlign: 'center',
            background: dragOver ? 'rgba(184,137,59,0.04)' : 'transparent',
            transition: 'all 0.3s ease',
            cursor: 'none',
          }}
        >
          <Upload size={28} color="var(--color-gold)" />
          <div>
            <p
              className="font-display"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 400, color: 'var(--color-charcoal)' }}
            >
              Bring your own reference
            </p>
            <p className="text-body" style={{ marginTop: '0.4rem', opacity: 0.55, fontSize: '0.85rem' }}>
              Drag and drop inspiration images here, or share a Pinterest board / Instagram link.
            </p>
          </div>
          <label
            htmlFor="reference-upload"
            className="text-label"
            style={{
              padding: '0.75rem 2rem',
              border: '1px solid var(--color-maroon)',
              color: 'var(--color-maroon)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              cursor: 'none',
            }}
          >
            Browse Files
          </label>
          <input
            id="reference-upload"
            type="file"
            accept="image/*"
            multiple
            aria-label="Upload reference images"
            style={{ display: 'none' }}
          />
          <p className="text-label" style={{ fontSize: '0.5rem', opacity: 0.35 }}>
            UI prototype — images are not actually uploaded
          </p>
        </div>
      </div>
    </section>
  );
}

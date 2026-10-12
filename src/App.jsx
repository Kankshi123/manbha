import { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Collections from './components/Collections';
import RentSection from './components/RentSection';
import Customizer from './components/Customizer';
import Process from './components/Process';
import Lookbook from './components/Lookbook';
import Craft from './components/Craft';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Studio from './components/Studio';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize smooth scrolling with Lenis
  useLenis();

  return (
    <div className="relative min-h-screen bg-[var(--color-ivory)] text-[var(--color-charcoal)] font-sans selection:bg-[var(--color-maroon)] selection:text-[var(--color-ivory)]">
      {/* Intro Preloader Curtain Animation */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Bespoke Interactive Cursor for Desktop */}
      <Cursor />

      {/* Global Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Dynamic Running Marquee */}
        <MarqueeStrip />

        {/* Philosophy & Craftsmanship Ethos */}
        <Philosophy />

        {/* Core Services: Stitch, Rent, Customise */}
        <Services />

        {/* Collections with Multi-gender Filtering & Detailed Previews */}
        <Collections />

        {/* Dedicated Rent a Look Experience with Date Picker & Deposit Info */}
        <RentSection />

        {/* Interactive Customizer Studio */}
        <Customizer />

        {/* The 6-Step Bespoke Process with GSAP Pinning */}
        <Process />

        {/* Editorial Fashion Lookbook Showcase */}
        <Lookbook />

        {/* Deep Dive into Indian Craft & Luxury Fabrics */}
        <Craft />

        {/* Client Love & Testimonials Carousel */}
        <Testimonials />

        {/* Interactive Booking & WhatsApp Direct Enquiry Form */}
        <BookingForm />

        {/* Studio Location, Timings & Dehradun Map */}
        <Studio />
      </main>

      {/* Architectural Brand Wordmark Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Action Button */}
      <WhatsAppFab />
    </div>
  );
}

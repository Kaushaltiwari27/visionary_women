import React, { useState } from 'react';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { VisionMission } from './components/VisionMission';
import { PinnedStory } from './components/PinnedStory';
import { ServicesShowcase } from './components/ServicesShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WomenEmpowerment } from './components/WomenEmpowerment';
import { GallerySection } from './components/GallerySection';
import { GoalsSection } from './components/GoalsSection';
import { FuturePlan } from './components/FuturePlan';
import { FounderPerspective } from './components/FounderPerspective';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';

export function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [contactMode, setContactMode] = useState<string>('business');
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');

  const handleOpenContact = (mode: string = 'business', serviceTitle: string = '') => {
    setContactMode(mode);
    setSelectedServiceForInquiry(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-white selection:bg-vwTeal selection:text-navy-950 font-sans antialiased overflow-x-hidden">
      {/* Cinematic Full-Screen Initial Loader */}
      {!loadingComplete && (
        <Loader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Luxury Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenVideo={() => setIsVideoModalOpen(true)}
      />

      {/* Main Experience Flow */}
      <main>
        {/* Section 1: Hero */}
        <Hero
          onOpenContact={handleOpenContact}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        {/* Section 2: Brand Introduction (About) */}
        <BrandIntro onOpenContact={handleOpenContact} />

        {/* Section 3: Vision & Mission */}
        <VisionMission />

        {/* Section 3.5: Pinned Transformation Storyline */}
        <PinnedStory onOpenContact={handleOpenContact} />

        {/* Section 4: 3D Interactive Services Showcase */}
        <ServicesShowcase onOpenContact={handleOpenContact} />

        {/* Section 5: Why Visionary Women */}
        <WhyChooseUs onOpenContact={handleOpenContact} />

        {/* Section 6: Women Empowerment Manifesto */}
        <WomenEmpowerment onOpenContact={handleOpenContact} />

        {/* Section 6.5: Curated Brand & Leadership Visual Gallery */}
        <GallerySection />

        {/* Section 7: Our Goals */}
        <GoalsSection />

        {/* Section 8: Future Plan Roadmap */}
        <FuturePlan />

        {/* Section 9: Founder's Perspective */}
        <FounderPerspective />

        {/* Section 10: Contact & Consultation */}
        <ContactSection
          initialMode={contactMode}
          initialService={selectedServiceForInquiry}
        />
      </main>

      {/* Section 11: Footer */}
      <Footer />

      {/* Interactive Video Modal for Logo Reveal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}

export default App;

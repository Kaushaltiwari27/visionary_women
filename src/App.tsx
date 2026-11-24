import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { VisionMission } from './components/VisionMission';
import { ServicesShowcase } from './components/ServicesShowcase';
import { ForBusinesses } from './components/ForBusinesses';
import { WomenEmpowerment } from './components/WomenEmpowerment';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FounderPerspective } from './components/FounderPerspective';
import { FuturePlan } from './components/FuturePlan';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
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
    <div className="min-h-screen bg-white text-brand-text font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <Hero onOpenContact={handleOpenContact} />

        {/* About — Brand Introduction */}
        <BrandIntro onOpenContact={handleOpenContact} />

        {/* Vision & Mission */}
        <VisionMission />

        {/* Services */}
        <ServicesShowcase onOpenContact={handleOpenContact} />

        {/* For Businesses */}
        <ForBusinesses onOpenContact={handleOpenContact} />

        {/* For Women Professionals */}
        <WomenEmpowerment onOpenContact={handleOpenContact} />

        {/* Gallery */}
        <GallerySection />

        {/* Why Choose Us */}
        <WhyChooseUs onOpenContact={handleOpenContact} />

        {/* Future Roadmap */}
        <FuturePlan />

        {/* Founder */}
        <FounderPerspective />

        {/* Contact */}
        <ContactSection
          initialMode={contactMode}
          initialService={selectedServiceForInquiry}
        />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface NavbarProps {
  onOpenContact: (mode?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 80;
      const elementPos = targetEl.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: '' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'For Businesses', id: 'for-businesses' },
    { name: 'For Women', id: 'empowerment' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-[0_1px_12px_rgba(23,32,51,0.08)] border-b border-brand-border'
          : 'bg-white/95'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
            className="flex items-center space-x-2.5 group flex-shrink-0"
            title="Visionary Women"
          >
            <img
              src="/assets/vw-logo.png"
              alt="Visionary Women"
              className="w-9 h-9 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-brand-navy text-sm tracking-wide">
                VISIONARY WOMEN
              </span>
              <span className="text-[10px] text-brand-muted tracking-wider font-medium">
                Professional Services
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.id ? `#${link.id}` : '/'}
                onClick={(e) => link.id ? scrollToSection(e, link.id) : (e.preventDefault(), window.scrollTo({ top: 0, behavior: 'smooth' }))}
                className="px-3.5 py-2 text-sm font-medium text-brand-muted hover:text-brand-navy transition-colors rounded-lg hover:bg-brand-bgAlt whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="text-sm text-brand-muted hover:text-brand-navy transition-colors flex items-center space-x-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BRAND_INFO.phone}</span>
            </a>
            <button
              onClick={() => onOpenContact('business')}
              className="btn-gold flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-text hover:bg-brand-bgAlt transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-border bg-white animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.id ? `#${link.id}` : '/'}
                onClick={(e) => link.id ? scrollToSection(e, link.id) : (e.preventDefault(), window.scrollTo({ top: 0, behavior: 'smooth' }), setMobileMenuOpen(false))}
                className="block px-4 py-3 text-sm font-medium text-brand-text hover:bg-brand-bgAlt rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 pb-1 border-t border-brand-border mt-3 space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenContact('business'); }}
                className="w-full btn-gold text-center justify-center"
              >
                Discuss Your Requirements
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenContact('professional'); }}
                className="w-full btn-navy-ghost text-center justify-center"
              >
                Join Our Network
              </button>
            </div>
            <div className="pt-3 border-t border-brand-border flex items-center space-x-2 text-xs text-brand-muted px-2">
              <Phone className="w-3.5 h-3.5" />
              <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-brand-navy transition-colors">
                {BRAND_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

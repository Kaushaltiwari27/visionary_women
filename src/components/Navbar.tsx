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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const offset = targetEl.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: '' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'For Businesses', id: 'for-businesses' },
    { name: 'For Women', id: 'empowerment' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-[0_1px_12px_rgba(23,32,51,0.08)] border-b border-brand-border'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
              className="flex items-center space-x-2.5 group flex-shrink-0 min-w-0"
            >
              <img
                src="/assets/vw-logo-tm.png"
                alt="Visionary Women™ Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] object-contain flex-shrink-0"
              />
              <div className="flex flex-col leading-none min-w-0">
                <span className="font-bold text-brand-navy text-xs sm:text-sm tracking-wide truncate flex items-start">
                  VISIONARY WOMEN<sup className="text-[9px] sm:text-[10px] font-bold text-brand-gold ml-0.5 leading-none">™</sup>
                </span>
                <span className="text-[9px] sm:text-[10px] text-brand-muted tracking-wider font-medium hidden sm:block mt-0.5">
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
                  onClick={(e) => link.id
                    ? scrollToSection(e, link.id)
                    : (e.preventDefault(), window.scrollTo({ top: 0, behavior: 'smooth' }))
                  }
                  className="px-3.5 py-2 text-sm font-medium text-brand-muted hover:text-brand-navy transition-colors rounded-lg hover:bg-brand-bgAlt whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="text-sm text-brand-muted hover:text-brand-navy transition-colors flex items-center space-x-1.5 font-medium"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="hidden xl:inline">{BRAND_INFO.phone}</span>
              </a>
              <button
                onClick={() => onOpenContact('business')}
                className="btn-gold flex items-center space-x-2 whitespace-nowrap"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile: Phone + Menu toggle */}
            <div className="lg:hidden flex items-center space-x-2">
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="p-2 rounded-lg text-brand-muted hover:text-brand-navy hover:bg-brand-bgAlt transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-brand-text hover:bg-brand-bgAlt transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu — full overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white flex flex-col animate-fadeIn pt-16">
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.id ? `#${link.id}` : '/'}
                onClick={(e) => link.id
                  ? scrollToSection(e, link.id)
                  : (e.preventDefault(), window.scrollTo({ top: 0, behavior: 'smooth' }), setMobileMenuOpen(false))
                }
                className="flex items-center px-4 py-4 text-base font-medium text-brand-text hover:bg-brand-bgAlt rounded-xl transition-colors border-b border-brand-border/50 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile CTA section */}
          <div className="px-4 pb-8 pt-4 border-t border-brand-border space-y-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact('business'); }}
              className="w-full btn-gold text-center justify-center py-4 text-base"
            >
              For Businesses — Contact Us
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact('professional'); }}
              className="w-full btn-navy-ghost text-center justify-center py-4 text-base"
            >
              Join Our Network
            </button>
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center justify-center space-x-2 text-sm text-brand-muted py-2"
            >
              <Phone className="w-4 h-4" />
              <span>{BRAND_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

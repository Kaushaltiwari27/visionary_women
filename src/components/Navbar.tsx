import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface NavbarProps {
  onOpenContact: (mode?: string) => void;
  onOpenVideo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      // Active section detection with balanced threshold
      const sectionIds = ['about', 'vision', 'services', 'why-us', 'empowerment', 'gallery', 'future', 'founder', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Programmatic smooth scroll with fixed header offset
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 95;
      const elementPos = targetEl.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Vision', id: 'vision' },
    { name: 'Services', id: 'services' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Empowerment', id: 'empowerment' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Roadmap', id: 'future' },
    { name: 'Founder', id: 'founder' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      {/* Floating Island Capsule */}
      <nav
        className={`w-full max-w-7xl mx-auto rounded-full transition-all duration-500 ease-out flex items-center justify-between ${
          isScrolled
            ? 'bg-navy-950/90 backdrop-blur-2xl border border-vwTeal/30 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85),0_0_25px_rgba(71,200,191,0.15)] px-3.5 py-2 sm:px-6 sm:py-2.5'
            : 'bg-navy-950/50 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)] px-3.5 py-2.5 sm:px-6 sm:py-3'
        }`}
      >
        {/* Left: Brand Identity Logo Mark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group shrink-0"
          title="Visionary Women - Return to top"
        >
          {/* Circular Logo with Glow */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-vwTeal via-white to-vwOrange shadow-glow-teal transition-transform group-hover:scale-105 shrink-0">
            <img
              src="/assets/vw-logo.png"
              alt="Visionary Women"
              className="w-full h-full object-contain rounded-full bg-navy-950 p-1"
            />
          </div>
        </a>

        {/* Center: Desktop Navigation Links (Responsive Breakpoint at xl: 1280px) */}
        <div className="hidden xl:flex items-center space-x-1 bg-navy-900/60 border border-white/10 rounded-full px-2.5 py-1 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-montserrat font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-vwYellow bg-white/10 shadow-sm font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3.5 h-[2px] bg-vwYellow rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: High-Conversion Action CTA (Clean, 100% Visible, Never Cut Off) */}
        <div className="flex items-center space-x-3 shrink-0">
          {/* Primary High-Impact CTA: Consult Us */}
          <button
            onClick={() => onOpenContact('business')}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-vwYellow via-vwYellow-light to-vwYellow text-navy-950 font-montserrat font-extrabold uppercase tracking-wider text-xs hover:shadow-[0_0_24px_rgba(255,222,89,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-2 cursor-pointer shadow-md whitespace-nowrap shrink-0"
          >
            <span>Consult Us</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Mobile/Tablet Menu Hamburger Toggle (Visible below xl: 1280px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-navy-900/90 border border-navy-700 text-slate-200 hover:text-vwYellow focus:outline-none transition-colors cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Responsive Glass Mobile/Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 mx-auto max-w-7xl bg-navy-950/98 backdrop-blur-2xl border border-vwTeal/30 rounded-3xl shadow-2xl p-5 sm:p-6 transition-all duration-300 animate-fadeIn">
          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-5 border-b border-navy-800">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-montserrat font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-vwTeal/20 text-vwYellow border border-vwTeal/40'
                    : 'bg-navy-900/60 hover:bg-navy-900 text-slate-200 hover:text-vwYellow'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-slate-500 text-xs">→</span>
              </a>
            ))}
          </div>

          {/* Dual Action CTAs in Mobile Menu */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('business');
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-vwYellow to-vwYellow-hover text-navy-950 font-montserrat font-extrabold uppercase tracking-wider text-xs shadow-glow-yellow flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Discuss Business Requirements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('professional');
              }}
              className="w-full py-3 rounded-xl border border-vwTeal text-vwTeal hover:bg-vwTeal/10 font-montserrat font-bold uppercase tracking-wider text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <span>Join As Qualified Professional (CA / CS / CMA)</span>
            </button>
          </div>

          {/* Direct Support Micro Bar */}
          <div className="mt-4 pt-3 border-t border-navy-850 flex items-center justify-between text-xs text-slate-400 font-sans">
            <span className="flex items-center space-x-1.5 text-vwTeal">
              <MapPin className="w-3.5 h-3.5" />
              <span>Surat | Pune</span>
            </span>
            <div className="flex items-center space-x-4">
              <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-vwYellow transition-colors flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5 text-vwYellow" />
                <span>{BRAND_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

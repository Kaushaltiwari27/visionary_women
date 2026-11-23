import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Play, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface NavbarProps {
  onOpenContact: (mode?: string) => void;
  onOpenVideo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenVideo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section on scroll
      const sections = ['about', 'vision', 'services', 'why-us', 'empowerment', 'gallery', 'future', 'founder', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Vision', href: '#vision', id: 'vision' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Empowerment', href: '#empowerment', id: 'empowerment' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Roadmap', href: '#future', id: 'future' },
    { name: 'Founder', href: '#founder', id: 'founder' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      {/* Floating Island Capsule Container */}
      <nav
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 ease-out flex items-center justify-between ${
          isScrolled
            ? 'bg-navy-950/85 backdrop-blur-xl border border-vwTeal/25 shadow-[0_18px_45px_-10px_rgba(0,0,0,0.85),0_0_20px_rgba(71,200,191,0.12)] px-4 py-2 sm:px-6 sm:py-2.5'
            : 'bg-navy-950/45 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] px-4 py-2.5 sm:px-6 sm:py-3'
        }`}
      >
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center space-x-3 group shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-vwTeal via-white to-vwOrange shadow-glow-teal transition-transform group-hover:scale-105 shrink-0">
            <img
              src="/assets/vw-logo.png"
              alt="Visionary Women Logo"
              className="w-full h-full object-contain rounded-full bg-navy-950 p-1"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="font-montserrat tracking-wide text-base sm:text-lg font-extrabold uppercase leading-tight text-white group-hover:text-vwYellow transition-colors">
                VISIONARY <span className="text-vwTeal">WOMEN</span>
              </span>
              <span className="hidden xl:inline-block w-1.5 h-1.5 rounded-full bg-vwTeal animate-pulse" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-slate-300 font-sans">
                We Rise by Lifting Others
              </span>
              <span className="hidden lg:inline text-slate-600">•</span>
              <span className="hidden lg:inline text-[9px] font-sans text-vwTeal font-medium">
                Surat | Pune
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Sleek Nav Links with Active State & Glass Pill Hover */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-navy-900/40 border border-white/5 rounded-full px-3 py-1 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-montserrat font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-vwYellow bg-white/10 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-vwYellow rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action CTAs with Visual Hierarchy & No Overlap */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          {/* Brand Story Reel Button */}
          {onOpenVideo && (
            <button
              onClick={onOpenVideo}
              className="relative group p-2 rounded-full bg-navy-900/80 border border-vwTeal/30 text-vwTeal hover:bg-vwTeal hover:text-navy-950 transition-all duration-300 shadow-sm cursor-pointer shrink-0"
              title="Watch Brand Story"
            >
              <span className="w-2 h-2 rounded-full bg-vwTeal absolute -top-0.5 -right-0.5 animate-ping" />
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </button>
          )}

          {/* Secondary Ghost CTA: Join Network */}
          <button
            onClick={() => onOpenContact('professional')}
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full border border-slate-700/80 hover:border-vwTeal/50 text-slate-200 hover:text-white hover:bg-white/5 text-xs font-montserrat font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <span>Join Network</span>
          </button>

          {/* Primary High-Impact CTA: Consult Us */}
          <button
            onClick={() => onOpenContact('business')}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-vwYellow via-vwYellow-light to-vwYellow text-navy-950 font-montserrat font-extrabold uppercase tracking-wider text-xs hover:shadow-[0_0_22px_rgba(255,222,89,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-1.5 cursor-pointer shadow-md whitespace-nowrap"
          >
            <span>Consult Us</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-navy-900/90 border border-navy-700 text-slate-200 hover:text-vwYellow focus:outline-none transition-colors ml-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Modern Glass Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-7xl bg-navy-950/95 backdrop-blur-2xl border border-vwTeal/30 rounded-3xl shadow-2xl p-6 transition-all duration-300 animate-fadeIn">
          {/* Mobile Nav Links */}
          <div className="grid grid-cols-2 gap-2 pb-5 border-b border-navy-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-navy-900/60 hover:bg-navy-900 text-sm font-montserrat font-semibold text-slate-200 hover:text-vwYellow transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-600 text-xs">→</span>
              </a>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="pt-5 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('business');
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-vwYellow to-vwYellow-hover text-navy-950 font-montserrat font-extrabold uppercase tracking-wider text-xs shadow-glow-yellow flex items-center justify-center space-x-2"
            >
              <span>Schedule Firm Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('professional');
              }}
              className="w-full py-3 rounded-xl border border-vwTeal text-vwTeal hover:bg-vwTeal/10 font-montserrat font-bold uppercase tracking-wider text-xs flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Join As Qualified Professional (CA / CS / CMA)</span>
            </button>
          </div>

          {/* Micro Footer Inside Mobile Menu */}
          <div className="mt-5 pt-4 border-t border-navy-850 flex items-center justify-between text-[11px] text-slate-400 font-sans">
            <span className="flex items-center space-x-1 text-vwTeal">
              <MapPin className="w-3.5 h-3.5" />
              <span>Surat | Pune</span>
            </span>
            <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-vwYellow transition-colors">
              {BRAND_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface NavbarProps {
  onOpenContact: (mode?: string) => void;
  onOpenVideo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenVideo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vision & Mission', href: '#vision' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Empowerment', href: '#empowerment' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Roadmap', href: '#future' },
    { name: 'Founder', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro-bar for corporate trust */}
      <div className="hidden lg:block bg-navy-950/90 border-b border-navy-800/60 text-xs py-2 px-6 z-50 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300 font-medium">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-vwTeal space-x-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Surat | Pune (Pan-India Service)</span>
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 italic">"We Rise by Lifting Others"</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href={`tel:${BRAND_INFO.phone}`} className="flex items-center space-x-1.5 hover:text-vwYellow transition-colors">
              <Phone className="w-3.5 h-3.5 text-vwYellow" />
              <span>{BRAND_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a href={`mailto:${BRAND_INFO.email}`} className="flex items-center space-x-1.5 hover:text-vwTeal transition-colors">
              <Mail className="w-3.5 h-3.5 text-vwTeal" />
              <span>{BRAND_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed top-0 lg:top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-2xl py-3 border-b border-navy-800/80'
            : 'bg-gradient-to-b from-navy-950/80 via-navy-900/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-tr from-vwTeal via-white to-vwOrange shadow-glow-teal transition-transform group-hover:scale-105">
              <img
                src="/assets/vw-logo.png"
                alt="Visionary Women Logo"
                className="w-full h-full object-contain rounded-full bg-navy-950 p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat tracking-wide text-lg sm:text-xl font-extrabold uppercase leading-tight text-white group-hover:text-vwYellow transition-colors">
                VISIONARY <span className="text-vwTeal">WOMEN</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-300 font-sans">
                We Rise by Lifting Others
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-montserrat font-semibold uppercase tracking-wider text-slate-200 hover:text-vwYellow transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-vwTeal hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {onOpenVideo && (
              <button
                onClick={onOpenVideo}
                className="px-3.5 py-2 text-xs font-montserrat font-semibold rounded-full border border-vwTeal/40 text-vwTeal hover:bg-vwTeal/10 transition-all flex items-center space-x-1.5 cursor-pointer"
                title="Watch brand reveal animation"
              >
                <span className="w-2 h-2 rounded-full bg-vwTeal animate-ping" />
                <span>Brand Story</span>
              </button>
            )}
            <button
              onClick={() => onOpenContact('professional')}
              className="px-4 py-2 text-xs font-montserrat font-semibold rounded-full border border-slate-400/40 text-white hover:border-vwTeal hover:text-vwTeal transition-all cursor-pointer"
            >
              Join Our Network
            </button>
            <button
              onClick={() => onOpenContact('business')}
              className="px-5 py-2 text-xs font-montserrat font-bold uppercase tracking-wider rounded-full bg-vwYellow text-navy-950 hover:bg-vwYellow-hover hover:shadow-glow-yellow transition-all flex items-center space-x-1 cursor-pointer"
            >
              <span>Consult Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-vwYellow focus:outline-none focus:ring-2 focus:ring-vwTeal rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Slideout Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-navy-950/98 border-b border-navy-800 shadow-2xl px-6 py-6 transition-all duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-200 hover:text-vwYellow py-2 border-b border-navy-900/60"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact('professional');
                  }}
                  className="w-full py-3 text-sm font-semibold rounded-xl border border-vwTeal text-vwTeal text-center"
                >
                  Join Our Network (Professionals)
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact('business');
                  }}
                  className="w-full py-3 text-sm font-bold uppercase tracking-wider rounded-xl bg-vwYellow text-navy-950 text-center shadow-glow-yellow"
                >
                  Explore Outsourcing Services
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

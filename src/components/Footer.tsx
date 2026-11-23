import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Heart, Shield } from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800/80 text-slate-300 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-navy-900/40 rounded-t-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-navy-850">
          
          {/* Brand Info & Mission Statement (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-vwTeal via-white to-vwOrange shadow-glow-teal">
                <img
                  src="/assets/vw-logo.png"
                  alt="Visionary Women Logo"
                  className="w-full h-full object-contain rounded-full bg-navy-950"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat tracking-wide text-lg sm:text-xl font-extrabold uppercase text-white">
                  VISIONARY <span className="text-vwTeal">WOMEN</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 font-sans">
                  {BRAND_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              A dynamic, women-led platform connecting businesses with qualified professionals through flexible, remote-first opportunities and exceptional accounting, taxation, secretarial, and virtual CFO solutions.
            </p>

            <div className="flex items-center space-x-2 text-xs text-vwTeal font-montserrat font-semibold">
              <Shield className="w-4 h-4" />
              <span>Certified Chartered Accountant Mentorship & Oversight</span>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-vwYellow">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              <li>
                <a href="#" className="hover:text-vwTeal transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-vwTeal transition-colors">About Us</a>
              </li>
              <li>
                <a href="#vision" className="hover:text-vwTeal transition-colors">Our Vision & Mission</a>
              </li>
              <li>
                <a href="#services" className="hover:text-vwTeal transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-vwTeal transition-colors">Why Visionary Women</a>
              </li>
              <li>
                <a href="#empowerment" className="hover:text-vwTeal transition-colors">Empowerment</a>
              </li>
              <li>
                <a href="#future" className="hover:text-vwTeal transition-colors">Future Plan</a>
              </li>
              <li>
                <a href="#founder" className="hover:text-vwTeal transition-colors">Founder's Perspective</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-vwTeal transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Practice Areas / Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-vwTeal">
              Service Pillars
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-vwYellow transition-colors block">
                    {s.category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-white">
              Official Hubs
            </h4>
            <div className="space-y-3 text-xs sm:text-sm font-sans">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-vwOrange shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Surat | Pune</span>
                  <span className="text-slate-400 text-xs">{BRAND_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-vwYellow shrink-0" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-vwYellow transition-colors font-medium">
                  {BRAND_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-vwTeal shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-vwTeal transition-colors break-all">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-slate-400 font-sans block">
                Founder: <strong>CA Crispee Morakhiya</strong>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Visionary Women. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="italic text-slate-400">"We Rise by Lifting Others"</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Engagement</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-navy-850 hover:bg-vwTeal hover:text-navy-950 text-slate-300 transition-colors shadow-sm flex items-center space-x-1"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

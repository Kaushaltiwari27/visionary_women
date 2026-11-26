import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ExternalLink, Linkedin, Youtube, MessageCircle, Star, Globe } from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA, SOCIAL_LINKS, USEFUL_LINKS } from '../data/content';

interface FooterProps {
  onOpenContact?: (mode?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-navy text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-10 border-b border-white/10">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1 flex-shrink-0 shadow-sm">
                <img
                  src="/assets/vw-logo-tm.png"
                  alt="Visionary Women™ Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-white tracking-wide text-sm flex items-start">
                  VISIONARY WOMEN<sup className="text-[9px] font-bold text-brand-gold ml-0.5 leading-none">™</sup>
                </div>
                <div className="text-xs text-white/50 mt-0.5 font-medium">Professional Services</div>
              </div>
            </div>

            <p className="text-sm text-white/60 leading-relaxed">
              A women-led professional services firm providing accounting, taxation, compliance,
              and financial advisory services to businesses — and creating flexible opportunities
              for qualified women professionals.
            </p>

            <div className="text-xs text-white/40 italic font-medium">
              "{BRAND_INFO.tagline}"
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {SOCIAL_LINKS.map((item) => {
                const Icon =
                  item.platform === 'linkedin'
                    ? Linkedin
                    : item.platform === 'youtube'
                    ? Youtube
                    : item.platform === 'whatsapp'
                    ? MessageCircle
                    : item.platform === 'google'
                    ? Star
                    : Globe;
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${item.label} — ${item.description}`}
                    aria-label={item.label}
                    className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-brand-gold text-white/80 hover:text-white text-xs font-medium transition-all"
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Contact quick links */}
            <div className="space-y-2 pt-1">
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-center space-x-2 text-xs text-white/60 hover:text-brand-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center space-x-2 text-xs text-white/60 hover:text-brand-gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.email}</span>
              </a>
              <div className="flex items-start space-x-2 text-xs text-white/60">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>Surat | Pune — {BRAND_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', id: '' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'For Businesses', id: 'for-businesses' },
                { label: 'For Women', id: 'empowerment' },
                { label: 'Google Reviews', id: 'reviews' },
                { label: 'Our Team', id: 'founder' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => link.id ? scrollTo(link.id) : scrollToTop()}
                    className="text-white/60 hover:text-white transition-colors text-left text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-white/60 hover:text-white transition-colors text-left"
                  >
                    {s.category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Useful Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
              Community & Useful Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {USEFUL_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-white/65 hover:text-brand-gold transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2 space-y-2">
              <button
                onClick={() => onOpenContact?.('business')}
                className="w-full py-2.5 px-4 rounded-lg bg-brand-gold hover:bg-vwGold-hover text-white text-xs font-semibold transition-colors text-center"
              >
                Business Enquiry
              </button>
              <button
                onClick={() => onOpenContact?.('professional')}
                className="w-full py-2.5 px-4 rounded-lg border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-xs font-semibold transition-all text-center"
              >
                Join Our Network
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
            <span>© {new Date().getFullYear()} Visionary Women. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span>Founder: {BRAND_INFO.founder.name}</span>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all flex items-center space-x-1.5 text-xs"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>
      </div>

    </footer>
  );
};

import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { BRAND_INFO } from '../data/content';

interface HeroProps {
  onOpenContact: (mode?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.hero-label', { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo('.hero-line', { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9 }, '-=0.3')
        .fromTo('.hero-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
        .fromTo('.hero-cta', { y: 16, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .fromTo('.hero-image', { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' }, 0.2);
      gsap.to('.hero-scroll', { y: 6, repeat: -1, yoyo: true, duration: 1.6, ease: 'sine.inOut' });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-24 bg-white overflow-hidden flex items-center"
    >
      {/* Subtle background panel — desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute top-0 right-0 h-full bg-brand-bgAlt"
          style={{ width: '45%', clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
      </div>

      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gold opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left: Text */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">

            {/* Label */}
            <div className="hero-label inline-flex items-center justify-center lg:justify-start space-x-2 w-full">
              <span className="w-6 sm:w-8 h-[2px] bg-brand-gold flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-brand-muted text-left">
                Women-Led Professional Services · Surat & Pune
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
              <span className="hero-line block">Professional Services.</span>
              <span className="hero-line block text-brand-gold">Built Around</span>
              <span className="hero-line block">People.</span>
            </h1>

            {/* Description */}
            <p className="hero-desc text-sm sm:text-base lg:text-lg text-brand-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
              Visionary Women provides accounting, taxation, compliance, and financial advisory
              services to businesses — while creating flexible professional opportunities for
              qualified women.
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <button
                onClick={() => onOpenContact('business')}
                className="hero-cta btn-gold flex items-center justify-center space-x-2 py-3.5 px-6 sm:px-7 text-sm sm:text-base"
              >
                <span>For Businesses</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>
              <button
                onClick={() => onOpenContact('professional')}
                className="hero-cta btn-navy-ghost flex items-center justify-center space-x-2 py-3.5 px-6 sm:px-7 text-sm sm:text-base"
              >
                <span>For Women Professionals</span>
              </button>
            </div>

            {/* Trust notes */}
            <div className="hero-cta flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 pt-1">
              {['CA & CS Qualified Leadership', 'Surat & Pune Offices', 'Pan-India Services'].map((item) => (
                <div key={item} className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                  <span className="text-xs text-brand-muted font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Founder Photo */}
          <div className="hero-image flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
              {/* Photo */}
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-2xl shadow-card-elevated">
                <img
                  src={BRAND_INFO.founder.image}
                  alt={BRAND_INFO.founder.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent" />
              </div>

              {/* Founder name card */}
              <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-white border border-brand-border rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 shadow-card-elevated">
                <div className="font-semibold text-brand-navy text-xs sm:text-sm">{BRAND_INFO.founder.name}</div>
                <div className="text-[10px] sm:text-xs text-brand-muted mt-0.5">{BRAND_INFO.founder.title}</div>
              </div>

              {/* Credential badge */}
              <div className="absolute -top-3 sm:-top-4 -right-2 sm:-right-4 bg-brand-navy text-white text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-card-elevated">
                Mentor · ICAI Surat
              </div>

              {/* Decorative accent */}
              <div className="absolute -z-10 -bottom-4 -right-2 sm:-right-4 w-full h-full border-2 border-brand-gold/30 rounded-2xl" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator — hide on small phones */}
      <div className="hero-scroll absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 text-brand-muted hidden sm:flex">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
};

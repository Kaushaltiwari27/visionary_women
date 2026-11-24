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

      tl.fromTo(
        '.hero-label',
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      )
      .fromTo(
        '.hero-line',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.9 },
        '-=0.3'
      )
      .fromTo(
        '.hero-desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        '.hero-cta',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '.hero-image',
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' },
        0.2
      );

      // Scroll indicator animation
      gsap.to('.hero-scroll', {
        y: 6,
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-24 pb-16 lg:pt-28 lg:pb-24 bg-white overflow-hidden flex items-center"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-bgAlt" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }} />
      </div>

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gold opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <div className="space-y-7 text-center lg:text-left">

            {/* Label */}
            <div className="hero-label inline-flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-brand-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-muted">
                Women-Led Professional Services · Surat & Pune
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
              <span className="hero-line block">Professional Services.</span>
              <span className="hero-line block text-brand-gold">Built Around</span>
              <span className="hero-line block">People.</span>
            </h1>

            {/* Supporting copy */}
            <p className="hero-desc text-lg text-brand-muted leading-relaxed max-w-lg mx-auto lg:mx-0 font-normal">
              Visionary Women provides accounting, taxation, compliance, and financial advisory services to businesses — while creating flexible professional opportunities for qualified women.
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={() => onOpenContact('business')}
                className="hero-cta btn-gold w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-3.5 text-sm"
              >
                <span>For Businesses</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenContact('professional')}
                className="hero-cta btn-navy-ghost w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-3.5 text-sm"
              >
                <span>For Women Professionals</span>
              </button>
            </div>

            {/* Trust notes */}
            <div className="hero-cta flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-2">
              {[
                'CA & CS Qualified Leadership',
                'Surat & Pune Offices',
                'Pan-India Services',
              ].map((item) => (
                <div key={item} className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                  <span className="text-xs text-brand-muted font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Founder Photo */}
          <div className="hero-image flex justify-center lg:justify-end">
            <div className="relative">
              {/* Photo container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] overflow-hidden rounded-2xl">
                <img
                  src={BRAND_INFO.founder.image}
                  alt={BRAND_INFO.founder.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent" />
              </div>

              {/* Founder name card */}
              <div className="absolute -bottom-5 -left-5 bg-white border border-brand-border rounded-xl px-5 py-3.5 shadow-card-elevated">
                <div className="font-semibold text-brand-navy text-sm">{BRAND_INFO.founder.name}</div>
                <div className="text-xs text-brand-muted mt-0.5">{BRAND_INFO.founder.title}</div>
              </div>

              {/* Credential badge */}
              <div className="absolute -top-4 -right-4 bg-brand-navy text-white text-xs font-semibold px-4 py-2 rounded-full shadow-card-elevated">
                Mentor · ICAI Surat
              </div>

              {/* Decorative accent */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-brand-gold/30 rounded-2xl" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 text-brand-muted">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
};

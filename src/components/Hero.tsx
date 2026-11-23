import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ThreeHeroSculpture } from './ThreeHeroSculpture';

interface HeroProps {
  onOpenContact: (mode?: string, serviceTitle?: string) => void;
  onOpenVideo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenVideo }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cta1Ref = useRef<HTMLAnchorElement>(null);
  const cta2Ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Eyebrow entrance
      tl.fromTo(
        '.hero-eyebrow-pill',
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.1 }
      )
      // Line by line clip-path headline reveal
      .fromTo(
        '.hero-line-inner',
        { y: '120%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.14, duration: 1.1, ease: 'power3.out' },
        '-=0.5'
      )
      // Supporting paragraph
      .fromTo(
        '.hero-description-text',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      // CTA buttons
      .fromTo(
        '.hero-cta-action',
        { y: 25, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 0.8 },
        '-=0.5'
      )
      // Metric badges
      .fromTo(
        '.hero-metric-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7 },
        '-=0.4'
      )
      // 3D Sculpture entrance
      .fromTo(
        '.hero-3d-sculpture',
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: 'power2.out' },
        0.3
      );

      // Scroll indicator gentle pulse
      gsap.to('.hero-scroll-indicator', {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.4,
        ease: 'sine.inOut',
      });
    }, heroRef);

    // Magnetic effect on desktop buttons
    const applyMagnetic = (elem: HTMLElement | null) => {
      if (!elem || window.innerWidth < 1024) return;
      const onMove = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(elem, { x: x * 0.35, y: y * 0.35, duration: 0.3, ease: 'power2.out' });
      };
      const onLeave = () => {
        gsap.to(elem, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      };
      elem.addEventListener('mousemove', onMove);
      elem.addEventListener('mouseleave', onLeave);
      return () => {
        elem.removeEventListener('mousemove', onMove);
        elem.removeEventListener('mouseleave', onLeave);
      };
    };

    const cleanup1 = applyMagnetic(cta1Ref.current);
    const cleanup2 = applyMagnetic(cta2Ref.current);

    return () => {
      ctx.revert();
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-24 lg:pt-40 lg:pb-32 flex items-center bg-navy-gradient overflow-hidden grain-overlay"
    >
      {/* Cinematic Background Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-navy-800/35 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[550px] h-[550px] bg-vwTeal/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-vwOrange/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Editorial Typography & Magnetic CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Small Eyebrow Badge */}
            <div className="hero-eyebrow-pill inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-vwTeal/40 shadow-glow-teal text-xs font-montserrat font-bold tracking-[0.2em] uppercase text-vwTeal">
              <Sparkles className="w-3.5 h-3.5 text-vwYellow animate-spin-slow" />
              <span>WOMEN-LED PROFESSIONAL SERVICES</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-medium">SURAT | PUNE</span>
            </div>

            {/* Oversized Bold Headline with Line Clip-Path Reveals */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-6xl xl:text-7xl font-headline tracking-tight font-black uppercase text-white leading-[1.03]"
            >
              <div className="overflow-hidden py-0.5">
                <span className="hero-line-inner block text-gradient-silver">Empowering</span>
              </div>
              <div className="overflow-hidden py-0.5">
                <span className="hero-line-inner block text-vwTeal">Women.</span>
              </div>
              <div className="overflow-hidden py-0.5">
                <span className="hero-line-inner block text-gradient-silver">Elevating</span>
              </div>
              <div className="overflow-hidden py-0.5">
                <span className="hero-line-inner block text-gradient-gold">Businesses.</span>
              </div>
            </h1>

            {/* Supporting Description */}
            <p className="hero-description-text text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              A dynamic, women-led platform empowering qualified professionals and delivering exceptional outsourced solutions to businesses.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA */}
              <a
                ref={cta1Ref}
                href="#services"
                className="hero-cta-action w-full sm:w-auto px-8 py-4 rounded-full bg-vwYellow text-navy-950 font-montserrat font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-vwYellow-hover hover:shadow-glow-yellow transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <button
                ref={cta2Ref}
                onClick={() => onOpenContact('professional')}
                className="hero-cta-action w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white text-white font-montserrat font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-white hover:text-navy-950 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Join Our Network</span>
              </button>

              {/* Brand Video Modal Button */}
              {onOpenVideo && (
                <button
                  onClick={onOpenVideo}
                  className="hero-cta-action inline-flex items-center space-x-2 px-3.5 py-3 text-slate-300 hover:text-vwYellow text-xs font-montserrat font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-navy-850 border border-vwTeal/40 flex items-center justify-center text-vwTeal shadow-sm">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </span>
                  <span>Brand Story</span>
                </button>
              )}
            </div>

            {/* Metric Chips */}
            <div className="pt-6 border-t border-navy-800/80 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="hero-metric-item bg-navy-900/60 border border-white/5 rounded-2xl p-3 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-headline font-bold text-vwYellow">125+</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-slate-400 font-montserrat font-semibold">Years Acumen</div>
              </div>
              <div className="hero-metric-item bg-navy-900/60 border border-white/5 rounded-2xl p-3 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-headline font-bold text-vwTeal">CA / CS</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-slate-400 font-montserrat font-semibold">Certified Leads</div>
              </div>
              <div className="hero-metric-item bg-navy-900/60 border border-white/5 rounded-2xl p-3 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-headline font-bold text-white">Top 4</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-slate-400 font-montserrat font-semibold">Firm Vision</div>
              </div>
            </div>

          </div>

          {/* Right Side: Clean 3D Three.js Orbital Sculpture (5 Cols) */}
          <div className="hero-3d-sculpture lg:col-span-5 relative flex items-center justify-center">
            <ThreeHeroSculpture />
          </div>

        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="hero-scroll-indicator absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 pointer-events-none opacity-80">
        <span className="text-[10px] tracking-[0.25em] uppercase text-slate-400 font-bold">
          SCROLL TO DISCOVER
        </span>
        <ChevronDown className="w-4 h-4 text-vwTeal" />
      </div>
    </section>
  );
};

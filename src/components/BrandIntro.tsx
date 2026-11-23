import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, CheckCircle2, Building, HeartHandshake, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BrandIntroProps {
  onOpenContact: (mode?: string) => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        '.about-headline',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-headline',
            start: 'top 85%',
          }
        }
      );

      // Paragraphs stagger
      gsap.fromTo(
        '.about-paragraph',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-paragraphs-box',
            start: 'top 80%',
          }
        }
      );

      // Cards staggered entrance
      gsap.fromTo(
        '.about-feature-card',
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-feature-cards',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden border-t border-navy-850 scroll-mt-28">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-vwTeal/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-vwOrange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Eyebrow */}
        <div className="inline-flex items-center space-x-2 text-vwTeal text-xs font-montserrat font-bold tracking-[0.2em] uppercase mb-4">
          <span className="w-8 h-[2px] bg-vwTeal" />
          <span>BRAND PHILOSOPHY</span>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Headline & Editorial Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="about-headline text-3xl sm:text-5xl font-montserrat font-extrabold uppercase tracking-tight text-white leading-[1.15]">
              Where Women Professionals <br />
              <span className="text-gradient-gold">Build the Future Together.</span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-vwTeal via-vwYellow to-vwOrange rounded-full" />

            <div className="about-paragraphs-box space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
              <p className="about-paragraph">
                At <strong className="text-white font-semibold">Visionary Women</strong>, we understand the critical importance of empowering qualified female professionals to manage both their careers and personal responsibilities.
              </p>
              <p className="about-paragraph">
                While there is an increasing demand for women's involvement in professional services, we also recognize the obstacles women face in attaining the work-life harmony they seek.
              </p>
              <p className="about-paragraph text-vwTeal font-medium">
                We connect talented women professionals with meaningful opportunities while delivering exceptional, institutional-grade outsourced solutions to businesses.
              </p>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenContact('general')}
                className="inline-flex items-center space-x-2 text-xs font-montserrat font-bold text-vwYellow hover:text-white uppercase tracking-wider group transition-colors cursor-pointer"
              >
                <span>Read our manifesto & approach</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Two Strategic Value Pillars */}
          <div className="about-feature-cards lg:col-span-6 space-y-6">
            
            {/* Card 1: For Businesses */}
            <div className="about-feature-card bg-glass-card p-6 sm:p-8 rounded-3xl border border-navy-800 hover:border-vwTeal/40 transition-all duration-300 relative group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-vwTeal/15 border border-vwTeal/30 text-vwTeal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Building className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="inline-block text-[11px] font-montserrat font-bold uppercase tracking-widest text-vwTeal">
                    FOR ENTERPRISES & CA FIRMS
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-white tracking-wide">
                    Institutional Outsourcing Excellence
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    Gain scalable access to certified CAs, CSs, and senior accountants. Eliminate recruitment friction, reduce overhead, and safeguard compliance with turnkey accounting, tax, and virtual CFO solutions.
                  </p>
                  <ul className="pt-2 space-y-1.5 text-xs text-slate-300 font-sans">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-vwTeal shrink-0" />
                      <span>Strict confidentiality backed by corporate NDAs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-vwTeal shrink-0" />
                      <span>125+ years combined senior leadership oversight</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: For Women Professionals */}
            <div className="about-feature-card bg-glass-card p-6 sm:p-8 rounded-3xl border border-navy-800 hover:border-vwYellow/40 transition-all duration-300 relative group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-vwYellow/15 border border-vwYellow/30 text-vwYellow flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="inline-block text-[11px] font-montserrat font-bold uppercase tracking-widest text-vwYellow">
                    FOR WOMEN CAs, CSs & CMAs
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-white tracking-wide">
                    Uncompromised Career Flexibility
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    Never choose between personal obligations and professional ambition. Unlock remote-first, high-impact projects that leverage your analytical mastery on your own schedule with competitive compensation.
                  </p>
                  <ul className="pt-2 space-y-1.5 text-xs text-slate-300 font-sans">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-vwYellow shrink-0" />
                      <span>Continuous upskilling, mentorship & peer community</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-vwYellow shrink-0" />
                      <span>Empowering flexible return-to-work architecture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

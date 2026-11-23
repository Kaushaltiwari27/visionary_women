import React, { useEffect, useRef } from 'react';
import { Target, Flower2, Globe2, Award, Sparkles, CheckCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const VisionMission: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.vision-banner',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.vision-banner',
            start: 'top 85%',
          }
        }
      );

      gsap.fromTo(
        '.vision-card-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.25,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.vision-cards-grid',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="vision" className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-40 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-vwTeal/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-950/80 border border-vwTeal/30 text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-vwTeal">
            <Sparkles className="w-3.5 h-3.5 text-vwYellow" />
            <span>FOUNDATIONAL PURPOSE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold uppercase tracking-tight text-white">
            VISION & <span className="text-vwTeal">MISSION</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Redefining the future of professional services through an inclusive, remote-first ecosystem connecting India’s finest financial minds with global enterprises.
          </p>
        </div>

        {/* Big 4 CA Firms Benchmark Banner */}
        <div className="vision-banner mb-12 bg-gradient-to-r from-navy-950 via-navy-850 to-navy-950 border border-vwYellow/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-vwYellow/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4 text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-vwYellow/20 border border-vwYellow/40 text-vwYellow flex items-center justify-center shrink-0">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-vwYellow block mb-1">
                  NATIONAL ASPIRATION & AMBITION
                </span>
                <h3 className="text-lg sm:text-2xl font-montserrat font-extrabold text-white tracking-normal">
                  "Recognized as One of the Top 4 CA Firms in India"
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-sans">
                  A dynamic, global, women-led institution demonstrating that quality, rigor, and empathy can redefine industry standards.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <span className="px-4 py-2 rounded-full bg-vwYellow text-navy-950 text-xs font-montserrat font-bold uppercase tracking-wider inline-flex items-center space-x-1.5 shadow-glow-yellow">
                <span>Pan-India Vision</span>
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Mission & Vision */}
        <div className="vision-cards-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card (Target Icon) */}
          <div className="vision-card-item bg-glass-card rounded-3xl p-8 sm:p-10 border border-navy-800 hover:border-vwTeal/40 transition-all duration-300 flex flex-col justify-between relative group shadow-card-elevated">
            <div className="absolute top-6 right-6 text-7xl font-headline font-black text-white/5 select-none group-hover:text-vwTeal/10 transition-colors">
              01
            </div>

            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-vwTeal/20 border border-vwTeal/40 text-vwTeal flex items-center justify-center shadow-glow-teal group-hover:scale-105 transition-transform">
                <Target className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-vwTeal block mb-1">
                  CORE OBJECTIVE
                </span>
                <h3 className="text-2xl sm:text-3xl font-montserrat font-extrabold uppercase tracking-wide text-white">
                  Our Mission
                </h3>
              </div>

              <blockquote className="text-lg sm:text-xl text-slate-100 font-serif italic border-l-2 border-vwTeal pl-4 py-1 leading-relaxed">
                "To empower women professionals through this platform and deliver exceptional outsourced solutions to businesses globally through flexible, remote work opportunities."
              </blockquote>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                We bridge the gap between talented certified women professionals and progressive companies seeking rigorous, cost-effective accounting, compliance, and virtual CFO deliverables.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-800/80 flex items-center space-x-2 text-xs font-montserrat font-semibold text-vwTeal uppercase tracking-wider">
              <CheckCheck className="w-4 h-4" />
              <span>Global Client Delivery • Flexible Remote Architecture</span>
            </div>
          </div>

          {/* Vision Card (Lotus / Transformative Ecosystem Icon) */}
          <div className="vision-card-item bg-glass-card rounded-3xl p-8 sm:p-10 border border-navy-800 hover:border-vwOrange/40 transition-all duration-300 flex flex-col justify-between relative group shadow-card-elevated">
            <div className="absolute top-6 right-6 text-7xl font-headline font-black text-white/5 select-none group-hover:text-vwOrange/10 transition-colors">
              02
            </div>

            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-vwOrange/20 border border-vwOrange/40 text-vwOrange flex items-center justify-center group-hover:scale-105 transition-transform">
                <Flower2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-vwOrange block mb-1">
                  TRANSFORMATIVE FUTURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-montserrat font-extrabold uppercase tracking-wide text-white">
                  Our Vision
                </h3>
              </div>

              <blockquote className="text-lg sm:text-xl text-slate-100 font-serif italic border-l-2 border-vwOrange pl-4 py-1 leading-relaxed">
                "To create a transformative ecosystem that harnesses the unique skills, strengths, and untapped potential of women CAs, CSs, and CMAs."
              </blockquote>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                By fostering a remote-first approach, we create a win-win partnership between women professionals, CA firms, and industries—unlocking millions of underutilized woman-hours to drive mutual prosperity without sacrificing personal life.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-800/80 flex items-center space-x-2 text-xs font-montserrat font-semibold text-vwOrange uppercase tracking-wider">
              <Globe2 className="w-4 h-4" />
              <span>Unlocking Untapped Potential • Win-Win Partnerships</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

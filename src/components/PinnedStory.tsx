import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight, CheckCircle2, Shield, TrendingUp, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PinnedStoryProps {
  onOpenContact: (mode?: string) => void;
}

export const PinnedStory: React.FC<PinnedStoryProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: "01",
      eyebrow: "FOUNDATIONAL MASTERY",
      title: "Your Expertise.",
      color: "#47C8BF",
      description:
        "India's certified Chartered Accountants, Company Secretaries, and Cost Accountants carry world-class analytical caliber. With 125+ years of combined leadership experience, we turn technical qualifications into elite institutional outcomes.",
      metric: "125+ Years",
      metricLabel: "Leadership Acumen",
      icon: Shield
    },
    {
      num: "02",
      eyebrow: "UNCOMPROMISED FLEXIBILITY",
      title: "Your Opportunity.",
      color: "#FFDE59",
      description:
        "Talented women should never have to choose between personal commitments and career ambitions. We architect turnkey remote-first engagements connecting you with premier CA firms, venture startups, and commercial industries globally.",
      metric: "100% Remote",
      metricLabel: "Work-Life Harmony",
      icon: TrendingUp
    },
    {
      num: "03",
      eyebrow: "NATIONAL IMPACT",
      title: "Your Future.",
      color: "#FF8F00",
      description:
        "Our grand vision: building an institution recognized among the top 4 CA firms in India. Advancing qualified women into Virtual CFOs, Board Advisors, and influential leaders shaping the economic destiny of India Inc.",
      metric: "Top 4 Vision",
      metricLabel: "CA Firm Benchmark",
      icon: Users
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const cards = gsap.utils.toArray<HTMLElement>('.story-step-card');

    const ctx = gsap.context(() => {
      // Pinning timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      cards.forEach((card, i) => {
        if (i !== 0) {
          gsap.set(card, { autoAlpha: 0, y: 60, scale: 0.95 });
          tl.to(cards[i - 1], {
            autoAlpha: 0,
            y: -40,
            scale: 0.9,
            duration: 0.8,
            ease: 'power2.inOut'
          })
          .to(card, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out'
          }, '-=0.4');
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#010521] overflow-hidden border-t border-navy-850 flex items-center justify-center grain-overlay"
    >
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#01155B]/40 to-[#47C8BF]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
        
        {/* Section Pill */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-[#47C8BF]/30 text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-[#47C8BF]">
            <Sparkles className="w-3.5 h-3.5 text-vwYellow animate-spin-slow" />
            <span>THE TRIAD OF TRANSFORMATION</span>
          </div>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative min-h-[440px] sm:min-h-[460px] flex items-center justify-center">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className={`story-step-card absolute inset-0 max-w-4xl mx-auto bg-gradient-to-br from-navy-900/90 via-navy-950/95 to-navy-900/90 rounded-3xl p-8 sm:p-12 lg:p-14 border border-navy-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between backdrop-blur-xl ${
                  idx === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Header row */}
                <div className="flex items-center justify-between pb-6 border-b border-navy-800/80">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{
                        backgroundColor: `${step.color}15`,
                        color: step.color,
                        border: `1px solid ${step.color}40`
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span
                        className="text-xs font-montserrat font-bold uppercase tracking-widest block"
                        style={{ color: step.color }}
                      >
                        {step.eyebrow}
                      </span>
                      <span className="text-[10px] text-slate-400 font-sans tracking-wider">
                        TRANSFORMATION PILLAR {step.num} OF 03
                      </span>
                    </div>
                  </div>

                  <span className="text-4xl sm:text-6xl font-headline font-black text-white/10 select-none">
                    {step.num}
                  </span>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-6">
                  <div className="md:col-span-8 space-y-4">
                    <h3
                      className="text-3xl sm:text-5xl font-montserrat font-extrabold uppercase tracking-tight text-white leading-tight"
                    >
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlight Stat Pill */}
                  <div className="md:col-span-4 bg-navy-950/80 border border-navy-800 rounded-2xl p-6 text-center space-y-1">
                    <div
                      className="text-3xl sm:text-4xl font-headline font-black tracking-tight"
                      style={{ color: step.color }}
                    >
                      {step.metric}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-slate-400 font-montserrat font-semibold">
                      {step.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-vwTeal" />
                    <span>Scroll to explore the complete journey</span>
                  </div>

                  <button
                    onClick={() => onOpenContact(idx === 0 ? 'business' : 'professional')}
                    className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-850 hover:bg-vwYellow hover:text-navy-950 text-white transition-all flex items-center space-x-2 border border-navy-700"
                  >
                    <span>{idx === 0 ? 'Explore Firm Capabilities' : 'Join Our Network'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

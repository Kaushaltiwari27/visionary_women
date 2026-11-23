import React from 'react';
import { Globe, Sprout, Landmark, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { FUTURE_PLAN_DATA } from '../data/content';

export const FuturePlan: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Globe className="w-7 h-7" />;
      case '02':
        return <Sprout className="w-7 h-7" />;
      case '03':
        return <Landmark className="w-7 h-7" />;
      case '04':
        return <Crown className="w-7 h-7" />;
      default:
        return <Sparkles className="w-7 h-7" />;
    }
  };

  return (
    <section id="future" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden border-t border-navy-850">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-vwTeal/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-vwYellow/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-vwYellow/30 text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-vwYellow">
            <Sparkles className="w-3.5 h-3.5 text-vwYellow" />
            <span>HORIZON ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold uppercase tracking-tight text-white">
            FUTURE <span className="text-gradient-gold">PLAN</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Our strategic four-phase evolution to transform female professional participation in accounting and business leadership across India and internationally.
          </p>
        </div>

        {/* 4-Step Progressive Timeline */}
        <div className="relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-vwTeal via-vwYellow to-vwOrange -translate-y-12 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {FUTURE_PLAN_DATA.map((plan, idx) => (
              <div
                key={plan.step}
                className="bg-glass-card rounded-3xl p-7 sm:p-8 border border-navy-800 hover:border-vwTeal/50 transition-all duration-300 flex flex-col justify-between group shadow-card-elevated hover:-translate-y-2"
              >
                <div className="space-y-5">
                  
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-850 to-navy-900 border border-vwTeal/40 text-vwTeal group-hover:text-vwYellow group-hover:border-vwYellow flex items-center justify-center transition-all duration-300 shadow-glow-teal">
                      {getStepIcon(plan.step)}
                    </div>
                    <span className="text-2xl font-headline font-black text-vwTeal/40 group-hover:text-vwYellow transition-colors">
                      {plan.step}
                    </span>
                  </div>

                  {/* Tag */}
                  <span className="inline-block text-[10px] font-montserrat font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-navy-950 border border-slate-700 text-slate-300">
                    {plan.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-montserrat font-bold text-white group-hover:text-vwYellow transition-colors leading-snug">
                    {plan.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {plan.description}
                  </p>

                </div>

                {/* Progress dot indicator */}
                <div className="mt-6 pt-4 border-t border-navy-800/80 flex items-center space-x-2 text-xs font-semibold text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-vwTeal group-hover:bg-vwYellow transition-colors" />
                  <span className="uppercase tracking-wider text-[11px] font-montserrat">Phase {idx + 1} Target</span>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* ICAI / ICSI / ICWAI Alliance Spotlight Bar */}
        <div className="mt-14 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-vwTeal/30 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-2xl">
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            <strong className="text-vwYellow">Institutional Collaboration:</strong> We are actively building dialogue with members of the <strong className="text-white">Institute of Chartered Accountants of India (ICAI)</strong>, <strong className="text-white">Institute of Company Secretaries of India (ICSI)</strong>, and <strong className="text-white">Institute of Cost Accountants of India (ICMAI/ICWA)</strong> to pioneer returnee fellowship pathways for certified women professionals.
          </p>
        </div>

      </div>
    </section>
  );
};

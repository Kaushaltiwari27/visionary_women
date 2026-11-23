import React from 'react';
import { Handshake, GraduationCap, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';
import { GOALS_DATA } from '../data/content';

export const GoalsSection: React.FC = () => {
  const getGoalIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Handshake className="w-8 h-8" />;
      case '02':
        return <GraduationCap className="w-8 h-8" />;
      case '03':
        return <HeartHandshake className="w-8 h-8" />;
      default:
        return <Sparkles className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden border-t border-navy-850">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-vwTeal/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-950 border border-vwTeal/30 text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-vwTeal">
            <Sparkles className="w-3.5 h-3.5 text-vwYellow" />
            <span>STRATEGIC MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold uppercase tracking-tight text-white">
            OUR <span className="text-vwTeal">GOALS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Constructing a sustainable, institutional infrastructure that bridges corporate industry needs with women's professional triumph.
          </p>
        </div>

        {/* 3 Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GOALS_DATA.map((goal) => (
            <div
              key={goal.number}
              className="bg-glass-card rounded-3xl p-8 sm:p-9 border border-navy-800 hover:border-vwTeal/40 transition-all duration-300 flex flex-col justify-between group shadow-card-elevated hover:-translate-y-1 relative"
            >
              <div className="space-y-6">
                
                {/* Number Watermark & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-vwTeal/15 border border-vwTeal/30 text-vwTeal flex items-center justify-center group-hover:scale-110 group-hover:bg-vwTeal group-hover:text-navy-950 transition-all duration-300">
                    {getGoalIcon(goal.number)}
                  </div>
                  <span className="text-5xl font-headline font-black text-white/10 group-hover:text-vwTeal/20 transition-colors">
                    {goal.number}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <span className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-vwTeal block mb-1">
                    GOAL {goal.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-white group-hover:text-vwYellow transition-colors leading-snug">
                    {goal.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {goal.description}
                </p>

              </div>

              {/* Highlight footer */}
              <div className="mt-8 pt-5 border-t border-navy-800/80">
                <div className="text-xs font-montserrat font-semibold text-vwYellow leading-relaxed">
                  ★ {goal.highlight}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

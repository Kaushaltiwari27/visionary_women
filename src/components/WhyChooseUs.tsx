import React from 'react';
import { 
  Users, 
  MapPin, 
  Award, 
  UserCheck, 
  Compass, 
  ShieldCheck, 
  Lightbulb, 
  FileCheck2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BENEFITS_DATA, BenefitItem } from '../data/content';

interface WhyChooseUsProps {
  onOpenContact: (mode?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenContact }) => {
  const getBenefitIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6" />;
      case 'Award':
        return <Award className="w-6 h-6" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden border-t border-navy-850">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-950/60 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-vwTeal/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-950 border border-vwTeal/30 text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-vwTeal">
            <Sparkles className="w-3.5 h-3.5 text-vwYellow" />
            <span>INSTITUTIONAL DIFFERENTIATORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold uppercase tracking-tight text-white leading-tight">
            WHY <span className="text-gradient-gold">VISIONARY WOMEN?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Combining high-level Chartered Accountant precision with modern agility, proactive empathy, and strict corporate governance.
          </p>
        </div>

        {/* 8 Features Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS_DATA.map((benefit: BenefitItem, idx: number) => (
            <div
              key={benefit.id}
              className="bg-glass-card rounded-2xl p-6 sm:p-7 border border-navy-800 hover:border-vwTeal/50 transition-all duration-300 flex flex-col justify-between group shadow-card-elevated hover:-translate-y-1"
            >
              <div className="space-y-4">
                
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-vwTeal/15 border border-vwTeal/30 text-vwTeal flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-vwTeal group-hover:text-navy-950">
                    {getBenefitIcon(benefit.iconName)}
                  </div>
                  {benefit.badge && (
                    <span className="text-[10px] font-montserrat font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-navy-950 border border-vwYellow/40 text-vwYellow">
                      {benefit.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-montserrat font-bold text-white group-hover:text-vwYellow transition-colors leading-snug">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {benefit.description}
                </p>

              </div>

              {/* Number watermark */}
              <div className="mt-4 pt-3 border-t border-navy-800/80 flex justify-between items-center text-[11px] font-montserrat font-bold text-slate-400 group-hover:text-vwTeal transition-colors">
                <span>BENEFIT 0{idx + 1}</span>
                <span className="text-vwTeal opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
              </div>

            </div>
          ))}
        </div>

        {/* Institutional Trust Banner below grid */}
        <div className="mt-14 bg-navy-950/80 rounded-2xl p-6 sm:p-8 border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-montserrat font-bold text-white tracking-wide">
              Strict Non-Disclosure & Data Security Standard
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Every client engagement is guarded by ironclad confidentiality agreements, SOC/ISO-aligned protocols, and dedicated project isolation.
            </p>
          </div>
          <button
            onClick={() => onOpenContact('business')}
            className="shrink-0 px-6 py-3 rounded-full bg-vwYellow text-navy-950 font-montserrat font-bold uppercase tracking-wider text-xs hover:bg-vwYellow-hover hover:shadow-glow-yellow transition-all flex items-center space-x-2 cursor-pointer"
          >
            <span>Partner With Our Firm</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

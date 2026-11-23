import React from 'react';
import { Quote, Sparkles, Award, BookOpen, Users, Compass, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const FounderPerspective: React.FC = () => {
  const { founder } = BRAND_INFO;

  return (
    <section id="founder" className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden border-t border-navy-850 scroll-mt-28">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-vwTeal/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-vwYellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-950 border border-vwTeal/30 text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-vwTeal">
            <Sparkles className="w-3.5 h-3.5 text-vwYellow" />
            <span>LEADERSHIP & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold uppercase tracking-tight text-white">
            FOUNDER’S <span className="text-gradient-gold">PERSPECTIVE</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans">
            Guiding Visionary Women with professional rigor, empathetic mentorship, and unwavering dedication.
          </p>
        </div>

        {/* Editorial Split Composition */}
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border border-navy-800 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Founder Photo in High-End Circular Frame */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                
                {/* Glow ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-vwTeal via-vwYellow to-vwOrange opacity-70 blur-lg group-hover:opacity-100 transition-opacity" />
                
                {/* Portrait Container */}
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 aspect-square rounded-full p-2 bg-navy-950 border-2 border-vwTeal/40 overflow-hidden shadow-2xl">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top rounded-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Badge Tag */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-vwYellow text-navy-950 px-4 py-1.5 rounded-full font-montserrat font-bold uppercase text-xs tracking-wider shadow-lg whitespace-nowrap">
                  Chartered Accountant
                </div>

              </div>

              {/* Founder Details */}
              <div className="mt-8 space-y-1">
                <h3 className="text-2xl sm:text-3xl font-montserrat font-extrabold uppercase text-white tracking-wide">
                  {founder.name}
                </h3>
                <p className="text-xs font-montserrat font-bold uppercase tracking-widest text-vwTeal">
                  Founder & Chartered Accountant
                </p>
                <p className="text-xs text-slate-400 font-medium pt-1 font-sans">
                  Surat & Pune • Pan-India Practice
                </p>
              </div>

              {/* Verified Credentials Pills */}
              <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-sm">
                <span className="text-[11px] font-montserrat font-semibold px-3 py-1 rounded-full bg-navy-900 border border-slate-700 text-slate-300">
                  Mentor at ICAI Surat
                </span>
                <span className="text-[11px] font-montserrat font-semibold px-3 py-1 rounded-full bg-navy-900 border border-slate-700 text-slate-300">
                  Author on Tax Guru
                </span>
                <span className="text-[11px] font-montserrat font-semibold px-3 py-1 rounded-full bg-navy-900 border border-slate-700 text-slate-300">
                  CA & CS Studies
                </span>
              </div>
            </div>

            {/* Right Column: Quotes & Editorial Vision */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Oversized Quote Mark */}
              <div className="text-vwYellow opacity-80">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              {/* Main Personal Journey Quote */}
              <blockquote className="text-lg sm:text-2xl font-serif italic text-slate-100 leading-relaxed -mt-3">
                "{founder.quote}"
              </blockquote>

              <div className="w-20 h-1 bg-gradient-to-r from-vwTeal to-vwYellow rounded-full" />

              {/* Visionary Mission Quote */}
              <div className="bg-navy-950/80 rounded-2xl p-6 border border-navy-800 space-y-3">
                <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-vwTeal flex items-center space-x-1.5">
                  <Compass className="w-4 h-4" />
                  <span>The Grand Vision for India</span>
                </span>
                <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
                  "A vision of a dynamic, global, women-led platform that will be recognized as one of the top 4 CA firms in India—a platform where qualified women professionals can access equal opportunities to work with top-tier CA firms and industries, while having the flexibility to balance their personal lives and professional responsibilities effectively by joining hands with each other."
                </p>
              </div>

              {/* Key Leadership Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {founder.bioDetails.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-vwTeal shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

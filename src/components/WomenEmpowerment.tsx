import React from 'react';
import { Sparkles, HeartHandshake, CheckCircle2, ArrowRight, Star, ShieldCheck, Clock, Users } from 'lucide-react';

interface WomenEmpowermentProps {
  onOpenContact: (mode?: string) => void;
}

export const WomenEmpowerment: React.FC<WomenEmpowermentProps> = ({ onOpenContact }) => {
  return (
    <section id="empowerment" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden border-t border-navy-850">
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-vwYellow/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-vwTeal/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Emotionally Powerful Narrative */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-vwYellow/40 text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-vwYellow shadow-glow-yellow">
              <Sparkles className="w-3.5 h-3.5 text-vwYellow" />
              <span>COMMUNITY & EMPOWERMENT MANIFESTO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-montserrat font-black uppercase tracking-tight text-white leading-[1.1]">
              Your Expertise Deserves <br />
              <span className="text-gradient-gold">A Place to Shine.</span>
            </h2>

            <div className="w-24 h-1.5 bg-gradient-to-r from-vwYellow via-vwTeal to-vwOrange rounded-full mx-auto lg:mx-0" />

            <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              <p className="font-serif italic text-xl text-white">
                "We believe talented women professionals should never have to choose between personal responsibilities and professional ambitions."
              </p>
              <p>
                Visionary Women creates opportunities for qualified women professionals to work flexibly, grow professionally, and contribute their expertise to businesses.
              </p>
              <p className="text-slate-300 text-sm sm:text-base">
                Whether you took a career sabbatical, are managing childcare or eldercare, or simply thrive in a modern remote-first ecosystem, your qualification is invaluable. We provide the platform, the legal protection, the prestige, and the community.
              </p>
            </div>

            {/* 4 Pillars of Support */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="bg-navy-900/80 p-4 rounded-2xl border border-navy-800 flex items-start space-x-3">
                <Clock className="w-5 h-5 text-vwYellow shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-montserrat font-bold text-white tracking-wide">Remote-First Flexibility</h4>
                  <p className="text-xs text-slate-400 mt-0.5 font-sans leading-relaxed">Control your hours while delivering high-impact corporate accounting and tax solutions.</p>
                </div>
              </div>

              <div className="bg-navy-900/80 p-4 rounded-2xl border border-navy-800 flex items-start space-x-3">
                <Star className="w-5 h-5 text-vwTeal shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-montserrat font-bold text-white tracking-wide">Direct Firm Recognition</h4>
                  <p className="text-xs text-slate-400 mt-0.5 font-sans leading-relaxed">Fair compensation and transparent client representation with institutional dignity.</p>
                </div>
              </div>

              <div className="bg-navy-900/80 p-4 rounded-2xl border border-navy-800 flex items-start space-x-3">
                <Users className="w-5 h-5 text-vwTeal shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-montserrat font-bold text-white tracking-wide">Empowered Sisterhood</h4>
                  <p className="text-xs text-slate-400 mt-0.5 font-sans leading-relaxed">Continuous peer support, ICAI Surat chapter linkages, and technical masterclasses.</p>
                </div>
              </div>

              <div className="bg-navy-900/80 p-4 rounded-2xl border border-navy-800 flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-vwYellow shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-montserrat font-bold text-white tracking-wide">Zero Career Compromise</h4>
                  <p className="text-xs text-slate-400 mt-0.5 font-sans leading-relaxed">Maintain professional sharpness, certifications, and active corporate standing.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenContact('professional')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-vwYellow text-navy-950 font-montserrat font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-vwYellow-hover hover:shadow-glow-yellow transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Become a Visionary Woman</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#founder"
                className="text-xs font-montserrat font-semibold uppercase tracking-wider text-slate-300 hover:text-vwTeal transition-colors flex items-center space-x-1"
              >
                <span>Hear from Founder CA Crispee Morakhiya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glowing frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-vwTeal/20 via-vwYellow/20 to-vwOrange/20 blur-xl opacity-75" />

              {/* Main Presentation Card */}
              <div className="relative bg-gradient-to-b from-navy-900 to-navy-950 border border-vwYellow/30 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
                
                {/* Visual Emblem */}
                <div className="flex items-center justify-between border-b border-navy-800 pb-6">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/assets/vw-logo.png"
                      alt="Visionary Women"
                      className="w-12 h-12 rounded-full border border-vwTeal/40 shadow-glow-teal object-contain bg-navy-950 p-1"
                    />
                    <div>
                      <div className="font-montserrat font-extrabold uppercase text-white tracking-wider text-base sm:text-lg">
                        VISIONARY WOMEN
                      </div>
                      <div className="text-[10px] text-vwTeal uppercase tracking-[0.2em] font-montserrat font-bold">
                        Professional Network
                      </div>
                    </div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-vwTeal animate-pulse shadow-glow-teal" />
                </div>

                {/* Quote Highlight */}
                <div className="space-y-4">
                  <span className="text-4xl text-vwYellow font-serif select-none">“</span>
                  <p className="text-base sm:text-lg text-slate-100 font-serif italic -mt-4 leading-relaxed">
                    By joining hands with each other, we unlock underutilized woman-hours, giving qualified professionals the freedom to excel from any location.
                  </p>
                </div>

                {/* Real Community Conference Photos Mosaic from Drive */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="h-28 sm:h-32 rounded-xl overflow-hidden border border-navy-800 shadow-md group/img relative bg-navy-950">
                    <img
                      src="/assets/memories/IMG20250719105458.jpg"
                      alt="Visionary Women Summit"
                      className="w-full h-full object-cover object-center group-hover/img:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[10px] font-montserrat font-bold uppercase tracking-wider text-vwTeal">Summit</span>
                    </div>
                  </div>
                  <div className="h-28 sm:h-32 rounded-xl overflow-hidden border border-navy-800 shadow-md group/img relative bg-navy-950">
                    <img
                      src="/assets/memories/MONIKA___SWATI___1_.jpeg"
                      alt="Visionary Women Leads"
                      className="w-full h-full object-cover object-center group-hover/img:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[10px] font-montserrat font-bold uppercase tracking-wider text-vwYellow">Members</span>
                    </div>
                  </div>
                  <div className="h-28 sm:h-32 rounded-xl overflow-hidden border border-navy-800 shadow-md group/img relative bg-navy-950">
                    <img
                      src="/assets/memories/IMG20250719151818.jpg"
                      alt="Women Leadership Assembly"
                      className="w-full h-full object-cover object-center group-hover/img:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[10px] font-montserrat font-bold uppercase tracking-wider text-vwOrange">Panel</span>
                    </div>
                  </div>
                </div>

                {/* Community Metrics Card */}
                <div className="bg-navy-950/90 rounded-2xl p-5 border border-navy-800/80 space-y-3">
                  <div className="flex justify-between items-center text-xs font-montserrat font-bold uppercase tracking-wider text-slate-300">
                    <span>Talent Network Profile</span>
                    <span className="text-vwYellow">Qualified Only</span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300 font-sans">
                    <div className="flex items-center justify-between py-1 border-b border-navy-900">
                      <span>Chartered Accountants (CA)</span>
                      <span className="text-vwTeal font-bold">Active</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-navy-900">
                      <span>Company Secretaries (CS)</span>
                      <span className="text-vwTeal font-bold">Active</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span>Cost & Management Accountants (CMA)</span>
                      <span className="text-vwTeal font-bold">Active</span>
                    </div>
                  </div>
                </div>

                {/* Action Footnote */}
                <div className="text-center pt-2">
                  <span className="text-[11px] text-slate-400 font-medium">
                    100% remote-first • Pan-India opportunities • Flexible engagements
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

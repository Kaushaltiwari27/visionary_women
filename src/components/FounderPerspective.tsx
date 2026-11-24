import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRAND_INFO } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export const FounderPerspective: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { founder } = BRAND_INFO;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.founder-photo',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: '.founder-photo', start: 'top 85%' }
        }
      );
      gsap.fromTo(
        '.founder-text',
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0, duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: '.founder-text', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="founder"
      className="section-padding bg-white scroll-mt-20"
    >
      <div className="section-container">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-3">
          <span className="section-label">Our Leadership</span>
          <h2 className="section-heading">
            From the Founder
          </h2>
        </div>

        {/* Editorial split layout */}
        <div className="max-w-5xl mx-auto">
          <div className="card-base overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">

              {/* Photo Column */}
              <div className="founder-photo lg:col-span-2 bg-brand-bgAlt relative">
                <div className="relative h-72 lg:h-full min-h-[300px] overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-navy/80 to-transparent" />

                  {/* Name card overlaying photo */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="font-bold text-base">{founder.name}</div>
                    <div className="text-xs text-white/75 mt-0.5">{founder.title}</div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-brand-gold text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                        Chartered Accountant
                      </span>
                      <span className="bg-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                        ICAI Mentor
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="founder-text lg:col-span-3 p-7 sm:p-10 space-y-6">

                {/* Quote */}
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-brand-gold opacity-60" />
                  <blockquote className="text-brand-text text-base sm:text-lg leading-relaxed font-normal -mt-1">
                    "{founder.quote}"
                  </blockquote>
                </div>

                <div className="accent-line" />

                {/* Vision statement */}
                <div className="bg-brand-bgAlt rounded-xl p-5 border border-brand-border">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted mb-2">
                    Our Vision for India
                  </div>
                  <p className="text-sm text-brand-text leading-relaxed">
                    "{founder.visionQuote}"
                  </p>
                </div>

                {/* Credentials */}
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted mb-3">
                    Background & Credentials
                  </div>
                  {founder.bioDetails.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-sm text-brand-muted">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Location */}
                <div className="pt-4 border-t border-brand-border flex items-center space-x-4 text-xs text-brand-muted">
                  <span className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>Surat & Pune</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>Author on Tax Guru</span>
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

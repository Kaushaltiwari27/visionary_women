import React, { useEffect, useRef } from 'react';
import { Globe, Sprout, Landmark, Crown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FUTURE_PLAN_DATA } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const getStepIcon = (step: string, className: string = 'w-5 h-5') => {
  switch (step) {
    case '01': return <Globe className={className} />;
    case '02': return <Sprout className={className} />;
    case '03': return <Landmark className={className} />;
    case '04': return <Crown className={className} />;
    default: return <Globe className={className} />;
  }
};

export const FuturePlan: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.plan-step',
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.plan-steps', start: 'top 82%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="future"
      className="section-padding bg-brand-bgAlt scroll-mt-20"
    >
      <div className="section-container">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-3">
          <span className="section-label">Our Direction</span>
          <h2 className="section-heading">
            Where We Are Headed
          </h2>
          <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
            Our plans to grow our services, expand our professional network, and
            strengthen our institutional partnerships across India.
          </p>
        </div>

        {/* Steps */}
        <div className="plan-steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FUTURE_PLAN_DATA.map((plan, idx) => (
            <div
              key={plan.step}
              className="plan-step relative card-base p-6 space-y-4 hover:shadow-card-hover transition-all duration-300 group"
            >
              {/* Step number line */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-brand-navy text-white flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300 flex-shrink-0">
                  {getStepIcon(plan.step)}
                </div>
                <span className="text-xs font-semibold text-brand-muted uppercase tracking-widest">
                  Phase {idx + 1}
                </span>
              </div>

              {/* Tag */}
              <span className="inline-block text-xs font-medium text-brand-navy bg-brand-navy/8 border border-brand-navy/12 px-3 py-1 rounded-full">
                {plan.tag}
              </span>

              {/* Title */}
              <h3 className="text-sm font-bold text-brand-navy leading-snug">
                {plan.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-brand-muted leading-relaxed">
                {plan.description}
              </p>

              {/* Progress dot */}
              <div className="pt-3 border-t border-brand-border flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold" />
                <span className="text-[11px] text-brand-muted font-medium">Planned</span>
              </div>
            </div>
          ))}
        </div>

        {/* ICAI note */}
        <div className="mt-10 card-base p-6 max-w-3xl mx-auto text-center">
          <p className="text-sm text-brand-muted leading-relaxed">
            <strong className="text-brand-navy">Institutional Collaboration:</strong>{' '}
            We are building relationships with members of ICAI, ICSI, and ICMAI to
            create better pathways for qualified women returning to professional practice.
          </p>
        </div>

      </div>
    </section>
  );
};

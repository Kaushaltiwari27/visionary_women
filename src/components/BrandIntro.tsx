import React, { useEffect, useRef } from 'react';
import { ArrowRight, Building2, HeartHandshake, CheckCircle2 } from 'lucide-react';
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
      gsap.fromTo('.about-heading', { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.about-heading', start: 'top 85%' } });
      gsap.fromTo('.about-para', { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.18, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '.about-paras', start: 'top 82%' } });
      gsap.fromTo('.about-card', { y: 32, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.18, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.about-cards', start: 'top 82%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-brand-bgAlt scroll-mt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left: Narrative */}
          <div className="space-y-5 sm:space-y-6">
            <div>
              <span className="section-label">About Visionary Women</span>
              <h2 className="about-heading section-heading mt-2">
                Professional services, delivered with purpose.
              </h2>
            </div>
            <div className="accent-line" />
            <div className="about-paras space-y-4 text-brand-muted leading-relaxed text-sm sm:text-base">
              <p className="about-para">
                Visionary Women is a Surat-based professional services firm led by{' '}
                <strong className="text-brand-text font-semibold">CA Crispee Morakhiya</strong>.
                We provide accounting, taxation, compliance, and financial advisory services to businesses across India.
              </p>
              <p className="about-para">
                We also create flexible, meaningful work opportunities for qualified women professionals —
                helping them continue their careers in accounting, taxation, and corporate compliance on their own terms.
              </p>
              <p className="about-para">
                Our firm connects two important needs: businesses that require experienced professional support,
                and skilled women who want to work without compromising their personal responsibilities.
              </p>
            </div>
            <div className="about-para">
              <button onClick={() => onOpenContact('business')} className="btn-link">
                <span>Speak with our team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Two value cards */}
          <div className="about-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">

            {/* For Businesses */}
            <div className="about-card card-base card-hover p-5 sm:p-6 lg:p-7">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-navy/8 border border-brand-navy/15 text-brand-navy flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-2 min-w-0 flex-1">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">For Businesses</div>
                  <h3 className="text-sm sm:text-base font-semibold text-brand-navy">Reliable Professional Support</h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    Accounting, taxation, compliance, and financial advisory — handled by experienced professionals.
                  </p>
                  <ul className="pt-1 space-y-1.5">
                    {['Accounting & bookkeeping', 'Taxation & GST', 'Corporate compliance', 'Virtual CFO services'].map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-xs text-brand-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* For Women */}
            <div className="about-card card-base card-hover p-5 sm:p-6 lg:p-7">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-2 min-w-0 flex-1">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">For Women Professionals</div>
                  <h3 className="text-sm sm:text-base font-semibold text-brand-navy">Continue Your Career, On Your Terms</h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    Flexible work in accounting, taxation, and compliance for qualified women — CA, CS, CMA, and related professionals.
                  </p>
                  <ul className="pt-1 space-y-1.5">
                    {['Remote-first work', 'Flexible hours', 'Professional community', 'Mentorship & growth'].map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-xs text-brand-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
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

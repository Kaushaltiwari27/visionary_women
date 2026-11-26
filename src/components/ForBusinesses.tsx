import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ForBusinessesProps {
  onOpenContact: (mode?: string) => void;
}

const BUSINESS_SERVICES = [
  { label: 'Accounting & Bookkeeping', desc: 'Monthly accounts, ledger maintenance, payroll processing.' },
  { label: 'Taxation & GST', desc: 'Income tax, GST filing, TDS, and tax planning.' },
  { label: 'Corporate Compliance', desc: 'ROC filings, company secretarial, annual returns.' },
  { label: 'Auditing', desc: 'Statutory, internal, tax, and stock audits.' },
  { label: 'Financial Advisory', desc: 'Financial modelling, project finance, and Virtual CFO services.' },
  { label: 'Legal & Regulatory', desc: 'RERA, FEMA, IEC, agreements, and trademark filings.' },
];

export const ForBusinesses: React.FC<ForBusinessesProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.biz-heading', { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.biz-heading', start: 'top 85%' } });
      gsap.fromTo('.biz-service', { x: -20, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: '.biz-services', start: 'top 82%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="for-businesses" className="section-padding bg-white scroll-mt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left: Text */}
          <div className="space-y-5 sm:space-y-6">
            <div>
              <span className="section-label">For Businesses</span>
              <h2 className="biz-heading section-heading mt-2">
                Reliable professional support for your business.
              </h2>
            </div>
            <div className="accent-line" />
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              We help businesses manage accounting, taxation, compliance, and financial
              reporting through experienced professionals. Whether you are a startup,
              an SME, or an established enterprise, we provide consistent, reliable
              support that keeps your business compliant and financially sound.
            </p>
            <button
              onClick={() => onOpenContact('business')}
              className="btn-gold flex items-center justify-center sm:justify-start space-x-2 w-full sm:w-auto"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            {/* Trust signals */}
            <div className="pt-3 border-t border-brand-border flex flex-wrap gap-x-4 gap-y-2">
              {['CA & CS qualified team', 'Confidential & secure', 'Surat & Pune based', 'Remote delivery available'].map((item) => (
                <div key={item} className="flex items-center space-x-1.5 text-xs text-brand-muted">
                  <span className="w-1 h-1 rounded-full bg-brand-gold flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Services list card */}
          <div>
            <div className="card-base p-5 sm:p-6 lg:p-8">
              <div className="flex items-center space-x-2 mb-5 sm:mb-6">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-navy flex-shrink-0" />
                <span className="text-sm font-semibold text-brand-navy">Services for Businesses</span>
              </div>
              <div className="biz-services space-y-2 sm:space-y-3">
                {BUSINESS_SERVICES.map((service, idx) => (
                  <div key={idx} className="biz-service flex items-start space-x-3 p-3 sm:p-3.5 rounded-lg hover:bg-brand-bgAlt transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-brand-navy">{service.label}</div>
                      <div className="text-xs text-brand-muted mt-0.5 leading-relaxed">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-brand-border">
                <button
                  onClick={() => onOpenContact('business')}
                  className="w-full btn-gold flex items-center justify-center space-x-2"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

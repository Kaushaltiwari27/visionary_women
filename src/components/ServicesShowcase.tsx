import React, { useState, useRef, useEffect } from 'react';
import {
  Calculator,
  Building2,
  Scale,
  Briefcase,
  Gavel,
  Megaphone,
  ArrowRight,
  CheckCircle,
  X,
  ChevronRight,
  Send
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES_DATA, ServiceItem } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

interface ServicesShowcaseProps {
  onOpenContact: (mode?: string, serviceTitle?: string) => void;
}

const getServiceIcon = (name: string, className: string = 'w-5 h-5') => {
  switch (name) {
    case 'Calculator': return <Calculator className={className} />;
    case 'Building2': return <Building2 className={className} />;
    case 'Scale': return <Scale className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Gavel': return <Gavel className={className} />;
    case 'Megaphone': return <Megaphone className={className} />;
    default: return <Briefcase className={className} />;
  }
};

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.services-grid', start: 'top 82%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-padding bg-brand-bgAlt scroll-mt-20"
    >
      <div className="section-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl space-y-3">
            <span className="section-label">What We Do</span>
            <h2 className="section-heading">
              Our Services
            </h2>
            <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
              We help businesses manage their accounting, taxation, compliance, and advisory needs
              through experienced professionals.
            </p>
          </div>
          <button
            onClick={() => onOpenContact('business')}
            className="btn-gold flex items-center space-x-2 flex-shrink-0 self-start md:self-auto"
          >
            <span>Discuss Your Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="service-card card-base p-6 flex flex-col justify-between group hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Icon + Number */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-brand-navy/8 border border-brand-navy/12 text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-medium text-brand-border">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-base font-semibold text-brand-navy leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Short description */}
                <p className="text-sm text-brand-muted leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key features */}
                <div className="space-y-1.5 pt-1">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2 text-xs text-brand-muted">
                      <ChevronRight className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-brand-muted pl-5 italic">
                      +{service.features.length - 3} more capabilities
                    </div>
                  )}
                </div>
              </div>

              {/* Footer actions */}
              <div className="mt-5 pt-4 border-t border-brand-border flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-brand-navy hover:text-brand-gold transition-colors flex items-center space-x-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenContact('business', service.title)}
                  className="p-2 rounded-lg bg-brand-bgAlt hover:bg-brand-gold hover:text-white text-brand-muted transition-all duration-200"
                  title="Enquire about this service"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-text/50 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedService(null); }}
        >
          <div className="bg-white border border-brand-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-card-elevated relative">

            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-brand-border px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-brand-navy text-white flex items-center justify-center flex-shrink-0">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted block">
                    {selectedService.category}
                  </span>
                  <h3 className="text-base font-bold text-brand-navy leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-lg hover:bg-brand-bgAlt text-brand-muted hover:text-brand-text transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <p className="text-brand-muted leading-relaxed text-sm">
                {selectedService.shortDesc}
              </p>

              {/* Scope */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-brand-text">
                  Scope of Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 p-3 bg-brand-bgAlt rounded-lg text-sm text-brand-muted">
                      <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-brand-text">
                  What We Deliver
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 p-3 bg-brand-bgAlt rounded-lg text-sm text-brand-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-navy flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-brand-muted">
                  Interested in this service?
                </span>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenContact('business', title);
                  }}
                  className="btn-gold flex items-center space-x-2"
                >
                  <span>Enquire About This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

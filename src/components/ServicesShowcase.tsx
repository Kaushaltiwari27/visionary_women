import React, { useState, useRef } from 'react';
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
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Send
} from 'lucide-react';
import gsap from 'gsap';
import { SERVICES_DATA, ServiceItem } from '../data/content';

interface ServicesShowcaseProps {
  onOpenContact: (mode?: string, serviceTitle?: string) => void;
}

// 3D Interactive Tilt Card Component
interface ServiceCardProps {
  service: ServiceItem;
  idx: number;
  onSelect: (srv: ServiceItem) => void;
  onInquire: (title: string) => void;
  getIcon: (name: string, className?: string) => React.ReactNode;
}

const TiltServiceCard: React.FC<ServiceCardProps> = ({ service, idx, onSelect, onInquire, getIcon }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    gsap.to(cardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000,
    });

    if (glareRef.current) {
      gsap.to(glareRef.current, {
        opacity: 0.18,
        x: x - 100,
        y: y - 100,
        duration: 0.2,
      });
    }

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        z: 30,
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
    if (glareRef.current) {
      gsap.to(glareRef.current, {
        opacity: 0,
        duration: 0.4,
      });
    }
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        z: 0,
        duration: 0.4,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
      className="interactive-card relative bg-glass-card rounded-2xl p-7 sm:p-8 border border-navy-800/80 hover:border-vwTeal/50 transition-colors duration-300 flex flex-col justify-between group shadow-card-elevated overflow-hidden"
    >
      {/* Glare spotlight following mouse */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute w-52 h-52 rounded-full bg-gradient-to-r from-vwTeal via-white to-vwYellow blur-2xl opacity-0 transition-opacity"
      />

      <div ref={contentRef} style={{ transformStyle: 'preserve-3d' }} className="space-y-5 relative z-10">
        
        {/* Header: Icon & Category Tag */}
        <div className="flex items-center justify-between">
          <div
            className="w-13 h-13 p-3.5 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm"
            style={{
              backgroundColor: `${service.accentColor}18`,
              color: service.accentColor,
              border: `1px solid ${service.accentColor}40`
            }}
          >
            {getIcon(service.iconName, "w-6 h-6")}
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-vwTeal transition-colors">
            0{idx + 1}
          </span>
        </div>

        {/* Service Title */}
        <div>
          <span className="text-[11px] font-sans font-bold text-vwTeal uppercase tracking-wider block mb-1">
            {service.category}
          </span>
          <h3 className="text-lg sm:text-xl font-montserrat font-bold text-white group-hover:text-vwYellow transition-colors leading-snug">
            {service.title}
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
          {service.shortDesc}
        </p>

        {/* Bullet Highlights */}
        <div className="pt-2 border-t border-navy-800/80 space-y-2">
          {service.features.slice(0, 3).map((feat, fIdx) => (
            <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-200">
              <ChevronRight className="w-3.5 h-3.5 text-vwTeal shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
          {service.features.length > 3 && (
            <div className="text-[11px] font-medium text-slate-400 pl-5 italic">
              + {service.features.length - 3} more regulatory capabilities
            </div>
          )}
        </div>

      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-5 border-t border-navy-800/80 flex items-center justify-between relative z-10">
        <button
          onClick={() => onSelect(service)}
          className="text-xs font-bold uppercase tracking-wider text-vwTeal group-hover:text-vwYellow transition-colors flex items-center space-x-1 cursor-pointer"
        >
          <span>Explore Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => onInquire(service.title)}
          className="p-2 rounded-full bg-navy-850 hover:bg-vwYellow hover:text-navy-950 text-slate-300 transition-colors cursor-pointer"
          title="Inquire about this service"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const getServiceIcon = (name: string, className: string = "w-6 h-6") => {
    switch (name) {
      case 'Calculator':
        return <Calculator className={className} />;
      case 'Building2':
        return <Building2 className={className} />;
      case 'Scale':
        return <Scale className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'Gavel':
        return <Gavel className={className} />;
      case 'Megaphone':
        return <Megaphone className={className} />;
      default:
        return <Calculator className={className} />;
    }
  };

  const filteredServices = activeTab === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.id === activeTab);

  return (
    <section id="services" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden border-t border-navy-850">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-vwTeal/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-vwYellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-vwTeal text-xs font-montserrat font-bold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-vwYellow" />
              <span>OUTSOURCING & CONSULTING CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold uppercase tracking-tight text-white leading-tight">
              Institutional <span className="text-gradient-gold">Services Showcase</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              From day-to-day statutory operations to high-stakes direct tax litigation and board-level Virtual CFO advisory, our women-led teams deliver unmatched rigor with 3D interactive clarity.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenContact('business')}
              className="px-6 py-3 rounded-full bg-navy-850 border border-vwTeal/40 text-vwTeal hover:bg-vwTeal hover:text-navy-950 font-montserrat font-bold uppercase tracking-wider text-xs transition-all duration-300 flex items-center space-x-2 cursor-pointer shadow-sm hover:shadow-glow-teal"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-montserrat font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-vwTeal text-navy-950 shadow-glow-teal'
                : 'bg-navy-900/80 text-slate-300 hover:text-white border border-navy-800'
            }`}
          >
            All Services (6)
          </button>
          {SERVICES_DATA.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setActiveTab(srv.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === srv.id
                  ? 'bg-vwTeal text-navy-950 shadow-glow-teal'
                  : 'bg-navy-900/80 text-slate-300 hover:text-white border border-navy-800'
              }`}
            >
              {srv.category}
            </button>
          ))}
        </div>

        {/* Services Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => (
            <TiltServiceCard
              key={service.id}
              service={service}
              idx={idx}
              onSelect={setSelectedService}
              onInquire={(title) => onOpenContact('business', title)}
              getIcon={getServiceIcon}
            />
          ))}
        </div>

      </div>

      {/* Expanded Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-navy-900 border border-vwTeal/30 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              
              <div className="flex items-center space-x-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${selectedService.accentColor}20`,
                    color: selectedService.accentColor,
                    border: `1px solid ${selectedService.accentColor}50`
                  }}
                >
                  {getServiceIcon(selectedService.iconName, "w-7 h-7")}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-vwTeal block">
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl font-headline font-bold uppercase text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                {selectedService.shortDesc}
              </p>

              {/* Complete Scope of Work */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-vwYellow flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-vwYellow" />
                  <span>Comprehensive Scope & Filings:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 bg-navy-950/60 p-2.5 rounded-xl border border-navy-800 text-xs text-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-vwTeal shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Institutional Deliverables */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-vwTeal flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-vwTeal" />
                  <span>Key Deliverables & Standards:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 bg-navy-950/60 p-2.5 rounded-xl border border-navy-800 text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-vwTeal shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA inside Modal */}
              <div className="pt-4 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Ready to deploy dedicated women-led specialists for your firm?
                </div>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenContact('business', title);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-vwYellow text-navy-950 font-bold uppercase tracking-wider text-xs hover:bg-vwYellow-hover transition-all flex items-center justify-center space-x-2 shadow-glow-yellow cursor-pointer"
                >
                  <span>Engage This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

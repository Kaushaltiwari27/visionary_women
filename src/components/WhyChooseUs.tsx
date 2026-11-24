import React, { useEffect, useRef } from 'react';
import {
  Users,
  MapPin,
  Award,
  UserCheck,
  Compass,
  ShieldCheck,
  Lightbulb,
  FileCheck2,
  ArrowRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BENEFITS_DATA, BenefitItem } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

interface WhyChooseUsProps {
  onOpenContact: (mode?: string) => void;
}

const getBenefitIcon = (name: string, className: string = 'w-4 h-4') => {
  switch (name) {
    case 'Users': return <Users className={className} />;
    case 'MapPin': return <MapPin className={className} />;
    case 'Award': return <Award className={className} />;
    case 'UserCheck': return <UserCheck className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Lightbulb': return <Lightbulb className={className} />;
    case 'FileCheck2': return <FileCheck2 className={className} />;
    default: return <Award className={className} />;
  }
};

// Clean descriptions without buzzwords
const CLEAN_BENEFITS = [
  {
    id: 'exp',
    iconName: 'Users',
    title: 'Women-Led Leadership',
    description: 'Led by CA Crispee Morakhiya and a team of qualified women professionals with deep expertise in Indian accounting standards, taxation, and compliance.',
  },
  {
    id: 'presence',
    iconName: 'MapPin',
    title: 'Surat & Pune Presence',
    description: 'Physical offices in Surat and Pune with the ability to serve clients remotely across India.',
  },
  {
    id: 'track',
    iconName: 'Award',
    title: 'Reliable & Accurate',
    description: 'Committed to accuracy, deadline adherence, and the highest professional standards in every engagement.',
  },
  {
    id: 'personalized',
    iconName: 'UserCheck',
    title: 'Personalized Attention',
    description: 'Every client works directly with a qualified senior professional who understands their specific business needs.',
  },
  {
    id: 'guidance',
    iconName: 'Compass',
    title: 'Proactive Advisory',
    description: 'We go beyond compliance — providing practical guidance that helps your business make better financial decisions.',
  },
  {
    id: 'reliable',
    iconName: 'ShieldCheck',
    title: 'Confidential & Secure',
    description: 'All client information is handled with strict confidentiality, backed by formal non-disclosure agreements.',
  },
  {
    id: 'innovative',
    iconName: 'Lightbulb',
    title: 'Modern Approach',
    description: 'We use current tools and methodologies to deliver efficient, cost-effective professional services.',
  },
  {
    id: 'technical',
    iconName: 'FileCheck2',
    title: 'CA / CS / CMA Expertise',
    description: 'Deep, current knowledge of Indian accounting standards, GST, direct tax, and corporate law.',
  },
];

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-card',
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.07, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.why-grid', start: 'top 82%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="section-padding bg-white scroll-mt-20"
    >
      <div className="section-container">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-3">
          <span className="section-label">Why Work With Us</span>
          <h2 className="section-heading">
            What sets us apart
          </h2>
          <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
            A professional firm you can rely on — qualified, careful, and genuinely invested
            in your success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="why-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLEAN_BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="why-card card-base p-5 space-y-3 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-navy text-white flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                {getBenefitIcon(benefit.iconName)}
              </div>
              <h3 className="text-sm font-semibold text-brand-navy leading-snug">
                {benefit.title}
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-10 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <div className="text-base font-semibold text-brand-navy mb-1">
              Strict confidentiality, always.
            </div>
            <p className="text-sm text-brand-muted">
              Every engagement is covered by a formal confidentiality agreement and secure data handling.
            </p>
          </div>
          <button
            onClick={() => onOpenContact('business')}
            className="btn-gold flex items-center space-x-2 flex-shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

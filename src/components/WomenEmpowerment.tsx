import React, { useEffect, useRef } from 'react';
import { ArrowRight, Clock, Users, Award, ShieldCheck, ExternalLink, CalendarCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { USEFUL_LINKS } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

interface WomenEmpowermentProps {
  onOpenContact: (mode?: string) => void;
}

const PILLARS = [
  { icon: Clock, title: 'Flexible Work Hours', desc: 'Work on your schedule. Manage personal responsibilities without giving up your career.' },
  { icon: Award, title: 'Meaningful Projects', desc: 'Work on real accounting, taxation, and compliance projects for actual businesses.' },
  { icon: Users, title: 'Professional Community', desc: 'Join a network of qualified women professionals across India.' },
  { icon: ShieldCheck, title: 'Mentorship & Growth', desc: 'Guidance from CA Crispee Morakhiya and the team.' },
];

export const WomenEmpowerment: React.FC<WomenEmpowermentProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.emp-heading', { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.emp-heading', start: 'top 85%' } });
      gsap.fromTo('.emp-pillar', { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: '.emp-pillars', start: 'top 82%' } });
      gsap.fromTo('.emp-photo', { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 1.0, ease: 'power2.out', scrollTrigger: { trigger: '.emp-photo', start: 'top 85%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="empowerment" className="section-padding bg-brand-bgAlt scroll-mt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Photos — stack on mobile, left on desktop */}
          <div className="order-2 lg:order-1">
            <div className="emp-photo grid grid-cols-2 gap-2 sm:gap-3 max-w-sm sm:max-w-lg mx-auto lg:mx-0">
              {/* Main photo */}
              <div className="col-span-2 h-44 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/assets/memories/IMG20250719105458.jpg"
                  alt="Visionary Women professionals"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              {/* Secondary photos */}
              <div className="h-28 sm:h-36 md:h-44 rounded-xl overflow-hidden shadow-card">
                <img
                  src="/assets/memories/MONIKA___SWATI___1_.jpeg"
                  alt="Women professionals network"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div className="h-28 sm:h-36 md:h-44 rounded-xl overflow-hidden shadow-card relative">
                <img
                  src="/assets/memories/IMG20250719151818.jpg"
                  alt="Women leadership panel"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-brand-navy/60 flex items-end p-2 sm:p-3">
                  <span className="text-white text-xs font-semibold italic leading-snug">
                    "We Rise by Lifting Others"
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-5 sm:space-y-6">
            <div>
              <span className="section-label">For Women Professionals</span>
              <h2 className="emp-heading section-heading mt-2">
                Continue your career on your own terms.
              </h2>
            </div>
            <div className="accent-line" />
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Visionary Women connects qualified women professionals with flexible work
              opportunities in accounting, taxation, compliance, and related professional
              services. Whether you are a CA, CS, CMA, or experienced accountant —
              your qualification has a place here.
            </p>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              We understand that many skilled women step back from their careers due to personal
              responsibilities. Our network makes it possible to continue working professionally
              without compromising on what matters to you.
            </p>

            {/* Four pillars */}
            <div className="emp-pillars grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {PILLARS.map((pillar, idx) => (
                <div key={idx} className="emp-pillar card-base p-3 sm:p-4 flex items-start space-x-3 hover:shadow-card-hover transition-all duration-200">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-brand-navy">{pillar.title}</h4>
                    <p className="text-xs text-brand-muted mt-0.5 leading-relaxed hidden sm:block">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
              <button
                onClick={() => onOpenContact('professional')}
                className="btn-gold flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <span>Join Our Network</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={USEFUL_LINKS[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy-ghost flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Register for Sessions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

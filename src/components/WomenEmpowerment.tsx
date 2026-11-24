import React, { useEffect, useRef } from 'react';
import { ArrowRight, Clock, Users, Award, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WomenEmpowermentProps {
  onOpenContact: (mode?: string) => void;
}

const PILLARS = [
  {
    icon: Clock,
    title: 'Flexible Work Hours',
    desc: 'Work on your schedule. Manage personal responsibilities without giving up your career.',
  },
  {
    icon: Award,
    title: 'Meaningful Projects',
    desc: 'Work on real accounting, taxation, and compliance projects for actual businesses.',
  },
  {
    icon: Users,
    title: 'Professional Community',
    desc: 'Join a network of qualified women professionals across India. Peer support and collaboration.',
  },
  {
    icon: ShieldCheck,
    title: 'Mentorship & Growth',
    desc: 'Access to mentorship, skill development, and guidance from CA Crispee Morakhiya and the team.',
  },
];

export const WomenEmpowerment: React.FC<WomenEmpowermentProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.emp-heading',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.emp-heading', start: 'top 85%' }
        }
      );
      gsap.fromTo(
        '.emp-pillar',
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.emp-pillars', start: 'top 82%' }
        }
      );
      gsap.fromTo(
        '.emp-photo',
        { opacity: 0, scale: 0.97 },
        {
          opacity: 1, scale: 1, duration: 1.0, ease: 'power2.out',
          scrollTrigger: { trigger: '.emp-photo', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="empowerment"
      className="section-padding bg-brand-bgAlt scroll-mt-20"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Photographs */}
          <div className="order-2 lg:order-1">
            <div className="emp-photo grid grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0">
              {/* Main photo */}
              <div className="col-span-2 h-56 sm:h-64 rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/assets/memories/IMG20250719105458.jpg"
                  alt="Visionary Women professionals"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              {/* Secondary photos */}
              <div className="h-36 sm:h-44 rounded-xl overflow-hidden shadow-card">
                <img
                  src="/assets/memories/MONIKA___SWATI___1_.jpeg"
                  alt="Women professionals network"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="h-36 sm:h-44 rounded-xl overflow-hidden shadow-card relative">
                <img
                  src="/assets/memories/IMG20250719151818.jpg"
                  alt="Women leadership panel"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Tagline overlay */}
                <div className="absolute inset-0 bg-brand-navy/60 flex items-end p-3">
                  <span className="text-white text-xs font-semibold italic leading-snug">
                    "We Rise by Lifting Others"
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <span className="section-label">For Women Professionals</span>
              <h2 className="emp-heading section-heading mt-2">
                Continue your career on your own terms.
              </h2>
            </div>

            <div className="accent-line" />

            <p className="text-brand-muted leading-relaxed">
              Visionary Women connects qualified women professionals with flexible work
              opportunities in accounting, taxation, compliance, and related professional
              services. Whether you are a CA, CS, CMA, or experienced accountant —
              your qualification has a place here.
            </p>

            <p className="text-brand-muted leading-relaxed text-sm">
              We understand that many skilled women step back from their careers due
              to personal responsibilities. Our network makes it possible to continue
              working professionally without compromising on what matters to you.
            </p>

            {/* Four pillars */}
            <div className="emp-pillars grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="emp-pillar card-base p-4 flex items-start space-x-3 hover:shadow-card-hover transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-navy">{pillar.title}</h4>
                    <p className="text-xs text-brand-muted mt-0.5 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => onOpenContact('professional')}
                className="btn-gold flex items-center justify-center space-x-2"
              >
                <span>Join Our Network</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#founder"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('founder')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-navy-ghost flex items-center justify-center space-x-2"
              >
                <span>Meet Our Founder</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

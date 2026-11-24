import React, { useEffect, useRef } from 'react';
import { Target, Eye } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const VisionMission: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.vm-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.2, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.vm-grid', start: 'top 82%' }
        }
      );
      gsap.fromTo(
        '.vm-heading',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.vm-heading', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="section-padding bg-white scroll-mt-20"
    >
      <div className="section-container">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-3">
          <span className="section-label">Our Purpose</span>
          <h2 className="vm-heading section-heading">
            Vision & Mission
          </h2>
          <p className="text-brand-muted leading-relaxed">
            We exist to connect skilled women professionals with meaningful work,
            and to deliver reliable professional services to businesses that need them.
          </p>
        </div>

        {/* Two Cards */}
        <div className="vm-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">

          {/* Mission */}
          <div className="vm-card card-base p-8 sm:p-10 space-y-5 hover:shadow-card-hover transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
                Our Mission
              </span>
              <h3 className="text-xl font-bold text-brand-navy">
                Deliver professional services. Create opportunities.
              </h3>
            </div>
            <div className="accent-line" />
            <blockquote className="text-brand-muted leading-relaxed border-l-2 border-brand-gold pl-4 py-1 text-sm italic">
              "To empower women professionals and deliver exceptional outsourced solutions to businesses through flexible, remote work opportunities."
            </blockquote>
            <p className="text-sm text-brand-muted leading-relaxed">
              We connect qualified women professionals — CAs, CSs, CMAs — with businesses that
              need accounting, compliance, and advisory support. Everyone benefits.
            </p>
          </div>

          {/* Vision */}
          <div className="vm-card card-base p-8 sm:p-10 space-y-5 hover:shadow-card-hover transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-gold text-white flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
                Our Vision
              </span>
              <h3 className="text-xl font-bold text-brand-navy">
                A leading women-led CA firm in India.
              </h3>
            </div>
            <div className="accent-line" />
            <blockquote className="text-brand-muted leading-relaxed border-l-2 border-brand-navy pl-4 py-1 text-sm italic">
              "To build a recognized, women-led platform where qualified professionals can access equal opportunities while balancing personal and professional responsibilities."
            </blockquote>
            <p className="text-sm text-brand-muted leading-relaxed">
              Founded in Surat with a presence in Pune, Visionary Women aims to be recognized
              among India's top women-led professional services firms.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

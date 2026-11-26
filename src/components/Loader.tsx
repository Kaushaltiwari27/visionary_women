import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if session has already seen loader
    const hasSeenLoader = sessionStorage.getItem('vw_loader_seen');
    if (hasSeenLoader) {
      onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('vw_loader_seen', 'true');
          onComplete();
        }
      });

      // Background ambient beam animation
      gsap.to(beamRef.current, {
        x: '100%',
        duration: 2.2,
        repeat: -1,
        ease: 'power1.inOut',
        yoyo: true
      });

      // Progress counter animation from 0 to 100
      const counterObj = { value: 0 };
      tl.to(counterObj, {
        value: 100,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          const val = Math.round(counterObj.value);
          setProgress(val);
          if (counterRef.current) {
            counterRef.current.innerText = `${val}%`;
          }
        }
      }, 0);

      // SVG Ring animation
      if (ringRef.current) {
        const circumference = 2 * Math.PI * 48; // radius 48
        gsap.set(ringRef.current, {
          strokeDasharray: circumference,
          strokeDashoffset: circumference
        });
        tl.to(ringRef.current, {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: 'power2.out'
        }, 0);
      }

      // Logo entrance
      tl.fromTo(logoRef.current, {
        scale: 0.7,
        opacity: 0,
        filter: 'blur(10px)'
      }, {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out'
      }, 0.2);

      // Texts entrance
      tl.fromTo([text1Ref.current, text2Ref.current], {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      }, 0.5);

      // Hold briefly at 100%
      tl.to({}, { duration: 0.3 });

      // Outro: Dramatic Luxury Curtain Reveal
      tl.to([logoRef.current, text1Ref.current, text2Ref.current, counterRef.current], {
        y: -30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power2.in'
      });

      tl.to(containerRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.9,
        ease: 'expo.inOut'
      }, '-=0.1');

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      className="fixed inset-0 z-[9999] bg-[#010521] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Background moving light beam */}
      <div
        ref={beamRef}
        className="absolute w-[600px] h-[600px] -left-[300px] bg-gradient-to-tr from-[#47C8BF]/10 via-[#01155B]/20 to-transparent rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Logo with SVG Circular Loading Ring */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center mb-8">
          
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 110 110">
            {/* Background ring track */}
            <circle
              cx="55"
              cy="55"
              r="48"
              fill="none"
              stroke="#01155B"
              strokeWidth="2.5"
            />
            {/* Animated stroke ring */}
            <circle
              ref={ringRef}
              cx="55"
              cy="55"
              r="48"
              fill="none"
              stroke="url(#loaderGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#47C8BF" />
                <stop offset="60%" stopColor="#FFDE59" />
                <stop offset="100%" stopColor="#FF8F00" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Brand Logo */}
          <div
            ref={logoRef}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1.5 bg-white border border-[#47C8BF]/30 shadow-[0_0_30px_rgba(71,200,191,0.25)] flex items-center justify-center overflow-hidden"
          >
            <img
              src="/assets/vw-logo-tm.png"
              alt="Visionary Women™"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Brand Typography */}
        <div className="space-y-1 mb-8 overflow-hidden">
          <div
            ref={text1Ref}
            className="text-xs sm:text-sm font-montserrat tracking-[0.25em] uppercase text-white font-bold"
          >
            EMPOWERING WOMEN
          </div>
          <div
            ref={text2Ref}
            className="text-xs sm:text-sm font-montserrat tracking-[0.25em] uppercase text-[#47C8BF] font-bold"
          >
            ELEVATING BUSINESSES
          </div>
        </div>

        {/* Progress Counter & Bar */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-48 sm:w-56 h-[2px] bg-[#01155B] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#47C8BF] via-[#FFDE59] to-[#FF8F00] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span
            ref={counterRef}
            className="text-[11px] font-mono tracking-widest text-slate-400 font-semibold"
          >
            0%
          </span>
        </div>

      </div>

      {/* Bottom Subtle Tagline */}
      <div className="absolute bottom-8 text-[10px] tracking-[0.3em] uppercase text-slate-300 font-medium font-sans">
        WE RISE BY LIFTING OTHERS • SURAT | PUNE
      </div>
    </div>
  );
};

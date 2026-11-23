import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop devices with hover support
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Initially hide until first mousemove
    gsap.set([dot, ring], { opacity: 0 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // GSAP quickSet for high performance 60fps tracking
    const setDotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3' });
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3' });
    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power2.out' });
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power2.out' });

    const ticker = () => {
      setDotX(mouse.x);
      setDotY(mouse.y);
      setRingX(mouse.x);
      setRingY(mouse.y);
    };

    gsap.ticker.add(ticker);

    // Hover scale interactions
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('.interactive-card')
      ) {
        gsap.to(ring, {
          scale: 1.8,
          borderColor: '#FFDE59',
          backgroundColor: 'rgba(71, 200, 191, 0.12)',
          duration: 0.25,
        });
        gsap.to(dot, { scale: 0.5, backgroundColor: '#FFDE59', duration: 0.25 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('.interactive-card')
      ) {
        gsap.to(ring, {
          scale: 1,
          borderColor: '#47C8BF',
          backgroundColor: 'transparent',
          duration: 0.25,
        });
        gsap.to(dot, { scale: 1, backgroundColor: '#47C8BF', duration: 0.25 });
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[10000]">
      {/* Center sharp dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#47C8BF] -translate-x-1/2 -translate-y-1/2 pointer-events-none shadow-[0_0_10px_#47C8BF]"
      />
      {/* Smooth trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#47C8BF]/60 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform"
      />
    </div>
  );
};

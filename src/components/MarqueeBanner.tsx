import React from 'react';
import { Sparkles, Star, ShieldCheck, MapPin, Award, Users, TrendingUp } from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const marqueeItems = [
    { text: "VISIONARY WOMEN", highlight: "We Rise by Lifting Others", icon: Sparkles, color: "text-vwYellow" },
    { text: "SURAT | PUNE", highlight: "Pan-India Reach & Global Delivery", icon: MapPin, color: "text-vwTeal" },
    { text: "125+ YEARS", highlight: "Combined Professional Leadership", icon: Award, color: "text-vwOrange" },
    { text: "VIRTUAL CFO & ADVISORY", highlight: "Ind AS & Financial Modelling", icon: TrendingUp, color: "text-vwTeal" },
    { text: "ROC & SECRETARIAL", highlight: "100% Regulated Corporate Governance", icon: ShieldCheck, color: "text-vwYellow" },
    { text: "QUALIFIED WOMEN PROFESSIONALS", highlight: "CAs, CSs & CMAs Platform", icon: Users, color: "text-white" },
    { text: "TOP 4 CA FIRM BENCHMARK", highlight: "Institutional Quality & Rigor", icon: Star, color: "text-vwTeal" },
    { text: "TAXATION & LITIGATION", highlight: "Direct Tax, GST & Audits", icon: ShieldCheck, color: "text-vwOrange" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-navy-950/95 border-y border-vwTeal/25 py-3 z-30 select-none backdrop-blur-md">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

      {/* Ticker Flex Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center space-x-8 sm:space-x-12">
        {/* First copy */}
        {marqueeItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={`m1-${idx}`} className="flex items-center space-x-3 text-xs sm:text-sm font-sans tracking-wider whitespace-nowrap">
              <IconComponent className={`w-4 h-4 ${item.color} shrink-0 animate-pulse`} />
              <span className="font-headline font-bold uppercase tracking-wider text-white">
                {item.text}
              </span>
              <span className="text-slate-400 font-medium text-xs">
                — {item.highlight}
              </span>
              <span className="text-vwTeal/40 px-2 font-bold">•</span>
            </div>
          );
        })}

        {/* Second duplicated copy for seamless loop */}
        {marqueeItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={`m2-${idx}`} className="flex items-center space-x-3 text-xs sm:text-sm font-sans tracking-wider whitespace-nowrap">
              <IconComponent className={`w-4 h-4 ${item.color} shrink-0 animate-pulse`} />
              <span className="font-headline font-bold uppercase tracking-wider text-white">
                {item.text}
              </span>
              <span className="text-slate-400 font-medium text-xs">
                — {item.highlight}
              </span>
              <span className="text-vwTeal/40 px-2 font-bold">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

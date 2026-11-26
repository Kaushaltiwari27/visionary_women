import React, { useState } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  Layers, 
  Box, 
  Play,
  ArrowRight
} from 'lucide-react';
import { ThreeHeroSculpture } from './ThreeHeroSculpture';

interface HeroVisualProps {
  onOpenVideo?: () => void;
  onOpenContact: (mode?: string, serviceTitle?: string) => void;
}

export const HeroVisualCenterpiece: React.FC<HeroVisualProps> = ({ onOpenVideo, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'console' | '3d'>('console');
  const [activeCapability, setActiveCapability] = useState<number>(0);

  const capabilities = [
    {
      id: "cfo",
      tag: "VIRTUAL CFO & ADVISORY",
      title: "Strategic Financial Architecture",
      desc: "5-year dynamic modeling, bank CMA project finance dossiers, and unit economics optimization for high-growth firms.",
      badge: "Ind AS Compliant",
      stat: "125+ Yrs",
      statDesc: "Combined Partner Acumen",
      color: "#47C8BF",
      icon: TrendingUp
    },
    {
      id: "compliance",
      tag: "ROC & GOVERNANCE",
      title: "Zero-Friction Corporate Secretarial",
      desc: "Private/Public Ltd incorporation, ROC annual filings, statutory registers, and board governance by certified CS leads.",
      badge: "100% Regulated",
      stat: "Surat & Pune",
      statDesc: "Dual Operational Hubs",
      color: "#FFDE59",
      icon: ShieldCheck
    },
    {
      id: "tax",
      tag: "TAX & LITIGATION",
      title: "Direct Tax & Institutional Audits",
      desc: "High-stakes direct tax defense, GST ITC reconciliations, advance rulings, and statutory audit readiness.",
      badge: "Ironclad NDAs",
      stat: "Top 4 Vision",
      statDesc: "Benchmark for India",
      color: "#FF8F00",
      icon: Award
    },
    {
      id: "talent",
      tag: "WOMEN TALENT NETWORK",
      title: "Empowered Remote-First CAs & CSs",
      desc: "Unlocking millions of woman-hours with flexible high-impact engagements without compromising personal life.",
      badge: "Qualified Only",
      stat: "CA / CS / CMA",
      statDesc: "Certified Community",
      color: "#47C8BF",
      icon: Users
    }
  ];

  const current = capabilities[activeCapability];
  const CurrentIcon = current.icon;

  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col items-center">
      
      {/* Top Toggle Switch between Interactive Console & 3D Orbital Art */}
      <div className="mb-4 bg-navy-900/90 p-1.5 rounded-full border border-vwTeal/30 shadow-lg flex items-center space-x-2 z-20 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setActiveTab('console')}
          className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer ${
            activeTab === 'console'
              ? 'bg-vwTeal text-navy-950 shadow-glow-teal'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Interactive Console</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('3d')}
          className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer ${
            activeTab === '3d'
              ? 'bg-vwYellow text-navy-950 shadow-glow-yellow'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Box className="w-3.5 h-3.5" />
          <span>3D Orbital Sculpture</span>
        </button>
      </div>

      {activeTab === '3d' ? (
        /* 3D WebGL Canvas View */
        <div className="w-full relative animate-fadeIn">
          <ThreeHeroSculpture />
        </div>
      ) : (
        /* Interactive Digital Brand Console View (Clean, Premium, High-Trust) */
        <div className="w-full relative animate-fadeIn">
          
          {/* Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-vwTeal/20 via-vwYellow/15 to-vwOrange/20 rounded-3xl blur-xl opacity-70" />

          {/* Master Card Frame */}
          <div className="relative bg-gradient-to-b from-navy-900/95 via-navy-950/98 to-navy-900/95 border border-vwTeal/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            
            {/* Header: Brandmark + Live Status */}
            <div className="flex items-center justify-between pb-5 border-b border-navy-800">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-vwTeal via-white to-vwOrange shadow-glow-teal shrink-0">
                  <img
                    src="/assets/vw-logo-tm.png"
                    alt="Visionary Women™"
                    className="w-full h-full object-contain rounded-full bg-white p-0.5"
                  />
                </div>
                <div>
                  <div className="font-headline font-bold uppercase text-white tracking-wider text-base sm:text-lg flex items-center space-x-1.5">
                    <span>VISIONARY WOMEN</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-navy-850 text-vwYellow font-mono">TM</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-sans tracking-widest uppercase">
                    We Rise by Lifting Others • Surat | Pune
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center space-x-2 bg-navy-950/90 px-3 py-1.5 rounded-full border border-navy-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  Active Desk
                </span>
              </div>
            </div>

            {/* Quick Capability Tabs Selector */}
            <div className="grid grid-cols-4 gap-1.5 my-4 p-1 bg-navy-950 rounded-2xl border border-navy-850">
              {capabilities.map((cap, idx) => (
                <button
                  key={cap.id}
                  onClick={() => setActiveCapability(idx)}
                  className={`py-2 px-1 text-center rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeCapability === idx
                      ? 'bg-navy-800 text-white shadow-md border border-vwTeal/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cap.id === 'cfo' && 'Virtual CFO'}
                  {cap.id === 'compliance' && 'ROC Legal'}
                  {cap.id === 'tax' && 'Direct Tax'}
                  {cap.id === 'talent' && 'Network'}
                </button>
              ))}
            </div>

            {/* Active Capability Showcase Box */}
            <div className="bg-navy-950/90 rounded-2xl p-5 border border-navy-800 space-y-4">
              
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${current.color}18`,
                      color: current.color,
                      border: `1px solid ${current.color}40`
                    }}
                  >
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest block"
                      style={{ color: current.color }}
                    >
                      {current.tag}
                    </span>
                    <h3 className="text-base font-headline font-bold uppercase text-white leading-tight">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] px-2.5 py-1 rounded-full bg-navy-900 border border-slate-700 text-slate-300 font-semibold whitespace-nowrap">
                  {current.badge}
                </span>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {current.desc}
              </p>

              {/* Bottom Metrics Pill */}
              <div className="flex items-center justify-between pt-3 border-t border-navy-850/80">
                <div className="flex items-center space-x-2">
                  <div className="text-lg font-headline font-black text-vwYellow leading-none">
                    {current.stat}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide">
                    {current.statDesc}
                  </div>
                </div>

                <button
                  onClick={() => onOpenContact('business', current.title)}
                  className="text-xs font-bold uppercase tracking-wider text-vwTeal hover:text-vwYellow transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Quick Action Footer in Card */}
            <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-vwTeal" />
                <span className="text-[11px]">Strict NDA • Pan-India Execution</span>
              </div>

              {onOpenVideo && (
                <button
                  onClick={onOpenVideo}
                  className="text-[11px] font-semibold text-vwYellow hover:text-white transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Play Brand Film</span>
                </button>
              )}
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

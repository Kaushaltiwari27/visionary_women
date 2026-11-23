import React from 'react';
import { X, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/90 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-navy-900 border border-vwTeal/40 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl p-4 sm:p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-navy-800">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-vwYellow animate-spin-slow" />
            <h3 className="font-headline font-bold uppercase text-white tracking-wider text-base sm:text-lg">
              Visionary Women • Official Brand Reveal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="mt-4 rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-navy-800 shadow-inner">
          <video
            src="/assets/logo-reveal.mp4"
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-300 italic font-serif">
            "We Rise by Lifting Others" — Connecting businesses with qualified professionals through flexible, remote-first opportunities.
          </p>
        </div>

      </div>
    </div>
  );
};

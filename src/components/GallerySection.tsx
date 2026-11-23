import React, { useState } from 'react';
import { 
  Sparkles, 
  Maximize2, 
  X, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Camera
} from 'lucide-react';
import { MEMORIES_PHOTOS } from '../data/memories';

export const GallerySection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const filteredPhotos = activeCategory === 'all'
    ? MEMORIES_PHOTOS
    : MEMORIES_PHOTOS.filter(p => p.category === activeCategory);

  const currentList = filteredPhotos.slice(0, visibleCount);
  const selectedPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden border-t border-navy-850">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-vwTeal/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-vwYellow/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-vwTeal text-xs font-bold tracking-[0.2em] uppercase font-sans">
              <Camera className="w-3.5 h-3.5 text-vwYellow animate-pulse" />
              <span>OFFICIAL MEMORIES & EVENTS ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold uppercase tracking-tight text-white leading-tight">
              COMMUNITY & <span className="text-gradient-gold">SUMMIT GALLERY</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Authentic glimpses of our professional summits, leadership roundtables, women CA/CS peer gatherings, and executive operations across Surat and Pune.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => { setActiveCategory('all'); setVisibleCount(12); }}
              className={`px-4 py-2 rounded-full text-xs font-montserrat font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-vwTeal text-navy-950 shadow-glow-teal'
                  : 'bg-navy-900/80 text-slate-300 hover:text-white border border-navy-800'
              }`}
            >
              All Memories ({MEMORIES_PHOTOS.length})
            </button>
            <button
              onClick={() => { setActiveCategory('events'); setVisibleCount(12); }}
              className={`px-4 py-2 rounded-full text-xs font-montserrat font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'events'
                  ? 'bg-vwTeal text-navy-950 shadow-glow-teal'
                  : 'bg-navy-900/80 text-slate-300 hover:text-white border border-navy-800'
              }`}
            >
              Conferences & Summits
            </button>
            <button
              onClick={() => { setActiveCategory('community'); setVisibleCount(12); }}
              className={`px-4 py-2 rounded-full text-xs font-montserrat font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'community'
                  ? 'bg-vwTeal text-navy-950 shadow-glow-teal'
                  : 'bg-navy-900/80 text-slate-300 hover:text-white border border-navy-800'
              }`}
            >
              Community Assemblies
            </button>
            <button
              onClick={() => { setActiveCategory('team'); setVisibleCount(12); }}
              className={`px-4 py-2 rounded-full text-xs font-montserrat font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'team'
                  ? 'bg-vwTeal text-navy-950 shadow-glow-teal'
                  : 'bg-navy-900/80 text-slate-300 hover:text-white border border-navy-800'
              }`}
            >
              Executive Members
            </button>
            <button
              onClick={() => { setActiveCategory('workshops'); setVisibleCount(12); }}
              className={`px-4 py-2 rounded-full text-xs font-montserrat font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'workshops'
                  ? 'bg-vwTeal text-navy-950 shadow-glow-teal'
                  : 'bg-navy-900/80 text-slate-300 hover:text-white border border-navy-800'
              }`}
            >
              Masterclasses & Mentorship
            </button>
          </div>
        </div>

        {/* Gallery Grid with Optimized Image Containers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentList.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group relative bg-navy-900/90 rounded-2xl border border-navy-800 hover:border-vwTeal/50 overflow-hidden shadow-card-elevated transition-all duration-300 cursor-pointer hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Photo Frame with Proper Dimension Aspect Ratio */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-navy-950 flex items-center justify-center">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                />

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-navy-950/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-vwTeal text-navy-950 shadow-glow-teal transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-navy-950/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-navy-800 text-[10px] font-sans font-bold uppercase tracking-wider text-vwTeal flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-vwYellow" />
                  <span>{photo.location}</span>
                </div>
              </div>

              {/* Photo Caption & Info */}
              <div className="p-5 border-t border-navy-850 space-y-2">
                <h3 className="text-base font-montserrat font-bold text-white group-hover:text-vwYellow transition-colors line-clamp-1 leading-snug">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-sans">
                  {photo.caption}
                </p>
                <div className="pt-1 flex items-center justify-between text-xs font-semibold text-vwTeal group-hover:text-vwYellow transition-colors font-sans">
                  <span>Enlarge Memory</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="px-8 py-3.5 rounded-full bg-navy-850 hover:bg-vwYellow hover:text-navy-950 text-white border border-vwTeal/30 font-montserrat font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-md hover:shadow-glow-yellow cursor-pointer"
            >
              <span>Load More Memories ({filteredPhotos.length - visibleCount} remaining)</span>
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal with Full-Screen Photo & Prev/Next Navigation */}
      {selectedPhoto && selectedPhotoIndex !== null && (
        <div 
          onClick={() => setSelectedPhotoIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/95 backdrop-blur-md animate-fadeIn select-none"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative bg-navy-900 border border-vwTeal/40 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-navy-800">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-vwYellow" />
                <span className="font-montserrat font-bold uppercase tracking-wider text-sm sm:text-base text-white">
                  {selectedPhoto.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-1.5 rounded-full bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Photo View Area with Nav Arrows */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[320px] max-h-[64vh] p-2">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-h-full max-w-full object-contain rounded-lg"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-2.5 rounded-full bg-navy-950/80 hover:bg-vwTeal hover:text-navy-950 text-white transition-all border border-navy-700 cursor-pointer shadow-lg"
                title="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 p-2.5 rounded-full bg-navy-950/80 hover:bg-vwTeal hover:text-navy-950 text-white transition-all border border-navy-700 cursor-pointer shadow-lg"
                title="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer Caption */}
            <div className="p-6 bg-navy-950 border-t border-navy-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs text-vwTeal font-bold uppercase tracking-wider font-sans">
                  <MapPin className="w-3.5 h-3.5 text-vwYellow" />
                  <span>{selectedPhoto.location}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 font-normal">Photo {selectedPhotoIndex + 1} of {filteredPhotos.length}</span>
                </div>
                <p className="text-sm text-slate-200 font-sans leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>

              <a
                href={selectedPhoto.src}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 px-4 py-2 rounded-full bg-navy-850 hover:bg-vwYellow hover:text-navy-950 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-colors font-sans"
              >
                Open Original File
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

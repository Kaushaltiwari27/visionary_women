import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { MEMORIES_PHOTOS } from '../data/memories';

export const GallerySection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const filteredPhotos = activeCategory === 'all'
    ? MEMORIES_PHOTOS
    : MEMORIES_PHOTOS.filter((p) => p.category === activeCategory);

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

  const categories = Array.from(new Set(MEMORIES_PHOTOS.map((p) => p.category)));

  return (
    <section id="gallery" className="section-padding bg-brand-bgAlt scroll-mt-20">
      <div className="section-container">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-5">
          <div className="space-y-2">
            <span className="section-label">Our Community</span>
            <h2 className="section-heading">Events & Gatherings</h2>
            <p className="text-brand-muted text-sm max-w-xl leading-relaxed">
              Photographs from our professional summits, leadership roundtables,
              and community events across Surat and Pune.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar flex-shrink-0">
            <button
              onClick={() => { setActiveCategory('all'); setVisibleCount(12); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap border ${
                activeCategory === 'all'
                  ? 'bg-brand-navy text-white border-brand-navy'
                  : 'border-brand-border text-brand-muted hover:border-brand-navy hover:text-brand-navy bg-white'
              }`}
            >
              All ({MEMORIES_PHOTOS.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(12); }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap border capitalize ${
                  activeCategory === cat
                    ? 'bg-brand-navy text-white border-brand-navy'
                    : 'border-brand-border text-brand-muted hover:border-brand-navy hover:text-brand-navy bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {currentList.map((photo, idx) => (
            <div
              key={photo.src}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-brand-border cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.title || 'Visionary Women event'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/40 transition-all duration-300 flex items-center justify-center">
                <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Category tag */}
              {photo.category && (
                <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-semibold text-white bg-brand-navy/70 px-2 py-0.5 rounded-full capitalize backdrop-blur-sm">
                    {photo.category}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load more */}
        {filteredPhotos.length > visibleCount && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="btn-navy-ghost"
            >
              Show More Photos
            </button>
          </div>
        )}

        {/* Gallery icon if empty */}
        {currentList.length === 0 && (
          <div className="text-center py-16 text-brand-muted">
            <Camera className="w-8 h-8 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No photos in this category yet.</p>
          </div>
        )}

      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-brand-text/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title || ''}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>

          {/* Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Caption */}
          {selectedPhoto.caption && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-lg">
              {selectedPhoto.caption}
            </div>
          )}
        </div>
      )}

    </section>
  );
};

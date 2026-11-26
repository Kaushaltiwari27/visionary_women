import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_META, GoogleReview } from '../data/reviews';

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('');

const GoogleBadgeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96z"
    />
  </svg>
);

const ReviewMarqueeCard: React.FC<{ review: GoogleReview }> = ({ review }) => (
  <article className="w-[310px] sm:w-[370px] flex-shrink-0 card-base p-5 sm:p-6 flex flex-col justify-between bg-white hover:border-brand-gold/50 hover:shadow-card-hover transition-all duration-300 select-none">
    <div>
      {/* Reviewer Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-brand-navy text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
            {getInitials(review.author)}
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-brand-navy truncate">{review.author}</h3>
            <p className="text-xs text-brand-muted">{review.timeAgo}</p>
          </div>
        </div>
        <GoogleBadgeIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
      </div>

      {/* Stars */}
      <div className="flex items-center space-x-1 mb-3" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            className={`w-3.5 h-3.5 ${
              idx < review.rating
                ? 'text-brand-gold fill-brand-gold'
                : 'text-brand-border fill-brand-border'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <div className="relative">
        <Quote className="w-4 h-4 text-brand-gold/35 mb-1.5" />
        <p className="text-xs sm:text-sm text-brand-text/85 leading-relaxed line-clamp-5">
          {review.text}
        </p>
      </div>
    </div>

    {/* Footer */}
    <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between text-[11px]">
      <span className="font-medium text-brand-muted capitalize">
        {review.category === 'community'
          ? 'Community & Network'
          : review.category === 'services'
          ? 'Client Services'
          : 'AI & Software Workshop'}
      </span>
      <span className="text-emerald-700 font-semibold">Verified on Google</span>
    </div>
  </article>
);

export const ReviewsSection: React.FC = () => {
  // Duplicate array once for seamless infinite horizontal loop
  const marqueeItems = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

  return (
    <section id="reviews" className="section-padding bg-white scroll-mt-20 border-t border-brand-border/60 overflow-hidden">
      <div className="section-container">
        {/* Header + Google Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="section-label">Client & Community Voices</span>
            <h2 className="section-heading">Trusted by Businesses & Women Professionals</h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Verified feedback from clients, CA/CS peers, and workshop participants across India.
            </p>
          </div>

          {/* Google Rating Summary Card */}
          <div className="card-base p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-brand-bgAlt flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-white border border-brand-border flex items-center justify-center shadow-sm">
                <GoogleBadgeIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-brand-navy leading-none">
                    {GOOGLE_REVIEWS_META.rating.toFixed(1)}
                  </span>
                  <div className="flex items-center space-x-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-brand-muted mt-1 font-medium">
                  Based on <strong className="text-brand-navy">{GOOGLE_REVIEWS_META.totalReviews}</strong> Google Reviews
                </p>
              </div>
            </div>

            <a
              href={GOOGLE_REVIEWS_META.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs py-2.5 px-4 whitespace-nowrap inline-flex items-center space-x-1.5"
            >
              <span>View on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Single-Line Continuous Horizontal Marquee */}
      <div className="relative reviews-marquee-wrapper py-2">
        {/* Left & Right Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="reviews-marquee-track gap-5 px-4">
          {marqueeItems.map((review, idx) => (
            <ReviewMarqueeCard key={`${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>

      {/* Subtle Bottom Action */}
      <div className="section-container mt-8 text-center">
        <a
          href={GOOGLE_REVIEWS_META.googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link inline-flex items-center space-x-1.5 text-sm"
        >
          <span>Read all {GOOGLE_REVIEWS_META.totalReviews} reviews on Google</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

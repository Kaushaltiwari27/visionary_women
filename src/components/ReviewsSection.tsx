import React, { useState } from 'react';
import { Star, ExternalLink, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_META, GoogleReview } from '../data/reviews';

type FilterTab = 'all' | 'community' | 'services' | 'workshops';

const FILTER_TABS: { id: FilterTab; label: string }[] = [
  { id: 'all', label: 'All Reviews' },
  { id: 'community', label: 'Community & Network' },
  { id: 'services', label: 'Client Services' },
  { id: 'workshops', label: 'AI & Software Workshops' },
];

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

const ReviewCard: React.FC<{ review: GoogleReview }> = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 220;

  return (
    <article className="card-base card-hover p-5 sm:p-6 flex flex-col justify-between h-full">
      <div>
        {/* Top row: Avatar, Author, Google G */}
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
              className={`w-4 h-4 ${
                idx < review.rating
                  ? 'text-brand-gold fill-brand-gold'
                  : 'text-brand-border fill-brand-border'
              }`}
            />
          ))}
        </div>

        {/* Review Text */}
        <div className="relative">
          <Quote className="w-4 h-4 text-brand-gold/30 mb-1" />
          <p className="text-xs sm:text-sm text-brand-text/90 leading-relaxed">
            {isLong && !expanded ? `${review.text.slice(0, 215).trim()}…` : review.text}
          </p>
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="mt-1.5 text-xs font-semibold text-brand-navy hover:text-brand-gold transition-colors inline-flex items-center space-x-1"
            >
              <span>{expanded ? 'Show less' : 'Read more'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Pill */}
      <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between text-[11px] text-brand-muted">
        <span className="font-medium capitalize">
          {review.category === 'community'
            ? 'Community & Network'
            : review.category === 'services'
            ? 'Client Services'
            : 'Workshop & Training'}
        </span>
        <span className="text-emerald-700 font-medium">Verified Google Review</span>
      </div>
    </article>
  );
};

export const ReviewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredReviews =
    activeTab === 'all'
      ? GOOGLE_REVIEWS
      : GOOGLE_REVIEWS.filter((r) => r.category === activeTab);

  const visibleReviews = showAll ? filteredReviews : filteredReviews.slice(0, 6);

  return (
    <section id="reviews" className="section-padding bg-white scroll-mt-20 border-t border-brand-border/60">
      <div className="section-container">
        {/* Header + Google Summary Card */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl space-y-3">
            <span className="section-label">Client & Community Voices</span>
            <h2 className="section-heading">Trusted by Businesses & Women Professionals</h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Real, verified reviews from clients, CA/CS peers, and workshop participants on Google.
            </p>
          </div>

          {/* Google Rating Summary Badge */}
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-brand-bgAlt text-brand-muted hover:text-brand-navy border border-brand-border'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {visibleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Show More / Less + External Google CTA */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          {filteredReviews.length > 6 && (
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="btn-navy-ghost inline-flex items-center space-x-2"
            >
              <span>
                {showAll
                  ? 'Show Fewer Reviews'
                  : `Show More Reviews (${filteredReviews.length - 6} more)`}
              </span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
          <a
            href={GOOGLE_REVIEWS_META.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link px-4 py-2.5"
          >
            <span>Read all {GOOGLE_REVIEWS_META.totalReviews} reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

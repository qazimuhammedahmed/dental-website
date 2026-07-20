import type { Metadata } from "next";
import { ExternalLink, Quote } from "lucide-react";
import { business, testimonials } from "@/lib/business";
import StarRating from "@/components/StarRating";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description: `Read what patients are saying about ${business.name} — a ${business.rating.toFixed(1)}-star rated dental clinic in Huntington Beach, CA.`,
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
            Patient Reviews
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-brand-900 sm:text-5xl">
            Loved by Our Patients
          </h1>
          <div className="mt-6 flex flex-col items-center gap-2">
            <StarRating rating={business.rating} iconClassName="h-6 w-6" />
            <p className="text-lg font-semibold text-brand-800">
              {business.rating.toFixed(1)} out of 5 &middot; {business.reviewCount} Google reviews
            </p>
          </div>
          <a
            href={business.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral-500/30 transition hover:bg-coral-600"
          >
            Leave a Review
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((review, i) => (
              <AnimatedSection
                key={review.quote}
                delay={i * 0.05}
                className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm shadow-brand-900/5"
              >
                <Quote className="h-8 w-8 text-brand-100" aria-hidden="true" />
                <p className="mt-3 flex-1 leading-relaxed text-brand-800/90">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <StarRating rating={5} />
                  <span className="text-sm font-semibold text-brand-700">
                    {review.author}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold">Had a Great Visit?</h2>
          <p className="mt-4 text-brand-200">
            Your feedback helps other patients in Huntington Beach find us.
            We&apos;d appreciate a moment of your time to leave a review.
          </p>
          <div className="mt-8">
            <a
              href={business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral-500/30 transition hover:bg-coral-600"
            >
              Leave a Google Review
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

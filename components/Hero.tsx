"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import { business } from "@/lib/business";
import StarRating from "./StarRating";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // The <video> element is always rendered (so server and client markup
  // match on hydration) — whether it actually plays is decided here,
  // after mount, once the real prefers-reduced-motion value is known.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (prefersReducedMotion) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [prefersReducedMotion]);

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-900">
      {/*
        TODO: This background clip is a watermarked Adobe Stock preview
        (unlicensed) used as a temporary layout placeholder. It must be
        replaced with a licensed video (purchased stock footage or real
        office/team footage) before this site goes live.
      */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/dental-exam-hero.webm" type="video/webm" />
        <source src="/videos/dental-exam-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient scrim so the centered text stays readable over the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/85 via-brand-900/75 to-brand-900/90" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/20 backdrop-blur">
          <StarRating rating={business.rating} />
          {business.rating.toFixed(1)} · {business.reviewCount} Google reviews
        </div>

        <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          {business.tagline}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-50/90">
          {business.name} welcomes you with a calm, modern office, a caring
          team, and same-day appointments for the moments that can&apos;t
          wait — right here on Goldenwest St.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/book-appointment"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral-500/30 transition hover:bg-coral-600"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Book an Appointment
          </Link>
          <a
            href={`tel:${business.phone.href}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white hover:text-brand-800"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Now
          </a>
        </div>

        <p className="mt-4 text-sm text-brand-100/80">
          {business.address.full}
        </p>
      </motion.div>
    </section>
  );
}

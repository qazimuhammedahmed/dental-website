"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import { testimonials } from "@/lib/business";
import StarRating from "./StarRating";

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  // Always start unpaused so server and client render the same initial
  // markup; the effect below pauses immediately post-mount if the real
  // (client-only) reduced-motion preference calls for it.
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    // Reduced-motion preference always wins, regardless of the manual
    // pause/play toggle below — auto-advancing content should never run
    // for users who asked the OS to reduce motion.
    if (paused || prefersReducedMotion) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, paused, prefersReducedMotion]);

  const current = testimonials[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div
        className="relative overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-900/5 sm:p-12"
        aria-live="polite"
      >
        <Quote className="h-10 w-10 text-brand-100" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className="mt-4 text-xl font-medium leading-relaxed text-brand-900 sm:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <StarRating rating={5} />
              <span className="text-sm font-semibold text-brand-700">
                {current.author}
                {current.source && (
                  <span className="font-normal text-brand-700/60"> · {current.source}</span>
                )}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-brand-600 transition hover:bg-brand-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.quote}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-coral-500" : "bg-brand-200"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-brand-600 transition hover:bg-brand-50"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play testimonial auto-rotation" : "Pause testimonial auto-rotation"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-brand-600 transition hover:bg-brand-50"
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

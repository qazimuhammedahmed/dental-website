"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import { business } from "@/lib/business";
import StarRating from "./StarRating";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            <StarRating rating={business.rating} />
            {business.rating.toFixed(1)} · {business.reviewCount} Google reviews
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl lg:text-6xl">
            {business.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-800/80">
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
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-600 px-7 py-3.5 text-base font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now
            </a>
          </div>

          <p className="mt-4 text-sm text-brand-700/70">
            {business.address.full}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          {/* TODO: replace with a real photo of the office interior or team */}
          <ImagePlaceholder
            label="Photo: Modern office interior / friendly team at work"
            aspect="square"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

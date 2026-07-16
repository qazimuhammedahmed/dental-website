import { MapPin, Navigation } from "lucide-react";
import { business } from "@/lib/business";
import AnimatedSection from "./AnimatedSection";

export default function MapSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
            Visit Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            Conveniently Located in Huntington Beach
          </h2>
        </AnimatedSection>

        <AnimatedSection className="mt-10 overflow-hidden rounded-3xl border border-brand-100 shadow-sm shadow-brand-900/5">
          <div className="grid lg:grid-cols-3">
            <div className="flex flex-col justify-center gap-4 bg-brand-600 p-8 text-white lg:col-span-1">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-coral-300" aria-hidden="true" />
                <p>{business.address.full}</p>
              </div>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
            <div className="lg:col-span-2">
              <iframe
                title={`Map showing ${business.name}`}
                src={business.mapEmbedSrc}
                className="h-80 w-full border-0 lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

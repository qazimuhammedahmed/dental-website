import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesOverview from "@/components/ServicesOverview";
import TeamSection from "@/components/TeamSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import MapSection from "@/components/MapSection";
import AnimatedSection from "@/components/AnimatedSection";
import { business } from "@/lib/business";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <TeamSection />

      <section className="bg-brand-50/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
              Patient Stories
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
              What Our Patients Say
            </h2>
          </AnimatedSection>
          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <MapSection />

      <section className="bg-white py-20">
        <AnimatedSection className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-brand-800/70">
            Book your visit with {business.shortName} today and experience
            gentle, modern dental care in Huntington Beach.
          </p>
          <Link
            href="/book-appointment"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-coral-500/30 transition hover:bg-coral-600"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Book an Appointment
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}

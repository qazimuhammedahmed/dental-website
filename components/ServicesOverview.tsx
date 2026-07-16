import Link from "next/link";
import { services } from "@/lib/business";
import ServiceCard from "./ServiceCard";
import AnimatedSection from "./AnimatedSection";

export default function ServicesOverview() {
  return (
    <section className="bg-brand-50/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
            Our Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            Comprehensive Care for Every Smile
          </h2>
          <p className="mt-4 text-brand-800/70">
            From routine checkups to smile makeovers, our team offers a full
            range of dental services designed around your comfort.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.05}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border-2 border-brand-600 px-7 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { business, services } from "@/lib/business";
import { iconMap } from "@/lib/icons";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Dental Services",
  description: `Explore the full range of dental services offered by ${business.name}, from general and cosmetic dentistry to implants, Invisalign, and emergency care.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
            Our Services
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-brand-900 sm:text-5xl">
            Dental Care Designed Around You
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-800/70">
            Whether you&apos;re due for a cleaning or considering a full
            smile makeover, our team offers a complete range of services in
            one comfortable, modern office.
          </p>
        </div>
      </section>

      {/* Jump links */}
      <nav
        aria-label="Jump to service"
        className="border-y border-brand-100 bg-white py-4"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 sm:px-6 lg:px-8">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-full border border-brand-200 px-4 py-1.5 text-sm font-medium text-brand-700 transition hover:border-brand-500 hover:bg-brand-50"
            >
              {service.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-5xl divide-y divide-brand-100 px-4 sm:px-6 lg:px-8">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon];
          const reversed = i % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 py-16"
            >
              <AnimatedSection
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    {Icon && <Icon className="h-7 w-7" aria-hidden="true" />}
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-brand-900 sm:text-3xl">
                    {service.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-brand-800/80">
                    {service.description}
                  </p>
                  <Link
                    href="/book-appointment"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-coral-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-coral-500/30 transition hover:bg-coral-600"
                  >
                    Schedule Consultation
                  </Link>
                </div>

                <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-brand-700">
                    What to Expect
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-brand-800/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </section>
          );
        })}
      </div>

      <section className="bg-brand-900 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold">Not Sure Where to Start?</h2>
          <p className="mt-4 text-brand-200">
            Give us a call and our team will help point you toward the right
            treatment for your needs.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral-500/30 transition hover:bg-coral-600"
            >
              Book an Appointment
            </Link>
            <a
              href={`tel:${business.phone.href}`}
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white hover:text-brand-800"
            >
              Call {business.phone.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Phone, CheckCircle2 } from "lucide-react";
import { business } from "@/lib/business";
import AppointmentForm from "@/components/AppointmentForm";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: `Request an appointment at ${business.name}. Choose a service, pick a preferred date and time, and our team will confirm shortly.`,
};

const expectations = [
  "We'll confirm your appointment by phone or email within one business day.",
  "New patients: please arrive 10-15 minutes early to complete paperwork.",
  "Bring your insurance card and photo ID, if applicable.",
];

export default function BookAppointmentPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
            Book an Appointment
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-brand-900 sm:text-5xl">
            Let&apos;s Find You a Time
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-800/70">
            Request an appointment below, or call us directly if you need to
            be seen right away.
          </p>
          <a
            href={`tel:${business.phone.href}`}
            className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-brand-700 hover:text-brand-600"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {business.phone.display}
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <AnimatedSection direction="none" className="lg:col-span-3">
            <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm shadow-brand-900/5 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-brand-900">
                Appointment Request
              </h2>
              <p className="mt-2 text-sm text-brand-800/70">
                This is a request, not a confirmed booking — our team will
                follow up to lock in your exact time.
              </p>
              {/*
                TODO: Integrate a real scheduling tool here, e.g.:
                - Calendly inline embed (https://calendly.com)
                - NexHealth booking widget
                - Dentrix / practice management system API
                The form below currently only validates client-side.
              */}
              <div className="mt-6">
                <AppointmentForm />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2">
            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
              <h3 className="font-display text-lg font-semibold text-brand-900">
                What to Expect
              </h3>
              <ul className="mt-4 space-y-3">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-brand-800/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-coral-100 bg-coral-50 p-6">
              <h3 className="font-display text-lg font-semibold text-brand-900">
                Dental Emergency?
              </h3>
              <p className="mt-2 text-sm text-brand-800/80">
                If you&apos;re experiencing a dental emergency, please call us
                directly rather than submitting a request online.
              </p>
              <a
                href={`tel:${business.phone.href}`}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-coral-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-coral-500/30 transition hover:bg-coral-600"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {business.phone.display}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

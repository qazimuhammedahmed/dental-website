import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, Eye, Cpu, GraduationCap } from "lucide-react";
import { business, team } from "@/lib/business";
import AnimatedSection from "@/components/AnimatedSection";
import {
  DentistAvatarIllustration,
  OfficeExteriorIllustration,
  ReceptionIllustration,
  TreatmentRoomIllustration,
  TeamAtWorkIllustration,
  WhiteningIllustration,
  ImplantIllustration,
  AlignerIllustration,
  XrayIllustration,
} from "@/components/illustrations";

const dentalWork = [
  {
    Illustration: WhiteningIllustration,
    title: "Teeth Whitening",
    description: "Brighter, more confident smiles with professional-grade whitening.",
  },
  {
    Illustration: ImplantIllustration,
    title: "Dental Implants",
    description: "Durable, natural-looking replacements for missing teeth.",
  },
  {
    Illustration: AlignerIllustration,
    title: "Clear Aligners",
    description: "Discreet, comfortable teeth straightening with Invisalign.",
  },
  {
    Illustration: XrayIllustration,
    title: "Digital X-Rays",
    description: "Low-radiation digital imaging for precise, informed diagnoses.",
  },
];

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${business.name}, our mission, our team led by Dr. Hassan, and the values that guide every patient visit.`,
};

const values = [
  {
    icon: HeartHandshake,
    title: "Patient Comfort",
    description:
      "We take the time to explain every step and make sure you feel at ease before, during, and after treatment.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear explanations of treatment options and costs, so you can make informed decisions about your care.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "We invest in up-to-date equipment to make visits more efficient, precise, and comfortable.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
            About Us
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-brand-900 sm:text-5xl">
            Our Story &amp; Mission
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-800/70">
            {business.name} was built around a simple idea: dental visits
            should feel calm, welcoming, and straightforward. We combine
            modern technology with a genuinely caring team to make that
            happen for every patient who walks through our door.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection direction="none">
              {/* TODO: replace with a real headshot of Dr. Hassan */}
              <DentistAvatarIllustration className="mx-auto aspect-[3/4] w-full max-w-sm rounded-3xl border border-brand-200/60 shadow-sm shadow-brand-900/10" />
            </AnimatedSection>
            <AnimatedSection>
              <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
                Meet the Team
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
                {team.name}, {team.role}
              </h2>
              <p className="mt-5 leading-relaxed text-brand-800/80">{team.bio}</p>
              <ul className="mt-6 space-y-2">
                {team.credentials.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-brand-800/80">
                    <GraduationCap className="h-4 w-4 text-brand-500" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              {/* TODO: add bios/photos for additional doctors, hygienists, and front-office staff */}
              <p className="mt-6 text-sm italic text-brand-700/60">
                More about our supporting team coming soon.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-brand-50/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
              Our Values
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
              What Guides Our Care
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((value, i) => (
              <AnimatedSection
                key={value.title}
                delay={i * 0.08}
                className="rounded-2xl border border-brand-800 bg-brand-900 p-6 text-center shadow-sm shadow-brand-900/20"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-600">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-200">
                  {value.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
              Our Office
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
              A Calm, Modern Space
            </h2>
          </AnimatedSection>

          {/* TODO: replace these illustrations with real photos of the office interior, exterior signage, and equipment */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <figure className="overflow-hidden rounded-2xl border border-brand-100 shadow-sm shadow-brand-900/5">
              <OfficeExteriorIllustration className="aspect-square w-full" />
              <figcaption className="bg-white px-4 py-3 text-center text-sm font-medium text-brand-800">
                Office Exterior
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-brand-100 shadow-sm shadow-brand-900/5">
              <ReceptionIllustration className="aspect-square w-full" />
              <figcaption className="bg-white px-4 py-3 text-center text-sm font-medium text-brand-800">
                Reception &amp; Waiting Area
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-brand-100 shadow-sm shadow-brand-900/5">
              <TreatmentRoomIllustration className="aspect-square w-full" />
              <figcaption className="bg-white px-4 py-3 text-center text-sm font-medium text-brand-800">
                Treatment Room
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-brand-100 shadow-sm shadow-brand-900/5">
              <TeamAtWorkIllustration className="aspect-square w-full" />
              <figcaption className="bg-white px-4 py-3 text-center text-sm font-medium text-brand-800">
                Team at Work
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-brand-50/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
              Dental Work We Do
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
              A Snapshot of Our Care
            </h2>
          </AnimatedSection>

          {/* TODO: replace these illustrations with real before/after or in-treatment photos once available */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dentalWork.map(({ Illustration, title, description }, i) => (
              <AnimatedSection
                key={title}
                delay={i * 0.06}
                className="overflow-hidden rounded-2xl border border-brand-800 bg-brand-900 shadow-sm shadow-brand-900/20"
              >
                <Illustration className="aspect-square w-full" />
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-200">
                    {description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold">Ready to Visit Us?</h2>
          <p className="mt-4 text-brand-200">
            We&apos;d love to welcome you to the {business.shortName} family.
          </p>
          <div className="mt-8">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral-500/30 transition hover:bg-coral-600"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

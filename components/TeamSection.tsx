import { GraduationCap } from "lucide-react";
import { team } from "@/lib/business";
import ImagePlaceholder from "./ImagePlaceholder";
import AnimatedSection from "./AnimatedSection";

export default function TeamSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="none">
            {/* TODO: replace with a real headshot of Dr. Hassan */}
            <ImagePlaceholder
              label="Photo: Dr. Hassan headshot"
              aspect="portrait"
              className="mx-auto max-w-sm"
            />
          </AnimatedSection>

          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
              Meet Your Dentist
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
              {team.name}
            </h2>
            <p className="mt-2 text-brand-700">{team.role}</p>
            <p className="mt-5 leading-relaxed text-brand-800/80">{team.bio}</p>

            <ul className="mt-6 space-y-2">
              {team.credentials.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-brand-800/80">
                  <GraduationCap className="h-4 w-4 text-brand-500" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>

            {/* TODO: add bios/photos for additional doctors and hygienists as they join */}
            <p className="mt-6 text-sm italic text-brand-700/60">
              Additional team member bios coming soon.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

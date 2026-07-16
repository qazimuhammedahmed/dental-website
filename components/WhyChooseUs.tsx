import { whyChooseUs } from "@/lib/business";
import { iconMap } from "@/lib/icons";
import AnimatedSection from "./AnimatedSection";

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral-400">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Care That Fits Your Life
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedSection key={item.title} delay={i * 0.05} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-800 text-coral-400">
                  {Icon && <Icon className="h-7 w-7" aria-hidden="true" />}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-200">
                  {item.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesOverview from "@/components/ServicesOverview";
import TeamSection from "@/components/TeamSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import MapSection from "@/components/MapSection";
import AnimatedSection from "@/components/AnimatedSection";

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
    </>
  );
}

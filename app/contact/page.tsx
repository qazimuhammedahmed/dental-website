import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { business, hours } from "@/lib/business";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${business.name}. Call, message us, or stop by our office at ${business.address.full}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral-600">
            Contact Us
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-brand-900 sm:text-5xl">
            We&apos;d Love to Hear From You
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-800/70">
            Questions about a treatment, insurance, or scheduling? Send us a
            message or give us a call, we&apos;re happy to help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <AnimatedSection direction="none" className="lg:col-span-3">
            <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm shadow-brand-900/5 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-brand-900">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-brand-800/70">
                Fill out the form and our team will get back to you as soon
                as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
                <h3 className="font-display text-lg font-semibold text-brand-900">
                  Get in Touch
                </h3>
                <ul className="mt-4 space-y-4 text-sm text-brand-800/80">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                    <a
                      href={business.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-700"
                    >
                      {business.address.full}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                    <a href={`tel:${business.phone.href}`} className="hover:text-brand-700">
                      {business.phone.display}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                    {/* TODO: confirm real practice email address */}
                    <a href={`mailto:${business.email}`} className="hover:text-brand-700">
                      {business.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm shadow-brand-900/5">
                <h3 className="font-display text-lg font-semibold text-brand-900">
                  Office Hours
                </h3>
                {/* TODO: confirm exact hours with the practice before launch */}
                <table className="mt-4 w-full text-sm">
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day} className="border-b border-brand-50 last:border-0">
                        <th scope="row" className="py-2 text-left font-medium text-brand-800">
                          {h.day}
                        </th>
                        <td className="py-2 text-right text-brand-700/70">{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="overflow-hidden rounded-2xl border border-brand-100">
                <iframe
                  title={`Map showing ${business.name}`}
                  src={business.mapEmbedSrc}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

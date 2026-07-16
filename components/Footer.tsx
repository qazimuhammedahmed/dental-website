import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { business, hours, navLinks } from "@/lib/business";

// lucide-react no longer ships brand/logo icons, so Facebook and Instagram
// glyphs are inlined here as small SVGs.
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.5-1.46H16.5V4.34C16.24 4.3 15.36 4.22 14.34 4.22c-2.13 0-3.59 1.3-3.59 3.68V10.5H8.25v3H10.75V21h2.75Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-900 text-brand-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral-500 text-sm">
              CD
            </span>
            {business.shortName}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-200">
            {business.tagline}. Modern dental care for the whole family in the
            heart of Huntington Beach.
          </p>
          <div className="mt-5 flex gap-4">
            <a
              href={business.social.facebook}
              aria-label="Facebook"
              className="text-brand-200 hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={business.social.instagram}
              aria-label="Instagram"
              className="text-brand-200 hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-brand-300">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-brand-100 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book-appointment" className="text-brand-100 hover:text-white">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-brand-300">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-100">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral-400" aria-hidden="true" />
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {business.address.full}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-coral-400" aria-hidden="true" />
              <a href={`tel:${business.phone.href}`} className="hover:text-white">
                {business.phone.display}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-brand-300">
            Hours
          </h3>
          <ul className="mt-4 space-y-1.5 text-sm text-brand-100">
            {hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2">
                  {h.day === "Monday" && (
                    <Clock className="h-4 w-4 shrink-0 text-coral-400" aria-hidden="true" />
                  )}
                  <span className={h.day === "Monday" ? "" : "pl-6"}>{h.day}</span>
                </span>
                <span className="text-brand-300">{h.time}</span>
              </li>
            ))}
          </ul>
          {/* TODO: confirm exact hours with the practice before launch */}
        </div>
      </div>

      <div className="border-t border-brand-800 py-5 text-center text-xs text-brand-300">
        &copy; {new Date().getFullYear()} {business.name}. All rights reserved. This
        site is for marketing purposes only and does not constitute medical advice.
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { business, navLinks } from "@/lib/business";
import { LogoMark } from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-brand-800">
          <LogoMark className="h-10 w-10 shrink-0" />
          <span className="hidden sm:inline">{business.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                pathname === link.href ? "text-brand-700" : "text-brand-900/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${business.phone.href}`}
            className="flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-600"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phone.display}
          </a>
          <Link
            href="/book-appointment"
            className="rounded-full bg-coral-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-coral-500/30 transition hover:bg-coral-600"
          >
            Book an Appointment
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-800 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-brand-100 bg-white lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2.5 text-base font-medium ${
                  pathname === link.href
                    ? "bg-brand-50 text-brand-700"
                    : "text-brand-900/80 hover:bg-brand-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${business.phone.href}`}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-medium text-brand-700 hover:bg-brand-50"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {business.phone.display}
            </a>
            <Link
              href="/book-appointment"
              className="mt-2 rounded-full bg-coral-500 px-5 py-3 text-center text-base font-semibold text-white shadow-sm shadow-coral-500/30 transition hover:bg-coral-600"
            >
              Book an Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

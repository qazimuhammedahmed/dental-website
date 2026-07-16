# California Dental Group of Huntington Beach — Website

A modern, responsive marketing website for California Dental Group of
Huntington Beach, built with Next.js (App Router), TypeScript, Tailwind CSS,
and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `app/` — routes (Home, Services, About, Reviews, Contact, Book Appointment)
  plus `sitemap.ts` / `robots.ts`
- `components/` — shared UI (Header, Footer, forms, cards, animated sections)
- `lib/business.ts` — single source of truth for business info: name,
  address, phone, hours, services, testimonials, team
- `lib/schema.ts` — schema.org `Dentist`/`LocalBusiness` JSON-LD generator
- `public/images/` — placeholder images/graphics

## Content To Confirm Before Launch

Search the codebase for `TODO` comments — they mark everything that needs
real content before going live, including:

- Exact daily hours (`lib/business.ts`, currently Mon–Fri 9am–5pm placeholder)
- Real staff photos, bios, and credentials for Dr. Hassan and any other team members
- Insurance list
- Real office photos (exterior signage, interior, equipment) to replace the
  colored placeholder blocks
- Production domain (`siteUrl` in `lib/business.ts`) for SEO/Open Graph tags
- Real Google review link and business email address

## Backend Integrations (Not Yet Wired Up)

- **Contact form** (`components/ContactForm.tsx`) — validates client-side
  only. Wire up to Resend, Formspree, EmailJS, or a custom API route.
- **Appointment form** (`components/AppointmentForm.tsx`) — same as above;
  see the TODO comment for suggested scheduling integrations (Calendly
  embed, NexHealth, Dentrix).

## Deploying

This project is ready to deploy to [Vercel](https://vercel.com/new) with no
additional configuration.

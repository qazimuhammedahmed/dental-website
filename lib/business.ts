// Central source of truth for all business info used across the site.
// TODO: Confirm exact hours, insurance list, staff names/photos, and licensing
// info with the practice before launch, then update the values below.

export const business = {
  name: "California Dental Group of Huntington Beach",
  shortName: "California Dental Group",
  tagline: "Gentle, Modern Dentistry in Huntington Beach",
  description:
    "California Dental Group of Huntington Beach offers general, cosmetic, and family dentistry in a calm, modern office. Same-day appointments, friendly staff, and most insurance accepted.",
  address: {
    street: "16511 Goldenwest St Ste 108",
    city: "Huntington Beach",
    state: "CA",
    zip: "92647",
    full: "16511 Goldenwest St Ste 108, Huntington Beach, CA 92647",
  },
  phone: {
    display: "(714) 587-5587",
    href: "+17145875587",
  },
  email: "info@example.com", // TODO: confirm real practice email address
  category: "Dental Clinic",
  rating: 5.0,
  reviewCount: 25,
  googleMapsUrl: "https://maps.google.com/maps?q=california+dental+group+of+huntington+beach",
  // TODO: replace with the practice's real Google review link once confirmed
  googleReviewUrl: "https://maps.google.com/maps?q=california+dental+group+of+huntington+beach&hl=en",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=california+dental+group+of+huntington+beach&t=&z=15&ie=UTF8&iwloc=&output=embed",
  social: {
    facebook: "https://facebook.com", // TODO: add real social links
    instagram: "https://instagram.com",
    yelp: "https://yelp.com",
  },
} as const;

// TODO: confirm exact daily hours with the practice — placeholder default below.
export const hours = [
  { day: "Monday", time: "9:00 AM – 5:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 5:00 PM" },
  { day: "Thursday", time: "9:00 AM – 5:00 PM" },
  { day: "Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export type Service = {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    icon: "Stethoscope",
    shortDescription:
      "Routine checkups, cleanings, and preventive care to keep your smile healthy.",
    description:
      "Our general dentistry services focus on prevention and long-term oral health. Regular checkups and professional cleanings help catch small issues before they become bigger problems, keeping your smile healthy for years to come.",
    benefits: [
      "Comprehensive oral exams",
      "Professional cleanings",
      "Cavity detection and prevention",
      "Personalized home-care guidance",
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    icon: "Sparkles",
    shortDescription:
      "Veneers, bonding, and smile makeovers designed around your goals.",
    description:
      "From subtle enhancements to full smile makeovers, our cosmetic dentistry options are tailored to your unique goals. We take time to understand what you'd like to improve and design a plan that looks natural and fits your lifestyle.",
    benefits: [
      "Porcelain veneers",
      "Cosmetic bonding",
      "Smile design consultations",
      "Natural-looking results",
    ],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    icon: "Anchor",
    shortDescription:
      "A durable, natural-looking solution for replacing missing teeth.",
    description:
      "Dental implants offer a stable, long-term option for replacing one or more missing teeth. We walk you through the process step by step, from consultation to placement, so you know what to expect at every stage.",
    benefits: [
      "Natural look and feel",
      "Supports long-term jaw health",
      "Custom-fitted restorations",
      "Consultation-first approach",
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    icon: "Sun",
    shortDescription:
      "Professional whitening for a brighter, more confident smile.",
    description:
      "Our professional whitening treatments are designed to brighten your smile safely and effectively, with results that go beyond what over-the-counter products can achieve.",
    benefits: [
      "In-office and take-home options",
      "Dentist-supervised treatment",
      "Even, natural-looking brightness",
      "Fast, comfortable appointments",
    ],
  },
  {
    slug: "invisalign-orthodontics",
    name: "Invisalign / Orthodontics",
    icon: "Smile",
    shortDescription:
      "Straighten your teeth discreetly with clear aligner therapy.",
    description:
      "Clear aligner therapy offers a discreet way to straighten teeth and correct bite issues without traditional metal braces. We create a custom treatment plan and track your progress at every visit.",
    benefits: [
      "Clear, removable aligners",
      "Custom treatment planning",
      "Regular progress check-ins",
      "Discreet, comfortable fit",
    ],
  },
  {
    slug: "emergency-dental-care",
    name: "Emergency Dental Care",
    icon: "Siren",
    shortDescription:
      "Prompt attention for toothaches, breaks, and other urgent needs.",
    description:
      "Dental emergencies can happen at any time. Our team prioritizes urgent cases and works to see emergency patients as quickly as possible to relieve pain and address the issue.",
    benefits: [
      "Same-day emergency visits when available",
      "Pain relief and urgent treatment",
      "Clear guidance on next steps",
      "Caring, responsive team",
    ],
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    icon: "Baby",
    shortDescription:
      "Friendly, gentle dental care for your child's growing smile.",
    description:
      "We aim to make dental visits a positive experience for younger patients, with a friendly team and a comfortable environment that helps build healthy habits early on.",
    benefits: [
      "Gentle, kid-friendly approach",
      "Preventive care for growing smiles",
      "Guidance for parents on home care",
      "Comfortable, welcoming office",
    ],
  },
  {
    slug: "root-canal-therapy",
    name: "Root Canal Therapy",
    icon: "Activity",
    shortDescription:
      "Relieve pain and save your natural tooth with modern root canal care.",
    description:
      "Modern root canal therapy is far more comfortable than its reputation suggests. Our goal is to relieve pain and save your natural tooth whenever possible, using a gentle, thorough approach.",
    benefits: [
      "Pain relief and infection treatment",
      "Focus on saving the natural tooth",
      "Gentle, modern technique",
      "Clear explanation of every step",
    ],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  source?: string;
};

// Featured quotes are real Google review snippets provided by the practice.
// Additional placeholder reviews are marked below and should be swapped for
// real reviews as they come in.
export const testimonials: Testimonial[] = [
  {
    quote: "Great staff with great communication and service.",
    author: "Google Review",
    source: "Google",
  },
  {
    quote: "They are all caring and super friendly people.",
    author: "Google Review",
    source: "Google",
  },
  {
    quote:
      "Dr Hassan is so fast yet very thorough and detailed with his work.",
    author: "Google Review",
    source: "Google",
  },
  {
    // TODO: placeholder review — replace with a real patient review
    quote:
      "The office is spotless and modern, and I never feel like I'm waiting around. Highly recommend.",
    author: "Placeholder Patient",
    source: "Google",
  },
  {
    // TODO: placeholder review — replace with a real patient review
    quote:
      "I used to dread the dentist, but this team made me feel comfortable from the first visit.",
    author: "Placeholder Patient",
    source: "Google",
  },
  {
    // TODO: placeholder review — replace with a real patient review
    quote:
      "Booking was easy and they explained my treatment options clearly before starting anything.",
    author: "Placeholder Patient",
    source: "Google",
  },
];

export type WhyChooseUsItem = {
  icon: string;
  title: string;
  description: string;
};

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: "CalendarClock",
    title: "Same-Day Appointments",
    description: "Urgent needs don't wait, so neither do we when we can help it.",
  },
  {
    icon: "ShieldCheck",
    title: "Insurance Accepted",
    description: "We work with most major insurance plans to keep care accessible.",
  },
  {
    icon: "Microscope",
    title: "Modern Technology",
    description: "Up-to-date equipment for more comfortable, precise care.",
  },
  {
    icon: "HeartHandshake",
    title: "Friendly Staff",
    description: "A warm, welcoming team that treats you like family.",
  },
  {
    icon: "MapPin",
    title: "Convenient HB Location",
    description: "Easy-to-reach office right on Goldenwest St in Huntington Beach.",
  },
];

// TODO: confirm credentials/bio details and add additional staff as needed.
export const team = {
  name: "Dr. Hassan",
  role: "Lead Dentist",
  bio: "Dr. Hassan leads our clinical team with a fast, thorough, and detail-oriented approach to patient care. Patients consistently note how efficient and meticulous he is, without ever feeling rushed.",
  credentials: [
    "DDS", // TODO: confirm exact degree/credentials
    "Member, American Dental Association", // TODO: confirm memberships
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export const siteUrl = "https://california-dental-group-hb.example.com"; // TODO: replace with real production domain

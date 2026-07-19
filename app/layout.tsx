import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import { business, siteUrl } from "@/lib/business";
import { getLocalBusinessSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Dentist in Huntington Beach, CA`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: [
    "dentist Huntington Beach",
    "dental clinic Huntington Beach CA",
    "cosmetic dentistry",
    "dental implants",
    "Invisalign Huntington Beach",
    "emergency dentist Huntington Beach",
  ],
  openGraph: {
    title: `${business.name} | Dentist in Huntington Beach, CA`,
    description: business.description,
    url: siteUrl,
    siteName: business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        // TODO: replace with a real Open Graph photo (1200x630 JPG/PNG) once available
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Dentist in Huntington Beach, CA`,
    description: business.description,
    images: ["/images/og-cover.svg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <MotionConfig reducedMotion="user">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileCallButton />
        </MotionConfig>
      </body>
    </html>
  );
}

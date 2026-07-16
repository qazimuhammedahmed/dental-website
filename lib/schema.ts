import { business, hours, siteUrl } from "./business";

const dayMap: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

function openingHours() {
  return hours
    .filter((h) => h.time !== "Closed")
    .map((h) => {
      const [open, close] = h.time.split("–").map((t) => t.trim());
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${dayMap[h.day]}`,
        opens: to24Hour(open),
        closes: to24Hour(close),
      };
    });
}

function to24Hour(time: string) {
  const [raw, meridiem] = time.split(" ");
  const [hourStr, minuteStr] = raw.split(":");
  let hour = parseInt(hourStr, 10);
  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minuteStr}`;
}

// LocalBusiness / Dentist structured data for SEO rich results.
// TODO: confirm exact hours and add real geo coordinates once available.
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: business.name,
    image: `${siteUrl}/images/og-cover.svg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: business.phone.href,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
    openingHoursSpecification: openingHours(),
    hasMap: business.googleMapsUrl,
  };
}

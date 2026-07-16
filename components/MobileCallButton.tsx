import { Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function MobileCallButton() {
  return (
    <a
      href={`tel:${business.phone.href}`}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-coral-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-coral-600/40 transition hover:bg-coral-600 lg:hidden"
      aria-label={`Call ${business.name} now at ${business.phone.display}`}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      Call Now
    </a>
  );
}

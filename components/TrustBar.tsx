import { ShieldCheck, Clock3 } from "lucide-react";
import StarRating from "./StarRating";
import { business } from "@/lib/business";

export default function TrustBar() {
  return (
    <section className="border-y border-brand-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm font-semibold text-brand-800">
          <StarRating rating={business.rating} />
          <span>
            {business.rating.toFixed(1)} · {business.reviewCount} Google Reviews
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-brand-700/80">
          <ShieldCheck className="h-4 w-4 text-brand-500" aria-hidden="true" />
          Most insurance accepted
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-brand-700/80">
          <Clock3 className="h-4 w-4 text-brand-500" aria-hidden="true" />
          Same-day appointments available
        </div>
      </div>
    </section>
  );
}

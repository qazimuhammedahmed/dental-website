import { Star } from "lucide-react";
import clsx from "clsx";

type StarRatingProps = {
  rating?: number;
  className?: string;
  iconClassName?: string;
};

export default function StarRating({
  rating = 5,
  className,
  iconClassName,
}: StarRatingProps) {
  return (
    <div className={clsx("flex items-center gap-0.5", className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={clsx(
            "h-4 w-4",
            i < Math.round(rating) ? "fill-gold-400 text-gold-400" : "fill-brand-100 text-brand-100",
            iconClassName
          )}
        />
      ))}
    </div>
  );
}

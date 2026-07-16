import { ImageIcon } from "lucide-react";
import clsx from "clsx";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
};

const aspectClasses: Record<NonNullable<ImagePlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

// Simple colored placeholder used in place of real photography.
// Replace each usage with a real <Image> from public/images/ once
// real photos are available (see the `label` prop for what to shoot/use).
export default function ImagePlaceholder({
  label,
  className,
  aspect = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={clsx(
        "flex flex-col items-center justify-center gap-2 rounded-3xl border border-brand-200/60 bg-gradient-to-br from-brand-100 via-brand-50 to-coral-50 p-6 text-center shadow-inner",
        aspectClasses[aspect],
        className
      )}
    >
      <ImageIcon className="h-8 w-8 text-brand-400" strokeWidth={1.5} aria-hidden="true" />
      <span className="text-sm font-medium text-brand-700/80">{label}</span>
    </div>
  );
}

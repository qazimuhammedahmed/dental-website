import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { iconMap } from "@/lib/icons";
import type { Service } from "@/lib/business";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-brand-800 bg-brand-900 p-6 shadow-sm shadow-brand-900/20 transition hover:-translate-y-1 hover:border-brand-100 hover:bg-white hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
        {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-white transition group-hover:text-brand-900">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-200 transition group-hover:text-brand-800/70">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-coral-400 transition group-hover:text-coral-600">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}

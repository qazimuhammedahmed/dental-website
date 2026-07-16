"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
  as?: "div" | "section";
};

const buildVariants = (direction: "up" | "none"): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 24 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
});

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: AnimatedSectionProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      variants={buildVariants(direction)}
    >
      {children}
    </Component>
  );
}

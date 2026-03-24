"use client";

import { motion } from "framer-motion";
import { featureTextItemVariants } from "@/lib/feature-motion";

export default function FeatureTagRow({
  tags,
  prefersReducedMotion,
}: Readonly<{
  tags: string[];
  prefersReducedMotion: boolean | null;
}>) {
  return (
    <motion.div
      variants={featureTextItemVariants(prefersReducedMotion)}
      className="flex flex-wrap gap-2"
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-sm border border-neutral-200/90 bg-white/80 px-3 py-1 text-xs font-medium tracking-tight text-neutral-700 shadow-xs backdrop-blur-sm dark:border-neutral-700/80 dark:bg-neutral-900/80 dark:text-neutral-200"
        >
          {tag}
        </span>
      ))}
    </motion.div>
  );
}

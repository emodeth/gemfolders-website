"use client";

import { motion } from "framer-motion";
import {
  featureListContainerVariants,
  featureTextItemVariants,
} from "@/lib/feature-motion";
import {
  Bookmark,
  Layers,
  LayoutGrid,
  ListOrdered,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const checklistIcons: LucideIcon[] = [
  ListOrdered,
  Layers,
  Bookmark,
  LayoutGrid,
  Sparkles,
];

export default function FeatureChecklistBlock({
  items,
  prefersReducedMotion,
}: Readonly<{
  items: string[];
  prefersReducedMotion: boolean | null;
}>) {
  return (
    <motion.ul
      variants={featureListContainerVariants(prefersReducedMotion)}
      className="flex max-w-xl list-none flex-col gap-3.5 p-0"
    >
      {items.map((item, i) => {
        const Icon = checklistIcons[i % checklistIcons.length];
        return (
          <motion.li
            key={item}
            variants={featureTextItemVariants(prefersReducedMotion)}
            className="flex items-center gap-3"
          >
            <Icon className="size-4 text-neutral-600" strokeWidth={2} />
            <span className="text-neutral-600 text-[14px] font-medium leading-snug tracking-tight ">
              {item}
            </span>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

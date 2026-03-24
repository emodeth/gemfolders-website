"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  featureBlockViewport,
  featureMediaVariants,
  featureRowContainerVariants,
  featureTextColumnVariants,
  featureTextItemVariants,
} from "@/lib/feature-motion";
import Image from "next/image";
import {
  ArrowRight,
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

interface FeatureProps {
  title: React.ReactNode;
  description: string;
  mediaSrc: string;
  mediaType?: "image" | "video";
  alt?: string;
  reversed?: boolean;
  checklist?: string[];
  tags?: string[];
  mediaFit?: "contain" | "cover";
  mediaPosition?: "top" | "center" | "bottom" | "left" | "right";
  ctaLink?: string;
  ctaText?: string;
}

const Feature = ({
  title,
  description,
  mediaSrc,
  mediaType = "image",
  mediaFit = "cover",
  mediaPosition = "center",
  alt = "",
  reversed = false,
  checklist,
  tags,
  ctaLink,
  ctaText,
}: FeatureProps) => {
  const prefersReducedMotion = useReducedMotion();

  const positionClass = {
    top: "object-top",
    center: "object-center",
    bottom: "object-bottom",
    left: "object-left",
    right: "object-right",
  }[mediaPosition];

  return (
    <section className="overflow-hidden py-16 font-sans antialiased  dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className={`flex flex-col-reverse items-center gap-12 lg:items-center lg:gap-16 xl:gap-20 ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
          initial="hidden"
          whileInView="visible"
          viewport={featureBlockViewport}
          variants={featureRowContainerVariants(prefersReducedMotion)}
        >
          <motion.div
            className="w-full flex-1 text-left"
            variants={featureTextColumnVariants(prefersReducedMotion)}
          >
            <motion.h3
              variants={featureTextItemVariants(prefersReducedMotion)}
              className="mb-3 text-[28px] font-semibold tracking-tight md:leading-[1.15] dark:text-slate-100"
            >
              {title}
            </motion.h3>

            <motion.p
              variants={featureTextItemVariants(prefersReducedMotion)}
              className="mb-4 max-w-xl text-base font-medium leading-relaxed tracking-tighter text-neutral-600 dark:text-neutral-600"
            >
              {description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={featureMediaVariants(prefersReducedMotion)}
            className="relative isolate w-full max-w-xl flex-1 lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-2xl border-5 border-white/60 bg-white/55 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <div
                className={`relative bg-neutral-100 dark:bg-neutral-900 ${mediaFit === "contain" ? "min-h-[200px]" : "aspect-video"}`}
              >
                {mediaType === "video" ? (
                  <video
                    src={mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`block w-full  ${mediaFit === "contain" ? "h-auto object-contain" : "h-full object-cover"} ${positionClass}`}
                  />
                ) : (
                  <div className="relative h-full w-full min-h-[200px]">
                    <Image
                      src={mediaSrc}
                      alt={alt}
                      fill
                      className={`${mediaFit === "contain" ? "object-contain" : "object-cover"} ${positionClass}`}
                      unoptimized={mediaSrc.endsWith(".gif")}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;

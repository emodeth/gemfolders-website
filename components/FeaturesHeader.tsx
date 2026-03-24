"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  featureHeaderContainerVariants,
  featureHeaderItemVariants,
  featureHeaderViewport,
} from "@/lib/feature-motion";

const FeaturesHeader = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.header
      className="mx-auto flex max-w-2xl flex-col items-center px-6 pb-8 text-center text-balance lg:max-w-3xl lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={featureHeaderViewport}
      variants={featureHeaderContainerVariants(prefersReducedMotion)}
    >
      <motion.h2
        variants={featureHeaderItemVariants(prefersReducedMotion)}
        className="my-2 mb-4 text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-[62px] md:leading-[1.09]"
      >
        No more lost threads
      </motion.h2>
      <motion.p
        variants={featureHeaderItemVariants(prefersReducedMotion)}
        className="max-w-2xl px-2 text-[15px] tracking-tighter text-neutral-600 md:text-[24px]"
      >
        Your chats stay exactly where you need them—folders, bookmarks, and sync
        that fit how you work.
      </motion.p>
    </motion.header>
  );
};

export default FeaturesHeader;

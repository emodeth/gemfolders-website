"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import {
  heroBodyVariants,
  heroContainerVariants,
  heroCtaVariants,
  heroTitleContainerVariants,
  heroTitleLineVariants,
} from "@/lib/hero-motion";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/gemini-folders-bookmarks/dnlonnjaceadodcffgillnlkgfoaclfi";

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-20 md:pt-16 pb-0!">
      <motion.header
        className="mx-auto my-20 flex max-w-xl flex-col items-center text-center text-balance md:my-24"
        initial="hidden"
        animate="visible"
        variants={heroContainerVariants(prefersReducedMotion)}
      >
        <motion.h1
          variants={heroTitleContainerVariants(prefersReducedMotion)}
          className="my-2 mb-4 text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-[62px] md:leading-[1.09]"
        >
          <motion.span
            variants={heroTitleLineVariants(prefersReducedMotion)}
            className="inline-block"
          >
            Simple folders
          </motion.span>
          <br />
          <motion.span
            variants={heroTitleLineVariants(prefersReducedMotion)}
            className="inline-block"
          >
            for Gemini chats
          </motion.span>
        </motion.h1>

        <motion.p
          variants={heroBodyVariants(prefersReducedMotion)}
          className="max-2w-md px-2 text-[15px] text-neutral-600 md:text-[24px] tracking-tighter "
        >
          With Gemfolders your threads never get lost. Built for clarity, right
          inside your browser.
        </motion.p>

        <motion.div
          variants={heroCtaVariants(prefersReducedMotion)}
          className="mt-4 flex flex-col items-center"
        >
          <motion.a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-full bg-primary px-4 py-2 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            <Plus className="mr-1 size-3 shrink-0 stroke-3" aria-hidden />
            Add to Chrome
          </motion.a>
          <p className="mt-2 block text-xs text-neutral-500">
            Free · No credit card
          </p>
        </motion.div>
      </motion.header>
    </section>
  );
};

export default HeroSection;

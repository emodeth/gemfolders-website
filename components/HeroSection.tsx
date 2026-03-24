"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/gemini-folders-bookmarks/dnlonnjaceadodcffgillnlkgfoaclfi";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 md:pt-16">
      <header className="mx-auto my-20 flex max-w-xl flex-col items-center text-center text-balance md:my-24">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="my-2 mb-4 text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-[62px] md:leading-[1.09]"
        >
          <span className="inline-block">Simple folders</span>
          <br />
          <span className="inline-block">for Gemini chats</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="max-2w-md px-2 text-[15px] text-neutral-600 md:text-[24px] tracking-tighter "
        >
          With Gemfolders your threads never get lost. Built for clarity, right
          inside your browser.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 flex flex-col items-center"
        >
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-full bg-primary px-4 py-2 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            <Plus className="mr-1 size-3 shrink-0 stroke-3" aria-hidden />
            Add to Chrome
          </a>
          <p className="mt-2 block text-xs text-neutral-500">
            Free · No credit card
          </p>
        </motion.div>
      </header>
    </section>
  );
};

export default HeroSection;

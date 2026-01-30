"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-16 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-3 py-1 font-medium text-secondary transition-colors cursor-default whitespace-nowrap dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 text-xs sm:text-sm">
            The missing file manager for <span className="ml-1 font-semibold text-foreground">Gemini</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance"
        >
          Organize your Gemini
          <br className="hidden sm:block" />
          <span className="text-primary relative inline-block">
            conversations and ideas
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full hidden md:block"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.5C50 2.5 150 2.5 298 8.5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="opacity-60"
              />
            </svg>
          </span>
          <br className="hidden sm:block" />
          in one place
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-6 text-secondary text-lg md:text-xl font-medium max-w-2xl text-center mx-auto leading-relaxed"
        >
          Stop losing important threads. Gem Folders brings structure to your AI workflow with native folders, instant search, and bookmarks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <div className="">
            <Button as="a" href="#download" className="w-full sm:w-auto min-w-[235px] h-12 sm:h-14 text-lg sm:text-xl px-8 rounded-md shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all ">
              Try Gemfolders for Free
            </Button>
          </div>
          <p className="text-sm text-secondary/60 font-medium">
            No credit card needed
          </p>
        </motion.div>


      </div>
    </section>
  );
};

export default HeroSection;

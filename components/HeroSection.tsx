"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
        >
          A browser extension
          <br />
          to{" "}
          <span className="text-primary relative">
            organize your chats
            <svg
              className="absolute -bottom-2 left-0 w-full hidden md:block"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.5C50 2.5 150 2.5 298 8.5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="opacity-30"
              />
            </svg>
          </span>
          <br />
          in Gemini
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-5 text-secondary text-lg font-medium max-w-2xl text-center mx-auto "
        >
          Organize your Gemini conversations with folders, search, and bookmarks —
          <br />
          Seamlessly integrated into your browser.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button as="a" href="#download" className="text-2xl px-6 py-2.5 rounded-sm">
            Add to Browser
          </Button>

        </motion.div>


      </div>
    </section>
  );
};

export default HeroSection;

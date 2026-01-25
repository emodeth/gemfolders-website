"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
        >
          A browser extension to
          <br />
          <span className="text-primary relative inline-block">
            organize your chats
            <svg
              className="absolute -bottom-3 left-0 w-full hidden md:block"
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
          <br />
          in Gemini
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-5 text-secondary text-lg md:text-xl font-medium max-w-3xl text-center mx-auto "
        >
          Organize your Gemini conversations with folders, search, and bookmarks —
          <br />
          Seamlessly integrated into your browser.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button as="a" href="#download" className="w-full sm:w-auto min-w-[200px] h-12 sm:h-14 text-lg sm:text-xl px-8 rounded-sm">
            Add to Browser
          </Button>
          <Button variant="outline" className="w-full sm:w-auto min-w-[200px] h-12 sm:h-14 text-lg sm:text-xl px-8 rounded-sm gap-3 cursor-pointer">
            <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            Watch Demo
          </Button>
        </motion.div>


      </div>
    </section>
  );
};

export default HeroSection;

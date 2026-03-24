"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { closingSection } from "@/lib/data";
import { featureEase } from "@/lib/feature-motion";

const footerViewport = {
  once: true as const,
  amount: 0.38,
  margin: "0px 0px -10% 0px",
};

function footerContainerVariants(reducedMotion: boolean | null): Variants {
  if (reducedMotion) {
    return {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0, delayChildren: 0 },
      },
    };
  }
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04,
      },
    },
  };
}

function footerItemVariants(reducedMotion: boolean | null): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.2, ease: "easeOut" },
      },
    };
  }
  return {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.52, ease: featureEase },
    },
  };
}

export default function ClosingCtaFooter() {
  const reducedMotion = useReducedMotion();
  const { chromeStoreUrl } = closingSection;

  return (
    <motion.footer
      className="mx-auto my-24 flex max-w-2xl flex-col items-center px-6 text-center sm:my-32"
      variants={footerContainerVariants(reducedMotion)}
      initial="hidden"
      whileInView="visible"
      viewport={footerViewport}
    >
      <h2 className="my-4 text-balance text-3xl font-medium leading-none tracking-tight text-black sm:text-4xl md:text-[62px] dark:text-white">
        <motion.span
          variants={footerItemVariants(reducedMotion)}
          className="inline-block"
        >
          The smarter and
        </motion.span>{" "}
        <motion.span
          variants={footerItemVariants(reducedMotion)}
          className="inline-block"
        >
          simpler way to manage your folders.
        </motion.span>
      </h2>

      <motion.div
        variants={footerItemVariants(reducedMotion)}
        className="my-2 flex w-full flex-col items-center justify-center gap-2"
      >
        <motion.a
          href={chromeStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-1 rounded-full bg-primary px-5 py-2 text-[15px] font-bold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          Add to Chrome
          <ArrowRight className="size-3 shrink-0" strokeWidth={3} aria-hidden />
        </motion.a>
      </motion.div>

      <motion.div
        variants={footerItemVariants(reducedMotion)}
        className="mt-6 flex w-full flex-col items-center"
      >
        <div className="mt-2 flex w-full flex-wrap items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <Link
            href="/legal/terms"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-200"
          >
            Terms of service
          </Link>
          <span aria-hidden className="text-neutral-400 dark:text-neutral-500">
            •
          </span>
          <Link
            href="/legal/privacy"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-200"
          >
            Privacy Policy
          </Link>
        </div>
      </motion.div>
    </motion.footer>
  );
}

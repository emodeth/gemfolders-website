"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { socialProof, closingSection } from "@/lib/data";

const SocialProofSection = () => {
  return (
    <section
      aria-labelledby="social-proof-heading"
      className="relative overflow-hidden py-16 md:py-20"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            id="social-proof-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-[62px]"
          >
            {socialProof.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-base text-neutral-600 md:text-2xl"
          >
            {socialProof.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="mt-6 text-sm font-medium text-foreground"
          >
            <span className="text-neutral-500">{socialProof.statDetail}</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="mt-3"
          >
            <Link
              href={closingSection.chromeStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Read reviews on the Chrome Web Store
            </Link>
          </motion.div>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3"
        >
          {socialProof.testimonials.map((t, index) => (
            <li key={t.name}>
              <motion.figure
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.06 * index }}
                className="h-full rounded-2xl border border-neutral-200 bg-white p-6 text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <blockquote className="text-[15px] leading-relaxed text-neutral-700 dark:text-zinc-300">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-5 border-t border-neutral-100 pt-4 dark:border-zinc-800">
                  <span className="text-sm font-medium text-foreground">
                    {t.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-neutral-500 dark:text-zinc-500">
                    {t.role}
                  </span>
                </figcaption>
              </motion.figure>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default SocialProofSection;

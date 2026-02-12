"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ctaData } from "@/lib/data";
import { Gem } from "lucide-react";

const CTASection = () => {
  return (
    <section className="pt-16 pb-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center shadow-2xl md:px-12 md:py-20"
        >
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-10 pointer-events-none">
            <Gem strokeWidth={0.5} className="w-96 h-96 text-white rotate-12" />
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 opacity-10 pointer-events-none">
            <Gem strokeWidth={0.5} className="w-64 h-64 text-white -rotate-12" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl max-w-2xl">
              {ctaData.title}
            </h2>
            <p className="text-lg text-white/90 max-w-xl">
              {ctaData.description}
            </p>

            <div className="flex flex-col items-center gap-4 w-full">
              <Button
                as="a"
                href="https://chromewebstore.google.com/detail/gemini-folders-bookmarks/dnlonnjaceadodcffgillnlkgfoaclfi"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-white text-primary! hover:bg-white/90 font-bold text-base h-14 px-8 rounded-sm shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                {ctaData.buttonText}
              </Button>
              <p className="text-sm text-white/70">
                {ctaData.secondaryText}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

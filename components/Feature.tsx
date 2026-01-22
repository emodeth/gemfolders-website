"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  mediaSrc: string;
  mediaType?: "image" | "video";
  reversed?: boolean;
}

const Feature = ({
  title,
  description,
  mediaSrc,
  mediaType = "image",
  reversed = false,
}: FeatureProps) => {
  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl">
        <div
          className={`flex flex-col gap-12 lg:gap-20 items-center ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
        >
          <div className="flex-1 text-center lg:text-left space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: reversed ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-xl lg:max-w-none relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] -z-10" />

            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-card border border-border shadow-2xl shadow-black/10">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
              </div>

              <div className="relative aspect-[4/3] md:aspect-[16/10] bg-muted/20">
                {mediaType === "video" ? (
                  <video
                    src={mediaSrc}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={mediaSrc}
                      alt={title}
                      fill
                      className="object-cover"
                      unoptimized={mediaSrc.endsWith('.gif')}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

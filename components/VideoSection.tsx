"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  featureBlockViewport,
  featureMediaVariants,
} from "@/lib/feature-motion";

const VideoSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="demo" className="relative pb-16 pb-0!">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={featureBlockViewport}
          variants={featureMediaVariants(prefersReducedMotion)}
          className="relative isolate"
        >
          <div
            className={
              "relative overflow-hidden rounded-2xl border-6 border-white/60 bg-white/55"
            }
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <video
                src="/videos/gemfolders_video_hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

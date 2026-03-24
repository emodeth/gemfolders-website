"use client";

import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section id="demo" className="relative pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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

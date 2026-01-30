"use client";

import { motion } from "framer-motion";
const VideoSection = () => {

  return (
    <section id="demo" className="relative py-16 ">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-muted/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-card border border-border shadow-2xl shadow-black/10">

            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background text-muted-foreground text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>gemini.google.com</span>
                </div>
              </div>
            </div>

            <div className="relative bg-muted">
              <video
                src="/videos/gemfolders_video_hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

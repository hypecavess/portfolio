"use client";

import { motion } from "framer-motion";

export default function Now() {
  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-24 flex flex-col gap-6 z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col gap-3"
      >
        <h2 className="text-2xl font-medium">
          What I'm doing now
        </h2>
        <div className="flex flex-col gap-4 text-[var(--bar-text-dim)] text-[17px] leading-relaxed">
          <p>
            I am currently actively working on the <span className="text-[var(--foreground)] font-medium">charged</span> project. There are occasional delays because I can't dedicate my time to it consistently.
          </p>
          <p>
            Outside of coding, I work out and play FPS games. On the professional side, I'm also continuing my work on many new design systems and schematics.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

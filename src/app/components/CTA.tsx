"use client";

import { motion } from "framer-motion";
import ParticleButton from "./ParticleButton";

export default function CTA() {
  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-12 flex flex-col gap-12 z-10 relative mb-32">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center relative"
      >
        <ParticleButton text="hypecaves" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="flex items-center justify-center gap-8 text-[15px]"
      >
        <a href="https://instagram.com/hypecavess" target="_blank" rel="noopener noreferrer" className="text-[var(--bar-text-dim)] hover:text-[var(--foreground)] transition-colors">
          {new Date().getFullYear()} All rights reserved. Designed and coded by <span className="text-[var(--foreground)] font-medium">hypecaves</span>.
        </a>
      </motion.div>
    </div>
  );
}

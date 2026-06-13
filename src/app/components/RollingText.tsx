"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = [
  "Beyond software",
  "development,",
  "I am passionate",
  "about e-sports",
  "and fitness.",
  "I am the founder",
  "of my own",
  "software company,",
  "while also creating",
  "community-driven",
  "projects.",
  "I am open",
  "to project",
  "development and",
  "collaborations.",
  "Please check",
  "the page",
  "for connections."
];

export default function RollingText() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const anglePerLine = 12;
  const radius = 350;
  const totalRotation = lines.length * anglePerLine;

  const rotateX = useTransform(scrollYProgress, [0, 1], [-anglePerLine * 3, totalRotation + anglePerLine * 3]);

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full">
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none"
        style={{
          perspective: "1500px",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)"
        }}
      >
        <motion.div
          style={{
            rotateX,
            z: -radius,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {lines.map((text, i) => {
            const itemAngle = -i * anglePerLine;

            return (
              <div
                key={i}
                className="absolute left-0 right-0 flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--foreground)]"
                style={{
                  transform: `rotateX(${itemAngle}deg) translateZ(${radius}px)`,
                  transformOrigin: "center center",
                  backfaceVisibility: "hidden",
                  lineHeight: 1.1
                }}
              >
                {text}
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

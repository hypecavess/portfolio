"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeTransition() {
  const { revealOrigin, isTransitioning, theme } = useTheme();

  const overlayColor = theme === "dark" ? "#f7f7f9" : "#000000";

  let maxRadius = 2000;
  if (typeof window !== "undefined" && revealOrigin) {
    const distTopLeft = Math.hypot(revealOrigin.x, revealOrigin.y);
    const distTopRight = Math.hypot(window.innerWidth - revealOrigin.x, revealOrigin.y);
    const distBottomLeft = Math.hypot(revealOrigin.x, window.innerHeight - revealOrigin.y);
    const distBottomRight = Math.hypot(
      window.innerWidth - revealOrigin.x,
      window.innerHeight - revealOrigin.y
    );
    maxRadius = Math.max(distTopLeft, distTopRight, distBottomLeft, distBottomRight);
  }

  const size = maxRadius * 2;

  return (
    <AnimatePresence>
      {isTransitioning && revealOrigin && (
        <motion.div
          key="theme-reveal"
          initial={{
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            scale: {
              duration: 0.6,
              ease: [0.65, 0, 0.35, 1],
            },
            opacity: {
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          style={{
            position: "fixed",
            top: revealOrigin.y - size / 2,
            left: revealOrigin.x - size / 2,
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: overlayColor,
            zIndex: 99999,
            pointerEvents: "none",
            transformOrigin: "center center",
          }}
        />
      )}
    </AnimatePresence>
  );
}

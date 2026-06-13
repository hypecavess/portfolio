"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function GithubGrid() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-12 flex flex-col gap-8 z-10 relative">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-medium">
          Contributions
        </h2>
        <p className="text-[var(--bar-text-dim)] text-xl -mt-2">
          Daily coding activity on GitHub.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full overflow-hidden p-6 rounded-xl border border-[var(--bar-divider)] bg-[var(--glass-tint)] flex justify-center items-center"
      >
        {mounted ? (
          <GitHubCalendar
            username="hypecavess"
            colorScheme={theme === "dark" ? "dark" : "light"}
            fontSize={12}
            blockMargin={4}
            blockSize={11}
          />
        ) : (
          <div className="h-[120px] w-full flex items-center justify-center text-[var(--bar-text-dim)]">
            Loading
          </div>
        )}
      </motion.div>
    </div>
  );
}

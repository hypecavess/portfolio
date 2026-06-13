"use client";

import { motion } from "framer-motion";

type Project = {
  name: string;
  description: string;
  link: string;
  year: string;
  role: string;
};

const PROJECTS: Project[] = [
  {
    name: "portfolio",
    description: "Minimalist and dynamic personal website built with Next.js and Framer Motion.",
    link: "https://github.com/hypecavess/portfolio",
    year: "2026",
    role: "Solo"
  },
  {
    name: "nothinger",
    description: "Project development, hosting, and cloud-based project architecture company.",
    link: "https://nothinger.com",
    year: "2019 - present",
    role: "Founder & CEO"
  },
  {
    name: "charged",
    description: "Visually-based professional server management discord bot.",
    link: "https://chargedlnch.com",
    year: "2026 - present",
    role: "Founder"
  },
  {
    name: "osndot",
    description: "Is a modular command-line tool built for modern TypeScript projects.",
    link: "https://osndot.vercel.app",
    year: "2025 - 2026",
    role: "Founder & Co-Founder"
  },
  {
    name: "compiler",
    description: "A bytecode compiler and VM for the Fradual Compiler programming language",
    link: "https://github.com/hypecavess/compiler",
    year: "2024 - 2025",
    role: "Solo"
  }
];

export default function Projects() {
  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-32 flex flex-col gap-8 z-10 relative">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-medium">
          Selected Works
        </h2>
        <p className="text-[var(--bar-text-dim)] text-xl -mt-2">
          A few things I've built recently.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {PROJECTS.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-[var(--bar-divider)] bg-[var(--glass-tint)] hover:bg-[var(--bar-divider)] transition-colors"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h3 className="text-[var(--foreground)] font-medium text-base">
                  {project.name}
                </h3>
                <span className="text-[12px] px-2 py-0.5 rounded-full border border-[var(--bar-divider)] text-[var(--bar-text-dim)]">
                  {project.year}
                </span>
                <span className="text-[12px] px-2 py-0.5 rounded-full border border-[var(--bar-divider)] text-[var(--bar-text-dim)]">
                  {project.role}
                </span>
              </div>
              <p className="text-[var(--bar-text-dim)] text-sm">
                {project.description}
              </p>
            </div>

            <div className="text-[var(--bar-text-dim)] group-hover:text-[var(--foreground)] transition-colors opacity-0 group-hover:opacity-100 sm:opacity-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

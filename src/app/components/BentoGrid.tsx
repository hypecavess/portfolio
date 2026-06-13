"use client";

import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import HoverText from "./HoverText";

export default function BentoGrid() {
  const { theme } = useTheme();
  const iconFolder = theme === "light" ? "black" : "white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="w-full max-w-2xl flex flex-col gap-16 z-10 px-6"
    >

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
          <span style={{ fontFamily: 'var(--font-climate-crisis)' }}>
            <HoverText text="hypecaves" />
          </span>
        </h1>
        <p className="text-lg md:text-xl font-normal text-[var(--bar-text)] leading-relaxed font-sans max-w-lg">
          Full-Stack Software Engineer and UI/UX & Graphic Designer. Building scalable products, communities and digital experiences.
          <br />
          <br />
          <span style={{ color: 'rgba(0, 0, 0, 0.78)' }}>"Victories won without getting hurt have no story worth telling."</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[var(--bar-divider)] pt-12">

        <div className="flex flex-col gap-4">
          <h2 className="flex items-center gap-2 text-[13px] font-bold text-[var(--bar-text-muted)]">
            <img src={`/icons/${iconFolder}/elements.svg`} alt="" className="w-3.5 h-3.5 opacity-80" />
            Projects
          </h2>
          <ul className="flex flex-col gap-3 text-[var(--bar-text)] font-medium">
            <li>
              <a href="https://chargedlnch.com" target="_blank" rel="noreferrer" className="hover:text-[var(--bar-text-dim)] transition-colors">
                charged <span className="text-[var(--bar-text-muted)] font-normal text-sm block">Discord Application</span>
              </a>
            </li>
            <li>
              <a href="https://nothinger.com" target="_blank" rel="noreferrer" className="hover:text-[var(--bar-text-dim)] transition-colors">
                nothinger <span className="text-[var(--bar-text-muted)] font-normal text-sm block">Software Company</span>
              </a>
            </li>
            <li>
              <a href="https://osndot.vercel.app" target="_blank" rel="noreferrer" className="hover:text-[var(--bar-text-dim)] transition-colors">
                osndot <span className="text-[var(--bar-text-muted)] font-normal text-sm block">Dev Runtime CLI</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/hypecavess/compiler" target="_blank" rel="noreferrer" className="hover:text-[var(--bar-text-dim)] transition-colors">
                compiler <span className="text-[var(--bar-text-muted)] font-normal text-sm block">The Fradual compiler</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="flex items-center gap-2 text-[14px] font-bold text-[var(--bar-text-muted)]">
            <img src={`/icons/${iconFolder}/heart.svg`} alt="" className="w-3.5 h-3.5 opacity-80" />
            Socials
          </h2>
          <ul className="flex flex-col gap-3 text-[var(--bar-text)] font-medium">
            <li>
              <a href="https://instagram.com/hypecavess" target="_blank" rel="noreferrer" className="hover:text-[var(--bar-text-dim)] transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://x.com/hypecavess" target="_blank" rel="noreferrer" className="hover:text-[var(--bar-text-dim)] transition-colors">
                X (Twitter)
              </a>
            </li>
            <li>
              <a href="https://github.com/hypecavess" target="_blank" rel="noreferrer" className="hover:text-[var(--bar-text-dim)] transition-colors">
                Github
              </a>
            </li>
            <li>
              <a href="https://discord.com/users/1198654893758623755" target="_blank" rel="noreferrer" className="hover:text-[var(--bar-text-dim)] transition-colors">
                Discord
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="flex items-center gap-2 text-[14px] font-bold text-[var(--bar-text-muted)]">
            <img src={`/icons/${iconFolder}/play.svg`} alt="" className="w-3.5 h-3.5 opacity-80" />
            Favorite's
          </h2>
          <ul className="flex flex-col gap-3 text-[var(--bar-text)] font-medium">
            <li>Valorant</li>
            <li>Counter-Strike 2</li>
          </ul>
        </div>

      </div>
    </motion.div>
  );
}

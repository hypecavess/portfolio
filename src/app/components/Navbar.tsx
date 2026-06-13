"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverText from "./HoverText";

type NavLink = {
  name: string;
  href: string;
  desc?: string;
};

type NavColumn = {
  title: string;
  items: NavLink[];
};

type NavItem = {
  id: string;
  label: string;
  isLogo?: boolean;
  columns?: NavColumn[];
};

const NAV_ITEMS: NavItem[] = [
  { id: "logo", label: "hypecaves", isLogo: true },
  {
    id: "projects",
    label: "Projects",
    columns: [
      {
        title: "Founder & CEO's",
        items: [
          { name: "charged", desc: "Discord Application", href: "https://chargedlnch.com" },
          { name: "nothinger", desc: "Software Company", href: "https://nothinger.com" },
          { name: "osndot", desc: "Developer runtime CLI", href: "https://osndot.vercel.app" },
          { name: "compiler", desc: "The Fradual compiler", href: "https://github.com/hypecavess/compiler" }
        ]
      },
      {
        title: "Skills",
        items: [
          { name: "Web Development", href: "#technologies" },
          { name: "UI/UX Design", href: "#technologies" },
          { name: "Graphic Design", href: "#technologies" }
        ]
      }
    ]
  },
  {
    id: "socials",
    label: "Socials",
    columns: [
      {
        title: "Platforms",
        items: [
          { name: "Instagram", href: "https://instagram.com/hypecavess" },
          { name: "X (Twitter)", href: "https://x.com/hypecavess" },
          { name: "Github", href: "https://github.com/hypecavess" },
          { name: "Threads", href: "https://threads.net/@hypecavess" },
          { name: "Spotify", href: "https://open.spotify.com/user/31mbgjyfoigzvealhwo2bc4saokm?si=d3ad494eb525440f" }
        ]
      }
    ]
  },
  {
    id: "games",
    label: "Games",
    columns: [
      {
        title: "Currently Playing",
        items: [
          { name: "Valorant", href: "#" },
          { name: "Counter-Strike 2", href: "#" }
        ]
      },
      {
        title: "Interests",
        items: [
          { name: "E-sports", href: "#" },
          { name: "Fitness", href: "#" }
        ]
      }
    ]
  },
  {
    id: "contact",
    label: "Contact",
    columns: [
      {
        title: "Contact",
        items: [
          { name: "Email", href: "mailto:hypecaves@chargedlnch.com" },
          { name: "Discord", href: "https://discord.com/users/1198654893758623755" }
        ]
      }
    ]
  }
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeItem = NAV_ITEMS.find(item => item.id === activeMenu);

  return (
    <>
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-md"
            onMouseEnter={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-500 ${activeMenu
          ? "bg-[var(--background)]"
          : isScrolled
            ? "bg-[var(--background)]/80 backdrop-blur-xs"
            : "bg-transparent"
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between text-[12px] font-medium">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`h-full flex items-center cursor-pointer transition-colors ${item.isLogo
                ? "text-[var(--foreground)] font-bold text-lg tracking-tighter"
                : "text-[var(--bar-text-dim)] hover:text-[var(--foreground)]"
                }`}
              onMouseEnter={() => {
                if (item.columns) {
                  setActiveMenu(item.id);
                } else {
                  setActiveMenu(null);
                }
              }}
            >
              {item.isLogo ? <HoverText text={item.label} /> : item.label}
            </div>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{
            height: activeMenu ? "auto" : 0,
            opacity: activeMenu ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="overflow-hidden bg-[var(--background)]"
        >
          <div className="max-w-5xl mx-auto px-6 pt-10 pb-16">
            <AnimatePresence mode="wait">
              {activeItem && activeItem.columns && (
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                  className="flex gap-20"
                >
                  {activeItem.columns.map((col, idx) => (
                    <div key={idx} className="flex flex-col gap-5">
                      <h3 className="text-[11px] font-semibold text-[var(--bar-text-muted)]">
                        {col.title}
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {col.items.map((link, i) => (
                          <li key={i}>
                            <a
                              href={link.href}
                              className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--bar-text-dim)] transition-colors flex items-baseline gap-2 tracking-tight"
                            >
                              {link.name}
                              {link.desc && (
                                <span className="text-[12px] font-normal tracking-normal text-[var(--bar-text-muted)] block mt-1">
                                  {link.desc}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}

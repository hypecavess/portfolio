"use client";

import { useRef, useState } from "react";
import { LiquidGlass } from "@liquidglass/react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useLanyardWS } from "use-lanyard";

function IconPrevious() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-4.424l6.363 3.636c1.25.714 2.805-.189 2.805-1.628V9.605c0-1.44-1.555-2.343-2.805-1.628L11.999 11.612V7.189c0-1.44-1.555-2.343-2.805-1.628l-6.363 3.636a1.87 1.87 0 0 0 0 3.244l6.363 3.999z" />
    </svg>
  );
}

function IconPause() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

function IconNext() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.805 5.56c-1.25-.714-2.805.189-2.805 1.628v4.425L5.636 7.978C4.386 7.264 2.832 8.166 2.832 9.606v4.788c0 1.44 1.555 2.343 2.805 1.629L12 12.388v4.424c0 1.44 1.555 2.343 2.805 1.629l6.363-3.637a1.87 1.87 0 0 0 0-3.243L14.805 5.56z" />
    </svg>
  );
}

function IconSpotify() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.239.54-.959.72-1.56.3z" />
    </svg>
  );
}

function IconMoreHorizontal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function IconSun() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function NowPlayingBar() {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const themeButtonRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDark = theme === "dark";
  const DISCORD_ID = "1198654893758623755";
  const presence = useLanyardWS(DISCORD_ID);

  let title = "Fetching";
  let subtitle = "Data has been fetching";
  let imageUrl = "/loading.gif";

  if (presence && presence.discord_user) {
    if (presence.spotify) {
      title = presence.spotify.song;
      subtitle = presence.spotify.artist || "Unknown Artist";
      imageUrl = presence.spotify.album_art_url || "/loading.gif";
    } else {
      const activity = presence.activities?.find((a) => a.type !== 4);
      if (activity) {
        title = activity.name;
        subtitle = activity.details || activity.state || "Playing";

        const asset = activity.assets?.large_image;
        if (asset?.startsWith("mp:external/")) {
          imageUrl = `https://media.discordapp.net/external/${asset.replace("mp:external/", "")}`;
        } else if (asset && (activity as any).application_id) {
          imageUrl = `https://cdn.discordapp.com/app-assets/${(activity as any).application_id}/${asset}.png`;
        } else {
          imageUrl = `https://cdn.discordapp.com/avatars/${presence.discord_user.id}/${presence.discord_user.avatar}.png`;
        }
      } else {
        title = presence.discord_user.username || "Offline";

        const statusMap: Record<string, string> = {
          online: "Online",
          idle: "Idle",
          dnd: "Do Not Disturb",
          offline: "Offline"
        };
        subtitle = presence.discord_status ? (statusMap[presence.discord_status] || "Offline") : "Offline";

        if (presence.discord_user.avatar) {
          imageUrl = `https://cdn.discordapp.com/avatars/${presence.discord_user.id}/${presence.discord_user.avatar}.png`;
        } else {
          imageUrl = "/album-cover.png";
        }
      }
    }
  }

  const handleAirdropClick = () => {
    if (presence?.spotify?.track_id) {
      window.open(`https://open.spotify.com/track/${presence.spotify.track_id}`, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="fixed bottom-5 left-1/2 z-[9999] w-[94%] max-w-[720px]"
    >

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute bottom-[84px] right-[10%] bg-[var(--glass-tint)] border border-[var(--glass-border)] backdrop-blur-2xl p-1.5 rounded-2xl shadow-[0_10px_40px_rgb(0,0,0,0.2)] w-56 z-[10000] origin-bottom-right"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
          >
            <button
              className="w-full text-left flex items-center gap-3 px-3 py-2.5 text-[13px] font-semibold text-red-500 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              Report activity status
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full h-[72px] relative">
        <LiquidGlass
          borderRadius={24}
          blur={20}
          contrast={1.08}
          brightness={1.02}
          saturation={1.4}
          shadowIntensity={0.35}
          displacementScale={1.5}
          elasticity={0.5}
          zIndex={9999}
          className="w-full h-full flex items-center justify-between px-4 gap-2 relative transition-colors duration-500"
        >
          <div className="absolute inset-0 rounded-[24px] bg-[var(--glass-tint)] pointer-events-none transition-colors duration-500" />
          <div className="absolute inset-0 rounded-[24px] border border-[var(--glass-border)] pointer-events-none shadow-[inset_0_1px_0_var(--glass-shadow-top),inset_0_-1px_0_var(--glass-shadow-bottom)] transition-colors duration-500" />

          <div className="flex items-center gap-1 flex-shrink-0 relative z-10">
            <button
              className="flex items-center justify-center p-2 text-[var(--bar-text-dim)] hover:text-[var(--bar-text)] active:scale-90 transition-all duration-150 cursor-pointer"
              aria-label="Previous track"
              id="npb-prev"
            >
              <IconPrevious />
            </button>
            <button
              className="flex items-center justify-center p-1.5 text-[var(--bar-text)] hover:text-[var(--bar-text)] active:scale-90 transition-all duration-150 cursor-pointer"
              aria-label="Pause"
              id="npb-pause"
            >
              <IconPause />
            </button>
            <button
              className="flex items-center justify-center p-2 text-[var(--bar-text-dim)] hover:text-[var(--bar-text)] active:scale-90 transition-all duration-150 cursor-pointer"
              aria-label="Next track"
              id="npb-next"
            >
              <IconNext />
            </button>
          </div>

          <div className="w-px h-8 bg-[var(--bar-divider)] flex-shrink-0 relative z-10 transition-colors duration-500" />

          <div className="flex items-center gap-3 flex-1 min-w-0 relative z-10">
            <img
              src={imageUrl}
              alt={`${title} — ${subtitle}`}
              width={44}
              height={44}
              className="rounded-[8px] object-cover flex-shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.4)] w-[44px] h-[44px]"
            />
            <div className="flex flex-col min-w-0 gap-px">
              <span className="text-[13.5px] font-medium text-[var(--bar-text)] leading-tight whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-500">
                {title}
              </span>
              <span className="text-[11.5px] font-normal text-[var(--bar-text-muted)] leading-tight whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-500">
                {subtitle}
              </span>
            </div>

            <div className="flex items-center gap-0.5 ml-auto flex-shrink-0">
              <button
                className={`flex items-center justify-center p-2 transition-all duration-150 ${presence?.spotify
                  ? "text-[var(--foreground)] hover:scale-110 active:scale-95 cursor-pointer opacity-100"
                  : "text-[var(--bar-text-muted)] opacity-30 cursor-not-allowed pointer-events-none"
                  }`}
                aria-label="Spotify"
                id="npb-spotify"
                onClick={handleAirdropClick}
                disabled={!presence?.spotify}
              >
                <IconSpotify />
              </button>
              <button
                className="flex items-center justify-center p-2 text-[var(--bar-text-muted)] hover:text-[var(--bar-text-dim)] active:scale-90 transition-all duration-150 cursor-pointer"
                aria-label="More options"
                id="npb-more"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <IconMoreHorizontal />
              </button>
            </div>
          </div>

          <div className="w-px h-8 bg-[var(--bar-divider)] flex-shrink-0 relative z-10 transition-colors duration-500" />

          <div className="flex items-center gap-0.5 flex-shrink-0 relative z-10">
            <button
              className="flex items-center justify-center p-2 text-[var(--bar-text-dim)] hover:text-[var(--foreground)] active:scale-90 transition-all duration-150 cursor-pointer"
              aria-label="Github"
              id="npb-github"
              onClick={() => window.open("https://github.com/hypecavess/portfolio", "_blank")}
            >
              <IconGithub />
            </button>

            <button
              ref={themeButtonRef}
              className="flex items-center justify-center p-2 text-[var(--bar-text-dim)] hover:text-[var(--bar-text)] active:scale-90 transition-all duration-150 cursor-pointer overflow-hidden relative w-[36px] h-[36px]"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              id="npb-theme-toggle"
              onClick={() => toggleTheme(themeButtonRef)}
              disabled={isTransitioning}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ y: 20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute"
                  >
                    <IconSun />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: 20, opacity: 0, rotate: 90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute"
                  >
                    <IconMoon />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </LiquidGlass>
      </div>
    </motion.div>
  );
}

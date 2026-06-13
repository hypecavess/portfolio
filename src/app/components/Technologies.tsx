"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

type Technology = {
  name: string;
  slug?: string;
  darkInvert?: boolean;
  customSrc?: string;
  svgl?: string | { light: string; dark: string };
};

const TECHNOLOGIES: Technology[] = [
  { name: "JavaScript", svgl: "https://svgl.app/library/javascript.svg" },
  { name: "TypeScript", svgl: "https://svgl.app/library/typescript.svg" },
  { name: "React", svgl: { light: "https://svgl.app/library/react_light.svg", dark: "https://svgl.app/library/react_dark.svg" } },
  { name: "Next.js", slug: "nextdotjs", darkInvert: true },
  { name: "TailwindCSS", svgl: "https://svgl.app/library/tailwindcss.svg" },
  { name: "Node.js", svgl: "https://svgl.app/library/nodejs.svg" },
  { name: "PostgreSQL", svgl: "https://svgl.app/library/postgresql.svg" },
  { name: "VS Code", svgl: "https://svgl.app/library/vscode.svg" },
  { name: "Figma", svgl: "https://svgl.app/library/figma.svg" },
  { name: "WebStorm", slug: "webstorm" },
  { name: "Svelte", svgl: "https://svgl.app/library/svelte.svg" },
  { name: "Framer", svgl: { light: "https://svgl.app/library/framer.svg", dark: "https://svgl.app/library/framer_dark.svg" } },
  { name: "npm", svgl: "https://svgl.app/library/npm.svg" },
  { name: "pnpm", svgl: { light: "https://svgl.app/library/pnpm.svg", dark: "https://svgl.app/library/pnpm_dark.svg" } },
  { name: "Git", svgl: "https://svgl.app/library/git.svg" },
  { name: "GitHub", svgl: { light: "https://svgl.app/library/github_light.svg", dark: "https://svgl.app/library/github_dark.svg" } },
  { name: "Vercel", svgl: { light: "https://svgl.app/library/vercel.svg", dark: "https://svgl.app/library/vercel_dark.svg" } },
  { name: "MongoDB", svgl: { light: "https://svgl.app/library/mongodb-icon-light.svg", dark: "https://svgl.app/library/mongodb-icon-dark.svg" } },
  { name: "Firebase", svgl: "https://svgl.app/library/firebase.svg" },
  { name: "Brave", slug: "brave" },
  { name: "Windsurf", svgl: { light: "https://svgl.app/library/windsurf-light.svg", dark: "https://svgl.app/library/windsurf-dark.svg" } },
  { name: "Python", svgl: "https://svgl.app/library/python.svg" },
  { name: "Bash", svgl: { light: "https://svgl.app/library/bash.svg", dark: "https://svgl.app/library/bash_dark.svg" } },
  { name: "Lua", svgl: "https://svgl.app/library/lua.svg" },
  { name: "Docker", svgl: "https://svgl.app/library/docker.svg" },
  { name: "PyCharm", svgl: "https://svgl.app/library/pycharm.svg" },
  { name: "Fastify", svgl: { light: "https://svgl.app/library/fastify.svg", dark: "https://svgl.app/library/fastify_dark.svg" } },
  { name: "FastAPI", svgl: "https://svgl.app/library/fastapi.svg" },
  { name: "Cursor", svgl: { light: "https://svgl.app/library/cursor_light.svg", dark: "https://svgl.app/library/cursor_dark.svg" } },
  { name: "Claude Code", slug: "claude" },
  { name: "Supabase", svgl: "https://svgl.app/library/supabase.svg" },
  { name: "Redis", svgl: "https://svgl.app/library/redis.svg" },
  { name: "Upstash", svgl: "https://svgl.app/library/upstash.svg" },
  { name: "Strapi", svgl: "https://svgl.app/library/strapi.svg" },
  { name: "Clerk", slug: "clerk" },
  { name: "Authy", customSrc: "https://api.iconify.design/logos:authy.svg" },
  { name: "Antigravity", svgl: "https://svgl.app/library/antigravity.svg" },
  { name: "Zen Browser", svgl: { light: "https://svgl.app/library/zen-browser-light.svg", dark: "https://svgl.app/library/zen-browser-dark.svg" } }
];

export default function Technologies() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-32 flex flex-col gap-8 z-10 relative">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-medium">
          Technologies & Languages
        </h2>
        <p className="text-[var(--bar-text-dim)] text-xl -mt-2">
          The tools and languages I use to build digital experiences.
        </p>
      </div>

      <div id="technologies" className="flex flex-wrap gap-3">
        {TECHNOLOGIES.map((tech, index) => {
          const imgSrc = tech.svgl
            ? (typeof tech.svgl === 'string' ? tech.svgl : (isDark ? tech.svgl.dark : tech.svgl.light))
            : tech.customSrc || `https://cdn.simpleicons.org/${tech.slug}`;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.03, ease: "easeOut" }}
              className="flex items-center gap-2.5 px-4 py-2 text-[13px] font-medium border border-[var(--bar-divider)] rounded-lg text-[var(--bar-text)] bg-[var(--glass-tint)] hover:bg-[var(--bar-divider)] hover:text-[var(--foreground)] transition-colors cursor-default"
            >
              <img
                src={imgSrc}
                alt={tech.name}
                className="w-4 h-4"
                style={{ filter: isDark && tech.darkInvert && !tech.svgl ? "invert(1)" : "none" }}
              />
              {tech.name}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

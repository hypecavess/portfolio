const TECHNOLOGIES = [
  "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS", "Node.js", "PostgreSQL",
  "VS Code", "Figma", "WebStorm", "Svelte", "Framer", "npm", "pnpm", "Git", "GitHub",
  "Vercel", "MongoDB", "Firebase", "Brave", "Windsurf", "Python", "Bash", "Lua",
  "Docker", "PyCharm", "Fastify", "FastAPI", "Cursor", "Claude Code", "Supabase",
  "Redis", "Upstash", "Strapi", "Clerk", "Authy", "Antigravity", "Zen Browser"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono text-sm flex flex-col">
      <div className="max-w-[700px] w-full mx-auto px-4 flex-grow">

        <header className="h-[12.5rem] flex items-center fade-in">
          <div className="flex flex-col items-start">
            <img src="/hypecaves.png" alt="hypecaves" className="h-25 w-auto" />
          </div>
        </header>

        <section className="mb-12 fade-in delay-1">
          <p className="mb-4 text-[#666]">
            <span className="text-white">hypecaves</span> is a software engineer & designer from Türkiye.
          </p>
          <p className="mb-8 text-[#666]">
            Building scalable products, communities and digital experiences.
          </p>
        </section>

        <section className="mb-12 fade-in delay-2">
          <div className="flex justify-between items-baseline border-b border-[#333] pb-4 expertise-item">
            <div>
              <h2 className="font-normal text-white">nothinger</h2>
              <p className="text-[#666]">Founder & CEO</p>
            </div>
            <div className="text-[#666] flex items-center whitespace-nowrap gap-1">
              2016 - present
            </div>
          </div>

          <div className="flex justify-between items-baseline border-b border-[#333] pb-4 expertise-item">
            <div>
              <h2 className="font-normal text-white">charged</h2>
              <p className="text-[#666]">Founder</p>
            </div>
            <div className="text-[#666] flex items-center whitespace-nowrap">
              2026 - present
            </div>
          </div>

          <div className="flex justify-between items-baseline border-b border-[#333] pb-4 expertise-item">
            <div>
              <h2 className="font-normal text-white">osndot</h2>
              <p className="text-[#666]">Founder & Co-Founder</p>
            </div>
            <div className="text-[#666] flex items-center whitespace-nowrap">
              2025 - 2026
            </div>
          </div>

          <div className="flex justify-between items-baseline border-b border-[#333] pb-4 expertise-item">
            <div>
              <h2 className="font-normal text-white">compiler</h2>
              <p className="text-[#666]">Solo Developer</p>
            </div>
            <div className="text-[#666] flex items-center whitespace-nowrap">
              2025 - 2026
            </div>
          </div>

          <div className="flex justify-between items-baseline border-b border-[#333] pb-4 expertise-item">
            <div>
              <h2 className="font-normal text-white">portfolio</h2>
              <p className="text-[#666]">Solo Developer</p>
            </div>
            <div className="text-[#666] flex items-center whitespace-nowrap">
              2026
            </div>
          </div>
        </section>

        <section className="mb-12 fade-in delay-3">
          <h2 className="text-sm font-bold mb-4">Highlights</h2>
          <div className="flex justify-between items-baseline border-b border-[#333] pb-4 expertise-item">
            <div>
              <h3 className="font-normal text-white">nothinger</h3>
              <p className="text-[#666]">Software Development Company</p>
            </div>
            <a className="text-[#666] hover:text-white transition-colors" href="https://nothinger.com" target="_blank" rel="noreferrer">
              nothinger.com
            </a>
          </div>
          <div className="flex justify-between items-baseline border-b border-[#333] pb-4 expertise-item">
            <div>
              <h3 className="font-normal text-white">osndot</h3>
              <p className="text-[#666]">A Developer Runtime and CLI Platform</p>
            </div>
            <a className="text-[#666] hover:text-white transition-colors" href="https://osndot.vercel.app" target="_blank" rel="noreferrer">
              osndot.vercel.app
            </a>
          </div>
        </section>

        <section className="mb-12 fade-in delay-6">
          <h2 className="text-sm font-bold mb-4">Technologies & Stack</h2>
          <p className="mb-4 text-[#666]">
            Tools, frameworks, and languages I actively use to design and program scalable applications.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-12 text-[#666]">
            {TECHNOLOGIES.map((tech) => (
              <span key={tech} className="hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </section>

      </div>

      <footer className="w-full mt-8 h-auto py-8 sm:py-0 sm:h-[12.5rem] fade-in delay-6">
        <div className="max-w-[700px] w-full mx-auto px-4 h-full flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
            <a className="hover:text-gray-300 transition-colors" href="https://x.com/hypecavess" target="_blank" rel="noreferrer">𝕏</a>
            <a className="hover:text-gray-300 transition-colors" href="https://instagram.com/hypecavess" target="_blank" rel="noreferrer">Instagram</a>
            <a className="hover:text-gray-300 transition-colors" href="https://github.com/hypecavess" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-gray-300 transition-colors" href="https://www.threads.com/@hypecavess" target="_blank" rel="noreferrer">Threads</a>
            <a className="hover:text-gray-300 transition-colors" href="https://discord.com/users/1198654893758623755" target="_blank" rel="noreferrer">Discord</a>
          </div>
          <div className="text-[#666] text-center sm:text-right">Inspired by <a href="https://evilrabbit.com" target="_blank" rel="noreferrer">Evil Rabbit</a> © 2026</div>
        </div>
      </footer>
    </div>
  );
}

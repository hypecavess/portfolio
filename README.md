<div align="center">
  <br />
  <br />
  
  <h1 align="center">hypecaves — portfolio</h1>

  <p align="center">
    A minimal, highly-interactive, and ultra-high resolution personal portfolio built with Next.js and Framer Motion.
  </p>

  <p align="center">
    <a href="https://nextjs.org/">
      <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    </a>
    <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    </a>
    <a href="https://www.framer.com/motion/">
      <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    </a>
    <a href="https://typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
  </p>

  <br />
</div>

<hr />

## ✦ Overview

This repository contains the source code for my personal portfolio website. It is designed with a focus on minimalism, fluid animations, and a premium user experience. The project is fully open-source, so feel free to explore the code, learn from it, or use it as inspiration for your own projects.

<br />

## ✦ Key Features

- **Fluid Animations:** Comprehensive use of `framer-motion` for stagger entrance animations, rolling text, and smooth scroll effects.
- **View Transitions API:** A stunning, 60fps circular clip-path theme toggle (Dark/Light mode) powered by the native browser View Transitions API.
- **Ultra-High Resolution Canvas:** A custom-built particle destruction effect rendering text at pixel-perfect native device resolution (`devicePixelRatio`).
- **Live Discord Presence:** Real-time integration with `use-lanyard` to display my current Discord status, including a dynamic Spotify "Now Playing" music bar.
- **Interactive Bento Grid:** A modern, grid-based layout for showcasing projects, skills, and social links.
- **GitHub Contribution Graph:** Live rendering of daily coding activity utilizing `react-github-calendar`.

<br />

## ✦ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router), React 18 |
| **Styling** | TailwindCSS, Custom CSS Variables |
| **Animation** | Framer Motion, HTML5 Canvas API, View Transitions API |
| **Data Fetching** | Lanyard WS (WebSockets) |
| **Language** | TypeScript |

<br />

## ✦ Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/hypecavess/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br />

## ✦ Configuration

- **Discord Lanyard:** To show your own Discord activity, locate the `DISCORD_ID` variable in the `NowPlayingBar.tsx` component and replace it with your own Discord User ID.
- **GitHub Calendar:** Locate the `<GitHubCalendar username="..." />` component in `GithubGrid.tsx` and replace the username with your own GitHub handle.

<br />

## ✦ License

This project is open-source and available under the [MIT License](LICENSE). You are free to copy, modify, and use this project for your own personal or commercial works.

<div align="center">
  <br />
  <p>
    Built with 🖤 by <a href="https://github.com/hypecavess">hypecaves</a>.
  </p>
</div>

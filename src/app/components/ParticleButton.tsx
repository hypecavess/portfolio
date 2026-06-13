"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  color: string;
}

export default function ParticleButton({ text = "Let's build together" }: { text?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000 };

    const initCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = theme === "dark" ? "#ffffff" : "#000000";

      const rootStyle = getComputedStyle(document.documentElement);
      const gtWalsheim = rootStyle.getPropertyValue('--font-gt-walsheim').trim();
      const fontFamily = gtWalsheim || "system-ui, sans-serif";

      ctx.font = `500 86px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("hypecaves", rect.width / 2, rect.height / 2);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      particles = [];


      const step = Math.max(1, Math.floor(dpr));

      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const index = (y * canvas.width + x) * 4;
          const alpha = data[index + 3];
          if (alpha > 10) {
            particles.push({
              x: x / dpr,
              y: y / dpr,
              originX: x / dpr,
              originY: y / dpr,
              vx: 0,
              vy: 0,
              color: theme === "dark" ? `rgba(255, 255, 255, ${alpha / 255})` : `rgba(0, 0, 0, ${alpha / 255})`,
            });
          }
        }
      }
    };

    initCanvas();

    const draw = () => {
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const dpr = window.devicePixelRatio || 1;
      const step = Math.max(1, Math.floor(dpr));
      const size = (step / dpr) + 0.2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDistance = 80;
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force * 15;
          const pushY = Math.sin(angle) * force * 15;

          p.vx -= pushX;
          p.vy -= pushY;
        }

        p.vx += (p.originX - p.x) * 0.08;
        p.vy += (p.originY - p.y) * 0.08;

        p.vx *= 0.75;
        p.vy *= 0.75;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, size, size);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", initCanvas);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", initCanvas);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme, text]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[140px] flex items-center justify-center cursor-pointer"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      <span className="sr-only">{text}</span>
    </div>
  );
}

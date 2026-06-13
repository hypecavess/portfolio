"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (originRef?: React.RefObject<HTMLButtonElement | null>) => void;
  revealOrigin: { x: number; y: number } | null;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => { },
  revealOrigin: null,
  isTransitioning: false,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [revealOrigin, setRevealOrigin] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);

    if (theme === "dark") {
      root.style.setProperty("--background", "#000000");
      root.style.setProperty("--foreground", "#ededed");
    } else {
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#111111");
    }
  }, [theme]);

  const toggleTheme = useCallback(
    (originRef?: React.RefObject<HTMLButtonElement | null>) => {
      const nextTheme = theme === "dark" ? "light" : "dark";

      if (!document.startViewTransition) {
        setTheme(nextTheme);
        return;
      }

      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;

      if (originRef?.current) {
        const rect = originRef.current.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      setIsTransitioning(true);

      const transition = document.startViewTransition(() => {
        setTheme(nextTheme);
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
          {
            clipPath: clipPath,
          },
          {
            duration: 600,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });

      transition.finished.then(() => {
        setIsTransitioning(false);
      });
    },
    [theme]
  );

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, revealOrigin: null, isTransitioning }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

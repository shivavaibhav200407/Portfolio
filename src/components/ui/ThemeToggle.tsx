"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  onToggle?: (isDark: boolean) => void;
}

export default function ThemeToggle({ onToggle }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio_theme");
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      onToggle?.(false);
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      onToggle?.(true);
    }
  }, [onToggle]);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
      onToggle?.(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio_theme", "light");
      onToggle?.(false);
    }
  };

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full border border-cyber-border bg-cyber-surface/60 backdrop-blur-md" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-cyber-border bg-cyber-surface/80 p-1.5 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyber-elevated dark:border-cyber-border dark:bg-cyber-surface/80 dark:hover:border-cyan-400/60"
    >
      <div className="relative h-5 w-5">
        <Sun
          className={`absolute inset-0 h-5 w-5 text-amber-500 transition-all duration-500 ${
            isDark
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 h-5 w-5 text-cyan-400 transition-all duration-500 ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

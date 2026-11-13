"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  onToggle?: (isDark: boolean) => void;
  isDark?: boolean;
}

export default function ThemeToggle({ onToggle }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio_theme");
    if (saved) {
      const darkActive = saved === "dark";
      setIsDark(darkActive);
      if (darkActive) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      onToggle?.(darkActive);
    } else {
      // Follow visitor's device setting by default
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(systemDark);
      if (systemDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      onToggle?.(systemDark);
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
    return <div className="h-9 w-9 rounded-full border border-slate-200 dark:border-white/10 bg-transparent" />;
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to Ocean Blue light theme" : "Switch to Neon Red dark theme"}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 border-slate-200 bg-white/80 hover:border-sky-500 hover:shadow-[0_0_15px_rgba(2,132,199,0.25)] dark:border-white/10 dark:bg-[#0A0A0A] dark:hover:border-[#FF1E27]/60 dark:hover:shadow-[0_0_15px_rgba(255,30,39,0.25)]"
      title={isDark ? "Switch to Ocean Blue light theme" : "Switch to Neon Red dark theme"}
    >
      <div className="relative h-4 w-4">
        {/* Sun Icon for Light Mode */}
        <Sun
          className={`absolute inset-0 h-4 w-4 text-sky-600 transition-all duration-500 ${
            isDark
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        {/* Moon Icon for Dark Mode */}
        <Moon
          className={`absolute inset-0 h-4 w-4 text-[#FF3843] transition-all duration-500 ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}

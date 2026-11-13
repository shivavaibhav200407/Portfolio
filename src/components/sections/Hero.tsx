"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail, Sparkles, Image as ImageIcon } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";
import { PROFILE } from "@/data/profile";

interface HeroProps {
  onToggleTheme?: (dark: boolean) => void;
  onOpenTerminal?: () => void;
  isDark?: boolean;
}

export default function Hero({ onToggleTheme, onOpenTerminal, isDark = true }: HeroProps) {
  const toggleTheme = () => {
    const nextDark = !isDark;
    if (onToggleTheme) onToggleTheme(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio_theme", "light");
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center px-4 pt-28 pb-16 sm:px-8 overflow-hidden transition-colors duration-500">
      {/* Background Ambience (Rain / Matrix particles for dark, soft architectural grid for light) */}
      <div className="pointer-events-none absolute inset-0 bg-grid-ambient opacity-60" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[160px] bg-sky-400/[0.08] dark:bg-[#FF1E27]/[0.08]" />

      <div className="mx-auto w-full max-w-5xl relative z-10 flex flex-col items-center text-center">
        {/* Minimal Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md mb-8 border-slate-200/80 bg-white/80 text-slate-800 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(2,132,199,0.8)] dark:bg-[#FF1E27] dark:shadow-[0_0_8px_#FF1E27]" />
          <span className="font-mono text-xs tracking-wider">
            {PROFILE.location} · 3rd Year B.Tech CSE (AI & ML)
          </span>
        </motion.div>

        {/* Massive Editorial Name with Integrated Celestial Sun/Moon Toggle (Referral Site Haute Dev Style) */}
        <div className="relative select-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-normal tracking-tight leading-[0.88] text-slate-900 dark:text-white"
          >
            SHIVA
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center gap-2 sm:gap-4 font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-normal tracking-tight leading-[0.88] text-slate-900 dark:text-white"
          >
            <span>V</span>
            <span>A</span>
            <span>I</span>
            <span>B</span>
            <span>H</span>

            {/* The Celestial Sun / Moon Toggle in the name */}
            <button
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle Light and Dark Mode"
              className="relative inline-flex items-center justify-center mx-1 sm:mx-2 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full border transition-transform duration-300 hover:scale-110 active:scale-95 border-sky-400/50 bg-sky-50 text-sky-600 shadow-[0_0_20px_rgba(2,132,199,0.25)] dark:border-[#FF1E27]/50 dark:bg-black/90 dark:text-[#FF1E27] dark:shadow-[0_0_25px_rgba(255,30,39,0.35)]"
              data-cursor="theme"
            >
              {isDark ? (
                /* Glowing Moon in Dark Mode */
                <span className="relative flex items-center justify-center">
                  <svg className="h-6 w-6 sm:h-10 sm:w-10 fill-current" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  <span className="absolute -inset-1 rounded-full bg-[#FF1E27]/20 blur-sm pointer-events-none" />
                </span>
              ) : (
                /* Radiant Sun with Rays in Light Mode */
                <span className="relative flex items-center justify-center">
                  <svg className="h-6 w-6 sm:h-10 sm:w-10 stroke-current fill-none stroke-2 animate-sun-rays" viewBox="0 0 24 24">
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
                  <span className="absolute -inset-1 rounded-full bg-sky-400/20 blur-sm pointer-events-none" />
                </span>
              )}
            </button>

            <span>V</span>
          </motion.div>
        </div>

        {/* Minimal Subtitle / Role (Honest, direct, human) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 font-serif italic text-lg sm:text-2xl text-slate-700 dark:text-slate-300 tracking-wide"
        >
          {PROFILE.role}
        </motion.p>

        {/* Minimal Bio Copy (Transparent about learning Python and using AI tools) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 font-sans"
        >
          {PROFILE.tagline}
        </motion.p>

        {/* Honest Academic & Role Facts */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs text-slate-500 dark:text-slate-400"
        >
          <span className="px-2.5 py-1 rounded-md border border-slate-200/70 bg-slate-50/50 dark:border-white/5 dark:bg-white/[0.02]">
            CGPA 8.02
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="px-2.5 py-1 rounded-md border border-slate-200/70 bg-slate-50/50 dark:border-white/5 dark:bg-white/[0.02]">
            SITS Hyderabad (Graduating 2028)
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="px-2.5 py-1 rounded-md border border-slate-200/70 bg-slate-50/50 dark:border-white/5 dark:bg-white/[0.02]">
            SAGE AI Tutor Lead
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="px-2.5 py-1 rounded-md border border-sky-200 bg-sky-50 text-sky-700 dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF4D55]">
            Looking for Internship
          </span>
        </motion.div>

        {/* Clean Editorial Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            href="#work"
            dataCursor="view"
            className="group rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 border-sky-600 bg-sky-600 text-white hover:bg-sky-700 hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] dark:border-[#FF1E27] dark:bg-[#FF1E27] dark:text-white dark:hover:bg-[#FF3843] dark:hover:shadow-[0_0_20px_rgba(255,30,39,0.5)]"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Selected Work</span>
            </span>
          </MagneticButton>

          <MagneticButton
            href="#posters"
            dataCursor="view"
            className="rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-wider transition-all duration-300 border-slate-300 bg-white text-slate-800 hover:border-sky-500 hover:text-sky-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:border-white/25 dark:hover:text-white"
          >
            <span className="flex items-center gap-2">
              <ImageIcon className="h-3.5 w-3.5" />
              <span>Poster Gallery</span>
            </span>
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-wider transition-all duration-300 border-slate-300 bg-white text-slate-800 hover:border-sky-500 hover:text-sky-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-[#FF1E27]/50 dark:hover:text-[#FF3843]"
          >
            <span className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <span>Contact</span>
            </span>
          </MagneticButton>

          <a
            href={PROFILE.contact.resumePath}
            download
            className="rounded-full border px-5 py-3 font-mono text-xs uppercase tracking-wider transition-all duration-300 border-slate-200/80 bg-slate-100/80 text-slate-600 hover:text-slate-900 dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-400 dark:hover:text-white"
          >
            <span className="flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Down Scroll Cue */}
      <div className="mx-auto mt-12 hidden sm:flex items-center justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-slate-400 hover:text-sky-600 dark:text-slate-500 dark:hover:text-[#FF1E27] transition-colors"
        >
          <span>Scroll</span>
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
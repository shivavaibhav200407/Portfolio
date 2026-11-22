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
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 pt-28 pb-16 sm:px-8 overflow-hidden transition-colors duration-500">
      {/* Background Ambience: Subtle soft blue glow in light, deep neon red in dark */}
      <div className="pointer-events-none absolute inset-0 bg-grid-ambient opacity-60" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[160px] bg-blue-500/[0.07] dark:bg-[#FF1E27]/[0.08]" />

      <div className="mx-auto w-full max-w-5xl relative z-10 flex flex-col items-center text-center">
        {/* Minimal Status Pill (No location at the top) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md mb-8 border-[#DCE6F7] bg-white text-[#0B1B3A] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.8)] dark:bg-[#FF1E27] dark:shadow-[0_0_8px_#FF1E27]" />
          <span className="font-mono text-xs tracking-wider">
            3rd Year B.Tech CSE (AI &amp; ML)
          </span>
        </motion.div>

        {/* Massive Editorial Name in Bricolage Grotesque */}
        <div className="relative select-none text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[130px] font-extrabold tracking-tight leading-[0.95] text-[#0B1B3A] dark:text-white"
          >
            SHIVA
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[130px] font-extrabold tracking-tight leading-[0.95] text-[#0B1B3A] dark:text-white"
          >
            VAIBHAV
          </motion.h1>
        </div>

        {/* Minimal Subtitle / Role (Honest, direct, human) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 font-sans font-medium text-lg sm:text-2xl text-[#5B6B8C] dark:text-slate-300 tracking-wide"
        >
          {PROFILE.role}
        </motion.p>

        {/* Minimal Bio Copy in DM Sans */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#5B6B8C] dark:text-slate-400 font-sans"
        >
          {PROFILE.tagline}
        </motion.p>

        {/* Honest Academic & Role Facts in Light Blue Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs text-[#5B6B8C] dark:text-slate-400"
        >
          <span className="px-3 py-1 rounded-md border border-[#DBEAFE] bg-[#EAF2FF] text-[#0B1B3A] dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300">
            CGPA 8.02
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="px-3 py-1 rounded-md border border-[#DBEAFE] bg-[#EAF2FF] text-[#0B1B3A] dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300">
            SITS (Graduating 2028)
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="px-3 py-1 rounded-md border border-[#DBEAFE] bg-[#EAF2FF] text-[#0B1B3A] dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300">
            SAGE AI Tutor Lead
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="px-3 py-1 rounded-md border border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] font-semibold dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF4D55]">
            Looking for Internship
          </span>
        </motion.div>

        {/* Clean Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            href="#work"
            dataCursor="view"
            className="group rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 border-[#2563EB] bg-[#2563EB] text-white hover:bg-[#1D4ED8] hover:shadow-[0_4px_20px_rgba(37,99,235,0.35)] dark:border-[#FF1E27] dark:bg-[#FF1E27] dark:text-white dark:hover:bg-[#FF3843] dark:hover:shadow-[0_0_20px_rgba(255,30,39,0.5)]"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Selected Work</span>
            </span>
          </MagneticButton>

          <MagneticButton
            href="#posters"
            dataCursor="view"
            className="rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-wider transition-all duration-300 border-[#DCE6F7] bg-white text-[#0B1B3A] hover:border-[#2563EB] hover:text-[#2563EB] shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:border-white/25 dark:hover:text-white"
          >
            <span className="flex items-center gap-2">
              <ImageIcon className="h-3.5 w-3.5" />
              <span>Poster Gallery</span>
            </span>
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-wider transition-all duration-300 border-[#DCE6F7] bg-white text-[#0B1B3A] hover:border-[#2563EB] hover:text-[#2563EB] shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-[#FF1E27]/50 dark:hover:text-[#FF3843]"
          >
            <span className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <span>Contact</span>
            </span>
          </MagneticButton>

          <a
            href={PROFILE.contact.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            download="A_Shiva_Vaibhav_Resume.pdf"
            className="rounded-full border px-5 py-3 font-mono text-xs uppercase tracking-wider transition-all duration-300 border-[#DCE6F7] bg-[#EAF2FF] text-[#0B1B3A] hover:border-[#2563EB] hover:text-[#2563EB] dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-400 dark:hover:text-white"
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
          className="flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-[#5B6B8C] hover:text-[#2563EB] dark:text-slate-500 dark:hover:text-[#FF1E27] transition-colors"
        >
          <span>Scroll</span>
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
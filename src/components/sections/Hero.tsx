"use client";

import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Palette, Mail, Terminal as TerminalIcon } from "lucide-react";
import KineticText from "@/components/effects/KineticText";
import MagneticButton from "@/components/effects/MagneticButton";
import { PROFILE } from "@/data/profile";

interface HeroProps {
  onOpenTerminal?: () => void;
  isDark?: boolean;
}

export default function Hero({ onOpenTerminal, isDark = true }: HeroProps) {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center px-4 pt-28 pb-14 sm:px-8 overflow-hidden bg-white text-slate-900 dark:bg-black dark:text-white transition-colors duration-500">
      {/* Soft Ambient Radial Glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full blur-[180px] bg-sky-400/[0.09] dark:bg-[#FF1E27]/[0.07]" />

      <div className="mx-auto w-full max-w-5xl relative z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 backdrop-blur-md mb-6 border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(2,132,199,0.8)] dark:bg-[#FF1E27] dark:shadow-[0_0_8px_#FF1E27]" />
          <span className="font-mono text-xs font-medium">
            {PROFILE.name} • {PROFILE.education.degree} • {PROFILE.education.institution}
          </span>
        </motion.div>

        {/* Big Kinetic Tech Headline */}
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.08] max-w-4xl">
          <KineticText
            text={PROFILE.tagline}
            highlightWords={["autonomous", "AI", "bold", "experiences."]}
            highlightClass={
              isDark
                ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#FF3843]"
                : "text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-sky-600"
            }
            delay={0.04}
          />
        </h1>

        {/* Short, Confident Human Copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed font-sans text-slate-600 dark:text-slate-300"
        >
          Team Lead for <span className="font-semibold text-slate-900 dark:text-white">SAGE</span> (college multi-agent AI tutor) and <span className="font-semibold text-sky-600 dark:text-[#FF3843]">Chief Designer & Disciplinary Head at S.A.C.C</span>. Open for internships!
        </motion.p>

        {/* Professional Magnetic Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <MagneticButton
            href="#sage"
            dataCursor="explore"
            className="group rounded-xl border px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 border-sky-600 bg-sky-600 text-white hover:bg-sky-700 hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] dark:border-[#FF1E27]/50 dark:bg-black dark:text-white dark:hover:border-[#FF1E27] dark:hover:bg-[#FF1E27] dark:hover:text-black dark:hover:shadow-[0_0_20px_rgba(255,30,39,0.4)]"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Explore SAGE Project</span>
            </div>
          </MagneticButton>

          <MagneticButton
            href="#posters"
            dataCursor="view"
            className="group rounded-xl border px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-500 hover:text-sky-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"
          >
            <span className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-slate-500 dark:text-slate-400 group-hover:text-current" />
              <span>College Posters</span>
            </span>
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="rounded-xl border px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 border-slate-200 bg-white text-slate-700 hover:border-sky-500 hover:text-sky-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-[#FF1E27]/50 dark:hover:text-[#FF3843]"
          >
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </span>
          </MagneticButton>

          {onOpenTerminal && (
            <MagneticButton
              onClick={onOpenTerminal}
              className="rounded-xl border px-4 py-3 font-mono text-xs transition-all border-slate-200 bg-slate-50 text-slate-600 hover:border-sky-500 hover:text-sky-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:text-white dark:hover:border-white/20"
            >
              <span className="flex items-center gap-1.5">
                <TerminalIcon className="h-3.5 w-3.5" />
                <span>CLI</span>
              </span>
            </MagneticButton>
          )}
        </motion.div>

        {/* Compact Clean Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs"
        >
          {[
            { label: "Academic Record", val: `${PROFILE.education.cgpa} CGPA`, sub: "SITS Hyderabad" },
            { label: "Team Project", val: "4-Member Lead", sub: "SAGE AI Engine" },
            { label: "Design Role", val: "Chief Designer", sub: "S.A.C.C Council" },
            { label: "Status", val: "Available", sub: "Summer Internships" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border p-3.5 backdrop-blur-md transition-all border-slate-200 bg-slate-50/70 hover:border-sky-400/50 dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-white/10"
            >
              <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">{item.label}</span>
              <div className="text-base font-bold font-display mt-0.5 text-slate-900 dark:text-white">
                {item.val}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Down Scroll */}
      <div className="mx-auto mt-10 hidden sm:flex items-center justify-center">
        <a
          href="#sage"
          className="flex flex-col items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-slate-400 hover:text-sky-600 dark:text-slate-500 dark:hover:text-white transition-colors"
        >
          <span>Scroll</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-sky-500 dark:text-slate-400" />
        </a>
      </div>
    </section>
  );
}

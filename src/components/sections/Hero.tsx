"use client";

import { motion } from "framer-motion";
import { ArrowDown, Terminal as TerminalIcon, Sparkles, BookOpen, Palette, Download, Mail } from "lucide-react";

interface HeroProps {
  onOpenTerminal?: () => void;
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 pt-28 pb-16 sm:px-8 overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/15" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px] dark:bg-blue-600/15" />

      <div className="mx-auto w-full max-w-5xl relative z-10">
        {/* Student Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/20 px-3.5 py-1.5 backdrop-blur-md mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
          <span className="font-mono text-xs font-medium text-cyan-300">
            B.Tech CSE (AI & ML) Student • SITS Hyderabad (Expected 2028)
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1] text-slate-100"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
            Shiva Vaibhav
          </span>
          . <br />
          <span className="text-slate-300 font-bold text-3xl sm:text-5xl lg:text-6xl">
            Learning AI & Designing for College.
          </span>
        </motion.h1>

        {/* Real, Honest Student Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-slate-300"
        >
          I am a B.Tech student learning <span className="text-cyan-300 font-medium">Python & AI</span>. I led a 4-member team to build <span className="text-cyan-300 font-medium">SAGE</span> (an AI tutoring engine that helps students study 25+ engineering courses), and I design posters as <span className="text-blue-300 font-medium">Chief Designer at our college council (S.A.C.C)</span>. Currently seeking an internship to learn and grow in software and AI!
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3.5"
        >
          <a
            href="#sage"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_25px_rgba(0,240,255,0.35)]"
          >
            <BookOpen className="h-4 w-4 text-slate-950" />
            <span>See SAGE Project</span>
          </a>

          <a
            href="#posters"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-300"
          >
            <Palette className="h-4 w-4 text-slate-400" />
            <span>My College Posters</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-950/20 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-900/30"
          >
            <Mail className="h-4 w-4 text-cyan-400" />
            <span>Get in Touch</span>
          </a>

          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs text-slate-400 transition-all hover:text-cyan-300 hover:border-white/20"
            >
              <TerminalIcon className="h-3.5 w-3.5" />
              <span>Mini Terminal</span>
            </button>
          )}
        </motion.div>

        {/* Real Student Badges / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {[
            {
              label: "College & Degree",
              value: "B.Tech CSE (AI&ML)",
              sub: "SITS Hyderabad (CGPA 8.02)",
            },
            {
              label: "Team Project",
              value: "SAGE AI Tutor",
              sub: "Led a team of 4 classmates",
            },
            {
              label: "Student Council",
              value: "Chief Designer",
              sub: "S.A.C.C & Disciplinary Head",
            },
            {
              label: "Current Goal",
              value: "Seeking Internship",
              sub: "Entry-level AI / Software role",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 bg-cyber-surface/60 p-4 backdrop-blur-md transition-all hover:border-cyan-500/30 hover:bg-cyber-surface/80"
            >
              <div className="font-mono text-[11px] font-medium text-slate-400">
                {item.label}
              </div>
              <div className="mt-1 font-display text-lg font-bold text-slate-100">
                {item.value}
              </div>
              <div className="mt-0.5 font-mono text-[10px] text-cyan-400/80">
                {item.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="mx-auto mt-12 hidden sm:flex items-center justify-center">
        <a
          href="#sage"
          className="flex flex-col items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-slate-500 transition-colors hover:text-cyan-400"
        >
          <span>Scroll to see projects</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
}

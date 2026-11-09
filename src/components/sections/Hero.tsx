"use client";

import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Palette, Mail, Terminal as TerminalIcon } from "lucide-react";
import KineticText from "@/components/effects/KineticText";
import MagneticButton from "@/components/effects/MagneticButton";

interface HeroProps {
  onOpenTerminal?: () => void;
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center px-4 pt-28 pb-14 sm:px-8 overflow-hidden">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px] dark:bg-cyan-500/15" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[140px] dark:bg-blue-600/15" />

      <div className="mx-auto w-full max-w-5xl relative z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/20 px-3.5 py-1.5 backdrop-blur-md mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
          <span className="font-mono text-xs font-medium text-cyan-300">
            A. Shiva Vaibhav • B.Tech CSE (AI & ML) • SITS Hyderabad
          </span>
        </motion.div>

        {/* Big Kinetic Headline */}
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.08] text-slate-100 max-w-4xl">
          <KineticText
            text="B.Tech AI student learning fast, leading teams, and crafting clean designs."
            highlightWords={["AI", "leading", "clean", "designs."]}
            delay={0.05}
          />
        </h1>

        {/* Short, Punchy Copy (Reduced Theory) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 max-w-xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
        >
          Team Lead for <span className="text-cyan-300 font-medium">SAGE</span> (our college AI tutor) and <span className="text-blue-300 font-medium">Chief Designer at S.A.C.C</span>. Open for internships!
        </motion.p>

        {/* Magnetic Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-3.5"
        >
          <MagneticButton
            href="#sage"
            dataCursor="explore"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-950 shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Explore SAGE Project</span>
            </span>
          </MagneticButton>

          <MagneticButton
            href="#posters"
            dataCursor="view"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-200 hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-300"
          >
            <span className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span>College Posters</span>
            </span>
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/30"
          >
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </span>
          </MagneticButton>

          {onOpenTerminal && (
            <MagneticButton
              onClick={onOpenTerminal}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs text-slate-400 hover:text-cyan-300 hover:border-white/20"
            >
              <span className="flex items-center gap-1.5">
                <TerminalIcon className="h-3.5 w-3.5" />
                <span>CLI</span>
              </span>
            </MagneticButton>
          )}
        </motion.div>

        {/* Compact Quick Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs"
        >
          {[
            { label: "Academic Record", val: "8.02 CGPA", sub: "SITS Hyderabad" },
            { label: "Team Project", val: "4-Member Lead", sub: "SAGE AI Engine" },
            { label: "Design Role", val: "Chief Designer", sub: "S.A.C.C Council" },
            { label: "Status", val: "Available", sub: "Summer Internships" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/5 bg-cyber-surface/60 p-3.5 backdrop-blur-md"
            >
              <span className="text-[10px] text-slate-400 uppercase">{item.label}</span>
              <div className="text-base font-bold text-slate-100 font-display mt-0.5">
                {item.val}
              </div>
              <div className="text-[10px] text-cyan-400/80">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Down Scroll */}
      <div className="mx-auto mt-10 hidden sm:flex items-center justify-center">
        <a
          href="#sage"
          className="flex flex-col items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <span>Scroll</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
}

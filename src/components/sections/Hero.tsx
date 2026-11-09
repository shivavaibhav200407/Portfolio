"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal as TerminalIcon, ExternalLink, Cpu, Layers } from "lucide-react";

interface HeroProps {
  onOpenTerminal?: () => void;
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center px-4 pt-28 pb-16 sm:px-8 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px] dark:bg-cyan-500/15" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px] dark:bg-blue-600/15" />

      <div className="mx-auto w-full max-w-6xl relative z-10">
        {/* Top Status & Telemetry Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/20 px-3.5 py-1.5 backdrop-blur-md dark:border-cyan-400/30 dark:bg-cyan-950/30 mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
            B.Tech CSE (AI & ML) // SITS Hyderabad // Class of 2028
          </span>
        </motion.div>

        {/* Main Kinetic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.08] text-slate-100"
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-glow-cyan">
            Multi-Agent AI
          </span>{" "}
          Systems &{" "}
          <span className="underline decoration-cyan-400/40 decoration-wavy decoration-2 underline-offset-8">
            Tactile Visual Design
          </span>
          .
        </motion.h1>

        {/* Honest, Humble & Powerful Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-3xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-slate-400"
        >
          I am <strong className="text-slate-200 font-semibold">A. Shiva Vaibhav</strong>, a B.Tech AI & ML student passionate about learning and building practical systems. As team lead, I architected{" "}
          <span className="text-cyan-300 font-medium">SAGE</span> — a 4-agent autonomous tutoring engine with ChromaDB & Groq RAG. In parallel, I lead visual branding as{" "}
          <span className="text-blue-300 font-medium">Chief Designer at S.A.C.C</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#sage"
            data-cursor="explore"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            <Cpu className="h-4 w-4 text-slate-950 transition-transform group-hover:rotate-45" />
            <span>Inspect SAGE Architecture</span>
          </a>

          <a
            href="#posters"
            data-cursor="view"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-300"
          >
            <Layers className="h-4 w-4 text-slate-400" />
            <span>Design & Posters</span>
          </a>

          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="group flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-950/30 px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-900/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            >
              <TerminalIcon className="h-4 w-4 text-cyan-400 transition-transform group-hover:translate-x-0.5" />
              <span>Interactive CLI</span>
            </button>
          )}
        </motion.div>

        {/* Real Metrics Telemetry Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {[
            {
              label: "Team Lead (SAGE)",
              value: "4-Agent Loop",
              sub: "Coordinator, Gap, Plan, RAG",
            },
            {
              label: "Course Curriculum",
              value: "25+ B.Tech",
              sub: "CSE, AI, ECE, Mech, Civil",
            },
            {
              label: "Academic Rigor",
              value: "8.02 CGPA",
              sub: "SITS Hyderabad (B.Tech)",
            },
            {
              label: "Visual Direction",
              value: "Chief Designer",
              sub: "Council Leadership (S.A.C.C)",
            },
          ].map((metric, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 bg-cyber-surface/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyber-surface/90"
            >
              <div className="font-mono text-[11px] font-medium uppercase tracking-wider text-slate-400">
                {metric.label}
              </div>
              <div className="mt-1 font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-100">
                {metric.value}
              </div>
              <div className="mt-0.5 font-mono text-[10px] text-cyan-400/80">
                {metric.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="mx-auto mt-10 hidden sm:flex items-center justify-center">
        <a
          href="#sage"
          className="flex flex-col items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-slate-500 transition-colors hover:text-cyan-400"
        >
          <span>Scroll To Compute</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
}

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
    <section className="relative min-h-[88vh] flex flex-col justify-center px-4 pt-28 pb-14 sm:px-8 overflow-hidden bg-[#08090C]">
      {/* Soft dual gradient glow: Quantum Cyan + Sukuna Flame Coral */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[380px] w-[380px] rounded-full bg-[#FF553E]/15 blur-[140px]" />

      <div className="mx-auto w-full max-w-5xl relative z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/20 px-3.5 py-1.5 backdrop-blur-md mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
          <span className="font-mono text-xs font-medium text-cyan-300">
            A. Shiva Vaibhav • B.Tech CSE (AI & ML) • SITS Hyderabad
          </span>
        </motion.div>

        {/* Big Kinetic Headline with Dual Accent Highlights */}
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.08] text-slate-100 max-w-4xl">
          <KineticText
            text="B.Tech AI student learning fast, leading teams, and building real tools."
            highlightWords={["AI", "leading", "real", "tools."]}
            delay={0.04}
          />
        </h1>

        {/* Short, Confident Human Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 max-w-xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
        >
          Team Lead for <span className="text-cyan-300 font-medium">SAGE</span> (college AI tutor) and <span className="text-[#FF7B00] font-medium">Chief Designer at S.A.C.C</span>. Open for internships!
        </motion.p>

        {/* Magnetic Buttons with Accent Color Shift on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center gap-3.5"
        >
          <MagneticButton
            href="#sage"
            dataCursor="explore"
            className="group rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-[#FF553E] p-[1px] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
          >
            <div className="flex items-center gap-2 rounded-[11px] bg-slate-950 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-100 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-[#FF553E] group-hover:text-slate-950">
              <BookOpen className="h-4 w-4" />
              <span>Explore SAGE Project</span>
            </div>
          </MagneticButton>

          <MagneticButton
            href="#posters"
            dataCursor="view"
            className="group rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-200 transition-all duration-300 hover:border-[#FF553E]/50 hover:bg-[#FF553E]/10 hover:text-[#FFAA00]"
          >
            <span className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-slate-400 group-hover:text-[#FFAA00]" />
              <span>College Posters</span>
            </span>
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-900/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]"
          >
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </span>
          </MagneticButton>

          {onOpenTerminal && (
            <MagneticButton
              onClick={onOpenTerminal}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
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
          transition={{ duration: 0.6, delay: 0.45 }}
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
              className="rounded-xl border border-white/5 bg-cyber-surface/60 p-3.5 backdrop-blur-md transition-all hover:border-cyan-500/30"
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

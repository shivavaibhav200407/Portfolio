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
    <section className="relative min-h-[88vh] flex flex-col justify-center px-4 pt-28 pb-14 sm:px-8 overflow-hidden bg-[#000000]">
      {/* Soft Ambient Neon Red Glow Behind Hero */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#FF1E27]/12 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-[#B91C1C]/10 blur-[150px]" />

      <div className="mx-auto w-full max-w-5xl relative z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#FF1E27]/30 bg-[#FF1E27]/10 px-3.5 py-1.5 backdrop-blur-md mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#FF1E27] shadow-[0_0_8px_#FF1E27]" />
          <span className="font-mono text-xs font-medium text-[#FF3843]">
            A. Shiva Vaibhav • B.Tech CSE (AI & ML) • SITS Hyderabad
          </span>
        </motion.div>

        {/* Big Kinetic Headline: Option 1 */}
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.08] text-white max-w-4xl">
          <KineticText
            text="Building autonomous AI agents. Crafting bold visual experiences."
            highlightWords={["autonomous", "AI", "bold", "experiences."]}
            highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1E27] via-[#FF3843] to-[#FFA2A8] text-glow-red"
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
          Team Lead for <span className="text-[#FF3843] font-medium">SAGE</span> (college AI tutor) and <span className="text-[#FFA2A8] font-medium">Chief Designer at S.A.C.C</span>. Open for internships!
        </motion.p>

        {/* Magnetic Buttons with Neon Red Glow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center gap-3.5"
        >
          <MagneticButton
            href="#sage"
            dataCursor="explore"
            className="group rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#B91C1C] p-[1px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,30,39,0.5)]"
          >
            <div className="flex items-center gap-2 rounded-[11px] bg-black px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 group-hover:bg-[#FF1E27] group-hover:text-black">
              <BookOpen className="h-4 w-4" />
              <span>Explore SAGE Project</span>
            </div>
          </MagneticButton>

          <MagneticButton
            href="#posters"
            dataCursor="view"
            className="group rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-200 transition-all duration-300 hover:border-[#FF1E27]/60 hover:bg-[#FF1E27]/10 hover:text-[#FF3843] hover:shadow-[0_0_20px_rgba(255,30,39,0.3)]"
          >
            <span className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-slate-400 group-hover:text-[#FF1E27]" />
              <span>College Posters</span>
            </span>
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="rounded-xl border border-[#FF1E27]/30 bg-[#FF1E27]/10 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#FF3843] transition-all duration-300 hover:border-[#FF1E27] hover:bg-[#FF1E27]/20 hover:shadow-[0_0_20px_rgba(255,30,39,0.3)]"
          >
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </span>
          </MagneticButton>

          {onOpenTerminal && (
            <MagneticButton
              onClick={onOpenTerminal}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-xs text-slate-400 hover:text-[#FF3843] hover:border-[#FF1E27]/40 transition-all"
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
              className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 backdrop-blur-md transition-all hover:border-[#FF1E27]/40"
            >
              <span className="text-[10px] text-slate-400 uppercase">{item.label}</span>
              <div className="text-base font-bold text-white font-display mt-0.5">
                {item.val}
              </div>
              <div className="text-[10px] text-[#FF3843]">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Down Scroll */}
      <div className="mx-auto mt-10 hidden sm:flex items-center justify-center">
        <a
          href="#sage"
          className="flex flex-col items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-slate-500 hover:text-[#FF1E27] transition-colors"
        >
          <span>Scroll</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-[#FF1E27]" />
        </a>
      </div>
    </section>
  );
}

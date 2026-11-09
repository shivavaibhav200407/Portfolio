"use client";

import { ArrowUp, Terminal, Shield, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-cyber-bg py-12 px-4 sm:px-8 font-mono text-xs text-slate-500">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 font-bold text-cyan-400">
            SV
          </div>
          <div>
            <div className="text-slate-300 font-semibold">A. SHIVA VAIBHAV</div>
            <div className="text-[11px] text-slate-500">
              B.Tech CSE (AI & ML) • Siddhartha Institute of Technology & Sciences
            </div>
          </div>
        </div>

        {/* Center: System Telemetry */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Telemetry: Online [Hyderabad, IN]</span>
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="text-slate-500">Stack: Next.js + Tailwind + Framer Motion</span>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-slate-400 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
        >
          <span>Return To Top</span>
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 text-cyan-400" />
        </button>
      </div>
    </footer>
  );
}

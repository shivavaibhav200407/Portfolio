"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t py-14 px-4 sm:px-8 font-mono text-xs border-slate-200/80 bg-white/50 text-slate-500 dark:border-white/5 dark:bg-[#040406] dark:text-slate-400 transition-colors">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Monogram and student credit */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border font-bold border-sky-500/30 bg-sky-50 text-sky-600 dark:border-[#FF1E27]/50 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
            {PROFILE.initials}
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              {PROFILE.name}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans mt-0.5">
              3rd Year B.Tech CSE (AI &amp; ML) · Siddhartha Institute of Technology &amp; Sciences
            </div>
          </div>
        </div>

        {/* Center: Clean Social Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={PROFILE.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-white"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-300 dark:text-slate-800">·</span>
          <a
            href={PROFILE.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-[#FF3843]"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-300 dark:text-slate-800">·</span>
          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="flex items-center gap-1.5 transition-colors text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-[#FF3843]"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Right: Referral-style circular Back to Top badge */}
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Back to top"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 border-slate-300 bg-white hover:border-sky-500 hover:shadow-lg dark:border-white/10 dark:bg-black dark:hover:border-[#FF1E27]/60 dark:hover:shadow-[0_0_20px_rgba(255,30,39,0.25)]"
        >
          {/* Rotating Circular Text Ring */}
          <svg className="absolute inset-0 h-full w-full animate-spin-slow pointer-events-none" viewBox="0 0 100 100">
            <defs>
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="font-mono text-[7.5px] uppercase tracking-[0.22em] fill-slate-400 dark:fill-slate-500">
              <textPath href="#circlePath">
                · SCROLL TO TOP · SHIVA VAIBHAV ·
              </textPath>
            </text>
          </svg>

          {/* Center Bouncing Arrow */}
          <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 text-sky-600 dark:text-[#FF1E27]" />
        </button>
      </div>
    </footer>
  );
}
"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t py-12 px-4 sm:px-8 font-mono text-xs border-slate-200 bg-white text-slate-500 dark:border-white/5 dark:bg-black dark:text-slate-500 transition-colors">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border font-bold border-sky-500/30 bg-sky-50 text-sky-600 dark:border-[#FF1E27]/50 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
            {PROFILE.initials}
          </div>
          <div>
            <div className="font-semibold uppercase text-slate-900 dark:text-white">{PROFILE.name}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              {PROFILE.education.degree} &middot; {PROFILE.location}
            </div>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href={PROFILE.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-white"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-300 dark:text-slate-800">&middot;</span>
          <a
            href={PROFILE.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-[#FF3843]"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-300 dark:text-slate-800">&middot;</span>
          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="flex items-center gap-1.5 transition-colors text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-[#FF3843]"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Right */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[11px] transition-colors border-slate-200 bg-slate-50 text-slate-600 hover:border-sky-500 hover:text-sky-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:border-[#FF1E27]/40 dark:hover:text-[#FF3843]"
        >
          <span>Return To Top</span>
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 text-sky-600 dark:text-[#FF1E27]" />
        </button>
      </div>
    </footer>
  );
}

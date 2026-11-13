"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-black py-12 px-4 sm:px-8 font-mono text-xs text-slate-500">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#FF1E27]/50 bg-[#FF1E27]/10 font-bold text-[#FF3843]">
            {PROFILE.initials}
          </div>
          <div>
            <div className="text-white font-semibold uppercase">{PROFILE.name}</div>
            <div className="text-[11px] text-slate-400">
              {PROFILE.education.degree} • {PROFILE.location}
            </div>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href={PROFILE.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-800">•</span>
          <a
            href={PROFILE.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#FF3843] transition-colors"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-800">•</span>
          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#FF3843] transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Right */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-slate-400 hover:border-[#FF1E27]/40 hover:text-[#FF3843] transition-colors"
        >
          <span>Return To Top</span>
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 text-[#FF1E27]" />
        </button>
      </div>
    </footer>
  );
}

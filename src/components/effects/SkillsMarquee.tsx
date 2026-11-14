"use client";

import { motion } from "framer-motion";

const HONEST_TICKER_ITEMS = [
  "Python (Learning)",
  "AI-Assisted Development",
  "Poster & Graphic Design",
  "Team Leadership",
  "S.A.C.C Chief Designer",
  "Disciplinary Head",
  "SAGE Team Lead",
  "SITS Hyderabad · B.Tech CSE (AI & ML)",
];

export default function SkillsMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y py-3 transition-colors border-[#DCE6F7] bg-[#EAF2FF] text-[#0B1B3A] dark:border-white/[0.08] dark:bg-black dark:text-slate-400">
      {/* Side gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#F7FAFF] to-transparent dark:from-black" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#F7FAFF] to-transparent dark:from-black" />

      <motion.div
        className="flex whitespace-nowrap gap-6 font-mono text-xs"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 26,
        }}
      >
        {[...HONEST_TICKER_ITEMS, ...HONEST_TICKER_ITEMS, ...HONEST_TICKER_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] shadow-[0_0_6px_rgba(37,99,235,0.8)] dark:bg-[#FF1E27] dark:shadow-[0_0_6px_#FF1E27]" />
            <span className="tracking-wider hover:text-[#2563EB] dark:hover:text-white transition-colors cursor-default">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

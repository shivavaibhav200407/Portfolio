"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "Python (Learning & Building)",
  "SAGE Multi-Agent Lead",
  "ChromaDB RAG Vector Store",
  "Groq Llama 3 API",
  "Django Web Server",
  "Swiss Typography & Posters",
  "S.A.C.C Chief Designer",
  "Smart India Hackathon 2026",
  "Scikit-Learn ML",
  "Campus Wi-Fi Local Hosting",
  "Figma & Canva",
  "Disciplinary Head",
];

export default function SkillsMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y py-3 border-slate-200/80 bg-slate-50 text-slate-700 dark:border-white/[0.08] dark:bg-black dark:text-slate-400 transition-colors">
      {/* Side gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-black" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-black" />

      <motion.div
        className="flex whitespace-nowrap gap-6 font-mono text-xs"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 26,
        }}
      >
        {[...SKILLS, ...SKILLS].map((skill, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500 shadow-[0_0_6px_rgba(2,132,199,0.8)] dark:bg-[#FF1E27] dark:shadow-[0_0_6px_#FF1E27]" />
            <span className="tracking-wider hover:text-sky-600 dark:hover:text-white transition-colors cursor-default">
              {skill}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

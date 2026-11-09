"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "Python",
  "SAGE Multi-Agent",
  "ChromaDB RAG",
  "Groq Llama 3",
  "Django",
  "Poster Design",
  "Swiss Typography",
  "S.A.C.C Chief Designer",
  "Machine Learning",
  "Local Wi-Fi Web Apps",
  "Figma",
  "Campus Leadership",
];

export default function SkillsMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 bg-cyber-surface/50 py-3.5 backdrop-blur-md">
      {/* Side gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-cyber-bg to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-cyber-bg to-transparent" />

      <motion.div
        className="flex whitespace-nowrap gap-6 font-mono text-xs text-slate-400"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 22,
        }}
      >
        {/* Render twice for seamless infinite loop */}
        {[...SKILLS, ...SKILLS].map((skill, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]" />
            <span className="text-slate-200 tracking-wider hover:text-cyan-300 transition-colors cursor-default">
              {skill}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

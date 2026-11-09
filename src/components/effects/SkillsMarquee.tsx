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
    <div className="relative w-full overflow-hidden border-y border-[#FF1E27]/20 bg-black py-3.5">
      {/* Side gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

      <motion.div
        className="flex whitespace-nowrap gap-6 font-mono text-xs text-slate-400"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 22,
        }}
      >
        {[...SKILLS, ...SKILLS].map((skill, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF1E27] shadow-[0_0_8px_#FF1E27]" />
            <span className="text-slate-200 tracking-wider hover:text-[#FF3843] transition-colors cursor-default">
              {skill}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

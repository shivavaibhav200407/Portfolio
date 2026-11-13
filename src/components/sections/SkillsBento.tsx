"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Palette, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/skills";

export default function SkillsBento() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Code2;
      case 1:
        return Terminal;
      case 2:
        return Palette;
      default:
        return Users;
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] dark:border-white/5 dark:bg-[#030303] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#5B6B8C] dark:text-slate-400">
            02 / TOOLBOX
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#0B1B3A] dark:text-white">
            What I&apos;m Learning &amp; Building With
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-[#5B6B8C] dark:text-slate-400 mt-1 font-sans">
            Technologies and tools I practice actively across college engineering courses, team systems like SAGE, and council graphic design.
          </p>
        </div>

        {/* 4-Quadrant Bento Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(idx);

            return (
              <motion.div
                key={cat.title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border p-5 sm:p-6 transition-all duration-300 border-[#DCE6F7] bg-white hover:border-[#2563EB] shadow-[0_4px_20px_-2px_rgba(37,99,235,0.06)] dark:border-white/10 dark:bg-[#090909] dark:hover:border-[#FF1E27]/50 dark:hover:shadow-[0_0_25px_rgba(255,30,39,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg border transition-colors border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] group-hover:bg-[#DBEAFE] dark:border-white/5 dark:bg-white/[0.04] dark:text-slate-200 dark:group-hover:text-[#FF3843] dark:group-hover:border-[#FF1E27]/30">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-normal text-[#0B1B3A] dark:text-white">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full border font-mono text-[10px] border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                      {cat.badge}
                    </span>
                  </div>

                  <p className="text-xs mt-2 font-mono text-[#5B6B8C] dark:text-slate-400">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div className="mt-5 space-y-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-xl border p-2.5 transition-colors border-[#DCE6F7] bg-[#F7FAFF] hover:bg-[#EAF2FF] dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.05] dark:hover:border-white/10"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-sans text-sm font-semibold text-[#0B1B3A] dark:text-slate-200">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#DBEAFE] bg-white text-[#2563EB] dark:border-white/5 dark:bg-white/[0.06] dark:text-slate-300">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs mt-0.5 font-mono text-[#5B6B8C] dark:text-slate-400">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#DCE6F7] dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-[#5B6B8C] dark:text-slate-400">
                  <span>Practical Experience</span>
                  <span className="flex items-center gap-1 text-[#2563EB] dark:text-[#FF3843]">
                    <CheckCircle2 className="h-3 w-3" /> Verified Student Project
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
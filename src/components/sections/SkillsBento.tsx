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
    <section id="skills" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-slate-200 bg-slate-50/50 text-slate-900 dark:border-white/5 dark:bg-[#030303] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-semibold border-sky-500/20 bg-sky-50 text-sky-700 dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
            <Sparkles className="h-3.5 w-3.5 text-sky-600 dark:text-[#FF1E27]" />
            <span>07 // TOOLBOX &middot; SKILLS & COMPETENCIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            What I&apos;m Learning & Building With
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 mt-1">
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
                className="group rounded-2xl border p-5 sm:p-6 transition-all duration-300 border-slate-200 bg-white hover:border-sky-500 hover:shadow-lg dark:border-white/10 dark:bg-[#090909] dark:hover:border-[#FF1E27]/50 dark:hover:shadow-[0_0_25px_rgba(255,30,39,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg border transition-colors border-slate-200 bg-slate-50 text-slate-700 group-hover:text-sky-600 group-hover:border-sky-400 dark:border-white/5 dark:bg-white/[0.04] dark:text-slate-200 dark:group-hover:text-[#FF3843] dark:group-hover:border-[#FF1E27]/30">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full border font-mono text-[10px] border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                      {cat.badge}
                    </span>
                  </div>

                  <p className="text-xs mt-2 font-mono text-slate-500 dark:text-slate-400">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div className="mt-5 space-y-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-xl border p-2.5 transition-colors border-slate-200/60 bg-slate-50/70 hover:bg-slate-100 hover:border-slate-300 dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.05] dark:hover:border-white/10"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-slate-200 bg-white text-slate-600 dark:border-white/5 dark:bg-white/[0.06] dark:text-slate-300">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs mt-0.5 font-mono text-slate-500 dark:text-slate-400">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t flex items-center justify-between text-[11px] font-mono border-slate-200 text-slate-500 dark:border-white/5 dark:text-slate-400">
                  <span>Hands-on practice & exploration</span>
                  <span className="flex items-center gap-1 font-semibold text-sky-600 dark:text-[#FF3843]">
                    <CheckCircle2 className="h-3 w-3" /> Active
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

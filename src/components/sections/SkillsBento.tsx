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
    <section id="skills" className="relative py-20 px-4 sm:px-8 border-t border-white/5 bg-[#030303] transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF1E27]/30 bg-[#FF1E27]/10 px-3 py-1 font-mono text-xs font-medium text-[#FF3843]">
            <Sparkles className="h-3.5 w-3.5 text-[#FF1E27]" />
            <span>SKILLS & TOOLBOX</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            What I&apos;m Learning & Building With
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300 mt-1">
            Skills I actively practice through college engineering courses, team projects like SAGE, and council graphic design.
          </p>
        </div>

        {/* Professional Obsidian Bento Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(idx);

            return (
              <motion.div
                key={cat.title}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-white/10 bg-[#090909] p-5 sm:p-6 transition-all duration-300 hover:border-[#FF1E27]/50 hover:shadow-[0_0_25px_rgba(255,30,39,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5 text-slate-200 group-hover:text-[#FF3843] group-hover:border-[#FF1E27]/30 transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[10px] text-slate-300">
                      {cat.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mt-2 font-mono">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div className="mt-5 space-y-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 transition-colors hover:bg-white/[0.05] hover:border-white/10"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.06] border border-white/5 text-slate-300">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Hands-on practice & exploration</span>
                  <span className="text-[#FF3843] flex items-center gap-1">
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

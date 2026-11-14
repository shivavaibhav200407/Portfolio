"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Palette, Users, Info } from "lucide-react";
import { HONEST_SKILLS, SAGE_PROJECT_TECHNOLOGIES } from "@/data/skills";

export default function SkillsBento() {
  const getSkillIcon = (index: number) => {
    switch (index) {
      case 0:
        return Code2;
      case 1:
        return Sparkles;
      case 2:
        return Palette;
      default:
        return Users;
    }
  };

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-8 border-t transition-colors duration-500 border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] dark:border-white/5 dark:bg-[#030303] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#5B6B8C] dark:text-slate-400">
            02 / TOOLBOX
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#0B1B3A] dark:text-white">
            Skills &amp; Capabilities
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-[#5B6B8C] dark:text-slate-400 mt-1 font-sans">
            A transparent summary of what I practice, learn, and lead.
          </p>
        </div>

        {/* 4 Clean Skill Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HONEST_SKILLS.map((skill, idx) => {
            const Icon = getSkillIcon(idx);

            return (
              <motion.div
                key={skill.name}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl border p-5 transition-all duration-300 border-[#DCE6F7] bg-white hover:border-[#2563EB] shadow-[0_4px_20px_-2px_rgba(37,99,235,0.06)] dark:border-white/10 dark:bg-[#090909] dark:hover:border-[#FF1E27]/50 dark:hover:shadow-[0_0_20px_rgba(255,30,39,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg border transition-colors border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] dark:border-white/5 dark:bg-white/[0.04] dark:text-slate-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-normal text-[#0B1B3A] dark:text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full border font-mono text-[10px] font-semibold border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                      {skill.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm mt-3 font-sans leading-relaxed text-[#5B6B8C] dark:text-slate-300">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DCE6F7] dark:border-white/5 font-mono text-[11px] text-[#5B6B8C] dark:text-slate-400">
                  <span>Category: {skill.category}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dedicated SAGE Technologies Notice */}
        <div className="mt-6 rounded-2xl border p-4 sm:p-5 border-[#DCE6F7] bg-[#EAF2FF]/60 dark:border-white/10 dark:bg-white/[0.02]">
          <div className="flex items-start gap-3">
            <Info className="h-4 w-4 shrink-0 mt-0.5 text-[#2563EB] dark:text-[#FF4D55]" />
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-semibold text-[#0B1B3A] dark:text-white block">
                Technologies used in the SAGE project (built with AI tools):
              </span>
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                {SAGE_PROJECT_TECHNOLOGIES.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg border border-[#DBEAFE] bg-white text-[#0B1B3A] shadow-sm dark:border-white/10 dark:bg-black/60 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

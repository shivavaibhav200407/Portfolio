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

  const getCategoryColors = (index: number) => {
    switch (index) {
      case 0:
        return {
          border: "border-cyan-500/30",
          glow: "hover:border-cyan-500/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.12)]",
          badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
          icon: "text-cyan-400",
        };
      case 1:
        return {
          border: "border-blue-500/30",
          glow: "hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]",
          badge: "bg-blue-500/10 text-blue-400 border-blue-500/30",
          icon: "text-blue-400",
        };
      case 2:
        return {
          border: "border-pink-500/30",
          glow: "hover:border-pink-500/60 hover:shadow-[0_0_25px_rgba(236,72,153,0.12)]",
          badge: "bg-pink-500/10 text-pink-400 border-pink-500/30",
          icon: "text-pink-400",
        };
      default:
        return {
          border: "border-emerald-500/30",
          glow: "hover:border-emerald-500/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)]",
          badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
          icon: "text-emerald-400",
        };
    }
  };

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-8 border-t border-white/5 bg-cyber-bg">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-medium text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>SKILLS & TOOLBOX</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            What I&apos;m Learning & Building With
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300 mt-1">
            Skills I actively practice through my college courses, team projects like SAGE, and council graphic design.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(idx);
            const style = getCategoryColors(idx);

            return (
              <motion.div
                key={cat.title}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`rounded-2xl border ${style.border} ${style.glow} bg-cyber-surface/70 p-5 sm:p-6 backdrop-blur-xl transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-white/5">
                        <Icon className={`h-4 w-4 ${style.icon}`} />
                      </div>
                      <h3 className="font-display text-lg font-bold text-slate-100">
                        {cat.title}
                      </h3>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full border font-mono text-[10px] font-medium ${style.badge}`}>
                      {cat.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mt-1.5 font-mono">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div className="mt-5 space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5 transition-colors hover:bg-white/[0.06]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300">
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
                  <span>Actively building & learning daily</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Hands-on Practice
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

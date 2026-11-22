"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";

export default function SageCaseStudy() {
  const sageTechnologies = [
    "Python",
    "Django",
    "ChromaDB",
    "Groq",
    "DuckDuckGo search",
  ];

  return (
    <section id="sage" className="relative py-20 px-4 sm:px-8 border-t transition-colors duration-500 border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] dark:border-white/5 dark:bg-[#07070A] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Tag */}
        <div className="flex flex-col items-start gap-2">
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#5B6B8C] dark:text-slate-400">
            03 / SELECTED WORK
          </span>
          <div className="flex flex-wrap items-center justify-between w-full gap-4">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#0B1B3A] dark:text-white">
              SAGE
            </h2>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full border font-mono text-xs border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] font-semibold dark:border-[#FF1E27]/40 dark:bg-[#FF1E27]/10 dark:text-[#FF4D55]">
                Team Lead (Team of 4)
              </span>
              <span className="px-3 py-1 rounded-full border font-mono text-xs border-[#DCE6F7] bg-white text-[#5B6B8C] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                Built with AI Tools
              </span>
            </div>
          </div>
        </div>

        {/* Crisp Project Card */}
        <div className="mt-8 rounded-2xl border p-6 sm:p-8 backdrop-blur-md transition-all border-[#DCE6F7] bg-white shadow-[0_4px_20px_-2px_rgba(37,99,235,0.06)] dark:border-white/10 dark:bg-[#09090D] dark:shadow-none space-y-6">
          {/* Exact Shortened Description */}
          <p className="text-base sm:text-lg leading-relaxed text-[#0B1B3A] dark:text-slate-200 font-sans">
            An AI tutor for B.Tech students. A team of AI agents finds what you don&apos;t understand, plans what to study, and answers from reference notes. I led a team of 4 and we built it with AI coding tools.
          </p>

          {/* Clean Meta Details & Stack */}
          <div className="pt-4 border-t border-[#DCE6F7] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] text-[#5B6B8C] dark:text-slate-400 uppercase tracking-wider block mb-1.5">
                Technologies used in SAGE (built with AI tools):
              </span>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {sageTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md border border-[#DBEAFE] bg-[#EAF2FF] text-[#0B1B3A] dark:border-white/5 dark:bg-white/[0.03] dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs text-[#5B6B8C] dark:text-slate-400">
              <span className="h-2 w-2 rounded-full bg-[#2563EB] dark:bg-[#FF1E27]" />
              <span>Scope: B.Tech Courses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

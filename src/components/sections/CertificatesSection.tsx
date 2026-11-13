"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, Calendar, FileBadge } from "lucide-react";
import { CERTIFICATES } from "@/data/certificates";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-slate-200 bg-white text-slate-900 dark:border-white/5 dark:bg-[#030303] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-semibold border-sky-500/20 bg-sky-50 text-sky-700 dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
            <Award className="h-3.5 w-3.5 text-sky-600 dark:text-[#FF1E27]" />
            <span>06 // CREDENTIALS &middot; VERIFIED CERTIFICATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            Certificates & College Workshops
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 mt-1">
            Machine learning project certification awarded by Smartuter Research Center alongside technical departmental workshops at SITS.
          </p>
        </div>

        {/* Minimal Detailed Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-2xl border p-5 sm:p-6 transition-all duration-300 border-slate-200 bg-slate-50/70 hover:border-sky-500 hover:shadow-lg dark:border-white/10 dark:bg-[#080808] dark:hover:border-[#FF1E27]/50 dark:hover:shadow-[0_0_20px_rgba(255,30,39,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b pb-3 border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    <Calendar className="h-3.5 w-3.5 text-sky-600 dark:text-[#FF1E27]" />
                    <span>{cert.date}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full border font-mono text-[10px] font-semibold border-sky-500/20 bg-sky-50 text-sky-700 dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
                    {cert.verificationBadge}
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <div className="p-2 rounded-xl border shrink-0 transition-colors border-slate-200 bg-white text-slate-700 group-hover:text-sky-600 group-hover:border-sky-400 dark:border-white/5 dark:bg-white/[0.04] dark:text-slate-300 dark:group-hover:text-[#FF3843] dark:group-hover:border-[#FF1E27]/30">
                    <FileBadge className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold leading-snug text-slate-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed font-sans text-slate-600 dark:text-slate-300">
                  {cert.description}
                </p>

                {/* Skills Learned Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono border border-slate-200 bg-white text-slate-600 dark:border-white/5 dark:bg-white/[0.03] dark:text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t flex items-center justify-between text-[11px] font-mono border-slate-200 text-slate-500 dark:border-white/5 dark:text-slate-400">
                <span className="flex items-center gap-1 font-semibold text-sky-600 dark:text-[#FF3843]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verified Completion
                </span>
                <span className="uppercase text-slate-400 dark:text-slate-500">{cert.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

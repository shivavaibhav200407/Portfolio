"use client";

import { motion } from "framer-motion";
import { Calendar, FileBadge, Clock } from "lucide-react";
import { CERTIFICATES } from "@/data/certificates";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] dark:border-white/5 dark:bg-[#030303] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#5B6B8C] dark:text-slate-400">
            05 / CREDENTIALS
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#0B1B3A] dark:text-white">
            Certificates &amp; College Workshops
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-[#5B6B8C] dark:text-slate-300 mt-1 font-sans">
            Machine learning project certificate from Smartuter Research Center alongside technical workshops by the Dept. of CSE (AI &amp; ML), SITS.
          </p>
        </div>

        {/* Minimal Detailed Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-2xl border p-5 sm:p-6 transition-all duration-300 border-[#DCE6F7] bg-white hover:border-[#2563EB] shadow-[0_4px_20px_-2px_rgba(37,99,235,0.06)] dark:border-white/10 dark:bg-[#080808] dark:hover:border-[#FF1E27]/50 dark:hover:shadow-[0_0_20px_rgba(255,30,39,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b pb-3 border-[#DCE6F7] dark:border-white/10">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#5B6B8C] dark:text-slate-400">
                    <Calendar className="h-3.5 w-3.5 text-[#2563EB] dark:text-[#FF1E27]" />
                    <span>{cert.date}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full border font-mono text-[10px] font-semibold border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
                    {cert.duration}
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <div className="p-2 rounded-xl border shrink-0 transition-colors border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] group-hover:bg-[#DBEAFE] dark:border-white/5 dark:bg-white/[0.04] dark:text-slate-300 dark:group-hover:text-[#FF3843] dark:group-hover:border-[#FF1E27]/30">
                    <FileBadge className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-normal leading-snug text-[#0B1B3A] dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs text-[#5B6B8C] dark:text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed font-sans text-[#5B6B8C] dark:text-slate-300">
                  {cert.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#DCE6F7] dark:border-white/5 flex items-center justify-between font-mono text-[11px] text-[#5B6B8C] dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-[#2563EB] dark:text-[#FF1E27]" /> Duration
                </span>
                <span className="font-semibold text-[#0B1B3A] dark:text-slate-200">
                  {cert.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

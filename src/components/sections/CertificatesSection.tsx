"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, Calendar, FileBadge } from "lucide-react";
import { CERTIFICATES } from "@/data/certificates";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-20 px-4 sm:px-8 border-t border-white/5 bg-[#030303] transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF1E27]/30 bg-[#FF1E27]/10 px-3 py-1 font-mono text-xs font-medium text-[#FF3843]">
            <Award className="h-3.5 w-3.5 text-[#FF1E27]" />
            <span>CREDENTIALS // VERIFIED TRAINING & CERTIFICATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Certificates & Hands-on Workshops
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300 mt-1">
            Formal machine learning project certification and technical college workshops completed at SITS and Smartuter Research Center.
          </p>
        </div>

        {/* Minimal Detailed Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-2xl border border-white/10 bg-[#080808] p-5 sm:p-6 transition-all duration-300 hover:border-[#FF1E27]/50 hover:shadow-[0_0_20px_rgba(255,30,39,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                    <Calendar className="h-3.5 w-3.5 text-[#FF1E27]" />
                    <span>{cert.date}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full border border-[#FF1E27]/30 bg-[#FF1E27]/10 font-mono text-[10px] text-[#FF3843] font-semibold">
                    {cert.verificationBadge}
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5 text-slate-300 group-hover:text-[#FF3843] group-hover:border-[#FF1E27]/30 transition-colors shrink-0">
                    <FileBadge className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-300 leading-relaxed font-sans">
                  {cert.description}
                </p>

                {/* Skills Learned Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/5 text-slate-400 group-hover:border-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-[#FF3843] flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verified Completion
                </span>
                <span className="text-slate-500 uppercase">{cert.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Mail, Phone, Copy, Check, Send, Download, Linkedin, Github, Sparkles } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";
import { PROFILE } from "@/data/profile";

export default function ContactDock() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] dark:border-white/5 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border p-6 sm:p-10 shadow-[0_4px_25px_-2px_rgba(37,99,235,0.08)] border-[#DCE6F7] bg-white dark:border-white/10 dark:bg-[#070707] dark:shadow-2xl">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-[100px] bg-blue-500/[0.06] dark:bg-[#FF1E27]/[0.05]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-[100px] bg-blue-600/[0.04] dark:bg-[#FF1E27]/[0.03]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[11px] tracking-widest uppercase text-[#5B6B8C] dark:text-slate-400 block">
                07 // CONTACT &middot; OPEN FOR ROLES
              </span>

              <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-[#0B1B3A] dark:text-white">
                Let&apos;s build together.
              </h2>

              <p className="text-xs sm:text-sm leading-relaxed max-w-md font-sans text-[#5B6B8C] dark:text-slate-300">
                Looking for an internship or junior role where I can learn, be mentored, and contribute. Have an opportunity or want to connect? Reach out anytime!
              </p>

              {/* 1-Click Copy Email */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button
                  onClick={copyEmail}
                  data-cursor="copy"
                  className="group flex items-center gap-2 rounded-xl border px-3.5 py-2.5 font-mono text-xs sm:text-sm transition-all border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] hover:bg-[#DBEAFE] hover:border-[#2563EB] dark:border-[#FF1E27]/40 dark:bg-black dark:text-[#FF3843] dark:hover:border-[#FF1E27] dark:hover:bg-[#FF1E27]/10"
                >
                  <Mail className="h-4 w-4 text-[#2563EB] dark:text-[#FF1E27]" />
                  <span>{PROFILE.contact.email}</span>
                  {copied ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/20 px-2 py-0.5 rounded ml-1.5 font-bold">
                      <Check className="h-3 w-3" /> Copied!
                    </span>
                  ) : (
                    <Copy className="h-3.5 w-3.5 text-[#5B6B8C] ml-1.5" />
                  )}
                </button>

                <a
                  href={`tel:${PROFILE.contact.phone}`}
                  className="flex items-center gap-2 rounded-xl border px-3.5 py-2.5 font-mono text-xs sm:text-sm transition-colors border-[#DCE6F7] bg-white text-[#0B1B3A] hover:border-[#2563EB] hover:text-[#2563EB] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-white/20"
                >
                  <Phone className="h-4 w-4 text-[#5B6B8C] dark:text-slate-400" />
                  <span>{PROFILE.contact.phone}</span>
                </a>
              </div>

              {/* Socials & Resume */}
              <div className="flex items-center gap-3 pt-2">
                <MagneticButton
                  href={PROFILE.contact.linkedin}
                  className="p-2.5 rounded-xl border transition-all border-[#DCE6F7] bg-white text-[#5B6B8C] hover:text-[#2563EB] hover:border-[#2563EB] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:text-[#FF1E27] dark:hover:border-[#FF1E27]/50"
                >
                  <Linkedin className="h-4 w-4" />
                </MagneticButton>

                <MagneticButton
                  href={PROFILE.contact.github}
                  className="p-2.5 rounded-xl border transition-all border-[#DCE6F7] bg-white text-[#5B6B8C] hover:text-[#2563EB] hover:border-[#2563EB] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:text-[#FF1E27] dark:hover:border-[#FF1E27]/50"
                >
                  <Github className="h-4 w-4" />
                </MagneticButton>

                <MagneticButton
                  href={PROFILE.contact.resumePath}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-mono transition-all border-[#DCE6F7] bg-[#EAF2FF] text-[#0B1B3A] hover:border-[#2563EB] hover:text-[#2563EB] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-[#FF1E27]/50 dark:hover:text-[#FF3843]"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Résumé PDF</span>
                </MagneticButton>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border p-5 sm:p-6 border-[#DCE6F7] bg-[#F7FAFF] dark:border-white/10 dark:bg-black/95">
                {submitted ? (
                  <div className="py-8 text-center space-y-2.5 font-mono">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#2563EB] dark:bg-[#FF1E27]/20 dark:text-[#FF1E27]">
                      <Check className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-normal text-[#0B1B3A] dark:text-white">Message Sent!</h3>
                    <p className="text-xs max-w-sm mx-auto text-[#5B6B8C] dark:text-slate-400 font-sans">
                      Thanks for reaching out! I will reply shortly. You can also email directly to <span className="font-semibold text-[#2563EB] dark:text-[#FF3843]">{PROFILE.contact.email}</span>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs underline text-[#2563EB] dark:text-[#FF1E27]"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="flex items-center justify-between border-b pb-2.5 border-[#DCE6F7] dark:border-white/10">
                      <span className="font-mono text-xs font-semibold uppercase text-[#0B1B3A] dark:text-slate-300">
                        Direct Inquiry
                      </span>
                      <span className="font-mono text-[10px] text-[#2563EB] dark:text-[#FF3843]">Quick response</span>
                    </div>

                    <div>
                      <label className="block font-mono text-xs mb-1 text-[#5B6B8C] dark:text-slate-400">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Doe"
                        className="w-full rounded-xl border px-3 py-2 text-xs transition-all border-[#DCE6F7] bg-white text-[#0B1B3A] placeholder-[#5B6B8C]/50 focus:border-[#2563EB] focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder-slate-600 dark:focus:border-[#FF1E27]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs mb-1 text-[#5B6B8C] dark:text-slate-400">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border px-3 py-2 text-xs transition-all border-[#DCE6F7] bg-white text-[#0B1B3A] placeholder-[#5B6B8C]/50 focus:border-[#2563EB] focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder-slate-600 dark:focus:border-[#FF1E27]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs mb-1 text-[#5B6B8C] dark:text-slate-400">Message</label>
                      <textarea
                        rows={3}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Hi Shiva, we have an opening for an engineering internship..."
                        className="w-full rounded-xl border px-3 py-2 text-xs transition-all border-[#DCE6F7] bg-white text-[#0B1B3A] placeholder-[#5B6B8C]/50 focus:border-[#2563EB] focus:outline-none resize-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder-slate-600 dark:focus:border-[#FF1E27]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-xl py-2.5 font-mono text-xs font-semibold text-white shadow-md transition-all bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-gradient-to-r dark:from-[#FF1E27] dark:to-[#DC2626] dark:hover:brightness-110 active:scale-[0.99]"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Transmit Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
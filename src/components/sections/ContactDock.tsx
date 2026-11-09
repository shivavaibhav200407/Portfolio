"use client";

import { useState } from "react";
import { Mail, Phone, Copy, Check, Send, Download, Linkedin, Github, Sparkles } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";

export default function ContactDock() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const email = "vaibhava344@gmail.com";
  const phone = "+91 9493721105";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-8 border-t border-white/5 bg-[#000000]">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#FF1E27]/40 bg-gradient-to-b from-black via-[#080204] to-black p-6 sm:p-10 shadow-[0_0_80px_rgba(255,30,39,0.15)]">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#FF1E27]/12 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#B91C1C]/10 blur-[120px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF1E27]/30 bg-[#FF1E27]/10 px-3 py-1 font-mono text-xs text-[#FF3843]">
                <Sparkles className="h-3.5 w-3.5 text-[#FF1E27]" />
                <span>OPEN FOR ROLES</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Let&apos;s build together.
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                Have an internship opening, a student project, or want to connect? Reach out anytime!
              </p>

              {/* 1-Click Copy Email */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button
                  onClick={copyEmail}
                  data-cursor="copy"
                  className="group flex items-center gap-2 rounded-xl border border-[#FF1E27]/40 bg-black px-3.5 py-2.5 font-mono text-xs sm:text-sm text-[#FF3843] transition-all hover:border-[#FF1E27] hover:bg-[#FF1E27]/10 hover:shadow-[0_0_15px_rgba(255,30,39,0.3)]"
                >
                  <Mail className="h-4 w-4 text-[#FF1E27]" />
                  <span>{email}</span>
                  {copied ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded ml-1.5">
                      <Check className="h-3 w-3" /> Copied!
                    </span>
                  ) : (
                    <Copy className="h-3.5 w-3.5 text-slate-400 ml-1.5" />
                  )}
                </button>

                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 font-mono text-xs sm:text-sm text-slate-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span>{phone}</span>
                </a>
              </div>

              {/* Socials & Resume */}
              <div className="flex items-center gap-3 pt-2">
                <MagneticButton
                  href="https://linkedin.com"
                  className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 hover:text-[#FF1E27] hover:border-[#FF1E27]/50 transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                </MagneticButton>

                <MagneticButton
                  href="https://github.com"
                  className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 hover:text-[#FF1E27] hover:border-[#FF1E27]/50 transition-all"
                >
                  <Github className="h-4 w-4" />
                </MagneticButton>

                <MagneticButton
                  href="/resume.pdf"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-xs font-mono text-slate-300 hover:border-[#FF1E27]/50 hover:text-[#FF3843] transition-all"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Résumé PDF</span>
                </MagneticButton>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/10 bg-black/95 p-5 sm:p-6 shadow-xl">
                {submitted ? (
                  <div className="py-8 text-center space-y-2.5 font-mono">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#FF1E27]/20 text-[#FF1E27]">
                      <Check className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">Message Sent!</h3>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      Thanks for reaching out! I will reply shortly. You can also email directly to <span className="text-[#FF3843]">{email}</span>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs text-[#FF1E27] underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <span className="font-mono text-xs font-semibold text-slate-300 uppercase">
                        Quick Message
                      </span>
                      <span className="font-mono text-[10px] text-[#FF3843]">Direct transmission</span>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-[#FF1E27] focus:outline-none focus:ring-1 focus:ring-[#FF1E27]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-[#FF1E27] focus:outline-none focus:ring-1 focus:ring-[#FF1E27]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-1">Message</label>
                      <textarea
                        rows={3}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Hi Shiva, we would love to connect about an internship..."
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-[#FF1E27] focus:outline-none focus:ring-1 focus:ring-[#FF1E27] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF1E27] to-[#B91C1C] py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white hover:from-[#FF3843] hover:to-[#FF1E27] transition-all shadow-md shadow-[#FF1E27]/30"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Send Message</span>
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

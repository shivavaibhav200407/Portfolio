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
    <section id="contact" className="relative py-20 px-4 sm:px-8 border-t border-white/5 bg-cyber-bg">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyber-surface via-cyber-surface/90 to-cyber-bg p-6 sm:p-10 shadow-2xl">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-600/15 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3 py-1 font-mono text-xs text-cyan-300">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>OPEN FOR ROLES</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
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
                  className="group flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/40 px-3.5 py-2.5 font-mono text-xs sm:text-sm text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-900/40"
                >
                  <Mail className="h-4 w-4 text-cyan-400" />
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
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 font-mono text-xs sm:text-sm text-slate-300 hover:border-white/20 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span>{phone}</span>
                </a>
              </div>

              {/* Socials & Resume */}
              <div className="flex items-center gap-3 pt-2">
                <MagneticButton
                  href="https://linkedin.com"
                  className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                </MagneticButton>

                <MagneticButton
                  href="https://github.com"
                  className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                >
                  <Github className="h-4 w-4" />
                </MagneticButton>

                <MagneticButton
                  href="/resume.pdf"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/10 bg-white/5 text-xs font-mono text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-all"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Résumé PDF</span>
                </MagneticButton>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/10 bg-cyber-bg/90 p-5 sm:p-6 shadow-xl">
                {submitted ? (
                  <div className="py-8 text-center space-y-2.5 font-mono">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">Message Sent!</h3>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      Thanks for reaching out! I will reply shortly. You can also email directly to <span className="text-cyan-300">{email}</span>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs text-cyan-400 underline"
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
                      <span className="font-mono text-[10px] text-cyan-400">Direct transmission</span>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
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
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
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
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
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

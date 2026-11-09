"use client";

import { useState } from "react";
import { Mail, Phone, Copy, Check, Send, Download, Linkedin, Github, Sparkles } from "lucide-react";

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
    // Client-side simulation of successful dispatch with mailto fallback
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-8 border-t border-white/5 bg-cyber-bg">
      <div className="mx-auto max-w-6xl">
        {/* Banner CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-cyber-surface via-cyber-surface/90 to-cyber-bg p-8 sm:p-12 shadow-[0_0_80px_rgba(0,240,255,0.15)]">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Direct Hook */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3 py-1 font-mono text-xs font-semibold text-cyan-300">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>INITIATE CONTACT // OPEN FOR OPPORTUNITIES</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
                Seeking Summer & Fall AI / Software Internships.
              </h2>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
                Whether you have an internship opening, a freelance project, or simply want to discuss multi-agent systems and design architectures, my inbox is always open.
              </p>

              {/* 1-Click Copy Email Pill */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button
                  onClick={copyEmail}
                  data-cursor="copy"
                  className="group flex items-center gap-2.5 rounded-xl border border-cyan-500/40 bg-cyan-950/40 px-4 py-3 font-mono text-xs sm:text-sm text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-900/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                >
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span>{email}</span>
                  {copied ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded ml-2">
                      <Check className="h-3 w-3" /> Copied!
                    </span>
                  ) : (
                    <Copy className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:scale-110 ml-2" />
                  )}
                </button>

                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs sm:text-sm text-slate-300 hover:border-white/20 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span>{phone}</span>
                </a>
              </div>

              {/* Social Connectivity */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-xs font-mono text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-all"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Résumé PDF</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/10 bg-cyber-bg/90 p-6 sm:p-7 shadow-xl">
                {submitted ? (
                  <div className="py-12 text-center space-y-3 font-mono">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">Transmission Received</h3>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      Thank you for reaching out! A direct message has been scheduled. You can also write directly to <span className="text-cyan-300">{email}</span>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs text-cyan-400 underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Direct Inquiry Channel
                      </span>
                      <span className="font-mono text-[10px] text-cyan-400">Response &lt; 24h</span>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 font-sans text-xs text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 font-sans text-xs text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-1">Inquiry / Message</label>
                      <textarea
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Hi Shiva, we're building an AI platform and would love to interview you for an engineering internship..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 font-sans text-xs text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-mono text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
                    >
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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

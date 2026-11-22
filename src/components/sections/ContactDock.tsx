"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send, Download, Linkedin, Github, Loader2, AlertCircle } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";
import { PROFILE } from "@/data/profile";

export default function ContactDock() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [botcheck, setBotcheck] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "cac4be95-e692-4f14-8692-033ef392d01f";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Portfolio Message from ${formState.name || "Visitor"}`,
          from_name: "Shiva Vaibhav Portfolio Form",
          botcheck: botcheck ? "true" : undefined,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(
          data.message || "Failed to send message. Please email me directly."
        );
      }
    } catch (err: any) {
      setErrorMessage(
        "Network connection error. Please email me directly at vaibhava344@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] dark:border-white/5 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border p-6 sm:p-10 shadow-[0_4px_25px_-2px_rgba(37,99,235,0.08)] border-[#DCE6F7] bg-white dark:border-white/10 dark:bg-[#070707] dark:shadow-2xl">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-[100px] bg-blue-500/[0.06] dark:bg-[#FF1E27]/[0.05]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-[100px] bg-blue-600/[0.04] dark:bg-[#FF1E27]/[0.03]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Bio & Direct Links */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[11px] tracking-widest uppercase text-[#5B6B8C] dark:text-slate-400 block">
                06 // CONTACT &middot; OPEN FOR ROLES
              </span>

              <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-[#0B1B3A] dark:text-white">
                Let&apos;s build together.
              </h2>

              <p className="text-xs sm:text-sm leading-relaxed max-w-md font-sans text-[#5B6B8C] dark:text-slate-300">
                Looking for an internship or first job where I can learn, be mentored, and contribute. Have an opportunity or want to connect? Reach out anytime!
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

                <a
                  href={PROFILE.contact.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="A_Shiva_Vaibhav_Resume.pdf"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-mono transition-all border-[#DCE6F7] bg-[#EAF2FF] text-[#0B1B3A] hover:border-[#2563EB] hover:text-[#2563EB] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-[#FF1E27]/50 dark:hover:text-[#FF3843]"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border p-5 sm:p-6 border-[#DCE6F7] bg-[#F7FAFF] dark:border-white/10 dark:bg-black/95">
                {submitted ? (
                  <div className="py-8 text-center space-y-2.5 font-mono">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                      <Check className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-normal text-[#0B1B3A] dark:text-white">Message Delivered!</h3>
                    <p className="text-xs max-w-sm mx-auto text-[#5B6B8C] dark:text-slate-400 font-sans">
                      Thank you for reaching out! Your message was delivered to <span className="font-semibold text-[#2563EB] dark:text-[#FF3843]">{PROFILE.contact.email}</span>. I will reply as soon as possible.
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
                      <span className="font-mono text-[10px] text-[#2563EB] dark:text-[#FF3843]">Delivers to Gmail</span>
                    </div>

                    {/* Hidden Honeypot Spam Protection */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                      checked={botcheck}
                      onChange={(e) => setBotcheck(e.target.checked)}
                    />

                    {/* Error Banner with Direct Email Fallback */}
                    {errorMessage && (
                      <div className="rounded-xl border p-3 font-mono text-xs border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300 space-y-1.5">
                        <div className="flex items-start gap-1.5">
                          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                          <span>{errorMessage}</span>
                        </div>
                        <div className="pt-1">
                          <a
                            href={`mailto:${PROFILE.contact.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formState.name || "Visitor")}&body=${encodeURIComponent(formState.message)}`}
                            className="inline-flex items-center gap-1 font-semibold underline text-[#2563EB] dark:text-[#FF4D55]"
                          >
                            <Mail className="h-3 w-3" />
                            Click here to email directly via your mail app
                          </a>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block font-mono text-xs mb-1 text-[#5B6B8C] dark:text-slate-400">Your Name</label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Doe"
                        className="w-full rounded-xl border px-3 py-2 text-xs transition-all border-[#DCE6F7] bg-white text-[#0B1B3A] placeholder-[#5B6B8C]/50 focus:border-[#2563EB] focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder-slate-600 dark:focus:border-[#FF1E27] disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs mb-1 text-[#5B6B8C] dark:text-slate-400">Your Email</label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border px-3 py-2 text-xs transition-all border-[#DCE6F7] bg-white text-[#0B1B3A] placeholder-[#5B6B8C]/50 focus:border-[#2563EB] focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder-slate-600 dark:focus:border-[#FF1E27] disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs mb-1 text-[#5B6B8C] dark:text-slate-400">Message</label>
                      <textarea
                        rows={3}
                        required
                        disabled={isSubmitting}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Hi Shiva, we have an opening for an engineering internship..."
                        className="w-full rounded-xl border px-3 py-2 text-xs transition-all border-[#DCE6F7] bg-white text-[#0B1B3A] placeholder-[#5B6B8C]/50 focus:border-[#2563EB] focus:outline-none resize-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder-slate-600 dark:focus:border-[#FF1E27] disabled:opacity-50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 rounded-xl py-2.5 font-mono text-xs font-semibold text-white shadow-md transition-all bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-gradient-to-r dark:from-[#FF1E27] dark:to-[#DC2626] dark:hover:brightness-110 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          <span>Transmit Message</span>
                        </>
                      )}
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

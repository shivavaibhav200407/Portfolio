"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Eye, X, ExternalLink, FolderOpen, Play, ArrowUpRight } from "lucide-react";
import { POSTERS, type Poster } from "@/data/posters";
import { PROFILE } from "@/data/profile";

export default function PostersGallery() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
  const [filter, setFilter] = useState<string>("ALL");

  const categories = ["ALL", "Hackathon", "Technical Workshop", "College Fest", "Club Event", "Motion Poster"];

  const filteredPosters =
    filter === "ALL"
      ? POSTERS
      : POSTERS.filter((p) => p.category === filter);

  return (
    <section id="posters" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-slate-200 bg-slate-50/60 text-slate-900 dark:border-white/5 dark:bg-[#020202] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col items-start gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-semibold border-sky-500/20 bg-sky-50 text-sky-700 dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
              <Palette className="h-3.5 w-3.5 text-sky-600 dark:text-[#FF1E27]" />
              <span>05 // DESIGN WORK &middot; S.A.C.C CHIEF DESIGNER</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              College Posters & Creative Direction
            </h2>
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 mt-1 font-sans">
              As Chief Designer & Disciplinary Head for our student council (S.A.C.C), I design promotional posters, social media banners, and motion reels for campus hackathons (SIH 2026), workshops, and cultural festivals.
            </p>
          </div>

          {/* Direct Google Drive Archive Pill */}
          <a
            href={PROFILE.contact.drivePostersFolder}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 font-mono text-xs font-semibold shadow-sm transition-all border-sky-500/40 bg-sky-50 text-sky-700 hover:bg-sky-100 hover:border-sky-600 dark:border-[#FF1E27]/40 dark:bg-[#FF1E27]/10 dark:text-[#FF3843] dark:hover:bg-[#FF1E27]/20"
          >
            <FolderOpen className="h-4 w-4" />
            <span>Open Full Google Drive Vault</span>
            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-all ${
                filter === cat
                  ? "border-sky-600 bg-sky-600 text-white shadow-sm dark:border-[#FF1E27]/60 dark:bg-[#FF1E27]/20 dark:text-[#FF3843] dark:shadow-[0_0_15px_rgba(255,30,39,0.2)]"
                  : "border-slate-200 bg-white text-slate-600 hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Poster Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosters.map((poster) => (
            <motion.div
              key={poster.id}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              onClick={() => setSelectedPoster(poster)}
              data-cursor="view"
              className="group cursor-pointer rounded-2xl border overflow-hidden shadow-md transition-all border-slate-200 bg-white hover:border-sky-500 hover:shadow-xl dark:border-white/10 dark:bg-[#070707] dark:hover:border-[#FF1E27]/50 dark:hover:shadow-[0_0_25px_rgba(255,30,39,0.2)] flex flex-col justify-between"
            >
              {/* Poster Canvas Visual */}
              <div
                className="relative aspect-[4/3] p-5 flex flex-col justify-between overflow-hidden border-b border-slate-200 dark:border-white/10"
                style={{
                  background: `linear-gradient(135deg, ${poster.accentColor} 0%, #050505 100%)`,
                }}
              >
                <div className="relative z-10 flex justify-between items-start font-mono text-[10px] text-slate-300">
                  <span className="px-2 py-0.5 rounded border border-white/20 bg-black/70 backdrop-blur-md">
                    {poster.category}
                  </span>
                  <span>{poster.year}</span>
                </div>

                <div className="relative z-10 my-auto text-left">
                  <div className="font-display text-xl font-extrabold tracking-tight leading-tight uppercase text-white drop-shadow-md">
                    {poster.title}
                  </div>
                  <div className="font-mono text-[11px] text-slate-300 mt-1 line-clamp-2">
                    {poster.subtitle}
                  </div>
                </div>

                <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-2 font-mono text-[10px] text-slate-400">
                  <span className="truncate max-w-[150px]">{poster.club}</span>
                  <span className="flex items-center gap-1 text-white font-medium group-hover:translate-x-0.5 transition-transform">
                    {poster.category === "Motion Poster" ? (
                      <>
                        <Play className="h-3 w-3 fill-current" /> Play Reel
                      </>
                    ) : (
                      <>
                        <Eye className="h-3 w-3" /> Inspect Details
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Description & Action Links */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs line-clamp-2 font-sans text-slate-600 dark:text-slate-300">
                    {poster.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {poster.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border border-slate-200 bg-slate-50 text-slate-600 dark:border-white/5 dark:bg-white/[0.04] dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Drive link action */}
                <div className="mt-4 pt-3 border-t flex items-center justify-between font-mono text-[11px] border-slate-200 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400">S.A.C.C Design Archive</span>
                  <a
                    href={poster.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 font-semibold text-sky-600 hover:underline dark:text-[#FF3843]"
                  >
                    <span>View on Drive</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedPoster && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl rounded-2xl border p-6 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto border-slate-200 bg-white text-slate-900 dark:border-[#FF1E27]/50 dark:bg-[#070707] dark:text-white"
              >
                <button
                  onClick={() => setSelectedPoster(null)}
                  className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                  <div
                    className="aspect-[3/4] rounded-xl p-5 flex flex-col justify-between border relative overflow-hidden border-slate-200 dark:border-white/10"
                    style={{
                      background: `linear-gradient(135deg, ${selectedPoster.accentColor} 0%, #000000 100%)`,
                    }}
                  >
                    <div className="relative z-10 flex justify-between items-center font-mono text-[11px] text-slate-300">
                      <span>{selectedPoster.category}</span>
                      <span>{selectedPoster.year}</span>
                    </div>

                    <div className="relative z-10 my-auto text-left">
                      <div className="font-display text-2xl font-extrabold uppercase tracking-tight text-white leading-tight">
                        {selectedPoster.title}
                      </div>
                      <div className="font-mono text-xs text-slate-300 mt-2">
                        {selectedPoster.subtitle}
                      </div>
                    </div>

                    <div className="relative z-10 font-mono text-[10px] text-slate-400 border-t border-white/10 pt-2">
                      <div>Club: {selectedPoster.club}</div>
                      <div>Designer: A. Shiva Vaibhav</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-sky-600 dark:text-[#FF3843]">
                        Design Specifications
                      </span>
                      <h3 className="font-display text-xl font-bold mt-1 text-slate-900 dark:text-white">
                        {selectedPoster.title}
                      </h3>
                      <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        {selectedPoster.club} ({selectedPoster.year})
                      </p>
                    </div>

                    <p className="text-xs leading-relaxed font-sans text-slate-700 dark:text-slate-300">
                      {selectedPoster.description}
                    </p>

                    <div className="rounded-xl border p-3 space-y-1.5 font-mono text-xs border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.02]">
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Format:</span>
                        <span className="text-slate-800 dark:text-slate-200">{selectedPoster.specs.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Tools:</span>
                        <span className="font-semibold text-sky-600 dark:text-[#FF3843]">{selectedPoster.specs.tool}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Target Audience:</span>
                        <span className="text-slate-800 dark:text-slate-200">{selectedPoster.specs.audience}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <a
                        href={selectedPoster.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl py-2.5 font-mono text-xs font-semibold text-white transition-all bg-sky-600 hover:bg-sky-700 shadow-md dark:bg-gradient-to-r dark:from-[#FF1E27] dark:to-[#DC2626] dark:hover:brightness-110"
                      >
                        <FolderOpen className="h-4 w-4" />
                        <span>View High-Res File on Google Drive</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

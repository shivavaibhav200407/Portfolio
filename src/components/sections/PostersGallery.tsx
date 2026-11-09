"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Eye, X, Layers, Sparkles, Compass, Download } from "lucide-react";
import { POSTERS, type Poster } from "@/data/posters";

export default function PostersGallery() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
  const [filter, setFilter] = useState<string>("ALL");

  const categories = ["ALL", "Tech Symposium", "Hackathon", "Cultural Summit", "Workshop"];

  const filteredPosters =
    filter === "ALL"
      ? POSTERS
      : POSTERS.filter((p) => p.category === filter);

  return (
    <section id="posters" className="relative py-24 px-4 sm:px-8 border-t border-white/5 bg-cyber-bg/70">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 font-mono text-xs font-semibold text-pink-300">
            <Palette className="h-3.5 w-3.5 text-pink-400" />
            <span>CREATIVE DIRECTION // S.A.C.C CHIEF DESIGNER</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            Posters, Typography & Visual Systems
          </h2>
          <p className="max-w-3xl text-sm sm:text-base text-slate-400 mt-2">
            As Chief Designer & Disciplinary Head for the Siddhartha Allied Clubs Council, I direct visual identity, poster architecture, and typography systems for collegiate technical symposia and cultural conclaves.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-3.5 py-1.5 font-mono text-xs transition-all ${
                filter === cat
                  ? "bg-pink-500/20 text-pink-300 border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.2)]"
                  : "bg-white/5 text-slate-400 border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Poster Grid with 3D Tilt Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosters.map((poster) => (
            <motion.div
              key={poster.id}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={() => setSelectedPoster(poster)}
              data-cursor="view"
              className="group cursor-pointer rounded-2xl border border-white/10 bg-cyber-surface/90 overflow-hidden shadow-xl transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] flex flex-col"
            >
              {/* Poster Canvas Visual Representation */}
              <div
                className="relative aspect-[3/4] p-5 flex flex-col justify-between overflow-hidden border-b border-white/10"
                style={{
                  background: `linear-gradient(135deg, ${poster.accentColor} 0%, #08090C 100%)`,
                }}
              >
                {/* Subtle grid pattern inside poster */}
                <div className="absolute inset-0 opacity-20 pointer-events-none cyber-grid-dark" />

                {/* Top Poster Meta */}
                <div className="relative z-10 flex justify-between items-start font-mono text-[10px] text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10">
                    {poster.category}
                  </span>
                  <span>{poster.year}</span>
                </div>

                {/* Center Bold Typographic Layout */}
                <div className="relative z-10 my-auto text-left">
                  <div
                    className="font-display text-2xl font-black tracking-tight leading-none uppercase"
                    style={{ color: poster.themeColor }}
                  >
                    {poster.title}
                  </div>
                  <div className="font-mono text-[11px] text-slate-300 mt-2 line-clamp-2">
                    {poster.subtitle}
                  </div>
                </div>

                {/* Bottom Poster Footer */}
                <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-2 font-mono text-[9px] text-slate-400">
                  <span className="truncate max-w-[120px]">{poster.client}</span>
                  <span className="flex items-center gap-1 text-pink-400 font-bold group-hover:translate-x-0.5 transition-transform">
                    <Eye className="h-3 w-3" /> Inspect
                  </span>
                </div>
              </div>

              {/* Poster Description & Tags */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-400 line-clamp-2 font-sans">
                  {poster.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {poster.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/5 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Poster Inspection Modal */}
        <AnimatePresence>
          {selectedPoster && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl rounded-2xl border border-pink-500/40 bg-cyber-surface p-6 sm:p-8 shadow-[0_0_60px_rgba(236,72,153,0.2)] max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedPoster(null)}
                  className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* Poster Large Preview */}
                  <div
                    className="aspect-[3/4] rounded-xl p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${selectedPoster.accentColor} 0%, #08090C 100%)`,
                    }}
                  >
                    <div className="flex justify-between items-center font-mono text-xs text-slate-400">
                      <span>{selectedPoster.category}</span>
                      <span>{selectedPoster.year}</span>
                    </div>

                    <div className="my-auto">
                      <div
                        className="font-display text-4xl font-extrabold uppercase tracking-tight"
                        style={{ color: selectedPoster.themeColor }}
                      >
                        {selectedPoster.title}
                      </div>
                      <div className="font-mono text-xs text-slate-300 mt-3">
                        {selectedPoster.subtitle}
                      </div>
                    </div>

                    <div className="font-mono text-[10px] text-slate-400 border-t border-white/10 pt-3">
                      <div>Client: {selectedPoster.client}</div>
                      <div>Designed by: A. Shiva Vaibhav (Chief Designer)</div>
                    </div>
                  </div>

                  {/* Poster Design Architecture Specs */}
                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-xs font-semibold text-pink-400 uppercase">
                        Design Architecture
                      </span>
                      <h3 className="font-display text-2xl font-bold text-slate-100 mt-1">
                        {selectedPoster.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 font-mono">
                        {selectedPoster.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {selectedPoster.description}
                    </p>

                    <div className="rounded-xl border border-white/10 bg-black/40 p-4 space-y-2 font-mono text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Dimensions:</span>
                        <span className="text-white font-bold">{selectedPoster.specs.dimensions}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Format:</span>
                        <span className="text-white font-bold">{selectedPoster.specs.format}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Typography:</span>
                        <span className="text-cyan-300 font-bold">{selectedPoster.specs.typography}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedPoster.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-pink-500/10 text-pink-300 border border-pink-500/30"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 text-xs text-slate-400 font-mono">
                      * Want to feature your actual high-res poster files? Simply drop your JPG or PNG files into <code className="text-cyan-300">public/posters/</code> anytime!
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

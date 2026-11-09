"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Eye, X } from "lucide-react";
import { POSTERS, type Poster } from "@/data/posters";

export default function PostersGallery() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
  const [filter, setFilter] = useState<string>("ALL");

  const categories = ["ALL", "Technical Workshop", "College Fest", "Hackathon", "Club Event"];

  const filteredPosters =
    filter === "ALL"
      ? POSTERS
      : POSTERS.filter((p) => p.category === filter);

  return (
    <section id="posters" className="relative py-20 px-4 sm:px-8 border-t border-white/5 bg-[#070204] transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF1E27]/30 bg-[#FF1E27]/10 px-3 py-1 font-mono text-xs font-medium text-[#FF3843]">
            <Palette className="h-3.5 w-3.5 text-[#FF1E27]" />
            <span>COLLEGE COUNCIL // S.A.C.C CHIEF DESIGNER</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            College Event Posters & Graphic Design
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300 mt-1">
            As Chief Designer & Disciplinary Head for our college council (S.A.C.C), I design promotional posters, social media banners, and announcements for campus technical workshops, fests, and hackathons.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-all ${
                filter === cat
                  ? "bg-[#FF1E27]/20 text-[#FF3843] border border-[#FF1E27]/60 shadow-[0_0_15px_rgba(255,30,39,0.25)]"
                  : "bg-white/[0.03] text-slate-400 border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Poster Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPosters.map((poster) => (
            <motion.div
              key={poster.id}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setSelectedPoster(poster)}
              data-cursor="view"
              className="group cursor-pointer rounded-2xl border border-white/10 bg-black overflow-hidden shadow-lg transition-all hover:border-[#FF1E27]/60 hover:shadow-[0_0_25px_rgba(255,30,39,0.3)] flex flex-col"
            >
              {/* Poster Canvas Visual */}
              <div
                className="relative aspect-[3/4] p-4 flex flex-col justify-between overflow-hidden border-b border-white/10"
                style={{
                  background: `linear-gradient(135deg, ${poster.accentColor} 0%, #000000 100%)`,
                }}
              >
                <div className="relative z-10 flex justify-between items-start font-mono text-[10px] text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-black/80 border border-white/10">
                    {poster.category}
                  </span>
                  <span>{poster.year}</span>
                </div>

                <div className="relative z-10 my-auto text-left">
                  <div
                    className="font-display text-xl font-extrabold tracking-tight leading-tight uppercase text-white"
                  >
                    {poster.title}
                  </div>
                  <div className="font-mono text-[11px] text-slate-300 mt-1 line-clamp-2">
                    {poster.subtitle}
                  </div>
                </div>

                <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-2 font-mono text-[9px] text-slate-400">
                  <span className="truncate max-w-[120px]">{poster.club}</span>
                  <span className="flex items-center gap-1 text-[#FF3843] font-medium group-hover:translate-x-0.5 transition-transform">
                    <Eye className="h-3 w-3" /> View Details
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-400 line-clamp-2">
                  {poster.description}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1">
                  {poster.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/5 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedPoster && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl rounded-2xl border border-[#FF1E27]/50 bg-black p-6 sm:p-7 shadow-[0_0_50px_rgba(255,30,39,0.3)] max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedPoster(null)}
                  className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                  <div
                    className="aspect-[3/4] rounded-xl p-5 flex flex-col justify-between border border-white/10 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${selectedPoster.accentColor} 0%, #000000 100%)`,
                    }}
                  >
                    <div className="flex justify-between items-center font-mono text-[11px] text-slate-400">
                      <span>{selectedPoster.category}</span>
                      <span>{selectedPoster.year}</span>
                    </div>

                    <div className="my-auto">
                      <div
                        className="font-display text-3xl font-extrabold uppercase tracking-tight text-white"
                      >
                        {selectedPoster.title}
                      </div>
                      <div className="font-mono text-xs text-slate-300 mt-2">
                        {selectedPoster.subtitle}
                      </div>
                    </div>

                    <div className="font-mono text-[10px] text-slate-400 border-t border-white/10 pt-2">
                      <div>Club: {selectedPoster.club}</div>
                      <div>Designer: A. Shiva Vaibhav</div>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <span className="font-mono text-xs text-[#FF3843] font-semibold uppercase">
                        Poster Information
                      </span>
                      <h3 className="font-display text-xl font-bold text-white mt-0.5">
                        {selectedPoster.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {selectedPoster.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {selectedPoster.description}
                    </p>

                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 space-y-1.5 font-mono text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Format:</span>
                        <span className="text-white">{selectedPoster.specs.type}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Tools:</span>
                        <span className="text-white">{selectedPoster.specs.tool}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Audience:</span>
                        <span className="text-[#FF3843]">{selectedPoster.specs.audience}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {selectedPoster.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-[#FF1E27]/10 text-[#FF3843] border border-[#FF1E27]/30"
                        >
                          #{tag}
                        </span>
                      ))}
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

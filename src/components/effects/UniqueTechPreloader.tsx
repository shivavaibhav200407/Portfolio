"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
  isDark?: boolean;
}

export default function UniqueTechPreloader({ onComplete, isDark = true }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [telemetry, setTelemetry] = useState("CALIBRATING INTERFACES...");

  useEffect(() => {
    // Only run if not already shown in this session (instant on refreshes)
    const hasLoaded = sessionStorage.getItem("sv_loaded");
    if (hasLoaded) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const telemetryStages = [
      "ESTABLISHING SYSTEM BUS...",
      "LOADING SAGE AGENT TOPOLOGY...",
      "INITIALIZING CHROMA DB VECTOR STORE...",
      "CALIBRATING IRIS ML SLIDERS...",
      "RETRIEVING S.A.C.C DESIGN VAULT...",
      "ALL SUBSYSTEMS NOMINAL // WELCOME",
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setTelemetry(telemetryStages[5]);
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          sessionStorage.setItem("sv_loaded", "true");
          onComplete?.();
        }, 400);
      } else {
        setProgress(current);
        const stageIndex = Math.min(
          Math.floor((current / 100) * (telemetryStages.length - 1)),
          telemetryStages.length - 2
        );
        setTelemetry(telemetryStages[stageIndex]);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  const accentColor = isDark ? "#FF1E27" : "#0284C7";
  const bgColor = isDark ? "#000000" : "#FFFFFF";
  const textColor = isDark ? "#FFFFFF" : "#0F172A";

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="unique-tech-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center p-4 font-mono select-none"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {/* Outer Geometric Scanning Radar Reticle */}
          <div className="relative flex h-56 w-56 items-center justify-center">
            {/* Spinning Outer Segmented Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed opacity-40"
              style={{ borderColor: accentColor }}
            />

            {/* Counter-Spinning Tech Caliper Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-current opacity-20"
            >
              <div
                className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              <div
                className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
            </motion.div>

            {/* Pulsing Hexagonal Aperture Grid */}
            <div
              className="absolute inset-7 rounded-full border opacity-30"
              style={{ borderColor: accentColor }}
            />

            {/* Center HUD Percentage Display */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] uppercase tracking-widest opacity-60">
                SYSTEM BOOT
              </span>
              <div
                className="font-display text-4xl sm:text-5xl font-extrabold tracking-tighter my-1"
                style={{ color: accentColor }}
              >
                {progress}%
              </div>
              <span className="text-[9px] uppercase tracking-wider opacity-50">
                A. SHIVA VAIBHAV
              </span>
            </div>

            {/* Circular Orbit Indicator SVG */}
            <svg
              className="absolute inset-0 h-full w-full -rotate-90 pointer-events-none"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="opacity-10"
              />
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke={accentColor}
                strokeWidth="2.5"
                strokeDasharray="276"
                strokeDashoffset={276 - (276 * progress) / 100}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.1s linear" }}
              />
            </svg>
          </div>

          {/* Telemetry Status Line */}
          <div className="mt-8 flex flex-col items-center text-center space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span
                className="h-2 w-2 rounded-full animate-ping"
                style={{ backgroundColor: accentColor }}
              />
              <span className="font-semibold tracking-wider">{telemetry}</span>
            </div>
            <p className="text-[10px] opacity-40">
              B.Tech CSE (AI & ML) • SITS Hyderabad • Class of 2028
            </p>
          </div>

          {/* Quick Skip Button */}
          <button
            onClick={() => {
              setIsDone(true);
              sessionStorage.setItem("sv_loaded", "true");
              onComplete?.();
            }}
            className="absolute bottom-6 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
          >
            [ Skip Preloader &gt;&gt; ]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

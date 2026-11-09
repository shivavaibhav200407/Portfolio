"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NeonRedCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view">("default");
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only disable if device has strictly no mouse capability
    const isTouchOnly = window.matchMedia("(pointer: coarse) and (hover: none)").matches;
    if (isTouchOnly) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("[data-cursor]") as HTMLElement | null;
      if (interactive) {
        const type = interactive.getAttribute("data-cursor");
        if (type === "view" || type === "explore") {
          setCursorState("view");
          return;
        }
      }

      if (target.closest("button, a, input, [role='button']")) {
        setCursorState("hover");
        return;
      }

      setCursorState("default");
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.25s ease-out" }}
    >
      <motion.div
        className="fixed top-0 left-0"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isClicking ? 0.9 : cursorState === "hover" ? 1.12 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 36,
          mass: 0.15,
        }}
        style={{ originX: 0, originY: 0 }}
      >
        {/* Precision Neon Red Arrow (Refined Studio Quality) */}
        <div className="relative -top-[2px] -left-[3px]">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all duration-200 ${
              cursorState === "hover"
                ? "filter drop-shadow-[0_0_10px_rgba(255,30,39,0.85)]"
                : "filter drop-shadow-[0_0_5px_rgba(255,30,39,0.5)]"
            }`}
          >
            {/* Outline Arrow Path */}
            <path
              d="M3 2L11 23L14 15L22 12L3 2Z"
              fill="#050505"
              stroke="#FF1E27"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* Center Precision Target Dot */}
            <circle cx="9.5" cy="9.5" r="1.3" fill="#FFFFFF" />
          </svg>
        </div>

        {/* Refined "VIEW" Floating Badge to bottom-right of arrow */}
        <AnimatePresence>
          {cursorState === "view" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 4 }}
              transition={{ duration: 0.15 }}
              className="absolute top-4 left-5 flex items-center gap-1 rounded-full border border-[#FF1E27]/70 bg-black/95 px-2 py-0.5 shadow-[0_0_15px_rgba(255,30,39,0.35)] backdrop-blur-md"
            >
              <span className="h-1 w-1 rounded-full bg-[#FF1E27]" />
              <span className="font-mono text-[9px] font-bold tracking-widest text-white">
                VIEW
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

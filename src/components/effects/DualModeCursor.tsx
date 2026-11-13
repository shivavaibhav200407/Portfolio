"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DualModeCursorProps {
  isDark?: boolean;
}

export default function DualModeCursor({ isDark = true }: DualModeCursorProps) {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view">("default");
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const requestRef = useRef<number>();
  const mouseRef = useRef({ x: -100, y: -100 });
  const trailingRef = useRef({ x: -100, y: -100 });

  const primaryColor = isDark ? "#FF1E27" : "#0284C7";
  const glowColor = isDark ? "rgba(255, 30, 39, 0.4)" : "rgba(2, 132, 199, 0.35)";

  useEffect(() => {
    const isTouchOnly = window.matchMedia("(pointer: coarse) and (hover: none)").matches;
    if (isTouchOnly) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
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

      if (target.closest("button, a, input, textarea, [role='button'], .clickable")) {
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

    // Smooth Lerp Animation Loop for the Trailing Ring
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animateTrail = () => {
      trailingRef.current.x = lerp(trailingRef.current.x, mouseRef.current.x, 0.18);
      trailingRef.current.y = lerp(trailingRef.current.y, mouseRef.current.y, 0.18);
      setTrailingPos({ x: trailingRef.current.x, y: trailingRef.current.y });
      requestRef.current = requestAnimationFrame(animateTrail);
    };

    requestRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* 1. Pinpoint Center Dot (Zero-Latency Direct Tracking) */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isClicking ? 0.6 : cursorState === "hover" ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 1200, damping: 40 }}
        style={{
          width: 5,
          height: 5,
          backgroundColor: primaryColor,
          boxShadow: `0 0 10px ${primaryColor}`,
        }}
      />

      {/* 2. Trailing Physics Lerp Ring (Decoupled Follower) */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center pointer-events-none"
        animate={{
          x: trailingPos.x,
          y: trailingPos.y,
          width: cursorState === "hover" ? 44 : cursorState === "view" ? 52 : 24,
          height: cursorState === "hover" ? 44 : cursorState === "view" ? 52 : 24,
          borderColor: primaryColor,
          backgroundColor: cursorState === "hover" ? glowColor : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 28,
          mass: 0.2,
        }}
        style={{
          borderWidth: 1.5,
          borderStyle: "solid",
          boxShadow: cursorState === "hover" ? `0 0 20px ${glowColor}` : "none",
        }}
      >
        {/* VIEW Pill on Projects */}
        <AnimatePresence>
          {cursorState === "view" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="font-mono text-[8px] font-bold tracking-widest uppercase"
              style={{ color: primaryColor }}
            >
              VIEW
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

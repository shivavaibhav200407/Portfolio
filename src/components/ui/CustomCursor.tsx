"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "action">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("[data-cursor]") as HTMLElement | null;
      if (interactive) {
        const type = interactive.getAttribute("data-cursor");
        if (type === "view") {
          setCursorText("VIEW");
          setCursorVariant("action");
        } else if (type === "explore") {
          setCursorText("EXPLORE");
          setCursorVariant("action");
        } else if (type === "copy") {
          setCursorText("COPY");
          setCursorVariant("action");
        } else {
          setCursorText("");
          setCursorVariant("hover");
        }
      } else if (target.closest("button, a, input, [role='button']")) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border border-cyan-400/60 bg-cyan-400/10 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (cursorVariant === "action" ? 36 : cursorVariant === "hover" ? 24 : 16),
          y: mousePosition.y - (cursorVariant === "action" ? 36 : cursorVariant === "hover" ? 24 : 16),
          width: cursorVariant === "action" ? 72 : cursorVariant === "hover" ? 48 : 32,
          height: cursorVariant === "action" ? 72 : cursorVariant === "hover" ? 48 : 32,
          borderColor: cursorVariant === "action" ? "rgba(0, 240, 255, 0.9)" : "rgba(0, 240, 255, 0.5)",
          scale: cursorVariant === "action" ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.5 }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-300">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Core Dot */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#00f0ff]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40 }}
      />
    </div>
  );
}

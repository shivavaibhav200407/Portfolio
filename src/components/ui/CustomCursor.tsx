"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isSlider, setIsSlider] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for sliders
      if (target.tagName === "INPUT" && target.getAttribute("type") === "range") {
        setIsSlider(true);
        setCursorText("↔");
        setIsHovered(false);
        setIsText(false);
        return;
      }
      setIsSlider(false);

      // Check for custom data-cursor="view"
      const interactive = target.closest("[data-cursor]") as HTMLElement | null;
      if (interactive) {
        const type = interactive.getAttribute("data-cursor");
        if (type === "view" || type === "explore") {
          setCursorText("VIEW");
          setIsHovered(true);
          setIsText(false);
          return;
        }
      }

      // Check for clickable elements
      if (target.closest("button, a, [role='button']")) {
        setCursorText("");
        setIsHovered(true);
        setIsText(false);
        return;
      }

      // Check for reading text
      if (target.closest("p, li, blockquote")) {
        setCursorText("");
        setIsHovered(false);
        setIsText(true);
        return;
      }

      // Default
      setCursorText("");
      setIsHovered(false);
      setIsText(false);
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

  if (!isVisible) return null;

  // Determine dimensions
  let size = 26;
  if (cursorText) {
    size = 56;
  } else if (isHovered) {
    size = 44;
  } else if (isSlider) {
    size = 40;
  } else if (isText) {
    size = 14;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Smooth Follower Ring (High-end Studio Feel) */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
          width: size,
          height: size,
          scale: isClicking ? 0.8 : 1,
          opacity: isText ? 0.25 : 1,
          borderColor: cursorText
            ? "rgba(0, 240, 255, 0.8)"
            : isHovered
            ? "rgba(0, 240, 255, 0.7)"
            : "rgba(148, 163, 184, 0.4)",
          backgroundColor: cursorText
            ? "rgba(0, 240, 255, 0.12)"
            : isHovered
            ? "rgba(0, 240, 255, 0.08)"
            : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 650,
          damping: 32,
          mass: 0.35,
        }}
        style={{
          borderWidth: 1.5,
          backdropFilter: isHovered ? "blur(1px)" : "none",
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-300">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Laser Precision Point */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-cyan-400 pointer-events-none shadow-[0_0_8px_#00f0ff]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          width: 6,
          height: 6,
          scale: isClicking ? 0.5 : isHovered ? 1.4 : 1,
          opacity: isText ? 0.4 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1200,
          damping: 50,
        }}
      />
    </div>
  );
}

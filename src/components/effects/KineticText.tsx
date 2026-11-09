"use client";

import { motion } from "framer-motion";

interface KineticTextProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClass?: string;
  delay?: number;
}

export default function KineticText({
  text,
  className = "",
  highlightWords = [],
  highlightClass = "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500",
  delay = 0,
}: KineticTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -45,
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block origin-bottom ${
              isHighlight ? highlightClass : ""
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

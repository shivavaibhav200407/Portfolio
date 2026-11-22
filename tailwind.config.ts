import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#08090C",
          surface: "#0E121A",
          elevated: "#151A24",
          border: "#1F2737",
          borderHover: "#2E3A52",
          cyan: "#00F0FF",
          blue: "#3B82F6",
          emerald: "#10B981",
          muted: "#94A3B8",
          subtle: "#64748B",
          heading: "#F8FAFC",
        },
        studio: {
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          elevated: "#F1F5F9",
          border: "#E2E8F0",
          borderHover: "#CBD5E1",
          cyan: "#0284C7",
          blue: "#2563EB",
          emerald: "#059669",
          muted: "#475569",
          subtle: "#64748B",
          heading: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-bricolage)", "sans-serif"],
        display: ["var(--font-bricolage)", "sans-serif"],
        serif: ["var(--font-bricolage)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      boxShadow: {
        "cyan-glow": "0 0 25px -5px rgba(0, 240, 255, 0.3)",
        "blue-glow": "0 0 25px -5px rgba(59, 130, 246, 0.3)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-light": "0 8px 32px 0 rgba(31, 38, 135, 0.08)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

export interface Poster {
  id: string;
  title: string;
  category: "Tech Symposium" | "Hackathon" | "Cultural Summit" | "Workshop";
  client: string;
  year: string;
  aspectRatio: string;
  themeColor: string;
  accentColor: string;
  subtitle: string;
  description: string;
  tags: string[];
  specs: { dimensions: string; format: string; typography: string };
}

export const POSTERS: Poster[] = [
  {
    id: "poster-neural-frontier",
    title: "NEURAL FRONTIER",
    subtitle: "Annual AI & Autonomous Intelligence Summit",
    category: "Tech Symposium",
    client: "Dept. of CSE (AI&ML) // SITS",
    year: "2025",
    aspectRatio: "3/4",
    themeColor: "#00F0FF",
    accentColor: "#08090C",
    description:
      "A high-contrast typographic poster exploring cyber-minimalism, wireframe geometries, and bold Swiss grid structure for the college's flagship artificial intelligence conference.",
    tags: ["Swiss Grid", "Cyberpunk", "Typography", "Keynote Branding"],
    specs: {
      dimensions: "A2 / 420 x 594 mm",
      format: "Digital & High-Gloss Print",
      typography: "Space Grotesk + JetBrains Mono",
    },
  },
  {
    id: "poster-hack-sacc",
    title: "HACK_SACC: 36H",
    subtitle: "Collegiate Multi-Agent & Algorithmic Hackathon",
    category: "Hackathon",
    client: "Siddhartha Allied Clubs Council (S.A.C.C)",
    year: "2025",
    aspectRatio: "3/4",
    themeColor: "#3B82F6",
    accentColor: "#050B14",
    description:
      "Engineered promotional visual system featuring mechanical terminal overlays, glowing neon data streams, and hyper-structured schedule grids to maximize hacker signups.",
    tags: ["Terminal Aesthetic", "Event Promotion", "Color Blocking"],
    specs: {
      dimensions: "A3 & Social Media Suite",
      format: "Vector & Web Assets",
      typography: "Inter Tight + Monospace",
    },
  },
  {
    id: "poster-kinetic-pulse",
    title: "KINETIC PULSE",
    subtitle: "Inter-College Cultural & Creative Conclave",
    category: "Cultural Summit",
    client: "Council Cultural Committee",
    year: "2024",
    aspectRatio: "3/4",
    themeColor: "#EC4899",
    accentColor: "#120718",
    description:
      "Vibrant editorial composition merging distorted fluid typography, warm chromatic gradients, and dynamic angled text layouts celebrating creative expression.",
    tags: ["Fluid Distortion", "Chromatic Gradient", "Editorial Design"],
    specs: {
      dimensions: "A1 Billboard & Stage Backdrop",
      format: "Large-Format Print",
      typography: "Syne Display + Syne Bold",
    },
  },
  {
    id: "poster-agentic-workshop",
    title: "AGENTIC WORKFLOWS",
    subtitle: "3-Day Masterclass on Python, ChromaDB & Groq RAG",
    category: "Workshop",
    client: "Technical Development Cell",
    year: "2025",
    aspectRatio: "3/4",
    themeColor: "#10B981",
    accentColor: "#06130E",
    description:
      "Clean informational architecture designed for rapid reading on college noticeboards and WhatsApp groups, featuring structured technical tracks and speaker badges.",
    tags: ["Infographic Layout", "Educational", "Clear Hierarchy"],
    specs: {
      dimensions: "A3 Digital Poster",
      format: "PDF & Mobile Banners",
      typography: "Space Grotesk + System Sans",
    },
  },
];

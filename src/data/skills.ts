export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: { name: string; level: string; note: string; tag: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Agentic Systems",
    badge: "Intelligence Layer",
    description: "Building autonomous multi-agent workflows, vector retrieval pipelines, and low-latency inference.",
    skills: [
      { name: "Python", level: "Core Language", note: "Scripting, agent loops, data pipelines", tag: "Language" },
      { name: "Multi-Agent Systems", level: "Applied", note: "Task decomposition & agent coordination", tag: "Architecture" },
      { name: "RAG & ChromaDB", level: "Applied", note: "Vector embeddings & document grounding", tag: "Data" },
      { name: "Groq LPU Acceleration", level: "Applied", note: "Sub-second Llama 3 API inference", tag: "Inference" },
      { name: "AI Coding Tools", level: "Advanced", note: "High-velocity AI-assisted software dev", tag: "Workflow" },
    ],
  },
  {
    title: "Software & Web Prototyping",
    badge: "Engineering Layer",
    description: "Packaging machine intelligence into usable, responsive web applications.",
    skills: [
      { name: "Django & Python Web", level: "Applied", note: "Backend services, routing, and local Wi-Fi hosting", tag: "Backend" },
      { name: "Next.js & React", level: "Learning & Building", note: "Modern interactive frontends and UI systems", tag: "Frontend" },
      { name: "TypeScript", level: "Foundational", note: "Type safety, clean component structures", tag: "Frontend" },
      { name: "Tailwind CSS", level: "Applied", note: "Rapid responsive styling and design tokens", tag: "Styling" },
      { name: "Git & GitHub", level: "Collaborative", note: "Version control and team repo management", tag: "Tooling" },
    ],
  },
  {
    title: "Creative Direction & Design",
    badge: "Aesthetics Layer",
    description: "Transforming complex information into striking visual communications and event identities.",
    skills: [
      { name: "Poster & Graphic Design", level: "Leadership", note: "Chief Designer for college council events", tag: "Design" },
      { name: "Typography & Layout", level: "Advanced", note: "Swiss grid systems, hierarchy, contrast", tag: "Design" },
      { name: "Event Brand Identity", level: "Applied", note: "Full promotional collateral suites", tag: "Branding" },
      { name: "Figma & Prototyping", level: "Applied", note: "UI wireframing and graphic asset staging", tag: "Design" },
    ],
  },
  {
    title: "Leadership & Strategy",
    badge: "Operations Layer",
    description: "Coordinating collegiate initiatives and maintaining disciplined execution.",
    skills: [
      { name: "Team Leadership", level: "Proven", note: "Led 4-engineer team building SAGE", tag: "Leadership" },
      { name: "Disciplinary Head", level: "Appointed", note: "Maintaining council discipline across events", tag: "Operations" },
      { name: "Rapid Self-Learning", level: "Core Trait", note: "Quickly mastering emerging AI frameworks", tag: "Mindset" },
      { name: "Technical Communication", level: "Fluent", note: "English, Telugu, Hindi proficiency", tag: "Communication" },
    ],
  },
];

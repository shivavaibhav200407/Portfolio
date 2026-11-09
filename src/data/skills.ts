export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: { name: string; level: string; note: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & AI (Learning & Building)",
    badge: "Core Focus",
    description: "What I use and practice for my college and personal AI projects.",
    skills: [
      { name: "Python", level: "Currently Learning", note: "Writing scripts, building logic, working with data" },
      { name: "AI-Assisted Development", level: "Active User", note: "Using modern AI coding tools to build projects faster" },
      { name: "Multi-Agent Concepts", level: "Applied in SAGE", note: "Splitting tasks among different AI helpers" },
      { name: "RAG & ChromaDB", level: "Hands-on Project", note: "Connecting notes so AI answers from real textbooks" },
      { name: "Groq API", level: "Hands-on", note: "Using fast Llama 3 models for our tutor app" },
    ],
  },
  {
    title: "Web & Development Tools",
    badge: "Building Apps",
    description: "Tools I use to turn code into working apps that anyone can use.",
    skills: [
      { name: "Django (Python)", level: "Project Experience", note: "Used as the backend web server for SAGE" },
      { name: "HTML, CSS & Tailwind", level: "Comfortable", note: "Structuring and styling clean web pages" },
      { name: "Git & GitHub", level: "Collaborative", note: "Managing code and working with project teammates" },
      { name: "Local Network Hosting", level: "Tested", note: "Setting up apps to work over campus Wi-Fi" },
    ],
  },
  {
    title: "Graphic Design & Posters",
    badge: "Creative Side",
    description: "Designing visuals for our college council and campus clubs.",
    skills: [
      { name: "Poster & Banner Design", level: "Chief Designer", note: "Designed promotional material for 10+ college events" },
      { name: "Typography & Layouts", level: "Hands-on", note: "Making headlines and dates easy to read at a glance" },
      { name: "Event Promotion Graphics", level: "Active", note: "Social media and WhatsApp posters for clubs" },
      { name: "Design Tools (Canva, Figma)", level: "Regular User", note: "Creating and editing visuals for print and digital" },
    ],
  },
  {
    title: "Leadership & College Roles",
    badge: "Personal",
    description: "Balancing team responsibilities, council discipline, and academics.",
    skills: [
      { name: "Team Leadership", level: "Team Lead", note: "Led a 4-member student team to build SAGE" },
      { name: "Disciplinary Head", level: "Appointed Role", note: "Helping maintain discipline at S.A.C.C council events" },
      { name: "Eager & Fast Learner", level: "Mindset", note: "Constantly curious to pick up new tools and skills" },
      { name: "Communication", level: "Trilingual", note: "Comfortable speaking English, Telugu, and Hindi" },
    ],
  },
];

export interface HonestSkill {
  name: string;
  category: string;
  status: string;
  description: string;
}

export const HONEST_SKILLS: HonestSkill[] = [
  {
    name: "Python",
    category: "Programming",
    status: "Learning",
    description: "Writing scripts, building logic, and practicing core programming fundamentals.",
  },
  {
    name: "AI-Assisted Development",
    category: "Workflow",
    status: "Active Use",
    description: "Building projects and applications using modern AI coding workflows and tools.",
  },
  {
    name: "Poster & Graphic Design",
    category: "Design",
    status: "Chief Designer",
    description: "Designing promotional posters and visual assets for college clubs and campus events.",
  },
  {
    name: "Team Leadership",
    category: "Leadership",
    status: "Team Lead",
    description: "Led a 4-person student team building SAGE; serving as Disciplinary Head in S.A.C.C.",
  },
];

export const SAGE_PROJECT_TECHNOLOGIES = [
  "Python",
  "Django",
  "ChromaDB",
  "Groq",
  "DuckDuckGo Search",
];

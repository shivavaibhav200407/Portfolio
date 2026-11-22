export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  team: string;
  period: string;
  category: "AI & Projects" | "Machine Learning" | "Design & Posters";
  featured: boolean;
  stack: string[];
  metrics: { label: string; value: string }[];
  summary: string;
  problem: string;
  solution: string;
  agents?: string[];
  steps: { title: string; desc: string; agent: string }[];
  learnings: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "sage-ai-tutor",
    title: "SAGE",
    tagline: "An AI tutor for B.Tech students built with AI coding tools.",
    role: "Team Lead",
    team: "Team of 4",
    period: "2025 – Present",
    category: "AI & Projects",
    featured: true,
    stack: ["Python", "Django", "ChromaDB", "Groq", "DuckDuckGo search"],
    metrics: [
      { label: "Role", value: "Team Lead" },
      { label: "Team", value: "4 Students" },
      { label: "Scope", value: "B.Tech Courses" },
      { label: "Built With", value: "AI Tools" },
    ],
    summary:
      "An AI tutor for B.Tech students. A team of AI agents finds what you don't understand, plans what to study, and answers from reference notes. I led a team of 4 and we built it with AI coding tools.",
    problem:
      "An AI tutor for B.Tech students built to help students study from reference notes.",
    solution:
      "A team of AI agents finds what you don't understand, plans what to study, and answers from reference notes.",
    steps: [],
    learnings: [
      "Leading a 4-person student development team and coordinating project deliverables.",
      "Building full-stack software applications using modern AI coding workflows.",
    ],
  },
  {
    id: "iris-ml-project",
    title: "Iris Species Classification",
    tagline: "A machine learning project that classifies iris flowers into species.",
    role: "Individual Learner",
    team: "Individual Project",
    period: "Jan 2026",
    category: "Machine Learning",
    featured: true,
    stack: ["Python", "Machine Learning"],
    metrics: [
      { label: "Dataset", value: "Iris Dataset" },
      { label: "Awarded By", value: "Smartuter Research Center" },
      { label: "Date", value: "Jan 2026" },
      { label: "Credential", value: "Project Completion" },
    ],
    summary:
      "A machine learning project that classifies iris flowers into species. Completed with a certificate from Smartuter Research Center (Jan 2026).",
    problem:
      "Practicing machine learning classification in Python.",
    solution:
      "Classifies iris flowers into species based on measurement features.",
    steps: [],
    learnings: [
      "Hands-on practice applying machine learning workflows in Python.",
      "Understanding classification concepts and feature evaluation.",
    ],
  },
  {
    id: "sacc-college-posters",
    title: "College Club Posters & Visual Design",
    tagline: "Designing posters and promotional graphics for college clubs and events as S.A.C.C Chief Designer.",
    role: "Chief Designer & Disciplinary Head",
    team: "Siddhartha Allied Clubs Council (S.A.C.C)",
    period: "Present",
    category: "Design & Posters",
    featured: true,
    stack: ["Poster Design", "Graphic Design", "Typography", "Visual Communication"],
    metrics: [
      { label: "Role", value: "Chief Designer" },
      { label: "Council", value: "S.A.C.C" },
      { label: "Leadership", value: "Disciplinary Head" },
      { label: "Reach", value: "Campus Clubs & Events" },
    ],
    summary:
      "Chief Designer & Disciplinary Head of the Siddhartha Allied Clubs Council (S.A.C.C). Designed many promotional posters, banners, and digital graphics for college clubs, internal hackathons, and cultural events.",
    problem:
      "Campus events need clear, legible, and visually engaging designs to communicate schedules and details to students.",
    solution:
      "Designed event banners and social media posters focusing on strong typography, clear information hierarchy, and dynamic visual composition.",
    steps: [
      {
        title: "1. Event Coordination",
        desc: "Collaborating with club leaders to collect event briefs, schedules, and themes.",
        agent: "Event Coordination",
      },
      {
        title: "2. Visual Design & Layout",
        desc: "Crafting posters with clear typography, color harmony, and balanced compositions.",
        agent: "Graphic Design",
      },
      {
        title: "3. Production & Disciplinary Support",
        desc: "Delivering graphics for digital channels and campus boards, while supporting council discipline during events.",
        agent: "Delivery & Coordination",
      },
    ],
    learnings: [
      "Balancing aesthetic impact with information hierarchy and legibility.",
      "Managing student council responsibilities and event discipline.",
    ],
  },
];

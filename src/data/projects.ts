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
    title: "SAGE: Multi-Agent AI Tutor for B.Tech Courses",
    tagline: "A multi-agent AI tutor for B.Tech courses built with AI coding tools, coordinating 6 specialized agents.",
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
      "A multi-agent AI tutor designed to assist B.Tech students by answering course questions grounded in syllabus notes. Led a 4-person student team to build the project using AI coding tools.",
    problem:
      "Standard AI responses often produce answers that depart from college syllabus requirements.",
    solution:
      "Engineered a multi-agent system where 6 cooperating agents handle inquiry routing, concept diagnosis, curriculum mapping, answer evaluation, citation verification, and supplemental research.",
    agents: [
      "Supervisor",
      "Diagnostic",
      "Curriculum",
      "Evaluator",
      "Verifier",
      "Research",
    ],
    steps: [
      {
        title: "1. Inquiry Supervision & Routing",
        desc: "Routes incoming student questions to appropriate course materials and agents.",
        agent: "Supervisor",
      },
      {
        title: "2. Conceptual Diagnosis",
        desc: "Identifies whether an error is a minor calculation oversight or a core conceptual gap.",
        agent: "Diagnostic",
      },
      {
        title: "3. Curriculum Structuring",
        desc: "Structures recommendations aligned with the B.Tech syllabus progression.",
        agent: "Curriculum",
      },
      {
        title: "4. Response Evaluation & Verification",
        desc: "Evaluates explanation clarity, verifies factual grounding in notes, and conducts research if needed.",
        agent: "Evaluator, Verifier & Research",
      },
    ],
    learnings: [
      "Leading a 4-person student development team and coordinating project deliverables.",
      "Building full-stack software applications using modern AI coding workflows.",
      "Structuring multi-agent architectures and retrieval-augmented pipelines.",
    ],
  },
  {
    id: "iris-ml-project",
    title: "Iris Species Classification",
    tagline: "Machine learning project certified by Smartuter Research Center (Jan 2026).",
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
      "Machine learning classification project analyzing the Iris dataset. Awarded project completion certificate by Smartuter Research Center in January 2026.",
    problem:
      "Practicing machine learning fundamentals and classification concepts with Python.",
    solution:
      "Evaluated flower measurements (sepal and petal dimensions) using machine learning classification techniques in Python.",
    steps: [
      {
        title: "1. Data Exploration",
        desc: "Examining feature distributions across Iris flower species.",
        agent: "Data Analysis",
      },
      {
        title: "2. Model Training",
        desc: "Training classification algorithms on Iris measurement data.",
        agent: "Classifier Training",
      },
      {
        title: "3. Evaluation & Certification",
        desc: "Project reviewed and awarded completion certificate by Smartuter Research Center.",
        agent: "SRC Evaluation",
      },
    ],
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

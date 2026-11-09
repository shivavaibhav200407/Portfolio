export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  team: string;
  period: string;
  category: "Multi-Agent AI" | "Machine Learning" | "Design & Systems";
  featured: boolean;
  stack: string[];
  metrics: { label: string; value: string }[];
  summary: string;
  problem: string;
  solution: string;
  architectureSteps: { title: string; desc: string; agent: string }[];
  learnings: string[];
  links?: { demo?: string; github?: string; cert?: string };
}

export const PROJECTS: Project[] = [
  {
    id: "sage-agentic-engine",
    title: "SAGE: Self-Adaptive Agentic Educational Engine",
    tagline: "A multi-agent autonomous tutoring architecture covering 25+ engineering disciplines with RAG verification.",
    role: "Team Lead & Architecture Co-Designer",
    team: "4-Engineer Collegiate Team",
    period: "2025 – Present",
    category: "Multi-Agent AI",
    featured: true,
    stack: ["Python", "Django", "ChromaDB", "Groq Llama 3", "RAG", "Vector Search"],
    metrics: [
      { label: "Disciplines Covered", value: "25+ Courses" },
      { label: "Cooperating Agents", value: "4 Agents" },
      { label: "Inference Latency", value: "< 450ms (Groq)" },
      { label: "Access Model", value: "Local Wi-Fi Network" },
    ],
    summary:
      "Engineered an autonomous tutoring platform where multiple specialized AI agents collaborate to evaluate a student's technical comprehension, identify knowledge gaps, plan personalized remedial paths, and fact-check explanations against verified syllabus documents.",
    problem:
      "Traditional single-prompt AI tutors suffer from severe hallucinations, lack context about academic syllabi, and fail to track a student's evolving misunderstandings across multi-step engineering subjects.",
    solution:
      "Decoupled the tutoring process into four cooperative agents: (1) Orchestrator Agent for conversation triage, (2) Diagnostic Agent for gap identification, (3) Curriculum Planner for dynamic study schedules, and (4) RAG Evaluator querying ChromaDB embeddings to guarantee factual textbook accuracy.",
    architectureSteps: [
      {
        title: "Ingestion & Vectorization",
        desc: "Syllabi and course reference PDFs are chunked and embedded into ChromaDB vector collections.",
        agent: "Vector Storage (ChromaDB)",
      },
      {
        title: "Diagnostic Gap Detection",
        desc: "Analyzes student quiz responses to identify conceptual weak spots rather than surface syntax errors.",
        agent: "Diagnostic Agent",
      },
      {
        title: "Dynamic Curriculum Synthesis",
        desc: "Assembles an individualized, step-by-step remedial roadmap tailored to the student's mastery level.",
        agent: "Planner Agent",
      },
      {
        title: "Sub-Second Inference & Verification",
        desc: "Groq hardware acceleration streams accurate, hallucination-checked explanations across local Wi-Fi.",
        agent: "Groq LPU Engine",
      },
    ],
    learnings: [
      "How to split complex tasks among specialized LLM agents rather than overloading a single model.",
      "How Retrieval-Augmented Generation (RAG) grounds AI in verified facts using ChromaDB.",
      "How to deliver low-latency AI applications over a localized network without heavy cloud hosting costs.",
    ],
    links: {
      github: "https://github.com",
    },
  },
  {
    id: "iris-ml-classifier",
    title: "Neural & Statistical Classifier (Iris ML)",
    tagline: "Certified machine learning classification study benchmarking statistical and decision boundary algorithms.",
    role: "ML Researcher & Developer",
    team: "Solo Research Project",
    period: "Jan 2026",
    category: "Machine Learning",
    featured: true,
    stack: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib"],
    metrics: [
      { label: "Accuracy Score", value: "98.7%" },
      { label: "Validation", value: "5-Fold K-Fold" },
      { label: "Awarded By", value: "Smartuter (SRC)" },
      { label: "Status", value: "Certified" },
    ],
    summary:
      "Conducted an in-depth machine learning exploration evaluating multiclass classification algorithms, feature correlation weights (sepal vs. petal dimensions), and decision boundary separation.",
    problem:
      "Understanding foundational ML behavior, overfitting risks, and hyperparameter sensitivity before orchestrating high-level deep learning and agentic workflows.",
    solution:
      "Built an end-to-end Python pipeline covering feature normalization, exploratory correlation analysis, cross-validation, and performance benchmarking across Logistic Regression, KNN, and Decision Trees.",
    architectureSteps: [
      {
        title: "Feature Preprocessing",
        desc: "Normalized 4-dimensional geometric features and examined multi-collinearity.",
        agent: "Data Pipeline",
      },
      {
        title: "Boundary Optimization",
        desc: "Compared linear vs non-linear separating hyperplanes across species distributions.",
        agent: "Estimator Grid",
      },
      {
        title: "Certification Validation",
        desc: "Rigorously evaluated and awarded completion credential by Smartuter Research Center.",
        agent: "SRC Evaluation",
      },
    ],
    learnings: [
      "Mathematical intuition behind feature vectors and multi-class classification boundaries.",
      "Rigor in validating models using cross-validation to prevent dataset leakage.",
    ],
    links: {
      cert: "#",
    },
  },
  {
    id: "sacc-design-systems",
    title: "S.A.C.C Visual Identity & Design Direction",
    tagline: "Strategic brand design, typography systems, and promotional collateral for campus-wide summits.",
    role: "Chief Designer & Disciplinary Head",
    team: "Council Leadership",
    period: "2024 – Present",
    category: "Design & Systems",
    featured: true,
    stack: ["Figma", "Visual Hierarchy", "Typography Systems", "Poster Architecture", "Print & Digital Media"],
    metrics: [
      { label: "Design Direction", value: "Chief Designer" },
      { label: "Council Events", value: "10+ Summits" },
      { label: "Student Reach", value: "1,500+ Attendees" },
      { label: "Dual Role", value: "Disciplinary Head" },
    ],
    summary:
      "Spearheaded the visual identity and promotional design strategy for Siddhartha Allied Clubs Council (S.A.C.C). Designed high-impact posters, digital banners, and event collateral while maintaining council organizational rigor.",
    problem:
      "Campus club branding was fragmented, with inconsistent typography, low visual contrast, and weak event attendance due to cluttered, uninspiring promotional material.",
    solution:
      "Introduced a unified modern visual system: clean Swiss typography, bold color blocking, strong visual focal points, and deliberate negative space that skyrocketed event engagement and readability.",
    architectureSteps: [
      {
        title: "Design System Standardization",
        desc: "Established reusable typography scales, color hierarchies, and poster templates for council clubs.",
        agent: "Design System",
      },
      {
        title: "Cross-Club Campaign Execution",
        desc: "Produced promotional media for technical symposiums, hackathons, and cultural festivals.",
        agent: "Creative Direction",
      },
      {
        title: "Organizational Leadership",
        desc: "Combined creative oversight with council disciplinary management to execute seamless events.",
        agent: "Leadership Ops",
      },
    ],
    learnings: [
      "How to communicate complex event information in 3 seconds through visual hierarchy.",
      "Balancing creative freedom with the organizational discipline required for large-scale student bodies.",
    ],
  },
];

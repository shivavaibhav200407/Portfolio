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
  steps: { title: string; desc: string; agent: string }[];
  learnings: string[];
  links?: { github?: string; cert?: string };
}

export const PROJECTS: Project[] = [
  {
    id: "sage-ai-tutor",
    title: "SAGE: Self-Adaptive Agentic Educational Engine",
    tagline: "An AI tutor we built for our college that knows our 25+ B.Tech courses and runs over local Wi-Fi.",
    role: "Team Lead (Team of 4)",
    team: "College Project Team",
    period: "2025 – Present",
    category: "AI & Projects",
    featured: true,
    stack: ["Python", "Django", "ChromaDB", "Groq (Llama 3)", "RAG", "AI Coding Tools"],
    metrics: [
      { label: "My Role", value: "Team Lead" },
      { label: "Team Size", value: "4 Students" },
      { label: "Courses Covered", value: "25+ B.Tech" },
      { label: "Hosting", value: "Local Campus Wi-Fi" },
    ],
    summary:
      "As engineering students, we noticed general AI tools often gave answers that didn't match our college syllabus. I led a team of 4 classmates to build an AI tutor that searches our actual textbook notes using RAG (ChromaDB) and breaks down study topics into friendly steps.",
    problem:
      "Most online AI tools are generic, hallucinate non-syllabus formulas, and need expensive cloud subscriptions that students can't afford.",
    solution:
      "We built a multi-agent system where different AI helpers work together: one tests the student, one finds what they are stuck on, one suggests a study plan, and one checks textbook notes in ChromaDB using fast Groq inference over local Wi-Fi.",
    steps: [
      {
        title: "1. Storing College Notes",
        desc: "We split course PDFs and reference notes into chunks and saved them in ChromaDB so the AI searches real syllabus content.",
        agent: "Textbook Notes Search (ChromaDB)",
      },
      {
        title: "2. Finding Learning Gaps",
        desc: "When a student answers a question, this helper checks if they missed a core concept or just made a small formula mistake.",
        agent: "Gap Finder Helper",
      },
      {
        title: "3. Creating a Study Path",
        desc: "Suggests what topic to review next so the student doesn't feel overwhelmed.",
        agent: "Study Planner Helper",
      },
      {
        title: "4. Fast & Free Local Wi-Fi Access",
        desc: "Runs as a web app on college Wi-Fi so any student can open it on their phone or laptop without paid hosting.",
        agent: "Django Web App + Groq",
      },
    ],
    learnings: [
      "How to lead a 4-person team, divide tasks, and solve bugs together.",
      "How to use AI coding tools to build real working web apps faster.",
      "How RAG works in simple terms: giving the AI real documents so it doesn't make things up.",
    ],
    links: {
      github: "https://github.com",
    },
  },
  {
    id: "iris-ml-project",
    title: "Iris Flower Species Classification",
    tagline: "My machine learning classification project completed at Smartuter Research Center.",
    role: "Student ML Learner",
    team: "Individual Project",
    period: "Jan 2026",
    category: "Machine Learning",
    featured: true,
    stack: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib"],
    metrics: [
      { label: "Dataset", value: "Iris Dataset" },
      { label: "Accuracy", value: "98.7%" },
      { label: "Certificate", value: "SRC Awarded" },
      { label: "Focus", value: "ML Basics" },
    ],
    summary:
      "Completed a hands-on machine learning classification project on the Iris dataset. Learned how ML algorithms use features like petal and sepal measurements to predict flower species accurately.",
    problem:
      "I wanted to understand how machine learning works from scratch before jumping into advanced neural networks.",
    solution:
      "Built a Python workflow using Scikit-Learn to clean data, plot correlation graphs, train classifiers (Logistic Regression & Decision Trees), and measure accuracy.",
    steps: [
      {
        title: "1. Exploring Data",
        desc: "Plotting petal and sepal lengths to see which features help separate the flower types best.",
        agent: "Data Analysis (Pandas & Seaborn)",
      },
      {
        title: "2. Training Classifiers",
        desc: "Trained standard algorithms like KNN and Decision Trees to classify the 3 flower classes.",
        agent: "Model Training",
      },
      {
        title: "3. Certificate of Completion",
        desc: "Successfully submitted and evaluated by Smartuter Research Center (SRC) with an official certificate.",
        agent: "SRC Evaluation",
      },
    ],
    learnings: [
      "Hands-on experience with Python data science libraries (Pandas, Scikit-Learn).",
      "Understanding accuracy, training vs testing splits, and classification.",
    ],
    links: {
      cert: "#",
    },
  },
  {
    id: "sacc-college-posters",
    title: "College Event Posters & Branding (S.A.C.C)",
    tagline: "Designing posters and promotional graphics for college fests, workshops, and student clubs.",
    role: "Chief Designer & Disciplinary Head",
    team: "Siddhartha Allied Clubs Council (S.A.C.C)",
    period: "Present",
    category: "Design & Posters",
    featured: true,
    stack: ["Graphic Design", "Poster Design", "Event Branding", "Typography", "Canva / Figma"],
    metrics: [
      { label: "Design Role", value: "Chief Designer" },
      { label: "Leadership Role", value: "Disciplinary Head" },
      { label: "Council Events", value: "10+ College Events" },
      { label: "Reach", value: "Campus Students" },
    ],
    summary:
      "As Chief Designer for our college council (S.A.C.C), I design posters, Instagram banners, and announcements for technical workshops, fests, and hackathons. I also help maintain discipline at council events.",
    problem:
      "College events need clear, eye-catching posters so students know the dates, topics, and how to register without getting confused.",
    solution:
      "Created clean, bold posters with strong headlines, organized schedules, and modern colors that got shared across WhatsApp groups and campus noticeboards.",
    steps: [
      {
        title: "1. Understanding the Event",
        desc: "Talking to club heads to understand what the workshop or fest is about.",
        agent: "Planning & Content",
      },
      {
        title: "2. Designing Visuals",
        desc: "Choosing clear fonts, high-contrast colors, and eye-catching layouts.",
        agent: "Graphic Design",
      },
      {
        title: "3. Campus Promotion",
        desc: "Exporting formats for WhatsApp stories, Instagram posts, and print banners.",
        agent: "Publishing",
      },
    ],
    learnings: [
      "How to balance creativity with readability so key details are easy to spot.",
      "How to manage event discipline and handle responsibilities in a student council.",
    ],
  },
];

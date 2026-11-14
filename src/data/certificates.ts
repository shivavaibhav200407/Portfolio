export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  duration: string;
  description: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "src-iris-ml",
    title: "Iris Species Classification",
    issuer: "Smartuter Research Center",
    date: "January 2026",
    duration: "Project Completion Certificate",
    description: "Machine learning project completion certificate awarded by Smartuter Research Center.",
  },
  {
    id: "sits-foundations-aiml",
    title: "Foundations of AI & Machine Learning",
    issuer: "Dept. of CSE (AI & ML), Siddhartha Institute of Technology & Sciences",
    date: "December 2025",
    duration: "2 Days",
    description: "College workshop by the Dept. of CSE (AI & ML), SITS.",
  },
  {
    id: "sits-python-aiml-essentials",
    title: "AI & ML Essentials: A Python-Based Approach",
    issuer: "Dept. of CSE (AI & ML), Siddhartha Institute of Technology & Sciences",
    date: "November 2025",
    duration: "3 Days",
    description: "College workshop by the Dept. of CSE (AI & ML), SITS.",
  },
];

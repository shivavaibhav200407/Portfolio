export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "Machine Learning" | "Workshop" | "Certification";
  description: string;
  skillsLearned: string[];
  credentialId?: string;
  verificationBadge: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "src-iris-ml",
    title: "Iris Species Classification (ML Project)",
    issuer: "Smartuter Research Center (SRC)",
    date: "January 2026",
    category: "Machine Learning",
    description: "Hands-on machine learning classification project evaluating Iris flower species using Python, Scikit-Learn feature correlation, and decision boundaries.",
    skillsLearned: ["Python", "Scikit-Learn", "Feature Correlation", "Classification Metrics"],
    verificationBadge: "SRC Verified Project",
  },
  {
    id: "sits-foundations-aiml",
    title: "Foundations of AI & Machine Learning",
    issuer: "Dept. of CSE (AI & ML), Siddhartha Institute of Technology & Sciences",
    date: "December 2025",
    category: "Workshop",
    description: "2-Day intensive college workshop covering core machine learning paradigms, supervised vs unsupervised learning, and data preprocessing fundamentals.",
    skillsLearned: ["Supervised Learning", "Data Preprocessing", "Evaluation Metrics", "Model Training"],
    verificationBadge: "2-Day Dept. Workshop",
  },
  {
    id: "sits-python-aiml-essentials",
    title: "AI & ML Essentials: A Python-Based Approach",
    issuer: "Dept. of CSE (AI & ML), Siddhartha Institute of Technology & Sciences",
    date: "November 2025",
    category: "Workshop",
    description: "3-Day hands-on college workshop focusing on scientific Python libraries, NumPy matrix math, Pandas dataframes, and introductory ML modeling.",
    skillsLearned: ["NumPy Math", "Pandas DataFrames", "Data Visualization", "Python ML Workflows"],
    verificationBadge: "3-Day Dept. Workshop",
  },
];

export interface Poster {
  id: string;
  title: string;
  category: "Technical Workshop" | "College Fest" | "Hackathon" | "Club Event";
  club: string;
  year: string;
  aspectRatio: string;
  themeColor: string;
  accentColor: string;
  subtitle: string;
  description: string;
  tags: string[];
  specs: { type: string; tool: string; audience: string };
  imageUrl?: string; // Optional: Drop image in public/posters/ and set "/posters/your-file.png"
}

export const POSTERS: Poster[] = [
  {
    id: "poster-ai-symposium",
    title: "AI & ML WORKSHOP",
    subtitle: "Department of CSE (AI & ML) — SITS Hyderabad",
    category: "Technical Workshop",
    club: "Dept. of CSE (AI&ML)",
    year: "2025",
    aspectRatio: "3/4",
    themeColor: "#FF1E27",
    accentColor: "#1A0507",
    description:
      "Designed for our department's 3-day AI & ML workshop. Focused on bold Swiss typography, high-contrast dates, and speaker highlights so students could read key details at a glance on college noticeboards and WhatsApp.",
    tags: ["Technical Workshop", "CSE Department", "Poster Design"],
    specs: {
      type: "Noticeboard Poster & WhatsApp Banner",
      tool: "Graphic Design / Canva / Figma",
      audience: "B.Tech Students & Faculty",
    },
  },
  {
    id: "poster-hackathon",
    title: "CAMPUS HACKATHON",
    subtitle: "24-Hour Student Coding & Innovation Challenge",
    category: "Hackathon",
    club: "Siddhartha Allied Clubs Council (S.A.C.C)",
    year: "2025",
    aspectRatio: "3/4",
    themeColor: "#FF3843",
    accentColor: "#140406",
    description:
      "Promotional poster for our college council hackathon. Created a futuristic dark theme with neon red accents, clear prize pool callouts, and schedule milestones.",
    tags: ["Hackathon", "Student Council", "Event Promotion"],
    specs: {
      type: "Social Media Flyer & Print Poster",
      tool: "Poster Design / Canva / Figma",
      audience: "College Coders & Tech Clubs",
    },
  },
  {
    id: "poster-cultural-fest",
    title: "CAMPUS CULTURAL FEST",
    subtitle: "Annual Student Fest & Stage Performances",
    category: "College Fest",
    club: "S.A.C.C Cultural Committee",
    year: "2024",
    aspectRatio: "3/4",
    themeColor: "#DC2626",
    accentColor: "#190204",
    description:
      "A vibrant, expressive poster for our college cultural evening. Used energetic typographic contrasts and bold headers to engage students across all engineering branches.",
    tags: ["Cultural Fest", "Celebration", "Creative Layout"],
    specs: {
      type: "Stage Backdrop & Instagram Post",
      tool: "Creative Design",
      audience: "All College Students",
    },
  },
  {
    id: "poster-python-bootcamp",
    title: "PYTHON FOR BEGINNERS",
    subtitle: "Hands-on Coding Sessions by Student Leads",
    category: "Club Event",
    club: "Coding & Tech Club // SITS",
    year: "2025",
    aspectRatio: "3/4",
    themeColor: "#EF4444",
    accentColor: "#100305",
    description:
      "Clean, approachable announcement poster for junior students joining the Python coding club. Structured layout with schedule timings and prerequisite-free messaging.",
    tags: ["Python Club", "Student Initiative", "Clear Design"],
    specs: {
      type: "Digital WhatsApp Story & Flyer",
      tool: "Typography & Layouts",
      audience: "1st & 2nd Year Students",
    },
  },
];

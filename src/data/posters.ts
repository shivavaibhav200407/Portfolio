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
    themeColor: "#00F0FF",
    accentColor: "#0A1120",
    description:
      "Designed for our department's 3-day AI & ML workshop. Focused on bold text, clear dates, and speaker highlights so students could read key details quickly on college noticeboards and WhatsApp.",
    tags: ["College Workshop", "CSE Department", "Poster Design"],
    specs: {
      type: "Noticeboard Poster & WhatsApp Banner",
      tool: "Graphic Design / Layouts",
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
    themeColor: "#3B82F6",
    accentColor: "#050E1F",
    description:
      "Promotional poster for our college council hackathon. Created a futuristic dark theme with cyber blue accents, clear prize pool callouts, and a registration QR placeholder.",
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
    themeColor: "#EC4899",
    accentColor: "#17061B",
    description:
      "A vibrant, colorful poster for our college cultural evening. Used energetic gradient colors and bold typography to get students excited about dance, music, and stage events.",
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
    themeColor: "#10B981",
    accentColor: "#061810",
    description:
      "Simple, friendly announcement poster for junior students joining the Python coding club. Structured layout with schedule timings and topics covered.",
    tags: ["Python Club", "Student Initiative", "Clear Design"],
    specs: {
      type: "Digital WhatsApp Story & Flyer",
      tool: "Typography & Visuals",
      audience: "1st & 2nd Year Students",
    },
  },
];

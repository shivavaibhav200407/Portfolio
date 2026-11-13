export interface Poster {
  id: string;
  title: string;
  category: "Hackathon" | "Technical Workshop" | "College Fest" | "Club Event" | "Motion Poster";
  club: string;
  year: string;
  aspectRatio: string;
  accentColor: string;
  subtitle: string;
  description: string;
  tags: string[];
  specs: { type: string; tool: string; audience: string };
  driveUrl: string;
  fileId?: string;
  imageUrl?: string;
}

export const POSTERS: Poster[] = [
  {
    id: "poster-sih-main",
    title: "SMART INDIA HACKATHON 2026",
    subtitle: "Internal Campus Hackathon — S.A.C.C & SITS Hyderabad",
    category: "Hackathon",
    club: "Siddhartha Allied Clubs Council (S.A.C.C)",
    year: "2026",
    aspectRatio: "3/4",
    accentColor: "#0284C7",
    description:
      "Flagship poster announcing the Internal Smart India Hackathon 2026 at SITS (10 Sept 2026). Engineered a high-tech visual identity with cybernetic hands reaching toward each other, neon digital circuit traces, and event milestones.",
    tags: ["SIH 2026", "Hackathon", "Cybernetic Visuals", "Council Flagship"],
    specs: {
      type: "Campus Print Poster & Digital Banner",
      tool: "Graphic Design / Digital Illustration",
      audience: "61 B.Tech Engineering Teams & Faculty",
    },
    driveUrl: "https://drive.google.com/file/d/1R7cT0evPUyA8K2eS3GwDUzGkMii4bXuv/view",
    fileId: "1R7cT0evPUyA8K2eS3GwDUzGkMii4bXuv",
  },
  {
    id: "poster-sih-jury",
    title: "INTRODUCING THE JURY — SIH 2026",
    subtitle: "Official Department Jury Panel Showcase (Parts 1 & 2)",
    category: "Hackathon",
    club: "S.A.C.C Technical Committee",
    year: "2026",
    aspectRatio: "3/4",
    accentColor: "#3B82F6",
    description:
      "Official jury announcement series introducing PhD professors and evaluators (Dr. Srimatha, Dr. Anitha Kumari, Dr. Mahesh, Dr. Rohit). Designed with deep-blue grid panels, glowing borders, and crisp portrait framing.",
    tags: ["Jury Showcase", "Academic Panel", "High-Contrast Layout"],
    specs: {
      type: "Social Media Series & Noticeboard Display",
      tool: "Figma / Canva / Typography",
      audience: "College Faculty, Evaluators & Students",
    },
    driveUrl: "https://drive.google.com/file/d/1axLmDl-jhRARqjknjgn5gVD2U88Sawtg/view",
    fileId: "1axLmDl-jhRARqjknjgn5gVD2U88Sawtg",
  },
  {
    id: "poster-resume-workshop",
    title: "RÉSUMÉ BUILDING WORKSHOP",
    subtitle: "Professional Career Preparedness & Profile Crafting",
    category: "Technical Workshop",
    club: "Placement & Training Cell // S.A.C.C",
    year: "2025",
    aspectRatio: "3/4",
    accentColor: "#0284C7",
    description:
      "Clean corporate geometric announcement poster designed to maximize workshop registrations. High-contrast typography highlights CV review sessions, interview readiness, and speaker credentials.",
    tags: ["Career Workshop", "Corporate Minimal", "Student Training"],
    specs: {
      type: "Digital WhatsApp Flyer & Print Banner",
      tool: "Swiss Typography / Geometric Layouts",
      audience: "Pre-Final & Final Year B.Tech Students",
    },
    driveUrl: "https://drive.google.com/file/d/1FWq6lYM0tihL0G7N5cLkkDerebddjJus/view",
    fileId: "1FWq6lYM0tihL0G7N5cLkkDerebddjJus",
  },
  {
    id: "poster-spevox",
    title: "SPEVOX: LITERARY & ACTING ARENA",
    subtitle: "Level 1: Look & Enact • Level 2: Story Fair",
    category: "Club Event",
    club: "SPEVOX Club // S.A.C.C",
    year: "2025",
    aspectRatio: "3/4",
    accentColor: "#D97706",
    description:
      "Stage competition poster for our college literary club. Crafted with a classical parchment/vintage certificate design aesthetic with detailed event phase timings and prize distribution details.",
    tags: ["Literary Arts", "Parchment Vintage", "Stage Events"],
    specs: {
      type: "Campus Noticeboard Flyer",
      tool: "Vintage Composition & Typography",
      audience: "All Undergraduate Branches",
    },
    driveUrl: "https://drive.google.com/file/d/10vLNoYldYcx9h-j2PaTiSv7HAJ6FAbOv/view",
    fileId: "10vLNoYldYcx9h-j2PaTiSv7HAJ6FAbOv",
  },
  {
    id: "poster-talent-show",
    title: "CAMPUS TALENT SHOW 2026",
    subtitle: "Annual Student Stage Showcase & Auditorium Finals",
    category: "College Fest",
    club: "S.A.C.C Cultural Affairs",
    year: "2026",
    aspectRatio: "3/4",
    accentColor: "#DC2626",
    description:
      "Dramatic theatrical promotional poster created for our college talent competition. Designed with rich velvet red stage curtains, warm spotlighting, and bold gold art-deco title typography.",
    tags: ["Cultural Fest", "Theatrical Vibe", "Stage Production"],
    specs: {
      type: "Auditorium Banner & Instagram Announcement",
      tool: "Lighting & Texture Composition",
      audience: "College Students, Performers & Judges",
    },
    driveUrl: "https://drive.google.com/file/d/1FprFeZKgJ8CXae0EFXrx8V7tU4l_kS6L/view",
    fileId: "1FprFeZKgJ8CXae0EFXrx8V7tU4l_kS6L",
  },
  {
    id: "poster-wonderla",
    title: "WONDERLA COLLEGE EXCURSION",
    subtitle: "Fun, Adventure & Memories — S.A.C.C Campus Trip",
    category: "College Fest",
    club: "Student Council Excursions",
    year: "2025",
    aspectRatio: "3/4",
    accentColor: "#EA580C",
    description:
      "Vibrant high-energy tourism and amusement park poster celebrating our student outing with roller coaster vectors, sky wheel imagery, and bus coordination schedules.",
    tags: ["Excursion", "Dynamic Composition", "Campus Life"],
    specs: {
      type: "Print Poster & WhatsApp Registration Flyer",
      tool: "Vibrant Color Blocking & Layout",
      audience: "B.Tech Students & Faculty Members",
    },
    driveUrl: "https://drive.google.com/file/d/1RGhNTyaOpBL9IRuOsP2kNXgiRvNRVECr/view",
    fileId: "1RGhNTyaOpBL9IRuOsP2kNXgiRvNRVECr",
  },
  {
    id: "poster-navaratri-motion",
    title: "NAVARATRI MOTION POSTERS SERIES",
    subtitle: "6-Day Cultural Motion Graphics & Sacred Geometry (Days 4–9)",
    category: "Motion Poster",
    club: "S.A.C.C Media & Design Cell",
    year: "2025",
    aspectRatio: "9/16",
    accentColor: "#9333EA",
    description:
      "A suite of 6 animated MP4 video motion reels designed for campus screens and social channels. Features radiant mandala geometry, atmospheric lightning, and rich cultural typography celebrating Navaratri.",
    tags: ["Motion Graphics", "Video Reels", "Sacred Mandalas"],
    specs: {
      type: "MP4 Vertical Motion Posters (Reels)",
      tool: "Motion Design / Video Editing",
      audience: "Campus Social Media (Instagram / WhatsApp)",
    },
    driveUrl: "https://drive.google.com/drive/folders/1ayl70pKJ6OmhgxUTcCHntYWKKudaQ9WN?usp=sharing",
  },
];

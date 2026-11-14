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
    description: "Poster for the internal SIH 2026 event hosted by S.A.C.C.",
    tags: ["SIH 2026", "Internal Hackathon", "S.A.C.C", "Campus Event"],
    specs: {
      type: "Campus Print Poster & Digital Banner",
      tool: "Graphic & Visual Design",
      audience: "College Students & Faculty",
    },
    driveUrl: "https://drive.google.com/file/d/1R7cT0evPUyA8K2eS3GwDUzGkMii4bXuv/view",
    fileId: "1R7cT0evPUyA8K2eS3GwDUzGkMii4bXuv",
  },
  {
    id: "poster-sih-jury",
    title: "INTRODUCING THE JURY — SIH 2026",
    subtitle: "Official Department Jury Panel Showcase",
    category: "Hackathon",
    club: "S.A.C.C Technical Committee",
    year: "2026",
    aspectRatio: "3/4",
    accentColor: "#3B82F6",
    description: "Official jury announcement series introducing faculty evaluators for the internal SIH 2026 campus event.",
    tags: ["Jury Showcase", "Academic Panel", "SIH 2026"],
    specs: {
      type: "Digital Flyer & Noticeboard Display",
      tool: "Visual Layout & Typography",
      audience: "College Faculty & Students",
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
    description: "Workshop announcement poster highlighting CV review sessions and career guidance for college students.",
    tags: ["Career Workshop", "Student Training", "S.A.C.C"],
    specs: {
      type: "Digital Flyer & Print Banner",
      tool: "Typography & Layouts",
      audience: "B.Tech Students",
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
    description: "Promotional poster for the SPEVOX literary and acting club competition at SITS.",
    tags: ["Literary Arts", "Stage Events", "SPEVOX"],
    specs: {
      type: "Campus Noticeboard Flyer",
      tool: "Visual Composition & Typography",
      audience: "College Students",
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
    description: "Promotional poster for the annual campus talent show and student cultural showcase.",
    tags: ["Cultural Fest", "Stage Showcase", "S.A.C.C"],
    specs: {
      type: "Auditorium Banner & Social Flyer",
      tool: "Visual Composition",
      audience: "College Students & Faculty",
    },
    driveUrl: "https://drive.google.com/file/d/1FprFeZKgJ8CXae0EFXrx8V7tU4l_kS6L/view",
    fileId: "1FprFeZKgJ8CXae0EFXrx8V7tU4l_kS6L",
  },
  {
    id: "poster-wonderla",
    title: "WONDERLA COLLEGE EXCURSION",
    subtitle: "Campus Trip — S.A.C.C Student Outing",
    category: "College Fest",
    club: "Student Council Excursions",
    year: "2025",
    aspectRatio: "3/4",
    accentColor: "#EA580C",
    description: "Promotional poster for the college student excursion trip organized by the student council.",
    tags: ["Excursion", "Campus Life", "S.A.C.C"],
    specs: {
      type: "Print Poster & WhatsApp Flyer",
      tool: "Color Blocking & Visual Layout",
      audience: "College Students",
    },
    driveUrl: "https://drive.google.com/file/d/1RGhNTyaOpBL9IRuOsP2kNXgiRvNRVECr/view",
    fileId: "1RGhNTyaOpBL9IRuOsP2kNXgiRvNRVECr",
  },
  {
    id: "poster-navaratri-motion",
    title: "NAVARATRI MOTION POSTERS SERIES",
    subtitle: "Cultural Motion Graphics & Video Reels",
    category: "Motion Poster",
    club: "S.A.C.C Media & Design Cell",
    year: "2025",
    aspectRatio: "9/16",
    accentColor: "#9333EA",
    description: "A series of animated video motion reels designed for campus screens and social media celebrating Navaratri.",
    tags: ["Motion Graphics", "Video Reels", "Cultural Events"],
    specs: {
      type: "Vertical Motion Posters (Reels)",
      tool: "Motion Graphics / Video Editing",
      audience: "Campus Social Media",
    },
    driveUrl: "https://drive.google.com/drive/folders/1ayl70pKJ6OmhgxUTcCHntYWKKudaQ9WN?usp=sharing",
  },
];

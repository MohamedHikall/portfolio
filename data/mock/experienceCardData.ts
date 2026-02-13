import { ExperienceCardProps } from "@/types/experienceCard";

export const experiences: ExperienceCardProps[] = [
  {
    id: 1,
    year: "2024 - Present",
    title: "Frontend Developer",
    tags: [
      { id: 1, name: "Next.js 16" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Clean Code" },
    ],
    index: "01",
  },
  {
    id: 2,
    year: "2023 - Present",
    title: "Modern UI/UX Developer",
    tags: [
      { id: 1, name: "Interactive Design" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Framer Motion" },
    ],
    index: "02",
  },
  {
    id: 3,
    year: "2023 - 2024",
    title: "Junior Frontend Developer (Angular)",
    tags: [
      { id: 1, name: "State Management (Signals & Store)" },
      { id: 2, name: "RxJS & Interceptors" },
      { id: 3, name: "Modular Architecture" },
    ],
    index: "03",
  },
];

export default experiences;

import { ReactNode } from "react";

export type JourneyItem = {
  year: string;
  title: string;
  description: string;
};

export type PhilosophyItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type SkillCategory = {
  category: string;
  skills: { name: string; icon: ReactNode }[];
};

import { MotionValue } from "framer-motion";

export interface Project {
  id: number;
  src: string;
  title: string;
  tags?: string[];
}

export interface ProjectCardProps {
  project: Project;
  i: number;
  tags?: string[];
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

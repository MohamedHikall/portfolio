export type ExperienceCardProps = {
  id: number;
  title: string;
  year: string;
  tags: ExperienceTag[];
  index?: string;
};

export type ExperienceTag = {
  id: number;
  name: string;
};

export type Skill = { name: string; image: string };

export type SkillsCategory = {
  key: string;
  title: { icon: any; label: string };
  skills: Skill[];
};

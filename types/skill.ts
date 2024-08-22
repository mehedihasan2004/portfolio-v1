type Skill = { name: string; image: string };

type SkillsCategory = { value: string; label: string; skills: Skill[] };

export type { Skill, SkillsCategory };

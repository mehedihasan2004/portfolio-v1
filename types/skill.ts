type Skill = { name: string; image: string };

type SkillsCategory = { key: string; title: string; skills: Skill[] };

export type { Skill, SkillsCategory };

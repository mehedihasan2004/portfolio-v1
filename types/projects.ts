export type Project = {
  image: string;
  title: string;
  description: string;
  liveUrl: string;
  githubLinks: { label?: string; url: string }[];
  technologies: string[];
};

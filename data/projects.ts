import { Project } from "@/types/projects";

export const PROJECTS = [
  {
    image: "/images/projects/pulse.png",
    title: "Pulse",
    description:
      "Pulse is a real-time website monitoring platform that ensures your sites stay online and accessible. With Pulse, you can track uptime, detect incidents, and receive instant alerts when issues arise, helping you maintain a seamless online presence and improve user experience effortlessly.",
    liveUrl: "https://pulse-six-mu.vercel.app",
    githubLinks: [{ url: "https://github.com/hash-engineers/pulse" }],
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Typescript",
      "Prisma",
      "Stripe",
      "PostgreSQL",
      "Zod",
      "Tailwind",
      "Shadcn UI",
      "Framer Motion",
      "Three.js",
      "REST API",
    ],
  },
  {
    image: "/images/projects/pure-plus.png",
    title: "Pure Plus",
    description:
      "Pure Plus is a comprehensive healthcare management platform connecting patients with doctors for hassle-free appointments. It simplifies scheduling, tracks medical history, and offers seamless communication between patients and healthcare providers, ensuring convenient and efficient care for all.",
    liveUrl: "",
    githubLinks: [
      {
        label: "Frontend",
        url: "https://github.com/mehedihasan2004/pure-plus-web-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/mehedihasan2004/pure-plus-main-backend",
      },
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Typescript",
      "Prisma",
      "PostgreSQL",
      "Zod",
      "Tailwind",
      "Next UI",
      "Framer Motion",
      "REST API",
    ],
  },
] satisfies Project[];

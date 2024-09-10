import { Project } from "@/types/projects";

export const projects = [
  {
    image: "/images/projects/pulse.png",
    title: "Pulse",
    description:
      "Pulse is a real-time website monitoring platform that ensures your sites stay online and accessible. With Pulse, you can track uptime, detect incidents, and receive instant alerts when issues arise, helping you maintain a seamless online presence and improve user experience effortlessly.",
    liveUrl: "https://pulse-six-mu.vercel.app",
    githubLinks: ["https://github.com/hash-engineers/pulse"],
  },
  {
    image: "/images/projects/pure-plus.png",
    title: "Pure Plus",
    description:
      "Pure Plus is a comprehensive healthcare management platform connecting patients with doctors for hassle-free appointments. It simplifies scheduling, tracks medical history, and offers seamless communication between patients and healthcare providers, ensuring convenient and efficient care for all.",
    liveUrl: "",
    githubLinks: [
      "https://github.com/mehedihasan2004/pure-plus-web-frontend",
      "https://github.com/mehedihasan2004/pure-plus-main-backend",
    ],
  },
  {
    image: "",
    title: "",
    description: "",
    liveUrl: "",
    githubLinks: [""],
  },
] satisfies Project[];

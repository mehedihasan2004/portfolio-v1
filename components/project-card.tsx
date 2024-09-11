"use client";

import Image from "next/image";
import { Card } from "@nextui-org/react";
import { Project } from "@/types/projects";
import { IconBrandGithub } from "@tabler/icons-react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BackgroundGradient } from "./ui/background-gradient";
import { InfiniteMoving } from "./ui/infinite-moving";

type Props = Project;

export function ProjectCard({
  image,
  title,
  description,
  liveUrl,
  githubLinks,
  technologies,
}: Props) {
  return (
    <div className="max-w-[480px]">
      <BackgroundGradient className="bg-black rounded-md">
        <Card className="p-4 rounded-sm space-y-6 h-[520px]">
          <figure className="relative h-[240px] w-full overflow-hidden rounded-sm">
            <Image
              src={image}
              alt={title}
              fill
              className="ease-in-out hover:scale-105 transition rounded-sm"
            />
          </figure>
          <div>
            <h5 className="tracking-wider">{title}</h5>
            <p className="text-balance tracking-wider leading-5 font-light">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-end">
            <div className="flex items-center justify-center gap-x-4">
              {githubLinks.length === 1 ? (
                <a
                  href={githubLinks[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub
                    size={24}
                    className="cursor-pointer hover:text-cyan-500 ease-in-out transition duration-300"
                  />
                </a>
              ) : (
                <>
                  {githubLinks.map((githubLink: string) => (
                    <a
                      key={githubLink}
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBrandGithub
                        size={24}
                        className="cursor-pointer hover:text-cyan-500 ease-in-out transition duration-300"
                      />
                    </a>
                  ))}
                </>
              )}

              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <FaArrowUpRightFromSquare
                  size={18}
                  className="cursor-pointer hover:text-cyan-500 ease-in-out transition duration-300"
                />
              </a>
            </div>
          </div>

          <div className="rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMoving
              technologies={technologies}
              direction="right"
              speed="slow"
              pauseOnHover={false}
            />
          </div>
        </Card>
      </BackgroundGradient>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

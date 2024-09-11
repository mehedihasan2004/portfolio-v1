"use client";

import Image from "next/image";
import { Card } from "@nextui-org/react";
import { Project } from "@/types/projects";
import { IconBrandGithub } from "@tabler/icons-react";
import { InfiniteMoving } from "./ui/infinite-moving";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BackgroundGradient } from "./ui/background-gradient";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

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
        <Card className="p-4 rounded-sm space-y-6 h-[540px] relative">
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

          <div className="rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMoving
              technologies={technologies}
              direction="right"
              speed="slow"
              pauseOnHover={false}
            />
          </div>

          <div className="flex items-center justify-end absolute bottom-0 right-0 p-2">
            <div className="flex items-center justify-center gap-x-4">
              {githubLinks.length === 1 ? (
                <a
                  href={githubLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub
                    size={24}
                    className="cursor-pointer hover:text-cyan-500 ease-in-out transition duration-300"
                  />
                </a>
              ) : (
                <Popover placement="top">
                  <PopoverTrigger>
                    <IconBrandGithub
                      size={24}
                      className="cursor-pointer hover:text-cyan-500 ease-in-out transition duration-300"
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="space-y-2 p-2">
                      {githubLinks.map(({ label, url }) => (
                        <a
                          key={url}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-start gap-x-2 hover:bg-primary-foreground/10 p-2 rounded-lg transition ease-in-out"
                        >
                          <IconBrandGithub size={24} />
                          <span>{label}</span>
                        </a>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              )}

              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <FaArrowUpRightFromSquare
                  size={18}
                  className="cursor-pointer hover:text-cyan-500 ease-in-out transition duration-300"
                />
              </a>
            </div>
          </div>
        </Card>
      </BackgroundGradient>
    </div>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { cn } from "@/lib/utils";
import { Chip } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { BackgroundGradient } from "./background-gradient";

type Props = {
  technologies: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export function InfiniteMoving({
  technologies,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState<boolean>(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  function getDirection() {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }

  function getSpeed() {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn("flex shrink-0 gap-8 flex-nowrap", {
          "animate-scroll": start,
          "hover:[animation-play-state:paused]": pauseOnHover,
        })}
      >
        {technologies.map((technology) => (
          <li key={technology}>
            <BackgroundGradient
              containerClassName="p-[1px]"
              motionDivClassName="rounded-full"
            >
              <Chip
                color="primary"
                className="bg-black font-extralight tracking-widest text-primary-foreground/60 rounded-full"
              >
                {technology}
              </Chip>
            </BackgroundGradient>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import Image from "next/image";
import { Card } from "@nextui-org/react";
import { IconBrandGithub } from "@tabler/icons-react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function Projects() {
  return (
    <section>
      <h4>Some noteworthy projects</h4>

      <div className="max-w-[500px]">
        <BackgroundGradient className="bg-black rounded-md">
          <Card className="p-4 rounded-sm space-y-6">
            <figure className="relative h-[220px] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/logo.png"
                alt="Project"
                fill
                className="ease-in-out hover:scale-105 transition rounded-sm"
              />
            </figure>
            <div>
              <h5 className="tracking-wider">Project 1</h5>
              <p className="text-balance tracking-wider leading-5 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                maxime, nemo nihil consectetur ipsum sit quisquam. Voluptas
                velit placeat doloremque! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Impedit commodi tempore
                necessitatibus pariatur ipsam doloribus perferendis. Aliquam
                blanditiis magni a.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex items-center justify-center gap-x-4">
                <IconBrandGithub
                  size={24}
                  className="cursor-pointer hover:text-cyan-500 ease-in-out transition duration-300"
                />
                <FaArrowUpRightFromSquare
                  size={18}
                  className="cursor-pointer hover:text-cyan-500 ease-in-out transition duration-300"
                />
              </div>
            </div>
          </Card>
        </BackgroundGradient>
      </div>
    </section>
  );
}

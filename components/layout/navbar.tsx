"use client";

import Image from "next/image";
import { useState } from "react";
import { Div } from "@/lib/motion";
import { AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Resume } from "./resume";

const items = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState<boolean>(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    let direction = current - scrollYProgress.getPrevious()!;

    if (scrollYProgress.get() < 0.05) {
      setVisible(true);
    } else {
      if (direction < 0) setVisible(true);
      else setVisible(false);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <Div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="flex fixed mx-auto z-[500000] items-center justify-between space-x-4 max-w-[1444px] w-full top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md border"
      >
        <a href="#hero" className="flex flex-row items-end justify-start">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={56}
            height={56}
            className="cursor-pointer py-1 ease-out"
          />
          <span className="text-lg font-bold ml-[2px] hidden md:block text-gray-300">
            ehedi Hasan
          </span>
        </a>

        <div className="flex flex-row items-center justify-end gap-x-2">
          <div className="size-auto hidden lg:flex flex-row items-center justify-center gap-4 border border-[#7042f861] bg-[#0300145e] px-4 py-1 rounded-l-lg text-gray-200">
            {items.map(({ label, href }, i) => (
              <a
                href={href}
                key={href}
                className="bg-black/5 p-2 rounded-md text-sm font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-500 to-cyan-500 transition duration-300 text-zinc-400"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  0{++i}.&nbsp;
                </span>
                <span>{label}</span>
              </a>
            ))}
          </div>
          <Resume />
        </div>
      </Div>
    </AnimatePresence>
  );
}

"use client";

import Image from "next/image";
import { A, Div, P } from "@/lib/motion";
import { NeuButton } from "@/components/ui/neu-button";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion-animations";

export function Hero() {
  return (
    <section id="hero" className="relative flex flex-col size-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] size-full object-cover"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <Div
        initial="hidden"
        animate="visible"
        className="lg:grid grid-cols-2 gap-x-2 mt-20 w-full z-[20] border border-red-400"
      >
        <div className="my-auto">
          <Div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-4 mt-6 text-6xl font-bold text-white max-w-[600px] size-auto"
          >
            <p className="tracking-widest bg-gradient-to-br from-[#05EBFB] via-[#38BCF9] to-[#4DAFFF] bg-clip-text text-transparent">
              Hi, my name is
            </p>
            <h2 className="tracking-wide text-5xl font-bold text-balance text-[#CCD6F6]">
              Mehedi Hasan
            </h2>
            <h2 className="tracking-wide text-5xl font-bold text-balance text-[#8892B0]">
              I love to build things for web.
            </h2>
          </Div>
          <P
            variants={slideInFromLeft(0.8)}
            className="text-lg text-[#8892B0] my-5 max-w-[600px] text-balance tracking-wide"
          >
            I&apos;m a self taught <strong>Full Stack Developer</strong> with
            experience in website development. Check out my projects and skills.
          </P>
          <A variants={slideInFromLeft(1)} href="#contact">
            <NeuButton text="Hire me" />
          </A>
        </div>
        <Div
          variants={slideInFromRight(0.8)}
          className="size-full hidden lg:flex justify-center items-center border border-violet-400"
        >
          <Image
            src="/images/mainIconsdark.svg"
            alt="technology icons"
            height={650}
            width={650}
          />
        </Div>
      </Div>
    </section>
  );
}

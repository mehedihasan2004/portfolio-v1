"use client";

import Image from "next/image";
import { myGithub, myTwitter } from "@/lib/constants";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconBrandX,
  IconTerminal2,
  IconBrandGithub,
} from "@tabler/icons-react";

export function FooterSocialIcons() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#hero",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },

    {
      title: "Mehedi Hasan",
      icon: (
        <Image
          src="/images/logo.png"
          width={20}
          height={20}
          alt="Mehedi Hasan"
        />
      ),
      href: "#hero",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: myTwitter,
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: myGithub,
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}

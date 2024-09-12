"use client";

import { ElementType } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { myGithub, myInstagram, myLinkedIn, myTwitter } from "@/lib/constants";

const SOCIAL_LINKS = [
  { icon: LuGithub, href: myGithub },
  { icon: FaXTwitter, href: myTwitter, iconSize: 18 },
  { icon: LuInstagram, href: myInstagram },
  { icon: RiLinkedinBoxFill, href: myLinkedIn },
];

type IconProps = {
  icon: ElementType;
  href: string;
  iconSize?: number;
};

function AnchorIcon({ icon: Icon, href, iconSize = 20 }: IconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer ease-in-out transition duration-300 hover:text-cyan-400"
    >
      <Icon size={iconSize} />
    </a>
  );
}

export function Leftbar() {
  return (
    <aside className="w-[30px] h-full hidden xl:block fixed top-0 left-[calc((100%-1444px)/2)] z-[300] content-end">
      <div className="flex flex-col justify-end items-start">
        <div className="flex flex-col justify-end items-center gap-y-6">
          {SOCIAL_LINKS.map((props: IconProps) => (
            <AnchorIcon key={props.href} {...props} />
          ))}
          <div className="h-[100px] w-[1px] bg-white/60" />
        </div>
      </div>
    </aside>
  );
}

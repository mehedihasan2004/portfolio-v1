import { RiLinkedinBoxFill } from "react-icons/ri";
import { LuGithub, LuInstagram, LuTwitter } from "react-icons/lu";

const iconClassName: string =
  "cursor-pointer ease-in-out transition duration-300 hover:text-cyan-400";

export function Leftbar() {
  return (
    <aside className="w-[30px] h-full fixed top-0 left-[calc((100%-1444px)/2)] z-[300] content-end border">
      <div className="flex flex-col justify-end items-start">
        <div className="flex flex-col justify-end items-center gap-y-4">
          <LuGithub size={20} className={iconClassName} />
          <LuInstagram size={20} className={iconClassName} />
          <LuTwitter size={20} className={iconClassName} />
          <RiLinkedinBoxFill size={20} className={iconClassName} />
          <div className="h-[100px] w-[1px] bg-white" />
        </div>
      </div>
    </aside>
  );
}

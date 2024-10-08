import { myEmail } from "@/lib/constants";

export function Rightbar() {
  return (
    <aside className="w-[30px] h-full hidden xl:block fixed top-0 right-[calc((100%-1444px)/2)] z-[300] content-end">
      <div className="flex flex-col justify-end items-end">
        <div className="flex flex-col justify-end items-center gap-y-4">
          <a
            href={"mailto:" + myEmail}
            className="vertical-text ease-in-out transition duration-300 hover:text-cyan-400 cursor-pointer tracking-widest font-extralight"
          >
            {myEmail}
          </a>
          <div className="h-[100px] w-[1px] bg-white/60" />
        </div>
      </div>
    </aside>
  );
}

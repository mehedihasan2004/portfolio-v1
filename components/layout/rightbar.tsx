import { myEmail } from "@/lib/env";

export function Rightbar() {
  return (
    <aside className="w-[30px] h-full fixed top-0 right-[calc((100%-1444px)/2)] z-[300] content-end border">
      <div className="flex flex-col justify-end items-end">
        <div className="flex flex-col justify-end items-center gap-y-4">
          <a
            href={"mailto:" + myEmail}
            className="vertical-text ease-in-out transition duration-300 hover:text-cyan-400 cursor-pointer"
          >
            {myEmail}
          </a>
          <div className="h-[100px] w-[1px] bg-white" />
        </div>
      </div>
    </aside>
  );
}

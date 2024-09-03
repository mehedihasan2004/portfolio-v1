const email = process.env.NEXT_PUBLIC_MY_EMAIL;

export function Rightbar() {
  return (
    <aside className="w-[30px] h-full fixed top-0 right-[calc((100%-1280px)/2)] z-[300] content-end">
      <div className="flex flex-col justify-end items-center gap-y-4">
        <a
          href={"mailto:" + email}
          className="vertical-text ease-in-out transition duration-300 hover:text-cyan-400 cursor-pointer"
        >
          {email}
        </a>
        <div className="h-[100px] w-[1px] bg-white" />
      </div>
    </aside>
  );
}

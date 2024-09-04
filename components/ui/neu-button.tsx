import { cn } from "@/lib/utils";

type Props = {
  text: string;
  type?: "submit";
  className?: string;
  onClick?: () => void;
};

export function NeuButton({ text, type, className, onClick }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "px-6 py-2 font-medium bg-gradient-to-br from-[#05EBFB] via-[#38BCF9] to-[#4DAFFF] text-black w-fit transition-all duration-200 shadow-[3px_3px_0px_violet] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]",
        className
      )}
    >
      {text}
    </button>
  );
}

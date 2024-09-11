import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Leftbar } from "@/components/layout/leftbar";
import { Rightbar } from "@/components/layout/rightbar";
import { StarsCanvas } from "@/components/canvas/stars-canvas";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehedi Hasan",
  description: "A introvert developer based in Bangladesh.",
};

type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(inter.className, "text-white h-full overflow-x-hidden")}
      >
        <Providers>
          <header />
          <div className="max-w-[1444px] mx-auto flex h-full relative border border-sky-400">
            <Navbar />
            <Leftbar />
            <div className="h-full border border-red-400 mx-24 px-4">
              <div className="mx-[40px]">
                <main>{children}</main>
                <Footer />
              </div>
            </div>
            <Rightbar />
          </div>
          <StarsCanvas />
        </Providers>
      </body>
    </html>
  );
}

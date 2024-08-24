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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehedi Hasan",
  description: "A introvert developer based in Bangladesh.",
};

type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "text-white h-full")}>
        <Providers>
          <header />
          <div className="max-w-7xl mx-auto flex h-full relative">
            <Leftbar />
            <div className="h-full overflow-y-scroll">
              <Navbar />
              <div className="mx-[40px]">
                <main>{children}</main>
                <footer>Footer</footer>
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

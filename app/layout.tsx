import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
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
      <body
        className={cn(
          inter.className,
          "max-w-7xl mx-auto overflow-x-hidden overflow-y-scroll border-x text-white h-full"
        )}
      >
        <Providers>
          <header />
          <nav>Navbar</nav>
          <main>{children}</main>
          <footer>Footer</footer>
          <StarsCanvas />
        </Providers>
      </body>
    </html>
  );
}

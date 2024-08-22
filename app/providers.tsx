"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

type Props = { children: ReactNode };

export function Providers({ children }: Props) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}

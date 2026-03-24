"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="rohan-portfolio-theme"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

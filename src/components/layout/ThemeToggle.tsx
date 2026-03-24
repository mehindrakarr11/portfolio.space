"use client";

import { useTheme } from "next-themes";
import { startTransition, useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => setMounted(true));
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 backdrop-blur-md dark:border-white/15 dark:bg-white/10"
        aria-label="Theme"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white/70 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-black/20 hover:shadow-md dark:border-white/12 dark:bg-white/[0.07] dark:shadow-none dark:hover:border-white/25"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className={`absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/40 to-orange-300/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-sky-400/30 dark:to-violet-500/25 ${isDark ? "opacity-100 dark:opacity-80" : ""}`}
      />
      <span className="relative text-[15px] leading-none">
        {isDark ? "☾" : "☀"}
      </span>
      <span className="sr-only">Current: {theme}</span>
    </button>
  );
}

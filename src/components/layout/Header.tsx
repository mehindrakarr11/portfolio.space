"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { EASE } from "@/lib/motion";
import { sectionInner } from "@/lib/ui-classes";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const barRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -28, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: EASE.nav,
          delay: 0.18,
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        ref={barRef}
        className="fixed left-0 right-0 top-4 z-[90] px-5 sm:top-5 sm:px-8 lg:px-12"
      >
        <div
          className={`${sectionInner} flex items-center justify-between gap-3 rounded-2xl border border-black/[0.08] bg-white/60 px-3 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-2xl dark:border-white/[0.09] dark:bg-black/40 dark:shadow-[0_12px_48px_rgba(0,0,0,0.45)] sm:rounded-[1.125rem] sm:px-4 sm:py-3 lg:px-5`}
        >
          <Link
            href="#top"
            className="group flex min-w-0 items-center gap-2.5 font-semibold tracking-tight text-neutral-900 dark:text-neutral-50"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/90 to-violet-600/90 text-xs font-bold text-white shadow-inner sm:h-10 sm:w-10 sm:text-sm">
              RM
            </span>
            <span className="hidden truncate text-sm sm:inline">Rohan</span>
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-[0.8125rem] font-medium tracking-tight text-neutral-600 transition-colors hover:bg-black/[0.05] hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-white/[0.07] dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/65 text-neutral-800 backdrop-blur-md dark:border-white/12 dark:bg-white/10 dark:text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-[4.5rem] z-[85] px-5 transition-all duration-300 sm:px-8 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div
          className={`${sectionInner} rounded-2xl border border-black/10 bg-white/85 p-3 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-black/75 sm:p-4`}
        >
          <div className="flex flex-col gap-0.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[0.9375rem] font-medium tracking-tight text-neutral-800 hover:bg-black/[0.04] dark:text-neutral-100 dark:hover:bg-white/[0.06]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

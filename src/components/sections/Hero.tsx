"use client";

import { LINKS, PERSON } from "@/lib/constants";
import { EASE } from "@/lib/motion";
import {
  heroEyebrow,
  heroInner,
  heroLead,
  heroMeta,
  heroTitle,
} from "@/lib/ui-classes";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) return;

      const tl = gsap.timeline({
        defaults: { ease: EASE.out },
        delay: 0.32,
      });

      tl.fromTo(
        "[data-hero-eyebrow]",
        { y: 22, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
      ).fromTo(
        "[data-hero-name] .word",
        { yPercent: 108, opacity: 0, rotateX: -14, filter: "blur(10px)" },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: { each: 0.075, from: "start", ease: EASE.smooth },
        },
        "-=0.58",
      );

      tl.fromTo(
        "[data-hero-tagline] .word",
        { y: 36, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.95,
          stagger: { each: 0.028, from: "start", ease: EASE.smooth },
        },
        "-=0.65",
      ).fromTo(
        "[data-hero-cta] > *",
        { y: 28, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.88,
          stagger: { each: 0.09, from: "start" },
          ease: EASE.outSoft,
        },
        "-=0.42",
      );

      tl.fromTo(
        "[data-hero-meta]",
        { opacity: 0, y: 16, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.95,
          ease: EASE.expo,
        },
        "-=0.35",
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const nameWords = PERSON.name.split(" ");
  const tagWords = PERSON.tagline.split(" ");

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end pb-20 pt-28 sm:justify-center sm:pb-28 sm:pt-36 lg:pb-36"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[15%] top-[18%] h-48 w-48 rounded-full bg-white/50 blur-3xl dark:bg-white/10 sm:h-72 sm:w-72" />
        <div className="absolute -left-[10%] bottom-[25%] h-40 w-40 rounded-full bg-violet-300/40 blur-3xl dark:bg-violet-500/15 sm:h-56 sm:w-56" />
      </div>

      <div className={heroInner}>
        <p data-hero-eyebrow className={heroEyebrow}>
          {PERSON.location}
        </p>
        <h1
          data-hero-name
          className={heroTitle}
          style={{ perspective: "900px" }}
        >
          {nameWords.map((w, i) => (
            <span key={`${w}-${i}`} className="word mr-[0.18em] inline-block">
              {w}
            </span>
          ))}
        </h1>
        <p data-hero-tagline className={heroLead}>
          {tagWords.map((w, i) => (
            <span key={`${w}-${i}`} className="word mr-[0.22em] inline-block">
              {w}
            </span>
          ))}
        </p>
        <div
          data-hero-cta
          className="mt-10 flex flex-col flex-wrap gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-x-2 sm:gap-y-3"
        >
          <a
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 px-8 text-[0.9375rem] font-medium tracking-tight text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.02] dark:bg-white dark:text-neutral-950 dark:shadow-[0_8px_28px_rgba(0,0,0,0.35)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
            <span className="relative">View work</span>
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-black/12 bg-white/50 px-8 text-[0.9375rem] font-medium tracking-tight text-neutral-900 backdrop-blur-md transition-all duration-300 hover:border-black/18 hover:bg-white/75 dark:border-white/14 dark:bg-white/[0.06] dark:text-white dark:hover:border-white/22 dark:hover:bg-white/10"
          >
            Contact
          </a>
          <span className="hidden h-4 w-px bg-black/10 sm:mx-1 sm:block dark:bg-white/15" aria-hidden />
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center px-3 text-[0.9375rem] font-medium tracking-tight text-neutral-600 underline-offset-[0.2em] hover:text-neutral-950 hover:underline dark:text-neutral-400 dark:hover:text-white sm:px-4"
          >
            GitHub
          </a>
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center px-3 text-[0.9375rem] font-medium tracking-tight text-neutral-600 underline-offset-[0.2em] hover:text-neutral-950 hover:underline dark:text-neutral-400 dark:hover:text-white sm:px-4"
          >
            Instagram
          </a>
        </div>
        <p data-hero-meta className={heroMeta}>
          {PERSON.goal}
        </p>
      </div>
    </section>
  );
}

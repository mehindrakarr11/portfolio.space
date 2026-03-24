"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { PERSON } from "@/lib/constants";
import { EASE, SCROLL } from "@/lib/motion";
import {
  blockGap,
  eyebrow,
  heading2,
  lead,
  sectionInner,
  sectionShell,
} from "@/lib/ui-classes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "next-themes";
import Image from "next/image";
import { startTransition, useEffect, useMemo, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function statsTheme(resolved?: string) {
  return resolved === "dark" ? "dark" : "default";
}

export function GitHubSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => setMounted(true));
  }, []);

  const gh = PERSON.githubUsername;

  const urls = useMemo(() => {
    const t = statsTheme(mounted ? resolvedTheme : undefined);
    const base = `https://github-readme-stats.vercel.app/api?username=${gh}&show_icons=true&hide_border=true&bg_color=00000000`;
    const themed =
      t === "dark"
        ? `${base}&theme=dark&icon_color=58a6ff&text_color=e6edf3&title_color=ffffff`
        : `${base}&theme=default&icon_color=0969da&text_color=24292f&title_color=0969da`;

    const langs = `https://github-readme-stats.vercel.app/api/top-langs/?username=${gh}&layout=compact&hide_border=true&bg_color=00000000&${
      t === "dark"
        ? "theme=dark&title_color=ffffff&text_color=e6edf3"
        : "theme=default&title_color=0969da&text_color=24292f"
    }`;

    const streak = `https://streak-stats.demolab.com?user=${gh}&hide_border=true&background=00000000&${
      t === "dark"
        ? "ring=58a6ff&fire=58a6ff&currStreakLabel=e6edf3&sideLabels=e6edf3&dates=e6edf3&stroke=FFFFFF22"
        : "ring=0969da&fire=0969da&currStreakLabel=24292f&sideLabels=24292f&dates=24292f&stroke=00000018"
    }`;

    return { themed, langs, streak };
  }, [gh, mounted, resolvedTheme]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-gh-intro] > *",
        { y: 32, opacity: 0, filter: "blur(7px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: EASE.out,
          stagger: { each: 0.08, from: "start", ease: EASE.smooth },
          scrollTrigger: {
            ...SCROLL.reveal,
            trigger: "[data-gh-intro]",
            start: "top 84%",
          },
        },
      );

      gsap.fromTo(
        "[data-gh-card]",
        {
          y: 52,
          opacity: 0,
          scale: 0.97,
          filter: "blur(4px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.12,
          ease: EASE.out,
          stagger: {
            each: 0.18,
            from: "center",
            ease: EASE.smooth,
          },
          scrollTrigger: {
            ...SCROLL.reveal,
            trigger: section,
            start: "top 70%",
          },
        },
      );
    }, section);
    return () => ctx.revert();
  }, [mounted, resolvedTheme, gh]);

  return (
    <section ref={sectionRef} id="github" className={sectionShell}>
      <div className={sectionInner}>
        <div data-gh-intro className="max-w-3xl">
          <p className={eyebrow}>GitHub</p>
          <h2 className={`${heading2} max-w-[44rem]`}>
            Live stats from GitHub Readme Stats.
          </h2>
          <p className={`${lead} max-w-2xl`}>
            Contributions and language mix update automatically—great for recruiters
            scanning your activity at a glance.
          </p>
        </div>

        <div className={`${blockGap} grid gap-5 lg:grid-cols-2 lg:gap-6`}>
          <GlassPanel data-gh-card className="p-5 sm:p-6">
            <div className="relative aspect-[4.2/1] w-full overflow-hidden rounded-2xl">
              {mounted ? (
                <Image
                  src={urls.themed}
                  alt={`GitHub stats for ${gh}`}
                  fill
                  unoptimized
                  className="object-contain object-left"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  loading="lazy"
                />
              ) : (
                <div className="h-full w-full animate-pulse rounded-xl bg-black/5 dark:bg-white/10" />
              )}
            </div>
          </GlassPanel>

          <GlassPanel data-gh-card className="p-5 sm:p-6">
            <div className="relative aspect-[3.5/1] w-full overflow-hidden rounded-2xl">
              {mounted ? (
                <Image
                  src={urls.langs}
                  alt={`Top languages for ${gh}`}
                  fill
                  unoptimized
                  className="object-contain object-left"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  loading="lazy"
                />
              ) : (
                <div className="h-full w-full animate-pulse rounded-xl bg-black/5 dark:bg-white/10" />
              )}
            </div>
          </GlassPanel>

          <GlassPanel data-gh-card className="p-5 sm:p-6 lg:col-span-2">
            <div className="relative aspect-[4/1] w-full max-w-3xl overflow-hidden rounded-2xl">
              {mounted ? (
                <Image
                  src={urls.streak}
                  alt={`Contribution streak for ${gh}`}
                  fill
                  unoptimized
                  className="object-contain object-left"
                  sizes="(min-width: 1024px) 768px, 100vw"
                  loading="lazy"
                />
              ) : (
                <div className="h-full w-full animate-pulse rounded-xl bg-black/5 dark:bg-white/10" />
              )}
            </div>
          </GlassPanel>
        </div>

        <p className="mt-10 text-center text-[0.6875rem] font-medium leading-relaxed tracking-wide text-neutral-500 dark:text-neutral-500 sm:text-xs">
          Powered by{" "}
          <a
            className="underline underline-offset-2 hover:text-neutral-800 dark:hover:text-neutral-200"
            href="https://github.com/anuraghazra/github-readme-stats"
            target="_blank"
            rel="noreferrer"
          >
            github-readme-stats
          </a>{" "}
          and{" "}
          <a
            className="underline underline-offset-2 hover:text-neutral-800 dark:hover:text-neutral-200"
            href="https://github.com/DenverCoder1/github-readme-streak-stats"
            target="_blank"
            rel="noreferrer"
          >
            streak-stats
          </a>
          .
        </p>
      </div>
    </section>
  );
}

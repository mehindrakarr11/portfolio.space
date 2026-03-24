"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { SKILL_GROUPS } from "@/lib/constants";
import { EASE, SCROLL } from "@/lib/motion";
import {
  blockGap,
  eyebrow,
  heading2,
  sectionInner,
  sectionShell,
  skillGroupLabel,
} from "@/lib/ui-classes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function iconFor(name: string) {
  const n = name.toLowerCase();
  if (n.includes("html")) return "⟨/⟩";
  if (n.includes("css")) return "◧";
  if (n.includes("node")) return "⬢";
  if (n.includes("javascript")) return "JS";
  if (n.includes("next")) return "▲";
  if (n.includes("aws")) return "☁";
  if (n.includes("staruml") || n.includes("uml")) return "◇";
  if (n.includes("ios")) return "iO";
  return "◆";
}

export function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-sk-head] > *",
        { y: 32, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: EASE.out,
          stagger: { each: 0.09, from: "start", ease: EASE.smooth },
          scrollTrigger: {
            trigger: "[data-sk-head]",
            start: "top 86%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
          },
        },
      );

      gsap.fromTo(
        "[data-skill-card]",
        { y: 48, opacity: 0, filter: "blur(4px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.05,
          ease: EASE.out,
          stagger: {
            each: 0.14,
            from: "start",
            ease: EASE.smooth,
          },
          scrollTrigger: {
            ...SCROLL.reveal,
            trigger: section,
            start: "top 74%",
          },
        },
      );

      section.querySelectorAll<HTMLElement>("[data-skill-bar]").forEach((bar) => {
        const w = bar.getAttribute("data-width") || "0";
        const row = bar.closest("[data-skill-row]");
        gsap.fromTo(
          bar,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: Number(w) / 100,
            duration: 1.35,
            ease: EASE.inOutStrong,
            scrollTrigger: {
              trigger: row ?? bar,
              start: "top 91%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="skills" className={sectionShell}>
      <div className={sectionInner}>
        <div data-sk-head className="max-w-3xl">
          <p className={eyebrow}>Skills</p>
          <h2 className={heading2}>
            Tools I use to design, build, and ship.
          </h2>
        </div>

        <div className={`${blockGap} grid gap-5 md:grid-cols-2 md:gap-6 lg:gap-8`}>
          {SKILL_GROUPS.map((group) => (
            <GlassPanel key={group.title} data-skill-card hover>
              <h3 className={skillGroupLabel}>{group.title}</h3>
              <ul className="mt-7 space-y-6 sm:mt-8">
                {group.items.map((item) => (
                  <li key={item.name} data-skill-row>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3.5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/18 to-violet-500/18 text-xs font-bold text-neutral-800 dark:text-neutral-100">
                          {iconFor(item.name)}
                        </span>
                        <span className="truncate text-[0.9375rem] font-medium tracking-tight text-neutral-950 dark:text-white">
                          {item.name}
                        </span>
                      </div>
                      <span className="shrink-0 text-xs font-medium tabular-nums tracking-tight text-neutral-500 dark:text-neutral-400">
                        {item.level}%
                      </span>
                    </div>
                    <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
                      <div
                        data-skill-bar
                        data-width={String(item.level)}
                        className="h-full w-full rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { LINKS, PERSON } from "@/lib/constants";
import { EASE, SCROLL } from "@/lib/motion";
import {
  blockGap,
  eyebrow,
  heading2,
  sectionInner,
  sectionShell,
} from "@/lib/ui-classes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function LinkedInSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-in-head] > *",
        { y: 30, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.98,
          ease: EASE.out,
          stagger: { each: 0.09, from: "start", ease: EASE.smooth },
          scrollTrigger: {
            ...SCROLL.reveal,
            trigger: "[data-in-head]",
            start: "top 86%",
          },
        },
      );

      gsap.fromTo(
        "[data-in-card]",
        {
          y: 48,
          opacity: 0,
          scale: 0.98,
          filter: "blur(5px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.08,
          ease: EASE.out,
          scrollTrigger: {
            ...SCROLL.reveal,
            trigger: section,
            start: "top 72%",
          },
        },
      );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="linkedin" className={sectionShell}>
      <div className={sectionInner}>
        <div data-in-head className="max-w-3xl">
          <p className={eyebrow}>LinkedIn</p>
          <h2 className={`${heading2} max-w-[40rem]`}>
            Let&apos;s connect professionally.
          </h2>
        </div>

        <GlassPanel
          data-in-card
          className={`${blockGap} mx-auto max-w-2xl`}
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
            <div className="min-w-0 flex-1 space-y-1">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-500">
                Profile
              </p>
              <p className="text-pretty text-xl font-semibold leading-snug tracking-[-0.02em] text-neutral-950 dark:text-white sm:text-2xl">
                {PERSON.name}
              </p>
              <p className="max-w-md pt-2 text-[0.9375rem] font-normal leading-relaxed text-neutral-600 dark:text-neutral-400">
                {PERSON.location} · {PERSON.goal}
              </p>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex pt-3 text-sm font-medium tracking-tight text-pink-600 underline-offset-[0.2em] hover:underline dark:text-pink-400"
              >
                Instagram →
              </a>
            </div>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#0A66C2] px-8 text-[0.9375rem] font-semibold tracking-tight text-white shadow-[0_10px_28px_rgba(10,102,194,0.35)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_14px_36px_rgba(10,102,194,0.4)]"
            >
              Connect with me
            </a>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

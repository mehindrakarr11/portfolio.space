"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { EASE } from "@/lib/motion";
import {
  blockGap,
  cardBody,
  cardTitle,
  eyebrow,
  heading2,
  lead,
  sectionInner,
  sectionShell,
} from "@/lib/ui-classes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PLACEHOLDERS = [
  {
    title: "Product landing",
    desc: "Cinematic hero, content sections, and performance-first delivery—coming soon.",
    tag: "Next.js",
  },
  {
    title: "Cloud-deployed app",
    desc: "AWS-backed workflow with resilient hosting patterns—in the works.",
    tag: "AWS",
  },
  {
    title: "AI-assisted UI",
    desc: "Experimental interface patterns blending smart assistance with tasteful motion.",
    tag: "AI UX",
  },
];

export function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      const headTl = gsap.timeline({
        scrollTrigger: {
          trigger: "[data-projects-head]",
          start: "top 84%",
          toggleActions: "play none none reverse",
          fastScrollEnd: true,
        },
      });

      headTl.fromTo(
        "[data-projects-head] > *",
        { y: 36, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.95,
          ease: EASE.out,
          stagger: { each: 0.1, from: "start", ease: EASE.smooth },
        },
      );

      gsap.fromTo(
        "[data-project-card]",
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
          filter: "blur(5px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: EASE.out,
          stagger: {
            each: 0.13,
            from: "start",
            ease: EASE.smooth,
          },
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
          },
        },
      );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="projects" className={sectionShell}>
      <div className={sectionInner}>
        <div data-projects-head className="max-w-3xl">
          <p className={eyebrow}>Projects</p>
          <h2 className={`${heading2} max-w-[44rem]`}>
            Placeholder work—real case studies loading soon.
          </h2>
          <p className={`${lead} max-w-2xl`}>
            Each card is ready to be swapped for shipped work: repo links, stack
            notes, and impact metrics.
          </p>
        </div>

        <div
          className={`${blockGap} grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7`}
          style={{ perspective: "1400px" }}
        >
          {PLACEHOLDERS.map((p) => (
            <GlassPanel
              key={p.title}
              data-project-card
              className="group flex h-full flex-col transition-transform duration-500 ease-out hover:-translate-y-1.5"
              style={{ transformStyle: "preserve-3d" }}
              hover
            >
              <span className="mb-5 inline-flex w-fit rounded-full border border-black/10 bg-white/65 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-neutral-600 backdrop-blur dark:border-white/12 dark:bg-white/[0.07] dark:text-neutral-400">
                {p.tag}
              </span>
              <h3 className={cardTitle}>{p.title}</h3>
              <p className={cardBody}>{p.desc}</p>
              <span className="mt-7 text-sm font-medium tracking-tight text-violet-600 opacity-85 transition group-hover:opacity-100 dark:text-violet-300">
                Details soon →
              </span>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}

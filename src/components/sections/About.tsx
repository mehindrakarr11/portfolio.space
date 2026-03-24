"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { PERSON } from "@/lib/constants";
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

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-about-line]",
        { y: 44, opacity: 0, filter: "blur(7px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: EASE.out,
          stagger: {
            each: 0.15,
            from: "start",
            ease: EASE.smooth,
          },
          scrollTrigger: {
            trigger: section,
            ...SCROLL.reveal,
            start: "top 76%",
          },
        },
      );

      gsap.fromTo(
        "[data-about-heading]",
        { y: 32, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: EASE.out,
          scrollTrigger: {
            trigger: "[data-about-heading]",
            start: "top 88%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const sentences = PERSON.bio
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.])\s+/);

  return (
    <section ref={sectionRef} id="about" className={sectionShell}>
      <div className={sectionInner}>
        <div data-about-heading className="max-w-3xl">
          <p className={eyebrow}>About</p>
          <h2 className={heading2}>
            Building calm, capable interfaces—powered by modern stacks.
          </h2>
        </div>
        <GlassPanel className={`${blockGap} max-w-[42rem]`}>
          <div className="space-y-7 text-[0.9375rem] font-normal leading-[1.75] text-neutral-700 dark:text-neutral-300 sm:text-[1.0625rem] sm:leading-[1.72]">
            {sentences.map((line, idx) => (
              <p key={idx} data-about-line className="text-pretty">
                {line}
              </p>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { CONTACT_EMAIL, LINKS, PERSON } from "@/lib/constants";
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
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-contact-intro] > *",
        { y: 34, opacity: 0, filter: "blur(7px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: EASE.out,
          stagger: { each: 0.1, from: "start", ease: EASE.smooth },
          scrollTrigger: {
            ...SCROLL.reveal,
            trigger: "[data-contact-intro]",
            start: "top 86%",
          },
        },
      );

      gsap.fromTo(
        "[data-contact-block]",
        { y: 42, opacity: 0, filter: "blur(5px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.05,
          ease: EASE.out,
          stagger: {
            each: 0.16,
            from: "start",
            ease: EASE.smooth,
          },
          scrollTrigger: {
            ...SCROLL.reveal,
            trigger: section,
            start: "top 72%",
          },
        },
      );

      gsap.fromTo(
        "[data-contact-footer]",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: EASE.expo,
          scrollTrigger: {
            trigger: "[data-contact-footer]",
            start: "top 95%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
          },
        },
      );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="contact"
      className={`${sectionShell} pb-28 sm:pb-36 lg:pb-40`}
    >
      <div className={sectionInner}>
        <div data-contact-intro className="max-w-3xl">
          <p className={eyebrow}>Contact</p>
          <h2 className={heading2}>Ready when you are.</h2>
          <p className={`${lead} max-w-2xl`}>
            Internships, learning collaborations, or freelance builds—reach out with
            a short note and I&apos;ll respond quickly.
          </p>
        </div>

        <div className={`${blockGap} grid gap-5 lg:grid-cols-2 lg:gap-7`}>
          <GlassPanel data-contact-block>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-500">
              Email
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Opportunity%20for%20${encodeURIComponent(PERSON.name)}`}
              className="mt-4 inline-flex break-all text-lg font-medium tracking-tight text-neutral-950 underline-offset-[0.2em] hover:underline dark:text-white sm:text-xl"
            >
              {CONTACT_EMAIL}
            </a>
            {CONTACT_EMAIL.includes("example.com") && (
              <p className="mt-4 text-sm font-normal leading-relaxed text-neutral-500 dark:text-neutral-400">
                Replace the placeholder in{" "}
                <code className="rounded-md bg-black/[0.06] px-2 py-0.5 font-mono text-[0.8125rem] dark:bg-white/[0.08]">
                  constants.ts
                </code>{" "}
                with your real address before publishing.
              </p>
            )}
          </GlassPanel>

          <GlassPanel data-contact-block>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-500">
              Social
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/12 bg-white/55 px-5 py-2.5 text-[0.9375rem] font-medium tracking-tight text-neutral-900 backdrop-blur transition-colors hover:border-black/18 hover:bg-white/80 dark:border-white/12 dark:bg-white/[0.06] dark:text-white dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/12 bg-white/55 px-5 py-2.5 text-[0.9375rem] font-medium tracking-tight text-neutral-900 backdrop-blur transition-colors hover:border-black/18 hover:bg-white/80 dark:border-white/12 dark:bg-white/[0.06] dark:text-white dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/12 bg-white/55 px-5 py-2.5 text-[0.9375rem] font-medium tracking-tight text-neutral-900 backdrop-blur transition-colors hover:border-black/18 hover:bg-white/80 dark:border-white/12 dark:bg-white/[0.06] dark:text-white dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                Instagram
              </a>
              <a
                href={LINKS.resume}
                className="rounded-full border border-black/12 bg-white/55 px-5 py-2.5 text-[0.9375rem] font-medium tracking-tight text-neutral-900 backdrop-blur transition-colors hover:border-black/18 hover:bg-white/80 dark:border-white/12 dark:bg-white/[0.06] dark:text-white dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                Resume
              </a>
            </div>
          </GlassPanel>
        </div>

        <p
          data-contact-footer
          className="mt-16 text-center text-[0.6875rem] font-medium tracking-wide text-neutral-500 dark:text-neutral-500 sm:mt-20 sm:text-xs"
        >
          © {new Date().getFullYear()} {PERSON.name}. Crafted with Next.js &
          GSAP.
        </p>
      </div>
    </section>
  );
}

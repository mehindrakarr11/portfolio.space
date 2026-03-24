"use client";

import { SCROLL } from "@/lib/motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type BlobConfig = { outer: string; inner: string };

const BLOBS: BlobConfig[] = [
  {
    outer: "absolute -left-[20%] top-[10%]",
    inner:
      "h-[55vmin] w-[55vmin] rounded-full bg-gradient-to-tr from-sky-400/50 via-cyan-300/40 to-transparent blur-3xl dark:from-sky-500/25 dark:via-cyan-400/20",
  },
  {
    outer: "absolute -right-[15%] top-[35%]",
    inner:
      "h-[60vmin] w-[60vmin] rounded-full bg-gradient-to-bl from-violet-500/45 via-fuchsia-400/35 to-transparent blur-3xl dark:from-violet-500/22 dark:via-fuchsia-500/18",
  },
  {
    outer: "absolute bottom-[-10%] left-[20%]",
    inner:
      "h-[50vmin] w-[50vmin] rounded-full bg-gradient-to-t from-amber-300/30 via-orange-400/25 to-transparent blur-3xl dark:from-amber-400/14 dark:via-orange-500/12",
  },
];

export function GradientBackdrop() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const outers = wrap.querySelectorAll<HTMLElement>("[data-blob-outer]");
    const inners = wrap.querySelectorAll<HTMLElement>("[data-blob-inner]");

    const floatTl = gsap.timeline({ repeat: -1, yoyo: true });
    inners.forEach((inner, i) => {
      const mag = 14 + i * 6;
      floatTl.to(
        inner,
        { x: i % 2 === 0 ? mag : -mag, duration: 10 + i * 2, ease: "sine.inOut" },
        0,
      );
    });

    const scrollTweens = gsap.utils.toArray(outers).map((outer, i) =>
      gsap.to(outer as HTMLElement, {
        y: (i + 1) * 64,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: SCROLL.scrubSmooth,
        },
      }),
    );

    return () => {
      floatTl.kill();
      scrollTweens.forEach((tw) => tw.kill());
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(167,139,250,0.3),transparent_50%),radial-gradient(ellipse_70%_60%_at_0%_80%,rgba(244,114,182,0.22),transparent_55%)] dark:bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_40%,rgba(167,139,250,0.15),transparent_50%),radial-gradient(ellipse_70%_60%_at_0%_90%,rgba(244,114,182,0.12),transparent_55%)]" />
      {BLOBS.map((b, i) => (
        <div key={i} data-blob-outer className={b.outer}>
          <div data-blob-inner className={b.inner} />
        </div>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.65)_0%,transparent_35%,transparent_65%,rgba(248,250,252,0.9)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(5,5,8,0.85)_0%,transparent_40%,transparent_60%,rgba(5,5,8,0.92)_100%)]" />
    </div>
  );
}

"use client";

import { EASE } from "@/lib/motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: EASE.inOut },
        onComplete: () => setDone(true),
      });

      tl.fromTo(
        "[data-preload-line]",
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.05, ease: EASE.inOutStrong },
      )
        .fromTo(
          "[data-preload-text]",
          { y: 16, opacity: 0, letterSpacing: "0.35em", filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            letterSpacing: "0.2em",
            filter: "blur(0px)",
            duration: 0.62,
            ease: EASE.outSoft,
          },
          "-=0.55",
        )
        .to("[data-preload-text]", {
          opacity: 0,
          y: -10,
          filter: "blur(6px)",
          duration: 0.42,
          ease: EASE.inOut,
          delay: 0.12,
        })
        .to(
          el,
          {
            yPercent: -100,
            duration: 0.88,
            ease: EASE.inOutStrong,
          },
          "-=0.15",
        );
    }, el);

    return () => ctx.revert();
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#f6f6f7] dark:bg-[#050507]"
    >
      <div className="flex w-[min(220px,58vw)] flex-col gap-4 px-6">
        <div className="h-[2px] w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
          <div
            data-preload-line
            className="h-full w-full rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500"
          />
        </div>
        <p
          data-preload-text
          className="text-center text-xs font-medium tracking-[0.2em] text-neutral-500 dark:text-neutral-400"
        >
          ROHAN PORTFOLIO
        </p>
      </div>
    </div>
  );
}

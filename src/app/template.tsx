"use client";

import { EASE } from "@/lib/motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = gsap.fromTo(
      el,
      { opacity: 0, y: 14 },
      {
        opacity: 1,
        y: 0,
        duration: 0.72,
        ease: EASE.outSoft,
        delay: 0.08,
      },
    );
    return () => {
      t.kill();
    };
  }, []);

  return (
    <div ref={ref} className="flex min-h-full flex-1 flex-col">
      {children}
    </div>
  );
}

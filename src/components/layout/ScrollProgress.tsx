"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height =
        doc.scrollHeight - doc.clientHeight || 1;
      setP(Math.min(100, Math.max(0, (scrollTop / height) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[3px] w-full bg-black/5 dark:bg-white/5"
      aria-hidden
    >
      <div
        className="h-full origin-left rounded-r-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 transition-[width] duration-150 ease-out will-change-[width]"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export function ChatbotPlaceholder() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!panelRef.current) return;
    if (open) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 12, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" },
      );
    }
  }, [open]);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const float = gsap.to(btn, {
      y: -4,
      duration: 2.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    return () => {
      float.kill();
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[95] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8 lg:right-12">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Assistant placeholder"
          className="w-[min(100vw-2rem,360px)] rounded-3xl border border-black/10 bg-white/75 p-5 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-black/60"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Ask about me
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
            This is a UI placeholder for a future AI assistant. Hook your model or
            hosted API here to answer recruiter questions about experience,
            stack, and availability.
          </p>
          <div className="mt-4 flex gap-2 rounded-2xl border border-black/10 bg-black/[0.03] p-2 dark:border-white/10 dark:bg-white/5">
            <input
              readOnly
              placeholder="Coming soon: chat with my portfolio…"
              className="min-w-0 flex-1 bg-transparent px-2 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 dark:text-neutral-100 dark:placeholder:text-neutral-500"
            />
            <button
              type="button"
              disabled
              className="rounded-xl bg-neutral-900 px-3 py-2 text-xs font-semibold text-white opacity-50 dark:bg-white dark:text-neutral-900"
            >
              Send
            </button>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-3 w-full rounded-xl py-2 text-xs font-medium text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            Close
          </button>
        </div>
      )}
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group relative flex h-14 items-center gap-2 overflow-hidden rounded-full border border-black/10 bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-5 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(99,102,241,0.45)] transition-transform hover:scale-[1.03] dark:shadow-[0_12px_40px_rgba(99,102,241,0.35)]"
      >
        <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-lg">
          ✦
        </span>
        <span className="relative">Ask about me</span>
      </button>
    </div>
  );
}

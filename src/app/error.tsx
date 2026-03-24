"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative z-10 flex min-h-[100dvh] flex-1 flex-col items-center justify-center bg-[#f6f6f7] px-5 py-20 dark:bg-[#050507]">
      <div className="max-w-md rounded-2xl border border-black/10 bg-white/60 p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-black/50 dark:shadow-[0_12px_48px_rgba(0,0,0,0.45)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          Something went wrong
        </p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
          We couldn&apos;t load this page
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          Try again, or return home. If the problem persists, refresh the page.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-11 items-center justify-center rounded-full bg-neutral-950 px-6 text-sm font-medium text-white dark:bg-white dark:text-neutral-950"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white/50 px-6 text-sm font-medium text-neutral-900 backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-white"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

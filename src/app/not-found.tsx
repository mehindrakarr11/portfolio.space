import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative z-10 flex min-h-[100dvh] flex-1 flex-col items-center justify-center bg-[#f6f6f7] px-5 py-20 dark:bg-[#050507]">
      <div className="max-w-md rounded-2xl border border-black/10 bg-white/60 p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-black/50 dark:shadow-[0_12px_48px_rgba(0,0,0,0.45)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-neutral-950 px-8 text-sm font-medium text-white dark:bg-white dark:text-neutral-950"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

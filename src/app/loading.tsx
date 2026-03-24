export default function Loading() {
  return (
    <div className="relative z-10 flex min-h-[100dvh] flex-1 flex-col bg-[#f6f6f7] dark:bg-[#050507]">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="space-y-6 animate-pulse">
          <div className="h-3 w-24 rounded-full bg-black/10 dark:bg-white/10" />
          <div className="h-12 max-w-md rounded-2xl bg-black/10 dark:bg-white/10 sm:h-14" />
          <div className="max-w-xl space-y-3">
            <div className="h-4 rounded-lg bg-black/8 dark:bg-white/8" />
            <div className="h-4 rounded-lg bg-black/8 dark:bg-white/8" />
            <div className="h-4 w-[85%] max-w-md rounded-lg bg-black/8 dark:bg-white/8" />
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="h-11 w-32 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="h-11 w-28 rounded-full bg-black/8 dark:bg-white/8" />
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-neutral-500 dark:text-neutral-500">
          Loading…
        </p>
      </div>
    </div>
  );
}

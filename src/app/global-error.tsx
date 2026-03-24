"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-neutral-100 px-6 font-sans text-neutral-900 antialiased">
        <h1 className="text-lg font-semibold">Something went wrong</h1>
        <p className="mt-2 max-w-sm text-center text-sm text-neutral-600">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white"
        >
          Try again
        </button>
      </body>
    </html>
  );
}

"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--text-primary)]">
        <h2 className="text-3xl font-bold mb-4">⚠️ Server Error</h2>
        <p className="mb-6">Something went wrong: {error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded"
        >
          Try again
        </button>
      </body>
    </html>
  );
}

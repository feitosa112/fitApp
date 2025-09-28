"use client";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      <section className="flex items-center justify-center px-6 pt-28">
        <div className="max-w-md w-full bg-[var(--surface)] rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 text-center">
            Reset Your Password
          </h2>

          <p className="text-[var(--text-secondary)] mb-6 text-center">
            Enter your email below and we'll send you instructions to reset your password.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-[var(--text-secondary)] mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-[var(--divider)] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="you@example.com"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--primary)] text-white py-2 px-4 rounded-md hover:bg-[var(--primary)]/90 transition font-semibold"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-center text-sm text-[var(--text-secondary)] mt-6">
            Remember your password?{" "}
            <Link href="/auth/login" className="text-[var(--primary)] font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

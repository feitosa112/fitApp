"use client";

import Link from "next/link";
import Goals from "../components/Goals"
import TrainingPrefer from "../components/TrainingPrefer"

export default function RegisterForm() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      {/* Dodaj padding-top u visini headera (npr. 72px = pt-20) */}
      <section className="flex items-center justify-center px-6 pt-28">
        <div className="max-w-md w-full bg-[var(--surface)] rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 text-center">
            Create Your Account
          </h2>

          {/* Registration form */}
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

            <div>
              <label className="block text-[var(--text-secondary)] mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-[var(--divider)] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="••••••••"
                required
              />
            </div>
            <Goals/>
            <TrainingPrefer/>
            <button
  type="submit"
  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
>
  Register
</button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-[var(--divider)]"></div>
            <span className="px-3 text-[var(--text-secondary)] text-sm">or continue with</span>
            <div className="flex-grow border-t border-[var(--divider)]"></div>
          </div>

          {/* Social logins */}
          <div className="flex flex-col space-y-3">
            <button className="flex items-center justify-center gap-2 border border-[var(--divider)] rounded-lg py-2 hover:bg-gray-100 transition">
              <span>🔍</span> Sign up with Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-[var(--divider)] rounded-lg py-2 hover:bg-gray-100 transition">
              <span>🍎</span> Sign up with Apple
            </button>
            <button className="flex items-center justify-center gap-2 border border-[var(--divider)] rounded-lg py-2 hover:bg-gray-100 transition">
              <span>📘</span> Sign up with Facebook
            </button>
          </div>

          {/* Already have account */}
          <p className="text-center text-sm text-[var(--text-secondary)] mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[var(--primary)] font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-[var(--surface)] text-center">
      <div className="space-x-4">
          <button className="btn-light-vibrant-primary px-6 py-3 rounded">
            Join as Free User
          </button>
          <button className="btn-light-vibrant-secondary px-6 py-3 rounded">
            Upgrade to Premium
          </button>
        </div>
    </section>
  );
}

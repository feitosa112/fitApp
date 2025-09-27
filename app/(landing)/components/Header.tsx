"use client"
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 shadow-md surface-light-vibrant">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-light-vibrant-primary text-2xl font-bold">
          DVeb Motion™
        </div>

        {/* Navigacija */}
        <nav className="hidden md:flex space-x-6 text-light-vibrant-secondary">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features_public">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/auth/login" className="font-semibold text-light-vibrant-primary">
            Login
          </Link>
          <Link href="/auth/register" className="font-semibold text-light-vibrant-primary">
            Register
          </Link>
        </nav>

        {/* CTA dugme */}
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:opacity-90 transition">
  Start Training Now
</button>

        {/* Mobile menu icon (samo za buduću implementaciju) */}
        <div className="md:hidden">
          {/* ovde može hamburger meni */}
        </div>
      </div>
    </header>
  );
}

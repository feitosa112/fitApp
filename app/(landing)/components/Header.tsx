"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header fixed top-0 w-full z-50 bg-[var(--surface)] shadow-md">
      <div className="header-container max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="logo text-[var(--primary)] text-2xl font-bold">
          DVeb Motion™
        </div>

        {/* Desktop navigacija */}
        <nav className="nav-links hidden md:flex space-x-6 text-[var(--secondary)]">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features_public">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/auth/login" className="font-semibold text-[var(--primary)]">
            Login
          </Link>
          <Link href="/auth/register" className="font-semibold text-[var(--primary)]">
            Register
          </Link>
        </nav>

        {/* CTA dugme */}
        <button className="primary hidden md:inline-block px-6 py-3 bg-[var(--primary)] text-white rounded-md font-semibold hover:opacity-90 transition">
          Start Training Now
        </button>

        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--primary)] text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[var(--surface)] border-t border-[var(--divider)] px-6 py-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/features_public" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
            <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
            <Link href="/events" onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link href="/auth/login" className="font-semibold text-[var(--primary)]" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            <Link href="/auth/register" className="font-semibold text-[var(--primary)]" onClick={() => setIsMobileMenuOpen(false)}>Register</Link>
            <button className="w-full bg-[var(--primary)] text-white py-2 rounded-md font-semibold hover:opacity-90 transition">
              Start Training Now
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

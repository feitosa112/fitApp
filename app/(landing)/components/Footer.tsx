"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-[#2c2c2c] py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left – Legal Links */}
        <div className="flex gap-6 text-sm text-[#9ca3af]">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right – Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80"
          >
            📸
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:opacity-80"
          >
            ▶️
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:opacity-80"
          >
            🎵
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs text-[#9ca3af] mt-6">
        © {new Date().getFullYear()} DVeb Motion™ – All rights reserved.
      </div>
    </footer>
  );
}

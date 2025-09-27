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
          <Link href="#about">About</Link>
          <Link href="#features">Features</Link>
          <Link href="/public/pricing">Pricing</Link>
          <Link href="#events">Events</Link>
          <Link href="#contact">Contact</Link>
          <Link href="/auth/login" className="font-semibold text-light-vibrant-primary">
            Login/Register
          </Link>
        </nav>

        {/* CTA dugme */}
        <button className="btn-light-vibrant-primary ml-4 hidden md:inline-block">
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

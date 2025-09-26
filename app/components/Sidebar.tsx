// app/components/Sidebar.tsx
"use client";

import Link from "next/link";

const menu = [
  {
    label: "Landing",
    children: [
      { label: "Overview", href: "/overview" },
      { label: "Features", href: "/features" },
      { label: "CTA", href: "/cta" },
    ],
  },
  {
    label: "System",
    children: [
      { label: "Search", href: "/search" },
      { label: "403", href: "/403" },
      { label: "404", href: "/404" },
      { label: "500", href: "/500" },
    ],
  },
  {
    label: "Public",
    children: [
      { label: "About", href: "/about" },
      { label: "Features", href: "/features_public" },
      { label: "Pricing", href: "/pricing" },
      { label: "Events", href: "/events" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" },
    ],
  },
  {
    label: "Auth",
    children: [
      { label: "Login", href: "/auth/login" },
      { label: "Register", href: "/auth/register" },
    ],
  },
  // Možeš dodati ostale sekcije poput Account, Dashboard, Workouts, Nutrition...
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-4 overflow-y-auto border-r">
      {menu.map((section) => (
        <div key={section.label} className="mb-6">
          <h3 className="text-gray-700 font-semibold mb-2">{section.label}</h3>
          <ul>
            {section.children.map((item) => (
              <li key={item.href} className="mb-1">
                <Link
                  href={item.href}
                  className="block px-2 py-1 rounded hover:bg-gray-200 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

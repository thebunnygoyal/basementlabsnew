"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";
import { Menu } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 glass border-b border-white/[0.06]">
      <div className="container-content flex h-full items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          <span className="text-text-primary">Basement</span>
          <span className="text-accent"> Labs</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/for-builders#apply"
            className="hidden md:inline-flex items-center justify-center h-10 px-5 rounded-lg bg-gradient-to-r from-accent to-accent-dark text-white text-sm font-medium transition-all duration-150 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(43,79,154,0.4)]"
          >
            Start Building
          </Link>
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

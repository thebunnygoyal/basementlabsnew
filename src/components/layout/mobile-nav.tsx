"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { X } from "lucide-react";
import { useEffect } from "react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex flex-col">
      <div className="flex items-center justify-between h-16 px-4">
        <Link href="/" onClick={onClose} className="font-heading text-lg font-bold">
          <span className="text-text-primary">Basement</span>
          <span className="text-accent"> Labs</span>
        </Link>
        <button onClick={onClose} className="p-2 text-text-secondary hover:text-text-primary" aria-label="Close menu">
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center flex-1 gap-8" aria-label="Mobile navigation">
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-2xl font-heading font-bold text-text-primary hover:text-accent transition-colors"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/for-builders#apply"
          onClick={onClose}
          className="mt-4 inline-flex items-center justify-center h-12 px-8 rounded-lg bg-gradient-to-r from-accent to-accent-dark text-white font-medium"
        >
          Start Building
        </Link>
      </nav>
    </div>
  );
}

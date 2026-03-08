import Link from "next/link";
import { FOOTER_PAGES, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Github, Send, Twitter } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  twitter: <Twitter size={20} />,
  github: <Github size={20} />,
  send: <Send size={20} />,
  discord: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path d="M16 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path d="M9.09 16a6 6 0 0 0 5.83 0"/><path d="M20.83 7.54a19.8 19.8 0 0 0-4.9-1.52 14.66 14.66 0 0 0-.66 1.36 18.34 18.34 0 0 0-6.54 0A14.66 14.66 0 0 0 8.07 6a19.8 19.8 0 0 0-4.9 1.54A20.26 20.26 0 0 0 .11 18.6a19.9 19.9 0 0 0 6.07 3.07 14.66 14.66 0 0 0 1.27-2.06 12.93 12.93 0 0 1-2-.96l.48-.37a14.12 14.12 0 0 0 12.06 0l.48.37a12.93 12.93 0 0 1-2 .96 14.66 14.66 0 0 0 1.27 2.06 19.9 19.9 0 0 0 6.07-3.07A20.26 20.26 0 0 0 20.83 7.54Z"/></svg>,
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface/50">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-heading text-lg font-bold">
              <span className="text-text-primary">Basement</span>
              <span className="text-accent"> Labs</span>
            </Link>
            <p className="mt-3 text-sm text-text-secondary max-w-[240px]">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading text-sm font-medium text-text-primary mb-4">Pages</h4>
            <ul className="space-y-2">
              {FOOTER_PAGES.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-sm text-text-secondary hover:text-accent transition-colors">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-heading text-sm font-medium text-text-primary mb-4">Community</h4>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    {iconMap[social.icon]}
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-sm font-medium text-text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-text-secondary">Privacy Policy</span></li>
              <li><span className="text-sm text-text-secondary">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-xs text-text-secondary">
            \u00a9 2026 Basement Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

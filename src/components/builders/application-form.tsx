"use client";

import { Section } from "@/components/layout/section";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ApplicationForm() {
  return (
    <Section id="apply">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-h2-mobile md:text-h2 mb-4">How to Apply</h2>
        <p className="text-text-secondary mb-8">
          Ready to turn your hackathon MVP into a funded protocol? Applications are reviewed on a rolling basis. We\u2019ll get back to you within 5 business days.
        </p>

        <div className="glass rounded-xl p-8">
          <div className="font-mono text-sm text-accent mb-6">$ basement apply --start</div>
          <p className="text-text-secondary mb-8">
            Fill out our application form with your project details, demo link, and preferred chain. We\u2019ll review and schedule a call.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center gap-2 justify-center rounded-lg bg-gradient-to-r from-accent to-accent-dark px-8 text-white font-medium text-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(43,79,154,0.4)]"
          >
            Apply Now <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </Section>
  );
}

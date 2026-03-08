import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { ProjectTabs } from "@/components/projects/project-tabs";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects \u2014 Basement Labs Portfolio",
  description: "Browse active, graduated, and pipeline projects from the Basement Labs venture studio.",
};

export default function ProjectsPage() {
  return (
    <>
      <Section className="pt-32">
        <div className="text-center mb-12">
          <p className="font-mono text-sm text-accent tracking-widest uppercase mb-4">Portfolio</p>
          <h1 className="font-heading text-display-mobile md:text-display">Projects</h1>
          <p className="mt-4 text-text-secondary max-w-text mx-auto">
            Active spinouts, graduated protocols, and what\u2019s coming next.
          </p>
        </div>
        <ProjectTabs />
      </Section>

      <Section>
        <div className="text-center">
          <p className="text-text-secondary mb-4">Have a hackathon MVP ready to scale?</p>
          <Link
            href="/for-builders#apply"
            className="inline-flex h-12 items-center gap-2 justify-center rounded-lg bg-gradient-to-r from-accent to-accent-dark px-8 text-white font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(43,79,154,0.4)]"
          >
            Apply With Your Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}

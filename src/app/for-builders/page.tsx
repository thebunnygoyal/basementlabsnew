import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PerksGrid } from "@/components/builders/perks-grid";
import { BuilderEconomics } from "@/components/builders/builder-economics";
import { Roles } from "@/components/builders/roles";
import { ApplicationForm } from "@/components/builders/application-form";
import { BuilderFaq } from "@/components/builders/builder-faq";

export const metadata: Metadata = {
  title: "For Builders \u2014 Join Basement Labs | Keep Majority Ownership",
  description: "Apply to the Basement Labs builder program. Get a co-founder, legal framework, grant pipeline, and keep 30\u201350%+ ownership.",
};

export default function ForBuildersPage() {
  return (
    <>
      <Section className="pt-32">
        <div className="text-center mb-12">
          <p className="font-mono text-sm text-accent tracking-widest uppercase mb-4">$ ./join-basement-labs</p>
          <h1 className="font-heading text-display-mobile md:text-display">For Builders</h1>
          <p className="mt-4 text-text-secondary max-w-text mx-auto">
            Got a hackathon MVP? We give you the scaffolding to turn it into a funded protocol. You keep the majority.
          </p>
        </div>
      </Section>
      <PerksGrid />
      <div className="gradient-separator" />
      <BuilderEconomics />
      <div className="gradient-separator" />
      <Roles />
      <div className="gradient-separator" />
      <ApplicationForm />
      <div className="gradient-separator" />
      <BuilderFaq />
    </>
  );
}

import type { Metadata } from "next";
import { OurStory } from "@/components/about/our-story";
import { SprintSystem } from "@/components/about/sprint-system";
import { Economics } from "@/components/about/economics";
import { Team } from "@/components/about/team";
import { FailureProtocol } from "@/components/about/failure-protocol";
import { CoreValues } from "@/components/about/core-values";

export const metadata: Metadata = {
  title: "About Basement Labs \u2014 The \u22121 \u2192 0 Builder Infrastructure",
  description: "Learn how our 4-sprint system takes raw Web3 ideas from selection to grant-funded in 3 months.",
};

export default function AboutPage() {
  return (
    <>
      <OurStory />
      <div className="gradient-separator" />
      <SprintSystem />
      <div className="gradient-separator" />
      <Economics />
      <div className="gradient-separator" />
      <Team />
      <div className="gradient-separator" />
      <FailureProtocol />
      <div className="gradient-separator" />
      <CoreValues />
    </>
  );
}

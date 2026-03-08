import { Hero } from "@/components/home/hero";
import { WhatWeDo } from "@/components/home/what-we-do";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ByTheNumbers } from "@/components/home/by-the-numbers";
import { JoinNetwork } from "@/components/home/join-network";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="gradient-separator" />
      <WhatWeDo />
      <div className="gradient-separator" />
      <FeaturedProjects />
      <div className="gradient-separator" />
      <ByTheNumbers />
      <div className="gradient-separator" />
      <JoinNetwork />
    </>
  );
}

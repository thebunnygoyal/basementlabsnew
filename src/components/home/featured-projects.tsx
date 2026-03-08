"use client";

import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/shared/glass-card";
import { Badge } from "@/components/ui/badge";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function FeaturedProjects() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">
          Featured Projects
        </h2>
        <p className="mt-4 text-text-secondary max-w-text mx-auto">
          Active and graduated spinouts from the Basement Labs studio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FEATURED_PROJECTS.map((project, i) => (
          <motion.div
            key={project.name}
            initial= opacity: 0, y: 20 
            whileInView= opacity: 1, y: 0 
            viewport= once: true 
            transition= duration: 0.5, delay: i * 0.1 
          >
            <GlassCard className="h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <span className="font-mono text-xs text-accent font-bold">
                      {project.name.split(" ")[1]?.[0] || "P"}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-medium">
                      {project.name}
                    </h3>
                    <Badge variant="chain">{project.chain}</Badge>
                  </div>
                </div>
                <Badge variant={project.status}>{project.status}</Badge>
              </div>
              <p className="text-sm text-text-secondary flex-1">
                {project.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
        >
          View all projects <ArrowUpRight size={14} />
        </Link>
      </div>
    </Section>
  );
}

"use client";

import { ProjectCard } from "./project-card";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

interface Project {
  name: string;
  chain: string;
  description: string;
  status: string;
}

export function ProjectGrid({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, i) => (
        <motion.div key={project.name} initial={fadeUp.hidden} animate={fadeUp.visible} transition={stagger(i)}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}

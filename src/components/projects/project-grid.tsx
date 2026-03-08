"use client";

import { ProjectCard } from "./project-card";
import { motion } from "framer-motion";

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
        <motion.div
          key={project.name}
          initial= opacity: 0, y: 20 
          animate= opacity: 1, y: 0 
          transition= duration: 0.4, delay: i * 0.1 
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}

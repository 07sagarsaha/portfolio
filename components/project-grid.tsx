"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/projects-data";

interface ProjectGridProps {
  showAll?: boolean;
}

export function ProjectGrid({ showAll = false }: ProjectGridProps) {
  const displayProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {displayProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </motion.div>
  );
}
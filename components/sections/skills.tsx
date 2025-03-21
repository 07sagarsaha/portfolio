"use client";

import { motion } from "framer-motion";

const skills = {
  languages: ["JavaScript", "Python", "Java", "dart"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Three.js", "HTML", "CSS"],
  backend: ["Node.js", "Express"],
  databases: ["MongoDB", "MySQL"],
  tools: ["Git", "Firebase"],
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading mb-0">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="tech-card">
            <h3 className="font-semibold mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="tech-card">
            <h3 className="font-semibold mb-4">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="tech-card">
            <h3 className="font-semibold mb-4">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="tech-card">
            <h3 className="font-semibold mb-4">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="tech-card">
            <h3 className="font-semibold mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

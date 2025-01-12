"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Company Name",
    period: "June 2023 - Present",
    description: "Description of your internship experience and achievements",
  },
  // Add more experiences here
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading mb-0 ">Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <p className="text-muted-foreground">{experience.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {experience.period}
                  </p>
                  <p>{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

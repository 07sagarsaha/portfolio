"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [


  {
    title: "Associate IT",
    company: "IDPC Solutions",
    period: "July 2024 - January 2025",
    description: `
      Built and managed IT infrastructure and software solutions for clients, ensuring optimal performance.
      Led the deployment and maintenance of over 50 client projects, delivering each one on time and within budget.
      Conceptualized and drove web and multi-platform development, successfully completing 50+ projects across various platforms.
    `,
  },
  {
    title: "Full Stack Developer Intern",
    company: "Devtern",
    period: "May 2024 - July 2024",
    description: `
      Conceptualized and delivered full-stack web development projects, utilizing technologies like HTML, CSS, JavaScript, and React.
      Implemented scalable web applications, contributing to both design and deployment.
      Built responsive and user-friendly web interfaces, enhancing user experience across multiple platforms.
    `,
  },
  {
    title: "Flutter Developer Intern",
    company: "Ardent",
    period: "June 2023 - August 2023",
    description: `
      Developed multiple cross-platform applications using Flutter, enhancing usability and reach.
      Implemented critical features like user authentication and backend integration, ensuring robust and secure applications.
    `,
  },
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

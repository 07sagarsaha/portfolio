"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { ProjectType } from "@/lib/projects-data";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  project: ProjectType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % project.images.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [project.images.length]);

  return (
    <div className="project-card">
      <div className="relative">
        <div className="image-slider ">
          {project.images.map((image, index) => (

            <img
              key={index}
              src={image}
              alt={`${project.title} image ${index + 1}`}
              className={`w-full  object-cover transition-opacity duration-500 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {project.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer ${index === currentImageIndex ? "bg-white" : "bg-gray-400"
                }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" /> GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2" /> Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

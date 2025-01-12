
export interface ProjectType {
  title: string;
  description: string;
  images: string[]; // Changed from image: string to images: string[]
  tech: string[];
  github: string;
  demo: string;
}

export const projects: ProjectType[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91"
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    images: [
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91",
      "https://images.unsplash.com/photo-1557821552-17105176677c"
    ],
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  // Add more projects here
];
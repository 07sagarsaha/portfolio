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
    title: "PetConnect – Social Media Platform for Pet Owners",
    description: "Developed a social media platform that allows pet owners to connect, share posts, and interact with an AI-powered chat for pet-related information.",
    images: ["https://i.postimg.cc/FRgFNPk3/Screenshot-2025-02-23-124616.png","https://i.postimg.cc/GtXcsHQp/Screenshot-2025-02-23-124738.png"],
    tech: ["React", "Firebase", "Tailwind CSS", "OpenAI API"],
    github: "https://github.com/07sagarsaha/petConnect-React",
    demo: "https://pet-connect-ssr.netlify.app",
  },
  {
    title: "SpendSmartly – Advanced Expense Tracker with OCR & Analytics",
    description: "Developed a modern expense tracking application featuring OCR-based receipt scanning, real-time data updates, and interactive financial reports.",
    images: ["https://spendsmartly.netlify.app/"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Tesseract.js", "Cloudinary"],
    github: "https://github.com/07sagarsaha/SpendSmartly",
    demo: "https://spendsmartly.netlify.app/",
  },
  {
    title: "Gourmet Guru – AI-Powered Recipe Discovery Platform",
    description: "Built a feature-rich recipe discovery application allowing users to search, save, and manage recipes with advanced filters.",
    images: ["https://gourmet-guru-dev-sagar.netlify.app/"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Spoonacular API"],
    github: "https://github.com/07sagarsaha/Gourmet-Guru",
    demo: "https://gourmet-guru-dev-sagar.netlify.app/",
  },
  {
    title: "Solo Learning – Personalized Study Resource Manager",
    description: "Designed a centralized learning platform where users can create structured courses using YouTube videos, web articles, and custom notes.",
    images: ["https://sololearning.netlify.app/"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/07sagarsaha/SoloLearning",
    demo: "https://sololearning.netlify.app/",
  },
  {
    title: "Connect – Real-time Chat Application",
    description: "Developed a real-time chat application with instant messaging and user authentication.",
    images: ["https://connect-jyww.onrender.com"],
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/07sagarsaha/Connect",
    demo: "https://connect-jyww.onrender.com",
  },
];
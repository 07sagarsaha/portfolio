


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
    images: ["https://i.postimg.cc/htRnMX4h/petconnect0.png","https://i.postimg.cc/kgNmH7Ds/petconnect1.png","https://i.postimg.cc/VLC1jq83/petconnect2.png"],
    tech: ["React", "Firebase", "Tailwind CSS", "OpenAI API"],
    github: "https://github.com/07sagarsaha/petConnect-React",
    demo: "https://pet-connect-ssr.netlify.app",
  },
  {
    title: "SpendSmartly – Advanced Expense Tracker with OCR & Analytics",
    description: "Developed a modern expense tracking application featuring OCR-based receipt scanning, real-time data updates, and interactive financial reports.",
    images: ["https://i.postimg.cc/7ZBk4mMJ/Spend-Smartly0.png","https://i.postimg.cc/13RQbL6Z/Spend-Smartly1.png","https://i.postimg.cc/tgYH4W2S/Spend-Smartly2.png","https://i.postimg.cc/6Qgx2qP9/Spend-Smartly3.png"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Tesseract.js", "Cloudinary"],
    github: "https://github.com/07sagarsaha/SpendSmartly",
    demo: "https://spendsmartly.netlify.app/",
  },
  {
    title: "Gourmet Guru – AI-Powered Recipe Discovery Platform",
    description: "Built a feature-rich recipe discovery application allowing users to search, save, and manage recipes with advanced filters.",
    images: ["https://i.postimg.cc/kXpsdSRX/Gourmet-Guru0.png","https://i.postimg.cc/JzHq7hj3/Gourmet-Guru1.png","https://i.postimg.cc/vHBhjhBN/Gourmet-Guru2.png"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Spoonacular API"],
    github: "https://github.com/07sagarsaha/Gourmet-Guru",
    demo: "https://gourmet-guru-dev-sagar.netlify.app/",
  },
  {
    title: "Solo Learning – Personalized Study Resource Manager",
    description: "Designed a centralized learning platform where users can create structured courses using YouTube videos, web articles, and custom notes.",
    images: ["https://i.postimg.cc/wBdh6QqH/Solo-Learning0.png","https://i.postimg.cc/KYrt43jT/Solo-Learning1.png"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/07sagarsaha/SoloLearning",
    demo: "https://sololearning.netlify.app/",
  },
  {
    title: "Connect – Real-time Chat Application",
    description: "Developed a real-time chat application with instant messaging and user authentication.",
    images: ["https://i.postimg.cc/hjtQjCHF/Content0.png","https://i.postimg.cc/B67L1T0j/Content1.png","https://i.postimg.cc/Pq48dGVz/Content2.png"],
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/07sagarsaha/Connect",
    demo: "https://connect-jyww.onrender.com",
  },
];
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <div className="container mx-auto px-4 py-16 space-y-32">
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
    </>
  );
}

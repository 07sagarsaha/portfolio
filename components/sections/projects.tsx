import Link from "next/link";
import { Button } from "../ui/button";
import { ProjectGrid } from "../project-grid";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="section-heading mb-0">Featured Projects</h2>
        <Button asChild>
          <Link href="/projects">
            See All Projects
          </Link>
        </Button>
      </div>
      <ProjectGrid />
    </section>
  );
}
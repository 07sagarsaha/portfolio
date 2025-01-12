import { ProjectGrid } from "@/components/project-grid";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="section-heading mb-8">All Projects</h1>
      <ProjectGrid showAll />
    </main>
  );
}
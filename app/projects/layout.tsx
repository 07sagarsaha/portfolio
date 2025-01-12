import { ProjectsNavbar } from "@/components/projects-navbar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProjectsNavbar />
      {children}
    </>
  );
}
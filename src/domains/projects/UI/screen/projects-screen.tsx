import { ProjectsList } from "../components/projects-list/projects-list";

export function ProjectsScreen() {
  return (
    <section id="projects">
      <div className="section-headline">Projects</div>
      <div>
        <ProjectsList />
      </div>
    </section>
  );
}

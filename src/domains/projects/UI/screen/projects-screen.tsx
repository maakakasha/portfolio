import { Project } from "../components/project/project";

export function ProjectsScreen() {
  return (
    // lassName="section-body"
    <section id="projects" className="screen-content">
      <div className="section-headline">Projects</div>
      <div>
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}

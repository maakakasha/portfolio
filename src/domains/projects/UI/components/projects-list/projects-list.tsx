import { projects } from "../../../data/projects";
import { Project } from "../project/project";

export function ProjectsList() {
  return (
    <>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </>
  );
}

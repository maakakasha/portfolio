import { JobDescription } from "../../../../experiences/UI/components/subcomponents/description/job-description";
import { TechStack } from "../subcomponents/tech-stack/tech-stack";
import styles from "./project.module.css";

export interface ProjectProps {
  title: string;
  company?: string;
  description: string;
  redirectUrl: string;
  techStack: Array<string>;
  // Consumer imports the image as an ES module: import src from './image.png'
  imageSrc: string;
}

export function Project(props: ProjectProps) {
  return (
    <div className={styles.project}>
      <div className={styles.thumbnail_container}>
        <img src={props.imageSrc} alt={props.title} className={styles.thumbnail} />
      </div>

      <div className={styles.project_details_container}>
        <JobDescription
          position={props.title}
          company={props.company}
          details={props.description}
          href={props.redirectUrl}
        />
        <TechStack stack={props.techStack} />
      </div>
    </div>
  );
}

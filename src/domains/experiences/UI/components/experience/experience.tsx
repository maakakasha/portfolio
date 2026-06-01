import { JobDescription } from "../subcomponents/description/job-description";
import { Duration } from "../subcomponents/duration/duration";
import { TechStack } from "../subcomponents/tech-stack/tech-stack";
import styles from "./experience.module.css";

export interface ExperienceProps {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: Array<string>;
  link?: string;
}

export function Experience(props: ExperienceProps) {
  return (
    <div className={`${styles.experience}`}>
      <div id={`${styles.duration_container}`}>
        <Duration start={props.startDate} end={props.endDate} />
      </div>

      <div id={`${styles.experience_details_container}`}>
        <JobDescription
          position={props.position}
          company={props.company}
          details={props.description}
          href={props.link}
        />
        <TechStack stack={props.techStack} />
      </div>
    </div>
  );
}

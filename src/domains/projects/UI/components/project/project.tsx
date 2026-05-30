import { JobDescription } from "../subcomponents/description/job-description";
import { Duration } from "../subcomponents/duration/duration";
import { TechStack } from "../subcomponents/tech-stack/tech-stack";
import styles from "./project.module.css";

export interface ProjectProps {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: Array<string>;
  redirectUrl: string;
  imageUrl: string;
}

export function Project() {
  return (
    <div className={`${styles.project}`}>
      <div id={`${styles.duration_container}`}>
        <Duration start="2024" end="PRESENT" />
      </div>

      <div id={`${styles.project_details_container}`}>
        <JobDescription
          position="Principle Software Engineer"
          company="IKM Digital"
          details="Built, maintained, and shipped high-quality Flutter applications following clean architecture, SOLID principles, and test-driven development for a range of projects — including the Spoon app, where I led a major refactor from Firebase to Supabase and migrated user data using PSQL and Python. I also built custom Dart packages to automate boilerplate generation and integrated AI coding agents into my workflow. Outside of core development, I've used Python to filter datasets and normalize text for more user-friendly experiences. In addition, I developed Typescript Edge functions to hide sensitive processes from the fontend"
        />
        <TechStack
          stack={[
            "Tailwind CSS",
            "Supabase",
            "Mock",
            "CSS",
            "Jest",
            "Javascript",
          ]}
        />
      </div>
    </div>
  );
}

import { experiences } from "../../data/experiences";
import { Experience } from "../components/experience/experience";

export function ExperiencesScreen() {
  return (
    <section id="experience">
      <div className="section-headline">Experience</div>
      <div className="section-body">
        {experiences.map((exp, index) => (
          <Experience key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}

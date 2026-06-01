import "./job-description.css";

interface JobDescriptionProps {
  position: string;
  company: string;
  details: string;
}

export function JobDescription(props: JobDescriptionProps) {
  return (
    <div className="position_detail_container">
      <a className="headline" href="">
        <span className="position">
          {props.position}・{props.company}
        </span>
        <span className="arrow">↗</span>
      </a>

      <p>{props.details}</p>
    </div>
  );
}

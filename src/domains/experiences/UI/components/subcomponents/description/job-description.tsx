import "./job-description.css";

interface JobDescriptionProps {
  position: string;
  company?: string;
  details: string;
  href?: string;
}

export function JobDescription(props: JobDescriptionProps) {
  return (
    <div className="position_detail_container">
      <a className="headline" href={props.href ?? ""}>
        <span className="position">
          {props.position}{props.company ? `・${props.company}` : ""}
        </span>
        <span className="arrow">↗</span>
      </a>

      <p>{props.details}</p>
    </div>
  );
}

import "./job-description.css";

interface JobDescriptionProps {
  position: string;
  company?: string;
  details: string;
  href?: string;
}

export function JobDescription(props: JobDescriptionProps) {
  const label = `${props.position}${props.company ? `・${props.company}` : ""}`;

  return (
    <div className="position_detail_container">
      {props.href ? (
        <a className="headline" href={props.href} target="_blank" rel="noopener noreferrer">
          <span className="position">{label}</span>
          <span className="arrow">↗</span>
        </a>
      ) : (
        <span className="headline no-link">
          <span className="position">{label}</span>
        </span>
      )}

      <p>{props.details}</p>
    </div>
  );
}

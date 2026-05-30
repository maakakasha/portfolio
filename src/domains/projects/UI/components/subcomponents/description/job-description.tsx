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
        {props.position}・{props.company}
      </a>

      <p>{props.details}</p>
    </div>
  );
}

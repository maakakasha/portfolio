import "./duration.css";

interface DurationProps {
  start: string;
  end: string;
}

export function Duration(props: DurationProps) {
  return (
    <div className="duration">
      <p>
        {props.start} — {props.end}
      </p>
    </div>
  );
}

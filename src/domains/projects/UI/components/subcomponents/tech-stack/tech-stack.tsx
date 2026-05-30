import "./tech-stack.css"; // Consider renaming to "stack.css" if appropriate

interface StackStackProps {
  stack: Array<string>;
}

export function TechStack(props: StackStackProps) {
  return (
    <div className="stack-badge-container">
      {props.stack.map((item, index) => (
        <div key={index} className="stack-badge">
          {item}
        </div>
      ))}
    </div>
  );
}

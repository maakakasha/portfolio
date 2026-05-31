import "./theme-toggle.css";

export function ThemeToggle() {
  return (
    <>
      <input type="checkbox" id="theme-toggle" className="theme-toggle-input" />
      <label htmlFor="theme-toggle" className="theme-toggle" aria-label="Toggle theme" />
    </>
  );
}

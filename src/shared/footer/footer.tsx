import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="subsection">
        <p>© 2026 · Mahmoud Abdelkareem</p>
      </div>

      <div id="stack" className="subsection">
        <p>
          Inspired by{" "}
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <code>Vite</code>
          </a>{" "}
          design system and coded in{" "}
          <a href="https://zed.dev" target="_blank" rel="noopener noreferrer">
            <code>ZED</code>
          </a>{" "}
          by yours truly. Built with{" "}
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <code>Vite</code>
          </a>{" "}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <code>React</code>
          </a>{" "}
          and{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>vanilla CSS</code>
          </a>{" "}
          and deployed with{" "}
          <a href="https://render.com" target="_blank" rel="noopener noreferrer">
            <code>Render</code>
          </a>
          . All text is set in the{" "}
          <a
            href="https://rsms.me/inter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>Inter</code>
          </a>{" "}
          variable typeface.
        </p>
      </div>
    </div>
  );
}

import "./App.css";
import { Project } from "./domains/projects/UI/components/project/project";

function App() {
  return (
    <>
      {/*<section id="spacer"></section>*/}

      <section id="main-scaffold">
        <div className="fixed-hero">
          <h1>Mahmoud Abdelkareem</h1>
          <p id="job-title">Flutter Mobile Engineer</p>
          <p id="thesis">
            I architect and build reliable, AI-augmented Mobile Apps.
          </p>
        </div>

        <div className="scrollable-content">
          <Project />
          <Project />
          <Project />
        </div>
      </section>
    </>
  );
}

export default App;

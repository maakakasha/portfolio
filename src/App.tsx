import "./App.css";
import { Project } from "./domains/projects/UI/components/project/project";
import { SocialIcons } from "./domains/social-icons/social-icons";

function App() {
  return (
    <>
      {/*<section id="spacer"></section>*/}

      <section id="main-scaffold">
        <div className="fixed-hero">
          <div id="name-position-container">
            <h1 className="my-name">Mahmoud Abdelkareem</h1>
            <p id="job-title">Flutter Mobile Engineer</p>
            <p id="thesis">
              I architect and build reliable, AI-augmented Mobile Apps.
            </p>
          </div>

          <SocialIcons />
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

import "./App.css";
import { HeroScreen } from "./domains/hero/UI/screen/hero-screen";
import { AboutScreen } from "./domains/about/UI/screen/about-screen";
import { ExperiencesScreen } from "./domains/experiences/UI/screen/experiences-screen";
import { ProjectsScreen } from "./domains/projects/UI/screen/projects-screen";
import { Footer } from "./shared/footer/footer";

function App() {
  return (
    <>
      <section id="main-scaffold">
        <HeroScreen />

        <div className="scrollable-content">
          <AboutScreen />
          <ExperiencesScreen />
          <ProjectsScreen />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;

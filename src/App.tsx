import { useRef, useState, useEffect } from "react";
import "./App.css";
import { HeroScreen } from "./domains/hero/UI/screen/hero-screen";
import { StickyHeader } from "./domains/hero/UI/components/sticky-header/sticky-header";
import { AboutScreen } from "./domains/about/UI/screen/about-screen";
import { ExperiencesScreen } from "./domains/experiences/UI/screen/experiences-screen";
import { ProjectsScreen } from "./domains/projects/UI/screen/projects-screen";
import { Footer } from "./shared/footer/footer";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <StickyHeader visible={!heroVisible} />
      <section id="main-scaffold">
        <HeroScreen ref={heroRef} />

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

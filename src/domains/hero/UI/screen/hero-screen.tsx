import { Nav } from "../components/nav/nav";
import { SocialIcons } from "../components/social-icons/social-icons";
import { ThemeToggle } from "../components/theme-toggle/theme-toggle";

export function HeroScreen() {
  return (
    <div className="fixed-hero">
      <div id="name-position-container">
        <h1 className="my-name">Mahmoud Abdelkareem</h1>
        <p id="job-title">Flutter Mobile Engineer</p>
        <p id="thesis">
          I architect and build reliable, AI-augmented Mobile Apps.
        </p>
      </div>

      <Nav />

      <ThemeToggle />

      <br></br>

      <SocialIcons />
    </div>
  );
}

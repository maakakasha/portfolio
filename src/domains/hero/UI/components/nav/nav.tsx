import { useState, useEffect } from "react";
import "./nav.css";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
] as const;

export function Nav() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const ratios: Record<string, number> = Object.fromEntries(
      SECTIONS.map(({ id }) => [id, 0])
    );

    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          ratios[id] = entry.intersectionRatio;
          const mostVisible = Object.entries(ratios).reduce<[string, number]>(
            (best, [key, ratio]) => (ratio > best[1] ? [key, ratio] : best),
            ["", 0]
          );
          if (mostVisible[0]) setActive(mostVisible[0]);
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="nav">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          className={`nav-link${active === id ? " active" : ""}`}
          onClick={() => scrollToSection(id)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

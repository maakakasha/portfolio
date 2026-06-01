import "./sticky-header.css";
import { SocialIcons } from "../social-icons/social-icons";

interface Props {
  visible: boolean;
}

export function StickyHeader({ visible }: Props) {
  return (
    <header className={`sticky-header${visible ? " sticky-header--visible" : ""}`}>
      <span className="sticky-header__name">Mahmoud Abdelkareem</span>
      <div className="sticky-header__actions">
        <label htmlFor="theme-toggle" className="theme-toggle" aria-label="Toggle theme" />
        <SocialIcons />
      </div>
    </header>
  );
}

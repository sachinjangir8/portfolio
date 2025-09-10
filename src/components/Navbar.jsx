import { NavLink } from "react-router-dom";
import { useThemeStore } from "../store/theme";
import { HoverScale } from "./animations";

export default function Navbar() {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <header className="navbar">
      <nav className="nav-inner">
        <div className="brand">Sachin Jangir</div>
        <ul className="links">
          <li>
            <HoverScale>
              <NavLink to="/" end>
                Home
              </NavLink>
            </HoverScale>
          </li>
          <li>
            <HoverScale>
              <NavLink to="/resume">My Resume</NavLink>
            </HoverScale>
          </li>
          <li>
            <HoverScale>
              <NavLink to="/projects">Projects</NavLink>
            </HoverScale>
          </li>
          <li>
            <HoverScale>
              <NavLink to="/blog">Blog</NavLink>
            </HoverScale>
          </li>
          <li>
            <HoverScale>
              <NavLink to="/contact">Contact</NavLink>
            </HoverScale>
          </li>
        </ul>
        <HoverScale>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </HoverScale>
      </nav>
    </header>
  );
}

import { NavLink } from "react-router-dom";

export default function MobileNav() {
  return (
    <nav
      className="mobile-nav"
      role="navigation"
      aria-label="Mobile quick navigation"
    >
      <div className="mobile-nav-inner">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `mobile-link${isActive ? " active" : ""}`
          }
          aria-label="Home"
        >
          <span className="icon" aria-hidden>
            🏠
          </span>
          <span className="label">Home</span>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `mobile-link${isActive ? " active" : ""}`
          }
          aria-label="Projects"
        >
          <span className="icon" aria-hidden>
            💼
          </span>
          <span className="label">Projects</span>
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `mobile-link${isActive ? " active" : ""}`
          }
          aria-label="Blog"
        >
          <span className="icon" aria-hidden>
            📰
          </span>
          <span className="label">Blog</span>
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `mobile-link${isActive ? " active" : ""}`
          }
          aria-label="Resume"
        >
          <span className="icon" aria-hidden>
            📄
          </span>
          <span className="label">Resume</span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `mobile-link${isActive ? " active" : ""}`
          }
          aria-label="Contact"
        >
          <span className="icon" aria-hidden>
            ✉️
          </span>
          <span className="label">Contact</span>
        </NavLink>
      </div>
    </nav>
  );
}

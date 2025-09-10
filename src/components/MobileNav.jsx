import { NavLink } from "react-router-dom";

export default function MobileNav() {
  const navItems = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/projects", label: "Projects", icon: "💼" },
    { to: "/blog", label: "Blog", icon: "📰" },
    { to: "/resume", label: "Resume", icon: "📄" },
    { to: "/contact", label: "Contact", icon: "✉️" },
  ];

  return (
    <nav
      className="mobile-nav"
      role="navigation"
      aria-label="Mobile quick navigation"
    >
      <div className="mobile-nav-inner">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `mobile-link${isActive ? " active" : ""}`
            }
            aria-label={item.label}
          >
            <span className="icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="label">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

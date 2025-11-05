import { HoverScale } from "./animations";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sachin-jangir-1a8b94299/",
      icon: <IoLogoLinkedin />,
      color: "#0077b5",
    },
    {
      name: "GitHub",
      url: "https://github.com/sachinjangir8",
      icon: <FaGithub />,
      color: "#333",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sachin_jangir8/",
      icon: <FaInstagram />,
      color: "#e4405f",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((link) => (
            <HoverScale key={link.name} scale={1.2}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                style={{ "--link-color": link.color }}
                aria-label={link.name}
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-name">{link.name}</span>
              </a>
            </HoverScale>
          ))}
        </div>
        <p className="footer-text">
          © {year} • Built with React + Vite • Data Scientist Portfolio
        </p>
      </div>
    </footer>
  );
}

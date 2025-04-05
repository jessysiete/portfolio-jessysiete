import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Nav.css';

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [activeSection, setActiveSection] = useState(null); // 👈 track active section

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu-link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute("id");
          const navItem = document.querySelector(`.menu-link[href="#${id}"]`);

          if (entry.isIntersecting) {
            setActiveSection(id); // 👈 update active section

            // Remove old `.active`, add new one
            navLinks.forEach(link => link.classList.remove("active"));
            if (navItem) navItem.classList.add("active");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.3,
      }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // 👇 Define dynamic colors
  const markerColors = {
    "github-profile": "#a1281a",  // red
    "projects": "#4e6851",        // green
  };

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="nav-menu-item-github">
          <a href="#github-profile" className="menu-link">GitHub</a>
        </li>
        <li className="nav-menu-item-projects">
          <a href="#projects" className="menu-link">Projects</a>
        </li>
      </ul>

      {/* 👇 Apply color based on active section */}
      <div
        className="section-marker"
        style={{ backgroundColor: markerColors[activeSection] || "#ccc" }}
      ></div>
    </nav>
  );
}
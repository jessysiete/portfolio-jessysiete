import './Nav.css';
import Pdf from '../../assets/Documents/resume.pdf';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Nav() {
  const location = useLocation();

  useEffect(() => {
    // Store the current path in localStorage to persist active state
    localStorage.setItem("activeNav", location.pathname);
  }, [location]);

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item-projects">
          <Link 
            to="/projects" 
            className={`menu-link ${location.pathname === "/projects" ? "active" : ""}`}
          >
            Projects
          </Link>
        </li>
        <li className="menu-item-github">
          <Link 
            to="/github" 
            className={`menu-link ${location.pathname === "/github" ? "active" : ""}`}
          >
            GitHub
          </Link>
        </li>
        <li className="menu-item-resume">
          <Link 
            to="/resume" 
            className={`menu-link ${location.pathname === "/resume" ? "active" : ""}`}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
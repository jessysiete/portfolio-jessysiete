import './Nav.css';
import Pdf from '../../assets/Documents/resume.pdf';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item-projects">
          <Link 
            to="/projects" 
            className={`menu-link ${location.pathname.startsWith("/projects") ? "active" : ""}`}
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
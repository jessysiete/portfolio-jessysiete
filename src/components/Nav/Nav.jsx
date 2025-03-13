import './Nav.css';
import Pdf from '../../assets/Documents/resume.pdf';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
        <Link to="/projects">Projects</Link>
        </li>
        <li className="menu-item">
          <a href= {Pdf} target="blank" className="menu-link">Resume</a>
        </li>
        <li className="menu-item">
          <a href="https://github.com/siguejessy" target="blank" className="menu-link">Github</a>
        </li>
        <li className="menu-item">
          <a href="https://www.linkedin.com/in/siguejessy" target="blank" className="menu-link">LinkedIn</a>
        </li>
        <li className="menu-item">
          <a href="mailto:jessica@jessysiete.com?subject=Greetings" className="menu-link">Email</a>
        </li>
        </ul>
    </nav>
  );
}
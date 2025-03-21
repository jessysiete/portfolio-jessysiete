import './Nav.css';
import Pdf from '../../assets/Documents/resume.pdf';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Nav() {

  const handleLinkClick = (event) => {
    const links = document.querySelectorAll('.menu-link');
    links.forEach(link => link.classList.remove('active'));
    event.currentTarget.classList.add('active');
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      const links = document.querySelectorAll('.menu-link');
      links.forEach(link => link.classList.remove('active'));
    }
  }, [location]);


  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/projects" className="menu-link" onClick={handleLinkClick}>Projects</Link>
        </li>
        <li className="menu-item">
          <a href={Pdf} target="blank" className="menu-link" onClick={handleLinkClick}>Resume</a>
        </li>
        <li className="menu-item">
          <a href="https://github.com/siguejessy" target="blank" className="menu-link" onClick={handleLinkClick}>Github</a>
        </li>
        <li className="menu-item">
          <a href="https://www.linkedin.com/in/siguejessy" target="blank" className="menu-link" onClick={handleLinkClick}>LinkedIn</a>
        </li>
        <li className="menu-item">
          <a href="mailto:jessica@jessysiete.com?subject=Greetings" className="menu-link" onClick={handleLinkClick}>Email</a>
        </li>
      </ul>
    </nav>
  );
}
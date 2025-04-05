import "./HeroSection.css";
import { Link } from "react-router-dom";
import ProjectsPage from "../ProjectsPage/ProjectsPage";

export default function HeroPage() {
  return (
    <>
        <section id="hero">
      <div className="home-page">
        <div className="content-home">
          <div className="intro-home">
            <strong className="intro-home-heading">Hello, my name is Jessica</strong>
            Welcome to my online space where I feature my coding and offline
            projects. As a committed life-long learner, I'm passionate about
            filling my curiosities and interests with knowledge and deliberate
            practice. 
            </div>
          
          <div className="tech-stack" aria-label="list of skills that Jessica Mendez provides">
          <ul className="skills-list" > 
            <li className="skill-item-heading">Skills & Tech Stack</li>
            <li className="skill-item">HTML5</li>
            <li className="skill-item">CSS3</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">Python</li>
            <li className="skill-item">SQL</li>
            <li className="skill-item">React</li>
            <li className="skill-item">Vite</li>
            <li className="skill-item">NextJS</li>
            <li className="skill-item">NodeJS</li>
            <li className="skill-item">ExpressJS</li>
            <li className="skill-item">GraphQL</li>
            <li className="skill-item">TailwindCSS</li>
            <li className="skill-item">Bootstrap</li>
            <li className="skill-item">Git Control</li>
            <li className="skill-item">Heroku</li>
            <li className="skill-item">Docker</li>
            <li className="skill-item">MongoDB</li>
            <li className="skill-item">Figma</li>
            <li className="skill-item">Jira</li>
            <li className="skill-item">Confluence</li>
            <li className="skill-item">Asana</li>
            <li className="skill-item">Lattice</li>
            <li className="skill-item">Zendesk</li>
            <li className="skill-item">Salesforce</li>
            <li className="skill-item">Hubspot</li>
            <li className="skill-item">VS Code</li>
          </ul>
</div>
        </div>
        <div className="shapes">
          <div className="trapezoid"></div>
          <div className="triangle"></div>
          <div className="circle"></div>
          <div className="square"></div>
        </div>

      </div>
        </section>
    </>
  );
}

{/* a full stack web developer with a passion for creating
beautiful and functional web applications. I have experience with
HTML, CSS, JavaScript, React, Node, Express, and MongoDB. I am
always looking for new opportunities to learn and grow as a
developer. */}
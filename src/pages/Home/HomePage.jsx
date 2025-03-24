import "./HomePage.css";
import { Link } from "react-router-dom";
import ProjectsPage from "../ProjectsPage/ProjectsPage";

export default function HomePage() {
  return (
    <>
      <div className="home-page">
        <div className="page-marker-home"></div>
        <div className="page-marker-home-nav"></div>

        <h1 className="heading">
          Hello, I'm <span className="name">Jessica</span> 👋🏼
        </h1>
        <div className="content-home">
          <p className="intro-home">
            Welcome to my online space where I combine my digital and analog
            projects. As a committed life-long learner, I'm passionate about
            filling my curiosities and interests with knowledge and deliberate
            practice. 
            </p>
            

          <div className="tech-stack" aria-label="list of skills that Jessica Mendez provides">
          Skills & Tech
          <ul className="skill-list"> 
            <li className="skill-line">HTML5</li>
            <li className="skill-line">CSS3</li>
            <li className="skill-line">JavaScript</li>
            <li className="skill-line">Python</li>
            <li className="skill-line">SQL</li>
            <li className="skill-line">React</li>
            <li className="skill-line">Vite</li>
            <li className="skill-line">NextJS</li>
            <li className="skill-line">NodeJS</li>
            <li className="skill-line">GraphQL</li>
            <li className="skill-line">Docker</li>
            <li className="skill-line">MongoDB</li>
            <li className="skill-line">Git</li>
          </ul>
</div>




        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="shapes">
          <div className="trapezoid"></div>
          <div className="triangle"></div>
          <div className="circle"></div>
          <div className="square"></div>
        </div>
      </div>
    </>
  );
}

{/* a full stack web developer with a passion for creating
beautiful and functional web applications. I have experience with
HTML, CSS, JavaScript, React, Node, Express, and MongoDB. I am
always looking for new opportunities to learn and grow as a
developer. */}
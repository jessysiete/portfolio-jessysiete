import './HomePage.css';
import { Link } from 'react-router-dom';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

export default function HomePage() {
  return (
    <>
    <div className="home-page">
      <h1 className="intro">
        Home
      </h1>
      <p className="intro">
        Welcome to my portfolio. I am a full stack web developer with a passion for creating beautiful and functional web applications. I have experience with HTML, CSS, JavaScript, React, Node, Express, and MongoDB. I am always looking for new opportunities to learn and grow as a developer.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ProjectsPage />
      </div>
      </>
  );
}

import "./HomePage.css";
import { Link } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import GitHubSection from "../GitHubProfileSection/GitHubProfileSection";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import WidgetsPage from "../WidgetsPage/WidgetsPage";
export default function HomePage() {
  return (
    <>
        {/* <div className="page-marker-home"></div> */}
        {/* <div className="page-marker-home-nav"></div> */}
      <div className="portfolio-page">
        <HeroSection />
        <br />
        <br />
        <br />
        <br />
        <br />
        <GitHubSection />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ProjectsPage />
        <br />
        <br />
        <br />
        <br />
        <br />
        <WidgetsPage />
        <br />
        <br />
        <p className='bottom-text'>
        Built with joy 🩶&nbsp;⚙️ &nbsp;  © 2024 Jessysiete</p>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

{/* a full stack web developer with a passion for creating
beautiful and functional web applications. I have experience with
HTML, CSS, JavaScript, React, Node, Express, and MongoDB. I am
always looking for new opportunities to learn and grow as a
developer. */}
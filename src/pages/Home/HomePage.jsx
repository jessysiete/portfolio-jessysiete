import "./HomePage.css";
import { Link } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import GitHubSection from "../GitHubProfileSection/GitHubProfileSection";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
export default function HomePage() {
  return (
    <>
        {/* <div className="page-marker-home"></div> */}
        {/* <div className="page-marker-home-nav"></div> */}
      <div className="portfolio-page">
        <HeroSection />
        <GitHubSection />
        <ProjectsPage />
        <p className='text'>
        Built with joy 🩶&nbsp;⚙️ &nbsp;</p>
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
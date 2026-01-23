import "./WidgetsPage.css";
import { Link } from "react-router-dom";
import Project1Card from "../../components/ProjectCard/Project1/Project1";
import Project2Card from "../../components/ProjectCard/Project2/Project2";
import Project4Card from "../../components/ProjectCard/Project4/Project4";

export default function WidgetsPage() {
  return (
    <>
      <section id="widgets" className="widgets-page-section">
        <br />
        <br />
        <div className="widgets-page">
          {/* <div className="page-marker-projects"></div> */}
          {/* <h1 className="heading">Personal Projects</h1> */}
          <p className="widgets-about">
           Some things I've built for fun and learning.
            <br />
            👩🏼‍💻✨
          </p>
          <section className="widgets-grid">
            <div className="one">
              <Project1Card />
            </div>
            <div className="two">
              <Project2Card />
            </div>
            <div className="four">
              <Project4Card />
            </div>
            {/* <div className="three"><GraphicsCard /></div>
        <div className="five"><TextilesCard /></div>
        <div className="six"><GalleryCard /></div> */}
          </section>
        </div>
        <br />
        <br />            <br />
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
            <br />
            <br />

        <br />
      </section>
    </>
  );
}

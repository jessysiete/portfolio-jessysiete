import "./ProjectsPage.css";
import { Link } from "react-router-dom";
import PantoneCard from "../../components/ProjectCard/Pantone14k/PantoneCard";
import PinternCard from "../../components/ProjectCard/Pintern/PinternCard";
import GraphicsCard from "../../components/ProjectCard/Graphics/GraphicsCard";
import SimonCard from "../../components/ProjectCard/Simon/SimonCard";
import TextilesCard from "../../components/ProjectCard/Textiles/TextilesCard";
import GalleryCard from "../../components/ProjectCard/Gallery/GalleryCard";

export default function ProjectsPage() {
  return (
    <>
      <section id="projects">
        <br />
        <br />
        <div className="projects-page">
          {/* <div className="page-marker-projects"></div> */}
          {/* <h1 className="heading">Personal Projects</h1> */}
          <p className="projects-about">
            In my downtime, I’m usually in one of two modes: designing or
            building things with my hands (sometimes both at once). I thrive in
            that sweet spot between form and function, whether I’m prototyping
            with a laser cutter, writing code, or shaping wood into something
            useful and beautiful. My background in operations and industrial
            design informs every step of my process, from UX thinking to
            hands-on fabrication.
            <br />
            <br /> Alongside my work in product operations, I’ve explored laser
            cutting, woodworking, and graphic design, and even launched a small
            e-commerce business where I handled everything from product design
            to branding, photography, and packaging. In 2024, I stepped into web
            development and built this portfolio from the ground up—coding in
            VSCode and deploying directly from the command line.
            <br />
            <br /> For me, creativity lives at the intersection of the tactile
            and the technical. I love turning thoughtful ideas into real,
            tangible things—and I’m excited to bring that same energy into a
            design-driven, tech-forward role. 👩🏼‍💻✨
          </p>
          <section className="projects-grid">
            <div className="one">
              <PantoneCard />
            </div>
            <div className="two">
              <PinternCard />
            </div>
            <div className="four">
              <SimonCard />
            </div>
            {/* <div className="three"><GraphicsCard /></div>
        <div className="five"><TextilesCard /></div>
        <div className="six"><GalleryCard /></div> */}
          </section>
        </div>
        <br />
        <br />
        <br />
      </section>
    </>
  );
}

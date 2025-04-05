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
      <div className="projects-page">
        {/* <div className="page-marker-projects"></div> */}
          {/* <h1 className="heading">Personal Projects</h1> */}
          <section id="projects">
            As a natural tinkerer, I thrive on turning ideas into tangible
            creations. In my spare time, I combine my imagination with design
            tools, laser CNC machines, and power tools to bring home goods and
            apparel accessories to life. My featured projects span sculptural
            works, textile manipulation, graphic design, and even a small
            e-commerce business I built from the ground up. In 2024, I dove into
            coding and designed this portfolio website myself, using VSCode and
            publishing it directly from the command line. These hands-on
            projects reflect my passion for design and technology, which I’m
            eager to bring into a technical role at a design-focused
            organization. 👩🏼‍💻

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
        </section>
        </div>
    </>
  );
}

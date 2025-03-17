import './ProjectsPage.css';
import { Link } from 'react-router-dom';
import PantoneCard from '../../components/ProjectCard/Pantone14k/PantoneCard';
import PinternCard from '../../components/ProjectCard/Pintern/PinternCard';
import GraphicsCard from '../../components/ProjectCard/Graphics/GraphicsCard';
import LQSCard from '../../components/ProjectCard/LQS/LQSCard';
import TextilesCard from '../../components/ProjectCard/Textiles/TextilesCard';
import GalleryCard from '../../components/ProjectCard/Gallery/GalleryCard';

export default function ProjectsPage() {
  return (
    <>
    <div className="Projects-Page">
      <div className="projects-body">
      <p className="intro">
        A tinkerer by nature, my passion for turning ideas into tangible
items begins here. Combining imagination, online design tools, a
laser CNC, & power tools, I give life to home goods and apparel
accessories. Featured projects range from sculptural works, textile
manipulation, graphic design, and a small e-commerce business I spun
up during my downtime. I also learned how to code in 2024 so I built
this website and published it to the internet directly from my 
command line. 🤓👩🏼‍💻
      </p>

      <section className="projects-grid">
        <div className="one"><PantoneCard /></div>
        <div className="two"><PinternCard /></div>
        <div className="three"><GraphicsCard /></div>
        <div className="four"><LQSCard /></div>
        <div className="five"><TextilesCard /></div>
        <div className="six"><GalleryCard /></div>
        </section>
      </div>
      </div>
      </>
  );
}

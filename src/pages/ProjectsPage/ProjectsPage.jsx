import './ProjectsPage.css';
import { Link } from 'react-router-dom';
import PantoneCard from '../../components/ProjectCard/Pantone14k/PantoneCard';
import PinternCard from '../../components/ProjectCard/Pintern/PinternCard';
import GraphicsCard from '../../components/ProjectCard/Graphics/GraphicsCard';
import SimonCard from '../../components/ProjectCard/Simon/SimonCard';
import TextilesCard from '../../components/ProjectCard/Textiles/TextilesCard';
import GalleryCard from '../../components/ProjectCard/Gallery/GalleryCard';

export default function ProjectsPage() {
  return (
    <>
      <div className="projects-body">
        <div className="page-marker-projects"></div>
      <div className="content">
      <h1 className="heading">Personal Projects</h1>
      <p className="about">
        A tinkerer by nature, my passion for turning ideas into tangible
items begins here. Combining imagination, design tools, a
laser CNC, & power tools, I give life to home goods and apparel
accessories. Featured projects range from sculptural works, textile
manipulation, graphic design, and a small e-commerce business I spun
up during my downtime. I also learned how to code in 2024 so I built
this website with VSCode and published it to the internet directly from my 
command line. 🤓👩🏼‍💻
      </p>

      <section className="projects-grid">
        <div className="one"><PantoneCard /></div>
        <div className="two"><PinternCard /></div>
        <div className="four"><SimonCard /></div>
        <div className="three"><GraphicsCard /></div>
        <div className="five"><TextilesCard /></div>
        <div className="six"><GalleryCard /></div>
        </section>
        </div>
      </div>
      </>
  );
}

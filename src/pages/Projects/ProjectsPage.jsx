import './ProjectsPage.css';
import { Link } from 'react-router-dom';
import PantoneCard from '../../components/ProjectCard/Pantone14k/PantoneCard';
import PinternCard from '../../components/ProjectCard/Pintern/PinternCard';

export default function ProjectsPage() {
  return (
    <>
    <main className="Projects-Page">
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
      <section className="Projects-Grid">
        <PantoneCard />
        <PinternCard />
      
        </section>
      </main>
      </>
  );
}

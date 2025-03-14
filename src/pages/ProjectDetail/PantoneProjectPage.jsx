import './ProjectDetailPage.css';
import { Link } from 'react-router-dom';
import PantoneCard from '../../components/ProjectCard/Pantone14k/PantoneCard';
import PinternCard from '../../components/ProjectCard/Pintern/PinternCard';
import GraphicsCard from '../../components/ProjectCard/Graphics/GraphicsCard';
import LQSCard from '../../components/ProjectCard/LQS/LQSCard';
import TextilesCard from '../../components/ProjectCard/Textiles/TextilesCard';
import GalleryCard from '../../components/ProjectCard/Gallery/GalleryCard';

export default function ProjectDetailPage() {
  return (
    <>
    <main className="Projects-Page">
      <div className="project-title">
        Pantone 14k
      </div>
      <div className="main-image">
        </div>

      </main>
      </>
  );
}

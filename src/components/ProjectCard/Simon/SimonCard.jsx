import '../ProjectCard.css';
import { Link } from 'react-router-dom';
import SimonImage from '../../../../public/assets/images/project-images/simon/image-simon.png';

export default function SimonCard() {

  return ( 
    <div className="Project-Card">
      <div className="card-title">
        <Link to="/projects/virtual-simon">
        <h2 className="title">Virtual Simon</h2>
      </Link>
      </div>
      <div className="card-image">
      <Link to="/projects/virtual-simon">
      <img className="image-simon" src={SimonImage} alt="Digital version of the Simon Game, a circular console with colored buttons" />
      </Link>
      </div>
      </div>
  );
}
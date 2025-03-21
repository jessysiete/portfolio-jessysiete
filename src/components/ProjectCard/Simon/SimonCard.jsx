import '../ProjectCard.css';
import { Link } from 'react-router-dom';

export default function SimonCard() {

  return ( 
    <div className="Project-Card">
 <div className="card-title">
        <Link to="/projects/simon">
          <h2 className="title">Virtual Simon</h2>
        </Link>
      </div>
      <div className="card-image">
        <Link to="/projects/virtual-simon">
          <div className="image-pintern" aria-label="The Pintern logo" />
        </Link>
      </div>      
      </div>
  );
}
import './PantoneCard.css';
import { Link } from 'react-router-dom';
import pantonePendant from '../../../../public/assets/images/project-images/pantone-pendant/pantone-pendant.png';

export default function PantoneCard() {

  return ( 
    <main className="Project-Card">
      <div className="card-title">
        <Link to="/projects/pantone14k">
        <h2>Pantone 14k</h2>
      </Link>
      </div>
      <div className="card-image">
      <Link to="/projects/pantone14k">
      <img src={pantonePendant} alt="Pantone Swatch Necklace Pendant in 14k Gold" />
      </Link>
      </div>
      </main>
  );
}
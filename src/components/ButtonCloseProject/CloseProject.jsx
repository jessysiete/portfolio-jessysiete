import './CloseProject.css';
import { Link } from 'react-router-dom';

export default function CloseProject() {
  return (
   <button className="close-project">
      <Link className="close" to="/projects">X</Link>
      </button>
  );
}
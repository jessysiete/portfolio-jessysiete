import './CloseProject.css';
import { Link } from 'react-router-dom';

export default function CloseProject() {
  return (
    <Link className="close-project" to="/projects">
      <button className="close">X</button>
    </Link>
  );
}
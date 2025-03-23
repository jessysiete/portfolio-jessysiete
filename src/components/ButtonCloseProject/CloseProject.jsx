import './CloseProject.css';
import { useNavigate } from 'react-router-dom';

export default function CloseProject() {
  const navigate = useNavigate();

  const handleClose = () => {
    // Perform navigation to '/projects', which triggers a component re-render
    navigate('/projects');
  };

  return (
    <button className="close" onClick={handleClose}>X</button>
  );
}
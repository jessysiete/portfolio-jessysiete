import './Footer.css';
import { Link } from 'react-router-dom';
import Pdf from "../../assets/Documents/resume.pdf";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-content">
        {/* resume button */}
          <a href={Pdf} target="blank" rel="noopener noreferrer"
          className="resume-link">
        <button className="footer-button">View PDF Resume
        </button>
          </a>

{/* contact button */}
 <a href="mailto:jessica@jessysiete.com?subject=Greetings"><button className="footer-button">Contact</button></a>

      </div>

    </footer>
    
  );
}
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="Footer">
      {/* Logo SVG (using inline SVG for full CSS control) */}
      {/* <Link to="/">
</Link> */}
      <div className="footer-content">
        <p className='footer-text'>
          Built with joy 🩶&nbsp;⚙️ &nbsp;</p>
        <button className="contact"> <a href="mailto:jessica@jessysiete.com?subject=Greetings">Contact</a>
        </button>

      </div>

    </footer>
    
  );
}
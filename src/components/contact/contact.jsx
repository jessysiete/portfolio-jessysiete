import logoEmail from '../../assets/logo-email.svg';
import logoGH from '../../assets/logo-github.svg';
import './Contact.css';

export default function Contact() {
return (
  <div className="Container">
        <a href="https://github.com/siguejessy"target="_blank">
        <button>
        <img src={logoGH} className="Github-logo" alt="github" height="60"/>
        </button>
        </a>

        <a href="mailto:jessica@jessysiete.com?subject=Greetings!">
        <button>
          <img src={logoEmail} className="Email-logo" alt="email" height="50"/>
          </button>
          </a>
  </div>
);
}


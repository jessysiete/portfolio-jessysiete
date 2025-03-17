import "../ProjectCard.css";
import { Link } from "react-router-dom";
import pinternLogo from "../../../../public/assets/images/project-images/the-pintern/the-pintern-icon-logo-dark.svg";

export default function PinternCard() {
  return (
    <main className="Project-Card">
      <div className="card-title">
        <Link to="/projects/the-pintern">
          <h2 className="title">The Pintern</h2>
        </Link>
      </div>
      <div className="card-image">
        <Link to="/projects/the-pintern">
          <div className="image-pintern" aria-label="The Pintern logo" />
        </Link>
      </div>
    </main>
  );
}

{
  /* <img className="pintern" src={pinternLogo} alt="A round shape with a semi-circle protruding from its left side and a small oval on the inside right. A pictogram of an abstract rubber clasp for enamel pins." /> */
}

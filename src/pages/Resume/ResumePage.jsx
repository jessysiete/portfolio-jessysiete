import { Link } from "react-router-dom";
import Pdf from "../../assets/Documents/resume.pdf";

import "./ResumePage.css";

export default function ResumePage() {
  return (
    <>
        <div className="page-marker-resume"></div>
      <div className="resume-page">
          <a href={Pdf} target="blank" rel="noopener noreferrer">
        <button className="view-resume-button">
            View PDF Resume
        </button>
          </a>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

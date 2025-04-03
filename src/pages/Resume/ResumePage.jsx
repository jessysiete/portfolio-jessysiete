import { Link } from "react-router-dom";
import Pdf from "../../assets/Documents/resume.pdf";

import "./ResumePage.css";

export default function ResumePage() {
  return (
    <>
        <div className="page-marker-resume"></div>
      <div className="resume-page">
        <button className="view-resume-button">
          <a href={Pdf} target="blank" className="button-link">
            View PDF Resume
          </a>
        </button>

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

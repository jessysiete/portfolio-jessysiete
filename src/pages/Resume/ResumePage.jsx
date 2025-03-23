import { Link } from 'react-router-dom';
import Pdf from '../../assets/Documents/resume.pdf';


import './ResumePage.css';

export default function ResumePage() {
  return (
    <>
    <div className="resume-page">
    <div className="page-marker-resume"></div>
      <h1 className="intro">
        Work Experience
      </h1>
      <p className="intro">
        Welcome to my portfolio. I am a full stack web developer with a passion for creating beautiful and functional web applications. I have experience with HTML, CSS, JavaScript, React, Node, Express, and MongoDB. I am always looking for new opportunities to learn and grow as a developer.
      </p>

        <button className="view-resume">
          <a href={Pdf} target="blank" className="menu-link">View PDF Resume</a>
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

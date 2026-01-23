import '../ProjectCard.css';
import Project2Image from '../../../../public/assets/images/project-images/project-2/image-project2.png';

export default function Project2Card() {

  return ( 
    <div className="Project-Card">
      <div className="card-title">
        <h2 className="title">Widget 2</h2>
      </div>
      <div className="card-image">
      <img className="image-project2 " src={Project2Image} alt="Image of the project" />

      </div>
      </div>
  );
}
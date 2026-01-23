import '../ProjectCard.css';
import Project1Image from '../../../../public/assets/images/project-images/project-1/image-project1.png';

export default function Project1Card() {

  return ( 
    <div className="Project-Card">
      <div className="card-title">
        <h2 className="title">Widget 1</h2>
      </div>
      <div className="card-image">
      <img className="image-project1 " src={Project1Image} alt="Image of the project" />

      </div>
      </div>
  );
}
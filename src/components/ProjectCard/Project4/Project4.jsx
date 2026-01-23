import '../ProjectCard.css';
import Project4Image from '../../../../public/assets/images/project-images/project-4/image-project4.png';

export default function Project4Card() {

  return ( 
    <div className="Project-Card">
      <div className="card-title">
        <h2 className="title">Widget 3</h2>
      </div>
      <div className="card-image">
      <img className="image-project4 " src={Project4Image} alt="Image of the project" />

      </div>
      </div>
  );
}
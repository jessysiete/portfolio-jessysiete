import "./SimonProjectPage.css";
import { useState, useEffect } from "react";
import pantonePendant from '../../../../public/assets/images/project-images/pantone-pendant/pantone-pendant.png';
import CloseProject from "../../../components/ButtonCloseProject/CloseProject";
import { useLocation } from "react-router-dom"; // Import useLocation from React Router



export default function SimonProjectPage() {

  const images = [
    pantonePendant,
    "/images/pantone14k_3drender.jpg",
    "/images/pantone14k_3dprint.jpg",
    "/images/pantone14k_final.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);


  
  return (
    <>
      <div className="project-page">
        <CloseProject />
          <section className="execution-section">
            <div className="simon-component">
            {/* <SimonGame /> */}
            <iframe className="simon-game" src="https://siguejessy.github.io/virtual-simon/" title="Simon Game"></iframe>

            </div>
          </section>
        <section className="simon-hero-section">
    {/* <div className="hero-left">
      <h1 className="project-title">Virtual Simon <br/><span className="title-tagline">A Wearable Color Swatch</span></h1>
      <div className="main-image">
        <img src={[selectedImage]} alt="Main Project Visual" />
      </div>
    </div> 
    <div className="hero-text">
      <div className="project-subtitle">
        A dynamic jewelry piece that adapts to its wearer's style by framing textures and colors as a living Pantone swatch.
      </div>
      <section className="pantone-image-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Pantone 14K variant ${index + 1}`}
            className={`gallery-thumbnail ${selectedImage === image ? "selected" : ""}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </section>

      <ul className="summary-list">
        <li className="summary-heading"><strong>Quick Project Summary</strong></li>
        <li className="summary-item"><strong>Medium:</strong> Jewelry Design (14K Gold Pendant)</li>
        <li className="summary-item"><strong>Tools:</strong> Adobe Illustrator, Rhino 3D, Laser Cutter</li>
        <li className="summary-item"><strong>Techniques Used:</strong> Rapid Prototyping, CAD Modeling, 3D Printing, Metal Casting</li>
        <li className="summary-item"><strong>Collaboration:</strong> Designed by me, CAD + Jewelry Production by Twiz</li>
        <li className="summary-item"><strong>Key Themes:</strong> Interactive Design, Material Exploration, Human-Centered Aesthetics</li>
      </ul>

      </div> */}
          </section>



        {/* Project Overview Section */}
        <section className="overview-section">
          {/* <h2 className="overview-title">Project Overview</h2>
          <p className="overview-text">
            <strong>Pantone 14K</strong> is a conceptual jewelry piece that
            transforms the Pantone color system into a dynamic, wearable
            experience. Inspired by an enamel pin that framed fabric textures
            and colors as a Pantone swatch, I designed this pendant to function
            as a color-adaptive piece of jewelry. The open-frame design allows
            the wearer's clothing to become the "color" of the pendant, making
            each wear unique. This project merges my passion for design,
            material exploration, and prototyping with my technical
            mindset—leveraging rapid iteration, collaboration with expert
            artisans, and digital fabrication techniques to bring an abstract
            idea to life.
          </p> */}
        </section>
        <section className="concept-section">
          {/* <h2 className="concept-title">Concept & Idea</h2>
          <p className="overview-text">
           While conducting product research for my small business, The Pintern, I came across an enamel pin designed as a Pantone Swatch with a hollow center. The way it interacted with textured garments underneath fascinated me—what if this concept was applied to jewelry?
            The Pantone color library holds personal significance for me, as I use it extensively in my enamel pin designs to ensure color consistency in manufacturing. This pendant became an extension of my work in color theory, reimagined as a functional and interactive piece of jewelry.
          </p>
          <div className="concept-images">
            <img className="concept-image" src="/images/pantone14k_concept1.jpg" alt="Pantone 14K Concept 1" />
            <img className="concept-image" src="/images/pantone14k_concept2.jpg" alt="Pantone 14K Concept"/> 
            </div> */}
        </section>
        <section className="prototyping-section">
          {/* <h2 className="prototyping-title">Hands-on Prototyping & Iteration</h2>
          <p className="prototyping-text">
          I started with rough prototyping—cutting out cardboard mockups and using string to test pendant dimensions and visual weight. This hands-on approach allowed me to refine the proportions before committing to final materials. The process mirrored the way I test physical product ideas before refining them for mass production.
          </p>
          <div className="prototyping-images">
            <img className="prototype-image" src="/images/pantone14k_prototype1.jpg" alt="Pantone 14K prototype 1" />
            <img className="prototype-image" src="/images/pantone14k_prototype2.jpg" alt="Pantone 14K Concept"/> 
            </div>
          <ul className="notes-list">
            <li className="note-line">
            I experimented with different cutout shapes before deciding on the final frame proportions.
            </li>
            <li className="note-line">
            Testing the pendant in different lighting conditions helped determine how it would interact with various textures and fabrics.
            </li>
          </ul> */}
        </section>


        <section className="collaboration-section">
          {/* <h2 className="collaboration-title">Digital Rendering & 3D Modeling Collaboration with Twiz </h2>
          <p className="collaboration-text">
          Working with a friend and master jeweler, Twiz, hee translated my sketches into a 3D CAD model, ensuring precision in dimensions and structural integrity. This step introduced me to the intersection of jewelry craftsmanship and digital modeling, bridging traditional artistry with modern fabrication.
          </p>
          <div className="collaboration-images">
            <img className="collaboration-image" src="/images/pantone14k_prototype1.jpg" alt="Pantone 14K prototype 1" />
            <img className="collaboration-image" src="/images/pantone14k_prototype2.jpg" alt="Pantone 14K Concept"/> 
            </div>
          <ul className="collaborations-list">
            <li className="collaboration-line">
            Twiz and I discussed multiple iterations of the digital model to optimize weight and balance.
            </li>
            <li className="collaboration-line">
            I gained had a bit of insight into the jewelry manufacturing process, particularly how CAD files and 3D printers are used for wax mold printing, because I'd worked for 3D Systems in the past. During my time at 3D systems, I learned about their commercial 3D printers and how they were used in the dentistry and jewelry industry. Cool stuff!
            </li>
            <li className="collaboration-line">
            I experimented with different chain lengths to enhance the pendant's visual effect when worn.
            </li>
          </ul> */}
        </section>
        <section className="final-notes-section">
          <h2 className="final-notes-title">Final Notes & Reflection</h2>
          <p className="final-notes-text">
          Pantone 14K is more than a piece of jewelry—it’s an experiment in interactive design, material exploration, and structured problem-solving. This project exemplifies my ability to blend creative ideation with technical execution, skills that are transferable to product strategy, design thinking, and operations within the tech industry. I'm proud of the way this pendant turned out, and I look forward to exploring more projects that merge my love for color, design, and human-centered aesthetics.
            </p>
          <ul className="final-notes-list">
          <li className="final-notes-heading">
                <strong>Key Takeaways & Technical Relevance</strong>
              </li>
            <li className="final-notes-line">
            Human-Centered Design: The pendant’s adaptability to its wearer mirrors user-driven product customization, a concept relevant in tech and product strategy.
            </li>
            <li className="final-notes-line">
            Rapid Prototyping & Iteration: Using low-fidelity mockups (cardboard), digital modeling (CAD), and physical 3D printing reflects the iterative approach used in software development and product operations.
            </li>

            <li className="final-notes-line">
            Collaboration Across Disciplines: Partnering with a jeweler required bridging artistic vision with technical feasibility, much like cross-functional collaboration in tech.
            </li>

            <li className="final-notes-line">
            Material & Process Optimization: Consideration of manufacturing constraints, material efficiency, and user experience aligns with the decision-making frameworks used in product management and operational strategy.
            </li>
          </ul>
          </section>
      </div>
    </>
  );
}





/*alt-description*/
//  Inspired by a Pantone Swatch pin, the Pantone 14k pendant 
// is an interactive jewelry piece that frames textures and colors 
// of the wearer's clothing, turning fashion into a living Pantone reference.
// This project involved rapid prototyping, CAD modeling, and traditional jewelry
//  casting techniques in collaboration with a master jeweler.

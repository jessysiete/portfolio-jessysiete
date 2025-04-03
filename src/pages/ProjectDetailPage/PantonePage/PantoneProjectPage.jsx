import "./PantoneProjectPage.css";
import { useState } from "react";
import CloseProject from "../../../components/ButtonCloseProject/CloseProject";
import pantonePendant from "../../../../public/assets/images/project-images/pantone-pendant/pantone-pendant.png";
import pantoneSky from "../../../../public/assets/images/project-images/pantone-pendant/pantone-sky.png";
import pantoneWorn from "../../../../public/assets/images/project-images/pantone-pendant/pantone-worn.png";
import pantoneRender from "../../../../public/assets/images/project-images/pantone-pendant/pantone-render.png";
import pantoneInspo1 from "../../../../public/assets/images/project-images/pantone-pendant/pantone-inspo-1.png";
import pantoneInspo2 from "../../../../public/assets/images/project-images/pantone-pendant/pantone-inspo-2.png";
import pantoneMockup from "../../../../public/assets/images/project-images/pantone-pendant/pantone-mockup.png";
import pantonePrototype1 from "../../../../public/assets/images/project-images/pantone-pendant/pantone-prototype-1.png";
import pantonePrototype2 from "../../../../public/assets/images/project-images/pantone-pendant/pantone-prototype-2.png";
import pantonePrototype3 from "../../../../public/assets/images/project-images/pantone-pendant/pantone-prototype-3.png";
import pantone3dPrint from "../../../../public/assets/images/project-images/pantone-pendant/pantone-3d-print.png";
import pantone3dPrint2 from "../../../../public/assets/images/project-images/pantone-pendant/pantone-3d-print2.png";
import pantoneMold from "../../../../public/assets/images/project-images/pantone-pendant/pantone-mold.png";
import pantoneRawGold from "../../../../public/assets/images/project-images/pantone-pendant/pantone-raw-gold.png";
import pantoneFinalJess from "../../../../public/assets/images/project-images/pantone-pendant/pantone-final-jess.png";

export default function PantoneProjectPage() {
  const images = [
    pantonePendant,
    pantoneSky,
    pantoneWorn,
    pantoneRender,
    // "/images/pantone14k_final.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
        <div className="page-marker-pantone"></div>
        <div className="page-title-pantone">
          <h1 className="pantone-project-title">Pantone 14k Pendant</h1>
        </div>
        <CloseProject />
      <div className="pantone-project-page">
        <section className="pantone-hero-section">
          <div className="pantone-hero-image">
            <div className="pantone-main-image">
              <img src={[selectedImage]} alt="Main Project Visual" />
              </div>
            <div className="pantone-img-gallery">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Pantone 14K variant ${index + 1}`}
                  className={`pantone-thumbnail ${
                    selectedImage === image ? "selected" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
              </div>
          </div>
          
            <div className="pantone-hero-text">
            <h2 className="pantone-title-tagline">Wearable Color Swatch</h2>
            <div className="pantone-project-subtitle">
              A dynamic jewelry piece that adapts to its wearer's style by
              framing textures and colors as a living Pantone swatch.
            </div>
              <div className="pantone-summary">
                <ul className="pantone-summary-list">
                  <li className="pantone-summary-heading">
                    <strong>Quick Project Summary</strong>
                  </li>
                  <li className="pantone-summary-item">
                    <span><strong>Medium:</strong> Jewelry Design (14K Gold Pendant)</span>
                  </li>
                  <li className="pantone-summary-item">
                  <span><strong>Tools:</strong> Adobe Illustrator, Rhino 3D, Laser
                    Cutter</span>
                  </li>
                  <li className="pantone-summary-item">
                  <span><strong>Techniques Used:</strong> Rapid Prototyping, CAD
                    Modeling, 3D Printing, Metal Casting</span>
                  </li>
                  <li className="pantone-summary-item">
                  <span><strong>Collaboration:</strong> Designed by me, CAD +
                    Jewelry Production by<a className="twiz-website" href="https://twizandco.com/" target="_blank"rel="noopener noreferrer">Twiz</a></span>

                  </li>
                  <li className="pantone-summary-item">
                  <span><strong>Key Themes:</strong> Interactive Design, Material
                    Exploration, Human-Centered Aesthetics</span>
                  </li>
                </ul>
              </div>
          </div>
        </section>

        {/* Project Overview Section */}

          <section className="pantone-overview-section">
            <h2 className="overview-title">Project Overview</h2>
            <p className="overview-text">
              <strong>Pantone 14K</strong> is a conceptual jewelry piece that
              transforms the Pantone color system into a dynamic, wearable
              experience. Inspired by an enamel pin that framed fabric textures
              and colors as a Pantone swatch, I designed this pendant to
              function as a color-adaptive piece of jewelry. The open-frame
              design allows the wearer's clothing to become the "color" of the
              pendant, making each wear unique. This project merges my passion
              for design, material exploration, and prototyping with my
              technical mindset—leveraging rapid iteration, collaboration with
              expert artisans, and digital fabrication techniques to bring an
              abstract idea to life.
            </p>
          </section>
          <section className="pantone-concept-section">
            <h2 className="concept-title">Concept & Idea</h2>
            <p className="pantone-concept-text">
              While conducting product research for my small business, The
              Pintern, I came across an enamel pin designed as a Pantone Swatch
              with a hollow center. The way it interacted with textured garments
              underneath fascinated me—what if this concept was applied to
              jewelry? The Pantone color library holds personal significance for
              me, as I use it extensively in my enamel pin designs to ensure
              color consistency in manufacturing. This pendant became an
              extension of my work in color theory, reimagined as a functional
              and interactive piece of jewelry.
            </p>
            <div className="pantone-concept-image-section">
              <img
                className="pantone-concept-image"
                src={pantoneInspo1}
                alt="Pantone 14K Concept"
              />
              <img
                className="pantone-concept-image"
                src={pantoneInspo2}
                alt="Pantone 14K Concept 1"
              />
            </div>
          </section>
          <section className="pantone-prototyping-section">
            <h2 className="pantone-prototyping-title">Prototyping & Iteration</h2>
            <p className="concept-text">
            I started with a quick mockup in Adobe Photoshop followed by rough prototyping by cutting out cardboard mockups and
              using string to test pendant dimensions and visual weight. This
              hands-on approach allowed me to refine the proportions before
              committing to the final version. The process mirrored the way I test
              physical product ideas before refining them for mass production and quick iterations when designing digital & backend solutions. I
              experimented with different cutout shapes before deciding on the
              final frame proportions. I also explored various chain lengths to
              enhance the pendant's visual effect when worn. The goal was to
              create a piece that was comfortable, allowing for everyday wear.
            </p>
            <div className="prototyping-image-section">
              <img
                className="pantone-prototype-image"
                src={pantoneMockup}
                alt="Pantone 14K Concept"
              />
              <img
                className="pantone-prototype-image"
                src={pantonePrototype1}
                alt="Pantone 14K Concept 1"
              />
              <img
                className="pantone-prototype-image"
                src={pantonePrototype2}
                alt="Pantone 14K Concept"
              />
              <img
                className="pantone-prototype-image"
                src={pantonePrototype3}
                alt="Pantone 14K Concept 1"
              />
            </div>
          </section>

          <section className="pantone-collaboration-section">
            <h2 className="collaboration-title">
              Digital Rendering & 3D Modeling{" "}
            </h2>
            <p className="collaboration-text">
              Working with a friend and master jeweler, Twiz, he translated my
              sketches into a 3D CAD model, ensuring precision in dimensions and
              structural integrity. This step introduced me to the intersection
              of jewelry craftsmanship and digital modeling, bridging
              traditional artistry with modern fabrication.
              <br />
              <br />
              Twiz and I discussed multiple iterations of the digital model to
              optimize weight and balance. I gained had a bit of insight into
              the jewelry manufacturing process, particularly how CAD files and
              3D printers are used for wax mold printing, because I'd worked for
              3D Systems in the past. During my time at 3D systems, I learned
              about their commercial 3D printers and how they were used in the
              dentistry and jewelry industry. Cool stuff! I experimented with
              different chain lengths to enhance the pendant's visual effect
              when worn.
            </p>
            <div className="pantone-collab-image-section">
              <img
                className="pantone-collab-image"
                src={pantoneRender}
                alt="Pantone 14K prototype 1"
              />
              <img
                className="pantone-collab-image"
                src={pantone3dPrint}
                alt="Pantone 14K prototype 1"
              />
              <img
                className="pantone-collab-image"
                src={pantone3dPrint2}
                alt="Pantone 14K prototype 1"
              />
              <img
                className="pantone-collab-image"
                src={pantoneMold}
                alt="Pantone 14K prototype 1"
              />
            </div>

          </section>
          <section className="execution-section">
            <h2 className="execution-title">Execution & Wearable Experience</h2>
            <p className="execution-text">
              The final piece was cast in 14K gold and polished to a high shine,
              maintaining a sleek yet playful minimalist look. The open-frame
              design allows the wearer's clothing to show through, turning the
              pendant into a living Pantone swatch. It's designed to be
              versatile and elevate everyday looks while engaging the wearer
              (me!) in an interactive experience with color and texture. The
              pendant's dimensions were carefully calculated to ensure it was
              lightweight and comfortable to wear, while the gold material added
              a touch of luxury to the concept.
            </p>
          </section>


          <section className="pantone-notes-section">
            <h2 className="pantone-notes-title">Final Notes & Reflection</h2>
            <p className="pantone-notes-text">
            Pantone 14K is a fusion of interactive design, material
              exploration, and problem-solving. This project highlights my
              ability to combine creative ideation with technical execution,
              skills that seamlessly translate to product strategy, design
              thinking, and operations in the tech industry. I'm pleased with
              how this pendant turned out and look forward to future projects
              that merge my passion for color, design, and human-centered
              aesthetics.
            </p>
          </section>


            <div className="pantone-final-image-section">
            <img
                className="pantone-prototype-image"
                src={pantoneRawGold}
                alt="Pantone 14K Concept"
              />
              <img
                className="pantone-prototype-image"
                src={pantoneFinalJess}
                alt="Pantone 14K Concept 1"
              />
              <img
                className="pantone-prototype-image"
                src={pantoneWorn}
                alt="Pantone 14K Concept 1"
              />
     
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
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

//inspo original blog post: https://theawesomer.com/pantone-pin/523569/

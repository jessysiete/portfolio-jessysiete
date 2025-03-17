import "./PantoneProjectPage.css";
import { useState } from 'react';


export default function PantoneProjectPage() {
  const images = [
    "/images/pantone14k_mockup.jpg",
    "/images/pantone14k_3drender.jpg",
    "/images/pantone14k_3dprint.jpg",
    "/images/pantone14k_final.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <div className="Projects-Page">
        <section className="hero-section">
        <div className="main-image">
            <img src={selectedImage} alt="Main Project Visual" />
          </div>
          <div className="hero-text">
            <h1 className="project-title">
              Pantone 14k: A Wearable Color Swatch
            </h1>
            <h2 classname="project-subtitle">
              A dynamic jewelry piece that adapts to its wearer's style by
              framing textures and colors as a living Pantone swatch.
            </h2>
            <ul className="summary-list">
              <li className="summary-heading">
                <strong>Quick Project Summary</strong>
              </li>
              <li className="summary-item">
                <strong>Medium:</strong> Jewelry Design (14K Gold Pendant)
              </li>
              <li className="summary-item">
                <strong>Tools:</strong> Adobe Illustrator, Rhino 3D, Laser
                Cutter
              </li>
              <li className="summary-item">
                <strong>Techniques Used:</strong>Rapid Prototyping, CAD
                Modeling, 3D Printing, Metal Casting
              </li>
              <li className="summary-item">
                <strong>Collaboration:</strong> Designed by me, CAD + Jewelry
                Production by Twiz
              </li>
              <li className="summary-item">
                <strong>Key Themes:</strong> Interactive Design, Material
                Exploration, Human-Centered Aesthetics
              </li>
            </ul>
        {/* Image Gallery Section */}
        <section className="image-gallery">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Pantone 14K variant ${index + 1}`}
              className={`gallery-thumbnail ${
                selectedImage === image ? "selected" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </section>
          </div>
        </section>
      </div>
    </>
  );
}

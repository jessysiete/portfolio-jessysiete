import "./PinternProjectPage.css";

import { useState } from "react";

export default function ThePinternProjectPage() {
  const images = [
    "/images/pintern_mockup.jpg",
    "/images/pintern_sketches.jpg",
    "/images/pintern_prototypes.jpg",
    "/images/pintern_final.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <div className="page-marker-pintern"></div>
      <div className="pintern-projects-page">
        <section className="hero-section">
          <div className="main-image">
            <img src={selectedImage} alt="Main Project Visual" />
          </div>
          <div className="hero-text">
            <h1 className="project-title">
              The Pintern: Experimentation in Enamel Pin Design
            </h1>
            <h2 className="project-subtitle">
              A passion for design meets operational precision. The Pintern is
              my journey through product design, manufacturing, and
              branding—blending creativity with logistics to bring small,
              wearable art to life
            </h2>
            <ul className="summary-list">
              <li className="summary-heading">
                <strong>Quick Project Summary</strong>
              </li>
              <li className="summary-item">
                <strong>Role:</strong> Founder, Designer, E-commerce Manager
              </li>
              <li className="summary-item">
                <strong>Medium:</strong> Enamel Pin Design & Manufacturing
              </li>
              <li className="summary-item">
                <strong>Tools:</strong> Adobe Photoshop, Adobe Illustrator,
                Procreate, Shopify, Etsy
              </li>
              <li className="summary-item">
                <strong>Skills Highlighted:</strong> Graphic Design, Product
                Manufacturing, Product Marketing, Branding, Operations,
                E-Commerce, SEO, User Behavior Analysis
              </li>
              <li className="summary-item">
                <strong>Techniques Used:</strong> Material Research,
                Prototyping, Supplier Negotiation, Digital Marketing
              </li>
              <li className="summary-item">
                <strong>Collaboration:</strong> Designed by me, manufactured in
                partnership with vetted suppliers
              </li>
              <li className="summary-item">
                <strong>Key Themes:</strong> Iterative Design, Branding, Product
                Lifecycle Management
              </li>
            </ul>

            <section className="image-gallery">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Pintern variant ${index + 1}`}
                  className={`gallery-thumbnail ${
                    selectedImage === image ? "selected" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </section>
          </div>
        </section>

        <section className="opening-section">
          <h2 className="opening-title">The Pintern</h2>
          <p className="opening-text">
            <strong>The Pintern</strong> was born from my love for design,
            branding, and small-scale manufacturing. What started as wooden
            laser-cut pins evolved into a fully developed enamel pin brand.
            Through this venture, I managed product and packaging design,
            product lifecyle, sourcing, branding, marketing, and retail
            logistics—all skills I apply in tech & operations-focused roles.
          </p>

          <ul className="scope-list">
            <li className="scope-heading">
              <strong>Project Scope</strong>
            </li>
            <li className="scope-item">Designed and sold custom enamel pins</li>
            <li className="scope-item">
              Built and managed a small-scale production pipeline
            </li>
            <li className="scope-item">
              Developed branding, marketing, and packaging for the business{" "}
            </li>
            <li className="scope-item">
              Launched e-commerce storefronts & sold at in-person events{" "}
            </li>
          </ul>
        </section>

        {/* <section className="overview-section">
          <h2 className="overview-title">Project Overview</h2>
          <p className="overview-text">
          </p>
        </section> */}

        <section className="concept-section">
          <h2 className="concept-title">Concept & Idea</h2>
          <p className="concept-text">
            My journey into enamel pins started in college, where I designed
            flyers and branding materials for student organizations. Over time,
            this evolved into creating wearable designs for organizations to
            showcase their identity. The Pintern started as an experimental
            venture—how could I turn **small-scale product ideas** into
            high-quality, manufacturable designs? Inspired by my love for
            branding and material experimentation, I began testing different
            production techniques, refining my skills in **vector illustration,
            color theory, and enamel application** to bring each concept to
            life. Inspired by my work in graphic design and experience working
            with manufacturers in the shoe industry, I saw an opportunity to
            merge both worlds—resulting in The Pintern.
          </p>
        </section>

        <section className="prototyping-section">
          <h2 className="prototyping-title">
            Scaling, Prototyping & Iteration
          </h2>
          <p className="prototyping-text">
            I initially created wood-cut pins with my CNC laser but needed a
            scalable solution. Transitioning to enamel pins allowed me to
            manufacture at volume while focusing on design and branding. Before
            finalizing any pin design, I conducted multiple **rounds of
            prototyping**—testing colors, finishes, and materials to ensure the
            highest quality outcome. This process mirrored the iterative
            development cycles used in **product design and software
            engineering**, emphasizing feedback loops and continuous refinement.
          </p>
          📸 Photos & Visuals:
* Left: Early wooden pins & CNC setup
* Right: Initial enamel pin sketches
        </section>

        <section className="design-process-section">
          <h2 className="design-process-title">Enamel Pin Design Process</h2>
          <p className="design-process-text">
          Step 1: Concept & IdeationEach pin started with a purpose—either as a brand collaboration, sorority keepsake, or standalone art piece.
Step 2: Digital IllustrationUsing Adobe Illustrator, I refined sketches into vector artwork, ensuring proper line weights and color separations for manufacturing.
Step 3: Prototyping & FeedbackBefore production, I worked with manufacturers to to tweak colors and finishes, ensuring the final product matched the vision.
          </p>
          📸 Photos & Interactive Elements:
* Swipe-through slider of initial sketches vs. final pins
* GIF of color variations & iterations
        </section>


        <section className="execution-section">
          <h2 className="execution-title">Execution & Market Release</h2>
          <p className="execution-text">
            Once the prototypes met quality standards, I launched the designs on
            **Etsy and Shopify**, where I optimized product listings using **SEO
            strategies and user behavior analysis**. This experience provided
            valuable insights into **consumer psychology, market positioning,
            and branding**—all crucial skills in product operations and
            management roles.
          </p>
        </section>


        <section className="final-notes-section">
          <h2 className="final-notes-title">Final Notes & Reflection</h2>
          <p className="final-notes-text">
            The Pintern was more than a creative project—it was a hands-on case
            study in **product development, operational strategy, and user
            engagement**. Managing everything from **supply chain logistics to
            e-commerce optimization** allowed me to refine my skills in
            technical problem-solving, a crucial asset for roles in **product
            operations, technical solutions, and implementation management**.
          </p>
        </section>
      </div>
    </>
  );
}

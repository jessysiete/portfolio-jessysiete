import "./PinternProjectPage.css";
import { useState } from "react";
import CloseProject from "../../../components/ButtonCloseProject/CloseProject";
import pinternPins from "../../../../public/assets/images/project-images/the-pintern/pintern-pins.png";
import pinternGotEm from "../../../../public/assets/images/project-images/the-pintern/pintern-got-em.png";
import pinternLPiU from "../../../../public/assets/images/project-images/the-pintern/pintern-lpiu.png";
import pinternTabling from "../../../../public/assets/images/project-images/the-pintern/pintern-tabling.png";
import pinternGreekWood from "../../../../public/assets/images/project-images/the-pintern/pintern-greek-wood-pins.png";
import pinternGreekEnamel from "../../../../public/assets/images/project-images/the-pintern/pintern-greek-pins.png";
import pinternVector from "../../../../public/assets/images/project-images/the-pintern/pintern-vector-design.png";
import pinternVector2 from "../../../../public/assets/images/project-images/the-pintern/pintern-vector-design-2.png";
import pinternPinLit from "../../../../public/assets/images/project-images/the-pintern/pintern-pin-lit.png";


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
import pantoneFinalJess2 from "../../../../public/assets/images/project-images/pantone-pendant/pantone-final-jess2.png";

export default function PinternProjectPage() {
  const images = [
    pinternPins,
    pinternGotEm,
    pinternLPiU,
    pinternTabling,
    // "/images/pantone14k_final.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <div className="page-marker-pintern"></div>
      <div className="page-title-pintern">
        <h1 className="pintern-project-title">The Pintern</h1>
      </div>
      <CloseProject />
      <div className="pintern-project-page">
        <section className="pintern-hero-section">
          <div className="pintern-hero-image">
            <div className="pintern-main-image">
              <img src={[selectedImage]} alt="Main Project Visual" />
            </div>
            <div className="pintern-image-gallery">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Pintern variant ${index + 1}`}
                  className={`pintern-thumbnail ${
                    selectedImage === image ? "selected" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          <div className="pintern-hero-text">
            <h2 className="pintern-title-tagline">
              From One to Many: Scaling a Small-Format Product
            </h2>
            <div className="pintern-project-subtitle">
              A passion for design meets operational precision. The Pintern is
              my journey through product design, manufacturing, and
              branding—blending creativity with logistics to bring small,
              wearable art to life.
            </div>
            <div className="pintern-summary">
              <ul className="pintern-summary-list">
                <li className="pintern-summary-heading">
                  <strong>Quick Project Summary</strong>
                </li>
                <li className="pintern-summary-item">
                  <span>
                    {" "}
                    <strong>Role:</strong> Founder, Designer, E-commerce Manager
                  </span>
                </li>
                <li className="pintern-summary-item">
                  <span>
                    <strong>Medium:</strong> Enamel Pin Design & Manufacturing
                  </span>
                </li>
                <li className="pintern-summary-item">
                  <span>
                    <strong>Tools:</strong> Adobe Photoshop, Adobe Illustrator,
                    Procreate, Shopify, Etsy
                  </span>
                </li>
                <li className="pintern-summary-item">
                  <span>
                    <strong>Skills Highlighted:</strong> Graphic Design, Product
                    Manufacturing, Product Marketing, Branding, Operations,
                    E-Commerce, SEO, User Behavior Analysis
                  </span>
                </li>
                <li className="pintern-summary-item">
                  <span>
                    <strong>Techniques Used:</strong> Material Research,
                    Prototyping, Supplier Negotiation, Digital Marketing
                  </span>
                </li>
                <li className="pintern-summary-item">
                  <span>
                    <strong>Collaboration:</strong> Designed by me, manufactured
                    in partnership with vetted suppliers
                  </span>
                </li>
                <li className="pintern-summary-item">
                  <span>
                    <strong>Key Themes:</strong> Iterative Design, Branding,
                    Product Lifecycle Management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Project Overview Section */}

        <section className="pintern-overview-section">
          <h2 className="overview-title">Project Overview</h2>
          <p className="pintern-overview-text">
            The Pintern is a small-scale product design project that showcases
            my ability to blend creativity with operational precision. Through
            e-commerce platforms like Etsy and Shopify, I launched a series of
            enamel pins, each designed to be wearable art pieces. The project
            involved everything from initial concept development to
            manufacturing and marketing. I managed the entire product lifecycle,
            including sourcing vendor partnerships, negotiating with suppliers,
            and optimizing product listings for search engines. This experience
            not only honed my design skills, but also deepened my understanding
            of product marketing and consumer behavior. From idea to execution,
            blending creativity with operational strategy. This project
            highlights my ability to manage the entire product lifecycle—from
            ideation and prototyping to production and marketing—while
            maintaining a focus on quality and user experience.
          </p>
        </section>
        <section className="pintern-concept-section">
          <h2 className="pintern-concept-title">The beginning</h2>
          <p className="pintern-concept-text">
            The Pintern was born from my passion for design, branding, and
            small-scale manufacturing. What started as wooden laser-cut pins
            evolved into a fully developed enamel pin brand. I'd gained valuable
            insights into product development and manufacturing processes while
            working in the footwear industry and during a brief stint at a
            luxury bespoke eyewear company. This experience fueled my desire to
            create a line of enamel pins that would resonate with consumers. I
            wanted to design pieces that were not only visually appealing but
            also playful, and sometimes meaningful. The Pintern is a culmination
            of my interests in design, branding, and product development.
            <br />
            <br />
            My journey into enamel pins started in college, where I designed
            flyers and branding materials for student organizations. Over time,
            this evolved into creating wooden pins and necklace pendants for
            organizations to showcase their identity. The Pintern started as an
            experimental venture— how could I turn my small-scale handmade
            products into high-quality, manufacturable designs? I began
            researching pin making and e-commerce platforms, and I quickly
            realized the potential for a scalable product line.
          </p>
          <div className="pintern-concept-image-section">
            <img
              className="pintern-concept-image"
              src={pinternGreekWood}
              alt="Pintern 14K Concept"
            />
            <img
              className="pintern-concept-image"
              src={pinternGreekEnamel}
              alt="Pintern 14K Concept 1"
            />
          </div>
        </section>
        <section className="pintern-prototyping-section">
          <h2 className="pintern-prototyping-title">Prototyping & Iteration</h2>
          <p className="pintern-prototyping-text">
            I initially created wood-cut pins with my CNC laser but needed a
            scalable solution. Transitioning to enamel pins allowed me to
            manufacture at volume while focusing on design and branding. Before
            finalizing any pin design, I'd conduct mockup variants on Photoshop
            and test with color combinations, finishes, sizing to ensure the
            highest quality outcome. This process mirrors the iterative
            development cycles used in product and feature design as well as web development,
             emphasizing feedback loops and continuous refinement.
          </p>
          <div className="pintern-prototyping-image-section">
            <img
              className="pintern-prototype-image"
              src={pinternVector}
              alt="Pintern 14K Concept"
            />
            <img
              className="pintern-prototype-image"
              src={pinternVector2}
              alt="Pintern 14K Concept 1"
            />
            <img
              className="pintern-prototype-image"
              src={pinternPinLit}
              alt="Pintern 14K Concept"
            />
  
          </div>
        </section>

        <section className="pintern-design-section">
          <h2 className="pintern-design-title">
            Collaborating with Manufacturers
          </h2>
          <p className="pintern-design-text">
            I used this guide by Pin Lord, a popular pin maker and pin blogger, to find
            my first manufacturer. I reached out to multiple suppliers,
            comparing their offerings, prices, and turn around times. I also sought feedback from
            friends and family to refine my designs. The
            process of selecting a manufacturer was crucial, as it directly
            impacted the quality and cost of the final product. I focused on
            finding a supplier that had positive reviews in community forums. I also prioritized
            manufacturers that offered a range of finishes and materials, allowing
            me to experiment with different design elements. 
            This experience
            drilled the importance of supplier relationships and how they can
            impact the overall success of a product. I learned to negotiate
            effectively, communicate my vision clearly, and build strong
            partnerships with manufacturers. 
            <br />
            <br />
            The design process involved several key steps:
            Step 1: Concept & Ideation- Each pin started with a purpose, either as
            a sorority keepsake, pop culture reference, or an originally designed piece.

            Step 2: Digital Illustration- Using Adobe Illustrator, I refined
            sketches into vector artwork, ensuring proper line weights and color
            separations for manufacturing. 
            
            Step 3: Prototyping & Feedback- Before
            production, I worked with manufacturers to to tweak colors and
            finishes, ensuring the final product matched the vision.

            Step 4: Production- Once the designs were finalized, I placed
            orders with manufacturers. I learned to manage production timelines,
            quality control, and logistics. This involved coordinating with
            suppliers, tracking shipments, and ensuring that the final products
            met my quality standards.

            Step 5: Packaging & Branding- I designed custom packaging that
            reflected the brand identity of The Pintern. This included
            designing the pin cards, packaging materials, and branding elements
            that would be used in the final product. I also created a brand
            identity for The Pintern, including a logo and color palette that
            reflected the playful and creative nature of the brand. This
            involved designing a logo, selecting colors, and creating a brand
            style guide that would be used across all marketing materials.
            I also created a website and social media presence for The Pintern,
            which included designing graphics and promotional materials that
            would be used to promote the brand. This involved creating a
            cohesive visual identity that would be used across all platforms,
            including the website, social media, and packaging materials. 

          </p>
          <div className="pintern-design-image-section">
            <img
              className="pintern-design-image"
              src={pantoneRender}
              alt="Pintern 14K prototype 1"
            />
            <img
              className="pintern-design-image"
              src={pantone3dPrint}
              alt="Pintern 14K prototype 1"
            />
            <img
              className="pintern-design-image"
              src={pantone3dPrint2}
              alt="Pintern 14K prototype 1"
            />
            <img
              className="pintern-design-image"
              src={pantoneMold}
              alt="Pintern 14K prototype 1"
            />
          </div>
        </section>

        <section className="pintern-production-section">
          <h2 className="pintern-production-title">
            Production & Manufacturing
          </h2>
          <p className="pintern-production-text">
            Once the prototypes met quality standards, I launched the designs on
            **Etsy and Shopify**, where I optimized product listings using **SEO
            strategies and user behavior analysis**. This experience provided
            valuable insights into **consumer psychology, market positioning,
            and branding**—all crucial skills in product operations and
            management roles.


             Quality Control- I received samples from the
            manufacturers and conducted quality checks. This involved
            inspecting the pins for defects, ensuring that the colors matched
            the approved designs, and checking the overall finish.       
                 
            Marketing & Sales- I launched the pins on Etsy and
            Shopify, using SEO strategies and user behavior analysis to optimize
            product listings. This experience provided valuable insights into
            consumer psychology, market positioning, and branding—skills that are
            crucial in product operations and management roles.

          </p>
          <div className="pintern-production-image-section">
            <img
              className="pintern-production-image"
              src={pantoneRender}
              alt="Pintern 14K prototype 1"
            />
            <img
              className="pintern-production-image"
              src={pantone3dPrint}
              alt="Pintern 14K prototype 1"
            />
            <img
              className="pintern-production-image"
              src={pantone3dPrint2}
              alt="Pintern 14K prototype 1"
            />
            <img
              className="pintern-production-image"
              src={pantoneMold}
              alt="Pintern 14K prototype 1"
            />
          </div>
        </section>

        {/* <section className="pintern-execution-section">
            <h2 className="pintern-execution-title">Execution & Wearable Experience</h2>
            <p className="pintern-execution-text">
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
          </section> */}

        <section className="pintern-notes-section">
          <h2 className="pintern-notes-title">Final Notes & Reflection</h2>
          <p className="pintern-notes-text">
            The Pintern was more than a creative project—it was a hands-on case
            study in **product development, operational strategy, and user
            engagement**. Managing everything from **supply chain logistics to
            e-commerce optimization** allowed me to refine my skills in
            technical problem-solving, a crucial asset for roles in **product
            operations, technical solutions, and implementation management**.
          </p>
        </section>

        <div className="pintern-final-image-section">
          <img
            className="pintern-prototype-image"
            // src={pinternRawGold}
            alt="pintern 14K Concept"
          />
          <img
            className="pintern-prototype-image"
            // src={pinternFinalJess}
            alt="pintern 14K Concept 1"
          />
          <img
            className="pintern-prototype-image"
            // src={pinternWorn}
            alt="pintern 14K Concept 1"
          />
          <img
            className="pintern-prototype-image"
            // src={pinternFinalJess2}
            alt="pintern 14K Concept 1"
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

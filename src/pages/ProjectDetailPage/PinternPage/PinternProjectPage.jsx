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
import pinternBook from "../../../../public/assets/images/project-images/the-pintern/pintern-book-pin-game.png";
import pinternBook2 from "../../../../public/assets/images/project-images/the-pintern/pintern-book-pin-game-back.png";
import pinternLogoVideo from "../../../../public/assets/images/project-images/the-pintern/pintern-logo-design.mp4";
import pinternBuzzfeed from "../../../../public/assets/images/project-images/the-pintern/pintern-feature-buzzfeed.png";
import pinternOrderPackages from "../../../../public/assets/images/project-images/the-pintern/pintern-order-packages.png";
import pinternEtsyAnalytics from "../../../../public/assets/images/project-images/the-pintern/pintern-etsy-analytics-2001.png";
import pinternLaserCut from "../../../../public/assets/images/project-images/the-pintern/pintern-laser-cut.mp4";

import pantoneMold from "../../../../public/assets/images/project-images/pantone-pendant/pantone-mold.png";
import pantoneRawGold from "../../../../public/assets/images/project-images/pantone-pendant/pantone-raw-gold.png";
import pantoneFinalJess from "../../../../public/assets/images/project-images/pantone-pendant/pantone-final-jess.png";

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
            My journey into enamel pins started in college, where I designed
            flyers and branding materials for student organizations. Over time,
            this evolved into creating wooden pins and necklace pendants for
            organizations to showcase their identity. The Pintern started as an
            experimental venture when I began wondering how I could turn my
            small-scale handmade products into high-quality, manufacturable
            designs. I started researching pin making and e-commerce platforms,
            and I quickly realized the potential for a scalable product line.
            <br />
            <br />
            My experiences in the footwear industry and a brief stint at a
            luxury bespoke eyewear company gave me valuable insights into
            product development, brand management, and manufacturing. These
            roles deepened my confidence in design and my understanding of a
            product’s lifecycle. Inspired by this knowledge—and my growing
            collection of enamel pins from work events, Disney World and
            Comic-Con—I created The Pintern. I wanted to explore enamel pins as
            a form of self-expression and build a brand that was both fun and
            meaningful. The Pintern is the culmination of my love for small, but
            mighty messaging, combined with my passion for design, branding, and
            product development.
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
            finalizing any pin design, I conducted mockup variants in Photoshop
            and tested different color combinations, finishes, and sizes to
            ensure the highest quality outcome. This process reflects the
            iterative development cycles used in product and feature design as
            well as web development, emphasizing feedback loops and continuous
            refinement.
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
            I used{" "}
            <a
              href="https://www.pinlordshop.com/blogs/the-ultimate-guide-to-making-and-selling-enamel-pins"
              target="_blank"
            >
              this detailed guide
            </a>{" "}
            and a{" "}
            <a
              href="https://www.pinlordshop.com/blogs/the-ultimate-guide-to-making-and-selling-enamel-pins"
              target="_blank"
            >
              book
            </a>{" "}
            by Eduardo Morales, a well-known pin maker and blogger, to learn
            about designing, selling, and manufacturing enamel pins. I
            researched multiple suppliers, comparing their offerings, prices,
            and turnaround times. Seeking feedback from friends and family
            helped refine my designs. Choosing the right manufacturer was
            crucial since it directly affected both quality and cost. I
            prioritized suppliers with positive community reviews and those
            offering a variety of finishes and materials, allowing me to
            experiment with different design elements. This experience
            reinforced the importance of strong supplier relationships and how
            they influence a product’s success. I learned to negotiate
            effectively, communicate my vision clearly, and build lasting
            partnerships with manufacturers.
            <br />
            <br />
            <ul className="pintern-design-list">
              <li className="pintern-design-heading">
                <strong>The design process involved several key steps:</strong>
              </li>
              <li className="pintern-design-item">
                <span>
                  {" "}
                  <strong> Concept & Ideation - </strong>Each pin started with a
                  purpose, either as a sorority keepsake, pop culture reference,
                  or an originally designed piece.
                </span>
              </li>
              <li className="pintern-design-item">
                <span>
                  <strong>Digital Illustration -</strong> Using Adobe
                  Illustrator, I refined sketches into vector artwork, ensuring
                  proper line weights and color separations for manufacturing.
                </span>
              </li>
              <li className="pintern-design-item">
                <span>
                  <strong>Prototyping & Feedback - </strong> Before production,
                  I worked with manufacturers to to tweak colors and finishes,
                  ensuring the final product matched the vision.
                </span>
              </li>
              <li className="pintern-design-item">
                <span>
                  <strong>Packaging & Branding -</strong> I designed custom
                  packaging and branding for The Pintern to create a cohesive
                  and playful identity. This included pin cards, packaging
                  materials, and key brand elements. I developed the logo, color
                  palette, and style guide to ensure consistency across all
                  marketing materials. To establish a strong visual presence, I
                  also designed the website, social media graphics, and
                  promotional materials, reinforcing the brand’s identity across
                  platforms.
                </span>
              </li>
            </ul>
          </p>
          <div className="pintern-design-image-section">
            <img
              className="pintern-design-image"
              src={pinternBook}
              alt="Pin Game Strong book cover"
            />
            <img
              className="pintern-design-image"
              src={pinternBook2}
              alt="Pin Game Strong back book cover"
            />
            <video className="pintern-design-image" controls>
              <source
                src={pinternLogoVideo}
                type="video/mp4"
                alt="Designing The Pintern icon logo"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="pintern-production-section">
          <h2 className="pintern-production-title">
            Marketing & Sales: Launching the Pins
          </h2>
          <p className="pintern-production-text">
            After receiving each batch of pins from the manufacturer, I
            conducted thorough quality checks to ensure they met my standards.
            This involved inspecting metal and enamel finishes, verifying color
            accuracy, and identifying defects. I typically accounted for 5-12%
            of the order being defective and unsellable. If defects exceeded
            this threshold, I contacted the manufacturer to negotiate
            replacements or discounts on future orders.
            <br />
            <br />
            Once inspected and repackaged in custom branding, I launched the
            pins on Etsy and Shopify. To maximize discoverability, I optimized
            product listings with SEO strategies, ensuring they reached the
            right audience. This process deepened my understanding of consumer
            psychology, market positioning, and branding.
            <br />
            <br />
            Marketing efforts extended to social media, where I created engaging
            content, designed promotional graphics, and wrote compelling product
            descriptions. I actively engaged with customers online and expanded
            visibility by participating in local markets and community events.
            Setting up booths allowed me to connect with customers directly,
            gather real-time feedback, and strengthen brand awareness. These
            experiences reinforced the importance of strategic marketing in
            driving sales and brand recognition.
          </p>
          <div className="pintern-production-image-section">
            <img
              className="pintern-production-image"
              src={pinternBuzzfeed}
              alt="The Pintern featured on Buzzfeed's 'Best Gifts for the techie in your life'"
            />
            <img
              className="pintern-production-image"
              src={pinternEtsyAnalytics}
              alt="Etsy Analytics from The Pintern 2021"
            />
            <video className="pintern-design-image" controls muted>
              <source
                src={pinternLaserCut}
                type="video/mp4"
                alt="Laser cut of The Pintern type logo"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="pintern-notes-section">
          <h2 className="pintern-notes-title">Final Notes & Reflection</h2>
          <p className="pintern-notes-text">
            The Pintern was more than just a creative project—it was a
            comprehensive case study in product development, operational
            strategy, customer experience, and user engagement. From managing
            vendor logistics to optimizing e-commerce processes, I gained
            invaluable hands-on experience that refined my skills in product
            marketing, consumer behavior, and business operations. <br />
            <br />
            This journey pushed me to not only improve my design and branding
            abilities but also to think critically about how each decision, from
            manufacturing to marketing, directly impacted the customer
            experience. The process of building a brand from the ground up
            reinforced the importance of agility, strategic planning, and the
            continuous need for adaptation in today’s fast-paced market. <br />
            <br />
            Ultimately, The Pintern helped me grow both professionally and
            personally. It taught me how to balance creativity with practicality
            and how to leverage feedback and data to drive decisions, setting
            the foundation for future projects and entrepreneurial endeavors.
          </p>
        </section>

        <div className="pintern-final-image-section">
          <img
            className="pintern-prototype-image"
            src={pinternOrderPackages}
            alt="The Pintern Order Packages"
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

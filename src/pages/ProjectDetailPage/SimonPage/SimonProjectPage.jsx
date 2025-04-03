import "./SimonProjectPage.css";
import { useState } from "react";
import CloseProject from "../../../components/ButtonCloseProject/CloseProject";
import pinternPins from "../../../../public/assets/images/project-images/the-pintern/pintern-pins.png";
import pinternGotEm from "../../../../public/assets/images/project-images/the-pintern/pintern-got-em.png";
import pinternLPiU from "../../../../public/assets/images/project-images/the-pintern/pintern-lpiu.png";
import pinternTabling from "../../../../public/assets/images/project-images/the-pintern/pintern-tabling.png";

export default function SimonProjectPage() {
  return (
    <>
      <div className="page-marker-simon"></div>
      <div className="page-title-simon">
        <h1 className="simon-project-title">Virtual Simon</h1>
      </div>
      <CloseProject />
      <div className="simon-project-page">
        <section className="simon-hero-section">
          <div className="simon-hero-image">
            <iframe
              className="simon-game"
              src="https://siguejessy.github.io/virtual-simon/"
              title="Simon Game"
            ></iframe>
          </div>

          <div className="simon-hero-text">
            <h2 className="simon-title-tagline">
              An Interactive Memorization Game
            </h2>
            <div className="simon-project-subtitle">
              This is my first solo coding project that I built from scratch
              using HTML, CSS, and JavaScript. The learning objective for this
              project was to demonstrate my ability to perform DOM manipulation
              using JavaScript and to start thinking like a programmer (code
              structuring, wire-framing, pseudo coding, and game-logic
              implementation).
              <br />
              <br />
              The image featured here is interactive, and you can play the game
              by clicking on the Start button. The game will light up and play
              sounds in a sequence, and you have to repeat the sequence by
              clicking the buttons in the same order.
            </div>
          </div>
        </section>

        {/* Project Overview Section */}

        <section className="simon-overview-section">
          <p className="simon-overview-text">
            <div className="simon-summary">
              <ul className="simon-summary-list">
                <li className="simon-summary-heading">
                  <strong>Technical Requirements</strong>
                </li>
                <li className="simon-summary-item">
                  <span> - App must render a game in the browser
                  </span>
                </li>
                <li className="simon-summary-item">
                  <span>
                    - Include win/loss logic and render the win/loss messages in HTML
                  </span>
                </li>
                <li className="simon-summary-item">
                  <span>
                    - Include separate HTML, CSS, and JavaScript files
                  </span>
                </li>
                <li className="simon-summary-item">
                  <span>
                    - Use vanilla JavaScript
                  </span>
                </li>
                <li className="simon-summary-item">
                  <span>
                    - Have sensibly named variables and functions- functions should be named as verbs and variables should be named as nouns
                  </span>
                </li>
                <li className="simon-summary-item">
                  <span>
                    - Code in a consistent style (example: choose bewtween function declarations or function expressions)
                  </span>
                </li>
                <li className="simon-summary-item">
                  <span>
                    - No remaining unused or commented out code
                  </span>
                </li>
                <li className="simon-summary-item">
                  <span>
                    - Be deployed online using GitHub Pages
                  </span>
                </li>
              </ul>
            </div>{" "}
            {/* End of summary list */}
            <br />
            I chose to build a virtual version of the classic Simon game, which was coincidentally sitting near my
            desk at the time of this project, to challenge myself with the use of audio. I added an extra layer of
            personalization by using my own recorded sounds for the game and editing them in Audacity. The game
            features a simple interface with four colored buttons that light up in a sequence, and the player must
            repeat the sequence by clicking the buttons in the same order. The game keeps track of the player's
            score and displays a win/loss message when the game ends. I also added a start button to initiate the
            game or to reset allowing the player to start over at any time.
          </p>
        </section>
        <section className="simon-process-section">
          <h2 className="simon-process-title">Build Process</h2>
          <p className="simon-process-text">
            I started this project by wire-framing the game layout and creating a
            plan for the game logic. I used a simple grid layout with four
            colored buttons, each representing a different sound.
            Once I had a clear plan in place, I began coding the game logic using JavaScript.
            I created functions to handle the game flow, including generating a
            random sequence of colors, checking the player's input, and updating
            the score. I also used event listeners to handle user interactions,
            such as clicking the buttons and starting the game.
            <br />
            <br />
            I used CSS to style the game and make it visually appealing. I
            added hover effects to the buttons and used transitions to create a
            smooth animation when the buttons were clicked. I also used media
            queries to ensure that the game was responsive and looked good on
            different screen sizes. 
            <br />
            <br />
            Overall, this project was a great learning experience for me. I
            learned a lot about DOM manipulation, event handling, and game
            logic. I also gained a better understanding of how to structure my
            code and write clean, maintainable JavaScript. I am proud of the
            final product and I hope you enjoy playing the game as much as I
            enjoyed building it!
            <br />
            <br />
            <strong>Tools Used:</strong>
            <ul className="simon-tools-list">
              <li className="simon-tools-item">HTML</li>
              <li className="simon-tools-item">CSS</li>
              <li className="simon-tools-item">JavaScript</li>
              <li className="simon-tools-item">GitHub Pages</li>
              <li className="simon-tools-item">Audacity</li>
              <li className="simon-tools-item">Figma</li>
              <li className="simon-tools-item">VS Code</li>
              <li className="simon-tools-item">Google Chrome DevTools</li>
              <li className="simon-tools-item">Git</li>
              <li className="simon-tools-item">GitHub</li>
              <li className="simon-tools-item">Terminal</li>
              </ul>
          </p>
          <div className="simon-process-image-section">
            {/* <img
              className="simon-process-image"
              src={simonGreekWood}
              alt="simon 14K process"
            />
            <img
              className="simon-process-image"
              src={simonGreekEnamel}
              alt="simon 14K process 1"
            /> */}
          </div>
        </section>
      </div>{" "}
      {/* End of Simon Project Page */}
    </>
  );
}

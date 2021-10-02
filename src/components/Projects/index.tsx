import React from "react";
import "./style.css";

export const Projects: React.FC = () => {
  return (
    <main className="project-content">
      <header id="header-project">
        Voice Based Email System For The Blind
      </header>
      <div className="tech">Technologies Used: Django</div>
      <ul>
        <li>
          A complete speech driven email system for the blind using Django
          Framework.
        </li>
        <li>Used Google API( Speech-to-text, text-to-speech).</li>
        <li>
          linking to various pages using the Django framework formatted using
          basic HTML/CSS.
        </li>
        <li>Redirecting in pages through AJAX requests.</li>
        <li>
          Implemented features like login, logout,compose, forward,
          search,delete and reply.
        </li>
      </ul>
      <header id="header-project">Youtube-Queue Player</header>
      <div className="tech">Technologies Used: React | Typescript</div>
      <ul>
        <li>The application is a SPA.</li>
        <li>
          The application allows the user to add a youtube link to the playlist
          and start playing from the playlist first in first out.
        </li>
        <li>Once a video is finished, it is removed from the playlist.</li>
        <li>
          The youtube link is validated by the app for proper URL format before
          adding to the queue.
        </li>
        <li>Web page made by using Typescript(React).</li>
      </ul>
      <header id="header-project">Farm Easy</header>
      <div className="tech">
        Technologies Used: NodeJs | ExpressJs | Stripe API
      </div>
      <ul>
        <li>
          An informative and responsive web app giving information about latest
          technologies involved in farming.
        </li>
        <li>A payment option for direct consultation by using STRIPE API.</li>
        <li>
          linking to various pages using the Django framework formatted using
          basic HTML/CSS.
        </li>
        <li>Routing through EXPRESS JS and backend linking using NODE JS.</li>
      </ul>
      <header id="header-project">Driver Drowsiness Detection</header>
      <div className="tech">
        Technologies Used: Python | Keras | Deep Learning
      </div>
      <ul>
        <li>
          The system starts by spatially processing a video of the driver.
        </li>
        <li>Face detection using DLIB.</li>
        <li>
          Detected faces are then passed to an optimized fatigue recognition CNN
          classifier.
        </li>
        <li>
          The amount of time recorded for which the eyes remained closed, also a
          number of times the driver yawned and is accordingly alerted.
        </li>
        <li>Accuracy of the model in percentage:- 95.27</li>
      </ul>
    </main>
  );
};

import React from "react";
import "./style.css";
import { P1, P2, P3 } from "../../common/links";

export const WorkExperience: React.FC = () => {
  return (
    <main className="exp-content">
      <header id="header-work">1. Hashedin Technologies</header>
      <div className="profile">Profile: Software Engineering Intern</div>
      <div className="profile">February 2020-Present</div>
      <ul>
        <li>
          Trained thoroughly in latest technologies(ReactJs, Flask, Golang,
          Html/Css).
        </li>
        <li>
          Currently working on FullSSO , an authorization client like auth0,okta
          etc using ReactJs and React-Context for frontend and Golang serving as
          backend support.
        </li>
      </ul>
      <header id="header-work">2. AllInOne Cyberteam</header>
      <div className="profile">Profile: Software Engineering Intern</div>
      <div className="profile">June 2019-July2019</div>
      <ul>
        <li>Made a Bulk-Mail sender.</li>
        <li>Backend linking through Django, formatting by HTML/CSS</li>
        <li>Basic MVC framework applied, used Django default admin page as database to store user login info.</li>
      </ul>
      <header id="header-work">3. Knuth Programming Hub</header>
      <div className="profile">Role: Coordinator</div>
      <div className="profile">August 2018-July2019</div>
      <ul>
        <li>Problem curator and problem tester of various National Level Coding challenges held over online competitive judges like Hackerrank.</li>
        <li>Links to my problems:</li>
        <ul>
          <li><a href={P1}>Starfire</a></li>
          <li><a href={P2}>Man And Furiosa</a></li>
          <li><a href={P3}>Special Number 101</a></li>
        </ul>
      </ul>
    </main>
  );
};

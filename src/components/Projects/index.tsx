import React from "react";
import "./style.css";

export const Projects: React.FC = () => {
  return (
    <div className="project-content">
      <header id="header-project">Voice Based Email System For The Blind</header>
      <div className="tech">Technologies Used: Django</div>
      <ul>
        <li>
        A complete speech driven email system for the blind using Django Framework.
        </li>
        <li>Used Google API( Speech-to-text, text-to-speech).</li>
        <li>Redirecting in pages through AJAX requests.</li>
        <li>Implemented features like login, logout,compose, forward, search,delete and reply.</li>

      </ul>
    </div>
  );
};

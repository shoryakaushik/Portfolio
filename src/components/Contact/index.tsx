import React from "react";
import "./style.css";

import logo from "/home/shorya_kaushik/portfolio/src/assets/rsz_me.jpg";

import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

export const Contact: React.FC = () => {
  return (
    <div className="contact-content">
      <div className="contact-name">
        <img src={logo} alt="my"/> 
        <header>Shorya Kaushik</header>
        <label>shorya117@gmail.com | +91 8505891348</label>
      </div>
      <div className="contact-icons">
        <a href="https://www.facebook.com/shorya.kaushik.7/">
          <FacebookOutlined style={{ fontSize: "2.5em", color: "#00008B" }} />
        </a>
        <a href="https://github.com/shoryakaushik">
          <GithubOutlined style={{ fontSize: "2.5em" ,color: "black"}} />
        </a>
        <a href="https://www.linkedin.com/in/shorya-kaushik-13a820152/">
          <LinkedinOutlined style={{ fontSize: "2.5em", color: "#0000FF" }} />
        </a>
        <a href="https://wa.me/8505891348">
          <WhatsAppOutlined style={{ fontSize: "2.5em", color: "#2E8B57" }} />
        </a>
      </div>
    </div>
  );
};

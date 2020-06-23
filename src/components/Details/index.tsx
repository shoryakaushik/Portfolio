import React from "react";
import "./style.css";
import "antd/dist/antd.css";

import { Tabs } from "antd";
import { Skills } from "../Skills";
import { AboutMe } from "../AboutMe";
import { WorkExperience } from "../WorkExperiece";
import { Projects } from "../Projects";
export const Details: React.FC = () => {
  const { TabPane } = Tabs;

  return (
    <div className="detail-nav">
      <Tabs
        defaultActiveKey="1"
        size={"large"}
        style={{
          padding: 10,
          backgroundColor: "#2F4F4F",
          color: "white",
          height: "100%",
        }}
      >
        <TabPane
          tab="About Me"
          key="1"
          style={{ backgroundColor: "white", height: "76vh", width: "" }}
        >
          <AboutMe />
        </TabPane>
        <TabPane
          tab="Work Experience"
          key="2"
          style={{ backgroundColor: "white", height: "76vh" }}
        >
          <WorkExperience />
        </TabPane>
        <TabPane
          tab="Skills"
          key="3"
          style={{ backgroundColor: "white", height: "76vh", color: "black" }}
        >
          <Skills />
        </TabPane>
        <TabPane
          tab="Projects"
          key="4"
          style={{ backgroundColor: "white", height: "76vh" }}
        >
          <Projects />
        </TabPane>
        <TabPane
          tab="Sport Programming"
          key="5"
          style={{ backgroundColor: "white", height: "76vh" }}
        >
          Content of tab 3
        </TabPane>
        <TabPane
          tab="Achievements"
          key="6"
          style={{ backgroundColor: "white", height: "76vh" }}
        >
          Content of tab 3
        </TabPane>
        <TabPane
          tab="Resume"
          key="7"
          style={{ backgroundColor: "white", height: "76vh" }}
        >
          Content of tab 3
        </TabPane>
      </Tabs>
    </div>
  );
};

import React from "react";
import "./style.css";

import { TrophyOutlined } from "@ant-design/icons";
import { List } from "antd";

export const Achievements: React.FC = () => {
  const data = [
    {
      title:
        "Among top 5 finalists of MTV LINKEDIN GET A JOB SEASON 5 for Microsoft SDE Internship. (April,2019)",
    },
    {
      title: "Global Rank: 69/2421 in March Lunchtime on Codechef (March,2019)",
    },
    {
      title: "Global Rank: 132/862 in March Cookoff on Codechef (March,2019)",
    },
    {
      title:
        "Team Rank: 14/50 in Battle of Brains organized by Enigma Programming Hub, ABES collg(AKTU)",
    },
    {
      title:
        "Team Rank: 15/80 in AlgoFLUX organized by Rapid Programming Hub, JIIT-128",
    },
    {
      title: "Ranked 2nd in the GeeksClasses scholarship test.",
    },
    {
      title:
        "Top performer(Ranked 1st) in contests by GeeksClasses(Geeksforgeeks).",
    },
  ];

  return (
    <div className="achieve-content">
      <List
        size="large"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <TrophyOutlined
                  style={{ color: "orange", fontSize: "2.5em" }}
                />
              }
              title={item.title}
              style={{ color: "black" }}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

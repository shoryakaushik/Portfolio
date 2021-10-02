import React from "react";
import "./style.css";

import { List } from "antd";
import { Card } from "antd";

import cc from "../../assets/cc.jpg";
import cf from "../../assets/cf.png";

export const CP: React.FC = () => {
  const data = [
    {
      title: "Codechef(shorya_cool)",
      desp: "Max Rating: 1837(4 star)",
      avatar: cc,
      url:"https://www.codechef.com/users/shorya_cool",
    },
    {
      title: "Codeforces(codehard321)",
      desp: "Max Rating: 1532(Specialist)",
      avatar: cf,
      url:"https://codeforces.com/profile/codehard321",

    },
  ];
  const { Meta } = Card;
  return (
    <main className="cp-content">
      <List
        grid={{
          gutter: 16,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <a href ={item.url}>
            <Card
              hoverable
              style={{ width: 240}}
              cover={<img alt="key" src={item.avatar} />}
            >
              <Meta
                title={item.title}
                description={item.desp}
                style={{font:"large",color:"black"}}
              />
            </Card>
            </a>
          </List.Item>
        )}
      />
    </main>
  );
};

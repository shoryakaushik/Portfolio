import React from 'react';
import './style.css';

import { List } from "antd";
import { Card } from "antd";
import { Rate } from 'antd';


export const Skills: React.FC = () =>{

    const data = [
        {
            title: "Data Structure and Algorithms",
            desp: <Rate allowHalf disabled defaultValue={3.5} style={{color:"orange"}} />
            
          },
        {
          title: "C/C++",
          desp: <Rate allowHalf disabled defaultValue={4.5} style={{color:"orange"}} />
          
        },
        {
          title: "Python",
          desp: <Rate disabled defaultValue={4} style={{color:"orange"}}/>

        },
        {
          title: "Flask",
          desp: <Rate allowHalf disabled defaultValue={3.5} style={{color:"orange"}}/>

        },
        {
          title: "Django",
          desp: <Rate allowHalf disabled defaultValue={3.5} style={{color:"orange"}}/>

        },
        {
          title: "MongoDB",
          desp: <Rate disabled defaultValue={3} style={{color:"orange"}}/>

        },
        {
            title: "ExpressJs",
            desp: <Rate disabled defaultValue={3} style={{color:"orange"}}/>

        },
        {
            title: "NodeJs",
            desp: <Rate disabled defaultValue={3} style={{color:"orange"}}/>

        },
        {
            title: "ReactJs",
            desp: <Rate disabled defaultValue={4} style={{color:"orange"}}/>

        }
      ];

    return(
           <div>
           <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>{item.desp}</Card>
      </List.Item>
    )}
  />
           </div>
    );
}
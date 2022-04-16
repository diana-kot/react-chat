import React from "react";
import { ChatInput,  Status } from "@components";
import { Dialogs, Messages } from "@containers";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import "./Home.scss";
import { matchPath } from "react-router-dom";


const Home = () => (
  <section className="home">
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
            <TeamOutlined />
            <span>Список диалогов</span>
          </div>
          <FormOutlined />
        </div>
      
        <div className="chat__sidebar-dialogs">
       
          <Dialogs
            userId={0}
            
          />
        </div>
      </div>
      <div className="chat__dialog">
        <Status online fullname={"Сережа"} />
        <div className="chat__dialog-messages">
         <Messages/>
        </div>
        <div className="chat__dialog-input">
          <ChatInput />
        </div>
      </div>
    </div>
  </section>
);

export default Home;

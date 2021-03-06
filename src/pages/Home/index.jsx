import React from "react";
import { Icon, Button } from "antd";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

import { ChatInput, Status } from "@components";
import { Dialogs, Messages } from "@containers";

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
          <Dialogs userId={0} />
        </div>
      </div>

      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div />
          <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
            <div className="chat__dialog-header-status">
              <Status online />
            </div>
          </div>
          <div>
            <Button type="link" shape="circle">
              <EllipsisOutlined style={{ fontSize: "22px" }} />
            </Button>
          </div>
        </div>
        <div className="chat__dialog-messages">
          <Messages />
        </div>
        <div className="chat__dialog-input">
          <ChatInput />
        </div>
      </div>
    </div>
  </section>
);

export default Home;

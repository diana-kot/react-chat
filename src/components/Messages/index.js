import React from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import cn from "classnames";

import { Message } from "../";

import "./Messages.scss";

const Messages = ({ items }) => {
  return items ? (
    <div>
      <Message
        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        date="Sun Apr 21 2022 21:55:29"
        audio="https://notificationsounds.com/storage/sounds/file-sounds-1180-hey-2.mp3"
      />

      <Message
        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2022 21:55:29"
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
        ]}
      />
      <Message
        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2022 21:55:29"
      />
      <Message
        avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
        text="Hello, World!"
        date="Sun Apr 21 2019 21:59:29"
        isMe={true}
        isReaded={false}
      />
      <Message
        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
        ]}
      />
      <Message
        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        isTyping
      />
      <Message
        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2022 21:55:29"
      />
      <Message
        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2022 21:55:29"
      />
      <Message
        avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date="Sun Apr 21 2022 21:55:29"
      />
    </div>
  ) : (
    <Empty description="Нет сообщений, откройте диалог" />
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;

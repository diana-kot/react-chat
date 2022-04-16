import React from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import cn from "classnames";

import { Message } from "../";

import "./Messages.scss";

const Messages = ({ blockRef, isLoading, items }) => {
  return (
    <div
      ref={blockRef}
      className={cn("messages", { "messages--loading": isLoading })}
    >
      {isLoading ? (
        <Spin size="large" tip="Загрузка сообщений..." />
      ) : items && !isLoading ? (
        items.length > 0 ? (
          items.map(item => <Message key={item._id} {...item} />)
        ) : (
          <Empty description="Диалог пуст" />
        )
      ) : (
        <Empty description="Откройте диалог" />
      )}
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;

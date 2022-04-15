import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

import { Button, Popover } from "antd";

import "./Status.scss";

const Status = ({ online, fullname }) => (
  <div className="chat__dialog-header">
    <div className="chat__dialog-header-center">
      <b className="chat__dialog-header-username">{fullname}</b>
      <div className="chat__dialog-header-status">
        <span className={cn("status", { "status--online": online })}>
          {online ? "онлайн" : "офлайн"}
        </span>
      </div>
    </div>
    <Popover
      className="chat__dialog-header-action"
      content={
        <div>
          <Button>Удалить диалог</Button>
        </div>
      }
      trigger="click"
    >
      <div>
        <Button type="link" shape="circle">
          <EllipsisOutlined style={{ fontSize: "22px" }} />
        </Button>
      </div>
    </Popover>
  </div>
);

Status.propTypes = {
  online: PropTypes.bool,
};

export default Status;

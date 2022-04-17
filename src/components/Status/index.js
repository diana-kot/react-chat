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

const Status = ({ online }) => (
  <span className={cn("status", { "status--online": online })}>
    {online ? "онлайн" : "офлайн"}
  </span>
);

Status.propTypes = {
  online: PropTypes.bool
};

export default Status;

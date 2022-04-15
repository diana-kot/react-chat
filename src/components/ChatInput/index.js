import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
import {
  CameraOutlined,
  SmileOutlined,
  AudioOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
// import { UploadField } from "@navjobs/upload";
// import { Picker } from "emoji-mart";

// import { UploadFiles } from "components";

import "./ChatInput.scss";

const ChatInput = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="chat-input">
        <div>
          <div className="chat-input__smile-btn">
            <Button type="link" shape="circle">
              <SmileOutlined style={{ fontSize: "20px" }} />
            </Button>
          </div>

          <Input
            size="large"
            placeholder="ВВедите текст сообщения"
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="chat-input__actions">
            <Button type="link" shape="circle">
              <CameraOutlined style={{ fontSize: "20px" }} />
            </Button>

            {value ? (
              <Button type="link">
                <CheckCircleOutlined style={{ fontSize: "20px" }} />
              </Button>
            ) : (
              <div className="chat-input__record-btn">
                <Button type="link">
                  <AudioOutlined style={{ fontSize: "20px" }} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;

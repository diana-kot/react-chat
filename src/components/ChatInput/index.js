import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
import {
  CameraOutlined,
  SmileOutlined,
  AudioOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";

// import { UploadFiles } from "components";

import "./ChatInput.scss";

const ChatInput = props => {
  const [value, setValue] = useState("");
  const [emojiPickerVisible, setShowEmojiPicker] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible);
  };

  return (
    <>
      <div className="chat-input">
        <div className="chat-input-with">
          <div className="chat-input__smile-btn">
            {emojiPickerVisible && (
              <div className="chat-input__emoji-picker">
                <Picker set="apple" />
              </div>
            )}
            <Button type="link" shape="circle" onClick={toggleEmojiPicker}>
              <SmileOutlined style={{ fontSize: "20px" }} />
            </Button>
          </div>

          <Input
            size="large"
            placeholder="ВВедите текст сообщения"
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="chat-input__actions">
            <UploadField
              onFiles={(files) => console.log(files)}
              containerProps={{
                className: "chat-input__actions-upload-btn",
              }}
              uploadProps={{
                accept: ".jpg,.jpeg,.png,.gif,.bmp",
                multiple: "multiple",
              }}
            >
              <Button type="link" shape="circle" classname="ant-btn">
                <CameraOutlined
                  style={{ fontSize: "20px", cursor: "pointer" }}
                />
              </Button>
            </UploadField>
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

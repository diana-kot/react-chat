import { combineReducers } from "redux";

import dialogs from "./dialogs"
const reducers = ["messages", "dialogs", "user", "attachments"];

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default;
    return initial;
  }, {})
);

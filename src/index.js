import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import "@styles/index.scss";
import "emoji-mart/css/emoji-mart.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

reportWebVitals();

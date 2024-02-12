import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import stores from "./stores/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={stores}>
      <App  />
    </Provider>
  </React.StrictMode>
);

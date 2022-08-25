import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

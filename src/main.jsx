import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./assets/css/style.css";
// import "./assets/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

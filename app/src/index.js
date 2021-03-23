import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
const root = (
  <Router>
    <App />
  </Router>
);
ReactDOM.render(root, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppWithAuth from "./AppWithAuth";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <Router>
    <AppWithAuth />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

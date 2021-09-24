import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ArticleProvider } from "./util/context";

ReactDOM.render(
  <React.StrictMode>
    <ArticleProvider>
      <Router>
        <App />
      </Router>
    </ArticleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

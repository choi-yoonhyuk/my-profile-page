import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import GlobalStyles from "./GrobalStyles";
import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <GlobalStyles />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

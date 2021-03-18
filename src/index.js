import React from "react";
import ReactDOM from "react-dom";
import "./Styling/index.css";
import { ThemeProvider } from "styled-components";
import App from "./Components/App.js";
import theme from "./Styling/Theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

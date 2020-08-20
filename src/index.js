import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";
// import Board from "./components/Board";
import Game from "./components/Game";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  rootElement
);

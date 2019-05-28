import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "normalize.css";
import config from "./configuration";

console.log(config.firebase);

ReactDOM.render(<App />, document.querySelector(".root"));

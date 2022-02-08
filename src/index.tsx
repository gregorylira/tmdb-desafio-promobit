import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoviesContextProvider } from "./hook";
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <MoviesContextProvider>
      <App />
      <GlobalStyle />
    </MoviesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

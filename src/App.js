import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App(props) {
  return (
    <BrowserRouter>
      <AppRouter pages={props.pages} />
    </BrowserRouter>
  );
}

export default App;

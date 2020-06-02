import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';

const URL = "/api/app-pages";

async function initApp() {
  const response = await fetch(URL);
  const data = await response.json();
  console.log("data-->", data);

  ReactDOM.render(
    <React.StrictMode>
      <App pages={data} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

initApp();

ReactDOM.render(
  <React.StrictMode>Loading...</React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

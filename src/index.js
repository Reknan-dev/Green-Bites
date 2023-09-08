import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom";
import ThemeApp from "./ThemeApp";
import "./index.css";

import { store } from "./store/store";

import { Provider } from "react-redux";

import { StateContextProvider } from "./context/StateContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StateContextProvider>
        <ThemeApp />
      </StateContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import AppModeToggle from "./AppModeToggle";
import "./index.css";

import { store } from "./store/store";

import { Provider } from "react-redux";

import { StateContextProvider } from "./context/StateContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StateContextProvider>
        <AppModeToggle />
      </StateContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

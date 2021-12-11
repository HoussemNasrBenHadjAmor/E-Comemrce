import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { store } from "./store/store";

import { Provider } from "react-redux";

import { StateContextProvider } from "./context/StateContextProvider";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StateContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StateContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import ThemeApp from "./ThemeApp";

import { store } from "./store/store";

import { Provider } from "react-redux";

import { StateContextProvider } from "./context/StateContextProvider";

import Loader from "./components/Loader/Loader";

import "./index.css";

const detectionOptions = {
  order: [
    "cookie",
    "htmlTag",
    "subdomain",
    "localStorage",
    "sessionStorage",
    "navigator",
  ],
  caches: ["cookie"],
  lookupCookie: "language",
  cookieOptions: { path: "/" },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    detection: detectionOptions,
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

ReactDOM.render(
  <Suspense fallback={<Loader height="100vh" />}>
    <React.StrictMode>
      <Provider store={store}>
        <StateContextProvider>
          <ThemeApp />
        </StateContextProvider>
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

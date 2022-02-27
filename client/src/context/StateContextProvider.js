import React, { createContext, useContext, useState, useEffect } from "react";

import i18next from "i18next";

import { useTranslation } from "react-i18next";

import Cookies from "universal-cookie";

const StateContext = createContext();

const cookies = new Cookies();

export const StateContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const darkMode =
    cookies.get("darkMode") || cookies.set("darkMode", false, { path: "/" });

  const { t } = useTranslation();

  const currentLanguage = cookies.get("language") || "en";

  const changeAppLanguage = () => {
    if (currentLanguage === "en") {
      i18next.changeLanguage("fr");
    } else {
      i18next.changeLanguage("en");
    }
  };

  useEffect(() => {
    if (darkMode === "true") {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  return (
    <StateContext.Provider
      value={{
        dark,
        setDark,
        currentLanguage,
        changeAppLanguage,
        t,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

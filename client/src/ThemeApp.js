import React, { useState } from "react";

import App from "./App";

import * as darkColor from "./utilities/DarkModeColors";

import * as lightColor from "./utilities/LightModeColors";

import { useStateContext } from "./context/StateContextProvider";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

import { CssBaseline } from "@mui/material";

const ThemeApp = () => {
  const { dark } = useStateContext();

  let theme = createTheme({
    typography: {
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },

    shape: {
      borderRadius: 8,
    },

    palette: {
      mode: dark ? "dark" : "light",

      text: {
        primary: dark ? darkColor.darkPrimaryText : lightColor.lightPrimaryText,
        secondary: dark
          ? darkColor.darkSecondaryText
          : lightColor.lightSecondaryText,
      },

      background: {
        default: dark
          ? `${darkColor.darkBackGroundColor}`
          : `${lightColor.lightBackGroundColor}`,
        paper: dark
          ? `${darkColor.darkBackGroundPaper}`
          : lightColor.lightBackGroundColorPaper,
      },
    },
  });
  theme = responsiveFontSizes(theme);

  useState(() => {
    console.log("%cBe Careful !!", "color: red; background: ; font-size: 30px");

    console.log(
      "%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a HNBHAStore feature or 'hack' someone's account, it is a scam and will give them access to your HNBHAStore account.",
      "font-size: 20px"
    );

    console.log(
      "%cOne another thing !!",
      "color: Orange; background: ; font-size: 20px"
    );
    console.log(
      "%cIf u're gonna create a 'TOKEN' cookie to reach the Logged Routes and you think it's gonna happen ==> I just wanna say to you : 'IN YOUUUR DREAMMMS SWEATY :))'.",
      "color: blue; background: ; font-size: 20px"
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default ThemeApp;

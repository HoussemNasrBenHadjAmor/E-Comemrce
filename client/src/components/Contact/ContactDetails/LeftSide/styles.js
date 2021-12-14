import { makeStyles } from "@mui/styles";

import * as darkColor from "../../../../utilities/DarkModeColors";

import * as lighColor from "../../../../utilities/LightModeColors";

export default makeStyles((theme) => ({
  paragraph: (dark) => ({
    padding: "10px 50px 10px 0px",

    [theme.breakpoints.down("md")]: {
      padding: "10px 0px 10px 0px",
    },
  }),

  infoDetails: (dark) => ({
    color: !dark ? lighColor.lightSecondaryText : darkColor.darkSecondaryText,
  }),
}));

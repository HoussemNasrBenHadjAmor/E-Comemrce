import { makeStyles } from "@mui/styles";

import * as darkColor from "../../utilities/DarkModeColors";
import * as lightColor from "../../utilities/LightModeColors";

export default makeStyles((theme) => ({
  Container: {
    padding: "100px 80px 0px 80px",
    [theme.breakpoints.down("md")]: {
      padding: "100px 20px 0px 20px",
    },
  },

  GridContainer: {
    padding: "0px 50px 0px 50px",
  },

  GridFaq: {
    padding: "40px 200px 0px 200px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 20px 0px 20px",
    },
  },

  FAQTitle: (dark) => ({
    color: !dark ? lightColor.lightSecondaryText : darkColor.darkSecondaryText,
    paddingBottom: "10px",
  }),

  Title: {
    paddingBottom: "10px",
  },

  LastGrid: {
    padding: "40px 0px 40px 0px",
  },
}));

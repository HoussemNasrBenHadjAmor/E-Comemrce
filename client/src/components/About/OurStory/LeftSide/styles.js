import { makeStyles } from "@mui/styles";

import * as darkColor from "../../../../utilities/DarkModeColors";

export default makeStyles((theme) => ({
  paragraph: (dark) => ({
    color: dark ? darkColor.darkSecondaryText : "none",
    padding: "10px 50px 0px 0px",
    [theme.breakpoints.down("md")]: {
      padding: "10px 0px 0px 0px",
    },
  }),
}));

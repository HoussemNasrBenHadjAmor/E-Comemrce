import { makeStyles } from "@mui/styles";

import * as darkColor from "../../../../../utilities/DarkModeColors";
import * as lightColor from "../../../../../utilities/LightModeColors";

export default makeStyles((theme) => ({
  info: (dark) => ({
    minHeight: "8vh",
    paddingLeft: "20px",
    paddingRight: "20px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5px",
      paddingRight: "5px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: dark ? darkColor.darkHover : lightColor.lightHover,
      borderRadius: "8px",
    },
  }),

  infoName: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "grid",
    },
  },
}));

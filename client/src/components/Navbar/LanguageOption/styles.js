import { makeStyles } from "@mui/styles";

import * as darkColor from "../../../utilities/DarkModeColors";
import * as lightColor from "../../../utilities/LightModeColors";

export default makeStyles(() => ({
  MenuPadding: {
    "& .MuiMenu-paper": {
      maxWidth: "320px",
      minWidth: "320px",
      maxHeight: "180px",
      minHeight: "170px",
      margin: "49px 0px 0px",
      paddingLeft: "5px",
      paddingRight: "5px",
    },
  },
  MenuItem: {
    cursor: "default",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  Flag: (dark) => ({
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: dark ? darkColor.darkHover : lightColor.lightHover,
    },
  }),
}));

import { makeStyles } from "@mui/styles";

import * as darkColor from "../../../utilities/DarkModeColors";
import * as lightColor from "../../../utilities/LightModeColors";

export default makeStyles(() => ({
  MenuPadding: {
    "& .MuiMenu-paper": {
      paddingTop: "5px",
      maxWidth: "330px",
      minWidth: "330px",
      maxHeight: "300px",
      minHeight: "300px",
      margin: "49px 0px 0px",
      paddingLeft: "5px",
      paddingRight: "5px",
    },
  },

  disableHover: {
    cursor: "default !important",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },

  MenuItem: (dark) => ({
    minHeight: "50px !important",
    "&:hover": {
      backgroundColor: dark ? darkColor.darkHover : lightColor.lightHover,
      borderRadius: "8px",
    },
  }),

  avatar: {
    marginRight: "10px",
    width: "60px !important",
    height: "60px !important",
    marginLeft: "-4px",
  },

  DrawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  GridDisplay: {
    padding: "0px 30px ",
    paddingBottom: "5px",
  },

  text: {
    paddingLeft: "22px",
    fontSize: "14.5px !important",
  },

  GridRadio: (dark) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "22px",
    "&:hover": {
      backgroundColor: dark ? darkColor.darkHover : lightColor.lightHover,
      borderRadius: "8px",
    },
  }),
}));

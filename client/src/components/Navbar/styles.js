import { makeStyles } from "@mui/styles";

import * as lightColor from "../../utilities/LightModeColors";

import * as darkColor from "../../utilities/DarkModeColors";

const drawerWidth = 0;

const settingsPath = "/settings";

const anyPath = "";

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    // marginBottom: "60px !important",

    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    "& root": {
      marginBottom: "30px",
    },
  },

  title: {
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },

  Avatar: {
    marginRight: "5px",
    height: "34px !important",
    width: "34px !important",
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },

  IconButtonMargin: {
    marginLeft: "10px",
    marginRight: "10px",
  },

  GridProfile: (dark) => ({
    alignItems: "center",
    flexDirection: "flex",
    padding: "3px 8px 3px 5px",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: dark
        ? `${darkColor.darkHover}`
        : `${lightColor.lightHover}`,
      borderRadius: "100px",
    },
  }),

  button: { textTransform: "initial !important" },

  // marginProvider: {
  //   marginBottom: "64px",

  //   // [theme.breakpoints.up("sm")]: {
  //   //   // paddingTop: "64px",
  //   //   marginBottom: settingsPath === anyPath ? "64px" : "64px",
  //   // },

  //   // [theme.breakpoints.down("sm")]: {
  //   //   // paddingTop: "48px",
  //   //   marginBottom: settingsPath === anyPath ? "48px" : "48px",
  //   // },
  // },
}));

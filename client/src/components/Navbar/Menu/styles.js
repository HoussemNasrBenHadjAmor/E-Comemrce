import { makeStyles } from "@mui/styles";

import * as darkColor from "../../../utilities/DarkModeColors";

import * as lightColor from "../../../utilities/LightModeColors";

const drawerWidth = 400;

export default makeStyles((theme) => ({
  Drawer: {
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      minWidth: drawerWidth,
      boxSizing: "border-box",
      backgroundImage: "none",
      [theme.breakpoints.up("xl")]: {
        minWidth: 700,
      },
      [theme.breakpoints.down("sm")]: {
        // minWidth: 260,
        minWidth: "100%",
      },
    },
  },
  DrawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },

  Accordion: (dark) => ({
    borderRadius: "8px",
    backgroundColor: dark && darkColor.darkBackGroundPaper,
    "&:hover": {
      backgroundColor: dark ? darkColor.darkHover : lightColor.lightHover,
    },
  }),

  MenuItem: (dark) => ({
    minHeight: "55px !important",
    borderRadius: "8px",
  }),
}));

import { makeStyles } from "@mui/styles";

import * as darkColor from "../../../utilities/DarkModeColors";

export default makeStyles(() => ({
  paddingYContainer: {
    paddingTop: "30px",
  },

  GridItemContainer: (dark) => ({
    padding: "20px 30px 20px 15px",
    borderRadius: "8px",
    border: " 1px solid rgba(0, 0, 0, 0.12)",
    backgroundColor: !dark
      ? "rgb(247, 250, 255)"
      : darkColor.darkBackGroundPaper,
    minWidth: "100%",
    minHeight: "100%",
  }),

  Img: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "5px",
  },

  personName: {
    fontSize: "1.125rem",
  },

  Button: {
    textTransform: "none !important",
    padding: "10px 30px !important",
    letterSpacing: "1px !important",
  },
}));

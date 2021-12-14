import { makeStyles } from "@mui/styles";

import * as darkColor from "../../../../utilities/DarkModeColors";

import { red, blue } from "@mui/material/colors";

export default makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      marginTop: "-100px",
    },
  },
  Typography: {
    fontSize: "0.875rem !important",
    fontWeight: "500 !important",
    textDecoration: "none",
  },

  HaveAccount: {
    fontSize: "0.875rem !important",
    fontWeight: "500 !important",
    textDecoration: "none",
    color: blue[400],
    [theme.breakpoints.up("sm")]: {
      marginTop: "10px !important",
    },
  },

  ForgetPassword: {
    fontSize: "0.875rem !important",
    fontWeight: "500 !important",
    textDecoration: "none",
    color: red[300],
  },

  Button: {
    padding: "10px 30px 10px 30px !important",
    textTransform: "none !important",
    fontSize: "15px !important",
    fontWeight: "400 !important",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "10px !important",
    },
  },

  TextField: (dark) => ({
    backgroundColor: dark && darkColor.darkBackGroundPaper,
  }),
}));

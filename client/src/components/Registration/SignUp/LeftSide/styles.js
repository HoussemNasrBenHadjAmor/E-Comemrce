import { makeStyles } from "@mui/styles";

import * as darkColor from "../../../../utilities/DarkModeColors";

export default makeStyles((theme) => ({
  Typography: {
    fontSize: "0.875rem !important",
    fontWeight: "500 !important",
    opacity: "0.98",
    textDecoration: "none",
  },

  TextField: (dark) => ({
    backgroundColor: dark && darkColor.darkBackGroundPaper,
  }),

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
}));

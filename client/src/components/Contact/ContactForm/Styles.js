import { makeStyles } from "@mui/styles";

import * as darkColor from "../../../utilities/DarkModeColors";

export default makeStyles((theme) => ({
  BigContainer: (dark) => ({
    paddingTop: "100px",
    backgroundColor: !dark ? "rgb(247, 250, 255)" : "none",
    minHeight: "100vh",
  }),
  Container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  Grid: {
    padding: "15px 5px",
  },

  GridButton: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: "10px 0px",
  },

  form: {
    maxWidth: "600px",
    margin: "0 auto",
  },

  TextField: (dark) => ({
    backgroundColor: !dark ? "rgb(255,255,255)" : darkColor.darkBackGroundPaper,
  }),

  Span: {
    padding: "10px 0px",
    fontWeight: "700",
  },
}));

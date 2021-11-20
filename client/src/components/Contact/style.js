import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  BigContainer: {
    paddingTop: "100px",
    backgroundColor: "rgb(247, 250, 255)",
    minHeight: "100vh",
  },
  Container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paragraph: {
    color: "rgb(103, 119, 136)",
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

  TextField: {
    backgroundColor: "rgb(255,255,255)",
  },

  Span: {
    padding: "10px 0px",
    fontWeight: "700",
  },
}));

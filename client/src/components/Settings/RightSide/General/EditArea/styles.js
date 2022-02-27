import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  paper: {
    paddingTop: "10px",
    paddingBottom: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  },

  buttonGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: "5px 30px 5px 30px !important",
    textTransform: "none !important",
    marginRight: "10px",
    marginLeft: "10px",
  },
  textField: {
    marginBottom: "20px",
  },
}));

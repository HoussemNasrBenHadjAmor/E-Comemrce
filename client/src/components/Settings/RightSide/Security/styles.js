import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    borderRadius: "0px 0px 3px 3px",
    padding: "20px 10px 10px 10px",
    minHeight: "50vh",
    [theme.breakpoints.down("md")]: {
      padding: "10px 15px 10px 15px",
    },
  },

  grid: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px 10px 20px",
    [theme.breakpoints.down("sm")]: {
      display: "grid",
    },
  },
  textField: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  button: {
    padding: "8px 40px 8px 40px ",
    marginLeft: "20px",
    marginTop: "10px",
  },
}));

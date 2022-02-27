import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paddingTop: {
    paddingTop: "15px",
  },

  paper: {
    borderRadius: "0px 0px 3px 3px",
    padding: "20px 10px 10px 10px",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      padding: "10px 15px 0px 15px",
    },
  },
}));

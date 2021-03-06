import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  Grid: {
    // minHeight: "100vh",

    // paddingLeft: "80px",

    padding: "65px 0px 0px 80px",

    [theme.breakpoints.down("md")]: {
      padding: "70px 20px 0px 20px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "65px 20px 0px 20px",
    },
  },
}));

import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      marginTop: "-100px",
    },
  },
  Typography: {
    color: "rgb(30,32,35) !important",
    fontSize: "0.875rem !important",
    fontWeight: "500 !important",
    opacity: "0.98",
    textDecoration: "none",
  },

  smallTitle: {
    color: "rgb(103, 119, 136) !important",
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
}));

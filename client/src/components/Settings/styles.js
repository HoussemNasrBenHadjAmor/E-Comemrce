import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  padding: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: "64px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "48px",
    },
  },
}));

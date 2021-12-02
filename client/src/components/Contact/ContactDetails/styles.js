import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  bigContainer: {
    padding: "70px 0px 40px 80px",
    [theme.breakpoints.down("md")]: {
      padding: "70px 20px 40px 20px",
    },
  },
}));

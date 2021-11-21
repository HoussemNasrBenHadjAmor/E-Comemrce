import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  Container: {
    padding: "100px 80px 0px 80px",
    [theme.breakpoints.down("md")]: {
      padding: "100px 20px 0px 20px",
    },
  },
}));

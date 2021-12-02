import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paragraph: {
    padding: "10px 50px 0px 0px",
    [theme.breakpoints.down("md")]: {
      padding: "10px 0px 0px 0px",
    },
  },
}));

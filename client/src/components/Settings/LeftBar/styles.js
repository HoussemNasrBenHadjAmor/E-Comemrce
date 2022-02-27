import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.down("sm")]: {
      height: "35vh",
    },
    paddingRight: "20px",
    paddingLeft: "20px",
    height: "50vh",
    borderRadius: "0px 0px 3px 3px",
  },
  MenuItem: {
    padding: "30px 8px 30px 15px",
    borderRadius: "8px",
    marginBottom: "3px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 8px 10px 8px",
    },
  },
}));

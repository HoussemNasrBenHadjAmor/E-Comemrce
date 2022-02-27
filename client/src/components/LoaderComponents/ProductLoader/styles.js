import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  image: {
    height: "420px",
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
    objectFit: "cover",
  },
}));

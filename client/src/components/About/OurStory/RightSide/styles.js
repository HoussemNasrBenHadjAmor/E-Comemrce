import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  Img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      height: "200px",
    },
  },
}));

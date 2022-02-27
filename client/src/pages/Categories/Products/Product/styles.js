import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  heart: {
    position: "absolute",
    bottom: "0",
    right: "0",
    zIndex: "3",
    paddingRight: "5px",
    marginBottom: "5px",
    transition: "all 5s ease",
  },
  image: {
    height: "420px",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
    objectFit: "cover",
  },
}));

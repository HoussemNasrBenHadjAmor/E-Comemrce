import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  img: {
    width: "100%",
    height: "100vh",
    clipPath: "polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)",
    shapeOutside: "polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)",
    objectFit: "cover",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      height: "250px",
      clipPath: "none",
      shapeOutside: "none",
    },
    [theme.breakpoints.down("sm")]: {
      height: "150px",
      clipPath: "none",
      shapeOutside: "none",
    },
  },
}));

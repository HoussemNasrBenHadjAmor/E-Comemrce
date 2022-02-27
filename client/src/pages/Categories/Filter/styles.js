import { makeStyles } from "@mui/styles";
import * as darkColor from "../../../utilities/DarkModeColors";
import * as lightColor from "../../../utilities/LightModeColors";
export default makeStyles((theme) => ({
  containerBody: (dark) => ({
    position: "fixed",
    top: 65,
    right: 0,
    zIndex: 9999,
    width: "380px",
    height: "100vh",
    [theme.breakpoints.up("xl")]: {
      width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      top: 55,
    },
    background: dark
      ? darkColor.darkBackGroundPaper
      : lightColor.lightBackGroundColorPaper,

    padding: "10px 0px 0px 0px",
  }),

  priceBigContainer: {
    padding: "20px",
  },

  priceSmallContainer: {
    display: "flex",
    alignItems: "center",
    padding: "5px 0px 5px 0px",
    whiteSpace: "nowrap",
  },
  price: (dark) => ({
    border: "1px solid",
    borderColor: dark ? "#696969" : "#DCDCDC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    // transition: "all 0.5s ease-in",
    "&:hover": {
      borderColor: "inherit",
    },
  }),
}));

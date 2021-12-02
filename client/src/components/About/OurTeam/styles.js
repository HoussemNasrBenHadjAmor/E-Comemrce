import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paddingYContainer: {
    paddingTop: "30px",
  },
  title: {
    color: "rgb(103, 119, 136)",
    textAlign: "center",
  },

  GridItemContainer: {
    padding: "20px 30px 20px 15px",
    borderRadius: "8px",
    border: " 1px solid rgba(0, 0, 0, 0.12)",
    backgroundColor: "rgb(247, 250, 255)",
    minWidth: "100%",
    minHeight: "100%",
  },

  Img: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "5px",
  },

  personName: {
    fontSize: "1.125rem",
  },
  personMission: {
    color: "rgb(103, 119, 136)",
    fontSize: "1rem",
  },
  Button: {
    textTransform: "none !important",
    padding: "10px 30px !important",
    letterSpacing: "1px !important",
  },
}));

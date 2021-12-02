import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  Container: {
    padding: "100px 80px 0px 80px",
    [theme.breakpoints.down("md")]: {
      padding: "100px 20px 0px 20px",
    },
  },

  GridContainer: {
    padding: "0px 50px 0px 50px",
  },

  GridFaq: {
    padding: "40px 200px 0px 200px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 20px 0px 20px",
    },
  },

  FAQTitle: {
    color: "rgb(103, 119, 136)",
    paddingBottom: "10px",
  },

  Title: {
    paddingBottom: "10px",
  },

  Paper: {
    // boxShadow: "rgb(140,152,164,0.25)",
  },

  LastGrid: {
    padding: "40px 0px 40px 0px",
  },
}));

import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  MenuPadding: {
    "& .MuiMenu-paper": {
      paddingTop: "5px",
      maxWidth: "320px",
      minWidth: "320px",
      maxHeight: "300px",
      minHeight: "270px",
      margin: "49px 0px 0px",
    },
  },

  avatar: {
    marginRight: "10px",
  },

  DrawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  GridDisplay: {
    padding: "0px 30px ",
    paddingBottom: "5px",
  },

  text: {
    paddingLeft: "22px",
  },

  GridRadio: (dark) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "22px",
    color: dark ? "red" : "black",
  }),
}));

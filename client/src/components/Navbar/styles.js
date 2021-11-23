import { makeStyles } from "@mui/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",

    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    "& root": {
      marginBottom: "30px",
    },
  },

  title: {
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },

  Avatar: {
    marginRight: "5px",
    height: "34px !important",
    width: "34px !important",
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },

  IconButtonMargin: {
    marginLeft: "10px",
    marginRight: "10px",
  },

  GridProfile: {
    alignItems: "center",
    flexDirection: "flex",
    padding: "3px 8px 3px 5px",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "rgba(243,229,245,0.7)",
      borderRadius: "100px",
    },
  },
}));

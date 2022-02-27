import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  cadre: (dark) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid ",
    borderColor: dark ? "#696969" : "#DCDCDC",
    padding: "8px 15px 8px 15px",
    margin: "0px 8px 0px 8px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.5s ease-in",
    "&:hover": {
      borderColor: "inherit",
    },
  }),

  cadre2: (dark) => ({
    borderColor: dark ? "#696969" : "#DCDCDC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid ",
    borderColor: "inherit",
    padding: "8px 15px 8px 15px",
    margin: "0px 8px 0px 8px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.5s ease-in",
    "&:hover": {
      borderColor: "inherit",
      // borderColor: dark ? "#696969" : "#DCDCDC",
    },
  }),
  container: {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
}));

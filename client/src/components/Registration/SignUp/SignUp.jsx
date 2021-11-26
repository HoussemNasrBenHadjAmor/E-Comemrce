import React from "react";

import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

import useStyles from "./styles";

import { Grid } from "@mui/material";

const SignUp = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      className={classes.Grid}
      alignItems="center"
      justifyContent="center"
      display="flex"
    >
      <Grid item xs={12} md={6} order={{ xs: "2", md: "1" }}>
        <LeftSide />
      </Grid>

      <Grid item xs={12} md={6} order={{ xs: "1", md: "2" }}>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default SignUp;

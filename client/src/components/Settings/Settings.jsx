import React from "react";

import LeftBar from "./LeftBar/LeftBar";
import RightSide from "./RightSide/RightSide";

import useStyles from "./styles";

import { Grid } from "@mui/material";

const Settings = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.padding}></Grid>

      <Grid minHeight="80vh" container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <LeftBar />
        </Grid>

        <Grid item xs={12} md={8}>
          <RightSide />
        </Grid>
      </Grid>
    </>
  );
};

export default Settings;

import React from "react";

import { CircularProgress, Grid } from "@mui/material";

const Loader = ({ height, notShow }) => {
  return (
    <Grid
      minHeight={height || "100vh"}
      display="grid"
      alignItems="center"
      justifyContent="center"
    >
      {notShow ? null : <CircularProgress />}
    </Grid>
  );
};

export default Loader;

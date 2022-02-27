import React from "react";

import { Grid, Typography } from "@mui/material";

const NoProduct = () => {
  return (
    <Grid
      height="70vh"
      display="grid"
      alignItems="center"
      justifyContent="center"
    >
      <Grid>
        <Typography gutterBottom variant="h4" textAlign="center">
          Oupsss !
        </Typography>
        <Typography gutterBottom variant="body1" textAlign="center">
          Sorry, no product was found
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NoProduct;

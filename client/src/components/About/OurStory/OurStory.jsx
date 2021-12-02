import React from "react";

import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

import { Grid, Typography } from "@mui/material";

import useStyles from "./styles";

const OurStory = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ padding: { xs: "0px 0px 30px 0px", md: "0px 0px 60px 0px" } }}
      >
        <Grid item xs={12} md={6}>
          <LeftSide />
        </Grid>
        <Grid item xs={12} md={6}>
          <RightSide />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="700">
            Who are we?
          </Typography>
          <Typography paragraph className={classes.paragraph}>
            Our sign up is simple. We only require your basic company
            information and what type of data storage you want. Our sign up is
            dead simple. We only require your basic company information and what
            type of data storage you want.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="700">
            Our process
          </Typography>
          <Typography paragraph className={classes.paragraph}>
            We support bulk uploading via SQL, integrations with most data
            storage products, or you can use our API. Simply select where you'd
            like to transfer your data and we'll being the process of migrating
            it instantly.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default OurStory;

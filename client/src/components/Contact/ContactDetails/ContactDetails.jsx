import React from "react";

import { Grid } from "@mui/material";

import useStyles from "./styles";

import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
const ContactDetails = () => {
  const classes = useStyles();
  return (
    <Grid
      sx={{ display: { xs: "grid", md: "flex" } }}
      alignItems="center"
      justifyContent="center"
      className={classes.bigContainer}
    >
      <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
        <LeftSide />
      </Grid>
      <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }}>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default ContactDetails;

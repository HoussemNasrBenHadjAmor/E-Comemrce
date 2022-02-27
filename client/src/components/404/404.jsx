import React from "react";

import { Button, Grid, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="0px 20px"
      height="100vh"
    >
      <Typography variant="h1" color="text.primary" gutterBottom>
        404
      </Typography>
      <Typography
        variant="h5"
        color="text.primary"
        gutterBottom
        textAlign="center"
      >
        This Page Isn't Available
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        gutterBottom
        textAlign="center"
      >
        The link may be broken, or the page may have been removed.
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        gutterBottom
        textAlign="center"
      >
        Check to see if the link you're trying to open is correct.
      </Typography>
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <Button variant="contained" style={{ marginTop: "10px" }}>
          Go Home
        </Button>
      </Link>
    </Grid>
  );
};

export default ErrorPage;

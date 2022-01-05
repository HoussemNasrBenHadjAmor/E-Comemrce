import React from "react";

import LeftBar from "./LeftBar/LeftBar";
import RightSide from "./RightSide/RightSide";

import useStyles from "./styles";

import { Grid } from "@mui/material";

import { ErrorPage } from "..";

import { useLocation } from "react-router-dom";

const Settings = () => {
  const classes = useStyles();

  const { search } = useLocation();

  const generalPath = "?tab=general";

  const securityPath = "?tab=security";

  const displayPath = "?tab=display";

  const isPathCorrect =
    search === generalPath ||
    search === securityPath ||
    search === displayPath ||
    search === "";

  return (
    <>
      {isPathCorrect ? (
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
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default Settings;

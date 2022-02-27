import React, { useState } from "react";

import { Typography, Paper, Grid, Divider } from "@mui/material";

import useStyles from "./styles";

import Model from "./Model/Model";

const Genral = ({ userInfo, loading, errorMessage }) => {
  const classes = useStyles();

  const [fn, setFn] = useState(false);
  const [ln, setLn] = useState(false);
  const [em, setEm] = useState(false);
  const [pn, setPn] = useState(false);

  const [fnf, setFnf] = useState(null);
  const [lnf, setLnf] = useState(null);
  const [emf, setEmf] = useState(null);
  const [pnf, setPnf] = useState(null);

  return (
    <>
      <Grid className={classes.GridPaper}>
        <Paper className={classes.paper}>
          <Typography
            variant="h5"
            color="text.primary"
            fontWeight="bold"
            gutterBottom
          >
            Genral
          </Typography>

          <Divider variant="fullWidth" sx={{ marginY: "5px" }} />

          <Model
            name={userInfo?.firstName}
            label="First Name"
            clicked={fn}
            setClicked={setFn}
            loading={loading}
            field={fnf}
            setField={setFnf}
            errorMessage={errorMessage}
            user={userInfo}
          />
          <Model
            name={userInfo?.lastName}
            label="Last Name"
            clicked={ln}
            setClicked={setLn}
            loading={loading}
            field={lnf}
            setField={setLnf}
            errorMessage={errorMessage}
            user={userInfo}
          />
          <Model
            name={userInfo?.email}
            label="Email"
            clicked={em}
            setClicked={setEm}
            loading={loading}
            field={emf}
            setField={setEmf}
            errorMessage={errorMessage}
            user={userInfo}
          />
          <Model
            name={userInfo?.phoneNumber}
            label="Phone Number"
            clicked={pn}
            setClicked={setPn}
            loading={loading}
            field={pnf}
            setField={setPnf}
            errorMessage={errorMessage}
            user={userInfo}
          />
        </Paper>
      </Grid>
    </>
  );
};

export default Genral;

import React, { useState, useEffect } from "react";

import { Grid, Typography, Button, TextField, Paper } from "@mui/material";

import { LoadingButton } from "@mui/lab";

import { useDispatch } from "react-redux";

import useStyles from "./styles";

import { updateUser } from "../../../../../store/actions/user";

const PhoneNumber = "Phone Number";

const EditAreal = ({
  label,
  value,
  field,
  setField,
  loading,
  setClicked,
  errorMessage,
  user,
}) => {
  const classes = useStyles();

  const [helpText, setHelpText] = useState(null);

  const [entered, setEntered] = useState(false);

  const [reuse, setReuse] = useState(false);

  const disptach = useDispatch();

  const verify = () => {
    const text = "Field Required*";
    let error = false;
    if (!field) {
      setHelpText(text);
      setReuse(true);
      error = true;
    } else {
      setHelpText(null);
      setReuse(false);
      error = false;
    }
    return error;
  };

  const update = () => {
    const isError = verify();

    if (!isError) {
      if (label === "First Name") {
        setEntered(true);
        const data = { firstName: field };
        disptach(updateUser(data)).then(() => {
          setEntered(false);
        });
      } else if (label === "Last Name") {
        setEntered(true);
        const data = { lastName: field };
        disptach(updateUser(data)).then(() => {
          setEntered(false);
        });
      } else if (label === "Email") {
        setEntered(true);
        const data = { email: field };
        disptach(updateUser(data)).then(() => {
          setEntered(false);
        });
      } else {
        setEntered(true);
        const data = { phoneNumber: field };
        disptach(updateUser(data)).then(() => {
          setEntered(false);
        });
      }
    }
  };

  useEffect(() => {
    setField(value);
  }, []);

  useEffect(() => {
    if (errorMessage && entered) {
      setReuse(true);
    }
  }, [errorMessage, entered]);

  return (
    <Paper className={classes.paper}>
      <Grid sx={{ display: { xs: "grid", sm: "flex" } }}>
        <Typography paddingLeft="20px" minWidth="200px">
          {label}
        </Typography>

        <Grid className={classes.container}>
          <Grid className={classes.buttonGrid}>
            <TextField
              variant="filled"
              label={label}
              className={classes.textField}
              value={field}
              onChange={(e) => {
                setField(e.target.value);
              }}
              helperText={helpText || (reuse && errorMessage)}
              error={(helpText || errorMessage) && reuse}
              disabled={user?.googleId && label !== PhoneNumber}
            />
          </Grid>

          <Grid className={classes.buttonGrid}>
            <LoadingButton
              variant="contained"
              className={classes.button}
              loading={loading && entered}
              onClick={update}
              disabled={
                label === PhoneNumber
                  ? parseInt(field) === value
                  : field === value
              }
            >
              Save
            </LoadingButton>

            <Button
              variant="contained"
              className={classes.button}
              onClick={() => {
                setClicked(false);
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EditAreal;

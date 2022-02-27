import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { Typography, Paper, Grid, Divider, TextField } from "@mui/material";

import { LoadingButton } from "@mui/lab";

import useStyles from "./styles";

import { changePass } from "../../../../store/actions/user";

const Genral = ({ loading, errorMessage, userInfo }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [fields, setFields] = useState({
    op: "",
    np: "",
    rnp: "",
  });

  const [entered, setEntered] = useState(false);

  const [isEmpty, setisEmpty] = useState(true);

  const input = [
    {
      name: "op",
      label: "Old Password",
      value: fields.op,
      text: "Your Old Password",
    },
    {
      name: "np",
      label: "New Password",
      value: fields.np,
      text: "Your New Password",
    },
    {
      name: "rnp",
      label: "Repeat New Password",
      value: fields.rnp,
      text: "Repeat Your New Password",
    },
  ];

  const changeFields = (e, name) => {
    setFields((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const isFieldEmpty = () => {
    if (fields.op !== "" && fields.np !== "" && fields.rnp !== "") {
      setisEmpty(false);
    }
    if (fields.np !== fields.rnp) {
      setisEmpty(true);
    }
  };

  const save = () => {
    const data = {
      oldPass: fields.op,
      newPass: fields.np,
    };
    dispatch(changePass(data));
    setEntered(true);
  };

  useEffect(() => {
    isFieldEmpty();
    if (!errorMessage && entered && !loading) {
      setFields((prevState) => ({
        ...prevState,
        op: "",
        np: "",
        rnp: "",
      }));
      setEntered(false);
      setisEmpty(true);
    }
  }, [fields, errorMessage, loading]);

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
            Security
          </Typography>

          <Divider variant="fullWidth" sx={{ marginY: "5px" }} />

          {input.map(({ name, label, value, text }, i) => (
            <>
              <Grid className={classes.grid} key={i}>
                <Grid className={classes.infoName}>
                  <Typography color="text.primary" minWidth="240px">
                    {text}
                  </Typography>
                </Grid>

                <Grid>
                  <TextField
                    className={classes.textField}
                    label={label}
                    name={name}
                    onChange={(e) => {
                      changeFields(e, name);
                    }}
                    value={value}
                    type="password"
                    error={errorMessage && entered && name === "op"}
                    helperText={name === "op" && entered && errorMessage}
                    disabled={userInfo?.googleId || userInfo?.facebookId}
                  />
                </Grid>
              </Grid>
              <Divider variant="fullWidth" sx={{ marginY: "5px" }} />
            </>
          ))}

          <Grid>
            <LoadingButton
              variant="contained"
              className={classes.button}
              onClick={save}
              disabled={isEmpty}
              loading={loading}
            >
              Save
            </LoadingButton>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Genral;

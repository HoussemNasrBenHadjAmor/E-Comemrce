import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Grid, Button, Typography, TextField, Divider } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import useStyles from "./styles";

import { useDispatch, useSelector } from "react-redux";

import { useStateContext } from "../../../context/StateContextProvider";

const LeftSide = () => {
  const { dark, t } = useStateContext();

  const classes = useStyles(dark);

  const dispatch = useDispatch();

  const { userLogged, errorMessage, loading } = useSelector(
    (state) => state.auth
  );

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [messageError, setMessageError] = useState();

  const [clicked, setClicked] = useState(false);

  const [emailError, setEmailError] = useState(false);

  const [emailTextHelper, setEmailTextHelper] = useState("");

  const [passwordError, setPasswordError] = useState(false);

  const [passwordTextHelper, setPasswordTextHelper] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const verifyFields = () => {
    let errorField = false;
    const text = t("field_required");
    try {
      if (user.email === "") {
        setEmailError(true);
        setEmailTextHelper(text);
        errorField = true;
      } else if (user.email !== "") {
        setEmailError(false);
        setEmailTextHelper("");
        errorField = false;
      }

      if (user.password === "") {
        setPasswordError(true);
        setPasswordTextHelper(text);
        errorField = true;
      } else if (user.password !== "") {
        setPasswordError(false);
        setPasswordTextHelper("");
        errorField = false;
      }

      return errorField;
    } catch (error) {
      return error;
    }
  };

  const handleLogin = () => {};

  useEffect(() => {}, []);

  return (
    <>
      <Grid item xs={12} paddingBottom="30px">
        <Typography gutterBottom fontWeight="500" color="text.secondary">
          {/* {t("login_page_l1")} */}
          Ooppps
        </Typography>

        <Typography variant="h4" fontWeight="700" gutterBottom>
          {/* {t("login_page_l2")} */}
          Forgot your password ?
        </Typography>

        <Typography gutterBottom fontWeight="500" color="text.secondary">
          Recover your account
        </Typography>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="subtitle2"
            marginBottom="16px"
            className={classes.Typography}
          >
            {t("login_page_l4")}
          </Typography>
          <TextField
            id="email"
            name="email"
            type="text"
            label={t("login_page_l5")}
            fullWidth
            onChange={handleChange}
            error={emailError}
            helperText={emailTextHelper}
            value={user.email}
            className={classes.TextField}
          />
        </Grid>
      </Grid>

      <Grid display={errorMessage ? "flex" : "none"} paddingTop="5px">
        <Typography variant="subtitle2" color="red" fontWeight="700">
          {!emailError && !passwordError && !loading && messageError}
        </Typography>
      </Grid>

      <Grid
        alignItems="center"
        justifyContent="space-between"
        sx={{ display: { sm: "flex" }, marginTop: "10px" }}
      >
        <Typography
          variant="subtitle2"
          component={Link}
          to="/auth/sign-in"
          className={classes.HaveAccount}
        >
          {/* {t("login_page_l8")} */}
          Do you remember your password ?
        </Typography>

        <LoadingButton
          variant="contained"
          className={classes.Button}
          color="info"
          onClick={handleLogin}
          loading={loading}
        >
          {/* {t("login_page_l8_2")} */}
          Send
        </LoadingButton>
      </Grid>
    </>
  );
};

export default LeftSide;

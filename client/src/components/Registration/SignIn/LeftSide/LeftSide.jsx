import React, { useEffect, useState } from "react";

import { useGoogleLogin } from "react-google-login";

import { useDispatch, useSelector } from "react-redux";

import { useStateContext } from "../../../../context/StateContextProvider";

import { googleLogin, login } from "../../../../store/actions/auth";

import { Link } from "react-router-dom";

import useStyles from "./styles";

import { Grid, Button, Typography, TextField, Divider } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import GoogleIcon from "@mui/icons-material/Google";

import FacebookIcon from "@mui/icons-material/Facebook";

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

  const { signIn } = useGoogleLogin({
    onSuccess: (res) => {
      dispatch(googleLogin({ idToken: res.tokenId }));
    },
    clientId: process.env.REACT_APP_GOOGLE_AUTH_KEY,
    isSignedIn: false,
    autoLoad: false,
  });

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

  const handleLogin = () => {
    const errorField = verifyFields();
    try {
      if (!errorField) {
        const data = {
          email: user.email,
          password: user.password,
        };
        dispatch(login(data));
        setClicked(true);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (userLogged) {
      setUser({ ...user, email: "", password: "" });
      window.location.href = "/";
    }

    if (clicked && errorMessage) {
      setMessageError(errorMessage);
    }
  }, [userLogged, errorMessage, clicked]);

  return (
    <div className={classes.container}>
      <Grid item xs={12} paddingBottom="30px">
        <Typography gutterBottom fontWeight="500" color="text.secondary">
          {t("login_page_l1")}
        </Typography>
        <Typography variant="h4" fontWeight="700" gutterBottom>
          {t("login_page_l2")}
        </Typography>
        <Typography gutterBottom fontWeight="500" color="text.secondary">
          {t("login_page_l3")}
        </Typography>
      </Grid>

      <form>
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

          <Grid item xs={12}>
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="subtitle2"
                marginBottom="16px"
                className={classes.Typography}
              >
                {t("login_page_l6")}
              </Typography>

              <Typography
                variant="subtitle2"
                marginBottom="16px"
                className={classes.ForgetPassword}
                sx={{
                  display: { xs: "none", sm: "flex" },
                }}
                component={Link}
                to="/forgot-password"
              >
                {t("login_page_l6_2")}
              </Typography>
            </Grid>

            <TextField
              id="password"
              name="password"
              type="password"
              label={t("login_page_l7")}
              fullWidth
              onChange={handleChange}
              error={passwordError}
              helperText={passwordTextHelper}
              value={user.password}
              className={classes.TextField}
            />
          </Grid>
        </Grid>
      </form>

      <Grid item display={{ xs: "flex", sm: "none" }} marginTop="15px">
        <Typography
          variant="subtitle2"
          className={classes.ForgetPassword}
          component={Link}
          to="/forgot-password"
        >
          {t("login_page_l6_2")}
        </Typography>
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
          to="/auth/sign-up"
          className={classes.HaveAccount}
        >
          {t("login_page_l8")}
        </Typography>

        <LoadingButton
          variant="contained"
          className={classes.Button}
          color="info"
          onClick={handleLogin}
          loading={loading}
        >
          {t("login_page_l8_2")}
        </LoadingButton>
      </Grid>

      <Grid item paddingY="10px">
        <Divider variant="middle">
          <Typography variant="subtitle1" marginX="5px" color="text.secondary">
            {t("login_page_l9")}
          </Typography>
        </Divider>
      </Grid>

      <Grid item paddingY="10px">
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          fullWidth
          onClick={signIn}
          sx={{
            textTransform: "none",
          }}
        >
          {t("login_page_l10")}
        </Button>
      </Grid>

      <Grid item>
        <Button
          variant="outlined"
          startIcon={<FacebookIcon />}
          fullWidth
          sx={{
            textTransform: "none",
          }}
        >
          {t("login_page_l11")}
        </Button>
      </Grid>
    </div>
  );
};

export default LeftSide;

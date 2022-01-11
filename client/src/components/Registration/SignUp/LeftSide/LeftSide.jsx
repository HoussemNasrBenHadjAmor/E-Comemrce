import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import useStyles from "./styles";

import { useStateContext } from "../../../../context/StateContextProvider";

import { Grid, Button, Typography, TextField, Divider } from "@mui/material";

import { blue } from "@mui/material/colors";

import LoadingButton from "@mui/lab/LoadingButton";

import GoogleIcon from "@mui/icons-material/Google";

import FacebookIcon from "@mui/icons-material/Facebook";

import { useDispatch, useSelector } from "react-redux";

import { signup } from "../../../../store/actions/auth";

import { useHistory } from "react-router-dom";

const LeftSide = () => {
  const { dark, t } = useStateContext();

  const classes = useStyles(dark);

  const history = useHistory();

  const dispatch = useDispatch();

  const { signErrorMessage, userSigned, loading } = useSelector(
    (state) => state.auth
  );

  const [errorMessage, setErrorMessage] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
  });

  const [errorFirstName, setErrorFirstName] = useState(false);

  const [firstNameHelperText, setFirstNameHelperText] = useState("");

  const [errorLastName, setErrorLastName] = useState(false);

  const [lastNameHelperText, setLastNameHelperText] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);

  const [emailHelperText, setEmailHelperText] = useState("");

  const [errorPassword, setErrorPassword] = useState(false);

  const [passwordHelperText, setPasswordHelperText] = useState("");

  const [errorPassword2, setErrorPassword2] = useState(false);

  const [password2HelperText, setPassword2HelperText] = useState("");

  const [clicked, setClicked] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const verifyFields = () => {
    let errorField = false;
    const text = t("field_required");
    const passwordNotMatch = t("password_not_same");
    try {
      if (user.firstName === "") {
        setErrorFirstName(true);
        setFirstNameHelperText(text);
        errorField = true;
      } else {
        setErrorFirstName(false);
        setFirstNameHelperText("");
        errorField = false;
      }

      if (user.lastName === "") {
        setErrorLastName(true);
        setLastNameHelperText(text);
        errorField = true;
      } else {
        setErrorLastName(false);
        setLastNameHelperText("");
        errorField = false;
      }

      if (user.email === "") {
        setErrorEmail(true);
        setEmailHelperText(text);
        errorField = true;
      } else {
        setErrorEmail(false);
        setEmailHelperText("");
        errorField = false;
      }

      if (user.password === "") {
        setErrorPassword(true);
        setPasswordHelperText(text);
        errorField = true;
      } else {
        setErrorPassword(false);
        setPasswordHelperText("");
        errorField = false;
      }

      if (user.password2 === "") {
        setErrorPassword2(true);
        setPassword2HelperText(text);
        errorField = true;
      } else {
        setErrorPassword2(false);
        setPassword2HelperText("");
        errorField = false;
      }

      if (user.password !== "" && user.password2 !== "") {
        if (user.password !== user.password2) {
          setErrorPassword(true);
          setErrorPassword2(true);
          setPasswordHelperText(passwordNotMatch);
          setPassword2HelperText(passwordNotMatch);
          errorField = true;
        }
      }
      return errorField;
    } catch (error) {
      return error;
    }
  };

  const handleClick = () => {
    const errorField = verifyFields();
    try {
      if (!errorField) {
        const data = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        };
        dispatch(signup(data));
        setClicked(true);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (clicked && signErrorMessage) {
      setErrorMessage(signErrorMessage);
    }

    if (userSigned && clicked) {
      history.push("/auth/sign-in");
    }
  }, [userSigned, signErrorMessage, clicked]);

  return (
    <>
      <Grid item xs={12} paddingBottom="30px">
        <Typography gutterBottom fontWeight="500" color="text.secondary">
          {t("sign_page_l1")}
        </Typography>
        <Typography variant="h4" fontWeight="700" gutterBottom>
          {t("sign_page_l2")}
        </Typography>
        <Typography gutterBottom fontWeight="500" color="text.secondary">
          {t("sign_page_l3")}
        </Typography>
      </Grid>

      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle2"
              marginBottom="16px"
              className={classes.Typography}
            >
              {t("sign_page_l4")}
            </Typography>
            <TextField
              id="firstName"
              name="firstName"
              type="text"
              label={t("sign_page_l4_t")}
              fullWidth
              onChange={handleChange}
              required
              error={errorFirstName}
              helperText={firstNameHelperText}
              className={classes.TextField}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle2"
              marginBottom="16px"
              className={classes.Typography}
            >
              {t("sign_page_l4_2")}
            </Typography>
            <TextField
              id="lastName"
              name="lastName"
              type="text"
              label={t("sign_page_l4_2_t")}
              fullWidth
              required
              onChange={handleChange}
              error={errorLastName}
              helperText={lastNameHelperText}
              className={classes.TextField}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle2"
              marginBottom="16px"
              className={classes.Typography}
            >
              {t("sign_page_l5")}
            </Typography>
            <TextField
              id="Email"
              name="email"
              type="text"
              label={t("sign_page_l5_2")}
              fullWidth
              required
              onChange={handleChange}
              error={errorEmail}
              helperText={emailHelperText}
              className={classes.TextField}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle2"
              marginBottom="16px"
              className={classes.Typography}
            >
              {t("sign_page_l6")}
            </Typography>
            <TextField
              id="password"
              name="password"
              type="password"
              label={t("sign_page_l6_2")}
              fullWidth
              required
              onChange={handleChange}
              error={errorPassword}
              helperText={passwordHelperText}
              className={classes.TextField}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle2"
              marginBottom="16px"
              className={classes.Typography}
            >
              {t("sign_page_l7")}
            </Typography>
            <TextField
              id="password2"
              name="password2"
              type="password"
              label={t("sign_page_l7_2")}
              fullWidth
              required
              onChange={handleChange}
              error={errorPassword2}
              helperText={password2HelperText}
              className={classes.TextField}
            />
          </Grid>
        </Grid>
      </form>

      <Grid display={signErrorMessage ? "flex" : "none"} paddingTop="5px">
        <Typography variant="subtitle2" color="red" fontWeight="700">
          {signErrorMessage && clicked && !loading && errorMessage}
        </Typography>
      </Grid>

      <Grid
        alignItems="center"
        justifyContent="space-between"
        marginTop="30px"
        sx={{ display: { xs: "row", sm: "flex" } }}
      >
        <Typography
          variant="subtitle2"
          component={Link}
          to="/auth/sign-in"
          className={classes.Typography}
          color={blue[400]}
          sx={{
            marginBottom: { xs: "10px" },
            marginTop: { sm: "10px" },
          }}
        >
          {t("sign_page_l8")}
        </Typography>
        <LoadingButton
          variant="contained"
          className={classes.Button}
          color="info"
          onClick={handleClick}
          loading={loading}
        >
          {t("sign_page_l8_2")}
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
          sx={{
            textTransform: "none",
          }}
        >
          {t("sign_page_l9")}
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
          {t("sign_page_l10")}
        </Button>
      </Grid>
    </>
  );
};

export default LeftSide;

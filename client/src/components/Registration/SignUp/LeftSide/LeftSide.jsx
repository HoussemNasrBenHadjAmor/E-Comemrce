import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import useStyles from "./styles";

import { Grid, Button, Typography, TextField, Divider } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";

import FacebookIcon from "@mui/icons-material/Facebook";

import { useDispatch, useSelector } from "react-redux";

import { signup } from "../../../../store/actions/auth";

import { useHistory } from "react-router-dom";

const LeftSide = () => {
  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();

  const { signErrorMessage, userSigned } = useSelector((state) => state.auth);

  const [errorMessage, setErrorMessage] = useState("");

  const [isUserSigned, setIsUserSigned] = useState(false);

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
    const text = "Field Required*";
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
          setPasswordHelperText("Password Not Match !");
          setPassword2HelperText("Password Not Match !");
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
    if (userSigned && clicked) {
      setIsUserSigned(true);
    }

    if (isUserSigned) {
      history.push("/auth/sign-in");
    }

    if (clicked && signErrorMessage) {
      setErrorMessage(signErrorMessage);
    }
  }, [userSigned, signErrorMessage, clicked]);

  return (
    <>
      <Grid item xs={12} paddingBottom="30px">
        <Typography
          className={classes.smallTitle}
          gutterBottom
          fontWeight="500"
        >
          SIGNUP
        </Typography>
        <Typography variant="h4" fontWeight="700" gutterBottom>
          Create an account
        </Typography>
        <Typography
          className={classes.smallTitle}
          gutterBottom
          fontWeight="500"
        >
          Fill out the form to get started.
        </Typography>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle2"
            marginBottom="16px"
            className={classes.Typography}
          >
            Enter your first name
          </Typography>
          <TextField
            id="firstName"
            name="firstName"
            type="text"
            label="First Name"
            fullWidth
            onChange={handleChange}
            required
            error={errorFirstName}
            helperText={firstNameHelperText}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle2"
            marginBottom="16px"
            className={classes.Typography}
          >
            Enter your last name
          </Typography>
          <TextField
            id="lastName"
            name="lastName"
            type="text"
            label="Last Name"
            fullWidth
            required
            onChange={handleChange}
            error={errorLastName}
            helperText={lastNameHelperText}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="subtitle2"
            marginBottom="16px"
            className={classes.Typography}
          >
            Enter your email
          </Typography>
          <TextField
            id="Email"
            name="email"
            type="text"
            label="Email"
            fullWidth
            required
            onChange={handleChange}
            error={errorEmail}
            helperText={emailHelperText}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="subtitle2"
            marginBottom="16px"
            className={classes.Typography}
          >
            Enter your password
          </Typography>
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            fullWidth
            required
            onChange={handleChange}
            error={errorPassword}
            helperText={passwordHelperText}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="subtitle2"
            marginBottom="16px"
            className={classes.Typography}
          >
            Repeat your password
          </Typography>
          <TextField
            id="password2"
            name="password2"
            type="password"
            label="Repeat Password"
            fullWidth
            required
            onChange={handleChange}
            error={errorPassword2}
            helperText={password2HelperText}
          />
        </Grid>
      </Grid>

      <Grid display={signErrorMessage ? "flex" : "none"} paddingTop="5px">
        <Typography variant="subtitle2" color="red" fontWeight="700">
          {signErrorMessage && clicked && errorMessage}
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
          sx={{
            marginBottom: { xs: "10px" },
            marginTop: { sm: "10px" },
          }}
        >
          Already have an account ?
        </Typography>
        <Button
          variant="contained"
          className={classes.Button}
          color="info"
          onClick={handleClick}
        >
          Sign Up
        </Button>
      </Grid>

      <Grid item paddingY="10px">
        <Divider variant="middle">
          <Typography variant="subtitle1" marginX="5px" color="GrayText">
            Or
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
          Sign Up With Google
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
          Sign Up With Facebook
        </Button>
      </Grid>
    </>
  );
};

export default LeftSide;

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

  const { signErrorMessage } = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
  });

  const [fields, setFields] = useState({
    firstNameError: false,
    firstNameHelperText: "",
    lastNameError: false,
    lastNameHelperText: "",
    emailError: false,
    emailHelperText: "",
    passwordError: false,
    passwordHelperText: "",
    password2Error: false,
    password2HelperText: "",
  });

  const [clicked, setClicked] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const verifyEmailField = () => {
    let errorField = false;
    const text = "Field Required*";
    if (user.email === "") {
      setFields({ ...fields, emailError: true, emailHelperText: text });
      errorField = true;
      console.log("email", user.email);
    } else if (user.email !== "") {
      setFields({ ...fields, emailError: false, emailHelperText: "" });
      errorField = false;
    }

    return errorField;
  };

  const verifyFirstNameField = () => {
    let errorField = false;
    const text = "Field Required*";
    if (user.firstName === "") {
      setFields({
        ...fields,
        firstNameError: true,
        firstNameHelperText: "Field Required*",
      });
      errorField = true;
    } else if (user.firstName !== "") {
      setFields({
        ...fields,
        firstNameError: false,
        firstNameHelperText: "",
      });
      errorField = false;
    }
    return errorField;
  };

  const verifyLastNameField = () => {
    let errorField = false;
    const text = "Field Required*";
    if (user.lastName === "") {
      setFields({
        ...fields,
        lastNameError: true,
        lastNameHelperText: "Field Required*",
      });
      errorField = true;
    } else if (user.lastName !== "") {
      setFields({
        ...fields,
        lastNameError: false,
        lastNameHelperText: "",
      });
      errorField = false;
    }
    return errorField;
  };

  const verifyPasswordField = () => {
    let errorField = false;

    if (user.password === "") {
      setFields({
        ...fields,
        passwordError: true,
        passwordHelperText: "Field Required*",
      });
      errorField = true;
    } else if (user.password !== "") {
      setFields({
        ...fields,
        passwordError: false,
        passwordHelperText: "",
      });
      errorField = false;
    }

    return errorField;
  };

  const verifyPassword2Field = () => {
    let errorField = false;

    if (user.password2 === "") {
      console.log("email pas", user.email);
      setFields({
        ...fields,
        password2Error: true,
        password2HelperText: "Field Required*",
      });
      errorField = true;
    } else if (user.password2 !== "") {
      setFields({
        ...fields,
        password2Error: false,
        password2HelperText: "",
      });
      errorField = false;
    }

    return errorField;
  };
  const verifyFields = () => {
    let errorField = false;
    const text = "Field Required*";
    try {
      const emailError = verifyEmailField();
      const firstName = verifyFirstNameField();
      const lastName = verifyLastNameField();
      const password = verifyPasswordField();
      const password2 = verifyPassword2Field();
      console.log(firstName, lastName, emailError, password, password2);
      if (!emailError && !firstName && !lastName && !password && !password2) {
        console.log("pas de probleme");
        errorField = false;
      } else {
        errorField = true;
      }
      // if (user.email === "") {
      //   // setFields({ ...fields, emailError: true, emailHelperText: text });
      //   setFields({ ...fields, emailError: true, emailHelperText: text });
      //   errorField = true;
      //   console.log("email", user.email);
      // } else if (user.email !== "") {
      //   setFields({ ...fields, emailError: false, emailHelperText: "" });
      //   errorField = false;
      // }

      // if (user.firstName === "") {
      //   setFields({
      //     ...fields,
      //     firstNameError: true,
      //     firstNameHelperText: "Field Required*",
      //   });
      //   errorField = true;
      // } else if (user.firstName !== "") {
      //   setFields({
      //     ...fields,
      //     firstNameError: false,
      //     firstNameHelperText: "",
      //   });
      //   errorField = false;
      // }

      // if (user.lastName === "") {
      //   setFields({
      //     ...fields,
      //     lastNameError: true,
      //     lastNameHelperText: "Field Required*",
      //   });
      //   errorField = true;
      // } else if (user.lastName !== "") {
      //   setFields({
      //     ...fields,
      //     lastNameError: false,
      //     lastNameHelperText: "",
      //   });
      //   errorField = false;
      // }

      // if (user.password === "") {
      //   setFields({
      //     ...fields,
      //     passwordError: true,
      //     passwordHelperText: "Field Required*",
      //   });
      //   errorField = true;
      // } else if (user.password !== "") {
      //   setFields({
      //     ...fields,
      //     passwordError: false,
      //     passwordHelperText: "",
      //   });
      //   errorField = false;
      // }

      // if (user.password2 === "") {
      //   console.log("email pas", user.email);
      //   setFields({
      //     ...fields,
      //     password2Error: true,
      //     password2HelperText: "Field Required*",
      //   });
      //   errorField = true;
      // } else if (user.password2 !== "") {
      //   setFields({
      //     ...fields,
      //     password2Error: false,
      //     password2HelperText: "",
      //   });
      //   errorField = false;
      // }
      return errorField;
    } catch (error) {
      return error;
    }
  };

  const handleClick = () => {
    const errorField = verifyFields();
    try {
      setClicked(true);
      if (!errorField && user.password === user.password2) {
        const data = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        };
        dispatch(signup(data));
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    console.log("signErrorMessage", signErrorMessage);
    if (signErrorMessage !== null && clicked) {
      history.push("/auth/sign-in");
    }
  }, [signErrorMessage, clicked]);

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
            error={fields.firstNameError}
            helperText={fields.firstNameHelperText}
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
            error={fields.lastNameError}
            helperText={fields.lastNameHelperText}
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
            error={fields.emailError}
            helperText={fields.emailHelperText}
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
            error={fields.passwordError}
            helperText={fields.passwordHelperText}
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
            error={fields.password2Error}
            helperText={fields.password2HelperText}
          />
        </Grid>
      </Grid>

      <Grid display={signErrorMessage ? "flex" : "none"} paddingTop="5px">
        <Typography variant="subtitle2" color="red" fontWeight="700">
          {signErrorMessage && signErrorMessage}
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

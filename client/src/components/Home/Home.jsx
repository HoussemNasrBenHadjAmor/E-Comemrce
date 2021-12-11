import React from "react";

import { useGoogleLogout } from "react-google-login";
import Cookies from "universal-cookie";
import { useStateContext } from "../../context/StateContextProvider";

import useStyles from "./styles";

const Home = () => {
  const { dark } = useStateContext();
  const classes = useStyles(dark);
  const cookie = new Cookies();
  const onLogoutSuccess = (res) => {
    console.log("res", res);
    console.log("logout success");
    // cookie.clear();
    // signOut();
  };
  const { signOut } = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_AUTH_KEY,
    onLogoutSuccess,
  });
  return (
    <div className={classes.backGround}>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <button onClick={signOut}>SignOut</button>
    </div>
  );
};

export default Home;

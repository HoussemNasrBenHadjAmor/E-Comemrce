import React from "react";

import { useGoogleLogout } from "react-google-login";
import Cookies from "universal-cookie";
import { useStateContext } from "../../context/StateContextProvider";

import { useDispatch } from "react-redux";

import { logout } from "../../store/actions/auth";

import useStyles from "./styles";

const Home = () => {
  const dispatch = useDispatch();
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

  const log = async () => {
    const gapi = window.gapi;
    const GoogleAuth = gapi.auth2.getAuthInstance();
    const isConnectedWithGoogle = GoogleAuth.currentUser.Mb.Ba;

    if (isConnectedWithGoogle) {
      await GoogleAuth.disconnect();
      await GoogleAuth.signOut();
    }
    dispatch(logout());
  };
  return (
    <div className={classes.backGround}>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <button onClick={log}>SignOut</button>
    </div>
  );
};

export default Home;

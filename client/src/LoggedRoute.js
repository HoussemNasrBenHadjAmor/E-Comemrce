import React, { useEffect } from "react";

import { Route, Redirect } from "react-router-dom";

import Cookies from "universal-cookie";

import { useDispatch, useSelector } from "react-redux";

import { verifyProtect } from "./store/actions/auth";

const cookies = new Cookies();

const LoggedRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const { isLogged } = user;

  const id = cookies.get("id");
  const token = cookies.get("token");
  const refreshToken = cookies.get("refreshToken");

  useEffect(() => {
    try {
      if (token && id && refreshToken) {
        dispatch(verifyProtect());
      } else {
        cookies.remove("id", { path: "/" });
        cookies.remove("token", { path: "/" });
        cookies.remove("refreshToken", { path: "/" });
      }
    } catch (error) {
      return error;
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogged ? <Redirect to="/" /> : <Component {...props} />;
      }}
    />
  );
};

export default LoggedRoute;

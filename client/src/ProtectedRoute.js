import React, { useEffect } from "react";

import { Route, Redirect } from "react-router-dom";

import Cookies from "universal-cookie";

import { verifyProtect } from "./store/actions/auth";

import { useDispatch, useSelector } from "react-redux";

const cookies = new Cookies();

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const { isLogged, isLoading } = user;

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

  if (isLoading && token && id && refreshToken) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogged && !isLoading ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/sign-in" />
        );
      }}
    />
  );
};

export default ProtectedRoute;

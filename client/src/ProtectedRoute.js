import React, { useEffect } from "react";

import { Route, Redirect } from "react-router-dom";

import Cookies from "universal-cookie";

import { verifyProtect } from "./store/actions/auth";

import { useDispatch, useSelector } from "react-redux";

import Loader from "./components/Loader/Loader";

// import { Navbar, Footer } from "./components";

const cookies = new Cookies();

const ProtectedRoute = ({ component: Component, title, ...rest }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const { isLogged, isLoading } = user;

  const id = cookies.get("id");
  const token = cookies.get("token");
  const refreshToken = cookies.get("refreshToken");

  useEffect(() => {
    document.title = title;
  });

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
    return <Loader notShow />;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        return !isLoading && isLogged ? (
          <>
            {/* <Navbar /> */}
            <Component {...props} />
            {/* <Footer /> */}
          </>
        ) : (
          <Redirect to="/auth/sign-in" />
        );
      }}
    />
  );
};

export default ProtectedRoute;

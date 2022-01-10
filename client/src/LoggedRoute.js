import React, { useEffect, useState } from "react";

import { Route, Redirect } from "react-router-dom";

import Cookies from "universal-cookie";

import { verifyProtect } from "./store/actions/auth";

// import { Navbar, Footer } from "./components";

const cookies = new Cookies();

const LoggedRoute = ({ component: Component, ...rest }) => {
  const [entered, setEntered] = useState(false);

  const id = cookies.get("id");
  const token = cookies.get("token");
  const refreshToken = cookies.get("refreshToken");

  useEffect(() => {
    try {
      if (token && id && refreshToken) {
        setEntered(true);
      } else {
        cookies.remove("id", { path: "/" });
        cookies.remove("token", { path: "/" });
        cookies.remove("refreshToken", { path: "/" });
      }
    } catch (error) {
      return error;
    }
  }, []);

  // if (isLoading && entered) {
  //   return <Loader />;
  // }

  return (
    <Route
      {...rest}
      render={(props) => {
        return id && entered && token && refreshToken ? (
          <Redirect to="/" />
        ) : (
          <>
            {/* <Navbar /> */}
            <Component {...props} />
            {/* <Footer /> */}
          </>
        );
      }}
    />
  );
};

export default LoggedRoute;

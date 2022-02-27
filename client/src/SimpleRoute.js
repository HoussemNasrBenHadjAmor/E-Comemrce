import React, { useEffect } from "react";

import { Route } from "react-router-dom";

// import { Navbar, Footer } from "./components";

// import { Grid } from "@mui/material";

const SimpleRoute = ({ component: Component, title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      {/* <Navbar /> */}
      <Route render={(props) => <Component {...props} />} />
      {/* <Footer /> */}
    </>
  );
};

export default SimpleRoute;

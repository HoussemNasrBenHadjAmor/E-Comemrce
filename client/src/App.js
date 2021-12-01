import React, { useEffect, useState } from "react";

import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";

import NProgress from "react-nprogress";

import LoggedRoute from "./LoggedRoute";

import ProtectedRoute from "./ProtectedRoute";

import {
  SignIn,
  SignUp,
  Navbar,
  Products,
  Footer,
  ErrorPage,
  Cart,
  Profile,
  Categories,
  Settings,
  Home,
  About,
  Contact,
  Faq,
} from "./components";

const App = () => {
  // const location = useLocation();

  // console.log("location", location);

  // const [prevLoc, setPrevLoc] = useState("");

  // useEffect(() => {
  //   setPrevLoc(location.pathname);
  //   NProgress.start();
  //   if (location.pathname === prevLoc) {
  //     NProgress.done();
  //   }
  // }, [location, prevLoc]);

  // useEffect(() => {
  //   NProgress.done();
  // }, [prevLoc]);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <LoggedRoute exact path="/auth/sign-in" component={SignIn} />
        <LoggedRoute exact path="/auth/sign-up" component={SignUp} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={Faq} />
        <ProtectedRoute exact path="/" component={Home} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

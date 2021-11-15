import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  SignIn,
  SignUp,
  Navbar,
  Products,
  Footer,
  ErrorPage,
  Cart,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/auth/login" component={SignIn} />
        <Route exact path="/auth/sign-up" component={SignUp} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

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
  Profile,
  Categories,
  Settings,
  Home,
  About,
  Contact,
  Faq,
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
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/" component={Home} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

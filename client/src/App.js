import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";

import LoggedRoute from "./LoggedRoute";

import ProtectedRoute from "./ProtectedRoute";

import SimpleRoute from "./SimpleRoute";

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
  Test,
  Skelton,
  ForgotPass,
} from "./components";

import ScrollToTop from "./ScrollToTop";

import { CssBaseline } from "@mui/material";

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
    <>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Switch>
            <LoggedRoute exact path="/auth/sign-in" component={SignIn} />
            <LoggedRoute exact path="/auth/sign-up" component={SignUp} />
            <SimpleRoute
              exact
              path="/products"
              component={Products}
              title="Products | HNBHAStore"
            />
            <SimpleRoute
              exact
              path="/cart"
              component={Cart}
              title="Cart | HNBHAStore"
            />
            <ProtectedRoute
              exact
              path="/profile"
              component={Profile}
              title="Profile | HNBHAStore"
            />
            <SimpleRoute
              exact
              path="/categories"
              component={Categories}
              title="Categories | HNBHAStore"
            />
            <ProtectedRoute
              exact
              path="/settings"
              component={Settings}
              title="Settings & Privacy | HNBHAStore"
            />
            <SimpleRoute
              exact
              path="/about"
              component={About}
              title="About | HNBHAStore"
            />
            <SimpleRoute
              exact
              path="/contact"
              component={Contact}
              title="Contact | HNBHAStore"
            />
            <SimpleRoute
              exact
              path="/faq"
              component={Faq}
              title="FAQ | HNBHAStore"
            />
            <SimpleRoute exact path="/test" component={Test} />
            {/* <Route exact path="/skelton" component={Skelton} /> */}
            <SimpleRoute
              exact
              path="/forgot-password"
              component={ForgotPass}
              title="Forget Password | HNBHAStore"
            />
            <ProtectedRoute
              exact
              path="/"
              component={Home}
              title="HNBHAStore"
            />
            <SimpleRoute component={ErrorPage} title="404 | HNBHAStore" />
          </Switch>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

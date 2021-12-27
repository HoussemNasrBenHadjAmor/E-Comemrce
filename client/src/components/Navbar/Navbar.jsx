import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import Cookies from "universal-cookie";

import { useStateContext } from "../../context/StateContextProvider";

import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Avatar,
  Grid,
  Button,
} from "@mui/material";

import NavbarSkelton from "./NavbarSkelton/NavbarSkelton";

import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../store/actions/auth";

import { getUserForNav } from "../../store/actions/user";

import ProfileMenu from "./ProfileMenu/ProfileMenu";

import LanguageOption from "./LanguageOption/LanguageOption";

import MenuLeft from "./Menu/Menu";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import MenuIcon from "@mui/icons-material/Menu";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import LightModeIcon from "@mui/icons-material/LightMode";

import Brightness4Icon from "@mui/icons-material/Brightness4";

import LanguageIcon from "@mui/icons-material/Language";

import useStyles from "./styles";

const Navbar = () => {
  const { dark, setDark, t } = useStateContext();

  const classes = useStyles(dark);

  const dispatch = useDispatch();

  const cookies = new Cookies();

  const location = useLocation();

  const [open, setOpen] = useState(false);

  const [clicked, setClicked] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const [languageEl, setLanguageEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const isLanguageOptionOpen = Boolean(languageEl);

  const handleCloseDisplayMenuAndProfileMenu = () => {
    setAnchorEl(null);
    setClicked(false);
  };

  const handleDisplayMenuClose = () => {
    setClicked(false);
  };

  const handleDisplayMenuOpen = () => {
    setClicked(true);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageOpen = (e) => {
    setLanguageEl(e.currentTarget);
  };

  const handleCloseLanguageOption = () => {
    setLanguageEl(null);
  };

  const signOut = async () => {
    const gapi = window.gapi;

    if (gapi) {
      gapi.load("auth2", async () => {
        const GoogleAuth = await gapi.auth2.init({
          client_id: process.env.REACT_APP_GOOGLE_AUTH_KEY,
        });
        //   const isConnectedWithGoogle = GoogleAuth.currentUser.Mb.Ba;

        const isConnectedWithGoogle = await GoogleAuth.isSignedIn.get();

        if (isConnectedWithGoogle) {
          GoogleAuth.disconnect();
          GoogleAuth.signOut();
        }
      });
    }
    dispatch(logout());
  };

  const languageOptionId = "language-option-id";

  const menuId = "primary-search-account-menu";

  const isLogged =
    cookies.get("id") && cookies.get("token") && cookies.get("refreshToken");

  const { userInfoNav, loadingNav } = useSelector((state) => state.user);

  useEffect(() => {
    if (isLogged) {
      dispatch(getUserForNav());
    }
  }, []);

  if (loadingNav) {
    return <NavbarSkelton />;
  }

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="text.primary"
          >
            HNBHAStore
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {isLogged ? (
            <Grid alignItems="center" justifyContent="center" display="flex">
              <Box
                className={classes.IconButtonMargin}
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                <Grid
                  container
                  className={classes.GridProfile}
                  component={Link}
                  to="/profile"
                  color="text.primary"
                >
                  <Avatar
                    className={classes.Avatar}
                    src={
                      userInfoNav?.profilePhoto
                        ? userInfoNav.profilePhoto
                        : null
                    }
                  >
                    {!userInfoNav?.profilePhoto && userInfoNav?.firstName[0]}
                  </Avatar>

                  <Typography>{userInfoNav?.firstName}</Typography>
                </Grid>
              </Box>

              {location.pathname !== "/cart" && (
                <Box className={classes.IconButtonMargin}>
                  <IconButton
                    component={Link}
                    to="/cart"
                    aria-label="Show cart items"
                    color="inherit"
                  >
                    <Badge badgeContent={5} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Box>
              )}

              <Box>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <ArrowDropDownIcon />
                </IconButton>
              </Box>
            </Grid>
          ) : (
            <Grid
              display="flex"
              sx={{
                alignItems: { xs: "center", sm: "initial" },
                justifyContent: {
                  xs: "center",
                  sm: "initial",
                },
              }}
            >
              <Grid sx={{ display: { sm: "flex", xs: "none" } }}>
                <Button
                  className={classes.button}
                  variant={
                    location.pathname === "/auth/sign-up"
                      ? "contained"
                      : "outlined"
                  }
                  component={Link}
                  to="/auth/sign-up"
                >
                  {t("signUp_button")}
                </Button>

                <Button
                  className={classes.button}
                  variant={
                    location.pathname === "/auth/sign-up"
                      ? "outlined"
                      : "contained"
                  }
                  sx={{ marginLeft: "10px" }}
                  component={Link}
                  to="/auth/sign-in"
                >
                  {t("signIn_button")}
                </Button>
              </Grid>

              <Grid sx={{ display: { sm: "none" } }}>
                <Button
                  className={classes.button}
                  variant="contained"
                  component={Link}
                  to={
                    location.pathname === "/auth/sign-in"
                      ? "/auth/sign-up"
                      : "/auth/sign-in"
                  }
                >
                  {location.pathname === "/auth/sign-up"
                    ? t("signIn_button")
                    : t("signUp_button")}
                </Button>
              </Grid>

              <Grid paddingX="5px" sx={{ display: { sm: "flex", xs: "none" } }}>
                <IconButton
                  edge="end"
                  aria-controls={languageOptionId}
                  aria-haspopup="true"
                  onClick={handleLanguageOpen}
                  color="inherit"
                >
                  <LanguageIcon />
                </IconButton>
              </Grid>

              <Grid paddingLeft="10px">
                {!dark ? (
                  <IconButton
                    onClick={() => {
                      setDark(true);
                      cookies.set("darkMode", true, { path: "/" });
                    }}
                  >
                    <LightModeIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      setDark(false);
                      cookies.set("darkMode", false, { path: "/" });
                    }}
                  >
                    <Brightness4Icon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>

      <ProfileMenu
        menuId={menuId}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        isMenuOpen={isMenuOpen}
        handleDisplayMenuOpen={handleDisplayMenuOpen}
        handleDisplayMenuClose={handleDisplayMenuClose}
        clicked={clicked}
        handleCloseDisplayMenuAndProfileMenu={
          handleCloseDisplayMenuAndProfileMenu
        }
        signOut={signOut}
      />

      <LanguageOption
        languageOptionId={languageOptionId}
        languageEl={languageEl}
        isLanguageOptionOpen={isLanguageOptionOpen}
        handleCloseLanguageOption={handleCloseLanguageOption}
      />

      <MenuLeft
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
    </>
  );
};

export default Navbar;

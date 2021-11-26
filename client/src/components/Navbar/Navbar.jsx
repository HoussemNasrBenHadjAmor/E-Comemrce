import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import Cookies from "universal-cookie";

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

import ProfileMenu from "./ProfileMenu/ProfileMenu";

import MenuLeft from "./Menu/Menu";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import MenuIcon from "@mui/icons-material/Menu";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  const cookies = new Cookies();

  const location = useLocation();

  const [open, setOpen] = useState(false);

  const [clicked, setClicked] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

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

  const menuId = "primary-search-account-menu";

  const isLogged = cookies.get("token");

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
            color="inherit"
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
                >
                  <Avatar className={classes.Avatar}>H</Avatar>
                  <Typography color="black">Houssem</Typography>
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
            <Grid display="flex">
              <Button
                className={classes.button}
                variant={
                  location.pathname === "/auth/sign-up"
                    ? "contained"
                    : "outlined"
                }
                sx={{
                  display: { xs: "none", sm: "flex" },
                }}
                component={Link}
                to="/auth/sign-up"
              >
                Sign Up
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
                Sign In
              </Button>
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

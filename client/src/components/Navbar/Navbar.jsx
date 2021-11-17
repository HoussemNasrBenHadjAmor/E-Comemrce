import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Avatar,
  // ListItemIcon,
  ListItemText,
  // MenuItem,
  Grid,
} from "@mui/material";

import MobileMenu from "./MobileMenu/MobileMenu";

import ProfileMenu from "./ProfileMenu/ProfileMenu";

import MenuLeft from "./Menu/Menu";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import MenuIcon from "@mui/icons-material/Menu";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  const location = useLocation();

  const [open, setOpen] = useState(false);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const isMenuOpen = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.container}>
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

          <Box
            className={classes.IconButtonMargin}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Grid container alignItems="center" flexDirection="flex">
              <IconButton>
                <Avatar sx={{ height: 35, width: 35 }}>H</Avatar>
              </IconButton>
              <ListItemText>
                <Typography>Houssem</Typography>
              </ListItemText>
            </Grid>
          </Box>

          {location.pathname === "/" && (
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
        </Toolbar>
      </AppBar>

      <MobileMenu
        handleProfileMenuOpen={handleProfileMenuOpen}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
      />

      <ProfileMenu
        menuId={menuId}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        isMenuOpen={isMenuOpen}
      />

      <MenuLeft
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
    </div>
  );
};

export default Navbar;

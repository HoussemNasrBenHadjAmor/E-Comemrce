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

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

// import MoreIcon from "@mui/icons-material/MoreVert";

import MenuIcon from "@mui/icons-material/Menu";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  const location = useLocation();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const isMenuOpen = Boolean(anchorEl);

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
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
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
    </div>
  );
};

export default Navbar;

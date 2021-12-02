import React from "react";

import { Link } from "react-router-dom";

import {
  Typography,
  MenuItem,
  Menu,
  Grid,
  Divider,
  ListItemText,
  ListItemIcon,
  Avatar,
  CssBaseline,
  IconButton,
  Radio,
} from "@mui/material";
import useStyles from "./styles";

import SettingsIcon from "@mui/icons-material/Settings";

import LogoutIcon from "@mui/icons-material/Logout";

import NightsStayIcon from "@mui/icons-material/NightsStay";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import DarkModeIcon from "@mui/icons-material/DarkMode";

const ProfileMenu = ({
  menuId,
  anchorEl,
  handleMenuClose,
  handleDisplayMenuClose,
  isMenuOpen,
  handleDisplayMenuOpen,
  clicked,
  handleCloseDisplayMenuAndProfileMenu,
  signOut,
}) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleCloseDisplayMenuAndProfileMenu}
        className={classes.MenuPadding}
        transitionDuration={500}
      >
        {clicked ? (
          <>
            <div className={classes.DrawerHeader}>
              <IconButton onClick={handleDisplayMenuClose}>
                <ChevronLeftIcon fontSize="large" />
              </IconButton>
              <Typography variant="h5">Display & Accessibility</Typography>
            </div>

            <MenuItem onClick={handleDisplayMenuClose}>
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <ListItemText>Dark Mode</ListItemText>
            </MenuItem>

            <Grid item className={classes.GridDisplay}>
              <Typography
                variant="subtitle2"
                color="#999"
                className={classes.text}
              >
                Adjust the appearance of the app to reduce glare and give your
                eyes a break.
              </Typography>
            </Grid>

            <Grid item className={classes.GridDisplay}>
              <Grid className={classes.GridRadio}>
                <Typography>Off</Typography>
                <Radio name="Radio" label="Off" checked />
              </Grid>

              <Grid className={classes.GridRadio}>
                <Typography>On</Typography>
                <Radio name="Radio" label="On" />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <MenuItem onClick={handleMenuClose} component={Link} to="/profile">
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 60, height: 60 }}
                  className={classes.avatar}
                >
                  H
                </Avatar>
              </ListItemIcon>

              <Grid
                container
                spacing="3"
                flexDirection="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12}>
                  <ListItemText>
                    <Typography variant="body1">Houssem Ben Nasr</Typography>
                  </ListItemText>
                </Grid>

                <Grid item xs={12}>
                  <ListItemText>
                    <Typography variant="body2" color="GrayText">
                      See your profile
                    </Typography>
                  </ListItemText>
                </Grid>
              </Grid>
            </MenuItem>

            <Divider variant="middle" color="lightGrey" />

            <MenuItem onClick={handleMenuClose} component={Link} to="/settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText>Settings & Privacy</ListItemText>
            </MenuItem>

            <Divider variant="middle" color="lightGrey" />

            <MenuItem onClick={handleDisplayMenuOpen}>
              <ListItemIcon>
                <NightsStayIcon />
              </ListItemIcon>

              <ListItemText>Display Mode</ListItemText>

              <ListItemIcon>
                <ChevronRightIcon fontSize="large" />
              </ListItemIcon>
            </MenuItem>
            <Divider variant="middle" color="lightGrey" />

            <MenuItem
              onClick={() => {
                handleMenuClose();
                signOut();
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>

              <ListItemText>Log Out</ListItemText>
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
};

export default ProfileMenu;

import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { useStateContext } from "../../../context/StateContextProvider";

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
  FormControlLabel,
  FormControl,
  RadioGroup,
} from "@mui/material";

import useStyles from "./styles";

import SettingsIcon from "@mui/icons-material/Settings";

import LogoutIcon from "@mui/icons-material/Logout";

import NightsStayIcon from "@mui/icons-material/NightsStay";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import DarkModeIcon from "@mui/icons-material/DarkMode";

import Cookies from "universal-cookie";

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
  const { userInfo } = useSelector((state) => state.user);
  const { setDark, dark } = useStateContext();
  const classes = useStyles(dark);
  const cookies = new Cookies();
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
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      control={<Radio />}
                      label=""
                      checked={dark ? false : true}
                      onChange={() => {
                        setDark(false);
                        cookies.set("darkMode", false);
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid className={classes.GridRadio}>
                <Typography>On</Typography>
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      control={<Radio />}
                      label=""
                      checked={dark ? true : false}
                      onChange={() => {
                        setDark(true);
                        cookies.set("darkMode", true);
                      }}
                    />
                  </RadioGroup>
                </FormControl>
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
                  src={userInfo?.profilePhoto ? userInfo.profilePhoto : null}
                >
                  {!userInfo?.profilePhoto && userInfo?.firstName[0]}
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
                    <Typography variant="body1">
                      {userInfo?.firstName} {userInfo?.lastName}
                    </Typography>
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

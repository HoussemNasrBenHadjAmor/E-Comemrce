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

import LanguageIcon from "@mui/icons-material/Language";

import Cookies from "universal-cookie";

import FlagIcon from "../../ReactFlags/Flags";

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

  const { setDark, dark, currentLanguage, changeAppLanguage, t } =
    useStateContext();

  const languages = [
    {
      name: t("languages_en"),
      code: "gb",
      languageCode: "en",
    },
    {
      name: t("languages_fr"),
      code: "fr",
      languageCode: "fr",
    },
  ];

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
              <Typography variant="h5">{t("profile_menu_l5")}</Typography>
            </div>

            <MenuItem className={classes.disableHover}>
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <ListItemText>{t("profile_menu_l6")}</ListItemText>
            </MenuItem>

            <Grid item className={classes.GridDisplay}>
              <Typography
                variant="body1"
                color="text.secondary"
                className={classes.text}
              >
                {t("profile_menu_l7")}
              </Typography>
            </Grid>

            <Grid item className={classes.GridDisplay}>
              <Grid
                className={classes.GridRadio}
                onClick={() => {
                  setDark(false);
                  cookies.set("darkMode", false, { path: "/" });
                }}
                style={{ cursor: "pointer" }}
              >
                <Typography>{t("profile_menu_l8")}</Typography>
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      control={<Radio />}
                      label=""
                      checked={dark ? false : true}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid
                className={classes.GridRadio}
                onClick={() => {
                  setDark(true);
                  cookies.set("darkMode", true, { path: "/" });
                }}
                style={{ cursor: "pointer" }}
              >
                <Typography>{t("profile_menu_l9")}</Typography>
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      control={<Radio />}
                      label=""
                      checked={dark ? true : false}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>

            <MenuItem className={classes.disableHover}>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText>{t("profile_menu_l10")}</ListItemText>
            </MenuItem>

            <Grid item className={classes.GridDisplay}>
              <Typography
                variant="body1"
                color="text.secondary"
                className={classes.text}
              >
                {t("profile_menu_l11")}
              </Typography>
            </Grid>

            {languages.map(({ name, code, languageCode }) => (
              <Grid item className={classes.GridDisplay}>
                <Grid
                  key={name}
                  className={classes.GridRadio}
                  onClick={() => {
                    currentLanguage !== languageCode && changeAppLanguage();
                  }}
                  sx={{
                    opacity: currentLanguage === languageCode ? "0.5" : "1",
                    cursor: "pointer",
                  }}
                >
                  <Grid display="flex" alignItems="center">
                    <Typography paddingRight={"10px"}>{name}</Typography>
                    <FlagIcon code={code} size="1x" />
                  </Grid>

                  <FormControl>
                    <RadioGroup>
                      <FormControlLabel
                        control={<Radio />}
                        label=""
                        checked={
                          currentLanguage === languageCode ? true : false
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            ))}
          </>
        ) : (
          <>
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/profile"
              className={classes.MenuItem}
              style={{ height: "auto" }}
            >
              <ListItemIcon>
                <Avatar
                  alt="profilePhoto"
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
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      fontSize={14.5}
                    >
                      {t("profile_menu_l1")}
                    </Typography>
                  </ListItemText>
                </Grid>
              </Grid>
            </MenuItem>

            <Divider variant="middle" color="lightGrey" />

            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/settings"
              className={classes.MenuItem}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText>{t("profile_menu_l2")}</ListItemText>
            </MenuItem>

            <Divider variant="middle" color="lightGrey" />

            <MenuItem
              onClick={handleDisplayMenuOpen}
              className={classes.MenuItem}
            >
              <ListItemIcon>
                <NightsStayIcon />
              </ListItemIcon>

              <ListItemText>{t("profile_menu_l3")}</ListItemText>

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
              className={classes.MenuItem}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>

              <ListItemText>{t("profile_menu_l4")}</ListItemText>
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
};

export default ProfileMenu;

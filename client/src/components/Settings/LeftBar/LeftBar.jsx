import React from "react";

import { NavLink } from "react-router-dom";

import {
  Typography,
  MenuItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Paper,
} from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
// import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";

import * as DarkColor from "../../../utilities/DarkModeColors";
import * as LightColor from "../../../utilities/LightModeColors";

import { useStateContext } from "../../../context/StateContextProvider";

import useStyles from "./styles";

import { useLocation } from "react-router-dom";

const BarItems = [
  {
    title: "General",
    icon: SettingsIcon,
    path: "?tab=general",
  },

  {
    title: "Security and Login",
    icon: SecurityIcon,
    path: "?tab=security",
  },
  {
    title: "Display Mode",
    icon: LaptopWindowsIcon,
    path: "?tab=display",
  },
];

const LeftBar = () => {
  const { dark } = useStateContext();

  const classes = useStyles();

  const { search } = useLocation();

  return (
    <>
      <Paper className={classes.paper}>
        <div style={{ paddingTop: "25px" }}></div>
        <Typography
          paddingBottom="4px"
          variant="h5"
          color="text.primary"
          fontWeight="bold"
        >
          Settings
        </Typography>

        {BarItems.map(({ title, icon, path }) => (
          <NavLink
            exact
            to={`/settings${path}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <MenuItem
              className={classes.MenuItem}
              style={{
                backgroundColor:
                  search === path || (!search && title === "General")
                    ? dark
                      ? DarkColor.darkHover
                      : LightColor.lightHover
                    : null,
              }}
            >
              <ListItemIcon>
                <SvgIcon component={icon} />
              </ListItemIcon>
              <ListItemText>{title}</ListItemText>
            </MenuItem>
          </NavLink>
        ))}
      </Paper>
    </>
  );
};

export default LeftBar;

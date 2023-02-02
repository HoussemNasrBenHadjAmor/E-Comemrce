import React from "react";

import {
  Skeleton,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Grid,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import useStyles from "./styles";

const NavbarNotConnected = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Grid alignItems="center" justifyContent="center" display="flex">
          {["", "", "", ""].map((i) => (
            <Box sx={{ display: { xs: "none", sm: "flex" } }} key={`item-${i}`}>
              <IconButton>
                <Badge>
                  <Skeleton variant="circular" width={34} height={34} />
                </Badge>
              </IconButton>
            </Box>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarNotConnected;

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

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import MenuIcon from "@mui/icons-material/Menu";

import useStyles from "./styles";

const NavbarSkelton = () => {
  const classes = useStyles;
  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Grid alignItems="center" justifyContent="center" display="flex">
          <Box sx={{ display: { xs: "none", sm: "flex", marginX: "10px" } }}>
            <Grid container className={classes.GridProfile}>
              <Grid>
                <Skeleton
                  variant="circular"
                  width={34}
                  height={34}
                  sx={{ marginX: "5px" }}
                />
              </Grid>
              <Skeleton variant="text" width={80} />
            </Grid>
          </Box>
          <Box sx={{ marginX: "10px" }}>
            <IconButton>
              <Badge>
                <Skeleton variant="circular" width={34} height={34} />
              </Badge>
            </IconButton>
          </Box>
          <Box>
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarSkelton;

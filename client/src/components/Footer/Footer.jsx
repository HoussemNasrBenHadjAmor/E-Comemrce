import React from "react";

import { Typography, AppBar, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: { md: "30px", xs: "20px" },
        }}
      >
        <Toolbar>
          <Typography align="center" variant="body1">
            All Copyrights © reserved {new Date().getFullYear()}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;

import React from "react";

import { Divider as Divid } from "@mui/material";
const Divider = () => {
  return (
    <>
      <Divid
        variant="middle"
        // light
        textAlign="center"
        sx={{ paddingY: { md: "30px", xs: "10px" } }}
      />
    </>
  );
};

export default Divider;

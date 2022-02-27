import React from "react";

import useStyles from "./styles";

import forgot from "../../../assests/img/forgot.jpg";

const RightSide = () => {
  const classes = useStyles();

  return (
    <>
      <img src={forgot} alt="" className={classes.img} />
    </>
  );
};

export default RightSide;

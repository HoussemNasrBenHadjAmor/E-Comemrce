import React from "react";

import useStyles from "./styles";

import login from "../../../../assests/img/login.jpg";

const RightSide = () => {
  const classes = useStyles();

  return (
    <>
      <img src={login} alt="" className={classes.img} style={{}} />
    </>
  );
};

export default RightSide;

import React from "react";

import useStyles from "./styles";

import sign from "../../../../assests/img/sign.jpg";

const RightSide = () => {
  const classes = useStyles();

  return (
    <>
      <img src={sign} alt="" className={classes.img} />
    </>
  );
};

export default RightSide;

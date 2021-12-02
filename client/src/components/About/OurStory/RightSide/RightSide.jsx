import React from "react";

import useStyles from "./styles";

import aboutImg from "../../../../assests/img/aboutImg.jpg";

const RightSide = () => {
  const classes = useStyles();
  return (
    <div>
      <img src={aboutImg} alt="about-us" className={classes.Img} />
    </div>
  );
};

export default RightSide;

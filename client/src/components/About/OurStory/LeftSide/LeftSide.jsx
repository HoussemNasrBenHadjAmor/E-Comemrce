import React from "react";

import { Typography } from "@mui/material";

import useStyles from "./styles";

import { useStateContext } from "../../../../context/StateContextProvider";

const LeftSide = () => {
  const { dark } = useStateContext();

  const classes = useStyles(dark);
  return (
    <div>
      <Typography variant="h4" fontWeight="700">
        Our Story
      </Typography>
      <Typography paragraph className={classes.paragraph} textAlign="justify">
        Our focus is always on finding the best people to work with. Our bar is
        high, but you look ready to take on the challenge. We design and
        implement creative solutions to everyday business problems.
      </Typography>
      <Typography paragraph className={classes.paragraph} textAlign="justify">
        We are a team of creative consultants who help bridge the digital gap
        between companies and their clients with websites that not only serve as
        marketing platforms but also provide solutions to online business
        problems and digital marketing strategies that connect you with the
        ideal client and help create a loyal customer.
      </Typography>
    </div>
  );
};

export default LeftSide;

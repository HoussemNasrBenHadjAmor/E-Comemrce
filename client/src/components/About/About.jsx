import React from "react";

import OurTeam from "./OurTeam/OurTeam";
import OurStory from "./OurStory/OurStory";

import Divider from "./Divider";

import useStyles from "./style";

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <OurStory />
      <Divider />
      <OurTeam />
    </div>
  );
};

export default About;

import React from "react";

import { Grid, Typography } from "@mui/material";

import useStyles from "./styles";

import { useStateContext } from "../../../../context/StateContextProvider";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LeftSide = () => {
  const { dark } = useStateContext();

  const classes = useStyles(dark);

  return (
    <>
      <Typography variant="h4" gutterBottom fontWeight="700">
        Contact Details
      </Typography>
      <Typography
        gutterBottom
        className={classes.paragraph}
        color="text.secondary"
      >
        Rather than worrying about switching offices every couple years, you can
        instead stay in the same location and grow-up from your shared coworking
        space to an office that takes up an entire floor.
      </Typography>

      <Typography
        paragraph
        gutterBottom
        className={classes.paragraph}
        color="text.secondary"
      >
        Rather than worrying about switching offices every couple years, you can
        instead stay in the same location and grow-up from your shared coworking
        space to an office that takes up an entire floor.
      </Typography>

      <Grid xs={12}>
        <Grid display="flex" item xs={12} paddingY="10px" alignItems="center">
          <LocalPhoneIcon color="primary" fontSize="medium" />
          <Grid
            display="grid"
            alignItems="center"
            justifyContent="center"
            paddingX="15px"
          >
            <Typography>Phone</Typography>
            <Typography className={classes.infoDetails}>
              +216 50868672
            </Typography>
          </Grid>
        </Grid>

        <Grid display="flex" item xs={12} paddingY="10px" alignItems="center">
          <EmailIcon color="primary" fontSize="medium" />
          <Grid
            display="grid"
            alignItems="center"
            justifyContent="center"
            paddingX="15px"
          >
            <Typography>Email</Typography>
            <Typography className={classes.infoDetails}>
              houssembennasr10@gmail.com
            </Typography>
          </Grid>
        </Grid>

        <Grid display="flex" item xs={12} paddingY="10px" alignItems="center">
          <LocationOnIcon color="primary" fontSize="medium" />
          <Grid
            display="grid"
            alignItems="center"
            justifyContent="center"
            paddingX="15px"
          >
            <Typography>Address</Typography>
            <Typography className={classes.infoDetails}>
              Rues Les Oranges, Maatmeur, Monastir, Tunisia
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LeftSide;

import React from "react";

import { Grid, Typography, Button } from "@mui/material";

import { useStateContext } from "../../../context/StateContextProvider";

import me from "../../../assests/img/me.jpg";

import useStyles from "./styles";
const OurTeam = () => {
  const { dark } = useStateContext();

  const classes = useStyles(dark);

  const team = [
    {
      name: "Houssem Ben Nasr",
      img: me,
      mission: "MUI lover",
    },

    {
      name: "Malek Kaabia",
      img: me,
      mission: "Senior Frontend Developer",
    },

    {
      name: "Aymen Faleh",
      img: me,
      mission: "SEO at Comoti",
    },
    {
      name: "Chedi Saad",
      img: me,
      mission: "Senior Backend Developer",
    },
    {
      name: "Nadhem Faidi",
      img: me,
      mission: "Senior Frontend Developer",
    },
    {
      name: "Sadek Mhimid",
      img: me,
      mission: "SEO at Comoti",
    },
  ];
  return (
    <div className={classes.paddingYContainer}>
      <Typography
        variant="h6"
        align="center"
        fontWeight="500"
        gutterBottom
        color="text.secondary"
      >
        OUR TEAM
      </Typography>

      <Typography variant="h4" fontWeight="700" gutterBottom align="center">
        Small team. Big hearts.
      </Typography>

      <Typography
        variant="h6"
        fontWeight="400"
        gutterBottom
        align="center"
        color="text.secondary"
      >
        Our focus is always on finding the best people to work with. Our bar is
        high, but you look ready to take on the challenge.
      </Typography>

      <Grid container spacing={2} paddingY="25px">
        {team.map(({ name, img, mission }, i) => (
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Grid
              index={i}
              alignItems="center"
              display="flex"
              className={classes.GridItemContainer}
            >
              <img src={img} alt="" className={classes.Img} />

              <Grid display="grid" paddingX="15px">
                <Typography
                  variant="h6"
                  fontWeight="500"
                  className={classes.personName}
                  textAlign="left"
                >
                  {name}
                </Typography>

                <Typography
                  variant="subtitle1"
                  fontWeight="400"
                  className={classes.personMission}
                  textAlign="left"
                  color="text.secondary"
                  fontSize="1rem"
                >
                  {mission}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid sx={{ paddingTop: { md: "50px", sx: "20px" } }}>
        <Grid
          alignItems="center"
          display={{ sm: "flex", xs: "grid" }}
          justifyContent="space-around"
        >
          <Grid display="grid">
            <Typography variant="h5" fontWeight="500" gutterBottom>
              Interested in joining our team?
            </Typography>

            <Typography gutterBottom fontWeight="400">
              Hit us up and we'll get in touch with you.
            </Typography>
          </Grid>

          <Button variant="contained" color="info" className={classes.Button}>
            Apply
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurTeam;

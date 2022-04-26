import React from "react";

import { Grid } from "@mui/material";

import GoogleMapReact from "google-map-react";

const RightSide = () => {
  const center = {
    lat: 35.7488110399058,
    lng: 10.692079067230225,
  };

  return (
    <Grid
      xs={12}
      sx={{
        height: { md: "80vh", xs: "40vh" },
        padding: { md: "0px", xs: "0px 0px 40px 0px" },
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        zoom={14}
        options={{
          mapTypeControl: true,
          disableDefaultUI: false,
          zoomControl: true,
        }}
      />
    </Grid>
  );
};

export default RightSide;

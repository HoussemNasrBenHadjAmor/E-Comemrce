import React, { useState } from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
  Grid,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import FavoriteIcon from "@mui/icons-material/Favorite";

import useStyles from "./styles";

const Product = ({ product: { assets, price, description, name } }) => {
  const classes = useStyles();

  const [hover, setHover] = useState(false);

  return (
    <Card sx={{ cursor: "pointer" }}>
      <Grid
        sx={{ position: "relative" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Grid
          className={classes.heart}
          sx={{
            display: { xs: "flex", sm: hover ? "flex" : "none" },
          }}
        >
          <Tooltip title="Add to Cart">
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip>
        </Grid>

        <CardMedia
          component="img"
          className={classes.image}
          image={assets[0].url}
        />
      </Grid>

      <CardContent>
        <Typography textAlign="center" variant="subtitle1" fontWeight={500}>
          {name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={400}
          fontSize="13px"
          gutterBottom
          dangerouslySetInnerHTML={{
            __html:
              description.length > 70
                ? description.slice(0, 70) + "..."
                : description,
          }}
          textAlign="center"
        />

        <Typography
          marginTop="15px"
          fontWeight={900}
          variant="body1"
          textAlign="center"
          fontSize="12px"
        >
          {price.formatted} TND
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;

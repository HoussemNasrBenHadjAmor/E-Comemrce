import React from "react";

import { CardMedia, CardContent, Grid, Skeleton } from "@mui/material";

const ProductLoader = () => {
  const tab = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const ProductLoading = () => (
    <Grid>
      <CardMedia>
        <Skeleton width="100%" height={300} animation="wave" />
      </CardMedia>

      <CardContent sx={{ marginTop: "-40px" }}>
        <Skeleton
          variant="text"
          sx={{
            textAlign: "center",
          }}
          width="50%"
          height={20}
        />

        <Skeleton variant="text" sx={{ textAlign: "center" }} height={50} />

        <Skeleton
          variant="text"
          sx={{ textAlign: "center" }}
          width="30%"
          height={20}
        />
      </CardContent>
    </Grid>
  );

  return (
    <Grid
      container
      sx={{ paddingX: { sm: 5, xs: 2 } }}
      spacing={3}
      alignItems="center"
    >
      {tab.map((i) => (
        <Grid key={i} item xs={12} md={3} sm={6}>
          <ProductLoading />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductLoader;

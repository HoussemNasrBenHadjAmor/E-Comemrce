import React from "react";

import { Grid } from "@mui/material";

import Product from "./Product/Product";

import { ProductLoader, ProductError } from "../../../components";

const Products = ({ products, loadingPro, wrongFilter }) => {
  if (loadingPro) {
    return <ProductLoader />;
  }

  if (products?.meta?.pagination?.total === 0) {
    return <ProductError />;
  }

  return (
    <Grid
      container
      sx={{ paddingX: { sm: 5, xs: 2 } }}
      spacing={3}
      alignItems="center"
    >
      {products?.data?.map((product, i) => (
        <Grid item key={i} xs={12} md={3} sm={6}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;

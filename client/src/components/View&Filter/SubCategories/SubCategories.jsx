import React, { useState } from "react";

import { Grid, Typography } from "@mui/material";

import ScrollContainer from "react-indiana-drag-scroll";

import { useLocation, useHistory } from "react-router-dom";

import useStyles from "./styles";

import { useStateContext } from "../../../context/StateContextProvider";

import "./subCategories.css";

const Cat = [
  "Electronics",
  "Packs",
  "Imprimés",
  "Licences",
  "Oversize",
  "Manches Langues",
  "Polos",
];

const SubCategories = () => {
  const { dark } = useStateContext();

  const classes = useStyles(dark);

  const { pathname } = useLocation();

  const history = useHistory();

  const pathnameName = pathname.slice(10, pathname.length).toLowerCase();

  const ProductsCadre = ({ cat }) => {
    const path = pathname.slice(0, 10).toLowerCase() + cat.toLowerCase();

    return (
      <Grid sx={{ marginY: "5px" }}>
        <Grid
          key={cat}
          onClick={() => {
            history.replace(path);
          }}
          className={
            pathnameName === cat.toLowerCase() ? classes.cadre2 : classes.cadre
          }
        >
          <Typography>{cat}</Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid display="flex" alignItems="center" justifyContent="center">
      <ScrollContainer vertical={false} horizontal={true}>
        <Grid className={classes.container}>
          {Cat.map((cat) => (
            <ProductsCadre cat={cat} />
          ))}
        </Grid>
      </ScrollContainer>
    </Grid>
  );
};

export default SubCategories;

import React from "react";

import { Grid, Typography } from "@mui/material";

import ScrollContainer from "react-indiana-drag-scroll";

import { useLocation, useHistory, Link } from "react-router-dom";

import useStyles from "./styles";

import { useStateContext } from "../../../context/StateContextProvider";

import { SubCategoriesLoader } from "../../../components";

import "./subCategories.css";

const SubCategories = ({ subCategories, loadingSub, setFilterOpen }) => {
  const { dark } = useStateContext();

  const classes = useStyles(dark);

  const { pathname, search } = useLocation();

  const history = useHistory();

  const searchName = search && search.match({ regexp: "?sub_cat" }).input;

  const searchSubCatName = searchName.slice(9, searchName.length);

  const seeAll = {
    name: "See All",
  };

  const ProductsCadre = ({ cat: { slug, name }, remove }) => {
    const newPath = `${pathname}?sub_cat=${slug}`;

    const removedSubCatPath = `${pathname}`;

    return (
      <Grid sx={{ marginY: "5px" }}>
        <Grid
          key={slug}
          component={Link}
          to={remove ? removedSubCatPath : newPath}
          onClick={() => setFilterOpen(false)}
          className={
            searchName && searchSubCatName === slug
              ? classes.cadre2
              : !searchName && remove
              ? classes.cadre2
              : classes.cadre
          }
        >
          <Typography>{name}</Typography>
        </Grid>
      </Grid>
    );
  };

  if (loadingSub) {
    return <SubCategoriesLoader />;
  }

  return (
    <Grid display="flex" alignItems="center" justifyContent="center">
      <ScrollContainer vertical={false} horizontal={true}>
        <Grid className={classes.container}>
          <ProductsCadre cat={seeAll} remove={true} />

          {subCategories?.children?.map((cat) => (
            <ProductsCadre cat={cat} />
          ))}
        </Grid>
      </ScrollContainer>
    </Grid>
  );
};

export default SubCategories;

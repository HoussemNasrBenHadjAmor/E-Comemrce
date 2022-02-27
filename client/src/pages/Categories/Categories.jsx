import React, { useState, useEffect } from "react";

import { useLocation, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@mui/material";

import SubAndFilter from "./SubAndFilter/SubAndFilter";

import Products from "./Products/Products";

import { ErrorPage } from "../../components";

import { getSubCat, getProductsBySlug } from "../../store/actions/category";

const Categories = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const [wrongFilter, setWrongFilter] = useState(false);

  const { pathname, search } = useLocation();

  const history = useHistory();

  const dispatch = useDispatch();

  const { loadingSub, subCategories, loadingPro, products } = useSelector(
    (state) => state.category
  );

  const subCatName = pathname.slice(10, pathname.length).toLowerCase();

  const searchName = search && search.match({ regexp: "?sub_cat" }).input;

  const searchSubCatName = searchName.slice(9, searchName.length);

  const verifySubCatSlugExist = (subCategories, searchSubCatName) => {
    let error = true;
    subCategories?.children?.map(({ slug }) => {
      if (slug === searchSubCatName) {
        error = false;
      }
    });
    return error;
  };

  useEffect(() => {
    if (!search) {
      dispatch(getSubCat(subCatName));
      dispatch(getProductsBySlug(subCatName));
    }
    if (search) {
      dispatch(getSubCat(subCatName));
    }
  }, [pathname]);

  useEffect(() => {
    if (search) {
      if (searchSubCatName) {
        if (subCategories) {
          const error = verifySubCatSlugExist(subCategories, searchSubCatName);
          if (!error) {
            setWrongFilter(false);
            dispatch(getProductsBySlug(searchSubCatName));
          } else {
            setWrongFilter(true);
          }
        }
      } else {
        history.push(`/category/${subCatName}`);
      }
    } else {
      dispatch(getProductsBySlug(subCatName));
    }
  }, [search, subCategories]);

  if (
    (!loadingSub && subCategories?.error) ||
    (products?.error && !loadingPro) ||
    wrongFilter
  ) {
    return <ErrorPage />;
  }

  return (
    <Grid minHeight="100vh">
      <SubAndFilter
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        loadingSub={loadingSub}
        subCategories={subCategories}
      />

      <Products loadingPro={loadingPro} products={products} wrongFilter />
    </Grid>
  );
};

export default Categories;

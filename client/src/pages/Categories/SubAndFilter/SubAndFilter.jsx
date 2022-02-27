import React from "react";

import { Grid, IconButton, Tooltip } from "@mui/material";

import SubCategories from "../SubCategories/SubCategories";

import FilterTools from "../FilterTools/FilterTools";

import Filter from "../Filter/Filter";

const ViewAndFilter = ({
  filterOpen,
  setFilterOpen,
  loadingSub,
  subCategories,
}) => {
  return (
    <>
      <Grid
        sx={{
          paddingTop: "90px",
          paddingBottom: { sx: "10px", sm: "30px" },
          alignItems: "center",
          justifyContent: "center",
          paddingX: { md: "80px", xs: "10px" },
          display: { md: "flex", sm: "column" },
        }}
      >
        {subCategories?.children?.length !== 0 && (
          <Grid
            sm="12"
            md="9"
            sx={{
              paddingBottom: { xs: "10px", md: "0px" },
            }}
          >
            <SubCategories
              setFilterOpen={setFilterOpen}
              subCategories={subCategories}
              loadingSub={loadingSub}
            />
          </Grid>
        )}

        <Grid
          sm="12"
          md="3"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: { md: "0px", xs: "10px" },
            marginLeft: { md: "20px", sm: "0px" },
          }}
        >
          <FilterTools setFilterOpen={setFilterOpen} loadingSub={loadingSub} />
        </Grid>

        <Grid>
          <Filter filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
        </Grid>
      </Grid>
    </>
  );
};

export default ViewAndFilter;

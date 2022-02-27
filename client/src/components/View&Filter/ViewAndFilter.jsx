import React, { useState } from "react";

import { Grid, IconButton, Tooltip } from "@mui/material";

import SubCategories from "./SubCategories/SubCategories";

import SearchIcon from "@mui/icons-material/Search";

import Filter from "./Filter/Filter";

import FilterListIcon from "@mui/icons-material/FilterList";

import ViewCompactIcon from "@mui/icons-material/ViewCompact";

import ViewColumnIcon from "@mui/icons-material/ViewColumn";

import useStyles from "./styles";

const ViewAndFilter = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
      <Grid
        sx={{
          paddingY: "90px",
          alignItems: "center",
          justifyContent: "center",
          paddingX: { md: "80px", xs: "10px" },
          display: { md: "flex", sm: "column" },
        }}
      >
        <Grid
          sm="12"
          md="9"
          sx={{
            paddingBottom: { xs: "10px", md: "0px" },
          }}
        >
          <SubCategories />
        </Grid>

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
          <Tooltip title="Display View 1">
            <Grid paddingX="10px" sx={{ cursor: "pointer" }}>
              <IconButton color="inherit">
                <ViewCompactIcon />
              </IconButton>
            </Grid>
          </Tooltip>

          <Tooltip title="Display View 2">
            <Grid paddingX="10px" sx={{ cursor: "pointer" }}>
              <IconButton color="inherit">
                <ViewColumnIcon />
              </IconButton>
            </Grid>
          </Tooltip>

          <Tooltip title="Search">
            <Grid paddingX="10px" sx={{ cursor: "pointer" }}>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
            </Grid>
          </Tooltip>

          <Tooltip title="Filter">
            <Grid paddingX="10px" sx={{ cursor: "pointer" }}>
              <IconButton
                color="inherit"
                onClick={() => {
                  setFilterOpen(true);
                }}
              >
                <FilterListIcon />
              </IconButton>
            </Grid>
          </Tooltip>
        </Grid>

        <Grid>
          <Filter filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
        </Grid>
      </Grid>
    </>
  );
};

export default ViewAndFilter;

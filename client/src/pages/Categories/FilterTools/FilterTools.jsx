import React from "react";

import { Grid, Tooltip, IconButton } from "@mui/material";

import { FilterToolLoader } from "../../../components";

import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";

const FilterTools = ({ setFilterOpen, loadingSub }) => {
  if (loadingSub) {
    return <FilterToolLoader />;
  }

  return (
    <>
      <Tooltip title="Display View 1">
        <Grid
          paddingX="10px"
          sx={{ cursor: "pointer", display: { md: "flex", xs: "none" } }}
        >
          <IconButton color="inherit">
            <ViewCompactIcon />
          </IconButton>
        </Grid>
      </Tooltip>

      <Tooltip title="Display View 2">
        <Grid
          paddingX="10px"
          sx={{ cursor: "pointer", display: { md: "flex", xs: "none" } }}
        >
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
    </>
  );
};

export default FilterTools;

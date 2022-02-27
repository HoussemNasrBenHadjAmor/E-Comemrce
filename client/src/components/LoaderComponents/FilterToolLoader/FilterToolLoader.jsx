import React from "react";

import { Grid, IconButton, Skeleton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";

const FilterToolLoader = () => {
  return (
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
      <Grid
        paddingX="5px"
        sx={{ cursor: "pointer", display: { md: "flex", xs: "none" } }}
      >
        <IconButton color="inherit">
          <Skeleton variant="circular" width={30} height={30}>
            <ViewCompactIcon />
          </Skeleton>
        </IconButton>
      </Grid>

      <Grid
        paddingX="5px"
        sx={{ cursor: "pointer", display: { md: "flex", xs: "none" } }}
      >
        <IconButton color="inherit">
          <Skeleton variant="circular" width={30} height={30}>
            <ViewColumnIcon />
          </Skeleton>
        </IconButton>
      </Grid>

      <Grid paddingX="5px" sx={{ cursor: "pointer" }}>
        <IconButton color="inherit">
          <Skeleton variant="circular" width={30} height={30}>
            <SearchIcon />
          </Skeleton>
        </IconButton>
      </Grid>

      <Grid paddingX="5px" sx={{ cursor: "pointer" }}>
        <IconButton color="inherit">
          <Skeleton variant="circular" width={30} height={30}>
            <FilterListIcon />
          </Skeleton>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default FilterToolLoader;

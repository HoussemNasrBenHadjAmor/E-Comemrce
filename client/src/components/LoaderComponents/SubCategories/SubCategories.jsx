import React from "react";

import { Grid, Skeleton } from "@mui/material";

import ScrollContainer from "react-indiana-drag-scroll";

import useStyles from "./styles";

import { useStateContext } from "../../../context/StateContextProvider";

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

  const ProductsCadre = () => {
    return (
      <Grid>
        <Grid className={classes.cadre}>
          <Skeleton
            variant="rectangular"
            width={100}
            height={45}
            animation="wave"
            sx={{ borderRadius: "4px" }}
          />
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

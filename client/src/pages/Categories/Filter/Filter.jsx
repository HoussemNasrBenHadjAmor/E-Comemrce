import React from "react";

import { CSSTransition } from "react-transition-group";

import ScrollContainer from "react-indiana-drag-scroll";

import { Grid, Typography, IconButton, Divider } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { useStateContext } from "../../../context/StateContextProvider";

import useStyles from "./styles";

import "./filter.css";

const Filter = ({ filterOpen, setFilterOpen }) => {
  const { dark } = useStateContext();

  const classes = useStyles(dark);

  const CustomeDivider = () => (
    <Grid paddingY="3px">
      <Divider sx={{ borderBottomWidth: 8 }} />
    </Grid>
  );

  return (
    <CSSTransition
      classNames="filter"
      in={filterOpen}
      timeout={500}
      unmountOnExit
    >
      <Grid className={classes.containerBody}>
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          marginX="5px"
          paddingY="5px"
        >
          <Grid alignItems="center" justifyContent="center" display="flex">
            <Typography
              textAlign="center"
              variant="h6"
              sx={{ textTransform: "uppercase", fontSize: "16px !important" }}
              color="text.primary"
            >
              Filter By
            </Typography>
          </Grid>

          <Grid
            alignItems="center"
            justifyContent="center"
            display="flex"
            position="absolute"
            sx={{ top: 0, right: 0, bottom: 0 }}
          >
            <IconButton
              onClick={() => {
                setFilterOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>

        <CustomeDivider />

        <Grid className={classes.priceBigContainer}>
          <Typography
            gutterBottom
            fontSize="17px"
            fontWeight={500}
            color="text.primary"
          >
            Sort By
          </Typography>

          <ScrollContainer vertical={false} horizontal={true}>
            <Grid className={classes.priceSmallContainer}>
              <Grid className={classes.price}>
                <Typography fontSize="14px">
                  Price In Ascending Order
                </Typography>
              </Grid>
              <Grid className={classes.price}>
                <Typography fontSize="14px">
                  Price In Descending Order
                </Typography>
              </Grid>
            </Grid>
          </ScrollContainer>
        </Grid>

        <CustomeDivider />
      </Grid>
    </CSSTransition>
  );
};

export default Filter;

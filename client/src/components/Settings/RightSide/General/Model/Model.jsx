import React from "react";

import { Divider, Grid, Tooltip, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import useStyles from "./styles";

import EditArea from "../EditArea/EditArea";

import { useStateContext } from "../../../../../context/StateContextProvider";

const Model = ({
  name,
  label,
  clicked,
  setClicked,
  loading,
  field,
  setField,
  errorMessage,
  user,
}) => {
  const { dark } = useStateContext();

  const classes = useStyles(dark);

  const email = "Email";

  const isEmail = label && label === email;

  const isName = label && label !== email;

  const isLong = isName && name?.length > 20;

  const isEmailLong = isEmail && name?.length > 30;

  return (
    <>
      {clicked ? (
        <EditArea
          label={label}
          value={name}
          field={field}
          setField={setField}
          loading={loading}
          setClicked={setClicked}
          errorMessage={errorMessage}
          clicked={clicked}
          user={user}
        />
      ) : (
        <>
          <Grid
            className={classes.info}
            onClick={() => {
              setClicked(true);
            }}
          >
            <Grid className={classes.infoName}>
              <Typography color="text.primary" minWidth="200px">
                {label}
              </Typography>

              {isName && (
                <Tooltip title={isLong ? name : ""}>
                  <Typography color="text.secondary" fontSize="17px">
                    {isLong ? name?.substring(0, 15) + "..." : name}
                  </Typography>
                </Tooltip>
              )}

              {isEmail && (
                <Tooltip title={isEmailLong ? email : ""}>
                  <Typography color="text.secondary" fontSize="17px" noWrap>
                    {isEmailLong ? name?.substring(0, 25) + "..." : name}
                  </Typography>
                </Tooltip>
              )}
            </Grid>

            <Tooltip title="Edit">
              <EditIcon color="primary" />
            </Tooltip>
          </Grid>
        </>
      )}
      <Divider sx={{ marginY: "5px" }} />
    </>
  );
};

export default Model;

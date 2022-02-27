import React, { useState } from "react";

import { Grid, TextField, Button } from "@mui/material";


// import { useStateContext } from "../../context/StateContextProvider";

import { updateUser } from "../../store/actions/user";

import { useDispatch } from "react-redux";

const Step = () => {
  const [field, setField] = useState("");
  // const { update } = useStateContext();

  const disptach = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // update({ firstName: field });
    disptach(updateUser({ firstName: field }));
  };

  return (
    <>
      <Grid padding="50px">
        <TextField
          label="FirstName"
          onChange={(e) => setField(e.target.value)}
        />
      </Grid>
      <Grid padding="50px">
        <Button variant="contained" onClick={(e) => handleClick(e)}>
          Click Me !
        </Button>
      </Grid>
    </>
  );
};

export default Step;

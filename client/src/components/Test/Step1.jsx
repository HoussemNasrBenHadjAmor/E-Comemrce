import React from "react";

// import { useStateContext } from "../../context/StateContextProvider";

import { useSelector } from "react-redux";

const Step1 = () => {
  // const { myUser } = useStateContext();
  const { test } = useSelector((state) => state.user);
  return (
    <div>
      <h1>User is {test}</h1>
    </div>
  );
};

export default Step1;

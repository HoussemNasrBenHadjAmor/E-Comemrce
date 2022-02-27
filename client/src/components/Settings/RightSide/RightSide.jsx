import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

import General from "./General/General";
import Security from "./Security/Security";
import Display from "./Display/Display";
import Loader from "../../Loader/Loader";

import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../../../store/actions/user";

const generalPath = "?tab=general";
const securityPath = "?tab=security";
const displayPath = "?tab=display";

const RightSide = () => {
  const { search } = useLocation();

  const { loaderGetter, userInfo, loading, errorMessage } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (loaderGetter) {
    return <Loader height="50vh" />;
  }

  {
    switch (search) {
      case generalPath:
        return (
          <General
            loading={loading}
            userInfo={userInfo}
            errorMessage={errorMessage}
          />
        );

      case securityPath:
        return (
          <Security
            loading={loading}
            userInfo={userInfo}
            errorMessage={errorMessage}
          />
        );

      case displayPath:
        return <Display />;

      default:
        return (
          <General
            loading={loading}
            userInfo={userInfo}
            errorMessage={errorMessage}
          />
        );
    }
  }
};

export default RightSide;

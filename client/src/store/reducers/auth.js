import * as actions from "../constants/authActionTypes";

const initialeState = {
  isLogged: false,
  isLoading: true,
  userLogged: false,
  errorMessage: "",
  signErrorMessage: null,
};

export default (auth = initialeState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...auth,
        userLogged: true,
        errorMessage: "",
      };

    case actions.LOGIN_FAILURE:
      return {
        ...auth,
        userLogged: false,
        errorMessage: action.payload,
      };

    case actions.LOGIN_GOOGLE_SUCCESS:
      return {
        ...auth,
        userLogged: true,
        errorMessage: "",
      };

    case actions.SIGNUP_FAILURE:
      return { ...auth, signErrorMessage: action.payload };

    case actions.SIGNUP_SUCCESS:
      return { ...auth, errorMessage: "" };

    case actions.LOGOUT_SUCCESS:
      return {};

    case actions.LOGOUT_FAILURE:
      return {};

    // case actions.LOADING_PROTECT_ROUTES:
    //   return { ...auth, isLoading: true };

    case actions.SUCCESS_PROTECT_ROUTES:
      return { ...auth, isLogged: true, isLoading: false };

    case actions.FAILED_PROTECT_ROUTES:
      return {
        ...auth,
        isLogged: false,
        isLoading: false,
      };

    default:
      return auth;
  }
};

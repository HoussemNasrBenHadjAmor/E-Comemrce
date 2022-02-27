import * as actions from "../constants/userActionTypes";

const initialState = {
  // loadingNav: false,
  // loading: false,
  userInfo: null,
  errorMessage: null,
};

export default (user = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_UPDATE:
      return {
        ...user,
        loading: true,
        loadingNav: true,
        errorMessage: null,
      };

    case actions.UPDATE_SUCCESS:
      return {
        ...user,
        loading: false,
        loadingNav: false,
        userInfo: action.payload,
        userInfoNav: action.payload,
        errorMessage: null,
      };

    case actions.UPDATE_FAILURE:
      return {
        ...user,
        loading: false,
        loadingNav: false,
        errorMessage: action.payload,
      };

    case actions.REQUEST_GET_USER:
      return {
        ...user,
        userInfo: null,
        errorMessage: null,
        loading: false,
        loaderGetter: true,
      };

    case actions.GET_USER_SUCCESS:
      return {
        ...user,
        userInfo: action.payload,
        errorMessage: null,
        loading: false,
        loaderGetter: false,
      };

    case actions.GET_USER_FAILURE:
      return {
        ...user,
        loading: false,
        loaderGetter: true,
        userInfo: null,
        errorMessage: null,
      };

    case actions.REQUEST_GET_USER_FOR_NAV:
      return {
        ...user,
        userInfoNav: null,
        errorMessage: null,
        loadingNav: true,
        loading: false,
      };

    case actions.GET_USER_FOR_NAV_SUCCESS:
      return {
        ...user,
        userInfoNav: action.payload,
        errorMessage: null,
        loading: false,
        loadingNav: false,
      };
    case actions.GET_USER_FOR_NAV_FAILURE:
      return {
        ...user,
        loading: false,
        loadingNav: true,
        userInfoNav: null,
        errorMessage: null,
      };

    case actions.REQUEST_CHANGE_PASS:
      return {
        ...user,
        loading: true,
        errorMessage: null,
      };

    case actions.CHANGE_PASS_SUCCESS:
      return {
        ...user,
        loading: false,
        errorMessage: null,
      };

    case actions.CHANGE_PASS_FAILURE: {
      return {
        ...user,
        loading: false,
        errorMessage: action.payload,
      };
    }

    default:
      return user;
  }
};

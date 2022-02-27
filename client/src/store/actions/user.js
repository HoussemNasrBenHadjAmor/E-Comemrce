import * as actions from "../constants/userActionTypes";

import * as api from "../../api/userApi";

export const getUser = () => async (dispatch) => {
  dispatch({ type: actions.REQUEST_GET_USER });
  try {
    const { data: data } = await api.getUser();
    dispatch({ type: actions.GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.GET_USER_FAILURE });
  }
};

export const getUserForNav = () => async (dispatch) => {
  dispatch({ type: actions.REQUEST_GET_USER_FOR_NAV });
  try {
    const { data: data } = await api.getUser();

    dispatch({ type: actions.GET_USER_FOR_NAV_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.GET_USER_FOR_NAV_FAILURE });
  }
};

export const updateUser = (user) => async (dispatch) => {
  dispatch({ type: actions.REQUEST_UPDATE });
  try {
    const { data: data } = await api.updateUser(user);
    dispatch({ type: actions.UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actions.UPDATE_FAILURE,
      payload:
        error?.response && error?.response?.data
          ? error?.response?.data
          : error?.response,
    });
  }
};

export const changePass = (pass) => async (dispatch) => {
  dispatch({ type: actions.REQUEST_CHANGE_PASS });
  try {
    await api.changePass(pass);
    dispatch({ type: actions.CHANGE_PASS_SUCCESS });
  } catch (error) {
    dispatch({
      type: actions.CHANGE_PASS_FAILURE,
      payload:
        error?.response && error?.response?.data
          ? error?.response?.data
          : error?.response,
    });
  }
};

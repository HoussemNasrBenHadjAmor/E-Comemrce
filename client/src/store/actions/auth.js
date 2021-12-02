import * as actions from "../constants/authActionTypes";

import Cookies from "universal-cookie";

import * as api from "../../api/authApi";

const cookie = new Cookies();

export const verifyProtect = () => async (dispatch) => {
  try {
    const data = await api.verifiyProtectRoute();
    dispatch({ type: actions.SUCCESS_PROTECT_ROUTES, payload: data });
    return data;
  } catch (error) {
    dispatch({ type: actions.FAILED_PROTECT_ROUTES, payload: error });
    cookie.remove("id", { path: "/" });
    cookie.remove("token", { path: "/" });
    cookie.remove("refreshToken", { path: "/" });
    return error;
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const data = await api.login(user);
    dispatch({ type: actions.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actions.LOGIN_FAILURE,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.response,
    });
  }
};

export const googleLogin = (id) => async (dispatch) => {
  try {
    const data = await api.googleLogin(id);
    dispatch({ type: actions.LOGIN_GOOGLE_SUCCESS, payload: data });
  } catch (error) {
    return error;
  }
};

export const signup = (newUser) => async (dispatch) => {
  try {
    const data = await api.signup(newUser);
    dispatch({ type: actions.SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actions.SIGNUP_FAILURE,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.response,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const data = await api.logout();
    dispatch({ type: actions.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.LOGOUT_FAILURE, payload: error });
    cookie.remove("id", { path: "/" });
    cookie.remove("token", { path: "/" });
    cookie.remove("refreshToken", { path: "/" });
    window.location.href = "/auth/sign-in";
    return error;
  }
};

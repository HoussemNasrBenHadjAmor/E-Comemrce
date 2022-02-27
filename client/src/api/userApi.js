import axios from "axios";

import Cookies from "universal-cookie";

import { axiosJWT } from "./axiosInterceptor";

axios.defaults.withCredentials = true;

const cookies = new Cookies();

const url = process.env.REACT_APP_API_USER_KEY;

export const updateUser = (data) =>
  axiosJWT.put(`${url}/${cookies.get("id")}`, data, {
    headers: {
      ["x-access-token"]: cookies.get("token"),
    },
  });

export const getUser = () =>
  axiosJWT.get(`${url}/${cookies.get("id")}`, {
    headers: {
      ["x-access-token"]: cookies.get("token"),
    },
  });

export const changePass = (data) =>
  axiosJWT.put(`${url}/change-pass/${cookies.get("id")}`, data, {
    headers: {
      ["x-access-token"]: cookies.get("token"),
    },
  });

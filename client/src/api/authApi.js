import axios from "axios";
import Cookies from "universal-cookie";
import { axiosJWT } from "./axiosInterceptor";

axios.defaults.withCredentials = true;

const cookie = new Cookies();

const url = process.env.REACT_APP_API_AUTH_KEY;

export const login = (data) => axios.post(`${url}/login`, data);

export const googleLogin = (id) => axios.post(`${url}/google`, id);

export const signup = (data) => axios.post(`${url}/sign`, data);

export const logout = () =>
  axiosJWT.post(
    `${url}/logout`,
    {
      refreshToken: cookie.get("refreshToken"),
    },
    {
      headers: {
        ["x-access-token"]: cookie.get("token"),
      },
    }
  );

export const verifiyProtectRoute = () =>
  axiosJWT.post(
    `${url}/protected`,
    {
      refreshToken: cookie.get("refreshToken"),
      id: cookie.get("id"),
    },
    {
      headers: {
        ["x-access-token"]: cookie.get("token"),
      },
    }
  );

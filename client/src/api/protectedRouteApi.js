import Cookies from "universal-cookie";

import { axiosJWT } from "./axiosInterceptor";

const urlAuth = process.env.REACT_APP_API_AUTH_KEY;

const cookies = new Cookies();

export const verify = async () => {
  try {
    const {
      data: { data },
    } = await axiosJWT.post(`${urlAuth}/protected`, {
      id: cookies.get("id"),
      token: cookies.get("token"),
      refreshToken: cookies.get("refreshToken"),
    });
    return data;
  } catch (error) {
    return error;
  }
};

// export const verify = async () =>
//   await axiosJWT.post(`${urlAuth}/protected`, {
//     id: cookies.get("id"),
//     token: cookies.get("token"),
//     refreshToken: cookies.get("refreshToken"),
//   });

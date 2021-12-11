import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";

axios.defaults.withCredentials = true;

const cookie = new Cookies();

export const axiosJWT = axios.create();

const url = process.env.REACT_APP_API_AUTH_KEY;

const refresh = async () => {
  try {
    const { data: data } = await axios.post(`${url}/refresh`, {
      refreshToken: cookie.get("refreshToken"),
    });
    // console.log("data", data);
    return data;
  } catch (error) {
    return error;
  }
};

axiosJWT.interceptors.request.use(
  async (config) => {
    let currentDate = new Date();
    const decodedToken = jwt_decode(cookie.get("token"));
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      const res = await refresh();
      config.headers["x-access-token"] = res.newAccessToken;
      config.data = {
        id: cookie.get("id"),
        refreshToken: res.newRefreshToken,
      };
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

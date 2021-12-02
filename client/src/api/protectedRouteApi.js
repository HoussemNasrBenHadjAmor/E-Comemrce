import axios from "axios";
import Cookies from "universal-cookie";

const urlAuth = process.env.REACT_APP_API_AUTH_KEY;

const cookies = new Cookies();

export const verify = async () => {
  try {
    const {
      data: { data },
    } = await axios.post(`${urlAuth}/protected`, {
      id: cookies.get("id"),
      token: cookies.get("token"),
      refreshToken: cookies.get("refreshToken"),
    });
    return data;
  } catch (error) {
    return error;
  }
};

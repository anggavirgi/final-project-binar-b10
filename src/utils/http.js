import axios from "axios";
import { CookiesKeys, CookieStorage } from "./cookies";

// const getToken = CookieStorage.get(CookiesKeys.JwtToken);
const url = "https://binar-academy-final-project.vercel.app"

  // baseURL: process.env.REACT_APP_SERVER,
const http = axios.create({
  baseURL: url,
  timeout: 30000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${CookieStorage.get(CookiesKeys.AuthToken) || ""}`,
  },
});

http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${
      CookieStorage.get(CookiesKeys.AuthToken)
        ? CookieStorage.get(CookiesKeys.AuthToken)
        : ""
    }`,
  };
  return config;
});

export default http;

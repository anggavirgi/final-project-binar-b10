import axios from "axios";
import { CookieStorage, CookiesKeys } from "./cookies";

// const getToken = CookieStorage.get(CookiesKeys.JwtToken);

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    accept: "application/json",
    // Authorization: `Bearer ${CookieStorage.get(CookiesKeys.AuthToken) || ""}`,
  },
});

//vercel
const http2 = axios.create({
  baseURL: process.env.REACT_APP_SERVER2,
  timeout: 30000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${CookieStorage.get(CookiesKeys.AuthToken) || ""}`,
  },
});

// http.interceptors.request.use((config) => {
//   config.headers = {
//     ...config.headers,
//     Authorization: `Bearer ${CookieStorage.get(CookiesKeys.AuthToken) || ""}`,
//   };

//   return config;
// });

//vercel
http2.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${CookieStorage.get(CookiesKeys.AuthToken) || ""}`,
  };

  return config;
});

export { http, http2 };

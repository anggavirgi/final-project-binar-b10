import axios from "axios";
// import { CookieStorage, CookiesKeys } from "./cookies";

// const getToken = CookieStorage.get(CookiesKeys.JwtToken);

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    accept: "application/json",
  },
});

// http.interceptors.request.use((config) => {
//   config.headers = {
//     ...config.headers,
//     Authorization: `Bearer ${getToken ? getToken : ""}`,
//   };

//   return config;
// });

export { http };

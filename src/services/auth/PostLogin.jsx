import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookiesKeys, CookieStorage } from "../../utils/cookies";

const LoginUser = async (input) => {
  return await http
    .post(API_ENDPOINT.LOGIN_USER, input)
    .then((result) => {
      CookieStorage.set(CookiesKeys?.AuthToken, result?.data?.data?.token);
      console.log(result?.data?.data?.user?.role, "role kah ");
      const userRole = result?.data?.data?.user?.role;

      if (userRole === "user") {
        window.location.href = "/home";
      } else if (userRole === "admin") {
        window.location.href = "/admin";
      }

      return result?.data;
    })
    .catch((err) => {
      console.log(err?.response?.data?.error, "err login");
      // alert(err.response.data.error);
      throw new Error(err.response.data.error);
    });
};

const useLoginUser = () => {
  return useMutation(LoginUser);
};

export { LoginUser, useLoginUser };

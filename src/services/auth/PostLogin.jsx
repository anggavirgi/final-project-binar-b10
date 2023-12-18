import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookiesKeys, CookieStorage } from "../../utils/cookies";

const LoginUser = async (input) => {
  return await http
    .post(API_ENDPOINT.LOGIN_USER, input)
    .then((result) => {
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      window.location.href = "/home";
    })
    .catch((err) => {
      return err;
    });
};

const useLoginUser = () => {
  return useMutation(LoginUser);
};

export { LoginUser, useLoginUser };

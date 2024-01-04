import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import http from "../../utils/http";

const registerUser = async (input) => {
  return await http
    .post(API_ENDPOINT.USER_REGISTER, input)
    .then((result) => {
      console.log(result.data.data.token);
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      // Langsung navigasi setelah token disimpan
      window.location.href = "/otp";
      return result.data;
    })
    .catch((err) => {
      console.log(err.response.data.error, "err register user");
      throw new Error(err.response.data.error);
    });
};

const useRegisterUser = () => {
  return useMutation(registerUser);
};

export { registerUser, useRegisterUser };

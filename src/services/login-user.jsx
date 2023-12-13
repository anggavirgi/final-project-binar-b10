import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";
import { Navigate } from "react-router-dom";
import { CookieStorage, CookiesKeys } from "../utils/cookies";

const LoginUser = async (input) => {
  console.log("input", input);
  return await http
    .post(API_ENDPOINT.LOGIN_USER, input)
    .then((result) => {
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      // window.location.href = "/dashboard";
      // toast.success("anda berhasil login");
      // Navigate("/dashboard");
      return result;
    })
    .catch((err) => {
      if (err.response.data.message === "Wrong password") {
        toast.warning("Password atau Email Salah");
      } else if (err.response.data.message === "User is not found") {
        toast.warning("pengguna tidak di temukan");
      } else if (err.response.data.message === "Email is not valid") {
        toast.warning("email tidak benar atau salah");
      } else {
        toast.warning("Password atau Email Tidak di isi");
      }
    });
};

const useLoginUser = () => {
  return useMutation(LoginUser);
};
export { LoginUser, useLoginUser };

import { useMutation } from "@tanstack/react-query";
import { http2 } from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const ResendOTP = async (email) => {
  // Ganti parameter menjadi email
  return await http2
    .post(API_ENDPOINT.RESEND_OTP, { email }) // Menggunakan properti email untuk request
    .then((result) => {
      console.log("OTP berhasil dikirim kembali:", result.data.message);
      alert(result.data.message);
      return result.data.message;
    })
    .catch((err) => {
      throw new Error("Gagal mengirimkan OTP");
    });
};

const useReSendOTP = () => {
  return useMutation(ResendOTP);
};

export { ResendOTP, useReSendOTP };

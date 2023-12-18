import { CookieStorage, CookiesKeys } from "./cookies";

const jwtToken = CookieStorage.get(CookiesKeys.JwtToken);

export const API_ENDPOINT = {
  POST_SEND_EMAIL: "/auth/reset-password",
  PUT_RESET_PASSWORD: `/auth/reset-password?token=${jwtToken ? jwtToken : ""}`,
  LOGIN_USER: "/auth/login",
  GET_ME: "/auth/whoami",
  GET_CATEGORY: "/category",
  GET_COURSE: "/course",
  GET_COURSE_ID: "/course/",
  POST_PAYMENT: "/payment",
  POST_PAYMENT_CHECKOUT: "/payment/checkout",
};

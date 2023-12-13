import { CookieStorage, CookiesKeys } from "./cookies";

const jwtToken = CookieStorage.get(CookiesKeys.JwtToken);
export const API_ENDPOINT = {
  POST_SEND_EMAIL: "/auth/reset-password",
  PUT_RESET_PASSWORD: `/auth/reset-password?token=${jwtToken ? jwtToken : ""}`,
};

import { CookieStorage, CookiesKeys } from "./cookies";

const jwtToken = CookieStorage.get(CookiesKeys.JwtToken);

export const API_ENDPOINT = {
  POST_SEND_EMAIL: "/auth/reset-password",
  PUT_RESET_PASSWORD: `/auth/reset-password?token=${jwtToken ? jwtToken : ""}`,
  LOGIN_USER: "/auth/login",
  GET_ME: "/auth/whoami",
  GET_CATEGORY: "/category",
  GET_COURSE: "/course",
  POST_COURSE: "/course/addCourse",
  GET_COURSE_ID: "/course/",
  GET_MENTOR: "/mentor",
  GET_PAYMENT: "/payment",
  POST_PAYMENT_CHECKOUT: "/payment/checkout",
  USER_REGISTER: "/auth/register",
  VERIFY_OTP: "/auth/verify-otp",
  RESEND_OTP: "/auth/resend-otp",
  GET_USER: "/profile/account",
  UPDATE_USER: "/profile/updateProfile",
  GANTI_PASSWORD_USER: "/profile/changePassword",
  RIWAYAT_PEMBAYARAN_USER: "/profile/paymentHistory",
  NOTIFIKASI_USER: "/notification/myNotifications",
  PUT_VIDEO: "/course-progress/progress",
  PROGRESS_COURSE: "/course-progress/myProgress",
  GET_RATING: "/rating",
};

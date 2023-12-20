import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

export const GetCourse = async () => {
  return await http.get(API_ENDPOINT.COURSE);
};

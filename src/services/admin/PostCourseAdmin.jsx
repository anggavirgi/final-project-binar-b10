import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const fetchPostCourse = async (input) => {
  return await http.post(API_ENDPOINT.POST_COURSE, input);
};

export const usePostCourse = () => {
  return useMutation(fetchPostCourse);
};

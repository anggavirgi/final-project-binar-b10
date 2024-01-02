import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

export const fetchPostVideo = async (input) => {
  console.log(input);
  return await http.post(API_ENDPOINT.POST_VIDEO_ADMIN, input);
};

export const usePostVideo = () => {
  return useMutation(fetchPostVideo);
};

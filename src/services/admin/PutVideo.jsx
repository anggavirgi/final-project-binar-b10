import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

export const fetchPutVideo = async (input) => {
  return await http.put(API_ENDPOINT.PUT_VIDEO_ADMIN, input);
};

export const usePutVideo = () => {
  return useMutation(fetchPutVideo);
};

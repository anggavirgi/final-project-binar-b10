import http from "../../utils/http"
import { API_ENDPOINT } from "../../utils/api-endpoint"
import { useQuery } from "@tanstack/react-query";

export const fetchDeleteVideo = async({queryKey}) => {
  const [_key, _params] = queryKey;
  
  console.log(`${_key}${_params.video_id}`);
  // const { data } = await http.get(`${_key}${_params.video_id}`);

  // return data;
}

export const useDeleteVideo = (options) => {
  return useQuery([API_ENDPOINT.DELETE_VIDEO_ADMIN, options], fetchDeleteVideo);
}
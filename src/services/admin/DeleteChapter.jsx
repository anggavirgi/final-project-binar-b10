import http from "../../utils/http"
import { API_ENDPOINT } from "../../utils/api-endpoint"
import { useQuery } from "@tanstack/react-query";

export const fetchDeleteChapter = async({queryKey}) => {
  const [_key, _params] = queryKey;
  
  console.log(`${_key}${_params.chapter_id}`);
  // const { data } = await http.get(`${_key}${_params.video_id}`);

  // return data;
}

export const useDeleteChapter = (options) => {
  return useQuery([API_ENDPOINT.DELETE_CHAPTER, options], fetchDeleteChapter);
}
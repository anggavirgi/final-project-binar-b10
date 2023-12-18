import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const fetchCourseDetail = async ({ queryKey }) => {
  const [_key, _params] = queryKey;

  const { data } = await http.get(_key + _params.course_id);

  return data
};

export const useCourseDetail = (options) => {
  return useQuery([API_ENDPOINT.GET_COURSE_ID, options], fetchCourseDetail);
};

import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const fetchCourse = async () => {
  return await http
    .get(API_ENDPOINT.GET_COURSE)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      throw err;
    });
};

export const useCourse = () => {
  return useQuery([API_ENDPOINT.GET_COURSE], fetchCourse);
};

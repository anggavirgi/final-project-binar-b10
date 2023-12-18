import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

export const fetchCategory = async () => {
  return await http
    .get(API_ENDPOINT.GET_CATEGORY)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      throw err;
    });
};

export const useCategory = () => {
  return useQuery([API_ENDPOINT.GET_CATEGORY], fetchCategory);
};

import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getCategories = async (limit) => {
  const { data } = await http
  .get(`${API_ENDPOINT.CATEGORY}?limit=${limit}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetCategories = (limit, options) => {
  return useQuery({
    queryKey: ['category', { limit, ...options }],
    queryFn: () => getCategories(limit),
  });
};

export { getCategories, useGetCategories };

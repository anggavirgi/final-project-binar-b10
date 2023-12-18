import { useQuery } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http from "../../utils/http"

export const fetchMe = async () => {
  return await http.get(API_ENDPOINT.GET_ME).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });
}

export const useMe = () => {
  return useQuery([API_ENDPOINT.GET_ME], fetchMe)
}
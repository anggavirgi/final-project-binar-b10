import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const fetchPayment = async () => {
  return await http.get(API_ENDPOINT.GET_PAYMENT);
};

export const usePayment = () => {
  return useQuery([API_ENDPOINT.GET_PAYMENT], fetchPayment);
};

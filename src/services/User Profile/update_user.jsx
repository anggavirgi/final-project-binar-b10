import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const UpdateUser = async (input) => {
  return await http
    .put(API_ENDPOINT.UPDATE_USER, input)
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

const useUpdateUser = () => {
  return useMutation(UpdateUser, {});
};

export { UpdateUser, useUpdateUser };
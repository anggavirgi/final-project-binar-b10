import { useMutation } from "@tanstack/react-query"
import http from "../../utils/http"
import { API_ENDPOINT } from "../../utils/api-endpoint"

export const fetchDeleteCourse = async({course_id}) => {
  return await http.delete(API_ENDPOINT.DELETE_COURSE + course_id).then((result) => {
    return result
  }).catch((err) => {
    return err
  });
}

export const useDeleteCourse = () => {
  return useMutation(fetchDeleteCourse)
}
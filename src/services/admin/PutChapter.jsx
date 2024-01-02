import { useMutation } from "@tanstack/react-query"
import http from "../../utils/http"
import { API_ENDPOINT } from "../../utils/api-endpoint"

export const fetchPutChapter = async(input) => {
  return await http.put(API_ENDPOINT.PUT_COURSE, input)
}

export const usePutChapter = () => {
  return useMutation(fetchPutChapter)
}
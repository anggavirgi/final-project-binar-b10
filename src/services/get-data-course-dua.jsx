import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const getCoursesAll = async (search, limit, categoryIds, levels) => {
  const categoryParams = categoryIds.map((categoryId) => `category_ids=${categoryId}`).join("&");
  const levelParams = levels.map((level) => `level=${level}`).join("&");
  
  const { data } = await http
  .get(`${API_ENDPOINT.COURSE}?search=${search}&limit=${limit}&${categoryParams}&${levelParams}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  return data;
};

const useGetCourses = (search, limit, categoryIds, levels, options) => {
  return useQuery({
    queryKey: ['course', { search, limit, categoryIds, levels, ...options }],
    queryFn: () => getCoursesAll(search, limit, categoryIds, levels),
  });
};

export { getCoursesAll, useGetCourses };

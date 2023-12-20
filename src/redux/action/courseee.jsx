import { GetCourse } from "../../services/get-data-course";
import { setcourse } from "../reducer/course";

export const getCourse = () => async (dispatch) => {
  return GetCourse()
    .then((Response) => {
      const course123 = Response.data.data;
      return course123;
    })
    .catch((err) => {});
};

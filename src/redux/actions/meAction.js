import { fetchMe } from "../../services/auth/GetMe";
import {
  setEmail,
  setId,
  setName,
  setRole,
  setlistCourse,
} from "../reducers/auth/meReducer";

export const getDataMe = () => (dispatch) => {
  return fetchMe()
    .then((result) => {
      dispatch(setId(result.data.data.user.account_id));
      dispatch(setName(result.data.data.user.nama));
      dispatch(setEmail(result.data.data.user.email));
      dispatch(setRole(result.data.data.user.role));
      dispatch(setlistCourse(result.data.data.listCourse));
      return result;
    })
    .catch((err) => {
      throw err;
    });
};

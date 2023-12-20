import { combineReducers } from "@reduxjs/toolkit";
import CourseSlice from "./course";

export default combineReducers({
  course: CourseSlice,
});

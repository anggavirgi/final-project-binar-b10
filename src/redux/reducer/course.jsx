import { createSlice } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
  name: "course",
  initialState: {
    course: [],
  },
  reducers: {
    setcourse(state, action) {
      state.belajar = action.payload;
    },
  },
});
export const { setcourse } = CourseSlice.actions;

export default CourseSlice.reducer;

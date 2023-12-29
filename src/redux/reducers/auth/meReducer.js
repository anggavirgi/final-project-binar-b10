import { createSlice } from "@reduxjs/toolkit";

const meSlice = createSlice({
  name: "User",
  initialState: {
    id_user: "",
    name: "",
    email: "",
    role: "",
    listCourse: [],
  },
  reducers: {
    setId: (state, action) => {
      state.id_user = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setlistCourse: (state, action) => {
      state.listCourse = action.payload;
    },
  },
});

export const { setId, setName, setEmail, setRole, setlistCourse } = meSlice.actions;

export default meSlice.reducer;

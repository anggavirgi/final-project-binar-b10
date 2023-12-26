import { createSlice } from "@reduxjs/toolkit";

const meSlice = createSlice({
  name: "User",
  initialState: {
    id_user: "",
    name: "",
    email: "",
    role: "",
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
  },
});

export const { setId, setName, setEmail, setRole } = meSlice.actions;

export default meSlice.reducer;
